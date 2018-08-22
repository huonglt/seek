/**
 * This class to represent a Product that SEEK offers to recruiters
 * Each product has its id, name, and price
 */
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
};

/**
 * Classic Ad - Most basic level of advertisement
 */
const Classic = new Product('classic', 'Classic Ad', 269.99);

/**
 * Standout Ad - Allow advertisers to use a company logo and use a longer presentation text
 */
const Standout = new Product('standout', 'Standout Ad', 322.99);

/**
 * Premium Ad - Same benefits as Standout Ad, but also puts the add at the top of the results, allowing higehr visibility
 */
const Premium = new Product('premium', 'Premium Ad', 394.99);

/**
 * Utility method to find product based on productID
 * @param {string} productID - The id of the product
 * @returns {Object} The product that matches, null if not
 */
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

/**
 * The module exported containing all currently offered products and the findProductID utility method
 */
module.exports = {
    Classic,
    Standout,
    Premium,
    findProductByID
};