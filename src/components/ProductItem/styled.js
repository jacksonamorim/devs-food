import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0, 0.16);
    background-color: #FFFFFF;
    color: #136713;
    cursor: pointer;
`;

export const ProductPhotoArea = styled.div`
    width: 100px;

    > img {
        width: 100%;
    }
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin: 0 10px;

    > p {
        font-size: 20px;
        font-weight: bold;

        :last-child{
            font-size: 11px;
        }
    }

    > span {
        font-size: 14px;
    }
`;

export const ProductButtonArea = styled.div`
    > img {
        width: 15px;
    }
`;