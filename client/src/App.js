import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import ActionAreaCard from './components/ActionAreaCard';
import ProductCard from './components/ProductCard';
import LoginComponent from './components/userLogin/userLogin'
import Homepage from './components/homepage';
class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            inputString: "",
        };
        this.changeInputString = this.changeInputString.bind(this);
    }

    changeInputString(inputString){
        console.log("in changeInputString", inputString)
        this.setState({
            inputString: inputString
        }); // can pass callback function to setState

        console.log("in changeInputString ", this.state.inputString)
    }

    render() {

        return(
            <>
            {/* <LoginComponent mode="login"/> */}
            <PrimarySearchAppBar onSearch={this.changeInputString}/>
            {/* <ProductCard inputText={this.state.inputString}/> */}
            {/* <ActionAreaCard /> */}
            {/* <Homepage /> */}
            <div> {this.state.inputString == "" ? <Homepage /> : <ProductCard inputText={this.state.inputString}/>}</div>
            </>
        );
    }
}

export default App