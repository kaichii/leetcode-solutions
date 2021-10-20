/**
 * Calls a method of an object, substituting another object for the current object.
 * @param thisArg The object to be used as the current object.
 * @param args A list of arguments to be passed to the method.
 */

Function.prototype.myCall = function (thisArg, ...args) {
    if (this === Function.prototype) {
        return;
    }

    thisArg = thisArg || globalThis;

    const fn = Symbol();

    thisArg[fn] = this;

    const result = thisArg[fn](...args);

    delete thisArg[fn];

    return result;
};
