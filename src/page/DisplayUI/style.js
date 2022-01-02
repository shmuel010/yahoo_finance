import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  z-index: 1;
  padding: 10px;
  //align-items: center;
  @media only screen and (max-width: 850px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: auto ;
  }
`;


export const SearchInput = styled.div`
  right: 0;
  left: 0;
  top: 120px;
  margin: auto ;
  position: absolute;
  width: 50%;
  height: 30px;
  border-radius: 30px;
  background: linear-gradient(268deg, rgba(179, 206, 226, 0.9279061966583508) 11%, rgba(172, 189, 243, 1) 36%, rgba(136, 159, 227, 0.9447129193474265) 67%, rgba(126, 151, 225, 1) 95%);
  outline: none;
  border: 1px solid rgb(41 41 41 / 25%);
  padding: 5px 15px;
  font-size: 18px;

  ::placeholder {
    color: #1c254b;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 30px;
    background: transparent;
    outline: none;
    border: none;
    padding: 5px 15px;
    font-size: 18px;
    margin-left: -17px;
    margin-top: -9px;

    ::placeholder {
      color: #1c254b;
    }
  }
`;
export const SearchIcon = styled.div`
  width: 25px;
  position: absolute;
  right: 10px;
  top: 8px;
`;
export const ErrText = styled.p`
  width: 25px;
  position: absolute;
  right: 10px;
  top: 0px;
`;

export const SearchErrors = styled.div`
  margin: 90px auto 0;
  position: absolute;
  text-align: center;
  //right: 0;
  //left: 0;
  top: 0;
  font-weight: bolder;
  font-size: 18px;
  color: #090808;
  width: 100%;

`;

export const CardItemWrapper = styled.div`
  margin-top: 150px;
`;
