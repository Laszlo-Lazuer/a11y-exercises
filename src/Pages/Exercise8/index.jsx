import React, {Fragment, useState} from "react";
import './styles.scss';
import {Link} from "react-router-dom";
import LogoImg from './img/img_logo.png'

const Exercise7 = () => {
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
        <div className={'ex-container'}>
            <div className={'ex-container--item'}><button>Visible</button></div>
            <div className={'ex-container--item'}><button>Hidden content?</button></div>
            <div className={'ex-container--item'}><button>Visible</button></div>
            <div className={'ex-container--item'}><button>Hidden content?</button></div>
            {/*<p>A British businessman has racked up 2 million flyer miles and plans to*/}
            {/*    travel on the world's first commercial tourism flights to space.</p>*/}

            {/*<p><a href="ff.html">Read More...</a></p>*/}
        </div>;

    const welcome = <h3 style={{color: '#4d4d4d'}}>Welcome {fName} {lName}!</h3>;

    return <div>
        <div style={{textAlign: 'center'}}>
            <h1>Exercise 8</h1>
            <Link to={`${process.env.PUBLIC_URL}/`}>Return Home</Link>
            <div style={{marginTop: '50px'}}>
                <img src={LogoImg} alt={'img/2093948230918'} style={{width: "30%"}}/>
                {formExample}
            </div>
        </div>
    </div>;
};

export default Exercise7;
