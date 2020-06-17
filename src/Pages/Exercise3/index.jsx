import React, { Fragment, useState } from "react";
import './styles.scss';
import {Link} from "react-router-dom";

const Exercise3 = () => {
    const [hcolor, setHcolor] = useState('#efefef');
    const [pcolor, setPcolor] = useState('#f2f2f2');
    const [showControls, setShowControls] = useState(false);
    const Click = () => {
        return(
        alert('Continue!'));
    };

    const ChangeHColor = () => {
        const colorFromInput  = document.getElementById('color-set').value;
        return (setHcolor((colorFromInput !== "") ? colorFromInput:hcolor));
    };

    const ChangePColor = () => {
        const colorFromInput  = document.getElementById('p-color-set').value;
        return (setPcolor((colorFromInput !== "") ? colorFromInput:hcolor));
    };

    const ColorInput = (showControls) ? <Fragment>
        <label htmlFor="color-set">Update H3 Color</label>
        <input placeholder={'#ffffff'} id={'color-set'} name={'change-color'}/>
        <button className={'change-color-btn'} onClick={() => ChangeHColor()}>Set Color</button>
        <br />
        <label htmlFor="p-color-set">Update text Color</label>
        <input placeholder={'#ffffff'} id={'p-color-set'} name={'p-change-color'}/>
        <button className={'change-color-btn'} onClick={() => ChangePColor()}>Set Color</button>
        <hr />
    </Fragment>: null;

    const samplePage = <Fragment>
        <div className="w3-content" style={{maxWidth:"1100px"}}>
            <div className="w3-row w3-padding-64" id="menu">
                <div className="w3-col l6 w3-padding-large">
                    <h2 className="w3-center">Our Menu</h2><br />
                    <p className="w3-text-greys" style={{color: pcolor}}>Assortment of fresh baked fruit breads and muffins 5.50</p><br />

                    <h3 style={{color: hcolor}}>Honey Almond Granola with Fruits</h3>
                    <p className="w3-text-greys" style={{color: pcolor}}>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />

                    <h3 style={{color: hcolor}}>Belgian Waffle</h3>
                    <p className="w3-text-greys" style={{color: pcolor}}>Vanilla flavored batter with malted flour 7.50</p><br />

                    <h3 style={{color: hcolor}}>Scrambled eggs</h3>
                    <p className="w3-text-greys" style={{color: pcolor}}>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />

                    <h3 style={{color: hcolor}}>Blueberry Pancakes</h3>
                    <p className="w3-text-greys" style={{color: pcolor}}>With syrup, butter and lots of berries 8.50</p>
                </div>

                <div className="w3-col l6 w3-padding-large">
                    <button onClick={() => Click()}>Order</button>
                </div>
            </div>
        </div>
    </Fragment>;



    return <Fragment>
        <div style={{textAlign: 'center'}}>
            <h1>Exercise 3</h1>
            <Link to={`${process.env.PUBLIC_URL}/`}>Return Home</Link>
        </div>

        <div className={'control-wrapper'}>
            <button style={{display:'block'}} className={'change-color-btn'} onClick={() => setShowControls(!showControls)}>{(!showControls) ? 'Show modifiers':'Hide modifiers'}</button>
            {ColorInput}
        </div>
        {samplePage}
    </Fragment>;
};

export default Exercise3;
