import React from "react";
import classes from "./Header.module.scss"

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.iicon}>
                    Icon
                </div>
                <div className={classes.shoppingBasket}>
                    Shopping Basket
                </div>
            </div>
        </div>
    )
}

export default Header