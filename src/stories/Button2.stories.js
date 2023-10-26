import { createButton } from "./Button2";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/Button2",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text", defaultValue: "1111", description: "2222" },
    onClick: { action: "onClick" },
    backgrounds: {
      defaultValue: "twitter",
      values: [
        { name: "twitter", value: "#00aced" },
        { name: "facebook", value: "#3b5998" },
      ],
    },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    status: {
      control: "select",
      options: {
        "in-progress": "In Progress",
        completed: "Completed",
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};
