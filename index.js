
// Declare customerName in global scope
window.customerName = 'bob';

// Function to modify customerName to uppercase
function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

// Declare bestCustomer in global scope
window.bestCustomer = undefined;

// Function to set bestCustomer
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(name) {
  window.bestCustomer = name;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'initial value';

// Function that tries to change leastFavoriteCustomer 
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value';
}
