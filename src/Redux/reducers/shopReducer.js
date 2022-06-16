import { ADD_SHOP, DELETE_SHOP } from "../constants/constant";

const initialState = [];

const shopReducer = (state = initialState, action) => {
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
          key: action.payload.key,
        },
      ];
    case DELETE_SHOP:
      const deletedShops = state.filter((item) => item.key !== action.payload);
      return deletedShops;
    default:
      return state;
  }
};

export default shopReducer;
