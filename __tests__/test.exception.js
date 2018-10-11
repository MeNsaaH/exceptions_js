const Exception = require('../index')

const MyCustomException = new Exception("MyCustomException")

const TestExceptionDetails = function() {
    try{
        throw new MyCustomException("Hello")
    }catch(e){
        return e
    }
}

    
describe('DefinedCustomException is thrown', () => {
    test('MyCustomException thrown', () => {
        expect(()=>{
            throw new MyCustomException("Some Errors")
        }).toThrow(MyCustomException);
    })
});

describe('Test Exception Details', () => {
    test('MyCustomException name is same as name passed as Argument to Exception', ()=>{
        expect(TestExceptionDetails().name).toBe("MyCustomException")
    });
    test("MyCustomException message is same as message passed to instantiation", ()=>{
        expect(TestExceptionDetails().message).toBe("Hello")
    });
    test('error thrown isinstanceof MyCustomException', ()=> {
        expect(TestExceptionDetails() instanceof MyCustomException)
    });
})

