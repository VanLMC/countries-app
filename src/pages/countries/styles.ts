import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#ffffff',
  color: '#ffffff',
})`
  width: 90%;
  height: 50px;
  border: 1px solid #8a3df3;
  margin: 30px auto 15px auto;
  padding: 10px;
`;

export const Container = styled.View`
  background-color: #1a1a1a;
  flex: 1;
`;
