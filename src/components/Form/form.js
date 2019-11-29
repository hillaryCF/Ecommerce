import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      email: "",
      amount:""
    }
  }

  handleSubmit= async (e: React.ChangeEvent<HTMLFontElement>) =>{
    e.preventDefault();
    alert('pago exitoso')

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <input
            type="text"
            className="input-group"
            value={this.state.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
          />

          <label>amount</label>
          <input
            type="text"
            className="input-group"
            value={this.state.amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ amount: e.target.value })}
          />
          <label>cc number -- exp. date -- cvc</label>
          <CardElement className=""/>
          <button>pay with car</button>
        </form>
      </div>
    )
  }
}



export default injectStripe(Form);