import { createInput } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/Input",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;

    return createInput({ label, ...args });
  },
  argTypes: {
    width: {
      table: {
        category: "frame", // 创建一个自定义分组名称
      },
      description: "组件宽度",
      defaultValue: "150px",
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
    placeholder: {
      table: {
        category: "attributes", // 创建一个自定义分组名称
      },
      description: "输入框提示词",

      control: "text",
    },
    titleSize: {
      table: {
        category: "attributes", // 创建一个自定义分组名称
      },
      description: "标题大小",

      control: "text",
    },
    titleColor: {
      table: {
        category: "attributes", // 创建一个自定义分组名称
      },
      description: "标题颜色",

      control: "text",
    },
    textSize: {
      table: {
        category: "attributes", // 创建一个自定义分组名称
      },
      description: "输入内容大小",

      control: "text",
    },
    textColor: {
      table: {
        category: "attributes", // 创建一个自定义分组名称
      },
      description: "输入内容颜色",

      control: "text",
    },
    text: {
      table: {
        category: "content", // 创建一个自定义分组名称
      },
      description: "组件标题",
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
    width: "150px",
    height: "30px",
    text: "text",
    x: "0px",
    y: "0px",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Input = {
  args: {
    name: "Input",
    class: [],
    scripts: ["Input.js"],
    style: { "font-size": "12px" },
  },
};
