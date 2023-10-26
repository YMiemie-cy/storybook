const { ipcRenderer, contextBridge } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
const initIcon = (callback) => ipcRenderer.on("loading-icon", callback); //监听主进程事件
const watchJsFunction = (callback) => ipcRenderer.on("js-change", callback);
const checkOperatingEnvFunction = (callback) =>
  ipcRenderer.on("check-operatingEnv", callback);

// const checkOperatingEnvFunction = async () => {
//   let results = await ipcRenderer.invoke("check-operatingEnv");
//   return results;
// };

const checkHardwareFunction = async () => {
  let results = await ipcRenderer.invoke("check-hardware");
  return results;
};

const scanFilesFunction = async (url, manifest) => {
  const response = await ipcRenderer.invoke("scan-files", url, manifest);
  return response;
};

const renderPageFunction = (callback) =>
  ipcRenderer.on("render-page", callback);

function openFolderFunction() {
  return new Promise((resolve, reject) => {
    ipcRenderer
      .invoke("openFolder")
      .then((result) => {
        // 处理主进程返回的结果
        // console.log("Result received in renderer.js:", result);

        resolve(result);
      })
      .catch((error) => {
        // 处理错误
        console.error('Error in invoking "renderFl":', error);
      });
  });
}
const saveImagesFunction = async (data) => {
  let results = await ipcRenderer.invoke("save-image", data);

  return results;
};

const saveFileFunction = async (url, name, data, isSingle) => {
  console.log("preload", url, name, data, isSingle);
  let results = await ipcRenderer.invoke(
    "save-file",
    url,
    name,
    data,
    isSingle
  );
  return results;
};
const deleteFileFunction = async (url) => {
  let results = await ipcRenderer.invoke("delete-file", url);
  return results;
};
const openFileFunction = async (url, manifest) => {
  let results = await ipcRenderer.invoke("open-file", url, manifest);
  return results;
};

const saveAppFileFunction = async (data, pageName, manifest) => {
  console.log("preload", data, pageName, manifest);
  let results = await ipcRenderer.invoke(
    "save-appFile",
    data,
    pageName,
    manifest
  );

  return results;
};

const cloneFileFunction = async (sourcePath, targetPath) => {
  let results = await ipcRenderer.invoke("clone-file", sourcePath, targetPath);
  return results;
};

const openNewWindowFunction = async (url) => {
  let results = await ipcRenderer.invoke("open-new-window", url);
  console.log("open-new-window", url);
  return results;
};

const openNewAppWindowFunction = async (url, manifest) => {
  let results = await ipcRenderer.invoke("open-new-appWindow", url, manifest);
  console.log("open-new-appWindow", url, manifest);
  return results;
};

contextBridge.exposeInMainWorld("myApi", {
  initIcon,
  checkOperatingEnvFunction,
  checkHardwareFunction,
  scanFilesFunction,
  openFileFunction,
  openFolderFunction,
  saveImagesFunction,
  deleteFileFunction,
  saveAppFileFunction,
  openNewWindowFunction,
  openNewAppWindowFunction,
  renderPageFunction,
  saveFileFunction,
  watchJsFunction,
  cloneFileFunction,
});
