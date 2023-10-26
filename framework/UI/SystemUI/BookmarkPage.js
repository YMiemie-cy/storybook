import BaseView from "./BaseView.js";

class BookmarkPage extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    // console.log("parent", this.element, parent);
    // 开始按钮的绘制逻辑
    // 解析JSON数据并创建DOM元素

    if (this.attributes) {
      for (const attr in this.attributes) {
        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    let ele = this.name;
    this.element.id = this.name;
    // this.element.style.position = "relative";
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;

    // this.element.style.display = "flex";
    // this.element.style.flexDirection = "column";
    // this.element.style.alignItems = "center";
    // this.element.style.boxSizing = "border-box";
    // this.element.style.borderRadius = "4px";
    this.element.classList.add("bookMarkPage-container");

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.content) {
      let tabs = document.createElement("div");
      tabs.classList.add("tabs");
      tabs.style.cssText = `
      display: flex;
      border-width:1px;
       border-radius:4px;
       overflow:hidden;
       width: 100%;
       height: 24px;
       color:#73777f;

      `;
      for (let i = 0; i < this.content.list.length; i++) {
        let tem = document.createElement("div");
        tem.classList.add("tab");
        tem.setAttribute("data-tab", `tab${i + 1}`);
        if (i !== 0) {
          tem.style.cssText = `
         flex:1;
         text-align: center;
          padding:2%;
            border-image-slice: 1;
            position: relative;
           box-sizing:border-box;
           cursor: pointer;
            border-top:1px dashed #C4C6CA;
            border-right:1px dashed #C4C6CA;
           border-bottom:1px dashed #C4C6CA;  
           display: flex;
    justify-content: center;
    align-items: center;   
    );`;
        } else {
          tem.classList.add("active");
          tem.style.cssText = `
          flex:1;
          text-align: center;
          padding:2%;
            border-image-slice: 1;
            position: relative;
           box-sizing:border-box;
           cursor: pointer;
           border:1px dashed #C4C6CA;
           display: flex;
    justify-content: center;
    align-items: center;     
    );`;
        }

        tem.innerHTML = `    
            ${this.content.list[i]}
        `;
        tabs.appendChild(tem);
      }
      this.element.appendChild(tabs);

      if (this.content.sidebar) {
        let tem = document.createElement("div");
        tem.classList.add("tab-content");
        tem.style.height = "100%";

        let tabW = document.createElement("div");
        tabW.classList.add("content");
        tabW.style.cssText = `
        height: 100%;
        
        `;
        tabW.id = `content-1`;
        let tabC = document.createElement("div");

        tabC.innerHTML = `${this.content.sidebar
          .map(
            (item, index) => `
              <div style="display: flex;margin-bottom: 20px;margin: 0  auto;">
              <div
                style="
                  background: url(./framework/Assets/sidebar-index.svg) no-repeat
                    center center;
                  background-size: contain;
                  width: 14px;
                  height: 14px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <div
                  style="
                    font-size: 10px;
                    color: transparent;
                    background: linear-gradient(
                      173.77deg,
                      rgba(156, 129, 242, 1) 0%,
                      rgba(255, 255, 255, 0.9) 100%
                    );
                    background-clip: text;
                    -webkit-background-clip: text;
                  "
                >
                  ${index + 1}
                </div>
              </div>
              <div style="text-align: left">
                <p style="margin:0; margin-left: 5px; font-size: 14px; color: #c5c6c9">
                  ${item.title}
                </p>
                <p style="margin-left: 5px; color: #7f8188; font-size: 10px">
                  ${item.content}
                </p>
                <img src="${item.image}" alt="" style="width:100%;" />
              </div>
            </div>
          `
          )
          .join("")}`;

        tabC.style.cssText = `
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        `;

        tabW.classList.add("active");
        tabW.appendChild(tabC);
        tem.appendChild(tabW);

        this.element.appendChild(tem);

        //
        let tabW2 = document.createElement("div");
        tabW2.classList.add("content");
        tabW2.style.cssText = `
        height: 100%;
        `;
        tabW2.id = `content-2`;
        let tabC2 = document.createElement("div");
        tabC2.style.cssText = `
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        `;
        tabC2.innerHTML = `
        <div
            style="
              display: flex;
              flex-direction: column;
              background: rgba(42, 45, 56, 0.2);
              border-radius: 6px;
              border-width: 1px;
              border-style: solid;
              border-color: rgba(255, 255, 255, 0.24);
              border-image-slice: 1;
              padding: 10px 5px;
              width:177px;
              height:268px;
            "
          >
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div style="color: #c4c6ca">Recent Images</div>
              <div class="open-btn" style="width: 53px;height: 14px;"></div>
            </div>
            <div class="contain-img" style="display: flex; flex-wrap: wrap;overflow-y:auto;">
             
            </div>
          </div>
          <div style="width: 180px; height: 126px; overflow:hidden; " class="show-img">
            <img
            
              style="height: 100%;width:100%;border-radius: 4px;object-fit: contain;"
              src=""
              alt=""
            />
          </div>
        `;

        tabW2.appendChild(tabC2);
        tem.appendChild(tabW2);

        this.element.appendChild(tem);
      } else {
        let tem = document.createElement("div");
        tem.classList.add("tab-content");
        for (let i = 0; i < this.content.list.length; i++) {
          let tabC = document.createElement("div");
          tabC.classList.add(
            "content",
            "draggable",
            "component-contain",
            "move"
          );
          tabC.id = `content-${i}`;
          tabC.innerText = ``;
          if (i === 0) {
            tabC.classList.add("active");
          }
          tem.appendChild(tabC);
        }
        this.element.appendChild(tem);
      }
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

    if (this.frame.color) {
      this.element.querySelector(".tabs").style.color = this.frame.color;
    }

    this.renderingStyle(this.element, this.name);
    // let styleTag = document.createElement("style");
    // styleTag.textContent = `
    // .contain-img::-webkit-scrollbar {
    //   width: 0.5em; /* 调整滚动条宽度 */
    // }

    // .contain-img::-webkit-scrollbar-track {
    //   background-color: transparent; /* 隐藏滚动条背景 */
    // }

    // .contain-img::-webkit-scrollbar-thumb {
    //   background-color: transparent; /* 隐藏滚动条滑块 */
    // }

    // .tab-content .content {
    //   display: none ;
    // }

    // .tab-content .content.active {
    //   display: block ;
    // }
    // .tab::after {
    //     content: "";
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     background-color: rgba(250, 124, 112, 0.1); /* 第二个颜色 */
    //   }

    //   .tab.active {
    //     color: #c4c6ca;
    //     border-width: 1px;
    //     border-style: solid;
    //     border-image: linear-gradient(
    //         68.08deg,
    //         rgba(255, 255, 255, 0.9) 0%,
    //         rgba(156, 129, 242, 1) 100%
    //       )
    //       1 !important;
    //     background-color: rgba(42, 45, 56, 0.5);
    //   }
    //   .tab.active::after {
    //     background-color: rgba(157, 127, 245, 0.1);
    //   }
    // `;

    // document.head.appendChild(styleTag);

    // const tabs = document.querySelectorAll(".tab");

    // tabs.forEach((tab) => {
    //   tab.addEventListener("click", (e) => {
    //     const tabId = tab.getAttribute("data-tab");

    //     const allTabs = document.querySelectorAll(".tab");
    //     const contents = document.querySelectorAll(".tab-content .content");

    //     // Remove 'active' class from all tabs and tab contents
    //     allTabs.forEach((t) => {
    //       t.classList.remove("active");

    //       let preId = tab.getAttribute("data-tab").split("tab")[1] - 1;
    //       t.style.borderRightWidth = "1px";
    //       if (t.getAttribute("data-tab").split("tab")[1] == preId) {
    //         t.style.borderRightWidth = "0";
    //       }
    //     });
    //     for (let i = 0; i < contents.length; i++) {
    //       if (i + 1 == tabId.split("tab")[1]) {
    //         contents[i].classList.add("active");
    //         tabs[i].classList.add("active");
    //       } else {
    //         contents[i].classList.remove("active");
    //         tabs[i].classList.remove("active");
    //       }
    //     }

    //     // Add 'active' class to the clicked tab and corresponding tab content
    //     tab.classList.add("active");

    //     e.target.style.borderRightWidth = "1px";
    //   });
    // });
  }
  renderingStyle(dom, id) {
    let styleTag = document.createElement("style");
    styleTag.textContent = `
    .bookMarkPage-container {
     position :relative;
   display :flex;
   flex-direction :column;
   align-items :center;
   box-sizing :border-box;
   border-radius :4px;
    }
  #${id} .contain-img::-webkit-scrollbar {
    width: 0.5em; /* 调整滚动条宽度 */
  }

  #${id} .contain-img::-webkit-scrollbar-track {
    background-color: transparent; /* 隐藏滚动条背景 */
  }

 #${id}  .contain-img::-webkit-scrollbar-thumb {
    background-color: transparent; /* 隐藏滚动条滑块 */
  }
  #${id} .tab-content  {
    width: 100%;
    flex: 1;
  }

  #${id} .tab-content .content {
    display: none ;
    height: 100%;
  }
  
  #${id} .tab-content .content.active {
    display: block ;
  }
  #${id} .tab::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(250, 124, 112, 0.1); /* 第二个颜色 */
    }

    #${id} .tab.active {
      color: #c4c6ca;
      border-width: 1px;
      border-style: solid;
      border-image: linear-gradient(
          68.08deg,
          rgba(255, 255, 255, 0.9) 0%,
          rgba(156, 129, 242, 1) 100%
        )
        1 !important;
      background-color: rgba(42, 45, 56, 0.5);
    }
    #${id} .tab.active::after {
      background-color: rgba(157, 127, 245, 0.1);
    }
  `;

    document.head.appendChild(styleTag);

    const tabs = dom.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        const tabId = tab.getAttribute("data-tab");

        const allTabs = dom.querySelectorAll(".tab");
        const contents = dom.querySelectorAll(".tab-content .content");

        // Remove 'active' class from all tabs and tab contents
        allTabs.forEach((t) => {
          t.classList.remove("active");

          let preId = tab.getAttribute("data-tab").split("tab")[1] - 1;
          t.style.borderRightWidth = "1px";
          if (t.getAttribute("data-tab").split("tab")[1] == preId) {
            t.style.borderRightWidth = "0";
          }
        });
        for (let i = 0; i < contents.length; i++) {
          if (i + 1 == tabId.split("tab")[1]) {
            contents[i].classList.add("active");
            tabs[i].classList.add("active");
          } else {
            contents[i].classList.remove("active");
            tabs[i].classList.remove("active");
          }
        }

        // Add 'active' class to the clicked tab and corresponding tab content
        tab.classList.add("active");

        e.target.style.borderRightWidth = "1px";
      });
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

  onClick(ele) {
    for (let i = 0; i < this.actions.length; i++) {
      const action = this.actions[i];
      if (action.event === "click") {
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
        if (action.children) {
          this.handleActions(action.children);
        }
      }
    }
  }
}
export default BookmarkPage;
