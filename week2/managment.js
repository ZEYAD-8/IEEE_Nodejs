

const createItem = (name, category, price, stock) => {
    let item = {
        "name": name,
        "category": category,
        "price": price,
        "stock": stock,
        updatestock(newStock) {
            this.stock = newStock;
        },
        applyDiscount(discount) {
            this.price = this.price - discount;
        }
    }
    return item;
}

const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    removeItem(name) {
        this.items = this.items.filter(i => i.name !== name);
    },
    getItem(name) {
        return this.items.find(i => i.name === name);
    },
    filterItems(predicate) {
        return this.items.filter(predicate);
    }
}



const item1 = createItem("item1", "category1", 100, 10);
const item2 = createItem("item2", "category2", 200, 20);
const item3 = createItem("item3", "category3", 300, 30);
const item4 = createItem("item4", "category4", 400, 40);
const item5 = createItem("item5", "category5", 500, 50);

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);
console.log(cart.items);

item1.updatestock(200);
console.log(cart.items);

// cart.items[0].applyDiscount(50);