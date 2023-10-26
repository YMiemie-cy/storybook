import { loaderPage } from "./framework/Laucher/PageLoader/loader.js";

const loading = async () => {
  await loaderPage("app:///DemoApp/Demo2/page.json");
  /** function */
  const openFolder = () => {
    window.myApi
      .openFolderFunction()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showImageData = async () => {
    let imageData = Array.from(
      await window.myApi.scanFilesFunction("output/images", ".png")
    ).reverse();
    console.log(imageData);

    let imgList = document.querySelector(".contain-img");
    imageData.forEach((item, index) => {
      let tem = document.createElement("div");
      tem.style.cssText = `
      width: 38px;
      max-height: 38px;
      margin: 4px 4px 0 0;
      box-sizing: border-box;
      padding: 2px;
      overflow: hidden;
  
      `;
      tem.innerHTML = `
      <img
      src="${item}"
      alt=""
      style="height: 100%;width: 100%; border-radius: 2px;"
    />
      `;
      imgList.appendChild(tem);
      if (index === 0) {
        document.querySelector("#sidebar .show-img img").src = item;
        imgList.querySelector("img").parentNode.style.border =
          "dashed 1px white";
        imgList.querySelector("img").parentNode.style.borderRadius = "4px";
      }
    });
    let imgs = document.querySelectorAll(".contain-img img");

    imgs.forEach((item) => {
      item.style.cursor = "pointer";

      item.addEventListener("click", () => {
        imgs.forEach((item2) => {
          item2.parentElement.style.border = "none";
        });
        item.parentElement.style.border = "dashed 1px white";
        item.parentElement.style.borderRadius = "4px";
        document.querySelector(".show-img img").src = item.src;
      });
    });
  };

  const renderPage = (url) => {
    window.myApi.preloadedFunction(url).then((result) => {
      let { htmlContent, cssContent, jsContent } = result;

      // 清除上次执行的样式和脚本
      const existingStyleElement = document.querySelector("#custom-style");
      const existingScriptElement = document.querySelector("#custom-script");
      if (existingStyleElement) {
        existingStyleElement.remove();
      }
      if (existingScriptElement) {
        existingScriptElement.remove();
      }

      // 添加html结构
      const container = document.querySelector("#container");
      container.innerHTML = htmlContent;

      // 添加CSS样式
      const styleElement = document.createElement("style");
      styleElement.textContent = cssContent;
      styleElement.id = "custom-style";
      document.head.appendChild(styleElement);

      // 添加js逻辑
      const script = document.createElement("script");
      script.textContent = jsContent;
      script.id = "custom-script";
      document.body.appendChild(script);
    });
  };

  function changPage() {
    // renderPage("./src/views/exploitation.fl");
  }
  /** function */

  /** dom event */
  // document.getElementById("changePageBtn").addEventListener("click", changPage);
  // console.log(window.myApi.scanImageFunction());

  showImageData();

  document.querySelector(".open-btn").addEventListener("click", openFolder);

  /** dom event */
  // renderPage("./src/views/desktop.fl");
};
loading();
