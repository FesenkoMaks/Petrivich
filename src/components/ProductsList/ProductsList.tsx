import React from "react";
import classes from "./ProductsList.module.scss";
import {products, productsItem} from "../../store/products";
import ProductPrice from "./ProductPrice/ProductPrice";
import { v1 } from "uuid";
import ProductImg from "./ProductImg/ProductImg";

const ProductsList = () => {
   return (
       <div className={classes.container}>
           {
               products.map((productItem: productsItem) =>
                   <div className={classes.productItem} key={v1()}>
                       {/*Сделал генерацию для key тк в product.json были совпадения по productId (висели ошибки в кансоли)*/}
                       <div className={classes.productHeader}>
                           <div className={classes.code}>
                               Код: {productItem.code}
                           </div>
                           <a href="#" className={classes.availability}>
                               {productItem.isActive
                                   ? 'Наличие'
                                   : 'Нет в наличие'
                               }
                           </a>
                       </div>
                       <div className={classes.productBody}>
                           <ProductImg primaryImageUrl={productItem.primaryImageUrl}/>
                           <div className={classes.productInfo}>
                               <div className={classes.productTitle}>
                                   {productItem.title}
                               </div>
                               <div className={classes.assocProducts}>
                                   Могуд понадобится:
                                   {productItem.assocProducts
                                       .split('\n')
                                       .map(a => <a key={v1()} href="#" className={classes.assocProductsItem}>{`${a}`}</a>)}
                               </div>
                           </div>
                           <ProductPrice
                               priceGold={productItem.priceGold}
                               priceGoldAlt={productItem.priceGoldAlt}
                               priceRetail={productItem.priceRetail}
                               priceRetailAlt={productItem.priceRetailAlt}
                               unitRatioAlt={productItem.unitRatioAlt}
                               productId={productItem.productId}
                           />
                       </div>
                   </div>
               )
           }
       </div>
   )
}

export default ProductsList