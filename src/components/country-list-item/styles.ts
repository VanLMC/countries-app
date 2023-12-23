import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 1px solid #2c2c2c;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.Text`
  color: #ffffff;
`;

export const Flag = styled.Image`
  width: 35px;
  height: 35px;
`;
