import ParameterBlock from "../../framework/UI/SystemUI/ParameterBlock.js";

export const createParamBlock = ({ width, height, style, text, x, y }) => {
  const ParamBlockElement = document.createElement("div");
  const tem = new ParameterBlock(ParamBlockElement, {
    name: "ParamBlock",
    frame: {
      width: width,
      height: height,
      x: x,
      y: y,
    },
    attributes: {},
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
