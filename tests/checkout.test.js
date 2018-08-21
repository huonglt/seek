const Checkout = require('../src/Checkout');
const CustomerPricingRules = require('../src/CustomerPricingRules');
const Products = require('../src/Products');

test('Checkout for Default customer ordering classic, standout, premium ', () => {
    const checkout = new Checkout(CustomerPricingRules.DefaultPricingRules);
    checkout.add(Products.Classic);
    checkout.add(Products.Standout);
    checkout.add(Products.Premium);
    const total = checkout.total();
    expect(total).toBe(987.97);
});

test('Checkout for Unilever customer ordering classic, classic, classic, premium', () => {
    const checkout = new Checkout(CustomerPricingRules.UnileverPricingRules);
    checkout.add(Products.Classic);
    checkout.add(Products.Classic);
    checkout.add(Products.Classic);
    checkout.add(Products.Premium);
    const total = checkout.total();
    expect(total).toBe(934.97);
});

test('Checkout for Apple customer ordering standout, standout, standout, premium', () => {
    const checkout = new Checkout(CustomerPricingRules.ApplePricingRules);
    checkout.add(Products.Standout);
    checkout.add(Products.Standout);
    checkout.add(Products.Standout);
    checkout.add(Products.Premium);
    const total = checkout.total();
    expect(total).toBe(1294.96);
});

test('Checkout for Nike customer ordering premium, premium, premium, premium', () => {
    const checkout = new Checkout(CustomerPricingRules.NikePricingRules);
    checkout.add(Products.Premium);
    checkout.add(Products.Premium);
    checkout.add(Products.Premium);
    checkout.add(Products.Premium);
    const total = checkout.total();
    expect(total).toBe(1519.96);
});