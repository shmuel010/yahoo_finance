import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #090808;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  margin: 50px auto;
  overflow-x: hidden;
  
  button{
    background: rgba(182, 182, 252, 0.75);
    height: 35px;
    border-radius: 20px;
    border: 1px solid blueviolet;
    width: 35%;
    margin: 10px auto 20px auto;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
  }
  //h1{
  //  //margin-bottom: 20px;
  //}
  form{
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  input{
    width: 80%;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    height: 30px;
    border-radius: 20px;
    border: 1px solid blueviolet;
    padding-left: 20px;
    margin: 10px auto 50px auto;
    outline: none;
    font-size: 17px;

    &:focus {
      display: inline-block;
      box-shadow: 0 0 0 0.2rem #b9abe0;
      backdrop-filter: blur(12rem);
      border-radius: 2rem;
    }

    &::placeholder {
      color: rgba(3, 3, 3, 0.6);
      font-weight: 100;
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 850px) {
    width: 80vw;
    height: 70vh;
    hr {
      margin-bottom: 0.3rem;
    }

    h4 {
      font-size: small;
    }

    h1 {
      padding: 30px 0;
      margin-top: 20px;
      color: black;
    }
    
   
  }`;

// export const Input = styled.input`
//
// `;
// export const Form = styled.form`
//
// =`;
 


