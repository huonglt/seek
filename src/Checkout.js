const Products = require('./Products');

/**
 * This class represent the Checkout interface
 * The checkout requires a customer pricing rules
 */
class Checkout {
    /**
     * Constructor
     * @param {customerPricingRules} customerPricingRules - The customer pricing rule this Checkout applies to
     */
    constructor(customerPricingRules) {
        this.customerPricingRules = customerPricingRules;
        this.shoppingCart = {};
        
    }

    /**
     * Add a product to the list of ordered items
     * @param {Product} product - The product ordered
     */
    add(product) {
        if(this.shoppingCart[product.id]) {
            this.shoppingCart[product.id] = this.shoppingCart[product.id] + 1;
        } else {
            this.shoppingCart[product.id] = 1;
        }
    }
    
    /**
     * Calculate total price for all the products ordered
     * When checkout, it will applies the customer pricing rules if found, otherwise it uses the product price
     */
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