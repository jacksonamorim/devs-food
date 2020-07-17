import styled from 'styled-components';

export const Container = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius: 20px;
    background-color: ${props=>props.active == props.id ? '#FFFFFF' : '#AAE09A'} ;
    cursor: pointer;
    transition: all ease .4s;
`;

export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
`;