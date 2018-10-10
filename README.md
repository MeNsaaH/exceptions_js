Exception JS
================

An easier way of using javascript custom Exceptions. It can find very good usage in Promises.

```js
    import Exception from 'exception'


    const MyCustomError = new Exception
    const OtherError = new Exception

    try{
        // Some code to be tried
        throw new MyCustomError;
    }catch(err) {
        if (err instanceof MyCustomError){
            //
        }
        // Or more preferrably
        if (err.is(MyCustomError)){
            //some code
        }
        if (err.is(OtherError)) {
            // Do Something
        }

    }
```

For best practices, you should have all related exceptions in one file

```js 

    import {OtherException, PrimaryException} from '../my_exception'

    // Some Error Handling Code
```