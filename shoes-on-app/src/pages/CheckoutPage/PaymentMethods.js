import React from 'react';
import styled from 'styled-components';

import onlineBanks from '../../assets/images/onlineBanks.svg';
import cardPayment from '../../assets/images/cardPayment.svg';
import applePay from '../../assets/images/applePay.svg';

export const PaymentMethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 0.85rem;
  background-color: #f7f7f7;
  border-radius: 9.02222px;
  padding: 0.85rem;
`;
export const PaymentMethodTittle = styled.p`
  margin-top: 1rem;
  font-weight: normal;
  font-size: 16.9328px;
  line-height: 23px;
`;
export const PaymentMethodItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;

  border: none;
  outline: none;
  border: 2px solid transparent;
  border-radius: 9.02222px;
  margin-bottom: 0.4rem;
  padding: 0.6rem 0.4rem;
  background: #ffffff;
  cursor: pointer;

  &:active {
    border: 2px solid #63b55c;
    border-radius: 9.02222px;
  }
  &:hover {
    border: 2px solid #63b55c;
    border-radius: 9.02222px;
  }
  &:visited {
    border: 2px solid #63b55c;
    border-radius: 9.02222px;
  }

  div img {
    float: right;
  }
  p {
    &:first-child {
      font-size: 13.5333px;
      line-height: 18px;

      color: #565656;
    }
  }
`;
const DiscountAdd = styled.p`
  color: #9e7d27;
  font-weight: bold;
  font-size: 9.77px;
  line-height: 10px;
  text-align: center;
  border-radius: 5px;
  background-color: #ffcc00;
  padding: 3px 6px;
  display: inline-block;
`;

export default function PaymentMethods() {
  return (
    <>
      <PaymentMethodTittle>Payment method</PaymentMethodTittle>
      <PaymentMethodWrapper>
        <PaymentMethodItem>
          <div>
            <p>Online banking</p>
            <DiscountAdd>SAVE 10%</DiscountAdd>
          </div>
          <div>
            <img
              src={onlineBanks}
              alt="Online banks banner"
              // onClick={handleDeleteProduct}
            />
          </div>
        </PaymentMethodItem>

        <PaymentMethodItem>
          <div>
            <p>Card payment</p>
          </div>
          <div>
            <img
              src={cardPayment}
              alt="Online banks banner"
              // onClick={handleDeleteProduct}
            />
          </div>
        </PaymentMethodItem>

        <PaymentMethodItem>
          <div>
            <p>Apple pay</p>
          </div>
          <div>
            <img
              src={applePay}
              alt="Online banks banner"
              // onClick={handleDeleteProduct}
            />
          </div>
        </PaymentMethodItem>
      </PaymentMethodWrapper>
    </>
  );
}
