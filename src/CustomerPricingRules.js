const Customers = require('./Customers');
const Products = require('./Products');
const { DiscountRule, XForYRule } = require('./PricingRules');

class CustomerPricingRules {
    constructor(customer) {
        this.customer = customer;
        this.pricingRules = [];
    }
    addPricingRule(rule) {
        this.pricingRules.push(rule);
    }
    findPricingRule(productID) {
        return this.pricingRules.find(rule => rule.product.id === productID);
    }
}

const ApplePricingRules = new CustomerPricingRules(Customers.Apple);
ApplePricingRules.addPricingRule(new DiscountRule(Products.Standout, 1, 299.99));

const UnileverPricingRules = new CustomerPricingRules(Customers.Unilever);
UnileverPricingRules.addPricingRule(new XForYRule(Products.Classic, 3, 2));

const DefaultPricingRules = new CustomerPricingRules(Customers.Default);

const NikePricingRules = new CustomerPricingRules(Customers.Nike);
NikePricingRules.addPricingRule(new DiscountRule(Products.Premium, '>=4', 379.99));

const FordPricingRules = new CustomerPricingRules(Customers.Ford);
FordPricingRules.addPricingRule(new XForYRule(Products.Classic, 5, 4));
FordPricingRules.addPricingRule(new DiscountRule(Products.Standout, 1, 309.99));
FordPricingRules.addPricingRule(new DiscountRule(Products.Premium, '>=3', 389.99));

const findCustomerPricingRules = (customerName) => {
    switch(customerName) {
        case Customers.Nike.name:
            return NikePricingRules;
        case Customers.Apple.name:
            return ApplePricingRules;
        case Customers.Ford.name:
            return FordPricingRules;
        case Customers.Unilever.name:
            return UnileverPricingRules;            
    }
    return DefaultPricingRules;
}

module.exports = {
    ApplePricingRules,
    UnileverPricingRules,
    NikePricingRules,
    DefaultPricingRules,
    FordPricingRules,
    findCustomerPricingRules
}