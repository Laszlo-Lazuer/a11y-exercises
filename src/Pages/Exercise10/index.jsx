import React, {Fragment, useState, useEffect} from "react";
import './styles.scss';
import {Link} from "react-router-dom";
import LogoImg from './img/img_logo.png'

const timerSeconds = 30;
const Exercise10 = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [randVal, setRandVal] = useState('');
    const [showControls, setShowControls] = useState(true);

    // Timer
    const [seconds, setSeconds] = useState(timerSeconds);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(timerSeconds);
        setIsActive(false);
    }

    // Timer

    const questionSet = [
        'Theoretical Models of Disability: How does the MEDICAL MODEL define accessibility?',
        'Theoretical Models of Disability: How does the ECONOMIC MODEL define accessibility?',
        'Theoretical Models of Disability: How does the SOCIAL MODEL define accessibility?',
        'Theoretical Models of Disability: How does the SOCIAL IDENTITY MODEL define accessibility?',
        'Theoretical Models of Disability: How does the FUNCTIONAL SOLUTIONS MODEL define accessibility?',
        'What is the function of the AFFECTIVE Network of the brain?',
        'Seizures with no apparent trigger and occur two or more times are WHAT kind of seizure?',
        'Seizures caused by brain disorders such as structural abnormalities, stoke, or tumors are called...',
        'Provoked seizures caused by stroke, drugs, or head injury are called...',
        'In order, what are the three classifications when determining the magnitude and type of a speech disorder?',
        'Impaired communication skills, Impaired Social Skills, and Restrictive or repetitive Behavior or Interests are symptoms of...',
        'Define "APHASIA"',
        'Define "DYSARTHRIA"',
        'A speech disorder in which a person has trouble saying what they want to correctly and consistently is called...',
        'Reading and Math Disabilities can be a result of... (mark all that apply)',
        'A learning disability that affects writing abilities is called...',
        'The difficulty in learning or comprehending arithmetic, such as difficulty in understanding numbers, learning how to manipulate numbers, performing mathematical calculations, and learning facts in mathematics is called...',
        'Language and Literacy: money, time and numbers, self-direction -- These are examples of...',
        'Activities of daily learning/personal care, occupational skills, healthcare, travel/transportation, schedules/routines, safety, use of money -- The are examples of...',
        'Interpersonal Skills, Responsibility, Self-esteem, gullibility, naivete, problem-solving, the ability to follow rules/obey laws, and avoiding being victimized are examples of...'
    ]

    let sampleObj = Object.assign({}, questionSet);

    const randomProperty = function (obj) {
        let keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };

    const ChangePColor = () => {
        const firstName = document.getElementById('p-color-set').value;
        const lastName = document.getElementById('color-set').value;
        setFName((firstName !== "") ? firstName : fName);
        setLName((lastName !== "") ? lastName : lName);
        return;
    };

    const formExample = null;

    useEffect(() => {
        let interval = null;
        if (randVal === '') {
            setRandVal(randomProperty(sampleObj));
        }

        // if (randVal !=== '' && randVal.indexOf(':')) {
        //
        // }

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);

            if (seconds === 0) {
                reset();
                setRandVal(randomProperty(sampleObj));
                setIsActive(true);
            }
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const question = (randVal.indexOf(':') > -1 ) ? randVal.split(':'): randVal;



    return <div>
        <div style={{textAlign: 'center'}}>
            <h1>Exercise 9</h1>
            <Link to={`${process.env.PUBLIC_URL}/`}>Return Home</Link>
            <div style={{marginTop: '50px'}}>
                <img src={LogoImg} alt={'squirrely squirrels incorportated'} style={{width: "30%"}}/>
                {formExample}
                <br/>
                <h3 style={{color: '#4d4d4d'}}>Question</h3>
                <br/>

                {/*{(question.isArray())} ?*/}

                {/*<h4>{randVal.split(':')[0]}</h4>*/}
                {/*<h4>{randVal.split(':')[1]}</h4>*/}
                <h4>{question}</h4>
            {/*:*/}
            {/*<p>not array</p>*/}
            {/*}*/}
                <br/>
                {seconds}s
                <br/>
                <br/>
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}
                        onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={reset}>
                    Reset
                </button>
                {/*<button onClick={() => setRandVal(randomProperty(sampleObj))}>New Question</button>*/}
            </div>
        </div>
    </div>;
};

export default Exercise10;
