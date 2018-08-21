class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
};

const Classic = new Product('classic', 'Classic Ad', 269.99);
const Standout = new Product('standout', 'Standout Ad', 322.99);
const Premium = new Product('premium', 'Premium Ad', 394.99);
const findProductByID = (productID) => {
    switch(productID.toLowerCase()) {
        case Classic.id:
            return Classic;
        case Standout.id:
            return Standout;
        case Premium.id:
            return Premium;        
    }

    return null;
};
module.exports = {
    Classic,
    Standout,
    Premium,
    findProductByID
};