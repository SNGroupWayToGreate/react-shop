import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductsList.css'

export default function ProductsList({ products, title }) {

	const productsElements = products?.map((product) => {
		return (
			<ProductCard product={product} />
		)
	})

	return (
		<div className='products'>
			<div className="products__title">
				{products && title}
			</div>
			<div className="products__body">
				<div className="products__items">
					{productsElements}
				</div>
			</div>
		</div>
	)
}
