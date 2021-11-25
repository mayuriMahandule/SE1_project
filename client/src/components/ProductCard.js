import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ActionAreaCard from './ActionAreaCard';
import axios from 'axios';

class ProductCard extends React.Component {

    GET_PRODUCTS_DATA_API = 'http://localhost:5000/products';

    constructor(props){
        super(props);
        this.state = {
            productData: {},
        };
        this.renderActionCards = this.renderActionCards.bind(this);
    }

    componentDidMount(){
        console.log('in here Product Card');
         /**
     * Request to get the data from Backend
     */
    axios.get(this.GET_PRODUCTS_DATA_API)
    .then(response => { 
        console.log(response);
        this.setState({
            productData: response.data
        });
        console.log(this.state);
    })
    .catch(error => {
        console.error(error);
    })
    }

    renderActionCards(){

        let products = [];
    for (let index = 0; index < this.state.productData.length; index++) {
      products[index] = this.state.productData[index];
    }

        /**
         * render dynamic data
         */
        return products.map((product, index) => {
            return (
                <Grid item xs={6}>
            <ActionAreaCard 
            productImage={product.productData.imageLink} 
            description={product.productData.description}
            modelName={product.productData.modelName}
            ecommerceOptions={product.ecommerceOptions} 
            />
        </Grid>
            );
        });
    }
    
    render(){
        return(
            <>
            <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {this.renderActionCards()}
    
      </Grid>
    </Box>
            </>
        );
    }
}

export default ProductCard;