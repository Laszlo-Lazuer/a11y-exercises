import React, { Fragment, useState } from "react";
import './styles.scss';
import {Link} from "react-router-dom";

const Exercise1 = () => {
    const [hcolor, setHcolor] = useState('#efefef');
    const Click = () => {
        return(
        alert('Continue!'));
    };

    const ChangeColor = () => {
        const colorFromInput  = document.getElementById('color-set').value;
        return (setHcolor((colorFromInput !== "") ? colorFromInput:hcolor));
    };

    const ColorInput = <Fragment>
        <input id={'color-set'} />
        <button className={'change-color-btn'} onClick={() => ChangeColor()}>Set Color</button>
    </Fragment>;

    const samplePage = <Fragment>
        <div className="w3-content" style={{maxWidth:"1100px"}}>
            <div className="w3-row w3-padding-64" id="menu">
                <div className="w3-col l6 w3-padding-large">
                    <h2 className="w3-center">Our Menu</h2><br />
                    <h3 style={{color: hcolor}}>Bread Basket</h3>
                    <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br />

                    <h3 style={{color: hcolor}}>Honey Almond Granola with Fruits</h3>
                    <p className="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />

                    <h3 style={{color: hcolor}}>Belgian Waffle</h3>
                    <p className="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br />

                    <h3 style={{color: hcolor}}>Scrambled eggs</h3>
                    <p className="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />

                    <h3 style={{color: hcolor}}>Blueberry Pancakes</h3>
                    <p className="w3-text-grey">With syrup, butter and lots of berries 8.50</p>
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
        {ColorInput}
        {samplePage}
    </Fragment>;
};

export default Exercise1;
