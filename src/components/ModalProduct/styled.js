import styled from 'styled-components';

export const Container = styled.div`
    width: 650px;
    padding: 10px;
`;

export const ProductArea = styled.div`
    height: 200px;
    display: flex;

    > img {
        width: 310px;
        border-radius: 10px;
    }
`;

export const ProductInfoArea = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

export const ProductDetail = styled.div`
`;

export const ProductName = styled.p`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductIngredients = styled.p`
    font-size: 14px;
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    background-color: #073C07;
    border-radius: 5px;

    >img {
        margin: 0 5px;
        width: 24px;
        height: auto;
        cursor: pointer;
    }
    
    > p {
        margin: 0 10px;
        font-size: 25px;
        font-weight: bold;
        color: #FFF;
    }
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;

export const ProductButton = styled.button`
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 22px;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    box-shadow: 4px 5px 0 #000;
    color: #FFF;
    background-color: #073C07;
    cursor: pointer;
`;