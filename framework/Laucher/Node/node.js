import BaseEngine from "../Engine/engine.js";

class Node extends BaseEngine {
  constructor() {
    super();
  }
  upload() {}
  click(callback) {
    callback();
  }
  getNode() {
    // document.querySelector()
  }
  init() {
    console.log("xxxx");
  }
}

export default Node;
