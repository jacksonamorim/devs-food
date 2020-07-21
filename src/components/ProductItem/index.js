import React from 'react';
import {
    Container,
    ProductPhotoArea,
    ProductInfoArea,
    ProductButtonArea
} from './styled';

export default ({data}) => {
    return (
        <Container>
            <ProductPhotoArea>
                <img src={data.image}/>
            </ProductPhotoArea>
            <ProductInfoArea>
                <p>{data.name}</p>
                <span>R$ {data.price}</span>
                <p>{data.ingredients}</p>
            </ProductInfoArea>
            <ProductButtonArea>
                <img src="/assets/next.png"/>
            </ProductButtonArea>
        </Container>
    );
}