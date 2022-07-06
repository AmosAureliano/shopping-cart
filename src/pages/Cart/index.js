import { useEffect, useState } from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

import { 
    Container,
    ToggleContent,
    CartBox,
    CartHeader,
    CartBody,
    SeeMore,
    CartTotalContainer,
    CartTotal,
    FreeShippingAlert,
    CartFooter,
    CheckoutButton
} from './styles';
import { aboveTen, belowTen } from '../../api/data';
import CartItem from '../../components/CartItem';

function Cart() {
    const [isAboveTen, setIsAboveTen] = useState(false);
    const [cartData, setCartData] = useState([]);
    const [isSeeMoreSelected, setIsSeeMoreSelected] = useState(false);
    
    function handleDataCart() {
        setIsAboveTen(!isAboveTen);
    }

    function handleSeeMore() {
        setIsSeeMoreSelected(!isSeeMoreSelected)
    }

    function parseValue(value) {
        return "R$ " + (value/100).toFixed(2)
    }


    useEffect(() => {
        setCartData(belowTen);
    }, []);

    function cartQuantityDisplay() {
        return isSeeMoreSelected ? cartData.items : cartData.items.slice(-3);
    }
   
    useEffect(() => {
        isAboveTen ? setCartData(aboveTen) : setCartData(belowTen);
    }, [isAboveTen]);

    return(
        <Container>
            <ToggleContent>
                <Toggle
                    defaultChecked={false}
                    icons={false}
                    onChange={handleDataCart}
                />
                <span>Clique aqui para alterar o tipo do carrinho (frete/sem frete)</span>
            </ToggleContent>

            <CartBox>
                <CartHeader>
                    <h2>Meu Carrinho</h2>
                </CartHeader>

                <CartBody>
                    {   
                        cartData.items 
                        &&
                        cartQuantityDisplay().map((item, index) => {
                            return(
                                <CartItem 
                                    imageUrl={item.imageUrl}
                                    title={item.name}
                                    oldPrice={parseValue(item.listPrice)}
                                    currentPrice={parseValue(item.sellingPrice)}
                                />
                            )
                        })
                    }
                    {
                        (cartData.items && cartData.items.length > 3) 
                        && (
                            <SeeMore onClick={handleSeeMore}>{isSeeMoreSelected ? "Mostrar menos" : "Mostrar mais"}</SeeMore>
                        )
                    }
                    
                </CartBody>

                <CartTotalContainer>
                    <CartTotal>
                        <p>Total</p>
                        <p>{parseValue(cartData.value)}</p>
                    </CartTotal>

                    {
                        isAboveTen && (
                            <FreeShippingAlert>
                                Parabéns, sua compra tem frete grátis!
                            </FreeShippingAlert>
                        )
                    }
                  
                </CartTotalContainer>

                <CartFooter>
                    <CheckoutButton>Finalizar Compra</CheckoutButton>
                </CartFooter>
            </CartBox>
        </Container>
    )
}

export default Cart;