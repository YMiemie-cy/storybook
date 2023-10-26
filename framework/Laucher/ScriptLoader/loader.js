// const fs = require("fs");
// const path = require("path");

// // 获取文件夹路径
// const folderPath = path.join(__dirname, "../../../demoApp/demo1/script");

// // 读取文件夹下的所有文件
// fs.readdirSync(folderPath).forEach((file) => {
//   const filePath = path.join(folderPath, file);

//   // 如果是JS文件，尝试引入并处理暴露的函数
//   if (path.extname(file) === ".js") {
//     try {
//       const module = require(filePath);
//       if (typeof module === "function") {
//         // 创建一个 <script> 标签，将函数代码放入其中
//         const scriptTag = document.createElement("script");
//         scriptTag.textContent = module.toString();
//         document.head.appendChild(scriptTag);
//       }
//     } catch (error) {
//       console.error(`Error loading module from ${file}:`, error);
//     }
//   }
// });

// // export function loaderPage(url) {
// //   $.getJSON(url, (data) => {
// //     for (const item in data) {
// //       if (item === "config") {
// //         for (const configItem in data[item]) {
// //           if (configItem === "style") {
// //             for (const style in data[item].style) {
// //               document.body.style[style] = data[item].style[style];
// //             }
// //           }
// //         }
// //       }
// //     }
// //   });
// // }
