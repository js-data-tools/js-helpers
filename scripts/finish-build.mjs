import { writeFile } from "node:fs/promises";

await writeFile(
    new URL("../dist/csj/package.json", import.meta.url),
    `${JSON.stringify({ type: "commonjs" }, null, 2)}\n`
);
