import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
    Container,
    ProductArea,
    ProductInfoArea,
    ProductButtons,
    ProductDetail,
    ProductQuantityArea,
    ProductIngredients,
    ProductName,
    ProductButton,
    ProductQuantity,
    ProductPrice
} from './styled';

export default ({data, setStatus}) => {
    const dispatch = useDispatch();
    const [qt, setQt] = useState(1);
    useEffect(()=>{
        setQt(1);
    }, [data])

    const handleCancel = () => {
        setStatus(false);
    }
    const handleMinusQt = () => {
        if(qt > 1){
            setQt(qt - 1);
        }
    }
    const handlePlusQt = () => {
        setQt(qt + 1);
    }
    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: {data, qt}
        });
        setStatus(false);
    }

    return (
        <Container>
            <ProductArea>
                <img src={data.image}/>
                <ProductInfoArea>
                    <ProductDetail>
                       <ProductName>{data.name}</ProductName> 
                       <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetail>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <img src="/assets/minus.png" onClick={handleMinusQt}/>
                            <p>{qt}</p>
                            <img src="/assets/plus.png" onClick={handlePlusQt}/>
                        </ProductQuantity>
                        <ProductPrice>R$ {(data.price * qt).toFixed(2)}</ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton onClick={handleCancel}>Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}