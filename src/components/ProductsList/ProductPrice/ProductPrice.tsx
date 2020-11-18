import React, {ChangeEvent, useState} from "react";
import classes from "./ProductPrice.module.scss"
import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import Icons from "../../../common/Icon/Icon";

type ProductPricePropsType = {
    priceGold: number
    priceGoldAlt: number
    priceRetail: number
    priceRetailAlt: number
    unitRatioAlt: number
    productId: string
}

const ProductPrice = ({priceGold, priceGoldAlt, priceRetail, priceRetailAlt, unitRatioAlt, productId}: ProductPricePropsType) => {
    const [count, setCount] = useState(1)
    const [activeFirst, setActiveFirst] = useState(true)
    const selectFirstClick = () => {
        setActiveFirst(true)
        setActiveSecond(false)
    }
    const [activeSecond, setActiveSecond] = useState(false)
    const selectSecondClick = () => {
        setActiveSecond(true)
        setActiveFirst(false)
    }

    const topButtonClick = () => {
        setCount(count + 1)
    }

    const bottomButtonClick = () => {
        if (count >= 2) {
            setCount(count - 1)
        }
    }

    const changedInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const isInteger = /^[0-9]+$/;
        if (e.currentTarget.value === '' || isInteger.test(e.target.value)) {
            setCount( +e.currentTarget.value )
        }
    }

    return (
        <div className={classes.productPrice}>
            <div className={classes.gold}>
                <div className={classes.goldTitle}>
                    <div>По карте</div>
                    <div>клуба</div>
                </div>
                <div className={classes.goldPrice}>
                    {activeSecond ? count * priceGold : (count * priceGoldAlt).toFixed(2)}
                    {Icons.RubleSign()}

                </div>
            </div>
            <div className={classes.retail}>
                {activeSecond ? count * priceRetail : (count * priceRetailAlt).toFixed(2)}
                {Icons.RubleSign()}
            </div>
            <div className={classes.bonus}>
                {`можно купить за ${Math.ceil(priceRetail * 0.77)} балла`}
            </div>
            <div className={classes.select}>
            <span className={activeFirst ? classes.active : classes.selection}
                  onClick={selectFirstClick}>За м. кв.</span>
                <span className={activeSecond ? classes.active : classes.selection}
                      onClick={selectSecondClick}>За упаковку</span>
            </div>
            <div className={classes.calk}>
                <div className={classes.calkInfo}>
                    <div className={classes.calkInfoIcon}>
                        {Icons.ExclamationCircle()}
                    </div>
                    <div className={classes.calkInfoText}>
                        <div>{`Продается упаковками:`}</div>
                        <div>{`${count} упак. = ${(count * unitRatioAlt).toFixed(2)} м. кв.`}</div>
                    </div>
                </div>
                <div className={classes.calkBody}>
                    <Input value={count} onChange={changedInputValue} topButtonClick={topButtonClick} bottomButtonClick={bottomButtonClick}/>
                    <Button productId={productId} labelTitle={'В корзину'}/>
                </div>
            </div>
        </div>
    )
}

export default ProductPrice