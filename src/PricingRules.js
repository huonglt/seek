/**
 * This class to represent the Discount Rule Seek offered to its recruiters
 * The DiscountRule applies to a product, the quanity ordered to be eligible for the discount, and the discounted price for each item
 */
class DiscountRule {
    /**
     * @param {Product} product The product in the list of products Seek offering
     * @param {string|number} qtyRule The quantity ordered to be eligible for the discount. It could be a string like '>=3', or 1 if no condition
     * @param {number} pricePerItem The discounted price
     */
    constructor(product, qtyRule, pricePerItem) {
        this.product = product;
        this.qtyRule = qtyRule;
        this.pricePerItem = pricePerItem;
    };

    /**
     * Calculate the price given the qty ordered using this discount rule
     * @param {number} qty The quantity ordered of the product
     * @returns {number} the price
     */
    calPrice(qty) {
        // if rule is a string, it is a conditional expression. Need to execute the expression
        if(typeof(this.qtyRule) === 'string' && this.qtyRule.length) {
            const ruleOK = eval(qty + this.qtyRule);
            if(ruleOK) {
                return qty * this.pricePerItem;
            }
        } else if(typeof(this.qtyRule) === 'number') {
            if(qty >= this.qtyRule) {
                return qty * this.pricePerItem;
            }
        }
        return qty * this.product.price;
    }
}

/**
 * This class to represent the buy 3 for 2 deals etc
 * The XForYRule applies to a product, the quantity orderd, and the quantity used to calculate the price
 */
class XForYRule {
    /**
     * Constructor
     * @param {Product} product - The product in the list of products Seek offering
     * @param {number} xQty - quantity of the product ordered to be eligible for the deal
     * @param {number} yQty - quantity of the product to calculate price
     */
    constructor(product, xQty, yQty) {
        this.product = product;
        this.xQty = xQty;
        this.yQty = yQty;
    }

    /**
     * Calculate the price given the qty ordered for this product
     * @param {number} qty - The quantity of the product ordered
     * @returns {number} price - The price
     */
    calPrice(qty) {
        let price = 0;
        const quotient = Math.floor(qty / this.xQty);
        const remainder = qty - quotient * this.xQty;
        if(quotient > 0) {
            price = quotient * this.yQty * this.product.price;
        }
        price = price + remainder * this.product.price;
        return price;
    }
}

/**
 * The module export containing DiscountRule and XForYRule pricing rule
 */
module.exports = {
    DiscountRule,
    XForYRule
}