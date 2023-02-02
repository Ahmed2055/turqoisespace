import React, { useState } from "react";
import Product from "./Product";
import SortIcon from "@mui/icons-material/Sort";

function ProductsBody({ secTitle, content }) {
    const [sortButtonActive, setsortButtonActive] = useState(false);
    const [currentSortType, setcurrentSortType] = useState("ourSuggestions");

    const changeCurrentSortType =(e)=>{
        setcurrentSortType(e.target.value);
        setsortButtonActive(false);
    }

    return (
        <div className="productsBody" dir="rtl">
            <div className="productsBody__top">
                <h2 className="productsBody__topTitle"> {secTitle} </h2>

                {sortButtonActive ? (
                    <form className="productsBody__topButtonMenu">
                        <label className="productsBody__topButtonMenuOption">
                            <input type="radio" value="ourSuggestions" name="sortType" onChange={(e) => changeCurrentSortType(e)} /> مقترحاتنا
                        </label>
                        <label className="productsBody__topButtonMenuOption">
                            <input type="radio" value="mostSold" name="sortType" onChange={(e) => changeCurrentSortType(e)} /> الاكثر مبيعاًً{" "}
                        </label>
                        <label className="productsBody__topButtonMenuOption">
                            <input type="radio" value="mostRated" name="sortType" onChange={(e) => changeCurrentSortType(e)} /> الاعلى تقييماً{" "}
                        </label>
                        <label className="productsBody__topButtonMenuOption">
                            <input type="radio" value="priceDescending" name="sortType" onChange={(e) => changeCurrentSortType(e)} /> السعر من الاعلى إلى الاقل{" "}
                        </label>
                        <label className="productsBody__topButtonMenuOption">
                            <input type="radio" value="priceAscending" name="sortType" onChange={(e) => changeCurrentSortType(e)} /> السعر من الاقل إلى الاعلى{" "}
                        </label>
                    </form>
                ) : (
                    <></>
                )}

                <button className="productsBody__topButton" onClick={() => setsortButtonActive(!sortButtonActive)}>
                    <SortIcon />
                    <span className="productsBody__topButtonText"> ترتيب </span>
                </button>
            </div>

            <div className="productsBody__bottom">
                <div className="productDiv">
                    <Product />
                </div>
                <div className="productDiv">
                    <Product />
                </div>
                <div className="productDiv">
                    <Product />
                </div>
                <div className="productDiv">
                    <Product />
                </div>
                <div className="productDiv">
                    <Product />
                </div>
                <div className="productDiv">
                    <Product />
                </div>
                <div className="productDiv">
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default ProductsBody;
