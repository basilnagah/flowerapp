/* eslint-disable @typescript-eslint/no-unused-vars */
import {JWT} from 'next-auth/jwt'
import {NextAuth} from 'next-auth'


declare module 'next-auth'{
    interface User extends DataBaseFields{
        token:string,
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
    }
    interface Session{
        token:string,
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
    }  
}


declare module 'next-auth/jwt'{
    interface JWT{
        token:string,
        id:string,
        firstName: string,
        lastName: string,
        email: string,
        gender: string,
        phone: string,
        photo?: string,
        role: string,
        wishlist: [],
        addresses: [],    }
}