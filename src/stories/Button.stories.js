import { createButton } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/Button",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
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
      value: "30px",
      control: "text",
    },

    type: {
      table: {
        category: "attribute", // 创建一个自定义分组名称
      },
      control: "select",
      options: ["important", "timelyImportant"],
    },
    class: {
      description: "组件类名",
      control: "array",
    },
    text: {
      table: {
        category: "content", // 创建一个自定义分组名称
      },
      description: "组件内容",
      defaultValue: "Button",
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
    width: "100px",
    height: "30px",
    text: "button",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const important = {
  args: {
    name: "PrimaryBtn",
    type: "important",
    class: [],
    scripts: ["PrimaryBtn.js"],
    style: { "font-size": "14px" },
  },
};

export const timelyImportant = {
  args: {
    name: "Button",
    type: "timelyImportant",
    class: [],
    scripts: ["Button.js"],
    style: { "font-size": "14px" },
  },
};
