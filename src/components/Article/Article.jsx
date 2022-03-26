import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types"
import { Container } from "../Container";
import Item from "../Item/Item";

import Shoes from "../../stories/assets/image.png";
import Shoes1 from "../../stories/assets/image-1.png";
import Shoes2 from "../../stories/assets/image-2.png";

const Article = ({bgActiveItem}) => {
  const ItemsData = [
    {
      id: 1,
      name: "Nike Air Max 270",
      brand: "Nike",
      price: "195.80",
      imgUrl: Shoes,
    },
    {
      id: 2,
      name: "Nike Air Max 90",
      brand: "Nike",
      price: "195.80",
      imgUrl: Shoes1,
    },
    {
      id: 3,
      name: "Nike Air Max Plus",
      brand: "Nike",
      price: "195.80",
      imgUrl: Shoes2,
    },
  ];

  return (
    <Container>
      <ArticleStyling>
        <h1 className="article__title">Bestsellers</h1>
        <div className="item__container">
          {ItemsData.map((item) => (
            <Item
              key={item.id}
              item={item}  
              bgActiveItem={bgActiveItem}      
            />
          ))}
        </div>
      </ArticleStyling>
    </Container>
  );
};

export default Article;

Article.prototype = {
    bgActiveItem: PropTypes.string,
}

const ArticleStyling = styled.div`
  background-color: #ffff;
  padding: 2rem;
  border-radius: 24px;
  width: 375px;

  & .article__title {
    color: #12121f;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 24px;
    line-height: 132%;
    margin: 0;
    margin-bottom: 1rem;
    letter-spacing: 0.25px;
  }
  & .item__container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
