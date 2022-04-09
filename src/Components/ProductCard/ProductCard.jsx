import React from 'react'
import './ProductCard.css'

export default function ProductCard({ product }) {
	return (
		<div key={product.id} className="product">
			<div className="product__image">
				<img src={product.image} alt="productImage" />
			</div>
			<div className="product__name"><a href='#'>{product.name}</a></div>
			<div className="product__oldprice">{product?.old_price && `$ ${product.old_price}`}</div>
			<div className="product__price">$ {product?.price}</div>
			<div className="product__monthly">{product?.monthly_pay && `От ${product.monthly_pay}  сум/12 мес`}</div>
			<div className="product__buttons">
				{product.in_stock ? <button className='product__add' type='button'>В корзину</button>
					: <button className='product__disabled' type='button'>В корзину</button>}

			</div>
		</div>
	)
}
