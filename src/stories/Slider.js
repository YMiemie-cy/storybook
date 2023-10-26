import Slider from "../../framework/UI/SystemUI/Slider.js";

export const createSlider = ({ width, height, style }) => {
  const SliderElement = document.createElement("div");
  const tem = new Slider(SliderElement, {
    name: "Slider",
    frame: {
      width: width,
      height: height,
    },
    attributes: {},
    class: [],
    content: {},
    style: style,
    actions: [],
    script: [],
  });

  return tem.startDrawing();
};
