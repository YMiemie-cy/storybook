import Button from "../../framework/UI/SystemUI/Button.js";

export const createButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
}) => {
  const output = document.createElement("div");
  output.id = "output";
  const buttonElement = document.createElement("div");
  const tem = new Button(buttonElement, {
    name: "PrimaryBtn",
    frame: {
      width: "100px",
      height: "30px",
    },
    attributes: {
      type: primary ? "important" : "timelyImportant",
    },
    class: [],
    content: {
      text: "button",
    },
    style: {
      "font-size": "14px",
    },
    actions: [],
    script: [],
  });

  console.log("window", document);

  return tem.startDrawing();
};
