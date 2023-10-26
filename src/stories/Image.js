import Image from "../../framework/UI/SystemUI/Image.js";
import ImageUploader from "../../framework/UI/SystemUI/ImageUploader.js";
import "./ImgLoader.css";
import ImageDisplay from "../../framework/UI/SystemUI/ImageDisplay.js";
import "./ImgViewer.css";

export const createImgLoader = ({ width, height, isCanvas, text, style }) => {
  const ImgCanvasElement = document.createElement("div");
  const tem = new ImageUploader(ImgCanvasElement, {
    name: "ImgLoader",
    frame: { width: width, height: height },
    attributes: {
      isCanvas: String(isCanvas),
    },
    class: [],
    content: {
      text: text,
    },
    style: style,
    actions: [],
    script: [],
  });

  return tem.startDrawing();
};

export const createImgViewer = ({ width, height, style }) => {
  const ImgCanvasElement = document.createElement("div");
  const tem = new ImageDisplay(ImgCanvasElement, {
    name: "ImgViewer",
    frame: { width: width, height: height },
    attributes: {},
    class: [],
    content: {},
    style: style,
    actions: [],
    script: [],
  });

  return tem.startDrawing();
};

export const createImage = ({ width, height, borderLess, style }) => {
  const ImgCanvasElement = document.createElement("div");
  const tem = new Image(ImgCanvasElement, {
    name: "Image",
    frame: { width: width, height: height },
    attributes: {
      borderLess: String(borderLess),
    },
    class: [],
    content: {},
    style: style,
    actions: [],
    script: [],
  });

  return tem.startDrawing();
};
