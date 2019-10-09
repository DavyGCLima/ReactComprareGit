import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
`;

export const Form = styled.form`
  margin-top: 2.5%;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    background: #FFF;
    border: 0;
    font-size: 18px;
    color: #444;
  }

  button {
    height: 55px;
    padding: 20px;
    margin-left: 10px;
    background: #64f5b8;
    color: #FFF;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52D89F;
    }
  }
`;
