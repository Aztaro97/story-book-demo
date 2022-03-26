import React, { useState } from "react";
import styled from "styled-components";

const Item = ({ item, bgActiveItem }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ItemStyling
      bgActiveItem={bgActiveItem}
      item={item}
      onClick={() => setActiveIndex(item.id)}
      className={activeIndex === item.id ? "active" : ""}
    >
      <img src={item.imgUrl} alt="item" />
      <div>
        <h1 className="item__name">{item.name}</h1>
        <p className="item__brand">{item.brand}</p>
        <h1 className="item__price">${item.price}</h1>
      </div>
    </ItemStyling>
  );
};

const ItemStyling = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ bgActiveItem }) => bgActiveItem};
  padding: 1rem;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &.active {
    background-color: ${({ bgActiveItem }) => bgActiveItem};
  }
  &:hover {
    background-color: ${({ bgActiveItem }) => bgActiveItem};
  }

  & img {
    width: 94px;
    // height: 94px;
    margin: auto 0;
  }
  & .item__name {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #fe805c;
    margin: 0;
  }
  & .item__brand {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.25px;
    color: #afafbd;
    margin: 5px 0;
  }
  & .item__price {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.25px;
    color: #12121f;
    margin: 0;
  }
`;

export default Item;
