class BaseView {
  constructor(element, options = {}) {
    this.element = element;
    this.name = options.name || "";
    this.frame = options.frame || {};
    this.attributes = options.attributes || {};
    this.class = options.class || [];
    this.content = options.content || {};
    this.style = options.style || {};
    this.actions = options.actions || [];
    this.children = options.children || [];
    this.scripts = options.scripts || [];

    this.registerBasicEvents();
  }
  startDrawing(parent) {
    this.element.id = this.name;
    // this.element.style.position = "relative";
    this.element.style.minWidth = this.frame.width;
    this.element.style.minHeight = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;
    this.element.style.zIndex = this.frame.zIndex;

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }
    if (this.style) {
      for (const style in this.style) {
        if (style.includes("background-color")) continue;
        this.element.style[style.trim()] = this.style[style];
      }
    }

    if (parent !== "layers") {
      console.log(
        "document.querySelector(`#${parent}`).appendChild(this.element);",
        document.querySelector(
          "#editor .components  .component-item:nth-of-type(1)"
        )
      );
      document.querySelector(`#${parent}`).appendChild(this.element);
    } else if (parent === "BookmarkPage") {
      document.querySelector(`#${parent}`).appendChild(this.element);
    } else {
      document.querySelector("#container").appendChild(this.element);
    }
  }
  registerBasicEvents() {
    this.element.addEventListener("click", this.onClick.bind(this));
    this.element.addEventListener("mouseover", this.onMouseOver.bind(this));
    this.element.addEventListener("mouseout", this.onMouseOut.bind(this));
  }

  onClick(event) {
    // console.log("Click event on:", this.element);
  }

  onMouseOver(event) {
    // console.log("Mouse over event on:", this.element);
  }

  onMouseOut(event) {
    // console.log("Mouse out event on:", this.element);
  }
}

export default BaseView;
