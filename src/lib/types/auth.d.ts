declare type User = {
    id:string,
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    phone: string,
    photo?: string,
    role: string,
    wishlist: [],
    addresses: [],
} & DataBaseFields


declare type LoginResponse={
    message: string,
    user: User,
    token: string
}

declare type RegisterFields={
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    rePassword: string,
    phone: string,
    gender: string,
}

