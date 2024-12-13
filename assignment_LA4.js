let a = ['Elaine', 'Althea', 'Angelo', 'Lito', 'Engelbert'];

function x() {
    let z = prompt("Enter name");
    a.push(z);  // Just pushing names to queue
    console.log("Added: " + z);  // No explanation, just adding customer
}

function y() {
    let n = prompt("Give customer number to service");
    let num = parseInt(n) - 1;  // Dumb subtraction for index
    if (num >= 0 && num < a.length) {
        console.log("Served: " + a[num]); 
        a.splice(num, 1);  // Removing, bad variable names and unclear purpose
        u();  // Just calling function 'u', who knows what it does
    } else {
        console.log("Error");
    }
}

function u() {
    console.log("Queue: ");  // Queue display, not clear why 'u' is the function name cuz funny maybe
    for (let i = 0; i < a.length; i++) {
        console.log(i + 1 + ". " + a[i]);  // Displays queue with a strange format
    }
}

x();
x(); // Another customer
x(); // Another one, because why not
x(); // Yet another, more confusion
x();

y(); // Serve customer, but we don't really know what's happening
y(); // Serve again, no clear structure
