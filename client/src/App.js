import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import ActionAreaCard from './components/ActionAreaCard';
import ProductCard from './components/ProductCard';
const App = () => {
    return(
        <>
        <PrimarySearchAppBar />
        {/* <ActionAreaCard /> */}
        <ProductCard />
        </>
    );
    // return (
    //     <div class = "login">
    //         <h1> Login</h1>
    //         <form>
    //         <label>
    //         Name:
    //         <input type="text" name="name" />
    //         </label>
    //         <label>
    //         Password:
    //         <input type="text" name="password" />
    //         </label>
    //         <input type="submit" value="Submit" />
    //                 </form>
    //                 <p class = "Para1">By creating an account, you agree to OneStopPrice's <a href = "Condition.html">Conditions of Use</a> and 
    //                     <a href = "Privacy.html">Privacy Notice</a>.
    //                 </p>
    //                 <p class = "Para2">New customer? <a href = "Signup.html">Signup</a></p>
    //             </div>
    // )
}
export default App