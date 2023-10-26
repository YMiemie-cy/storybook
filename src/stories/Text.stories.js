import { createText } from "./Text";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/Text",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;

    return createText({ label, ...args });
  },
  argTypes: {
    width: {
      table: {
        category: "frame", // 创建一个自定义分组名称
      },
      description: "组件宽度",
      defaultValue: "30px",
      control: "text",
    },
    height: {
      table: {
        category: "frame", // 创建一个自定义分组名称
      },
      description: "组件高度",
      value: "20px",
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

    class: {
      description: "组件类名",
      control: "array",
    },
    type: {
      table: {
        category: "attributes", // 创建一个自定义分组名称
      },
      description: "组件类型",
      control: "select",
      options: ["label", "title", "subtitle"],
    },
    text: {
      table: {
        category: "content", // 创建一个自定义分组名称
      },
      description: "组件内容",
      defaultValue: "text",
      control: "text",
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
    width: "30px",
    height: "20px",
    text: "text",
    x: "0px",
    y: "0px",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Label = {
  args: {
    name: "Label",
    class: [],
    scripts: ["Label.js"],
    style: { "font-size": "16px" },
    type: "label",
  },
};

export const Title = {
  args: {
    name: "Title",
    class: [],
    scripts: ["Title.js"],
    style: { "font-size": "16px" },
    type: "title",
  },
};

export const Subtitle = {
  args: {
    name: "Subtitle",
    class: [],
    scripts: ["Subtitle.js"],
    type: "subtitle",
  },
};
