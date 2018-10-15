Exception JS
================

Declaring Custom Exceptions in one line. Valid for all versions of javascript. It can find very good usage in Promises.
All standard Error methods apply to the custom Exception created, `CustomException.stack`, `CustomException.name`, `CustomException.toString()`, `CustomException.message` and others.
```js
    import {Exception} from 'exception'
    
    // const {Exception} = require('exception')
    
    // passing the name parameter ensures the exception displays
    // with the name 
    // Without name parameter the Exception is instantiated as
    // Error: some exception message
    // With name parameter, exception is instantiated as
    // MyCustomError: some exception message
    const MyCustomError = new Exception("MyCustomError")
    const OtherError = new Exception

    try{
        // Some code to be tried
        throw new MyCustomError("Something is not write");
    }catch(err) {
        if (err instanceof MyCustomError){
            //
        }
        // Or more conveniently
        if (err.is(MyCustomError)){
            console.log(err.toString())
            //some code
        }
        if (err.is("MyCustomError")) {
            // Do Something
        }

    }
```


To create exceptions with similar traits, you can use the `Exceptions` class

```js
    import {ExceptionList} from 'exception'

    // const {ExceptionList} = require('exception')

    const NetworkErrors = ExceptionList(['SSLError', 'ConnectionLostError', 'SMTPError'])

    try{
        // Some block of code
        throw new NetworkErrors.SSLError("Unable to establish SSL Connection")
    }catch(err){
        if err.is(NetworkErrors.SSLError){
            // Do Something
        }
        if NetworkErrors.has(err){
            // Do something
        }
    }

```


For best practices, you should have all related exceptions in one file

```js 

    import {OtherException, PrimaryException} from '../my_exception'

    // Some Error Handling Code
```