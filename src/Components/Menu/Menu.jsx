import React from 'react'
import './Menu.css'
export default function Menu({ categories }) {

	const menuElements = categories.map((item) => {
		return (
			<li className='menu__item'>
				<a className="menu__link">{item.category}</a>
			</li>
		)
	})
	return (
		<div className='menu'>
			<div className="menu__container">
				<ul className="menu__list">
					{menuElements}
				</ul>
			</div>
		</div>
	)
}
