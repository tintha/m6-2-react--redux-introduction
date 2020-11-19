import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import Button from "./Button";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);

  let totalItems = storeItems.reduce((acc, cur) => {
    acc += cur.quantity;
    return acc;
  }, 0);

  let totalPrice = storeItems.reduce((acc, cur) => {
    acc += (cur.price * cur.quantity) / 100;
    return acc;
  }, 0);

  return (
    <Wrapper>
      <TopContainer>
        <Title>Your Cart</Title>
        <NumItems>
          {totalItems} {totalItems <= 1 ? "item" : "items"}
        </NumItems>
        {storeItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </TopContainer>
      <TotalContainer>
        <TotalPrice>
          Total: <BoldText>${totalPrice.toFixed(2)}</BoldText>
        </TotalPrice>
        <Button>Purchase</Button>
      </TotalContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 300px;
`;

const TopContainer = styled.div``;

const Title = styled.h2`
  margin-bottom: 2px;
`;

const NumItems = styled.div`
  margin-bottom: 20px;
`;

const TotalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const TotalPrice = styled.div``;

export default Cart;
