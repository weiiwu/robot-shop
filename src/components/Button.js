import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  background: var(--light);
  border: 0.05rem solid var(--main);
  border-color: ${props => (props.cart ? "var(--mainblue)" : "var(--main)")};
  color: ${props => (props.cart ? "var(--mainblue)" : "var(--main)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => (props.cart ? "var(--mainblue)" : "var(--main)")};
    color: var(--light);
    border-color: var(--light);
  }
  &:focus {
    outline: none;
  }
`;
