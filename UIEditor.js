import BaseView from "./framework/UI/SystemUI/BaseView.js";
import Button from "./framework/UI/SystemUI/Button.js";
import ImageUploader from "./framework/UI/SystemUI/ImageUploader.js"; // Assuming you have this class defined
import Input from "./framework/UI/SystemUI/Input.js"; // Assuming you have this class defined
import Text from "./framework/UI/SystemUI/Text.js";
import Image from "./framework/UI/SystemUI/Image.js";
import ImageDisplay from "./framework/UI/SystemUI/ImageDisplay.js";
import NavigationBar from "./framework/UI/SystemUI/NavigationBar.js";
import CheckBox from "./framework/UI/SystemUI/CheckBox.js";
import TreeSelector from "./framework/UI/SystemUI/TreeSelector.js";
import SingleButton from "./framework/UI/SystemUI/SingleButton.js";
import BookmarkPage from "./framework/UI/SystemUI/BookmarkPage.js";
import Slider from "./framework/UI/SystemUI/Slider.js";
import ParameterBlock from "./framework/UI/SystemUI/ParameterBlock.js";
import ChoiceColumn from "./framework/UI/SystemUI/ChoiceColumn.js";
import DropDownMenu from "./framework/UI/SystemUI/DropDownMenu.js";
import ModalWindow from "./framework/UI/SystemUI/ModalWindow.js";
import PromptInformation from "./framework/UI/SystemUI/PromptInformation.js";
import ModifyBlock from "./framework/UI/SystemUI/ModifyBlock.js";
import SideBar from "./framework/UI/SystemUI/SideBar.js";

/**
 *
 * this.element.style ...哪些可能需要放进class中，遍历到的时候直接把里面的style摘出来
 */

