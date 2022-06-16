import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addShopAction } from "../Redux/actions/shopAction";

function AddShopScreen() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("Thane");
  const [category, setCategory] = useState("Grocery");
  const [openingDate, setOpeningDate] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const dispatch = useDispatch();

  let shopData = {
    shopName: name,
    shopArea: area,
    shopCategory: category,
    shopOpening: openingDate,
    shopClosing: closingDate,
    key: Math.random() * 1000,
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const areaHandler = (e) => {
    setArea(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const openingDateHandler = (e) => {
    console.log(e.target.value);
    setOpeningDate(e.target.value);
  };

  const closingDateHandler = (e) => {
    const parsedOpenDate = openingDate.split("-");
    const parsedEndDate = e.target.value.split("-");

    if (parseInt(parsedEndDate[0]) > parseInt(parsedOpenDate[0])) {
      setClosingDate(e.target.value);
      document.getElementById("closing-date-error").style.display = "none";
      return;
    }
    if (parseInt(parsedEndDate[1]) > parseInt(parsedOpenDate[1])) {
      setClosingDate(e.target.value);
      document.getElementById("closing-date-error").style.display = "none";
      return;
    }
    if (parseInt(parsedEndDate[0]) < parseInt(parsedOpenDate[0])) {
      document.getElementById("closing-date-error").style.display = "block";
      return;
    }
    if (parseInt(parsedEndDate[1]) < parseInt(parsedOpenDate[1])) {
      document.getElementById("closing-date-error").style.display = "block";
      return;
    }
    if (parseInt(parsedEndDate[2]) < parseInt(parsedOpenDate[2])) {
      document.getElementById("closing-date-error").style.display = "block";
      return;
    }
    setClosingDate(e.target.value);
    document.getElementById("closing-date-error").style.display = "none";
  };

  const addShop = (e) => {
    e.preventDefault();
    var regEx = /^[a-zA-Z\s-]+$/;
    if (regEx.test(name) === true) {
      document.getElementById("name-error").style.display = "none";
      document.getElementById("name-field").style.border =
        "solid 2px lightgray";
    }
    if (area !== "") {
      document.getElementById("area-field").style.border =
        "solid 2px lightgray";
      document.getElementById("area-required").style.display = "none";
    }
    if (category !== "") {
      document.getElementById("category-field").style.border =
        "solid 2px lightgray";
      document.getElementById("category-required").style.display = "none";
    }
    if (openingDate !== "") {
      document.getElementById("open-date-field").style.border =
        "solid 2px lightgray";
      document.getElementById("opeining-date-required").style.display = "none";
    }
    if (closingDate !== "") {
      document.getElementById("close-date-field").style.border =
        "solid 2px lightgray";
      document.getElementById("closing-date-required").style.display = "none";
    }
    if (name === "") {
      document.getElementById("name-field").style.border = "solid 2px red";
      document.getElementById("name-required").style.display = "block";
    } else if (regEx.test(name) === false) {
      document.getElementById("name-error").style.display = "block";
      document.getElementById("name-field").style.border = "solid 2px red";
    } else if (area === "") {
      document.getElementById("area-field").style.border = "solid 2px red";
      document.getElementById("area-required").style.display = "block";
    } else if (category === "") {
      document.getElementById("category-field").style.border = "solid 2px red";
      document.getElementById("category-required").style.display = "block";
    } else if (openingDate === "") {
      document.getElementById("open-date-field").style.border = "solid 2px red";
      document.getElementById("opeining-date-required").style.display = "block";
    } else if (closingDate === "") {
      document.getElementById("close-date-field").style.border =
        "solid 2px red";
      document.getElementById("closing-date-required").style.display = "block";
    } else {
      dispatch(addShopAction(shopData));
      setName("");
      setArea("");
      setCategory("");
      setOpeningDate("");
      setClosingDate("");
      document.getElementById("name-field").style.border =
        "solid 2px lightgray";
      document.getElementById("area-field").style.border =
        "solid 2px lightgray";
      document.getElementById("category-field").style.border =
        "solid 2px lightgray";
      document.getElementById("open-date-field").style.border =
        "solid 2px lightgray";
      document.getElementById("close-date-field").style.border =
        "solid 2px lightgray";
      document.getElementById("name-required").style.display = "none";
      document.getElementById("name-error").style.display = "none";
      document.getElementById("area-required").style.display = "none";
      document.getElementById("category-required").style.display = "none";
      document.getElementById("opeining-date-required").style.display = "none";
      document.getElementById("closing-date-required").style.display = "none";
      alert("SHOP ADDED TO LIST!!!");
    }
  };

  const timeOutFunction = () => {
    document.getElementById("shop-added").style.display = "block";
  };

  return (
    <div className="add-shop">
      <form className="form">
        <b>Shop Name: </b>
        <span id="name-required">*Name Required*</span>
        <input
          id="name-field"
          className="name-field"
          type="text"
          placeholder="Shop Name"
          value={name}
          onChange={nameHandler}
        />
        <span id="name-error">*Invalid Input*</span>
        <br />

        <b>Area: </b>
        <select id="area-field" onChange={areaHandler}>
          <option value="Thane">Thane</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai-Suburban">Mumbai Suburban</option>
          <option value="Nashik">Nashik</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Ahmednagar">Ahmednagar</option>
          <option value="Solapur">Solapur</option>
        </select>
        <span id="area-required">*Area Required*</span>
        <br />

        <b>Category: </b>
        <select id="category-field" onChange={categoryHandler}>
          <option value="Grocery">Grocery</option>
          <option value="Butcher">Butcher</option>
          <option value="Baker">Baker</option>
          <option value="Chemist">Chemist</option>
          <option value="Stationery-Shop">Stationery shop</option>
        </select>
        <span id="category-required">*Category Required*</span>
        <br />

        <b>Opening Date: </b>
        <input
          id="open-date-field"
          className="date-field"
          type="date"
          value={openingDate}
          onChange={openingDateHandler}
        />
        <span id="opeining-date-required">*Opening Date Required*</span>
        <br />

        <b>Closing Date: </b>
        <span id="closing-date-required">*Closing Date Required*</span>
        <input
          id="close-date-field"
          className="date-field"
          type="date"
          value={closingDate}
          onChange={closingDateHandler}
        />
        <span id="closing-date-error">*Invalid Closing Date*</span>
        <br />

        <button onClick={addShop}>ADD SHOP</button>
      </form>
    </div>
  );
}
export default AddShopScreen;
