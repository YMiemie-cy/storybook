import BookmarkPage from "../../framework/UI/SystemUI/BookmarkPage.js";

export const createTabBar = ({ width, height, style, list, x, y }) => {
  const TabBarElement = document.createElement("div");
  const tem = new BookmarkPage(TabBarElement, {
    name: "TabBar",
    frame: {
      width: width,
      height: height,
      x: x,
      y: y,
    },
    attributes: {},
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
