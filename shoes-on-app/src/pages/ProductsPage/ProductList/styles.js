import styled from 'styled-components';

export const ProductsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 75vh;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    /* Chrome */
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const ProductCard = styled.div`
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
`;

export const ProductDescription = styled.div`
  margin: 1rem 0;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  /* or 88% */

  text-align: center;

  color: #000000;
`;
export const ProductPrice = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 18px;
  /* or 84% */

  text-align: center;
  color: #000000;
  margin-bottom: 1rem;
`;
