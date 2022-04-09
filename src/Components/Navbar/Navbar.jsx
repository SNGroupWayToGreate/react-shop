import React from 'react'
import './Navbar.css'
import NavButton from '../NavButton/NavButton'
import heart from '../../images/Shape.svg'
import cart from '../../images/default.svg'
import man from '../../images/Man.svg'
import chart from '../../images/chart.svg'
import logo from '../../images/MaxProff.svg'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import Menu from '../Menu/Menu'

export default function Navbar() {
	const categories = [
		{ category: 'Акции и скидки' },
		{ category: 'Ноутбуки и компьютеры' },
		{ category: 'Смартфоны и гаджеты' },
		{ category: 'Телевизоры и аудио' },
		{ category: 'Красота и здоровье' },
		{ category: 'Техника для дома' }
	]
	return (
		<nav className='navbar'>
			<div className="navbar__top">
				<div className="navbar__logo">
					<img src={logo} />
				</div>
				<ButtonGroup>
					<NavButton icon={heart} text='Избранное' count={10} />
					<NavButton icon={chart} text='Сравнение' count={4} />
					<NavButton icon={cart} text='Корзина' count={0} />
					<NavButton icon={man} text='Войти' count={8} />
				</ButtonGroup>
			</div>
			<div className="navbar__menu">
				<Menu categories={categories} />
			</div>
		</nav>
	)
}
