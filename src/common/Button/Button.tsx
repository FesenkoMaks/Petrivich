import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import classes from './Button.module.scss'
import Icons from "../Icon/Icon";

type InputPropsType
    = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { labelTitle?: string, productId: string };

const Button = (props: InputPropsType) => {
    const {labelTitle, productId, ...restProps} = props
    return (
        <button data-product-id={productId} className={classes.btn} {...restProps}>{Icons.ShoppingCart()} {props.labelTitle}</button>
    )
}

export default React.memo(Button)
