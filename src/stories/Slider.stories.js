import { createSlider } from "./Slider";
import SliderEle from "../../framework/UI/SystemUI/Slider.js";
import "./Slider.css";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/Slider",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    if (!document.querySelector("#storybook-docs").getAttribute("hidden")) {
      document.querySelector(".sb-story").innerHTML = "";
      const SliderElement = document.createElement("div");
      const tem = new SliderEle(SliderElement, {
        name: "Slider",
        frame: {
          width: args.width,
          height: args.height,
          x: args.x,
          y: args.y,
        },
        attributes: {},
        class: [],
        content: {},
        style: args.style,
        actions: [],
        script: [],
      });
      tem.startDrawing("storybook-docs .sb-story");
    }
    return createSlider({ label, ...args });
  },
  argTypes: {
    width: {
      table: {
        category: "frame", // 创建一个自定义分组名称
      },
      description: "组件宽度",

      control: "text",
    },
    height: {
      table: {
        category: "frame", // 创建一个自定义分组名称
      },
      description: "组件高度",

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
    width: "180px",
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
