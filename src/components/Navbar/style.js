import styled from "styled-components";


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 10px;
  max-width: 100vw;
  align-items: center;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 2px 2px 9px 3px rgba(41, 41, 41, 0.25);
  color: #1c254b;
  flex-direction: row;
  font-weight: bolder;
  margin-bottom: 120px;
  @media only screen and (max-width: 450px) {
    font-size: 10px;
  }


`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  
`;


export const Button = styled.button`
  min-width: 100px;
  min-height: 40px;
  border-radius: 5px;
  border: 1px solid #8a8aea;
  max-height: 70%;
  align-self: center;
  font-size: 20px;
  padding: 10px;
  margin-left: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  @media only screen and (max-width: 450px) {
    min-width: 60px;
    min-height: 40px;
  }


`;



