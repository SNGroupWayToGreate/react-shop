import React from 'react'
import './NavButton.css'

export default function NavButton({ icon, text, count }) {
	const index = count ? <div className="navbutton__count">{(count > 9) ? '+9' : count}</div> : null
	return (
		<div className='navbutton'>
			<div className="navbutton__icon">
				<img src={icon} alt="" />
			</div>
			<div className="navbutton__text">{text}</div>
			{index}
		</div>
	)
}
