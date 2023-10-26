import { createParamBlock } from "./ParamBlock";
import "./ParamBlock.css";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/ParamBlock",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!

    return createParamBlock({ label, ...args });
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
    width: "200px",
    height: "30px",
    x: "0px",
    y: "0px",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const ParamBlock = {
  args: {
    name: "ParamBlock",
    class: [],
    scripts: ["ParamBlock.js"],
    style: { "font-size": "12px" },
    text: "number",
  },
};
