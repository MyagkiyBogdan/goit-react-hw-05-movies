import styled from 'styled-components';

export const PageTitle = styled.h1`
  color: orange;
  font-size: 30px;
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  margin-left: 15px;

  padding: 10px;
  /* background-color: ${p => (p.hovered ? 'orange' : 'orangered')};
	 */
  background-color: orange;
  color: #fff;
  border: none;
  border-radius: 4px;

  :hover {
    background-color: orangered;
  }
`;

export const Input = styled.input`
  background-color: #f0f0f0;
  border: #0b0b0b 1px solid;
  border-radius: 4px;
  padding: 10px;
`;
