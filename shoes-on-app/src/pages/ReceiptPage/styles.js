import styled from 'styled-components';

export const ReceiptPageContainer = styled.div`
  flex-grow: 1;
`;

export const ReceiptTittle = styled.p`
  font-size: 23.93px;
  margin-bottom: 1rem;
`;

export const OrderSummaryCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.3fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'tittle tittle'
    'photo description';

  background: #f7f7f7;
  border-radius: 9.02222px;
  padding: 0.85rem;
  margin-bottom: 1rem;
`;

export const OrderSummaryTittle = styled.div`
  grid-area: tittle;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 154.6%;
`;

export const Photo = styled.div`
  grid-area: photo;

  width: 6vw;
  height: 6vw;
  border-radius: 9.02222px;
  overflow: hidden;
  margin-right: 0.55rem;

  /* Hide scrollbar for Chrome, Safari and Opera */
  :-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  img {
    width: 20vw;
    height: auto;
    margin-top: -55px;
    margin-left: -120px;
  }
`;

export const Description = styled.div`
  grid-area: description;

  p {
    &:first-child {
      font-weight: 600;
    }
    &:not(:first-child) {
      color: #a5a5a5;
      font-size: 13.16px;
      font-weight: 400;
    }
  }
`;

export const PaymentMethodCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  border-radius: 9.02222px;
  padding: 0.85rem;
  margin-bottom: 1rem;
`;

export const PaymentMethodTittle = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 154.6%;
`;

export const PaymentMethodType = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  padding: 0.5rem 0 1rem 0;

  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
  }
`;

export const PaymentMethodTotal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;

  div {
    &:first-of-type {
      display: flex;
      flex-direction: column;
    }
    p {
      &:first-child {
        font-weight: 600;
      }
      &:not(:first-child) {
        color: #a5a5a5;
        font-size: 13.16px;
        font-weight: 400;
      }
    }
  }
  div {
    &:nth-of-type(2) {
      height: auto;
      width: 100%;
      text-align: center;
      padding-top: 0.5rem;

      p {
        float: right;
        font-weight: 700;
        font-size: 36.09px;
        line-height: 36.09px;
      }
    }
  }
`;
