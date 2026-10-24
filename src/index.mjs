import assert from 'node:assert/strict';
import { chunkMarkdown, createChunkRecordId } from '@x12i/memorix-corpus';

const markdown = '# Overview\n\nA retrieval-ready document.\n\n## Details\n\nThe source remains linked to each chunk.';
const chunks = chunkMarkdown(markdown);
assert(chunks.length > 0);
assert(chunks.some(chunk => chunk.text.includes('retrieval-ready')));
const rows = chunks.map(chunk => ({ id: createChunkRecordId('document-1', chunk.chunkIndex), ...chunk }));
assert.equal(new Set(rows.map(row => row.id)).size, rows.length);
console.log(rows);
