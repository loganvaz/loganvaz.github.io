import React, {useEffect} from 'react';
import './Button.css';
import {Link} from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];


export const Button = ( {children, type, onClick, buttonStyle, buttonSize, go_to, width, button_id}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const where_go = go_to ? go_to : "";
    console.log("where go is " + where_go);

    //const processed_go_to = go_to.charAt(0) == '#' ? {where_go} : "#";
    const processed_go_to  =where_go;
    const on_clk = (where) => {
        console.log("on click\n");
        if (where.charAt(0) == '#') {
            let element = document.getElementById(where.substring(1));
            console.log("el is " + element ? element : "nothing there")
            console.log(element ? "top - " + element.getBoundingClientRect().top + " left - " + element.scrollLeft : "") ;
            window.scrollTo( {
                top: element.getBoundingClientRect().top - document.getElementsByClassName("navbar")[0].getBoundingClientRect().bottom,
                left: element.scrollLeft
            })
        }
        else {
            window.scrollTo( {
                top: 0,
                left: 0
            })
        }


        
    }

    return (
        <Link to = {processed_go_to} onClick = { () => on_clk(where_go)} className = "btn-mobile">
            <button
            className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {onClick}
            type = {type}
            style = {{minWidth: width != -1 ? width :0}}
            id = {button_id}
            >

            
            {children}

            </button>

        </Link>
    )

}

Button.defaultProps = {
    go_to : "sign-up"
}

