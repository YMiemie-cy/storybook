import Text from "../../framework/UI/SystemUI/Text.js";
import "./Text.css";

export const createText = ({ width, height, type, text, style, x, y }) => {
  const textElement = document.createElement("div");
  const tem = new Text(textElement, {
    name: "Text",
    frame: { width: width, height: height, x: x, y: y },
    attributes: {
      type: type,
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
