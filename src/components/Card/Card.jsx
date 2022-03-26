import React from "react";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { Container } from "../Container";
import profilPic from "../../stories/assets/profile.png";

export const Card = ({ backgroundColor }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <CardStyling backgroundColor={backgroundColor}>
        <div className="card__body">
          <div className="clode-button">
            <MdClose className="icon" />
          </div>
          <div className="card__body-details">
            <img src={profilPic} alt="profile" />
            <div>
              <h1 className="card__body-name">Emily Dougrer</h1>
              <p className="card__body-position">Developer</p>
            </div>
          </div>
          <p className="card__body-desc">
            Hi there. We use Boards to share initial goals and ideas.
          </p>
        </div>
        <div className="card__footer">
          <form onSubmit={handleSubmit} action="" className="card__footer-form">
            <input
              type="text"
              className="card__footer-input"
              placeholder="Type your message..."
            />
            <button className="card__footer-button">Send</button>
          </form>
        </div>
      </CardStyling>
    </Container>
  );
};

const CardStyling = styled.div`
  width: 375px;

  & .card__body {
    padding: 1rem;
    background-color: ${({ backgroundColor }) => backgroundColor};
    position: relative;
    border-radius: 24px 24px 0px 0px;

    & .clode-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;

      & .icon {
        color: #ffffff;
        opacity: 0.5;
      }
    }

    & .card__body-details {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;

      & img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
      & .card__body-name {
        font-family: "Montserrat";
        line-height: 22px;
        font-size: 18px;
        color: #fff;
        font-weight: 600;
        margin: 0;
      }
      & .card__body-position {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #ffff;
        opacity: 0.5;
        margin: 0;
      }
    }
    & .card__body-desc {
      font-family: "Montserrat";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      margin: 10px 0;
    }
  }

  & .card__footer {
    padding: 1rem;
    border-radius: 0px 0px 24px 24px;
    background-color: #ffffff;

    & .card__footer-form {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    & .card__footer-input {
      border: none;
      outline: none;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      width: 160px;
      min-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.25px;
      color: #afafbd;
    }
    & .card__footer-button {
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      text-align: right;
      color: #5856d7;
      outline: none;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;

Card.prototype = {
  backgroundColor: PropTypes.string,
};

Card.defaultProps = {
  backgroundColor: "#4643d3",
};
