import React,{Component} from 'react'
import PostData from '../api/api.json'
import InfoCake from '../components/info-cake/infoCake'

class Service extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Loaded: true,
			api:PostData.products
		}
		console.log(this.state.api[0].title)
	}

	render() {

		const { Loaded, api } = this.state;
		console.log(api)
		if (!Loaded) {

			return <div>Loading...</div>;

		} else {
			console.log(api)
			return (
				<div>
					{api.map(e => (
						<InfoCake id={e.id} imageUrl={e.image} name={e.title} description={e.description} price={`$ ${e.price}`}/>
					))}
				</div>
			)
		}
	}
}


export default Service;