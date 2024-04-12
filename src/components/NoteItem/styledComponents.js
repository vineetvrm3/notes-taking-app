import styled from "styled-components"

export const ListContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.color};
    width: 400px;
    height: 400px;
    border-radius: 10px;
    margin: 10px;
    overflow-y: auto;
`;


export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`