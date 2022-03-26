import React from "react";
import Article from "../components/Article/Article";

export default {
  title: "Article",
  components: Article,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Article {...args} />;

export const Article1 = Template.bind({});
Article1.args = {
  bgActiveItem: "#fef2ee",
}