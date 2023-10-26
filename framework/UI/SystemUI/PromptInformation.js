import BaseView from "./BaseView.js";
class PromptInformation extends BaseView {
  constructor(element, options) {
    super(element, options);
  }

  startDrawing(parent) {
    if (this.attributes) {
      for (const attr in this.attributes) {
        console.log(attr, this.attributes[attr]);
        if (attr === "type") {
          if (this.attributes[attr] === "success") {
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
            left: -19%;
            top: -175%;
            overflow: visible;
          "
          width="170%"
          height="513%"
          viewBox="0 0 489 323"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M489 161.5C489 250.694 379.534 323 244.5 323C109.466 323 0 250.694 0 161.5C0 72.306 109.466 0 244.5 0C379.534 0 489 72.306 489 161.5Z"
            fill="url(#paint0_radial_206_871)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_206_871"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(230.764 184.035) rotate(93.7758) scale(125.152 188.747)"
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
            left: -21%;
            top: -24%;
            overflow: visible;
          "
          width="66%"
          height="244%"
          viewBox="0 0 194 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M194 77C194 119.526 150.572 154 97 154C43.4284 154 0 119.526 0 77C0 34.4741 43.4284 0 97 0C150.572 0 194 34.4741 194 77Z"
            fill="url(#paint0_radial_206_872)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_206_872"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(91.5506 87.7442) rotate(93.1432) scale(59.6304 74.9311)"
            >
              <stop stop-color="#121212" stop-opacity="0.3" />
              <stop offset="1" stop-color="#121212" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <div
          style="
            box-sizing: border-box;
            width: 2%;
            height: 21%;
            position: absolute;
            left: 26%;
            top: 13%;
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
              height: 8%;
              position: absolute;
              left: 1%;
              top: 8%;
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
            height: 75%;
            position: absolute;
            left: -8%;
            top: -57%;
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
            height: 0.9%;
            position: absolute;
            left: 2%;
            top: 0px;
          "
        ></div>

        <div
          style="
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <svg
            style="
              box-sizing: border-box;
              position: relative;
              left: 7%;

              overflow: visible;
            "
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_206_879)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.8585 7.44988L16.9209 1.74941C17.2656 1.42528 17.2656 0.895353 16.9209 0.571223C16.5762 0.247092 16.0126 0.247092 15.6679 0.571223L9.60547 6.27169L10.8585 7.44988Z"
                fill="url(#paint0_linear_206_879)"
                shape-rendering="crispEdges"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.60739 6.27206L7.05232 8.67459L1.49306 3.44722C1.15109 3.12567 0.598455 3.12567 0.256481 3.44722C-0.0854936 3.76878 -0.0854936 4.28842 0.256481 4.60998L6.39803 10.3823C6.41199 10.3975 6.42663 10.4123 6.44195 10.4267C6.7894 10.7534 7.35023 10.7534 7.69495 10.4267L10.8604 7.45025L9.60739 6.27206Z"
              fill="#59C27E"
            />
            <defs>
              <filter
                id="filter0_d_206_879"
                x="6.60547"
                y="-2.67188"
                width="15.5742"
                height="15.1218"
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
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_206_879"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_206_879"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_206_879"
                x1="16.5363"
                y1="0.764232"
                x2="9.10754"
                y2="8.66482"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.9" />
                <stop offset="1" stop-color="#59C27E" />
              </linearGradient>
            </defs>
          </svg>
          <div style="flex: 1; position: relative; overflow: hidden">
            <div
              style="
                box-sizing: border-box;
                color: #c4c6ca;
                text-align: left;
                font: 400 14px sans-serif;
                position: relative;
                left: 20%;
                top: 24%;
              "
            >
              Success
            </div>
            <div
              style="
                box-sizing: border-box;
                color: #7e828a;
                text-align: left;
                font: 400 12px sans-serif;
                position: relative;
                left: 20%;
                top: 54%;
                width: 79%;
                white-space: nowrap;
                overflow: hidden;
              "
            >
              ${this.content.text}
            </div>
          </div>
        </div>
      </div>
            `;
          } else if (this.attributes[attr] === "error") {
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
            left: -19%;
            top: -175%;
            overflow: visible;
          "
          width="170%"
          height="513%"
          viewBox="0 0 489 323"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M489 161.5C489 250.694 379.534 323 244.5 323C109.466 323 0 250.694 0 161.5C0 72.306 109.466 0 244.5 0C379.534 0 489 72.306 489 161.5Z"
            fill="url(#paint0_radial_206_871)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_206_871"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(230.764 184.035) rotate(93.7758) scale(125.152 188.747)"
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
            left: -21%;
            top: -24%;
            overflow: visible;
          "
          width="66%"
          height="244%"
          viewBox="0 0 194 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M194 77C194 119.526 150.572 154 97 154C43.4284 154 0 119.526 0 77C0 34.4741 43.4284 0 97 0C150.572 0 194 34.4741 194 77Z"
            fill="url(#paint0_radial_206_872)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_206_872"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(91.5506 87.7442) rotate(93.1432) scale(59.6304 74.9311)"
            >
              <stop stop-color="#121212" stop-opacity="0.3" />
              <stop offset="1" stop-color="#121212" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <div
          style="
            box-sizing: border-box;
            width: 2%;
            height: 21%;
            position: absolute;
            left: 26%;
            top: 13%;
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
              height: 8%;
              position: absolute;
              left: 1%;
              top: 8%;
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
            height: 75%;
            position: absolute;
            left: -8%;
            top: -57%;
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
            height: 0.9%;
            position: absolute;
            left: 2%;
            top: 0px;
          "
        ></div>

        <div
          style="
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
        <svg
        style="
          box-sizing: border-box;
          position: relative;
          left: 7%;
          overflow: visible;
        "
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M19.4911 7.5674C19.8154 7.89171 19.8154 8.41906 19.4911 8.74337L8.73855 19.4959C8.41423 19.8202 7.88689 19.8202 7.56257 19.4959C7.23826 19.1716 7.23826 18.6442 7.56257 18.3199L18.3151 7.5674C18.6394 7.24308 19.1668 7.24308 19.4911 7.5674Z"
          fill="#F54E57"
        />
        <path
          d="M7.56257 7.5674C7.88689 7.24308 8.41423 7.24308 8.73855 7.5674L19.4911 18.3199C19.8154 18.6442 19.8154 19.1716 19.4911 19.4959C19.1668 19.8202 18.6394 19.8202 18.3151 19.4959L7.56257 8.74337C7.23826 8.41906 7.23826 7.89171 7.56257 7.5674Z"
          fill="url(#paint0_linear_206_902)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_206_902"
            x1="13.5268"
            y1="7.32416"
            x2="13.5268"
            y2="19.7391"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.86" />
            <stop offset="1" stop-color="#F54E57" />
          </linearGradient>
        </defs>
      </svg>
          <div style="flex: 1; position: relative; overflow: hidden">
            <div
              style="
                box-sizing: border-box;
                color: #c4c6ca;
                text-align: left;
                font: 400 14px sans-serif;
                position: relative;
                left: 20%;
                top: 24%;
              "
            >
              Error
            </div>
            <div
              style="
                box-sizing: border-box;
                color: #7e828a;
                text-align: left;
                font: 400 12px sans-serif;
                position: relative;
                left: 20%;
                top: 54%;
                width: 79%;
                white-space: nowrap;
                overflow: hidden;
              "
            >
              ${this.content.text}
            </div>
          </div>
        </div>
      </div>
            `;
          } else if (this.attributes[attr] === "warning") {
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
            left: -19%;
            top: -175%;
            overflow: visible;
          "
          width="170%"
          height="513%"
          viewBox="0 0 489 323"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M489 161.5C489 250.694 379.534 323 244.5 323C109.466 323 0 250.694 0 161.5C0 72.306 109.466 0 244.5 0C379.534 0 489 72.306 489 161.5Z"
            fill="url(#paint0_radial_206_871)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_206_871"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(230.764 184.035) rotate(93.7758) scale(125.152 188.747)"
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
            left: -21%;
            top: -24%;
            overflow: visible;
          "
          width="66%"
          height="244%"
          viewBox="0 0 194 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M194 77C194 119.526 150.572 154 97 154C43.4284 154 0 119.526 0 77C0 34.4741 43.4284 0 97 0C150.572 0 194 34.4741 194 77Z"
            fill="url(#paint0_radial_206_872)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_206_872"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(91.5506 87.7442) rotate(93.1432) scale(59.6304 74.9311)"
            >
              <stop stop-color="#121212" stop-opacity="0.3" />
              <stop offset="1" stop-color="#121212" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <div
          style="
            box-sizing: border-box;
            width: 2%;
            height: 21%;
            position: absolute;
            left: 26%;
            top: 13%;
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
              height: 8%;
              position: absolute;
              left: 1%;
              top: 8%;
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
            height: 75%;
            position: absolute;
            left: -8%;
            top: -57%;
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
            height: 0.9%;
            position: absolute;
            left: 2%;
            top: 0px;
          "
        ></div>

        <div
          style="
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
        <svg
            style="
              box-sizing: border-box;
              position: relative;
              left: 7%;
              overflow: visible;
            "
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M9.00035 3.15002L2.13785 14.175H15.7503L9.00035 3.15002ZM9.00035 2.02502C9.33785 2.02502 9.78785 2.25002 9.90035 2.58752L16.7628 13.6125C17.2128 14.4 16.6503 15.3 15.8628 15.3H2.25035C1.35035 15.3 0.787846 14.2875 1.35035 13.6125L8.10035 2.58752C8.21284 2.25002 8.66285 2.02502 9.00035 2.02502Z"
              fill="#E0B15A"
            />
            <path
              d="M9 11.25C9.3375 11.25 9.5625 11.025 9.5625 10.6875V7.3125C9.5625 6.975 9.3375 6.75 9 6.75C8.6625 6.75 8.4375 6.975 8.4375 7.3125V10.6875C8.4375 11.025 8.6625 11.25 9 11.25Z"
              fill="url(#paint0_linear_206_917)"
            />
            <path
              d="M9.5625 12.7125C9.5625 12.8617 9.50324 13.0048 9.39775 13.1103C9.29226 13.2158 9.14918 13.275 9 13.275C8.85082 13.275 8.70774 13.2158 8.60225 13.1103C8.49676 13.0048 8.4375 12.8617 8.4375 12.7125C8.4375 12.5633 8.49676 12.4203 8.60225 12.3148C8.70774 12.2093 8.85082 12.15 9 12.15C9.14918 12.15 9.29226 12.2093 9.39775 12.3148C9.50324 12.4203 9.5625 12.5633 9.5625 12.7125Z"
              fill="white"
              fill-opacity="0.9"
            />
            <defs>
              <linearGradient
                id="paint0_linear_206_917"
                x1="9"
                y1="6.75"
                x2="9"
                y2="11.25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E0B15A" />
                <stop offset="1" stop-color="white" stop-opacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
          <div style="flex: 1; position: relative; overflow: hidden">
            <div
              style="
                box-sizing: border-box;
                color: #c4c6ca;
                text-align: left;
                font: 400 14px sans-serif;
                position: relative;
                left: 20%;
                top: 24%;
              "
            >
              Error
            </div>
            <div
              style="
                box-sizing: border-box;
                color: #7e828a;
                text-align: left;
                font: 400 12px sans-serif;
                position: relative;
                left: 20%;
                top: 54%;
                width: 79%;
                white-space: nowrap;
                overflow: hidden;
              "
            >
              ${this.content.text}
            </div>
          </div>
        </div>
      </div>
            `;
          }
        }
        this.element.setAttribute(attr, this.attributes[attr]);
      }
    }

    this.element.id = this.name;
    // this.element.style.position = "relative";
    this.element.style.width = this.frame.width;
    this.element.style.height = this.frame.height;
    this.element.style.left = this.frame.x;
    this.element.style.top = this.frame.y;

    this.element.classList.add("promptInformation-container");

    if (this.class) {
      this.class.forEach((item) => {
        this.element.classList.add(item);
      });
    }
    // this.element.style.overflow = "hidden";

    // if (this.content) {
    //   for (const content in this.content) {
    //     if (content === "icon") {
    //       const iconElement = document.createElement("img");
    //       iconElement.src = this.content.icon;
    //       iconElement.style.cssText = `
    //       position:absolute; top:0;left:0;right:0;bottom:0;margin:auto;height:80%;width:80%;
    //       `;
    //       this.element.appendChild(iconElement);
    //     } else {
    //       const contentElement = document.createElement("div");
    //       contentElement.innerText = this.content[content];
    //       contentElement.style.cssText = `
    //       position:absolute; top:0;height:100%;width:100%;display:flex;align-item:center;justify-content:center;align-items: center;color: #c4c6ca;
    //       `;
    //       this.element.appendChild(contentElement);
    //     }
    //   }
    // }

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

    // 获取父级容器
    let parentContainer;

    if (parent === "layers") {
      parentContainer = document.querySelector("#container");
    } else {
      parentContainer = document.querySelector(`#${parent}`);
    }

    // 创建DOM并添加到父级容器

    parentContainer.appendChild(domElement);

    if (this.frame.color) {
      this.element.style.color = this.frame.color;
    }

    let styleTag = document.createElement("style");
    styleTag.textContent = `
    .promptInformation-container{
      position: relative;
    }
    `;
    document.head.appendChild(styleTag);
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
export default PromptInformation;
