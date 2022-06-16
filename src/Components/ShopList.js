import React, { useEffect, useState } from "react";
import { deleteShopAction } from "../Redux/actions/shopAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faLocation } from "@fortawesome/free-solid-svg-icons";

function ShopList() {
  const [area, setArea] = useState("All");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [filteredShops, setFilteredShops] = useState([]);

  const dispatch = useDispatch();
  const shops = useSelector((state) => state.addShopReducer);

  useEffect(() => {
    filterShopCategoryHandler();
  }, [category, shops.length]);

  useEffect(() => {
    filterShopAreaHandler();
  }, [area, shops.length]);

  useEffect(() => {
    filterShopStatusHandler();
  }, [status, shops.length]);

  const filterShopCategoryHandler = () => {
    switch (category) {
      case "Grocery":
        setFilteredShops(
          shops.filter((item) => item.shopCategory === "Grocery")
        );
        break;
      case "Butcher":
        setFilteredShops(
          shops.filter((item) => item.shopCategory === "Butcher")
        );
        break;
      case "Baker":
        setFilteredShops(shops.filter((item) => item.shopCategory === "Baker"));
        break;
      case "Chemist":
        setFilteredShops(
          shops.filter((item) => item.shopCategory === "Chemist")
        );
        break;
      case "Stationery-Shop":
        setFilteredShops(
          shops.filter((item) => item.shopCategory === "Stationery-Shop")
        );
        break;
      default:
        setFilteredShops(shops);
        break;
    }
  };

  const filterShopAreaHandler = () => {
    switch (area) {
      case "Thane":
        setFilteredShops(shops.filter((item) => item.shopArea === "Thane"));
        break;
      case "Pune":
        setFilteredShops(shops.filter((item) => item.shopArea === "Pune"));
        break;
      case "Mumbai-Suburban":
        setFilteredShops(
          shops.filter((item) => item.shopArea === "Mumbai-Suburban")
        );
        break;
      case "Nashik":
        setFilteredShops(shops.filter((item) => item.shopArea === "Nashik"));
        break;
      case "Nagpur":
        setFilteredShops(shops.filter((item) => item.shopArea === "Nagpur"));
        break;
      default:
        setFilteredShops(shops);
        break;
    }
  };

  const filterShopStatusHandler = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    let parsedCurrentDate = yyyy + "/" + mm + "/" + dd;
    parsedCurrentDate = parsedCurrentDate.split("/");

    switch (status) {
      case "Open":
        setFilteredShops(
          shops.filter((item) => {
            const parsedClosedDate = item.shopClosing.split("-");
            console.log(parsedCurrentDate);
            console.log(parsedClosedDate);

            return (
              parseInt(parsedCurrentDate[2]) < parseInt(parsedClosedDate[2]) ||
              parseInt(parsedCurrentDate[1]) < parseInt(parsedClosedDate[1]) ||
              parseInt(parsedCurrentDate[0]) < parseInt(parsedClosedDate[0])
            );
          })
        );
        break;
      case "Close":
        setFilteredShops(
          shops.filter((item) => {
            const parsedClosedDate = item.shopClosing.split("-");

            return !(
              parseInt(parsedCurrentDate[2]) < parseInt(parsedClosedDate[2]) ||
              parseInt(parsedCurrentDate[1]) < parseInt(parsedClosedDate[1]) ||
              parseInt(parsedCurrentDate[0]) < parseInt(parsedClosedDate[0])
            );
          })
        );

        break;
      default:
        setFilteredShops(shops);
        break;
    }
  };

  const areaHandler = (e) => {
    setArea(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const deleteShopHandler = (key) => {
    console.log(key);
    dispatch(deleteShopAction(key));
  };

  return (
    <>
      <div className="filter">
        <b>Area: </b>
        <select onChange={areaHandler}>
          <option value="All">All</option>
          <option value="Thane">Thane</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai-Suburban">Mumbai Suburban</option>
          <option value="Nashik">Nashik</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Ahmednagar">Ahmednagar</option>
          <option value="Solapur">Solapur</option>
        </select>

        <b>Category: </b>
        <select onChange={categoryHandler}>
          <option value="All">All</option>
          <option value="Grocery">Grocery</option>
          <option value="Butcher">Butcher</option>
          <option value="Baker">Baker</option>
          <option value="Chemist">Chemist</option>
          <option value="Stationery-Shop">Stationery shop</option>
        </select>

        <b>Status: </b>
        <select onChange={statusHandler}>
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="Close">Close</option>
        </select>
      </div>

      <div className="shop-list">
        {filteredShops.map((item) => (
          <div key={item.key} className="shop-details">
            <div>
              <h2>{item.shopName}</h2>
              <h5>
                <FontAwesomeIcon icon={faLocation} /> {item.shopArea}
              </h5>
            </div>
            <div id="category-div">
              <h3>{item.shopCategory}</h3>
            </div>
            <div>
              <h5>From {moment(item.shopOpening).format("LL")}</h5>
              <h5>To {moment(item.shopClosing).format("LL")}</h5>
            </div>
            <button onClick={() => deleteShopHandler(item.key)}>
              <FontAwesomeIcon icon={faTrashCan} color="red" size="2x" />
            </button>
          </div>
        ))}
        {filteredShops.length === 0 && shops.length !== 0 ? (
          <h1>No Results Found</h1>
        ) : null}
      </div>
    </>
  );
}

export default ShopList;
