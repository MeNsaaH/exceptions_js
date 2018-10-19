/**
 * Easy way to define Custom Exceptions By just creating New Instance
 * of Exception
 * @param name optional. The name of the exception
 * With the name parameter, exception is instantiated as
 * ExceptionName: Exception message
 * Without name parameter, exception is instantiated as
 * Error: Exception message
 * @returns Error
 * 
 */

function Exception(name) {
    /** 
     * Create __Error Logic
     * @param message optional. message to be displayed by exception
     */
    function __Error(message) {
        const instance = new Error(message);
        instance.name = name

        // is function. look on to Making it prototypal
        instance.is = function(err) {
            return err === instance.name || this instanceof err
        }

        // instance.in = function(err_list){
        //     return err_list.hasOwnProperty(this)
        // }
        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
         
        if (Error.captureStackTrace) {
            Error.captureStackTrace(instance, __Error);
        }
        return instance;
    }

    __Error.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(__Error, Error);
    } else {
        __Error.__proto__ = Error;
    }
    return __Error
}


/**
 * Creates a list of exceptions
 * this can then be access as objects of the Function Exception
 */
function ExceptionList(error_list){
    let _errors = new Array()

    // Create a list of exceptions
    function _createErrorList(){
        for (let err of error_list){
            _errors[err] = new Exception(err)
        }
        return _errors
    }

    // check if an error is in an error_list
    _errors.has = function(err) {
        return _errors.hasOwnProperty(err.name)
    }

    return _createErrorList()

    
}


module.exports = {
    Exception,
    ExceptionList,
}