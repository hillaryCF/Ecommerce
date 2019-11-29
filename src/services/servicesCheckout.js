import React, { Component } from 'react'
import InfoCheckout from '../components/info-checkout/infoCheckout'

const localList = JSON.parse( localStorage.getItem('data'));
let index = -1;
class Service extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}	
	}

	CheckDelete = () => {
		localList.splice(index,1);
		localStorage.setItem('data', JSON.stringify(localList));
		console.log(localList)
	}
	render() {
		if (localList == null) {
			return <div>you don't have any swimsuits yet</div>;

		} else {
			return (
			
				<React.Fragment>
					{localList.map(e => (
						<InfoCheckout  imageUrl={e.image} name={e.title} price={`$ ${e.price}`} BuyButton={this.BuyButton} idImage={e.id} category={e.category} closeButton={this.CheckDelete}/>
					))}
					<button onClick={this.CheckSuma} className="check__info--button">pay</button>
				</React.Fragment>
			)
		}
	}
}


export default Service;




