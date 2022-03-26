import React from "react";

import { Card } from "../components/Card/Card";

export default {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Card {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {
  backgroundColor: "#4643d3",
};
