const Customers = require('./Customers');
const Products = require('./Products');
const CustomerPricingRules = require('./CustomerPricingRules');

class Checkout {
    constructor(customerPricingRules) {
        this.customerPricingRules = customerPricingRules;
        this.shoppingCart = {};
        
    }
    add(product) {
        if(this.shoppingCart[product.id]) {
            this.shoppingCart[product.id] = this.shoppingCart[product.id] + 1;
        } else {
            this.shoppingCart[product.id] = 1;
        }
    }
    total() {
        const productIDs = Object.keys(this.shoppingCart);
        const totalPrice = productIDs.reduce((subTotal, productID) => {
            const qty = this.shoppingCart[productID];
            const pricingRule = this.customerPricingRules.findPricingRule(productID);
            if(pricingRule) {
                return subTotal + pricingRule.calPrice(qty);
            }  else {
                const product = Products.findProductByID(productID);
                return subTotal + product.price * qty;
            }
        }, 0);
        return totalPrice;
    }
}
module.exports = Checkout;
/*
const appleShopping = new Checkout(CustomerPricingRules.ApplePricingRules);
appleShopping.add(Products.Standout);
appleShopping.add(Products.Standout);
appleShopping.add(Products.Standout);
appleShopping.add(Products.Premium);
const appleTotal = appleShopping.total();
console.log(`appleShopping.total = ${appleTotal}`);

const unileverShopping = new Checkout(CustomerPricingRules.UnileverPricingRules);
unileverShopping.add(Products.Classic);
unileverShopping.add(Products.Classic);
unileverShopping.add(Products.Classic);
unileverShopping.add(Products.Premium);
const unileverTotal = unileverShopping.total();
console.log(`unileverTotal = ${unileverTotal}`);

const defaultShopping = new Checkout(CustomerPricingRules.DefaultPricingRules);
defaultShopping.add(Products.Classic);
defaultShopping.add(Products.Standout);
defaultShopping.add(Products.Premium);
const defaultTotal = defaultShopping.total();
console.log(`defaultTotal = ${defaultTotal}`);

const nikeShopping = new Checkout(CustomerPricingRules.NikePricingRules);
nikeShopping.add(Products.Premium);
nikeShopping.add(Products.Premium);
nikeShopping.add(Products.Premium);
nikeShopping.add(Products.Premium);
const nikeTotal = nikeShopping.total();
console.log(`nikeTotal = ${nikeTotal}`);*/

//const fordShopping = new Checkout(CustomerPricingRules.FordPricingRules);
/*fordShopping.add(Products.Classic);
fordShopping.add(Products.Classic);
fordShopping.add(Products.Classic);
fordShopping.add(Products.Classic);
fordShopping.add(Products.Classic);
fordShopping.add(Products.Classic);
fordShopping.add(Products.Standout);*/
/*
fordShopping.add(Products.Premium);
fordShopping.add(Products.Premium);
fordShopping.add(Products.Premium);
const fordTotal = fordShopping.total();
console.log(`fordTotal = ${fordTotal}`);*/