import ChoiceColumn from "../../framework/UI/SystemUI/ChoiceColumn.js";

export const createChoiceColumn = ({
  width,
  height,
  style,
  list,
  x,
  y,
  isTitleVisible,
}) => {
  const ChoiceColumnElement = document.createElement("div");
  const tem = new ChoiceColumn(ChoiceColumnElement, {
    name: "ChoiceColumn",
    frame: {
      width: width,
      height: height,
      x: x,
      y: y,
    },
    attributes: {
      isTitleVisible: String(isTitleVisible),
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
  // return tem.startDrawing("story--example-input--input--primary-inner");
};
