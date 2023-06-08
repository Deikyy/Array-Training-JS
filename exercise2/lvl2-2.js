// In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffe', 'Tea', 'Honey'];
    shoppingCart.unshift('Honey');
    shoppingCart.push('Sugar');

if (shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}

if (shoppingCart.includes('Tea')) {
    shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea' ;
}








