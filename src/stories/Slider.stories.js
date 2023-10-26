import { createSlider } from "./Slider";
import "./Slider.css";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/Slider",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createSlider({ label, ...args });
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

    min: {
      table: {
        category: "attribute", // 创建一个自定义分组名称
      },
      control: "number",
    },
    max: {
      table: {
        category: "attribute", // 创建一个自定义分组名称
      },
      control: "number",
    },
    step: {
      table: {
        category: "attribute", // 创建一个自定义分组名称
      },
      control: "number",
    },
    value: {
      table: {
        category: "attribute", // 创建一个自定义分组名称
      },
      control: "number",
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
    height: "10px",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Slider = {
  args: {
    name: "Slider",
    class: [],
    scripts: ["Slider.js"],
    style: { "font-size": "12px" },
    min: 0,
    max: 100,
    step: 1,
    value: 0,
  },
};
