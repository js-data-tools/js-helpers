import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const packageName = "@js-data-tools/js-helpers";
const packageManagerCli = process.env.npm_execpath;
const temporaryDirectory = await mkdtemp(join(tmpdir(), "js-helpers-package-test-"));

try {
    assert(packageManagerCli, "The package-manager CLI path is unavailable");

    execFileSync(
        process.execPath,
        [packageManagerCli, "pack", "--silent", "--pack-destination", temporaryDirectory],
        { stdio: "inherit" }
    );

    const packageFiles = (await readdir(temporaryDirectory)).filter((file) => file.endsWith(".tgz"));
    assert.equal(packageFiles.length, 1, "Expected npm pack to create exactly one tarball");
    const packageFile = packageFiles[0];

    const consumerDirectory = join(temporaryDirectory, "consumer");
    await writeFile(join(temporaryDirectory, "package.json"), `${JSON.stringify({ private: true }, null, 2)}\n`);
    execFileSync(
        process.execPath,
        [
            packageManagerCli,
            "add",
            "--silent",
            "--ignore-scripts",
            "--lockfile=false",
            join(temporaryDirectory, packageFile),
        ],
        { cwd: temporaryDirectory, stdio: "inherit" }
    );

    await writeFile(
        `${consumerDirectory}.mjs`,
        `import { ipv4AsNumber } from "${packageName}";\n` +
            `if (ipv4AsNumber("127.0.0.1") !== 2130706433) process.exit(1);\n`
    );
    await writeFile(
        `${consumerDirectory}.cjs`,
        `const { ipv4AsNumber } = require("${packageName}");\n` +
            `if (ipv4AsNumber("127.0.0.1") !== 2130706433) process.exit(1);\n`
    );

    execFileSync(process.execPath, [`${consumerDirectory}.mjs`], { cwd: temporaryDirectory, stdio: "inherit" });
    execFileSync(process.execPath, [`${consumerDirectory}.cjs`], { cwd: temporaryDirectory, stdio: "inherit" });
} finally {
    await rm(temporaryDirectory, { recursive: true, force: true });
}