function renderComponents(parent) {
  {
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
    tem.startDrawing(
      `${parent} .layout-wrap div:nth-of-type(2) .component-contain`
    );
  }
  {
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
    tem.startDrawing(
      `${parent} .layout-wrap div:nth-of-type(1) .component-contain`
    );
  }
  {
    const buttonElement = document.createElement("div");
    const tem = new Button(buttonElement, {
      name: "PrimaryBtn",
      frame: {
        width: "100%",
        height: "100%",
      },
      attributes: {
        type: "important",
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
    tem.startDrawing(
      `${parent} div:nth-of-type(5) div:nth-of-type(2) .component-contain`
    );
  }
  {
    const buttonElement = document.createElement("div");
    const tem = new Button(buttonElement, {
      name: "Button",
      frame: {
        width: "100%",
        height: "100%",
      },
      attributes: {
        type: "timelyImportant",
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
    tem.startDrawing(
      `${parent} div:nth-of-type(5) div:nth-of-type(1) .component-contain`
    );
  }

  {
    const inputElement = document.createElement("div");
    const tem = new Input(inputElement, {
      name: "Input",
      frame: { width: "100%", height: "100%" },
      attributes: {
        type: "input",
        placeholder: "",
      },
      class: [],
      content: {
        text: "input",
      },
      style: {
        "font-size": "14px",
      },
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} div:nth-of-type(5) div:nth-of-type(6) .component-contain`
    );
  }
  // {
  //   const inputElement = document.createElement("div");
  //   const tem = new Input(inputElement, {
  //     name: "Input-Search",
  //     frame: { width: "100%", height: "100%" },
  //     attributes: {
  //       type: "search",
  //     },
  //     class: [],
  //     content: {},
  //     style: {
  //       "font-size": "8px",
  //     },
  //     actions: [],
  //     script: [],
  //   });
  //   tem.startDrawing(`${parent} div:nth-of-type(7) .component-contain`);
  // }
  // {
  //   const inputElement = document.createElement("div");
  //   const tem = new Input(inputElement, {
  //     name: "Input-Default",
  //     frame: { width: "100%", height: "100%" },
  //     attributes: {
  //       type: "default",
  //     },
  //     class: [],
  //     content: {
  //       text: "input",
  //     },
  //     style: {
  //       "font-size": "10px",
  //     },
  //     actions: [],
  //     script: [],
  //   });
  //   tem.startDrawing(`${parent} div:nth-of-type(8) .component-contain`);
  // }
  // {
  //   const inputElement = document.createElement("div");
  //   const tem = new Input(inputElement, {
  //     name: "Input-Default-IsTextarea",
  //     frame: { width: "100%", height: "100%" },
  //     attributes: {
  //       type: "default",
  //       isTextarea: "true",
  //     },
  //     class: [],
  //     content: {
  //       text: "input",
  //     },
  //     style: {
  //       "font-size": "10px",
  //     },
  //     actions: [],
  //     script: [],
  //   });
  //   tem.startDrawing(`${parent} div:nth-of-type(9) .component-contain`);
  // }
  {
    const textElement = document.createElement("div");
    const tem = new Text(textElement, {
      name: "Label",
      frame: { width: "100%", height: "100%" },
      attributes: {
        type: "label",
      },
      class: [],
      content: {
        text: "text",
      },
      style: {},
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} div:nth-of-type(5) div:nth-of-type(3) .component-contain`
    );
  }
  {
    const textElement = document.createElement("div");
    const tem = new Text(textElement, {
      name: "Title",
      frame: { width: "100%", height: "100%" },
      attributes: {
        type: "title",
      },
      class: [],
      content: {
        text: "text",
      },
      style: {},
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} div:nth-of-type(5) div:nth-of-type(4) .component-contain`
    );
  }
  {
    const textElement = document.createElement("div");
    const tem = new Text(textElement, {
      name: "Subtitle",
      frame: { width: "100%", height: "100%" },
      attributes: {
        type: "subtitle",
      },
      class: [],
      content: {
        text: "text",
      },
      style: {},
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} div:nth-of-type(5) div:nth-of-type(5) .component-contain`
    );
  }
  {
    const imageUploaderElement = document.createElement("div");
    const tem = new ImageUploader(imageUploaderElement, {
      name: "ImgLoader",
      frame: { width: "100%", height: "100%" },
      attributes: {},
      class: [],
      content: {},
      style: {
        "font-size": "16px",
      },
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} .image-modules-wrap div:nth-of-type(1) .component-contain`
    );
  }
  {
    const imageDisplayElement = document.createElement("div");
    const tem = new ImageDisplay(imageDisplayElement, {
      name: "ImgViewer",
      frame: { width: "100%", height: "100%" },
      attributes: {},
      class: [],
      content: {},
      style: {},
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} .image-modules-wrap div:nth-of-type(2) .component-contain`
    );
  }
  {
    const ImgCanvasElement = document.createElement("div");
    const tem = new ImageUploader(ImgCanvasElement, {
      name: "ImgCanvas",
      frame: { width: "100%", height: "100%" },
      attributes: {
        isCanvas: "true",
      },
      class: [],
      content: {
        text: "Upload Image",
      },
      style: {},
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} .image-modules-wrap div:nth-of-type(3) .component-contain`
    );
  }
  {
    const ImageElement = document.createElement("div");
    const tem = new Image(ImageElement, {
      name: "Image",
      frame: { width: "100%", height: "100%" },
      attributes: {
        borderLess: "true",
      },
      class: [],
      content: {},
      style: {},
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} .image-modules-wrap div:nth-of-type(4) .component-contain`
    );
  }

  {
    const navigationBarElement = document.createElement("div");
    const tem = new NavigationBar(navigationBarElement, {
      name: "NavigationBar",
      frame: { width: "100%", height: "100%" },
      attributes: {},
      class: [],
      content: {
        list: [
          {
            icon: "./framework/Assets/nav-dashboardicon.svg",
            text: "Dashboard",
          },
          {
            icon: "./framework/Assets/nav-mylibraryicon.svg",
            text: "MyLibrary",
          },
          {
            icon: "./framework/Assets/nav-collectionicon.svg",
            text: "Collection",
          },
          {
            icon: "./framework/Assets/nav-settingsicon.svg",
            text: "Settings",
          },
        ],
      },
      style: { "font-size": "10px", "margin-bottom": "100px" },
      actions: [],
      script: [],
    });

    tem.startDrawing(`NavigationBar`);
  }
  {
    const CheckBoxElement = document.createElement("div");
    const tem = new CheckBox(CheckBoxElement, {
      name: "CheckBox",
      frame: { width: "100%", height: "100%" },
      attributes: {},
      class: [],
      content: {
        text: "number",
      },
      style: {},
      actions: [],
      script: [],
    });

    tem.startDrawing(
      `${parent} .parameters-wrap div:nth-of-type(3) .component-contain`
    );
  }
  // {
  //   const TreeSelectorElement = document.createElement("div");
  //   const tem = new TreeSelector(TreeSelectorElement, {
  //     name: "TreeSelector",
  //     frame: {
  //       width: "100%",
  //       height: "100%",
  //     },
  //     attributes: {},
  //     class: [],
  //     content: { list: ["item1", "item2"] },
  //     style: {},
  //     actions: [],
  //     script: [],
  //   });
  //   tem.startDrawing(`${parent} div:nth-of-type(17) .component-contain`);
  // }
  //   {
  //     const ModalWindowElement = document.createElement("div");
  //     const tem = new ModalWindow(ModalWindowElement, {
  //       name: "",
  //       frame: { width: "110px", height: "110px" },
  //       attributes: {},
  //       content: {},
  //       style: {},
  //       actions: [],
  //       script: [],
  //     });
  //     tem.startDrawing(`${parent} .image-modules-wrap .component-contain`);
  //   }

  {
    const SingleButtonElement = document.createElement("div");
    const tem = new SingleButton(SingleButtonElement, {
      name: "Radio",
      frame: { width: "100%", height: "100%" },
      attributes: {},
      class: [],
      content: {
        list: ["A", "B"],
      },
      style: {},
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} .parameters-wrap div:nth-of-type(2) .component-contain`
    );
  }
  {
    const BookmarkPageElement = document.createElement("div");
    const tem = new BookmarkPage(BookmarkPageElement, {
      name: "TabBar",
      frame: { width: "100%", height: "100%" },
      attributes: {},
      class: [],
      content: { list: ["item1", "item2"] },
      style: {},
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} .navigation-wrap div:nth-of-type(2) .component-contain`
    );
  }
  {
    const ChoiceColumnElement = document.createElement("div");
    const tem = new ChoiceColumn(ChoiceColumnElement, {
      name: "ChoiceColumn",
      frame: { width: "100%", height: "100%" },
      attributes: {
        isTitleVisible: "true",
      },
      class: [],
      content: {
        list: [
          {
            url: "./framework/Assets/editor/image-item-background.svg",
            title: "item1",
          },
          {
            url: "./framework/Assets/editor/image-item-background.svg",
            title: "",
          },
        ],
      },
      style: {},
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} .navigation-wrap div:nth-of-type(3) .component-contain`
    );
  }
  {
    const SliderElement = document.createElement("div");
    const tem = new Slider(SliderElement, {
      name: "Slider",
      frame: {
        width: "100%",
        height: "100%",
      },
      attributes: {},
      class: [],
      content: {},
      style: {
        "font-size": "10px",
      },
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} .parameters-wrap div:nth-of-type(1) .component-contain`
    );
  }
  {
    const ParameterBlockElement = document.createElement("div");
    const tem = new ParameterBlock(ParameterBlockElement, {
      name: "ParameterBlock",
      frame: { width: "100%", height: "100%" },
      attributes: {},
      class: [],
      content: {
        text: "number",
      },
      style: {},
      actions: [],
      script: [],
    });
    tem.startDrawing(
      `${parent} .parameters-wrap div:nth-of-type(4) .component-contain`
    );
  }
  // {
  //   const DropDownMenuElement = document.createElement("div");
  //   const tem = new DropDownMenu(DropDownMenuElement, {
  //     name: "DropDownMenu",
  //     frame: { width: "100%", height: "100%" },
  //     attributes: {},
  //     class: [],
  //     content: { list: ["item1", "item2", "item3"] },
  //     style: {
  //       "margin-bottom": "80px",
  //     },
  //     actions: [],
  //     script: [],
  //   });
  //   tem.startDrawing(`${parent} div:nth-of-type(22) .component-contain`);
  // }
  //   {
  //     const ModifyBlockElement = document.createElement("div");
  //     const tem = new ModifyBlock(ModifyBlockElement, {
  //       name: "",
  //       frame: {},
  //       attributes: {},
  //       content: {},
  //       style: {},
  //       actions: [],
  //       script: [],
  //     });
  //     tem.startDrawing(parent);
  //   }
  //   {
  //     console.log("sidebar");
  //     const SideBarElement = document.createElement("div");
  //     const tem = new SideBar(SideBarElement, {
  //       name: "",
  //       frame: {},
  //       attributes: {},
  //       content: {},
  //       style: {},
  //       actions: [],
  //       script: [],
  //     });
  //     tem.startDrawing(parent);
  //   }
}
renderComponents("editor .components");
