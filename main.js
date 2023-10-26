const { app, BrowserWindow, ipcMain, dialog, net, shell } = require("electron");
const { protocol } = require("electron");
const path = require("path");
const fs = require("fs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { spawn } = require("child_process");
const os = require("os");
const url = require("url");
const si = require("systeminformation");
const readline = require("readline");

let checkOperatingEnvProcess;
let newWindow;

// const pingProcess = spawn("ping", ["www.baidu.com"]);
// const pingProcess = spawn("./webui.sh", ["--api"], {
//   cwd: "/Users/sineaptic-designmac/venv_3.9/stable-diffusion-webui",
// });

// const activateProcess = spawn("source", [
//   "/Users/sineaptic-designmac/venv_3.9/bin/activate",
// ]);

// // 监听激活命令的关闭事件
// activateProcess.on("close", (code) => {
//   if (code === 0) {
//     // 激活成功，可以执行其他命令

//     const pingProcess = spawn(
//       "sh",
//       ["-c", "../stable-diffusion-webui/webui.sh --api"],
//       {
//         cwd: "/Users/sineaptic-designmac/venv_3.9/bin",
//       }
//     );

//     // 监听子进程的 stdout
//     pingProcess.stdout.on("data", (data) => {
//       // 这里可以处理实时返回的 ping 输出
//       console.log(`stdout: ${data}`);
//     });

//     // 监听子进程的 stderr
//     pingProcess.stderr.on("data", (data) => {
//       // 这里可以处理错误信息
//       console.error(`stderr: ${data}`);
//     });

//     // 监听子进程的关闭事件
//     pingProcess.on("close", (code) => {
//       console.log(`子进程退出，退出码 ${code}`);
//     });
//   } else {
//     console.error("虚拟环境激活失败");
//   }
// });

// const activateProcess = spawn(
//   "/bin/bash",
//   [
//     "-c",
//     "source /Users/sineaptic-designmac/venv_3.9/bin/activate && cd /Users/sineaptic-designmac/venv_3.9/stable-diffusion-webui && ./webui.sh --api",
//   ],
//   {
//     stdio: "pipe", // 使用单独的输出流
//   }
// );

// // 监听子进程的 stdout
// activateProcess.stdout.on("data", (data) => {
//   console.log(`stdout: ${data} /n`);
// });

// // 监听子进程的 stderr
// activateProcess.stderr.on("data", (data) => {
//   console.error(`stderr: ${data}`);
//   return;
// });

// // 监听子进程的关闭事件
// activateProcess.on("close", (code) => {
//   console.log(`子进程退出，退出码 ${code}`);
// });

// exec2(
//   "source /Users/sineaptic-designmac/venv_3.9/bin/activate && cd /Users/sineaptic-designmac/venv_3.9/stable-diffusion-webui && ls && ./webui.sh --api",
//   function (error, stdout, stderr) {
//     if (error) {
//       console.error("error: " + error);
//       return;
//     }
//     console.log("stdout: " + stdout);
//     console.log("stderr: " + stderr);
//   }
// );

/** function */

function openFolder() {
  return new Promise((resolve, reject) => {
    const options = {
      properties: ["openDirectory"],
      defaultPath: path.join(__dirname, "output"), // 替换为你想要打开的文件夹路径
    };

    dialog
      .showOpenDialog(options)
      .then((result) => {
        if (!result.canceled) {
          const selectedFolderPath = result.filePaths[0];
          // 在这里处理选定的文件夹路径
          console.log("Selected folder:", selectedFolderPath);
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  });
}
function renderElement(url) {
  return new Promise((resolve, reject) => {
    // 读取.fl文件的内容
    fs.readFile(url, "utf8", (err, fileContent) => {
      if (err) {
        console.error("无法读取文件：", err);
        return;
      }

      // 使用正则表达式匹配 <html> </html> 之间的内容
      const htmlRegex = /<html>([\s\S]*?)<\/html>/;
      const htmlMatch = fileContent.match(htmlRegex);
      const htmlContent = htmlMatch ? htmlMatch[1] : "";

      // 使用正则表达式匹配 <js> </js> 之间的内容
      const jsRegex = /<js>([\s\S]*?)<\/js>/;
      const jsMatch = fileContent.match(jsRegex);
      const jsContent = jsMatch ? jsMatch[1] : "";

      // 使用正则表达式匹配 <css> </css> 之间的内容
      const cssRegex = /<css>([\s\S]*?)<\/css>/;
      const cssMatch = fileContent.match(cssRegex);
      const cssContent = cssMatch ? cssMatch[1] : "";

      // // 现在你可以将提取的内容用于你的逻辑操作·
      // console.log("HTML内容：", htmlContent);
      // console.log("JS内容：", jsContent);
      // console.log("CSS内容：", cssContent);
      const ans = {
        htmlContent: htmlContent,
        cssContent: cssContent,
        jsContent: jsContent,
      };
      resolve(ans);
    });
  });
}

// 扫描目录并判断每个目录下是否有 type 文件
function scanFiles(url, type) {
  console.log("scanFiles", url, type);
  const results = [];

  const handleScanFiles = (url, target) => {
    const entries = fs.readdirSync(url, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(url, entry.name);

      if (entry.isFile()) {
        const fileName = entry.name;

        if (target.charAt(0) === ".") {
          // 如果 target 以 "." 开头，表示按文件后缀名匹配
          if (path.extname(fileName) === target) {
            // results.push(entryPath);
            results.push(entry.name);
          }
        } else {
          // 否则按文件名匹配
          if (fileName === target) {
            if (fileName === "manifest.json") {
              try {
                const content = fs.readFileSync(entryPath, "utf8");
                const parsedContent = JSON.parse(content);
                results.push({ path: entryPath, content: parsedContent });
              } catch (error) {
                console.error(`Error reading or parsing ${entryPath}:`, error);
              }
            } else {
              results.push(entryPath);
            }
          }
        }
      } else if (entry.isDirectory()) {
        // 递归扫描子目录
        handleScanFiles(entryPath, target);
      }
    }
  };

  handleScanFiles(url, type);

  console.log("scan", results);

  return results;
}

function saveImage(data) {
  // 一个包含多个Base64编码的图像数据的数组

  const base64DataArray = data;

  // 要保存图像的文件夹路径
  const outputFolder = path.join(__dirname, "output", "images");

  // 如果文件夹不存在，则创建它
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  // 处理每个Base64数据
  base64DataArray.forEach((base64Data, index) => {
    // 生成一个唯一的文件名
    const fileName = `image_${Date.now()}.png`;

    // 构建完整的文件路径
    const filePath = path.join(outputFolder, fileName);

    // 去掉Base64编码中的data:image/png;base64,
    const base64Image = base64Data.replace(/^data:image\/\w+;base64,/, "");

    // 将Base64数据转换为Buffer
    const imageBuffer = Buffer.from(base64Image, "base64");

    // 将Buffer写入文件
    fs.writeFileSync(filePath, imageBuffer);

    console.log(`Image ${index} saved to ${filePath}`);
  });
}

function saveFile(url, name, data, isSingle) {
  const outputFolder = path.join(__dirname, url);
  // 如果文件夹不存在，则创建它
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }
  if (isSingle) {
    const FilePath = path.join(outputFolder, name);
    fs.writeFileSync(FilePath, data);
  } else {
  }
}
function deleteFile(url) {
  const deleteFolder = path.join(__dirname, url);

  console.log("deleteFolder", deleteFolder);

  // 替换为您要删除的文件路径

  fs.unlink(deleteFolder, (error) => {
    if (error) {
      console.error("删除文件时出错:", error);
    } else {
      console.log("文件删除成功");
    }
  });
}
function saveAppFile(data, pageName, manifest) {
  console.log("save", data, pageName, manifest);
  // 要保存文件的文件夹路径
  const outputFolder = path.join(__dirname, "DemoAppText", manifest.appname);

  // 如果文件夹不存在，则创建它
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  const outputScript = path.join(outputFolder, "scripts");
  const outputAssets = path.join(outputFolder, "assets");

  if (!fs.existsSync(outputScript)) {
    fs.mkdirSync(outputScript, { recursive: true });
  }
  if (!fs.existsSync(outputAssets)) {
    fs.mkdirSync(outputAssets, { recursive: true });
  }

  // 将数据保存为 Manifest文件
  const manifestFile = path.join(outputFolder, "manifest.json");
  // console.log(manifestFile, manifest);
  fs.writeFileSync(manifestFile, JSON.stringify(manifest));

  // 将数据保存为 JSON 文件
  const jsonFilePath = path.join(outputFolder, `${pageName}.json`);
  fs.writeFileSync(jsonFilePath, JSON.stringify(data.pageData));

  // 将数据保存为 JavaScript 文件
  // data.scriptList.forEach((item) => {
  //   let jsFilePath = path.join(outputScript, item.name + ".js");

  //   fs.writeFileSync(jsFilePath, item.content);
  // });

  // 将数据保存为 图片 文件
  if (data.pageData.config.style.background) {
    let cssStyle = data.pageData.config.style.background;
    let regex = /url\("([^"]+)"\)/;
    let match = cssStyle.match(regex);

    if (match) {
      let filePath = match[1];
      console.log("File path:", filePath);

      // 使用 url 模块的 fileURLToPath() 函数来处理文件路径
      let sourceFilePath = url.fileURLToPath(filePath);

      // 目标文件夹路径
      let targetFolderPath = outputAssets;

      // 获取源文件的文件名
      let fileName = path.basename(sourceFilePath);

      // 构建目标文件的完整路径
      let targetFilePath = path.join(targetFolderPath, fileName);

      // 使用 fs 模块进行文件拷贝
      fs.copyFile(sourceFilePath, targetFilePath, (err) => {
        if (err) {
          console.error("Error copying file:", err);
        } else {
          console.log("File copied successfully to:", targetFilePath);
        }
      });
    } else {
      console.log("File path not found in the CSS style.");
    }
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 1200,

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("./desktop2/index.html");
  // win.loadFile("UIEditor.html");
  // win.webContents.openDevTools();

  // 监听窗口大小变化事件
  win.on("resize", () => {
    const windowWidth = win.getSize()[0];
    const newFontSize = Math.min(Math.max(windowWidth / 80, 10), 30); // 根据需要调整范围
    win.webContents.executeJavaScript(
      `document.documentElement.style.fontSize = "${newFontSize}px";`
    );
  });
  const platform = process.platform;
  const isOnline = net.isOnline();

  async function checkHardware(platform) {
    let hardwareList = {};
    if (platform === "win32") {
      console.log("Windows 系统");
      // 执行 Windows 特定的操作
    } else if (platform === "darwin") {
      console.log("macOS 系统");

      /** */
      // 获取磁盘剩余空间
      const diskInfo = await si.fsSize();
      const diskFreeSpaceGB = diskInfo[0].size / (1024 * 1024 * 1024);

      // 获取CPU型号
      const cpuInfo = await si.cpu();
      const cpuModel = cpuInfo.manufacturer + " " + cpuInfo.brand;

      // 获取GPU型号
      const gpuInfo = await si.graphics();
      const gpuModel = gpuInfo.controllers[0].model;

      // 获取显存大小
      const gpuMemoryInfo = await si.graphics();
      const gpuMemoryGB =
        gpuMemoryInfo.controllers[0].vram / (1024 * 1024 * 1024);

      hardwareList.list = {
        diskFreeSpaceGB: diskInfo,

        cpu: cpuModel,

        gpu: gpuModel,

        gpuMemoryInfo: gpuMemoryInfo,
      };
      /** */

      try {
        // 检查系统显卡型号
        const { stdout, stderr } = await exec(
          "system_profiler SPDisplaysDataType | grep Chip"
        );

        if (stderr) {
          console.error(`Error: ${stderr}`);
          return;
        }

        const graphicsCard = stdout.trim();

        hardwareList.graphicsCard = graphicsCard;

        // 检查系统剩余空间
        const remainingSpace = await exec(`df -h /`);

        if (remainingSpace.stderr) {
          console.error(`Error: ${remainingSpace.error.message}`);
          return;
        }

        // 解析命令输出，提取剩余空间信息
        const stdoutLines = remainingSpace.stdout.split("\n");
        const diskSpaceResult = stdoutLines[1]
          .replace(/ +/g, " ")
          .trim()
          .split(" ");

        hardwareList.freeMemory = diskSpaceResult[3];

        checkOperatingEnv();
      } catch (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
    } else {
      console.log("其他操作系统");
      // 执行其他操作系统的特定操作
    }

    return hardwareList;
  }
  function checkOperatingEnv() {
    const command = "/bin/bash";
    const args = [
      "-c",
      "export PYTHONUNBUFFERED=1 && source /Users/sineaptic-designmac/venv_3.9/bin/activate && cd /Users/sineaptic-designmac/venv_3.9/stable-diffusion-webui && ./webui.sh --api",
    ];

    checkOperatingEnvProcess = spawn(command, args, {
      stdio: ["pipe", "pipe", "pipe"], // 使用单独的输出流
    });

    // 创建读取子进程标准输出的 readline 接口
    const rlStdout = readline.createInterface({
      input: checkOperatingEnvProcess.stdout,
      output: process.stdout,
      terminal: false, // 非交互式
      // crlfDelay: Infinity, // 不使用回车符分割行
    });

    // 创建读取子进程标准错误的 readline 接口
    const rlStderr = readline.createInterface({
      input: checkOperatingEnvProcess.stderr,
      output: process.stderr,
      terminal: false, // 非交互式
    });

    // 监听每一行标准输出
    rlStdout.on("line", (line) => {
      console.log(`stdout: ${line}`);
      win.webContents.send("check-operatingEnv", line);
    });

    // 监听每一行标准错误
    rlStderr.on("line", (line) => {
      console.error(`stderr: ${line}`);
    });

    // 监听子进程的关闭事件
    checkOperatingEnvProcess.on("close", (code) => {
      console.log(`子进程退出，退出码 ${code}`);
    });
  }
}

function openFile(url, manifest) {
  let outputFolder = path.join(
    __dirname,
    "DemoAppText",
    manifest.appname,
    "scripts",
    url
  );
  console.log("outputFolder", outputFolder);
  shell.openPath(outputFolder);

  fs.watch(outputFolder, (eventType, filename) => {
    if (eventType === "change") {
      // 读取文件内容并发送给渲染进程
      fs.readFile(outputFolder, "utf-8", (err, data) => {
        newWindow.webContents.send("js-change", url, data);
      });
    }
  });
}

function cloneFile(sourcePath, targetDirectory) {
  // 从源文件路径中提取文件名
  const sourceFileName = path.basename(sourcePath);

  // 生成目标文件路径
  let targetPath = path.join(targetDirectory, sourceFileName);

  // 如果文件名已存在，添加数字，直到找到一个唯一的文件名
  // let fileCounter = 1;
  // while (fs.existsSync(targetPath)) {
  //   const fileExtension = path.extname(sourceFileName);
  //   const fileNameWithoutExtension = path.basename(
  //     sourceFileName,
  //     fileExtension
  //   );
  //   targetPath = path.join(
  //     targetDirectory,
  //     `${fileNameWithoutExtension}_${fileCounter}${fileExtension}`
  //   );
  //   fileCounter++;
  // }

  // 使用fs的createReadStream和createWriteStream方法执行复制操作
  const sourceStream = fs.createReadStream(sourcePath);
  const targetStream = fs.createWriteStream(targetPath);

  sourceStream.pipe(targetStream);

  return new Promise((resolve, reject) => {
    // 监听复制完成事件
    targetStream.on("finish", () => {
      resolve(targetPath); // 返回成功的文件名
    });

    // 监听可能的错误
    targetStream.on("error", (err) => {
      reject(err);
    });
  });
}

/** function */

// ipcMain.handle("renderFl", (event, arg) => {
//   return renderElement(arg);
// });

ipcMain.handle("openFolder", (event, arg) => {
  return openFolder();
});
ipcMain.handle("save-image", (event, data) => {
  saveImage(data);
  return data;
});

ipcMain.handle("save-file", (event, url, name, data, isSingle) => {
  console.log("save-appFile", url, data, isSingle);
  saveFile(url, name, data, isSingle);
  return data;
});

ipcMain.handle("delete-file", (event, url) => {
  deleteFile(url);
  return url;
});

ipcMain.handle("save-appFile", (event, data, pageName, manifest) => {
  console.log("save-appFile", data, pageName, manifest);
  saveAppFile(data, pageName, manifest);
  return data;
});

ipcMain.handle("scan-files", async (event, url, type) => {
  // 在这里执行扫描图像的方法，并返回数据
  const result = await scanFiles(url, type);
  return result;
});

ipcMain.handle("check-hardware", async (event) => {
  const platform = process.platform;
  const isOnline = net.isOnline();
  const result = await checkHardware(platform);
  return result;
});

ipcMain.handle("open-file", (event, url, manifest) => {
  openFile(url, manifest);
});

ipcMain.handle("clone-file", (event, sourcePath, targetPath) => {
  return cloneFile(sourcePath, targetPath);
});

ipcMain.handle("open-new-window", (event, url) => {
  newWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // let scanImageData = scanImage();
  newWindow.webContents.openDevTools();

  // 监听窗口大小变化事件
  // newWindow.on("resize", () => {
  //   const windowWidth = newWindow.getSize()[0];
  //   const newFontSize = Math.min(Math.max(windowWidth / 80, 10), 30); // 根据需要调整范围
  //   newWindow.webContents.executeJavaScript(
  //     `document.documentElement.style.fontSize = "${newFontSize}px";`
  //   );
  // });

  newWindow.webContents.on("did-finish-load", () => {
    // 数据准备好后,通过send发送
    // newWindow.webContents.send("scan-images", scanImageData);
  });
  newWindow.on("closed", () => {
    // 终止子进程
    if (checkOperatingEnvProcess && !checkOperatingEnvProcess.killed) {
    }
    // checkOperatingEnvProcess.kill("SIGINT");
    // checkOperatingEnvProcess.stdout.destroy();
    // checkOperatingEnvProcess.stderr.destroy();
    // checkOperatingEnvProcess.stdin.destroy();
    // newWindow = null;
  });

  // win.loadFile("index.html");
  protocol.registerFileProtocol("app", (request, callback) => {
    const filePath = request.url.replace("app://", "");
    callback({ path: path.join(__dirname, filePath) });
  });

  if (url.includes("127.0.0.1")) {
    newWindow.loadURL(url);
  } else {
    newWindow.loadURL("file://" + path.join(__dirname, url));
  }
});

ipcMain.handle("open-new-appWindow", (event, url, manifest) => {
  const appWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // 监听窗口大小变化事件
  // appWindow.on("resize", () => {
  //   const windowWidth = appWindow.getSize()[0];
  //   const newFontSize = Math.min(Math.max(windowWidth / 80, 10), 30); // 根据需要调整范围
  //   appWindow.webContents.executeJavaScript(
  //     `document.documentElement.style.fontSize = "${newFontSize}px";`
  //   );
  // });

  async function checkHardware(platform) {
    let hardwareList = {};
    if (platform === "win32") {
      console.log("Windows 系统");
      // 执行 Windows 特定的操作
    } else if (platform === "darwin") {
      console.log("macOS 系统");

      /** */
      // 获取磁盘剩余空间
      const diskInfo = await si.fsSize();
      const diskFreeSpaceGB = diskInfo[0].size / (1024 * 1024 * 1024);

      // 获取CPU型号
      const cpuInfo = await si.cpu();
      const cpuModel = cpuInfo.manufacturer + " " + cpuInfo.brand;

      // 获取GPU型号
      const gpuInfo = await si.graphics();
      const gpuModel = gpuInfo.controllers[0].model;

      // 获取显存大小
      const gpuMemoryInfo = await si.graphics();
      const gpuMemoryGB =
        gpuMemoryInfo.controllers[0].vram / (1024 * 1024 * 1024);

      hardwareList.list = {
        diskFreeSpaceGB: diskInfo,

        cpu: cpuModel,

        gpu: gpuModel,

        gpuMemoryInfo: gpuMemoryInfo,
      };
      /** */

      try {
        // 检查系统显卡型号
        const { stdout, stderr } = await exec(
          "system_profiler SPDisplaysDataType | grep Chip"
        );

        if (stderr) {
          console.error(`Error: ${stderr}`);
          return;
        }

        const graphicsCard = stdout.trim();

        hardwareList.graphicsCard = graphicsCard;

        // 检查系统剩余空间
        const remainingSpace = await exec(`df -h /`);

        if (remainingSpace.stderr) {
          console.error(`Error: ${remainingSpace.error.message}`);
          return;
        }

        // 解析命令输出，提取剩余空间信息
        const stdoutLines = remainingSpace.stdout.split("\n");
        const diskSpaceResult = stdoutLines[1]
          .replace(/ +/g, " ")
          .trim()
          .split(" ");

        hardwareList.freeMemory = diskSpaceResult[3];

        // checkOperatingEnv();
      } catch (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
    } else {
      console.log("其他操作系统");
      // 执行其他操作系统的特定操作
    }

    return hardwareList;
  }

  function checkOperatingEnv() {
    const command = "/bin/bash";
    const args = [
      "-c",
      "export PYTHONUNBUFFERED=1 && source /Users/sineaptic-designmac/venv_3.9/bin/activate && cd /Users/sineaptic-designmac/venv_3.9/stable-diffusion-webui && ./webui.sh --api",
    ];

    const activateProcess = spawn(command, args, {
      stdio: ["pipe", "pipe", "pipe"], // 使用单独的输出流
    });

    // 创建读取子进程标准输出的 readline 接口
    const rlStdout = readline.createInterface({
      input: activateProcess.stdout,
      output: process.stdout,
      terminal: false, // 非交互式
      // crlfDelay: Infinity, // 不使用回车符分割行
    });

    // 创建读取子进程标准错误的 readline 接口
    const rlStderr = readline.createInterface({
      input: activateProcess.stderr,
      output: process.stderr,
      terminal: false, // 非交互式
    });

    // 监听每一行标准输出
    rlStdout.on("line", (line) => {
      console.log(`stdout: ${line}`);
      appWindow.webContents.send("check-operatingEnv", line);
    });

    // 监听每一行标准错误
    rlStderr.on("line", (line) => {
      console.error(`stderr: ${line}`);
    });

    // 监听子进程的关闭事件
    activateProcess.on("close", (code) => {
      console.log(`子进程退出，退出码 ${code}`);
    });
  }

  // appWindow.webContents.openDevTools();
  console.log("url", url, manifest);

  appWindow.webContents.on("did-finish-load", () => {
    // 数据准备好后,通过send发送
    appWindow.webContents.send("render-page", url, manifest);
  });
  appWindow.on("closed", () => {
    // 在窗口关闭时触发的操作
    console.log("Window closed.");
    // 如果需要执行其他清理操作，请在这里添加代码
  });

  // win.loadFile("index.html");
  protocol.registerFileProtocol("app", (request, callback) => {
    const filePath = request.url.replace("app://", "");
    callback({ path: path.join(__dirname, filePath) });
  });

  appWindow.loadURL("file://" + path.join(__dirname, "app.html"));
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      // createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
