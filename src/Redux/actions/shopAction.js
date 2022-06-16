import { ADD_SHOP, DELETE_SHOP } from "../constants/constant"

export const addShopAction = (shopData) => {
    return {
        type: ADD_SHOP,
        payload: shopData
    }
}

export const deleteShopAction = (key) => {
    console.log("action"+key)
    return {
        type: DELETE_SHOP,
        payload: key
    }
}