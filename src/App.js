import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Preloader from './Components/Preloader/Preloader';
import ProductsList from './Components/ProductsList/ProductsList';


function App() {
	const [products, setProducts] = useState()
	const [showAll, setShowAll] = useState(false)

	//const getCategories = () => {
	//	axios.get('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/categories')
	//		.then((res) => {
	//			console.log(res.data)
	//			return res.data
	//		})
	//}

	const getProducts = () => {
		axios.get('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/products')
			.then((res) => {
				const data = res.data
				setProducts(data)
			})
	}

	useEffect(() => {
		getProducts()
		console.log(products)
	}, [])

	return (<>
		<div className='wrapper'>
			{!products ? <Preloader /> : null}
			<header className='header'>
				<div className='headermain__container _container'>
					{products && <Navbar />}
				</div>
			</header>
			<main className='main'>
				<div class="main__container _container">
					<section className='new'>
						<ProductsList title='Новинки' products={products && products.filter((product) => product.status === 'new')} />
					</section>
					<section className='limited'>
						<ProductsList title='Выбор покупателей' products={(products && !showAll) ? products.slice(0, 6) : products} />
						<div className="limited__status">
							{showAll ? <span onClick={() => setShowAll(!showAll)} >{products && 'Скрыть'}</span>
								: <span onClick={() => setShowAll(!showAll)} >{products && 'Смотреть все'}</span>}
						</div>
					</section>
				</div>
			</main>
			<footer className='footer'></footer>
		</div>
	</>
	);
}

export default App;
