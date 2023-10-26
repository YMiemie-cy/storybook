import BaseView from "./BaseView.js";
class ModalWindow extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    if (this.attributes) {
      for (const attr in this.attributes) {
        console.log(attr, this.attributes[attr]);
        if (attr === "isModal") {
          if (this.attributes[attr] === "true") {
            this.element.innerHTML = `
            <div
            style="
              box-sizing: border-box;
              border-radius: 2px;
              width: 100%;
              height: 100%;
              position: relative;
              overflow: hidden;
            "
          >
            <div
              style="
                box-sizing: border-box;
                background: #2a2d38;
                border-radius: 6px;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0px;
                top: 0px;
              "
            ></div>
            <div
              style="
                box-sizing: border-box;
                background: #3c414e;
                border-radius: 6px;
                border-width: 1px;
                border-style: solid;
                border-image: linear-gradient(
                  185.04deg,
                  rgba(255, 255, 255, 0.79) 0%,
                  rgba(255, 255, 255, 0.9) 20.3125%,
                  rgba(156, 129, 242, 1) 59.89583134651184%,
                  rgba(255, 255, 255, 0.25) 100%
                );
                border-image-slice: 1;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0px;
                top: 0px;
              "
            ></div>
            <svg
              style="
                box-sizing: border-box;
                position: absolute;
                left: -5%;
                top: -53%;
                overflow: visible;
              "
              width="166%"
              height="157%"
              viewBox="0 0 477 433"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M477 216.5C477 336.07 370.22 433 238.5 433C106.78 433 0 336.07 0 216.5C0 96.9304 106.78 0 238.5 0C370.22 0 477 96.9304 477 216.5Z"
                fill="url(#paint0_radial_206_825)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_206_825"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(225.101 246.709) rotate(92.7493) scale(167.603 184.303)"
                >
                  <stop stop-color="#121212" stop-opacity="0.3" />
                  <stop offset="1" stop-color="#121212" stop-opacity="0" />
                </radialGradient>
              </defs>
            </svg>
        
            <svg
              style="
                box-sizing: border-box;
                position: absolute;
                left: -60%;
                top: -6%;
                overflow: visible;
                width: 75%;
              "
              width="160%"
              height="156%"
              viewBox="0 0 458 431"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M458 215.5C458 334.517 355.473 431 229 431C102.527 431 0 334.517 0 215.5C0 96.4826 102.527 0 229 0C355.473 0 458 96.4826 458 215.5Z"
                fill="url(#paint0_radial_206_826)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_206_826"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(216.135 245.57) rotate(92.6522) scale(166.815 176.976)"
                >
                  <stop stop-color="#121212" stop-opacity="0.3" />
                  <stop offset="1" stop-color="#121212" stop-opacity="0" />
                </radialGradient>
              </defs>
            </svg>
        
            <div
              style="
                box-sizing: border-box;
                color: #c4c6ca;
                text-align: left;
                font: 400 14px sans-serif;
                position: absolute;
                left: 7%;
                top: 5%;
              "
            >
              ${this.attributes.title}
            </div>
            <div
              style="
                box-sizing: border-box;
                color: #7e828a;
                text-align: left;
                font: 400 12px sans-serif;
                position: absolute;
                left: 6%;
                top: 13%;
                width: 88%;
                word-wrap: break-word;
                max-height: 70%;
              "
              class="modalWindow-text"
            >
     
            </div>
            <div
              style="
                box-sizing: border-box;
                width: 2%;
                height: 5%;
                position: absolute;
                left: 26%;
                top: 3%;
                overflow: hidden;
              "
            >
              <div
                style="
                  box-sizing: border-box;
                  background: radial-gradient(
                    closest-side,
                    rgba(18, 18, 18, 0) 100%
                  );
                  border-radius: 50%;
                  width: 1%;
                  height: 2%;
                  position: absolute;
                  left: 1%;
                  top: 2%;
                "
              ></div>
            </div>
            <div
              style="
                box-sizing: border-box;
                background: radial-gradient(
                  closest-side,
                  rgba(245, 133, 122, 0.12) 0%,
                  rgba(245, 133, 122, 0) 100%
                );
                border-radius: 50%;
                width: 48%;
                height: 24%;
                position: absolute;
                left: -8%;
                top: -16%;
              "
            ></div>
            <div
              style="
                box-sizing: border-box;
                background: radial-gradient(
                  closest-side,
                  rgba(255, 255, 255, 0.9) 0%,
                  rgba(255, 255, 255, 0) 100%
                );
                width: 34%;
                height: 0.2%;
                position: absolute;
                left: 2%;
                top: 0px;
              "
            ></div>
            <svg
            class="window-delete-icon"
              style="
                box-sizing: border-box;
                position: absolute;
                left: 87%;
                top: 4%;
                overflow: visible;
                cursor:pointer;
                z-index:9;
              "
              width="25px"
              height="25px"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M18.0465 7.00684C18.3468 7.30713 18.3468 7.79541 18.0465 8.0957L8.09045 18.0518C7.79016 18.3521 7.30188 18.3521 7.00159 18.0518C6.70129 17.7515 6.70129 17.2632 7.00159 16.9629L16.9576 7.00684C17.2579 6.70654 17.7462 6.70654 18.0465 7.00684Z"
                fill="#9579E9"
              />
              <path
                d="M7.00159 7.00684C7.30188 6.70654 7.79016 6.70654 8.09045 7.00684L18.0465 16.9629C18.3468 17.2632 18.3468 17.7515 18.0465 18.0518C17.7462 18.3521 17.2579 18.3521 16.9576 18.0518L7.00159 8.0957C6.70129 7.79541 6.70129 7.30713 7.00159 7.00684Z"
                fill="url(#paint0_linear_206_833)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_206_833"
                  x1="12.524"
                  y1="6.78162"
                  x2="12.524"
                  y2="18.277"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.86" />
                  <stop offset="1" stop-color="#9579E9" />
                </linearGradient>
              </defs>
            </svg>
        
            <div
              style="
                box-sizing: border-box;
                border-radius: 4px;
                width: 90px;
                height: 32px;
                position: absolute;
                right: 16px;
                bottom: 14px;
                overflow: hidden;
                cursor:pointer;
                z-index: 9;
              "
            >
              <div
                style="
                  background: #2a2d38;
                  border-radius: 4px;
                  width: 90px;
                  height: 32px;
                  position: absolute;
                  left: 0px;
                  top: 0px;
                "
              ></div>
              <div
                style="
                  background: rgba(42, 45, 56, 0.5);
                  border-radius: 4px;
                  width: 90px;
                  height: 32px;
                  position: absolute;
                  left: 0px;
                  top: 0px;
                "
              ></div>
              <div
                style="
                  background: rgba(250, 124, 112, 0.13);
                  border-radius: 4px;
                  border-width: 1px;
                  border-style: solid;
                  border-image: linear-gradient(
                    85.59deg,
                    rgba(255, 255, 255, 0.1) 0%,
                    rgba(250, 124, 112, 1) 30.72916567325592%,
                    rgba(157, 127, 245, 1) 58.85416865348816%,
                    rgba(255, 255, 255, 0.1) 99.47916865348816%
                  );
                  border-image-slice: 1;
                  width: 90px;
                  height: 32px;
                  position: absolute;
                  left: 0px;
                  top: 0px;
                "
              ></div>
              <div
                style="
                  background: radial-gradient(
                    closest-side,
                    rgba(18, 18, 18, 0.9) 0%,
                    rgba(18, 18, 18, 0) 100%
                  );
                  border-radius: 50%;
                  width: 147px;
                  height: 49px;
                  position: absolute;
                  left: -25px;
                  top: -9px;
                "
              ></div>
              <div
                style="
                  background: radial-gradient(
                    closest-side,
                    rgba(255, 255, 255, 0.9) 0%,
                    rgba(255, 255, 255, 0) 100%
                  );
                  width: 71px;
                  height: 1px;
                  position: absolute;
                  left: 4px;
                  top: 0px;
                "
              ></div>
              <div
                style="
                  background: radial-gradient(
                    closest-side,
                    rgba(250, 124, 112, 0.21) 0%,
                    rgba(245, 133, 122, 0) 100%,
                    rgba(250, 124, 112, 0) 100%
                  );
                  border-radius: 50%;
                  width: 86px;
                  height: 10px;
                  position: absolute;
                  left: -4px;
                  top: -5px;
                "
              ></div>
              <div
                style="
                  color: #c4c6ca;
        
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  cursor:pointer;
                "
              >
                <div>${this.attributes.confirmButtonText}</div>
              </div>
            </div>
            <div
              style="
                box-sizing: border-box;
                border-radius: 4px;
                width: 90px;
                height: 32px;
                position: absolute;
                right: 120px;
                bottom: 14px;
                overflow: hidden;
                cursor:pointer;
                z-index:9 ;
        
              "
            >
              <div
                style="
                  background: #2a2d38;
                  border-radius: 4px;
                  width: 90px;
                  height: 32px;
                  position: absolute;
                  left: 0px;
                  top: 0px;
                "
              ></div>
              <div
                style="
                  background: rgba(42, 45, 56, 0.5);
                  border-radius: 4px;
                  width: 90px;
                  height: 32px;
                  position: absolute;
                  left: 0px;
                  top: 0px;
                "
              ></div>
              <div
                style="
                  background: rgba(157, 127, 245, 0.1);
                  border-radius: 4px;
                  border-width: 1px;
                  border-style: solid;
                  border-image: linear-gradient(
                    87.77deg,
                    rgba(255, 255, 255, 0.2) 0%,
                    rgba(157, 127, 245, 0.5) 100%
                  );
                  border-image-slice: 1;
                  width: 90px;
                  height: 32px;
                  position: absolute;
                  left: 0px;
                  top: 0px;
                "
              ></div>
              <div
                style="
                  background: radial-gradient(
                    closest-side,
                    rgba(18, 18, 18, 0.5) 0%,
                    rgba(18, 18, 18, 0) 100%
                  );
                  border-radius: 50%;
                  width: 106px;
                  height: 27px;
                  position: absolute;
                  left: -5px;
                  top: 2px;
                "
              ></div>
              <div
                style="
                  background: radial-gradient(
                    closest-side,
                    rgba(255, 255, 255, 0.7) 0%,
                    rgba(255, 255, 255, 0) 100%
                  );
                  width: 35px;
                  height: 1px;
                  position: absolute;
                  left: 4px;
                  top: 0px;
                "
              ></div>
              <div
                style="
                  background: radial-gradient(
                    closest-side,
                    rgba(250, 124, 112, 0.21) 0%,
                    rgba(250, 124, 112, 0) 100%
                  );
                  border-radius: 50%;
                  width: 59px;
                  height: 10px;
                  position: absolute;
                  left: -8px;
                  top: -5px;
                "
              ></div>
              <div
                style="
                  color: #c4c6ca;
        
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  cursor:pointer;
                "
              >
                <div>${this.attributes.cancelButtonText}</div>
              </div>
            </div>
          </div>
            
            `;
          } else {
            this.element.innerHTML = `
            <div
            style="
              box-sizing: border-box;
              border-radius: 2px;
              width: 100%;
              height: 100%;
              position: relative;
              overflow: hidden;
            "
          >
            <div
              style="
                box-sizing: border-box;
                background: #2a2d38;
                border-radius: 6px;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0px;
                top: 0px;
              "
            ></div>
            <div
              style="
                box-sizing: border-box;
                background: #3c414e;
                border-radius: 6px;
                border-width: 1px;
                border-style: solid;
                border-image: linear-gradient(
                  185.04deg,
                  rgba(255, 255, 255, 0.79) 0%,
                  rgba(255, 255, 255, 0.9) 20.3125%,
                  rgba(156, 129, 242, 1) 59.89583134651184%,
                  rgba(255, 255, 255, 0.25) 100%
                );
                border-image-slice: 1;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0px;
                top: 0px;
              "
            ></div>
            <svg
              style="
                box-sizing: border-box;
                position: absolute;
                left: -5%;
                top: -53%;
                overflow: visible;
              "
              width="166%"
              height="157%"
              viewBox="0 0 477 433"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M477 216.5C477 336.07 370.22 433 238.5 433C106.78 433 0 336.07 0 216.5C0 96.9304 106.78 0 238.5 0C370.22 0 477 96.9304 477 216.5Z"
                fill="url(#paint0_radial_206_825)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_206_825"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(225.101 246.709) rotate(92.7493) scale(167.603 184.303)"
                >
                  <stop stop-color="#121212" stop-opacity="0.3" />
                  <stop offset="1" stop-color="#121212" stop-opacity="0" />
                </radialGradient>
              </defs>
            </svg>
        
            <svg
              style="
                box-sizing: border-box;
                position: absolute;
                left: -60%;
                top: -6%;
                overflow: visible;
                width: 75%;
              "
              width="160%"
              height="156%"
              viewBox="0 0 458 431"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M458 215.5C458 334.517 355.473 431 229 431C102.527 431 0 334.517 0 215.5C0 96.4826 102.527 0 229 0C355.473 0 458 96.4826 458 215.5Z"
                fill="url(#paint0_radial_206_826)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_206_826"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(216.135 245.57) rotate(92.6522) scale(166.815 176.976)"
                >
                  <stop stop-color="#121212" stop-opacity="0.3" />
                  <stop offset="1" stop-color="#121212" stop-opacity="0" />
                </radialGradient>
              </defs>
            </svg>
        
            <div
              style="
                box-sizing: border-box;
                color: #c4c6ca;
                text-align: left;
                font: 400 14px sans-serif;
                position: absolute;
                left: 7%;
                top: 5%;
              "
            >
              ${this.attributes.title}
            </div>
            <div
            
              style="
                box-sizing: border-box;
                color: #7e828a;
                text-align: left;
                font: 400 12px sans-serif;
                position: absolute;
                left: 6%;
                top: 13%;
                width: 88%;
                word-wrap: break-word;
              "
            >
            ${this.content.text}  
            </div>
            <div
              style="
                box-sizing: border-box;
                width: 2%;
                height: 5%;
                position: absolute;
                left: 26%;
                top: 3%;
                overflow: hidden;
              "
            >
              <div
                style="
                  box-sizing: border-box;
                  background: radial-gradient(
                    closest-side,
                    rgba(18, 18, 18, 0) 100%
                  );
                  border-radius: 50%;
                  width: 1%;
                  height: 2%;
                  position: absolute;
                  left: 1%;
                  top: 2%;
                "
              ></div>
            </div>
            <div
              style="
                box-sizing: border-box;
                background: radial-gradient(
                  closest-side,
                  rgba(245, 133, 122, 0.12) 0%,
                  rgba(245, 133, 122, 0) 100%
                );
                border-radius: 50%;
                width: 48%;
                height: 24%;
                position: absolute;
                left: -8%;
                top: -16%;
              "
            ></div>
            <div
              style="
                box-sizing: border-box;
                background: radial-gradient(
                  closest-side,
                  rgba(255, 255, 255, 0.9) 0%,
                  rgba(255, 255, 255, 0) 100%
                );
                width: 34%;
                height: 0.2%;
                position: absolute;
                left: 2%;
                top: 0px;
              "
            ></div>
            <svg
              style="
                box-sizing: border-box;
                position: absolute;
                left: 87%;
                top: 4%;
                overflow: visible;
               
              "
              width="25px"
              height="25px"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M18.0465 7.00684C18.3468 7.30713 18.3468 7.79541 18.0465 8.0957L8.09045 18.0518C7.79016 18.3521 7.30188 18.3521 7.00159 18.0518C6.70129 17.7515 6.70129 17.2632 7.00159 16.9629L16.9576 7.00684C17.2579 6.70654 17.7462 6.70654 18.0465 7.00684Z"
                fill="#9579E9"
              />
              <path
                d="M7.00159 7.00684C7.30188 6.70654 7.79016 6.70654 8.09045 7.00684L18.0465 16.9629C18.3468 17.2632 18.3468 17.7515 18.0465 18.0518C17.7462 18.3521 17.2579 18.3521 16.9576 18.0518L7.00159 8.0957C6.70129 7.79541 6.70129 7.30713 7.00159 7.00684Z"
                fill="url(#paint0_linear_206_833)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_206_833"
                  x1="12.524"
                  y1="6.78162"
                  x2="12.524"
                  y2="18.277"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.86" />
                  <stop offset="1" stop-color="#9579E9" />
                </linearGradient>
              </defs>
            </svg>
        
            
            `;
          }
        }
        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    this.element.id = this.name;
    // this.element.style.position = "absolute";
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;
    this.element.classList.add("modalWindow-container");

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    if (this.style) {
      for (const style in this.style) {
        this.element.style[style] = this.style[style];
      }
    }

    // if (this.actions) {
    //   const actionsFunction = new Function(
    //     "this.element",
    //     `(${this.actions})(this.element)`
    //   );

    //   actionsFunction(this.element);
    // }
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

    let styleTag = document.createElement("style");
    styleTag.textContent = `
    .modalWindow-container{
      position: fixed;
     
    }
    `;
    document.head.appendChild(styleTag);

    // 获取父级容器
    let parentContainer;

    if (parent === "layers") {
      parentContainer = document.querySelector("#container");
    } else {
      parentContainer = document.querySelector(`#${parent}`);
    }

    // 创建DOM并添加到父级容器

    parentContainer.appendChild(domElement);

    if (this.content) {
      for (const content in this.content) {
        if (content === "icon") {
          const iconElement = document.createElement("img");
          iconElement.src = this.content.icon;
          iconElement.style.cssText = `
          position:absolute; top:0;left:0;right:0;bottom:0;margin:auto;height:80%;width:80%;
          `;
          this.element.appendChild(iconElement);
        } else {
          this.element.querySelector(".modalWindow-text").innerHTML =
            this.content[content];
        }
      }
    }

    if (this.frame.color) {
      this.element.style.color = this.frame.color;
    }

    /** script */
    this.element
      .querySelector(".window-delete-icon")
      .addEventListener("click", () => {
        this.element.remove();
      });
    /** script */
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
export default ModalWindow;
