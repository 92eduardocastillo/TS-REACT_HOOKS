import React from 'react'
import styled, {css} from 'styled-components'
import './a.css'



export const StyledComponentBasic = () => {
    return (
        <div>
            <button>sdadasd</button>
            <Button  color="#000000">Hola</Button>
            
        </div>
    )
}


const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;

    color: ${ props => props.color || "#ffffff"};

    ${props => 
        props.primary &&
        css`
        background: blueviolet;
        color: white;    
        `
    }

    ${props =>
        props.outline &&
        css`
        background-color: transparent;
        color: white;
        border: 2px solid blue;
        `
    }

`

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />
