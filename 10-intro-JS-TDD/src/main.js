module.exports = add;

function add(a, b) {



    return a+b; // This can be deleted as well ;)
}

/*
   Utilities functions (just for helping)
 */

// OBS: this is quite a ugly helper method: DELETE ME!
function isUndefined(x) {
    return x === undefined;
}

// Tips: DON'T use Number.NaN
function isANumber(x) {
    return typeof(x) === 'number';
}
