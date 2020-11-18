import React from "react";
import classes from "./Header.module.scss"
import Icons from "../../common/Icon/Icon";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.icon}>
                    <img src ='https://img.apksum.com/17/ru.handh.petrovich/1.16.0/icon.png' alt ="icon"/>
                </div>
                <div className={classes.shoppingBasket}>
                    {Icons.ShoppingCart()}
                </div>
            </div>
        </div>
    )
}

export default Header