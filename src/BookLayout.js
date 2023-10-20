import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function BookLayout() {
    return(
        <div>
            <h2>list of books</h2>
        <Link to='/books/1'>Book 1</Link>
        <br /> <br />
        <Link to='/books/2'>Book 2</Link>
        <br /> <br />
        <Link to='/books/3'>Book 3</Link>
        <br /> <br />
        <Link to='/books/new'>New Book</Link>
        <br /> <br />
         <Outlet context={{hello:"World"}} /> 
        </div>
    )
}


export default BookLayout;