let ButtonScript = new UIComponent("Button-Important_1");

ButtonScript.on_rendering(() => {
  ButtonScript.click(() => {
    switchPage("page2");
  });
});
