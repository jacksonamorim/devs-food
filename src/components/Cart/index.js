import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody,
    ProductArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
} from './styled';

export default () => {
    const products = useSelector(state => state.cart.products);
    const [show, setShow] = useState(false);

    const handleCartClick = () => {
        setShow(!show);
    } 
    return(
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png"/>
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show &&
                    <CartIcon src="/assets/down.png"/>
                }
            </CartHeader>
            <CartBody show={show}>
                <ProductArea>
                    {products.map((item, index)=>(
                        <ProductItem>
                            <ProductPhoto src={item.image}/>
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                    
                </ProductArea>
            </CartBody>
        </CartArea>
    );
}