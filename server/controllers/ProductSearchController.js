import {searchEbayProducts} from '../handlers/ebayHandler.js'
import {searchAmazonProducts} from '../handlers/amazonHandler.js'
import {searchBestBuyProducts} from '../handlers/bestBuyHandler.js'
//const {parse, stringify} = require('flatted/cjs');
import {parse, stringify}  from 'flatted'

const categoryToProductSearchKeyMap = {
    "electronics" : "model",
    "books": "name"
}

function findCategory(searchResults) {
    //TODO: check in product results for category
    return "electronics"
}

function getProductComparisonKey(category){
    return categoryToProductSearchKeyMap[category]
}

function createProductResponse(productMap)
{
    console.log()
}
export const getSearchProducts = async (req, res) => {
    const reqestData = req.body;
    const productSearchPromiseList = []
    productSearchPromiseList.push(searchEbayProducts(reqestData))
    productSearchPromiseList.push(searchAmazonProducts(reqestData))
    productSearchPromiseList.push(searchBestBuyProducts(reqestData))
    
    Promise.all(productSearchPromiseList).then((searchResults) => {
        console.log("Promises resolved")
        console.log("searchResults " + searchResults)
        category = findCategory(searchResults)
        productComparisonKey =  getProductComparisonKey(searchResults[i])
        productMap = {}
        for(let i ; i++ ; i< searchResults.length )
        {
            if(productMap.get(productComparisonKey))
            {
                productMap.get(searchResults[i][productComparisonKey]).push(searchResults[i])
            } else
            {
                productMap.put(searchResults[i][productComparisonKey], searchResults[i])
            }
        }
        const finalProductResponse = createProductResponse(productMap)
    }).catch({
        
    })
    
    console.log("ebayProducts " + ebayProductsJson)

    res.status(200).json(finalProductResponse);
}