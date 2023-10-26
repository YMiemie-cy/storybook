import BaseView from "./BaseView.js";
import BookmarkPage from "./BookmarkPage.js";
import Button from "./Button.js";

class SideBar extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    const sidebar = document.querySelector("#sidebar");
    sidebar.innerHTML = `
    
        <div class="contain">
       
        </div>

        <div class="btn" id="toggleButton">
          <a
            href="javascript:void(0);;"
            
            style="
              color: transparent;
              background: linear-gradient(
                90deg,
                rgba(245, 133, 122, 1) 0%,
                rgba(255, 255, 255, 0.8) 100%
              );
              background-clip: text;
              -webkit-background-clip: text;
              transition: opacity 0.3s ease-in-out;
              overflow:hidden;
            "
            >More ></a
          >
          <img src="./framework/Assets/left-sidebar-button.svg" alt="" style="
          position: absolute;
          right: 0;
          top:0;
          cursor:pointer;
          transition: opacity 0.3s ease-in-out;
         opacity:0;
          overflow:hidden;
          "/>
        </div>
   
`;
    const BookmarkPageElement = document.createElement("div");
    const tem = new BookmarkPage(BookmarkPageElement, {
      name: "BookmarkPage",
      frame: {
        width: "129px",
        height: "100%",
      },
      attributes: {},
      content: {
        list: ["Guide", "Library"],
        sidebar: this.content.list,
      },
      style: {},
      actions: [],
    });
    tem.startDrawing("sidebar .contain");

    const buttonElement = document.createElement("div");
    let btn = new Button(buttonElement, {
      name: "",
      frame: {},
      attributes: { type: "timelyImportant" },
      content: { text: "Open Folder" },
      style: {
        "font-size": "8px",
      },
      actions: [],
      scripts: [],
    });
    btn.startDrawing("content-2 .open-btn");

    if (this.attributes) {
      for (const attr in this.attributes) {
        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    this.element.id = this.name;

    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;

    this.element.classList.add("sidebar");

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.content) {
    }

    if (this.style) {
      for (const style in this.style) {
        this.element.style[style] = this.style[style];
      }
    }

    for (const action of this.actions) {
      console.log(action);

      if (action.script) {
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

    let styleTag = document.createElement("style");
    styleTag.textContent = `
    #sidebar {
      height: 100vh;
      width: 72px;
      background-color: #252831;
      color: white;
      display:flex;
      border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(157, 127, 245, 0.5) 38.54166567325592%,
    rgba(250, 124, 112, 0.5) 59.375%,
    rgba(255, 255, 255, 0) 100%
  );
  border-image-slice: 1;
 

      text-align: center;
    }

    #sidebar a {
    
      text-decoration: none;
      color: white;
      display: block;

    }
    #sidebar  .tab-content .content{
      display:none;
    }
    #sidebar  .tab-content .content.active{
      display:block;
    }

    .contain {
      transition: width 0.3s ease-in-out;
      overflow:hidden;
      width: 0%;
      height: 100%;
      display:flex;
      flex-direction: column;
      box-sizing:border-box;
      align-items:center;
      

    }

    
    .btn {
      position: relative;
      top: 50%;
      width: 100%;
      height: 50%;
      right: 0;
      transition: width 0.3s ease-in-out;
    }
    `;
    document.head.appendChild(styleTag);

    const sidebarContent = sidebar.querySelector(".contain");
    const toggleButton = sidebar.querySelector("#toggleButton");
    const openButton = toggleButton.querySelector("a");
    const closeButton = toggleButton.querySelector("img");

    openButton.addEventListener("click", () => {
      if (sidebar.style.width === "236px") {
        sidebar.style.width = "72px";
        sidebarContent.style.width = "0%";

        openButton.style.opacity = "1";
        closeButton.style.opacity = "0";
        toggleButton.style.width = "100%";
      } else {
        sidebar.style.width = "236px";
        sidebarContent.style.width = "100%";

        openButton.style.opacity = "0";
        closeButton.style.opacity = "1";
        toggleButton.style.width = "22px";
      }
    });

    closeButton.addEventListener("click", () => {
      if (sidebar.style.width === "236px") {
        sidebar.style.width = "72px";
        sidebarContent.style.width = "0%";

        openButton.style.opacity = "1";
        closeButton.style.opacity = "0";
        toggleButton.style.width = "100%";
      } else {
        sidebar.style.width = "236px";
        sidebarContent.style.width = "100%";

        openButton.style.opacity = "0";
        closeButton.style.opacity = "1";
        toggleButton.style.width = "22px";
      }
    });
  }

  handleActions(arr) {
    for (let i = 0; i < arr.length; i++) {
      const action = arr[i];
      console.log(action);

      if (action.script) {
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
      }
    }
  }

  handleAnimation() {
    // 处理按钮的动画逻辑
    console.log("处理按钮的动画");
  }

  onClick(ele) {}
}
export default SideBar;
