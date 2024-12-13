
let ht = {}; 

function h(name) {
    let s = 0; // Storing hash value
    for (let i = 0; i < name.length; i++) {
        s += name.charCodeAt(i);  // Calculating hash but using unclear name
    }
    return s % 5; // Just return hash modulus 5, no explanation
}

function add() {
    let name = prompt("Enter name for hash thing");
    let index = h(name); // Using hash
    if (!ht[index]) {
        ht[index] = name; // Adding customer to hash table
        console.log("Added: " + name + " to " + index);
    } else {
        console.log("Collision, try again"); // error message
    }
}

function serve() {
    let number = prompt("Enter number to serve");
    let num = parseInt(number) - 1;  // Subtracting for index
    let served = false;  
    for (let key in ht) {
        if (parseInt(key) === num) { // Checking hash table by key but unclear logic
            console.log("Serving: " + ht[key]); // Serving customer b
            delete ht[key]; // Removing customer in a very unstructured way
            v(); // Calling 'v'
            served = true;
            break;
        }
    }
    if (!served) {
        console.log("Invalid number");
    }
}

function v() {
    console.log("Hash table now:");
    for (let key in ht) {
        console.log(key + ": " + ht[key]); // Displaying hash table with no order
    }
}

add(); // Random function call
add(); //  again
add(); // Keep adding with no real structure
add(); // Just keep adding, chaos
add(); // one more

serve();
serve(); // Serving again, no structure
