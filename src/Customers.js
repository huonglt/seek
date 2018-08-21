class Customer {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const Default = new Customer(1, 'Default');
const Apple = new Customer(2, 'Apple');
const Unilever = new Customer(3, 'Unilever');
const Nike = new Customer(4, 'Nike');
const Ford = new Customer(5, 'Ford');

module.exports = {
    Default,
    Apple,
    Unilever,
    Nike,
    Ford
}