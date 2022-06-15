import React from "react";

function Filter() {
  return (
    <div className="filter">
        
      <b>Area: </b>
      <select>
        <option value="thane">Thane</option>
        <option value="pune">Pune</option>
        <option value="mumbai-suburban">Mumbai Suburban</option>
        <option value="nashik">Nashik</option>
        <option value="nagpur">Nagpur</option>
        <option value="ahmednagar">Ahmednagar</option>
        <option value="solapur">Solapur</option>
      </select>

      <b>Category: </b>
      <select>
        <option value="grocery">Grocery</option>
        <option value="butcher">Butcher</option>
        <option value="baker">Baker</option>
        <option value="chemist">Chemist</option>
        <option value="stationery-shop">Stationery shop</option>
      </select>

      <b>Status: </b>
      <select>
        <option value="open">Open</option>
        <option value="close">Close</option>
      </select>
    </div>
  );
}

export default Filter;
