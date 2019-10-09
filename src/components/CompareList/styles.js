import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
`;

export const Repository = styled.div`
  width: 250px;
  background: #FFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 1.5%;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
    width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 3%;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 5% 8%;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
        margin-left: 2%;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }

`;
