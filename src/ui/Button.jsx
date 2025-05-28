import styled, { css } from 'styled-components';

const Button = styled.button`
  transition-property: all;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid gray;
  padding: 10px 35px;
  transition-duration: 300ms;

  &:hover {
    ${(props) =>
      props.color &&
      css`
        color: ${props.color};
      `}
    ${(props) =>
      props.backgroundcolor &&
      css`
        background-color: ${props.backgroundcolor};
      `}
    padding: 10px 50px;
  }
`;

export default Button;
