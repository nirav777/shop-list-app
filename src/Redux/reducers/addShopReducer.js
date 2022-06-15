import { ADD_SHOP } from "../constants/constant";

const initialState = [];

const addShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOP:
      return [
        ...state,
        {
          shopName: action.payload.shopName,
          shopArea: action.payload.shopArea,
          shopCategory: action.payload.shopCategory,
          shopOpening: action.payload.shopOpening,
          shopClosing: action.payload.shopClosing,
          key: action.payload.key
        },
      ];
    default:
      return state;
  }
};

export default addShopReducer
