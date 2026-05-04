function wrapResponse<T>(statusCode : number, data : T) : {statusCode : number, data : T}{
    return {statusCode : statusCode, data : data}

}

let userResp= wrapResponse<string>(200,"Admin")
console.log(userResp)

let flagResp= wrapResponse<boolean>(200,true)
console.log(flagResp)

let numResp= wrapResponse<number>(200,400)
console.log(numResp)

let objResp= wrapResponse<object>(200,{testresult:"pass"})
console.log(objResp)
console.log(objResp.data)
