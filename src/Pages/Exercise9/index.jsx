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
        <div className={'question-wrapper'}>
            <h3>Practice Questions</h3>
            <div className={'question-wrapper--questions'}>
                <ol>
                    <li>Theoretical Models of Disability: How does the <strong>MEDICAL MODEL</strong> define accessibility?</li>
                    <li>Theoretical Models of Disability: How does the <strong>ECONOMIC MODEL</strong> define accessibility?</li>
                    <li>Theoretical Models of Disability: How does the <strong>SOCIAL MODEL</strong> define accessibility?</li>
                    <li>Theoretical Models of Disability: How does the <strong>SOCIAL IDENTITY MODEL</strong> define accessibility?</li>
                    <li>Theoretical Models of Disability: How does the <strong>FUNCTIONAL SOLUTIONS MODEL</strong> define accessibility?</li>
                </ol>
            </div>
        </div>;

    return <div>
        <div style={{textAlign: 'center'}}>
            <h1>Exercise 9</h1>
            <Link to={`${process.env.PUBLIC_URL}/`}>Return Home</Link>
            <div style={{marginTop: '50px'}}>
                <img src={LogoImg} style={{width: "30%"}}/>
                {formExample}
            </div>
        </div>
    </div>;
};

export default Exercise7;
