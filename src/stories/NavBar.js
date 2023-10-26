import NavigationBar from "../../framework/UI/SystemUI/NavigationBar.js";

export const createNavBar = ({ width, height, style, list, layout, x, y }) => {
  const NavBarElement = document.createElement("div");
  const tem = new NavigationBar(NavBarElement, {
    name: "NavBar",
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
