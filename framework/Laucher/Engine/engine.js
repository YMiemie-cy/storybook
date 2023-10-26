class BaseEngine {
  constructor() {
    this.currentLive = null;
    this.error = null;
  }

  on_loading(callback) {
    a;
    callback();
    console.log("Loading...");
  }

  on_beforeRendering(callback) {
    callback();
    console.log("Rendering...");
  }

  on_rendering(callback) {
    callback();
    console.log("Rendering...");
  }

  on_end(callback) {
    callback();
    console.log("Run ended.");
  }
}

export default BaseEngine;
