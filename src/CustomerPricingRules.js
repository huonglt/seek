const Customers = require('./Customers');
const Products = require('./Products');
const { DiscountRule, XForYRule } = require('./PricingRules');

/**
 * This class represent the pricing rules applied for a customer
 */
class CustomerPricingRules {
    /**
     * Constructor
     * @param {Customer} customer - The customer
     */
    constructor(customer) {
        this.customer = customer;
        this.pricingRules = [];
    }
    /**
     * Add a pricing rule to the customer
     * @param {PricingRule} rule - The pricing rule being add to the customer
     */
    addPricingRule(rule) {
        this.pricingRules.push(rule);
    }
    /**
     * Utility method to find pricing rule based on productID
     * @param {string} productID - the id of the product
     * @returns {PricingRule|null} - The pricing rule if found, or null
     */
    findPricingRule(productID) {
        return this.pricingRules.find(rule => rule.product.id === productID);
    }
}

/**
 * Create pricing rules for Apple
 * Gets a discount on Standout Ads where the price drops to $299.99 per ad
 */
const ApplePricingRules = new CustomerPricingRules(Customers.Apple);
ApplePricingRules.addPricingRule(new DiscountRule(Products.Standout, 1, 299.99));

/**
 * Create pricing rules for Unilever
 * Gets a for 3 for 2 deal on Classic Ads
 */
const UnileverPricingRules = new CustomerPricingRules(Customers.Unilever);
UnileverPricingRules.addPricingRule(new XForYRule(Products.Classic, 3, 2));

/**
 * Create pricing rules for Nike
 * Gets a discount on Premium Ads when 4 or more are purchased. The price drops to $379.99 per ad
 */
const NikePricingRules = new CustomerPricingRules(Customers.Nike);
NikePricingRules.addPricingRule(new DiscountRule(Products.Premium, '>=4', 379.99));

/**
 * Create pricing rules for Ford
 * Gets a 5 for 4 deal on Classic Ads
 * Gets a discount on Standout Ads where the price drops to $309.99 per ad
 * Gets a discount on Premium Ads when 3 or more are purchased. The price drops to $389.99 per ad
 */
const FordPricingRules = new CustomerPricingRules(Customers.Ford);
FordPricingRules.addPricingRule(new XForYRule(Products.Classic, 5, 4));
FordPricingRules.addPricingRule(new DiscountRule(Products.Standout, 1, 309.99));
FordPricingRules.addPricingRule(new DiscountRule(Products.Premium, '>=3', 389.99));

/**
 * Create pricing rules for Default customer - non privileged customer
 * No discount or x for y deal offered
 */
const DefaultPricingRules = new CustomerPricingRules(Customers.Default);

/**
 * Utility method to find pricing rules based on customer name
 * @param {string} customerName - The name of customer
 * @returns {CustomerPricingRules} - The pricing rules found. If no matches found, the pricing rules for Default customer applied
 */
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

/**
 * The module exported with pricing rules for all customers, and the utility method findCustomerPricingRules
 */
module.exports = {
    ApplePricingRules,
    UnileverPricingRules,
    NikePricingRules,
    DefaultPricingRules,
    FordPricingRules,
    findCustomerPricingRules
}