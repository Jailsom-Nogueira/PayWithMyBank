import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    /* Chrome */
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const CheckoutTittle = styled.p`
  font-size: 23.93px;
  margin-bottom: 0.55rem;
`;

export const ProductCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.7fr 0.3fr;
  grid-template-rows: 1fr 1fr 0.3fr;
  gap: 0px 0px;
  grid-template-areas:
    'photo description delete'
    'photo delivery delete'
    'total amount delete';

  background-color: #f7f7f7;
  border-radius: 9.02222px;
  padding: 0.85rem;
`;

export const Photo = styled.div`
  grid-area: photo;
  width: 8vw;
  height: 10vw;
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
    width: 25vw;
    height: auto;
    margin-top: -40px;
    margin-left: -120px;
  }
`;

export const Total = styled.div`
  grid-area: total;
  height: auto;
  padding-top: 0.5rem;

  p {
    &:first-child {
      font-weight: 400;
      font-size: 13.53px;
      line-height: 16.24px;
    }
    &:not(:first-child) {
      color: #a5a5a5;
      font-size: 13.16px;
      font-weight: 400;
    }
  }
`;

export const Delete = styled.div`
  grid-area: delete;
  img {
    float: right;
    cursor: pointer;
  }
`;

export const Amount = styled.div`
  grid-area: amount;
  height: auto;
  padding-top: 0.5rem;

  p {
    float: right;
    font-weight: 700;
    font-size: 36.09px;
    line-height: 36.09px;
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

export const Delivery = styled.div`
  grid-area: delivery;

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
