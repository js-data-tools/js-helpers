# Developer Guide

This guide is for contributors developing and releasing `@js-data-tools/js-helpers`.

## Prerequisites

- Node.js 24 (the version used by CI)
- pnpm 11 or newer

Install the dependencies from the repository root:

```sh
pnpm install --frozen-lockfile
```

Use pnpm when changing dependencies and commit the resulting `package.json` and
`pnpm-lock.yaml` changes together.

## Repository layout

- `src/` contains the TypeScript source. Tests are colocated with the source as
  `*.test.ts` files.
- `dist/` contains generated CommonJS, ES module, and declaration outputs. Do
  not edit it by hand.
- `docs/ref/` contains generated API reference documentation.
- `.github/workflows/` contains the CI and release workflows.

## Development checks

### Build

```sh
pnpm build
```

The build removes the existing `dist/` directory and generates:

- CommonJS modules in `dist/csj/`
- ES modules in `dist/esm/`
- TypeScript declarations in `dist/types/`

To check TypeScript without emitting files, run:

```sh
pnpm check-syntax
```

### Tests

Run the test suite once:

```sh
pnpm test
```

During development, run Vitest in watch mode:

```sh
pnpm test:watch
```

To produce the same coverage run used by CI:

```sh
pnpm test:coverage
```

After building, verify the package exactly as consumers receive it:

```sh
pnpm test:package
```

This packs the package into a temporary directory, installs the tarball, and
checks both ECMAScript module `import` and CommonJS `require` entry points.

Add or update a colocated `*.test.ts` file for every behavioral change. Keep
tests deterministic and cover both normal behavior and relevant edge cases.

### Lint

Check the source with ESLint:

```sh
pnpm lint
```

Apply ESLint's automatic fixes where possible:

```sh
pnpm lint:fix
```

Before opening a pull request, run the complete local validation set:

```sh
pnpm lint
pnpm check-syntax
pnpm test:coverage
pnpm build
pnpm test:package
```

CI runs this complete validation set for every push and pull request.

## Versioning and changelog

The package follows [Semantic Versioning](https://semver.org/):

- **Patch** (`1.1.0` to `1.1.1`) for backward-compatible bug fixes.
- **Minor** (`1.1.0` to `1.2.0`) for backward-compatible features.
- **Major** (`1.1.0` to `2.0.0`) for breaking API or behavior changes.

Release Please manages the version in `package.json`, release tags, GitHub
releases, and `CHANGELOG.md`. Normal contribution pull requests should not
manually change the package version or add release headings to the changelog.

Write commit messages using the Conventional Commits format so Release Please
can classify changes correctly. Common examples are:

```text
fix: handle an empty input iterator
feat: add a date normalization helper
docs: clarify JSON Lines parsing
```

Use `fix:` for a patch and `feat:` for a minor release. Mark a breaking change
with `!`, and explain it in a `BREAKING CHANGE:` footer:

```text
feat!: remove the deprecated conversion API

BREAKING CHANGE: callers must use the replacement conversion helpers.
```

Keep pull requests focused and describe user-visible behavior in their title
and body. Squash-merge titles should also follow Conventional Commits because
the commits on `master` drive the generated changelog.

## Releasing a version

Releases are automated from the `master` branch:

1. Merge eligible Conventional Commit changes into `master`.
2. The `release-please` workflow creates or updates a release pull request. It
   collects releasable changes and proposes the next version and changelog.
3. Review the release pull request, especially its version and changelog, and
   merge it when the release is ready.
4. On the resulting push to `master`, Release Please creates the Git tag and
   GitHub release.
5. If a release was created, the workflow installs dependencies with the frozen
   lockfile and publishes the package to npm.

Do not create release tags or run `pnpm publish` manually during the normal
release process. Publishing requires the repository's `NPM_TOKEN` secret. If
the publish step fails, inspect and rerun the failed GitHub Actions job after
fixing the underlying problem; do not create a duplicate release.

## Continuous integration

The `CI` workflow (`.github/workflows/ci.yml`) runs for pushes, pull requests,
and manual dispatches. It:

1. checks out the repository on Ubuntu;
2. installs pnpm 11 and Node.js 24;
3. restores the pnpm dependency cache;
4. installs dependencies with `pnpm install --frozen-lockfile`;
5. runs lint, type checking, and coverage tests;
6. builds the package;
7. packs and tests both ESM and CommonJS consumption; and
8. uploads coverage to Codecov, failing the job if the upload fails.

Only the newest CI run for the same workflow and Git reference is retained;
older in-progress runs are cancelled. A CI job has a 15-minute timeout.

The separate `release-please` workflow (`.github/workflows/release.yaml`) runs
only on pushes to `master`. Its release jobs are serialized rather than
cancelled so that two updates cannot interrupt an in-progress release. The
workflow needs write access to repository contents and pull requests, while the
regular CI workflow has read-only repository access.
