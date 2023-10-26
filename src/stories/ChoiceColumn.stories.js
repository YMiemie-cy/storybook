import { createChoiceColumn } from "./ChoiceColumn";
import ChoiceColumnEle from "../../framework/UI/SystemUI/ChoiceColumn.js";
const imageItemBackground = require("../../framework/Assets/editor/image-item-background.svg");

import "./ChoiceColumn.css";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/ChoiceColumn",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    if (!document.querySelector("#storybook-docs").getAttribute("hidden")) {
      document.querySelector(".sb-story").innerHTML = "";
      const ChoiceColumnElement = document.createElement("div");
      const tem = new ChoiceColumnEle(ChoiceColumnElement, {
        name: "ChoiceColumn",
        frame: {
          width: args.width,
          height: args.height,
          x: args.x,
          y: args.y,
        },
        attributes: {
          isTitleVisible: String(args.isTitleVisible),
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
    return createChoiceColumn({ label, ...args });
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
    isTitleVisible: {
      table: {
        category: "attributes", // 创建一个自定义分组名称
      },
      description: "组件子项标题是否显示",
      control: "boolean",
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
export const ChoiceColumn = {
  args: {
    name: "ChoiceColumn",
    class: [],
    scripts: ["ChoiceColumn.js"],
    style: { "font-size": "12px" },
    isTitleVisible: true,
    list: [
      {
        url: imageItemBackground,
        title: "item1",
      },
      {
        url: imageItemBackground,
        title: "item2",
      },
      {
        url: imageItemBackground,
        title: "item3",
      },
    ],
  },
};
