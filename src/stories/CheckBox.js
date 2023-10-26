import CheckBox from "../../framework/UI/SystemUI/CheckBox.js";

export const createCheckBox = ({ width, height, style, text, x, y }) => {
  const CheckBoxElement = document.createElement("div");
  const tem = new CheckBox(CheckBoxElement, {
    name: "CheckBox",
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
