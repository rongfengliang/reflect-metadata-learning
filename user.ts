
import { log, logParamTypes, cls } from "./log"

@cls()
class User {
    @log
    @logParamTypes
    printInfo(name) {
        console.log(name)
    }
    @logParamTypes
    doSomething(
        param1: string,
        param2: number,
        param3: any,
        param4: { test: string },
        param5: any,
        param6: Function,
        param7: (a: number) => void,
    ): number {
        return 1
    }

    init():void{
        console.log("user is init")
    }
}

export default User

export {

    User
}