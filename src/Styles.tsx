import { CSSProperties } from "react";

//styling for the cards themselves
const cardStyle:CSSProperties = {
    width: '280px',
    height: 'auto',
    border: '1px solid',
    padding: '8px 24px',
    borderRadius: '20px',
    margin: '10px',
    transformOrigin: 'top center',
}

export {cardStyle}

//styling for buttons
const btnStyle:CSSProperties = {
    backgroundColor: 'lightgrey',
    margin: '10px',
    borderRadius: '10px',
    border: 'none',
    textAlign: 'center',
    padding: '12px',
    cursor: 'pointer',
}
export {btnStyle}

//styling for the stuff that's on the cards
const divStyle:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}
export {divStyle}

//styling for the container of cards to position them
const containerStyle:CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
}
export {containerStyle}