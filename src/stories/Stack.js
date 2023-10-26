import BaseView from "../../framework/UI/SystemUI/BaseView.js";

export const createVStack = ({}) => {
  const VStackElement = document.createElement("div");
  VStackElement.style.cssText = `

  border-radius: 4px;
    

    border-radius: 4px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(120, 120, 120, 0.2);
    box-sizing: border-box;
    padding: 5px;
    min-width: 100px;
    min-height: 100px;
    z-index: 0;
    
    `;
  const tem = new BaseView(VStackElement, {
    name: "VStack",
    frame: {},
    attributes: {},
    class: ["draggable"],
    content: {},
    style: {},
    actions: [],
    script: [],
  });

  return tem.startDrawing();
};

export const createHStack = ({}) => {
  const HStackElement = document.createElement("div");
  HStackElement.style.cssText = `

    display:flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(120, 120, 120, 0.5);
   
    min-width: 100px;
    min-height: 100px;
    box-sizing: border-box;
    padding: 5px;
    z-index: 0;
      
      `;
  const tem = new BaseView(HStackElement, {
    name: "HStack",
    frame: {},
    attributes: {},
    class: ["draggable"],
    content: {},
    style: {},
    actions: [],
    script: [],
  });

  console.log("----------", tem.startDrawing());

  return tem.startDrawing();
};
