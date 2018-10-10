/**
 * Easy way to define Custom Exceptions By just creating New Instance
 * of Exception
 * @param name: optional The name of the exception
 * With the name parameter, exception is instantiated as
 * ExceptionName: Exception message
 * Without name parameter, exception is instantiated as
 * Error: Exception message
 * 
 */

function Exception(name) {
    function CustomError(message) {
        var instance = new Error(message);
        instance.name = name

        instance.is = function(err) {
            return err === instance.name || CustomError === err
        }
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

    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(CustomError, Error);
    } else {
        CustomError.__proto__ = Error;
    }
    return CustomError
}
