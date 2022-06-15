import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addShopAction } from "../Redux/actions/addShopAction";


function AddShopScreen() {

    const [name, setName] = useState("");
    const [area, setArea] = useState("");
    const [category, setCategory] = useState("");
    const [openingDate, setOpeningDate] = useState("");
    const [closingDate, setClosingDate] = useState("");
    const dispatch = useDispatch();

    let shopData = {
        shopName : name,
        shopArea : area,
        shopCategory : category,
        shopOpening : openingDate,
        shopClosing : closingDate,
        key: Math.random()*1000
    }

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const areaHandler = (e) => {
        setArea(e.target.value);
    }

    const categoryHandler = (e) => {
        setCategory(e.target.value);
    }

    const openingDateHandler = (e) => {
        setOpeningDate(e.target.value);
    }

    const closingDateHandler = (e) => {
        setClosingDate(e.target.value);
    }

    const addShop = (e) => {
        e.preventDefault()
        console.log(shopData);
        dispatch(addShopAction(shopData));
        setName("");
        setArea("");
        setCategory("");
        setOpeningDate("");
        setClosingDate("");
    }

    return (
    <div className="add-shop">
      <form>
        <b>Shop Name: </b>
        <input placeholder="Shop Name" value={name} onChange={nameHandler} />
        <br/>
        <b>Area: </b>
        <select onChange={areaHandler}>
          <option value="thane">Thane</option>
          <option value="pune" selected>Pune</option>
          <option value="mumbai-suburban">Mumbai Suburban</option>
          <option value="nashik">Nashik</option>
          <option value="nagpur">Nagpur</option>
          <option value="ahmednagar">Ahmednagar</option>
          <option value="solapur">Solapur</option>
        </select>
        <br/>
        <b>Category: </b>
        <select onChange={categoryHandler}>
          <option value="grocery">Grocery</option>
          <option value="butcher">Butcher</option>
          <option value="baker">Baker</option>
          <option value="chemist">Chemist</option>
          <option value="stationery-shop">Stationery shop</option>
        </select>
        <br/>
        <b>Opening Date: </b>
        <input type="date" onChange={openingDateHandler}/>
        <br/>
        <b>Closing Date: </b>
        <input type="date" onChange={closingDateHandler}/>
        <br/>
        <button onClick={addShop}>ADD SHOP</button>
      </form>
    </div>
  );
}
export default AddShopScreen;
