import styled from 'styled-components';

export const CartItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.5rem;
    width: 100%;
`

export const CartItemImage = styled.img`
    max-height: 150px;
    max-width: 150px;
    border: .5px solid gray;
    
    padding: 1rem;
`

export const CartItemDescription = styled.div`
    padding: 1rem 2rem;
`

export const TitleProduct = styled.p`
    font-size: 1rem;
    font-weight: bold;
`

export const OldPrice = styled.p`
    font-size: .75rem;
    font-weight: 600;
    opacity: 50%;
    margin-top: 1rem
`

export const CurrentPrice = styled.p`
    font-size: .75rem;
    font-weight: 600;
`