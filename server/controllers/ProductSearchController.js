import {searchEbayProducts} from '../handlers/ebayHandler.js'
import {searchAmazonProducts} from '../handlers/amazonHandler.js'
import {searchBestBuyProducts} from '../handlers/bestBuyHandler.js'
//const {parse, stringify} = require('flatted/cjs');
import {parse, stringify}  from 'flatted'
export const getSearchProducts = async (req, res) => {
    const reqestData = req.body;
    const productSearchPromiseList = []
    productSearchPromiseList.push(searchEbayProducts(reqestData))
    productSearchPromiseList.push(searchAmazonProducts(reqestData))
    productSearchPromiseList.push(searchBestBuyProducts(reqestData))
    
    Promise.all(productSearchPromiseList).then((searchResults) => {

    }).catch({

    })
    const ebayProductsJson = JSON.parse(ebayProducts)["data"]["products"]
    console.log("ebayProducts" + ebayProductsJson)

    res.status(200).json(ebayProductsJson);
}