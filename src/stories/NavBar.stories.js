import { createNavBar } from "./NavBar";
import NavigationBar from "../../framework/UI/SystemUI/NavigationBar.js";
const Dashboard = require("../../framework/Assets/nav-dashboardicon.svg");
const MyLibrary = require("../../framework/Assets/nav-mylibraryicon.svg");
const Collection = require("../../framework/Assets/nav-collectionicon.svg");
const Settings = require("../../framework/Assets/nav-settingsicon.svg");

import "./NavBar.css";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/NavBar",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    if (!document.querySelector("#storybook-docs").getAttribute("hidden")) {
      document.querySelector(".sb-story").innerHTML = "";
      const NavBarElement = document.createElement("div");
      const tem = new NavigationBar(NavBarElement, {
        name: "NavBar",
        frame: {
          width: args.width,
          height: args.height,
          x: args.x,
          y: args.y,
        },
        attributes: {
          layout: args.layout,
        },
        class: [],
        content: {
          list: args.list,
        },
        style: args.style,
        actions: [],
        script: [],
      });
      tem.startDrawing("storybook-docs .sb-story");
    }
    return createNavBar({ label, ...args });
  },
  argTypes: {
    width: {
      table: {
        category: "frame", // 创建一个自定义分组名称
      },
      description: "组件宽度",
      defaultValue: "100px",
      control: "text",
    },
    height: {
      table: {
        category: "frame", // 创建一个自定义分组名称
      },
      description: "组件高度",
      value: "10px",
      control: "text",
    },
    x: {
      table: {
        category: "frame", // 创建一个自定义分组名称
      },
      description: "组件左边距",
      defaultValue: "0px",
      control: "text",
    },
    y: {
      table: {
        category: "frame", // 创建一个自定义分组名称
      },
      description: "组件顶边距",
      value: "0px",
      control: "text",
    },
    layout: {
      table: {
        category: "attributes", // 创建一个自定义分组名称
      },
      description: "排序方式",
      control: "select",
      options: ["v-layout", "h-layout"],
      default: "h-layout", // 设置默认选项
    },
    list: {
      table: {
        category: "content", // 创建一个自定义分组名称
      },
      description: "组件内容",
      control: "array",
    },
    class: {
      description: "组件类名",
      control: "array",
    },

    style: {
      description: "css对象",
      control: "object",
    },
    scripts: {
      description: "组件脚本",
      control: "array",
    },
  },
  args: {
    width: "150px",
    height: "100px",
    x: "0px",
    y: "0px",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const NavBar = {
  args: {
    name: "NavBar",
    class: [],
    scripts: ["NavBar.js"],
    style: { "font-size": "12px" },
    list: [
      {
        icon: Dashboard,
        text: "Dashboard",
      },
      {
        icon: MyLibrary,
        text: "MyLibrary",
      },
      {
        icon: Collection,
        text: "Collection",
      },
      {
        icon: Settings,
        text: "Settings",
      },
    ],
  },
};
