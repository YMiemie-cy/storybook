import { createImgLoader } from "./Image";
import { createImgViewer } from "./Image";
import { createImage } from "./Image";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/Image",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;

    if (args.name === "ImgViewer") {
      return createImgViewer({ label, ...args });
    }
    if (args.name === "Image") {
      return createImage({ label, ...args });
    }
    return createImgLoader({ label, ...args });
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
    width: "300px",
    height: "200px",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const ImgLoader = {
  args: {
    name: "ImgLoader",
    class: [],
    scripts: ["ImgLoader.js"],
    style: { "font-size": "16px" },
    text: "Upload Image",
  },
};

export const ImgViewer = {
  args: {
    name: "ImgViewer",

    class: [],
    scripts: ["ImgViewer.js"],
    style: { "font-size": "16px" },
  },
};

export const ImgCanvas = {
  argTypes: {
    isCanvas: {
      table: {
        category: "attribute", // 创建一个自定义分组名称
      },

      control: "boolean",
    },
  },
  args: {
    name: "ImgCanvas",
    class: [],
    scripts: ["ImgCanvas.js"],
    isCanvas: true,
  },
};
export const Image = {
  borderLess: {
    table: {
      category: "attribute", // 创建一个自定义分组名称
    },

    control: "boolean",
  },
  args: {
    name: "Image",
    class: [],
    scripts: ["Image.js"],
    borderLess: true,
  },
};
