import React, { useState } from "react";
import Product from "./Product";

function ProductsSection({ secTitle, content }: { secTitle: string; content: string }) {
    return (
        <div className="productsSection">
            <div className="productsSection__top">
                <button className="productsSection__topButton"> عرض الكل </button>
                <h2 className="productsSection__topTitle"> {secTitle} </h2>
            </div>
            <div className="productsSection__bottom" dir="rtl">
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

export default ProductsSection;
