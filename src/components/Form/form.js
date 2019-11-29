import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      amount:""
    }
  }

  handleSubmit= async (e) =>{
    e.preventDefault();
    if ( e!== null) {
      alert('pago exitoso')
    }else {
      alert('error')
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <input
            type="email"
            className="input-group"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />

          <label>amount</label>
          <input
            type="number"
            className="input-group"
            value={this.state.amount}
            onChange={(e) => this.setState({ amount: e.target.value })}
          />
          <CardElement className=""/>
          <button>pay with car</button>
        </form>
      </div>
    )
  }
}



export default injectStripe(Form);