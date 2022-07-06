import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background-color: #D1D8E5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem .5rem;
`

export const ToggleContent = styled.div`
    position: absolute;
    top: 1rem;

    display: flex;
    width: 100%;
    justify-content: center;
    
    span {
        margin-left: 1rem;
    }
`

export const CartBox = styled.div`
    background-color: #FFF;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    width: 40%;
    
    @media(max-width: 800px) {
        width: 100%;
    }
`

export const CartHeader = styled.header`
    border-bottom: .5px solid rgba(0, 0, 0, 0.2);
    padding: 1rem 2rem;
    text-align: center;
`

export const CartBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    border-bottom: .5px solid rgba(0, 0, 0, 0.2);
`
export const SeeMore = styled.button`
    padding: .5rem 2rem;
    background-color: #229a00;
    border: none;
    border-radius: .5rem;
    width: 50%;

    color: #FFF;
    font-weight: bold;

    transition: .3s;
    cursor: pointer;

    &:hover {
        background-color: #008000;
    }
`

export const CartTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem;
    border-bottom: .5px solid rgba(0, 0, 0, 0.2);
`

export const CartTotal = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  
    p {
        font-size: 1.5rem;
        font-weight: bold;
    }
`

export const FreeShippingAlert = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgba(255, 76, 48, .5);
    margin-top: 2rem;
    padding: 1rem;
    max-width: 100%;
    border-radius: 2rem;

    color: red;
    font-weight: 600;
    font-size: .75rem;

    @media(min-width: 800px) {
        font-size: 1rem;
    }
`

export const CartFooter = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem 2rem;
`

export const CheckoutButton = styled.button`
    background-color: #3B74F2;
    padding: .5rem 3rem;
    width: 90%;
    border: none;
    border-radius: .5rem;

    font-size: 1rem;
    font-weight: bold;
    color: #FFFFFF;

    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: #223663;
    }

    @media(min-width: 800px) {
        font-size: 1.5rem;
    }
`