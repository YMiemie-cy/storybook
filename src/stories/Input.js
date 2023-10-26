import Input from "../../framework/UI/SystemUI/Input.js";
import "./Input.css";

export const createInput = ({
  width,
  height,
  placeholder,
  text,
  style,
  x,
  y,
}) => {
  const InputElement = document.createElement("div");
  const tem = new Input(InputElement, {
    name: "Input",
    frame: { width: width, height: height, x: x, y: y },
    attributes: {
      type: "input",
      placeholder: placeholder,
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
