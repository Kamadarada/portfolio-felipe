import styled from 'styled-components'


const Button = styled.button`
    display: flex;
    width: 289px;
    height: 64px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 14px;
    border: 2px solid var(--Verdeagua, #17D8D7);
    background-color:transparent;
    font-size:24px;
    color: var(--Verdeagua, #17D8D7);
    cursor: pointer;
    transition:0.3s;

    &:hover{
        
        -webkit-box-shadow:0px 0px 89px 0px rgba(29,147,237,0.9);
-moz-box-shadow: 0px 0px 89px 0px rgba(29,147,237,0.9);
box-shadow: 0px 0px 89px 0px rgba(29,147,237,0.9);
    }
`


export default Button