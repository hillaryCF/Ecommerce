import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PostData from '../api/api.json'
import InfoCheckout from '../components/info-checkout/infoCheckout'

class Service extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Loaded: true,
			api: PostData.products,
			checkoutArray:[],
		}	
		this.BuyButton = this.BuyButton.bind(this)
	}

	BuyButton = (e) => {
		const {api,checkoutArray} = this.state;
		const newArrayCheck = api[e.target.id]
		checkoutArray.push(newArrayCheck)
		console.log(checkoutArray)
	}


	render() {
		const { Loaded, checkoutArray} = this.state;
		if (!Loaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<React.Fragment>
					<div className="infoSwimsuits">
          <NavLink to="/"><img src="../img/arrow-black.svg" alt=""/></NavLink>
          <h1>your shopping car</h1>
						{checkoutArray.map(e => (
							<InfoCheckout  imageUrl={e.image} name={e.title} price={`$ ${e.price}`} BuyButton={this.BuyButton} idImage={e.id}  />
						))}
					</div>
				</React.Fragment>
			)
		}
	}
}


export default Service;




