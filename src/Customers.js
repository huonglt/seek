/**
 * This class represents a customer of SEEK
 * Each customer has an id, and a name
 */
class Customer {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

/**
 * Apple - A privileged customer
 */
const Apple = new Customer(2, 'Apple');

/**
 * Unilever - A privileged customer
 */
const Unilever = new Customer(3, 'Unilever');

/**
 * Nike - A privileged customer
 */
const Nike = new Customer(4, 'Nike');

/**
 * Ford - A privileged customer
 */
const Ford = new Customer(5, 'Ford');

/**
 * The Default customer, non privileged customer
 */
const Default = new Customer(1, 'Default');

/**
 * Module exported containing all customers of SEEK
 */
module.exports = {
    Default,
    Apple,
    Unilever,
    Nike,
    Ford
}