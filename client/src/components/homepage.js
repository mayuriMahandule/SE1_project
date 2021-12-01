import * as React from 'react';
import {Button , Carousel}from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ActionAreaCard from './ActionAreaCard';
import axios from 'axios';

class Homepage extends React.Component {
    render(){
        return (
        <div>
           <font color="black" > Recommanded Products </font> 
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100" width="300px" height="600px"
                    src="https://i.ebayimg.com/thumbs/images/g/mMMAAOSwIo1hN8qD/s-l225.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" width="300px" height="600px"
                    src="https://i.ebayimg.com/thumbs/images/g/z2wAAOSwZDFcyeM2/s-l225.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" width="300px" height="600px"
                    src="https://i.ebayimg.com/thumbs/images/g/kJAAAOSwc-tY5NFx/s-l225.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
        );
    }
  }

export default Homepage;