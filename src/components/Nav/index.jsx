import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return <nav>
        <h2>Homework 1 (Due: 06/12):</h2>
        <ul>
            <li>
                <Link to={`${process.env.PUBLIC_URL}/ex1`}>Exercise 1</Link>
            </li>
            <li>
                <Link to={`${process.env.PUBLIC_URL}/ex2`}>Exercise 2</Link>
            </li>
        </ul>
        <h2>Homework 2 (Due: 06/19):</h2>
        <ul>
            <li>
                <Link to={`${process.env.PUBLIC_URL}/ex3`}>Exercise 3</Link>
            </li>
            <li>
                <Link to={`${process.env.PUBLIC_URL}/ex4`}>Exercise 4</Link>
            </li>
        </ul>

    </nav>;
};

export default Nav;
