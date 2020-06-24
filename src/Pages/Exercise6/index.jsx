import React, {Fragment, useState} from "react";
import './styles.scss';
import {Link} from "react-router-dom";
import LogoImg from './img/img_logo.png'

const Exercise6 = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [showControls, setShowControls] = useState(true);

    const ChangePColor = () => {
        const firstName = document.getElementById('p-color-set').value;
        const lastName = document.getElementById('color-set').value;
        setFName((firstName !== "") ? firstName : fName);
        setLName((lastName !== "") ? lastName : lName);
        return;
    };

    const ColorInput = (showControls) ? <Fragment>
        <label>First Name:</label>
        <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'Johnny'}
               id={'p-color-set'} name={'p-change-color'}/>
        <br/>
        <label>Last Name:</label>
        <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'Appleseed'}
               id={'color-set'} name={'change-color'}/>
        <br/>
        <button style={{marginTop: '20px'}} className={'change-color-btn'}
                onClick={() => ChangePColor()}>{(lName === "" && fName === "") ? "Log Name" : "Saved!"}</button>
    </Fragment> : null;

    const formExample =
        <Fragment>
            <form method="post" style={{width: '370px', margin: '0 auto', textAlign: 'left'}}>
                <fieldset>
                    <legend>Select your pizza toppings:</legend>
                    <input id="ham" type="checkbox" name="toppings" value="ham"/>
                    <label htmlFor="ham">Ham</label><br/>
                    <input id="pepperoni" type="checkbox" name="toppings" value="pepperoni"/>
                    <label htmlFor="pepperoni">Pepperoni</label><br/>
                    <input id="mushrooms" type="checkbox" name="toppings" value="mushrooms"/>
                    <label htmlFor="mushrooms">Mushrooms</label><br/>
                    <input id="olives" type="checkbox" name="toppings" value="olives"/>
                    <label htmlFor="olives">Olives</label>
                </fieldset>
                <br/>
                <h2 style={{fontSize: '15px'}}>Select your Pizza Size:</h2>
                <input id="small" type="radio" name="shipping" value="small"/>
                <label htmlFor="small">Small</label><br/>
                <input id="medium" type="radio" name="medium" value="medium"/>
                <label htmlFor="medium">Medium</label><br/>
                <input id="large" type="radio" name="large" value="large"/>
                <label htmlFor="large">Large</label>
            </form>
        </Fragment>;

    const welcome = <h3 style={{color: '#4d4d4d'}}>Welcome {fName} {lName}!</h3>;

    return <div>
        <div style={{textAlign: 'center'}}>
            <h1>Exercise 6</h1>
            <Link to={`${process.env.PUBLIC_URL}/`}>Return Home</Link>
            <div style={{marginTop: '50px'}}>
                <img src={LogoImg} style={{width: "30%"}}/>
                <h4 style={{fontSize: '30px'}}>How would you like your pizza?</h4>
                {formExample}
                <button style={{marginTop: '20px'}} className={'change-color-btn'}
                        onClick={() => alert('Thank you!')}>Submit
                </button>
            </div>
        </div>
    </div>;
};

export default Exercise6;
