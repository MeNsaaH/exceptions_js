/**
 * Easy way to define Custom Exceptions By just creating New Instance
 * of Exception
 * 
 * 
 */

function Exception(message) {
    function CustomError(message, fileName, lineNumber) {
        var instance = new Error(message, fileName, lineNumber);
        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
        if (Error.captureStackTrace) {
            Error.captureStackTrace(instance, CustomError);
        }
        return instance;
    }

    CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    CustomError.prototype.is = function(err) {
        return CustomError === err
    }

    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(CustomError, Error);
    } else {
        CustomError.__proto__ = Error;
    }
    return CustomError
}

const InvalidEntryError = new Exception


try {
    throw new InvalidEntryError("This is Invalid")
} catch (err) {
    console.log(err)
    console.log(err instanceof InvalidEntryError)
    console.log(err.is(InvalidEntryError))
}