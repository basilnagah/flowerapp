declare type DataBaseFields = {
    _id:string,
    createdAt:string,
}


declare type SuccessfulResponse<T> = {
    message:'success',
    user:T,
    token:string,
    error?:string,
}

declare type ErrorResponse= {
    message?:'success',
    token?:string,
    error:string
    user?:T,
}

declare type forgetResponse= {
    message:'success',
    info:string,
}
declare type RecoverResponse= {
    status:'Success',
}
declare type setPasswordResponse= {
    message:'success',
    token:string,
    error?:string,
}


declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse