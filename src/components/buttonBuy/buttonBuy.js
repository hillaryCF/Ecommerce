import React,{useState} from 'react'
import './buttonBuy.scss'

function ButtonBuy() {
	
	// function BuyAction() {
	 	const [count, setCount] = useState(0);
	// 	console.log(setCount(count + 1));
	// }
	return (
		<button onClick={() => setCount(count + 1)} className="button__buy">buy now</button>
	);
}

export default ButtonBuy