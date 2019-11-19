import React, { Component } from 'react'
import PostData from '../api/api.json'
import InfoCake from '../components/info-cake/infoCake'
import SortButton from '../components/sortPriceButton/sortButton'
import './services.scss'
console.log(PostData.title);
class Service extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Loaded: true,
			api: PostData.products,
			state: false
		}
		
	}

	openAndCloseModal = () => {
		const currentState = this.state.state;
		this.setState({ state: !currentState });
	};

	sortAscendingPrice = () => {
		const { api } = this.state;
		api.sort((a, b) => b.price - a.price).reverse()    
		this.setState({ api })
		console.log(api)
	}

	sortDescendingPrice = () => {
		const { api } = this.state;
		api.sort((a, b) => a.price - b.price).reverse()    
		this.setState({ api })
		console.log(api)
	}

	sortcategory = () => {
		const { api } = this.state;
		api.sort((a,b) => a.title.localeCompare(b.title) )   
		this.setState({ api })
		console.log(api);
	}

	render() {
		const { Loaded, api } = this.state;
		
		if (!Loaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<React.Fragment>
					<h2 className="title">sort by</h2>
					<button onClick={this.openAndCloseModal} className="buttonPrice">price</button>
					<button onClick={this.sortcategory} className="buttonPrice">name</button>
					<SortButton show={this.state.state} upward={this.sortAscendingPrice} falling={this.sortDescendingPrice}/><SortButton/>
					{api.map(e => (
					<InfoCake id={e.id} imageUrl={e.image} name={e.title} description={e.description} price={`$ ${e.price}`} />
					))}
				</React.Fragment>
			)
		}
	}
}


export default Service;
