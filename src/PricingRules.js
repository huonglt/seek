class DiscountRule {
    constructor(product, qtyRule, pricePerItem) {
        this.product = product;
        this.qtyRule = qtyRule;
        this.pricePerItem = pricePerItem;
    };
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

class XForYRule {
    constructor(product, xQty, yQty) {
        this.product = product;
        this.xQty = xQty;
        this.yQty = yQty;
    }
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
module.exports = {
    DiscountRule,
    XForYRule
}