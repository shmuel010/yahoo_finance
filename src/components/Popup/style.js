import styled from "styled-components";

export const PopupWrapper = styled.div`
  
  padding: 10px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000000e3;
  z-index: 11;
  width: 70%;
  height: 70%;
  border: 1px solid;
  border-radius: 15px;
  display: block;
  flex-direction: column;
  font-size: 24px;
  margin: auto;
  color: white;
  text-align: center;
  overflow-y:auto ;
  h1{
    margin: 20px 0;
  }
  p{
    margin-top: auto;
  }
  button{
    margin: 20px 0 ;
    width: 150px;
    padding: 5px;
    height: 30px;
    outline: none;
    border-radius: 7px;
    background: #339cff;
    border: none;
    
    font-weight: 600;
    box-shadow: 0 0 4px 0;
    cursor: pointer;
    :hover{
      background: #61dafb;
    }
  }
  @media only screen and (max-width: 700px){
    font-size: 17px;
  } 
`;