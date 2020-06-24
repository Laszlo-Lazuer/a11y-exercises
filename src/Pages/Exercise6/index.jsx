import React, { Fragment, useState } from "react";
import './styles.scss';
import {Link} from "react-router-dom";

const Exercise5 = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [showControls, setShowControls] = useState(true);

    const ChangePColor = () => {
        const firstName  = document.getElementById('p-color-set').value;
        const lastName  = document.getElementById('color-set').value;
        setFName((firstName !== "") ? firstName:fName);
        setLName((lastName !== "") ? lastName:lName);
        return ;
    };

    const ColorInput = (showControls) ? <Fragment>
        <label>First Name:</label>
        <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'Johnny'} id={'p-color-set'} name={'p-change-color'}/>
        <br />
        <label>Last Name:</label>
        <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'Appleseed'} id={'color-set'} name={'change-color'}/>
        <br />
        <button style={{marginTop: '20px'}} className={'change-color-btn'} onClick={() => ChangePColor()}>{(lName === "" && fName === "") ? "Log Name":"Saved!"}</button>
    </Fragment>: null;

    const welcome = <h3 style={{color: '#4d4d4d'}}>Welcome {fName} {lName}!</h3>;

    return <Fragment>
        <div style={{textAlign: 'center'}}>
            <h1>Exercise 4</h1>
            <Link to={`${process.env.PUBLIC_URL}/`}>Return Home</Link>


        <h2 style={{marginTop: '50px'}}>Welcome to our guest book!</h2>
        <div className={'control-wrapper'}>
            <h3 style={{color: '#4d4d4d'}}>Please enter your name below:</h3>
            {ColorInput}
            {(lName !== "" && fName !== "") ? welcome:null}
        </div>
        </div>
    </Fragment>;
};

export default Exercise5;
