// Document chunking utility with semantic boundaries
const MAX_CHUNK_SIZE = 2048; // words
const MIN_CHUNK_SIZE = 512; // words

function chunkDocument(text) {
  const sentences = text.split(/(?<=[.?!])\s+/);
  const chunks = [];
  let chunk = [];
  let chunkLength = 0;

  for (const sentence of sentences) {
    const sentenceLength = sentence.split(' ').length;
    if (chunkLength + sentenceLength > MAX_CHUNK_SIZE && chunkLength >= MIN_CHUNK_SIZE) {
      chunks.push(chunk.join(' '));
      chunk = [];
      chunkLength = 0;
    }
    chunk.push(sentence);
    chunkLength += sentenceLength;
  }

  if (chunk.length > 0) chunks.push(chunk.join(' '));
  return chunks;
}

module.exports = { chunkDocument };

