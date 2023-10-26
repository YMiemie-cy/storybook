import Button from "../../framework/UI/SystemUI/Button.js";

export const createButton = ({ name, width, height, text, type, style }) => {
  const output = document.createElement("div");
  output.id = "output";
  const buttonElement = document.createElement("div");
  const tem = new Button(buttonElement, {
    name: name,
    frame: {
      width: width,
      height: height,
    },
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

  console.log("window", document);

  return tem.startDrawing();
};
