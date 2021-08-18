import styled from 'styled-components';

interface IWrapper {
  background: string;
}

export const Wrapper = styled.div<IWrapper>`
  background: ${(props) => props.background};
`;
