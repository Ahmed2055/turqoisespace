import React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import product1 from "../images/products/product1.jpg";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

function Product() {
    return (
        <div className="product">
            <a className="product__top">
                <img src={product1} alt="Product Image" className="product__topImage" />
                <div className="products__topDetails">
                    <h4 className="product__topName">ورشة رسم حر</h4>
                    <p className="product__topText">مع الفنان أحمد سمير</p>
                </div>
            </a>
            <div className="product__bottom">
                <p className="product__bottomPrice">
                    <span className="product__PriceDetail"> 150 </span>
                    <span className="product__PriceDetail"> ر.س </span>
                </p>
                <div className="product__bottomButton">
                    <IconButton aria-label="delete" color="inherit">
                        <AddShoppingCartIcon color="inherit" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Product;
