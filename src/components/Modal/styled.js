import styled from 'styled-components';

export const Container = styled.div`
    display: ${props=>props.status ? 'flex':'none'};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div`
    max-width: 100vw;
    max-height: 95vh;
    border-radius: 20px;
    box-shadow: 0 0 500px #000;
    background-color: #FFF;
    overflow: auto;
`;