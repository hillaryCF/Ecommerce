import React from 'react'
import Form from '../../components/Form/form'
import {StripeProvider, Elements} from 'react-stripe-elements';
import './payModal.scss'

const PayModal = ({ show}) => {
  const modalChange = show ? "modal display-block" : "modal display-none";
  return (
    <React.Fragment>
    <div className={modalChange}>
      <StripeProvider apiKey="pk_test_RJNxM4IzsOkc53ATGoAmik9k00GFmKqPtM">
        <Elements>
          <Form/>
        </Elements>
      </StripeProvider>
    </div>
    </React.Fragment>
  );
};

export default PayModal