import React, { Component } from 'react'
import PostData from '../api/api.json'
import InfoCake from '../components/info-cake/infoCake'
import SortPrice from '../components/sortPrice/sortPrice'
import ButtonSort from '../components/buttonSort/buttonSort'
import Modal from '../components/modal/modal'
import Header from '../section/header/header'
import InfoCheckout from '../components/info-checkout/infoCheckout'
import './services.scss'

class Service extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Loaded: true,
			api: PostData.products,
			state: false,
			inputValue: "",
			data:[],
			checkoutArray:[],
			contador: 0
		}	
		this.BuyButton = this.BuyButton.bind(this)
	}

	openAndCloseCategory = () => {
		const currentState = this.state.state;
		this.setState({ state: !currentState });
	};

	sortAscendingPrice = () => {
		const { api } = this.state;
		api.sort((a, b) => b.price - a.price).reverse() 
		this.setState({ api })
	}

	sortDescendingPrice = () => {
		const { api } = this.state;
		api.sort((a, b) => a.price - b.price).reverse()    
		this.setState({ api })

	}

	sortcategory = () => {
		const { api } = this.state;
		api.sort((a,b) => a.category.localeCompare(b.category))
		this.setState({api})
	}

	BuyButton = (e) => {
    this.setState({contador: this.state.contador + 1})
		const {api,checkoutArray} = this.state;
		const newArrayCheck = api[e.target.id]
		checkoutArray.push(newArrayCheck)
		// localStorage
		localStorage.setItem('data', JSON.stringify(checkoutArray))
		const localList = localStorage.getItem('data');
		console.log(localList)
	}

  showModal = (e) => {
		this.setState({ show: true });
		const {api} = this.state;
		const dataApi = api[e.target.id] 
		this.setState({data : dataApi})
	};

  hideModal = () => {
    this.setState({ show: false });
	};
	


	render() {
		const { Loaded, api,data,checkoutArray} = this.state;
		
		if (!Loaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<React.Fragment>
					<Header number={this.state.contador}/>
					<h2>swimsuits</h2>
					<div className="sortButtons">
						<h3 className="title">sort by</h3>
						<ButtonSort actionSort={this.openAndCloseCategory} name="price"/>
						<ButtonSort actionSort={this.sortcategory} name="category"/>
					</div>
					<SortPrice show={this.state.state} upward={this.sortAscendingPrice} falling={this.sortDescendingPrice}/><SortPrice/>
					<div className="infoSwimsuits">
						{api.map(e => (
							<InfoCake id={e.id} imageUrl={e.image} name={e.title} price={`$ ${e.price}`} modalInfo={this.showModal} BuyButton={this.BuyButton} idImage={e.id}  />
						))}
						<InfoCheckout  imageUrl={checkoutArray.image} name={checkoutArray.title} price={`$ ${checkoutArray.price}`}  BuyButton={this.BuyButton} idImage={checkoutArray.id}  /> */}
					</div>
					<Modal show={this.state.show} modalClose={this.hideModal} title={data.title} description={data.description} price={`$ ${data.price}`} urlImage={data.image}/>
				</React.Fragment>
			)
		}
	}
}


export default Service;




