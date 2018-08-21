const Products = require('./Products');

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