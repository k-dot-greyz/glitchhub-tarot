// Dynamic chunk indexing system with fast lookup and metadata
class ChunkIndex {
  constructor() {
    this.index = new Map();
  }

  addChunk(chunkId, metadata) {
    this.index.set(chunkId, metadata);
  }

  getChunk(chunkId) {
    return this.index.get(chunkId);
  }

  findChunksByTag(tag) {
    return Array.from(this.index.entries()).filter(
      ([_, meta]) => meta.tags && meta.tags.includes(tag)
    );
  }

  updateChunk(chunkId, updatedMeta) {
    if (this.index.has(chunkId)) {
      const meta = this.index.get(chunkId);
      this.index.set(chunkId, { ...meta, ...updatedMeta });
    }
  }

  removeChunk(chunkId) {
    this.index.delete(chunkId);
  }
}

module.exports = { ChunkIndex };

