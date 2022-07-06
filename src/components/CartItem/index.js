import { 
    CartItemContainer,
    CartItemImage,
    CartItemDescription,
    TitleProduct,
    OldPrice,
    CurrentPrice
} from './styles';

function CartItem({imageUrl, title, oldPrice, currentPrice, key}) {
    return(
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt=""/>
            <CartItemDescription>
                <TitleProduct>{title}</TitleProduct>
                <OldPrice>{oldPrice}</OldPrice>
                <CurrentPrice>{currentPrice}</CurrentPrice>
            </CartItemDescription>
        </CartItemContainer>
    )
}

export default CartItem;