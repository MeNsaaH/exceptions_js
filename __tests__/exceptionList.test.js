const {ExceptionList} = require('../index')

const MyExceptionList = new ExceptionList(["HelloError", "SideError"])

const TestExceptionDetails = function() {
    try{
        throw new MyExceptionList.HelloError("Hello")
    }catch(e){
        return e
    }
}

    
describe('ExceptionList.HelloError is thrown', () => {
    test('ExceptionList Error is thrown', () => {
        expect(()=>{
            throw new MyExceptionList.HelloError("Some Errors")
        }).toThrow(MyExceptionList.HelloError);
    })
});

describe('Test Exception Details', () => {
    test('HelloError name is same as name passed as Argument to Exception', ()=>{
        expect(TestExceptionDetails().name).toBe("HelloError")
    });
    test("HelloError message is same as message passed to instantiation", ()=>{
        expect(TestExceptionDetails().message).toBe("Hello")
    });
    test('error thrown isinstanceof MyCustomException', ()=> {
        expect(TestExceptionDetails() instanceof MyExceptionList.HelloError)
    });
    test('ExceptionList has Error being Thrown', ()=> {
        expect(MyExceptionList.has(TestExceptionDetails))
    });
})

describe('Test ExceptionList Details', ()=>{
    test('ExceptionList contains two elements', ()=>{
        expect(MyExceptionList.length === 2)
    });
    test('ExceptionList is an Array of Exceptions', ()=> {
        expect(()=>{
            MyExceptionList.forEach(element => {
                if (!(new element() instanceof Error)) return false
            });
            return true
        })
    })
})
