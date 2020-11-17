import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { deleteOutline } from "react-icons-kit/typicons/deleteOutline";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";

const CartItem = ({ id, title, price }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <ItemNameContainer>
        {title}
        <RemoveBtn onClick={() => dispatch(removeItem({ id }))}>
          <Icon icon={deleteOutline} size={32} />
        </RemoveBtn>
      </ItemNameContainer>
      <QuantityContainer>
        Quantity:<QuantityNum>1</QuantityNum>
      </QuantityContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid gray;
`;

const ItemNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 1.3rem;
`;

const QuantityContainer = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 10px;
  font-size: 1rem;
`;

const QuantityNum = styled.div`
  background-color: white;
  color: rgba(0, 0, 0);
  min-width: 1.5em;
  text-align: center;
  font-weight: bold;
  margin-left: 5px;
  font-size: 1rem;
`;

const RemoveBtn = styled.button`
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  background-color: transparent;
`;

export default CartItem;
