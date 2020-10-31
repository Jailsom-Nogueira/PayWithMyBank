import styled from 'styled-components';

export const ProgressButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%auto;
  background: #6b8067;
  color: white;
  padding: 1rem 0;
  margin-bottom: 1rem;

  font-size: 14px;
  line-height: 19px;
  text-align: center;

  border: 1px solid transparent;
  border-radius: 2.7029px;

  cursor: pointer;

  &:hover {
    border: 1px solid lightgray;
  }
`;
