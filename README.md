Exception JS
================

An easier way of using javascript custom Exceptions. It can find very good usage in Promises.

```js
    import Exception from 'exception'

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

For best practices, you should have all related exceptions in one file

```js 

    import {OtherException, PrimaryException} from '../my_exception'

    // Some Error Handling Code
```