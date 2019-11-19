import React,{Component} from 'react'
import {Link} from 'react'

class ButtonBuy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Loaded: true,
			api:PostData.products
		}
		console.log(this.state.api[0].title) 
	}

	render() {
			console.log(api)
			return ( 
				<React.Fragment>
					<Link>hola</Link>
				</React.Fragment>
			)
	}
} 