import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import Button from "./Button";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);

  return (
    <Wrapper>
      <TopContainer>
        <Title>Your Cart</Title>
        <NumItems>1 item</NumItems>
        {storeItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </TopContainer>
      <TotalContainer>
        <TotalPrice>
          Total: <BoldText>$12.34</BoldText>
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
