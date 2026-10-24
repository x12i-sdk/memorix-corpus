# @x12i/memorix-corpus usage example

Memorix corpus layer — conventions and helpers for extracted documents and web pages as knowledge-target records.

This consuming application demonstrates **split markdown into ordered retrieval chunks with stable record ids** using the published npm package, pinned to `1.32.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Represent an extracted document as a knowledge-target record.
- Apply the corpus conventions to a fetched web page.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-corpus)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
