import BaseView from "./BaseView.js";
class Input extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    // 开始按钮的绘制逻辑
    // 解析JSON数据并创建DOM元素

    this.element.id = this.name;
    // this.element.style.position = "relative";
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;

    // this.element.style.overflow = "hidden";
    // this.element.style.borderRadius = "4px";
    // this.element.style.display = "flex";
    // this.element.style.alignItems = "center";

    this.element.classList.add("input-container");

    if (this.content) {
      for (const content in this.content) {
        if (content === "icon") {
          const iconElement = document.createElement("img");
          iconElement.src = content.icon;
          this.element.appendChild(iconElement);
        } else {
          var inputTitle = this.content[content];
        }
      }
    }

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }

    let isPlaceholder = false;
    let placeholderContent;
    if (this.attributes) {
      for (const attr in this.attributes) {
        if (attr === "placeholder") {
          isPlaceholder = true;
          placeholderContent = this.attributes[attr];
          continue;
        }

        if (attr === "type" && this.attributes[attr] === "input") {
          this.element.innerHTML = `
          <svg
            style=" border-radius: 0px;
            position: absolute;
            left: 16%;
            top: 0;
            overflow: visible;"
            width="84%"
            height="100%"
            viewBox="0 0 353 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M20.3041 5.03571L21.9035 1.67857L22.3549 1.89361L23.0188 0.5H24.6927V0H28.672V0.5H32.6512V0H36.6305V0.5H40.6097V0H44.589V0.5H48.5682V0H52.5475V0.5H56.5267V0H60.506V0.5H64.4852V0H68.4645V0.5H72.4437V0H76.423V0.5H80.4022V0H84.3815V0.5H88.3607V0H92.34V0.5H96.3192V0H100.298V0.5H104.278V0H108.257V0.5H112.236V0H116.215V0.5H120.195V0H124.174V0.5H128.153V0H132.132V0.5H136.112V0H140.091V0.5H144.07V0H148.049V0.5H152.028V0H156.008V0.5H159.987V0H163.966V0.5H167.945V0H171.925V0.5H175.904V0H179.883V0.5H183.862V0H187.842V0.5H191.821V0H195.8V0.5H199.779V0H203.758V0.5H207.738V0H211.717V0.5H215.696V0H219.675V0.5H223.655V0H227.634V0.5H231.613V0H235.592V0.5H239.572V0H243.551V0.5H247.53V0H251.509V0.5H255.489V0H259.468V0.5H263.447V0H267.426V0.5H271.406V0H275.385V0.5H279.364V0H283.343V0.5H287.322V0H291.302V0.5H295.281V0H299.26V0.5H303.239V0H307.219V0.5H311.198V0H315.177V0.5H319.156V0H323.136V0.5H327.115V0H331.094V0.5H335.073V0H339.053V0.5H343.032V0H347.011V0.5H349.001C349.476 0.5 349.928 0.594543 350.34 0.765386L350.532 0.303525C351.51 0.708988 352.292 1.49109 352.697 2.46885L352.235 2.66038C352.406 3.07236 352.501 3.52451 352.501 4V5.95H353.001V9.85H352.501V13.75H353.001V17.65H352.501V21.55H353.001V25.45H352.501V29.35H353.001V33.25H352.501V37.15H353.001V41.05H352.501V43C352.501 43.4755 352.406 43.9276 352.235 44.3396L352.697 44.5312C352.292 45.5089 351.51 46.291 350.532 46.6965L350.34 46.2346C349.928 46.4055 349.476 46.5 349.001 46.5H347.02V47H343.057V46.5H339.095V47H335.133V46.5H331.17V47H327.208V46.5H323.246V47H319.283V46.5H315.321V47H311.358V46.5H307.396V47H303.434V46.5H299.471V47H295.509V46.5H291.547V47H287.584V46.5H283.622V47H279.659V46.5H275.697V47H271.735V46.5H267.772V47H263.81V46.5H259.848V47H255.885V46.5H251.923V47H247.961V46.5H243.998V47H240.036V46.5H236.073V47H232.111V46.5H228.149V47H224.186V46.5H220.224V47H216.262V46.5H212.299V47H208.337V46.5H204.374V47H200.412V46.5H196.45V47H192.487V46.5H188.525V47H184.563V46.5H180.6V47H176.638V46.5H172.675V47H168.713V46.5H164.751V47H160.788V46.5H156.826V47H152.864V46.5H148.901V47H144.939V46.5H140.976V47H137.014V46.5H133.052V47H129.089V46.5H125.127V47H121.165V46.5H117.202V47H113.24V46.5H109.278V47H105.315V46.5H101.353V47H97.3904V46.5H93.4281V47H89.4657V46.5H85.5033V47H81.541V46.5H77.5786V47H73.6163V46.5H69.6539V47H65.6915V46.5H61.7292V47H57.7668V46.5H53.8044V47H49.8421V46.5H45.8797V47H41.9173V46.5H37.955V47H33.9926V46.5H30.0302V47H26.0679V46.5H22.1055V47H18.1431V46.5H14.1808V47H10.2184V46.5H6.25605V47H2.29368V46.5H1.10454L1.56356 45.5365L1.11216 45.3214L2.71149 41.9643L3.16289 42.1793L4.76222 38.8222L4.31083 38.6071L5.91016 35.25L6.36155 35.465L7.96088 32.1079L7.50949 31.8929L9.10882 28.5357L9.56021 28.7508L11.1595 25.3936L10.7081 25.1786L12.3075 21.8214L12.7589 22.0365L14.3582 18.6793L13.9068 18.4643L15.5061 15.1071L15.9575 15.3222L17.5569 11.965L17.1055 11.75L18.7048 8.39286L19.1562 8.6079L20.7555 5.25076L20.3041 5.03571Z"
              stroke="#C4C6CA"
              stroke-dasharray="4 4"
            />
          </svg>
    
          <div style="width: 27%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          overflow: hidden;">
            <svg
              style="border-radius: 0px;
              position: absolute;
              left: 0px;
              top: 0px;
              overflow: visible;"
              width="100%"
              height="100%"
              viewBox="0 0 89 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H89L66.6015 47H4C1.79086 47 0 45.2091 0 43V4Z"
                fill="#2D303B"
              />
            </svg>
    
            <svg
              
              style="border-radius: 0px;
              position: absolute;
              left: 0px;
              top: 0px;
              overflow: visible;"
              width="100%"
              height="100%"
              viewBox="0 0 89 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H88.2078L66.2859 46.5H4C2.067 46.5 0.5 44.933 0.5 43V4Z"
                fill="#9D7FF5"
                fill-opacity="0.15"
                stroke="url(#paint0_linear_158_116)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_158_116"
                  x1="57.087"
                  y1="38.9219"
                  x2="-1.00912"
                  y2="19.1674"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9D7FF5" />
                  <stop offset="1" stop-color="white" stop-opacity="0.9" />
                </linearGradient>
              </defs>
            </svg>
    
            <div style="background: radial-gradient(
              closest-side,
              rgba(18, 18, 18, 0.8) 0%,
              rgba(18, 18, 18, 0) 100%
            );
            border-radius: 50%;
            width: 83%;
            height: 126%;
            position: absolute;
            left: -11%;
            top: -9%;"></div>
            <div  class="input-text" style="color: #c4c6ca;
          
            position: relative;
         
            height: 100%;
            font-size: 1em;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 13%;">${inputTitle}</div>
            <div style="background: radial-gradient(
              closest-side,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(255, 255, 255, 0) 100%
            );
            width: 31%;
            height: 2%;
            position: absolute;
            left: 4%;
            top: 0px;"></div>
            <div style="background: radial-gradient(
              closest-side,
              rgba(250, 124, 112, 0.21) 0%,
              rgba(250, 124, 112, 0) 100%
            );
            border-radius: 50%;
            width: 35%;
            height: 28%;
            position: absolute;
            left: 0px;
            top: -13%;"></div>
            
       
           
            </div>
           

            ${
              this.attributes.isTextarea
                ? `<textarea style="color: rgb(196, 198, 202);
            caret-color: rgb(156, 129, 242);
            border: none;
            outline-style: none;
            background-color: transparent;
            position: absolute;
            left: 27%;
            width: 72%;
            font-size: 1em;
            height: 95%;
            resize: none; 
            padding:0;
            overflow: auto;"></textarea>`
                : ` <input  type="text"  style="color: rgb(196, 198, 202);
                caret-color: rgb(156, 129, 242);
                border: 0px;
                outline-style: none;
                background-color: transparent;
                position: absolute;
                top:0;
                left: 27%;
                width: 72%;
                font-size: 1em;
                height: 100%;" />`
            }

            
          </div>
    
            `;
          if (isPlaceholder) {
            this.element
              .querySelector("input")
              .setAttribute("placeholder", placeholderContent);
          }
        }
        if (attr === "type" && this.attributes[attr] === "search") {
          this.element.innerHTML = `
     
          <svg
           
            style=" border-radius: 0px;
            position: absolute;
            left: 16%;
            top: 0;
            overflow: visible;"
            width="84%"
            height="100%"
            viewBox="0 0 353 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M20.3041 5.03571L21.9035 1.67857L22.3549 1.89361L23.0188 0.5H24.6927V0H28.672V0.5H32.6512V0H36.6305V0.5H40.6097V0H44.589V0.5H48.5682V0H52.5475V0.5H56.5267V0H60.506V0.5H64.4852V0H68.4645V0.5H72.4437V0H76.423V0.5H80.4022V0H84.3815V0.5H88.3607V0H92.34V0.5H96.3192V0H100.298V0.5H104.278V0H108.257V0.5H112.236V0H116.215V0.5H120.195V0H124.174V0.5H128.153V0H132.132V0.5H136.112V0H140.091V0.5H144.07V0H148.049V0.5H152.028V0H156.008V0.5H159.987V0H163.966V0.5H167.945V0H171.925V0.5H175.904V0H179.883V0.5H183.862V0H187.842V0.5H191.821V0H195.8V0.5H199.779V0H203.758V0.5H207.738V0H211.717V0.5H215.696V0H219.675V0.5H223.655V0H227.634V0.5H231.613V0H235.592V0.5H239.572V0H243.551V0.5H247.53V0H251.509V0.5H255.489V0H259.468V0.5H263.447V0H267.426V0.5H271.406V0H275.385V0.5H279.364V0H283.343V0.5H287.322V0H291.302V0.5H295.281V0H299.26V0.5H303.239V0H307.219V0.5H311.198V0H315.177V0.5H319.156V0H323.136V0.5H327.115V0H331.094V0.5H335.073V0H339.053V0.5H343.032V0H347.011V0.5H349.001C349.476 0.5 349.928 0.594543 350.34 0.765386L350.532 0.303525C351.51 0.708988 352.292 1.49109 352.697 2.46885L352.235 2.66038C352.406 3.07236 352.501 3.52451 352.501 4V5.95H353.001V9.85H352.501V13.75H353.001V17.65H352.501V21.55H353.001V25.45H352.501V29.35H353.001V33.25H352.501V37.15H353.001V41.05H352.501V43C352.501 43.4755 352.406 43.9276 352.235 44.3396L352.697 44.5312C352.292 45.5089 351.51 46.291 350.532 46.6965L350.34 46.2346C349.928 46.4055 349.476 46.5 349.001 46.5H347.02V47H343.057V46.5H339.095V47H335.133V46.5H331.17V47H327.208V46.5H323.246V47H319.283V46.5H315.321V47H311.358V46.5H307.396V47H303.434V46.5H299.471V47H295.509V46.5H291.547V47H287.584V46.5H283.622V47H279.659V46.5H275.697V47H271.735V46.5H267.772V47H263.81V46.5H259.848V47H255.885V46.5H251.923V47H247.961V46.5H243.998V47H240.036V46.5H236.073V47H232.111V46.5H228.149V47H224.186V46.5H220.224V47H216.262V46.5H212.299V47H208.337V46.5H204.374V47H200.412V46.5H196.45V47H192.487V46.5H188.525V47H184.563V46.5H180.6V47H176.638V46.5H172.675V47H168.713V46.5H164.751V47H160.788V46.5H156.826V47H152.864V46.5H148.901V47H144.939V46.5H140.976V47H137.014V46.5H133.052V47H129.089V46.5H125.127V47H121.165V46.5H117.202V47H113.24V46.5H109.278V47H105.315V46.5H101.353V47H97.3904V46.5H93.4281V47H89.4657V46.5H85.5033V47H81.541V46.5H77.5786V47H73.6163V46.5H69.6539V47H65.6915V46.5H61.7292V47H57.7668V46.5H53.8044V47H49.8421V46.5H45.8797V47H41.9173V46.5H37.955V47H33.9926V46.5H30.0302V47H26.0679V46.5H22.1055V47H18.1431V46.5H14.1808V47H10.2184V46.5H6.25605V47H2.29368V46.5H1.10454L1.56356 45.5365L1.11216 45.3214L2.71149 41.9643L3.16289 42.1793L4.76222 38.8222L4.31083 38.6071L5.91016 35.25L6.36155 35.465L7.96088 32.1079L7.50949 31.8929L9.10882 28.5357L9.56021 28.7508L11.1595 25.3936L10.7081 25.1786L12.3075 21.8214L12.7589 22.0365L14.3582 18.6793L13.9068 18.4643L15.5061 15.1071L15.9575 15.3222L17.5569 11.965L17.1055 11.75L18.7048 8.39286L19.1562 8.6079L20.7555 5.25076L20.3041 5.03571Z"
              stroke="#C4C6CA"
              stroke-dasharray="4 4"
            />
          </svg>
    
          <div  style="width: 27%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          overflow: hidden;">
            <svg
             
              style="border-radius: 0px;
              position: absolute;
              left: 0px;
              top: 0px;
              overflow: visible;"
              width="100%"
              height="100%"
              viewBox="0 0 89 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H89L66.6015 47H4C1.79086 47 0 45.2091 0 43V4Z"
                fill="#2D303B"
              />
            </svg>
    
            <svg
             
              style="border-radius: 0px;
              position: absolute;
              left: 0px;
              top: 0px;
              overflow: visible;"
              width="100%"
              height="100%"
              viewBox="0 0 89 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H88.2078L66.2859 46.5H4C2.067 46.5 0.5 44.933 0.5 43V4Z"
                fill="#9D7FF5"
                fill-opacity="0.15"
                stroke="url(#paint0_linear_158_116)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_158_116"
                  x1="57.087"
                  y1="38.9219"
                  x2="-1.00912"
                  y2="19.1674"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9D7FF5" />
                  <stop offset="1" stop-color="white" stop-opacity="0.9" />
                </linearGradient>
              </defs>
            </svg>
    
            <div  style="background: radial-gradient(
              closest-side,
              rgba(18, 18, 18, 0.8) 0%,
              rgba(18, 18, 18, 0) 100%
            );
            border-radius: 50%;
            width: 83%;
            height: 126%;
            position: absolute;
            left: -11%;
            top: -9%;"></div>
            <div class="prompt" style="color: #c4c6ca;
            font: 400 14px;
            position: relative;
         
            height: 100%;
            font-size:1em;
            left:18%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 13%;">search</div>
            <div  style="background: radial-gradient(
              closest-side,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(255, 255, 255, 0) 100%
            );
            width: 31%;
            height: 2%;
            position: absolute;
            left: 4%;
            top: 0px;"></div>
            <div  style="background: radial-gradient(
              closest-side,
              rgba(250, 124, 112, 0.21) 0%,
              rgba(250, 124, 112, 0) 100%
            );
            border-radius: 50%;
            width: 35%;
            height: 28%;
            position: absolute;
            left: 0px;
            top: -13%;"></div>
            
       
           
            </div>
            <svg
      
      style="  position: absolute;
      left: 2%;
      top: 25%;
      overflow: visible;"
      height="50%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.0203 7.01049C14.0227 8.59679 13.4846 10.1366 12.4947 11.3762H12.4958C12.524 11.3981 12.5508 11.4218 12.5759 11.4471L15.7757 14.6465C15.9216 14.797 16.0024 14.9987 16.0008 15.2083C15.9991 15.4178 15.9151 15.6182 15.767 15.7664C15.6188 15.9145 15.4183 15.9985 15.2088 16.0001C14.9992 16.0018 14.7975 15.9209 14.647 15.7751L11.4471 12.5757C11.4219 12.5506 11.3968 12.5231 11.3762 12.4945C10.2468 13.393 8.86765 13.9211 7.42693 14.0067C5.98622 14.0922 4.55421 13.7311 3.32641 12.9726C3.26512 12.9348 3.20449 12.896 3.14453 12.8564L4.30589 11.695C5.31599 12.2774 6.49133 12.5202 7.65686 12.3798C8.97023 12.2217 10.1802 11.5882 11.0583 10.5989C11.9363 9.60967 12.4217 8.33315 12.4226 7.01049C12.4226 6.79866 12.5068 6.5955 12.6566 6.44572C12.8064 6.29593 13.0096 6.21178 13.2214 6.21178C13.4333 6.21178 13.6365 6.29593 13.7863 6.44572C13.9361 6.5955 14.0203 6.79866 14.0203 7.01049ZM11.8073 4.50059C11.7724 4.43366 11.7361 4.3676 11.6985 4.30243L12.8583 3.14258C12.9895 3.3409 13.111 3.54642 13.222 3.75848C13.2708 3.85135 13.3007 3.95292 13.3102 4.05737C13.3197 4.16182 13.3085 4.26712 13.2773 4.36725C13.246 4.46737 13.1954 4.56037 13.1282 4.64093C13.0611 4.72149 12.9787 4.78804 12.8858 4.83676C12.7929 4.88549 12.6913 4.91545 12.5869 4.92492C12.4824 4.9344 12.3771 4.92321 12.2769 4.892C12.1768 4.86078 12.0838 4.81015 12.0032 4.74299C11.9226 4.67583 11.8561 4.59346 11.8073 4.50059Z"
        fill="#9D7FF5"
      />
      <g filter="url(#filter0_d_192_2254)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.8576 3.14244C12.1978 2.14511 11.2913 1.32958 10.2211 0.778319C8.93812 0.117435 7.48239 -0.131419 6.05267 0.0657337C4.62295 0.262887 3.28893 0.896438 2.23275 1.87989C1.17657 2.86334 0.449703 4.14875 0.151391 5.56063C-0.146921 6.97251 -0.00213871 8.44203 0.565971 9.76857C1.10572 11.0289 2.0026 12.1018 3.14376 12.8562L4.30511 11.6949C4.177 11.621 4.05154 11.5417 3.92909 11.457C2.84127 10.7044 2.06676 9.5795 1.75184 8.29487C1.43693 7.01024 1.60342 5.65477 2.21987 4.4845C2.83632 3.31424 3.86005 2.41019 5.09768 1.94314C6.33531 1.47609 7.70116 1.47836 8.93723 1.94953C10.1027 2.3938 11.0768 3.22595 11.6977 4.30229L12.8576 3.14244Z"
          fill="url(#paint0_linear_192_2254)"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_192_2254"
          x="-1.9"
          y="-1.9"
          width="16.8574"
          height="16.8562"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.1" dy="0.1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_192_2254"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_192_2254"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_192_2254"
          x1="2.54544"
          y1="2.54546"
          x2="7.63636"
          y2="7.99998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9D7FF5" />
          <stop offset="1" stop-color="white" stop-opacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
            
            ${
              this.attributes.isTextarea
                ? `<textarea style="color: rgb(196, 198, 202);
            caret-color: rgb(156, 129, 242);
            border: none;
            outline-style: none;
            background-color: transparent;
            position: absolute;
            left: 27%;
            width: 72%;
            font-size: 1em;
            height: 95%;
            resize: none; 
            padding:0;
            overflow: auto;"></textarea>`
                : `<input  type="text"  style="color: rgb(196, 198, 202);
            caret-color: rgb(156, 129, 242);
            border: 0px;
            outline-style: none;
            background-color: transparent;
            position: absolute;
            top:0;
            left: 27%;
            width: 72%;
            font-size: 1em;
            height: 100%;">`
            }
          </div>
    
            `;
          if (isPlaceholder) {
            this.element
              .querySelector("input")
              .setAttribute("placeholder", placeholderContent);
          }
        }
        if (attr === "type" && this.attributes[attr] === "default") {
          let tem = document.createElement("div");
          tem.style.cssText = `
                box-sizing: border-box;
                border-radius: 4px;
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
            `;
          this.element.appendChild(tem);
          tem = document.createElement("div");
          tem.style.cssText = `
            box-sizing: border-box;
            background: rgba(42, 45, 56, 0.5);
            border-radius: 4px;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0px;
            top: 0px;
            `;
          this.element.appendChild(tem);
          tem = document.createElement("div");
          tem.style.cssText = `
            box-sizing: border-box;
            background: rgba(157, 127, 245, 0.15);
            border-radius: 4px;
            border-width: 1.5px;
            border-style: solid;
            border-color: transparent;
            background-image: linear-gradient(90.71deg, rgba(255, 255, 255, 0.9) 0%, rgb(157, 127, 245) 100%), linear-gradient(90.71deg, rgba(255, 255, 255, 0.9) 0%, rgb(157, 127, 245) 100%);
            background-origin: border-box;
            background-clip: content-box,border-box;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0px;
            top: 0px;
            `;
          this.element.appendChild(tem);

          /** */
          let box = document.createElement("div");
          box.style.cssText = `
          
          width: calc(100% - 0.2em);
          height: calc(100% - 0.2em);
          position: absolute;
          top: 0px;
          left: 0px;
          border-radius: 4px;
          background: #3a3753;
          margin: auto;
          right: 0;
          bottom: 0;
            
            `;
          // this.element.appendChild(box);
          /** */

          tem = document.createElement("div");
          tem.style.cssText = `
            background: radial-gradient(
                closest-side,
                rgba(18, 18, 18, 0.8) 0%,
                rgba(18, 18, 18, 0) 100%
              );
              
              border-radius: 50%;
              width: 202%;
              height: 234%;
              position: absolute;
              left: -45%;
              top: -69%;
            `;
          box.appendChild(tem);
          tem = document.createElement("div");
          tem.style.cssText = `
            box-sizing: border-box;
            background: radial-gradient(
                closest-side,
                rgba(255, 255, 255, 0.9) 0%,
                rgba(255, 255, 255, 0) 100%
              );
              width: 28%;
              height: 3%;
              position: absolute;
              left: -5px;
              top: 0px;
            `;
          this.element.appendChild(tem);
          tem = document.createElement("div");
          tem.style.cssText = `
            box-sizing: border-box;
            background: radial-gradient(
                closest-side,
                rgba(250, 124, 112, 0.21) 0%,
                rgba(250, 124, 112, 0) 100%
              );
              border-radius: 50%;
              width: 30%;
              height: 30%;
              position: absolute;
              left: -4px;
              top: -5px;
            `;
          box.appendChild(tem);

          if (this.attributes) {
            for (const attr in this.attributes) {
              tem.setAttribute(attr, this.attributes[attr]);
            }
          }

          if (!this.attributes.isTextarea) {
            tem = document.createElement("input");
            tem.setAttribute("type", "text");
            tem.style.cssText = `
            color: #c4c6ca;
            caret-color: #9C81F2;
            font: 400 16px "Arial", sans-serif;
            border:0px;
            outline-style: none ;
            BACKGROUND-COLOR: transparent;
            position:absolute;
            left: 4.5%;
            top:0;
            width:100%;
            height:100%;
            font-size: 1em;
            `;
          } else {
            tem = document.createElement("textarea");
            tem.style.cssText = `
            color: rgb(196, 198, 202);
            caret-color: rgb(156, 129, 242);
            border: none;
            outline-style: none;
            background-color: transparent;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 100%;
            font-size: 1em;
            height: 100%;
            resize: none; 
            padding:0;
            overflow: auto;
            `;
          }

          box.appendChild(tem);
          this.element.appendChild(box);
        }

        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    if (this.style) {
      for (const style in this.style) {
        this.element.style[style] = this.style[style];
      }
    }

    for (const action of this.actions) {
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

    let styleTag = document.createElement("style");
    styleTag.textContent = `
    .input-container{
      position :relative;
      overflow :hidden;
      borderRadius :4px;
      display :flex;
      alignItems :center;
    }
    #${this.name} textarea::-webkit-scrollbar {
      width: 0; 
  }
    `;
    document.head.appendChild(styleTag);

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

    if (this.attributes.isTextarea) {
      const textarea = this.element.querySelector("textarea");
      let that = this;

      textarea.addEventListener("input", function () {
        // this.style.height = "auto"; // 重置高度以便重新计算
        // this.style.height = this.scrollHeight + "px"; // 设置高度为内容的高度
        // that.element.style.height = "auto";

        that.element.style.height =
          this.scrollHeight >= 30 ? this.scrollHeight + 2 + "px" : "30px";
      });

      // 初始化，确保文本内容后自动调整高度
      textarea.dispatchEvent(new Event("input"));
    }

    if (this.frame.color) {
      this.element.querySelector(".input-text").style.color = this.frame.color;
    }
  }

  handleAnimation() {
    // 处理按钮的动画逻辑
    console.log("处理按钮的动画");
  }
}
export default Input;
