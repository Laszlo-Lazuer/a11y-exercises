import React, { Fragment, useState } from "react";
import './styles.scss';
import {Link} from "react-router-dom";
import LogoImg from './img/img_logo.png'

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

    const formExample =
        <Fragment>
            <form method="post" style={{border:'1px solid #4f4f4f', width:'370px', margin: '0 auto', textAlign:'right', padding: '1rem'}}>
                <label htmlFor={'first-name'}>First Name:</label>
                <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'Johnny'} id={'first-name'} name={'change-color'}/>
                <br />
                <label htmlFor={'last-name'}>Last Name:</label>
                <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'Appleseed'}  name={'change-color'}/>
                <br />
                <label htmlFor={'shirt-size'}>Shirt Size:</label>
                <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'Size'} id={'shirt-size'} name={'change-color'}/>
                <br />
                <label htmlFor={'phone-number'}>Phone #:</label>
                <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'000-000-0000'} id={'phone-number'} name={'change-color'}/>
                <br />
                <label htmlFor={'address-st'}>Street Address:</label>
                <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'1234 Fake Street'} id={'address-st'} name={'change-color'}/>
                <br />
                <label>City:</label>
                <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'El Paso'} name={'change-color'}/>
                <br />
                <label htmlFor={'address-state'}>State:</label>
                <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'TX'} id={'first-name'} name={'change-color'}/>
                <br />
                <label htmlFor={'first-name'}>Zip:</label>
                <input style={{borderTop: 'none', borderRight: 'none', borderLeft: 'none'}} placeholder={'00000'} id={'color-set'} name={'change-color'}/>
                <br />
            </form>
        </Fragment>;

    const welcome = <h3 style={{color: '#4d4d4d'}}>Welcome {fName} {lName}!</h3>;

    return <div>
        <div style={{textAlign: 'center'}}>
            <h1>Exercise 6</h1>
            <Link to={`${process.env.PUBLIC_URL}/`}>Return Home</Link>

            <div style={{marginTop:'50px'}}>
                <img src={LogoImg}  style={{width:"30%"}} />
                {formExample}
                <button style={{marginTop: '20px', color: '#107DAC'}} className={'change-color-btn'} onClick={() => alert('Thank you!')}>Submit</button>
            </div>
        </div>
    </div>;
};

export default Exercise5;
