// create an array cat

const cats = ["Milo", "Otis", "Garfield"]

// Appending a cat to the end of the Array
function destructivelyAppendCat(name) {
    cats.push(name);
};

// Appending a cat at the beginning of the Array
function destructivelyPrependCat(name) {
    cats.unshift(name);
};


// remove the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
};


// remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Appending a cat to the cats array and returns a new array, leaving the cats array unchanged using spread operator
function appendCat(name) {
    return [...cats, name];
}

// prepending a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, ...cats];
}

// removing the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, cats.length - 1)
};

// removing the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}