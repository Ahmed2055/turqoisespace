import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";



function CartItems() {

  let match = useRouteMatch();

  return (
    <div className='cartItems' dir='rtl'>
        <div className="cartItems__location">
            <div className="cartItems__locationTop">
                <div className="cartItems__locationTopRight"><CheckCircleIcon fontSize='large' /></div>              
                <div className="cartItems__locationTopLine"></div>
                <div className="cartItems__locationTopLeft"><span className="cartItems__locationTopLeftNumber">2</span></div>
            </div>
            <div className="cartItems__locationBottom">
              <p className="cartItems__locationBottomRight">سلة المشتريات</p>
              <p className="cartItems__locationBottomLeft">طريقة الدفع</p>
            </div>
        </div>
        <div className="cartItems__empty">
          <HeartBrokenIcon fontSize='inherit' />
          <p className="cartItems__emptyText">السلة فارغة</p>
        </div>
        <div className="cartItems__buttonDiv">
          <Link to="/" className="cartItems__button"  >          
            <KeyboardArrowRightIcon />      
            <span className="cartItems__ButtonText" >  العودة للمتجر </span>        
          </Link>
        </div>
        
    </div>
  )
}

export default CartItems