/**
 * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
 * @param thisArg The object to be used as the this object.
 * @param argArray A set of arguments to be passed to the function.
 */

Function.prototype.myApply = function (thisArg, argArray) {
    if (this === Function.prototype) {
        return;
    }

    thisArg = thisArg || globalThis;

    const fn = Symbol();

    thisArg[fn] = this;

    let result;

    if (Array.isArray(argArray)) {
        result = thisArg[fn](...argArray);
    } else {
        result = thisArg[fn]();
    }

    delete thisArg[fn];

    return result;
};
