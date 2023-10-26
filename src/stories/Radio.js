import SingleButton from "../../framework/UI/SystemUI/SingleButton.js";

export const createRadio = ({ width, height, style, list, layout, x, y }) => {
  const RadioElement = document.createElement("div");
  const tem = new SingleButton(RadioElement, {
    name: "Radio",
    frame: {
      width: width,
      height: height,
      x: x,
      y: y,
    },
    attributes: {
      layout: layout,
    },
    class: [],
    content: {
      list: list,
    },
    style: style,
    actions: [],
    script: [],
  });

  return tem.startDrawing();
};
