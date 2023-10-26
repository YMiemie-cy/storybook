import BaseView from "./BaseView.js";
class ChoiceColumn extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    this.element.id = this.name;

    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;

    this.element.innerHTML = `
    <div  style="
    border-radius: 2px;
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid rgba(127, 129, 136, 0.5);
    box-sizing: border-box;
    overflow: hidden">
        <div class="container">
        </div>
        <div  style="
        background: #2a2d38;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;"></div>
        <div  style="
        background: rgba(60, 65, 78, 0.4);
        border-radius: 4px;
        border-width: 0.8px;
        border-style: solid;
        border-image: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.24) 0%,
          rgba(156, 129, 242, 0.2) 100%
        );
        border-image-slice: 1;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;"></div>
        <div  style="
        background: radial-gradient(
            closest-side,
            rgba(18, 18, 18, 0.55) 0%,
            rgba(18, 18, 18, 0) 100%
          );
          border-radius: 50%;
          width: 117%;
          height: 115%;
          position: absolute;
          left: -9%;
          top: -6%;"></div>
        <div style="
        background: radial-gradient(
            closest-side,
            rgba(245, 133, 122, 0.06) 0%,
            rgba(18, 18, 18, 0) 100%
          );
          border-radius: 50%;
          width: 28%;
          height: 87%;
          position: absolute;
          left: 67%;
          top: 27%;"></div>
        <div  style="
        background: radial-gradient(
            closest-side,
            rgba(245, 133, 122, 0.16) 0%,
            rgba(18, 18, 18, 0) 100%
          );
          border-radius: 50%;
          width: 32%;
          height: 21%;
          position: absolute;
          left: 1%;
          top: -13%;"></div>
        <div  style="
        background: radial-gradient(
            closest-side,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          width: 30%;
          height: 0.6%;
          position: absolute;
          left: 0.9%;
          top: 0px;"></div>
    </div>
  

    `;

    let styleTag = document.createElement("style");
    styleTag.textContent = `
    #${this.name}{
        box-sizing: border-box;
        overflow-x: auto;
        // border: 1px solid rgba(127, 129, 136, 0.5);
        border: solid 1px transparent;
        border-radius: 4px;
    }
#${this.name} .container{
    position: absolute;
    width: 100%; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    box-sizing: border-box;
    padding: 3px !important;
    z-index: 1;
   
}
#${this.name}::webkit-scrollbar {
                width: 0; 
            }
#${this.name} .container div{
    height: 100%;
    width: 80px;

    cursor: pointer;
    box-sizing: border-box;
    padding: 2px;
    border-radius: 4px;
    border: dashed 1px transparent;
}
#${this.name} .container .active{
    border: dashed 1px white;
   
}


  
    
    `;
    document.head.appendChild(styleTag);

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.content) {
      this.content.list.forEach((item, index) => {
        let div = document.createElement("div");
        div.classList.add("container-item");
        div.style.cssText = `
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
        `;
        if (this.attributes.default && this.attributes.default == index) {
          div.classList.add("active");
        }
        div.setAttribute("data-name", index);
        let img = document.createElement("div");
        img.style.cssText = `
            background: url('${item.url}')no-repeat center center / cover;
            width: 100%;
            height: 100%;
        `;
        div.appendChild(img);
        if (this.attributes.isTitleVisible === "true") {
          let p = document.createElement("p");
          p.innerHTML = item.title ? item.title : "";
          p.style.cssText = `
            color: #7F8188;
            margin-bottom: 0;
            font-size: 12px;
            margin-top: 2px;
          `;
          div.appendChild(p);
        } else {
        }

        this.element.querySelector(".container").appendChild(div);
      });
    }

    if (this.style) {
      for (const style in this.style) {
        this.element.style[style] = this.style[style];
      }
    }

    for (const action of this.actions) {
      console.log(action);

      if (action.script) {
        // Execute the script
        // let layerElement = this.element;
        // const scriptFunction = new Function(...action.data, action.script);
        // const functionCallString = `scriptFunction(${Array.from(
        //   action.data
        // ).join(", ")});`;
        // eval(functionCallString);
        // const functionCallString = `this.onClick(this.element, ${Array.from(
        //   action.data
        // ).join(", ")});`;
        if (!action.event) {
          let functionCallString;
          let layerElement = this.element;
          if (action.data) {
            action.data.forEach((item, index) => {
              if (item.includes("-Element")) {
                layerElement = document.querySelector(`#${item.split("-")[0]}`);
                console.log("domID", `#${item.split("-")[0]}`);
                action.data.splice(index, 1);
                action.data.unshift("layerElement");
              }
            });
            if (action.data.length > 0) {
              functionCallString = `${action.script.split(".")[0]}(${Array.from(
                action.data
              ).join(", ")})`;
            } else {
              functionCallString = `${action.script.split(".")[0]}()`;
            }
            console.log(functionCallString);
          } else {
            functionCallString = `${action.script.split(".")[0]}()`;
          }
          eval(functionCallString);
        }
      } else if (action.script && action.data) {
        // Define the function
        window[action.script] = new Function(...action.data, action.content);
      } else if (action.script) {
        // Define the function
        window[action.script] = new Function(action.content);
      }
    }

    const domElement = this.element;

    // 获取父级容器
    let parentContainer;

    if (parent === "layers") {
      parentContainer = document.querySelector("#container");
    } else if (parent === undefined) {
      return domElement;
    } else {
      parentContainer = document.querySelector(`#${parent}`);
    }

    // 创建DOM并添加到父级容器

    parentContainer.appendChild(domElement);

    this.renderingStyle(this.element, this.name);

    /** script */
    if (this.scripts) {
      this.scripts.forEach((item) => {
        let script = document.createElement("script");
        script.src = item;
        document.body.appendChild(script);
      });
    }
  }
  renderingStyle(dom, id) {
    console.log("renderingStyle", dom, id);
    dom
      .querySelectorAll(`.container .container-item > div:nth-of-type(1)`)
      .forEach((item) => {
        item.addEventListener("click", () => {
          dom
            .querySelectorAll(
              ".container  .container-item > div:nth-of-type(1)"
            )
            .forEach((item2) => {
              item2.classList.remove("active");
            });

          event.currentTarget.classList.add("active");
        });
      });
  }
  handleActions(arr) {}

  handleAnimation() {
    // 处理按钮的动画逻辑
    console.log("处理按钮的动画");
  }

  onClick(ele) {}
}
export default ChoiceColumn;
