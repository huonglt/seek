const http = require('http');
const url = require('url');
const HTTP_PORT = 8081;
const Checkout = require('./Checkout');
const CustomerPricingRules = require('./CustomerPricingRules');
const Products = require('./Products');
const { log } = require('./logger');

/**
 * Handle a checkout
 * @param {Object} An object with customerNamne, and list of productIDs ordereed
 * @return {number} The total price
 */
const processCheckout = ({customerName, productIDs}) => {
    log(`---Processing checkout for ${customerName} customer---`);
    const customerPricingRules = CustomerPricingRules.findCustomerPricingRules(customerName);
    const checkout = new Checkout(customerPricingRules);
    const products = productIDs.reduce((accumulator, productID) => {
        const product = Products.findProductByID(productID);
        if(product) {
            accumulator.push(product);
        }
        return accumulator;
    }, []);
    products.forEach(product => {
        log(`product added to checkout: ${JSON.stringify(product)}`);
        checkout.add(product);
    });
    const total = checkout.total();
    log(`Total for ${customerName} = ${total}`);
    return total;
};

/**
 * Write response data as json object
 */
const writeResponseData = (res, data) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();
};

/**
 * Create and start a HTTP server running on HTTP_PORT
 * The server will handle GET requests for checkout
 * It sends back response as JSON data
 * Eg of requests:
 * "http://localhost:8081/checkout?customerName=Default&item=classic&item=standout&item=premium"
 * "http://localhost:8081/checkout?customer=Apple&item=standout&item=standout&item=standout&item=premium"
 */
http.createServer((req, res) => {
    try {
        const urlParts = url.parse(req.url, true);
        const { pathname, query } = urlParts;
        if(pathname === '/checkout' && req.method === 'GET') {
            const data = { customerName: query.customer, productIDs: query.item };
            const total = processCheckout(data);
            writeResponseData(res, {total});
        }
    } catch(err) {
        log(`err = ${JSON.stringify(err)}`);
        writeResponseData(res, err);
    }
    
}).listen(HTTP_PORT);
log(`checkout server is running at ${HTTP_PORT}`);