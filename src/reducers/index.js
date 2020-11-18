const initialState = {};

export default function cartReducer(state = initialState, action) {
  const ids = Object.keys(state);

  switch (action.type) {
    case "ADD_ITEM":
      let quantity = 0;
      ids.includes(action.item.id)
        ? (quantity = state[action.item.id].quantity + 1)
        : quantity++;
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: quantity,
        },
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: action.item.quantity,
        },
      };

    case "REMOVE_ITEM":
      const stateCopy = { ...state };
      delete stateCopy[action.item.id];
      return { ...stateCopy };
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
