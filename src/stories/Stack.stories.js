import { createHStack, createVStack } from "./Stack";
// import { createVStack } from "./Stack";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/Stack",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;

    if (args.name === "VStack") {
      return createVStack({ label, ...args });
    }
    if (args.name === "HStack") {
      return createHStack({ label, ...args });
    }
  },
  argTypes: {
    width: {
      table: {
        category: "frame", // 创建一个自定义分组名称
      },
      description: "组件宽度",
      defaultValue: "300px",
      control: "text",
    },
    height: {
      table: {
        category: "frame", // 创建一个自定义分组名称
      },
      description: "组件高度",
      value: "200px",
      control: "text",
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
    width: "100px",
    height: "100px",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const HStack = {
  args: {
    name: "HStack",

    scripts: ["HStack.js"],
  },
};

export const VStack = {
  args: {
    name: "VStack",

    scripts: ["VStack.js"],
  },
};
