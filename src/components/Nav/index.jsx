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
        <h2>Homework 3 (Due: 06/26):</h2>
        <ul>
            <li>
                <Link to={`${process.env.PUBLIC_URL}/ex5`}>Exercise 5</Link>
            </li>
            <li>
                <Link to={`${process.env.PUBLIC_URL}/ex6`}>Exercise 6</Link>
            </li>
        </ul>
        <h2>Homework 4 (Due: 07/03):</h2>
        <ul>
            <li>
                <Link to={`${process.env.PUBLIC_URL}/ex7`}>Exercise 7</Link>
            </li>
        </ul>
    </nav>;
};

export default Nav;
