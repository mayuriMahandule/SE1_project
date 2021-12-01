import {searchEbayProducts} from '../handlers/ebayHandler.js'
import {searchAmazonProducts} from '../handlers/amazonHandler.js'
import {searchBestBuyProducts} from '../handlers/bestBuyHandler.js'
//const {parse, stringify} = require('flatted/cjs');
import {parse, stringify}  from 'flatted'

const categoryToProductSearchKeyMap = {
    "electronics" : "modelName",
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
    console.log(`productMap ${JSON.stringify(productMap)}`)
    const finalResposeObjectArray = []
    for (var[key, value] of productMap.entries())
    {
        //update this logic
        console.log("key "+ key)
        console.log("value "+ value)
        finalResposeObjectArray.push({
            "productData" : value[0], 
            "ecommerceOptions" : value
        })   
    }
    return finalResposeObjectArray
}
export const getSearchProducts = async (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

    const reqestData = req.body;
    const productSearchPromiseList = []
    //productSearchPromiseList.push(searchEbayProducts(reqestData))
    productSearchPromiseList.push(searchAmazonProducts(reqestData))
    productSearchPromiseList.push(searchBestBuyProducts(reqestData))
    
    Promise.all(productSearchPromiseList).then((searchResults) => {
        console.log("Promises resolved")
        console.log("searchResults " + JSON.stringify(searchResults))
        var productsArray = []
        for (let index = 0; index < searchResults.length; index++) {
            console.log("searchResults[index] " + JSON.stringify(searchResults[index]))
            productsArray =  productsArray.concat(searchResults[index])   
        }
        var category = findCategory(searchResults)
        const productComparisonKey =  getProductComparisonKey(category)
        console.log("productsArray " , productsArray)
        let productMap = new Map()
        for(let i = 0 ; i < productsArray.length; i++)
        {
            var newKey = productsArray[i][productComparisonKey]
            if(productMap[productComparisonKey])
            {
                console.log("key in if " + productMap.get(productComparisonKey))
                productMap.get(newKey).push(productsArray[i])
            } else
            {
                console.log("productsArray[i].productComparisonKey ", JSON.stringify(productsArray[i][productComparisonKey]), productsArray[i])
                
                console.log("newKey " + newKey)
                productMap.set(newKey, [productsArray[i]])
                console.log("productMap " + productMap.size)
            }
        }
        const finalProductResponse = createProductResponse(productMap)
        console.log("finalProductResponse " , finalProductResponse)
        res.status(200).json(finalProductResponse);
    }).catch({
        
    })
    
    
    

//    res.send(
//        [
//             {
//                           "productData" : {
//                               "modelName" : "Lenovo yoga",
//                               "imageLink" : "https://i.ebayimg.com/thumbs/images/g/RrcAAOSw6D9hcF8C/s-l225.jpg",
//                               "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//                           },
//                           "ecommerceOptions" : [
//                           {
//                               "website" : "Amazon",
//                               "link": "https://www.ebay.com/itm/224656180982?epid=1281373761&hash=item344e8d46f6%3Ag%3AsdAAAOSwwUdf6c52&_trkparms=%2526rpp_cid%253D5f739d51cbf0358422a68a91",
//                               "price" : 76
//                           },
//                           {
//                               "website" : "ebay",
//                               "link": "https://www.ebay.com/itm/224656180982?epid=1281373761&hash=item344e8d46f6%3Ag%3AsdAAAOSwwUdf6c52&_trkparms=%2526rpp_cid%253D5f739d51cbf0358422a68a91",
//                               "price" : 76 
//                           },
//                           {
//                               "website" : "bestBuy",
//                               "link": "https://www.ebay.com/itm/224656180982?epid=1281373761&hash=item344e8d46f6%3Ag%3AsdAAAOSwwUdf6c52&_trkparms=%2526rpp_cid%253D5f739d51cbf0358422a68a91",
//                               "price" : 76 
//                           }]
//                       },
//                       {
//                           "productData" : {
//                               "modelName" : "Yoga 720",
//                               "imageLink" : "https://i.ebayimg.com/thumbs/images/g/18cAAOSw34RhSjvd/s-l225.jpg"                              ,
//                               "description": "960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//                           },
//                           "ecommerceOptions" : [
//                           {
//                               "website" : "Amazon",
//                               "link": "",
//                               "price" : 76
//                           },
//                           {
//                               "website" : "ebay",
//                               "link": "",
//                               "price" : 76 
//                           },
//                           {
//                               "website" : "bestBuy",
//                               "link": "",
//                               "price" : 76 
//                           }]
//                       },
//                       {
//                           "productData" : {
//                               "modelName" : "Yoga 830",
//                               "imageLink" : "https://i.ebayimg.com/thumbs/images/g/eoUAAOSw1C9hJO5d/s-l225.jpg"                              ,
//                               "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//                           },
//                           "ecommerceOptions" : [
//                           {
//                               "website" : "Amazon",
//                               "link": "",
//                               "price" : 76
//                           },
//                           {
//                               "website" : "ebay",
//                               "link": "",
//                               "price" : 76 
//                           },
//                           {
//                               "website" : "bestBuy",
//                               "link": "",
//                               "price" : 76 
//                           }]
//                       },
//                       {
//                         "productData" : {
//                             "modelName" : "Yoga 920",
//                             "imageLink" : "https://i.ebayimg.com/thumbs/images/g/eoUAAOSw1C9hJO5d/s-l225.jpg"                            ,
//                             "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//                         },
//                         "ecommerceOptions" : [
//                         {
//                             "website" : "Amazon",
//                             "link": "",
//                             "price" : 76
//                         },
//                         {
//                             "website" : "ebay",
//                             "link": "",
//                             "price" : 76 
//                         },
//                         {
//                             "website" : "bestBuy",
//                             "link": "",
//                             "price" : 76 
//                         }]
//                     }
//           ]
          
//     )

}

