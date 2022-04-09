import React from 'react'
import './ButtonGroup.css'

export default function ButtonGroup({ children }) {
	return (
		<div className='items'>
			{children}
		</div>
	)
}
