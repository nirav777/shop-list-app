import { ADD_SHOP } from "../constants/constant"

export const addShopAction = (shopData) => {
    return {
        type: ADD_SHOP,
        payload: shopData
    }
}