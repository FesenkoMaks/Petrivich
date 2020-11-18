import React from "react";
import classes from "./ProductImg.module.scss";

type ProductItemType = {
    primaryImageUrl: string
}

const ProductImg = ({primaryImageUrl, ...props}: ProductItemType) => {


    const newStr = primaryImageUrl.substring(0, primaryImageUrl.length - 4);
    const imgSrc = 'http:' + newStr + '_220x220_1.jpg';
    return(
        <div className={classes.productImg}>
            <img {...props} src={imgSrc} alt=""/>
        </div>
    )
}

export default ProductImg