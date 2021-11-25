import http from 'http'
import axios from 'axios'
import {parse, stringify}  from 'flatted'

const EBAY_PRODUCT_SEARCH_URL = 'http://localhost:8400/search/iphone'

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  
export const searchEbayProducts = async(searchString) => {
  /*  const options = {
        hostname: 'localhost',
        port: 8400,
        path: `/search/${searchString}`,
        method: 'GET'
      }
    const req = http.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)
      
        res.on('data', d => {
          process.stdout.write(d)
          //return d
        })
        
    })
      
      req.on('error', error => {
        console.error(error)
      })
      
      req.end()
      */

      try {
          const response = await axios.get('http://localhost:8400/search/iphone')
          const jsonStringResponse = JSON.stringify(response, getCircularReplacer());
        //console.log(jsonStringResponse);
        //response = JSON.parse(jsonStringResponse)
          console.log(jsonStringResponse)
          const ebayProductsJson = JSON.parse(jsonStringResponse)["data"]["products"]
          return ebayProductsJson
      } catch (error) {
          console.log(error.response);
      }

}