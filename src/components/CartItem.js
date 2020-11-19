import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { deleteOutline } from "react-icons-kit/typicons/deleteOutline";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../actions";

const CartItem = ({ id, title, price, quantity }) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (e) => {
    !isNaN(e.target.value) &&
      dispatch(
        updateQuantity({ id, title, price, quantity: Number(e.target.value) })
      );
  };

  return (
    <Wrapper>
      <ItemNameContainer>
        {title}
        <RemoveBtn onClick={() => dispatch(removeItem({ id }))}>
          <Icon icon={deleteOutline} size={32} />
        </RemoveBtn>
      </ItemNameContainer>
      <QuantityContainer>
        <label htmlFor="quantity">Quantity:</label>
        <QuantityNum
          name="quantity"
          id="quantity"
          type="text"
          value={quantity}
          onChange={(e) => handleChangeQuantity(e)}
        />
      </QuantityContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid gray;
  margin-bottom: 20px;
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

const QuantityNum = styled.input`
  background-color: white;
  color: rgba(0, 0, 0);
  min-width: 1.5em;
  max-width: 3em;
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
