/* eslint-disable @typescript-eslint/no-unused-vars */
import { JSON_HEADER } from './lib/constants/api.constants';
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { json } from 'stream/consumers';

export const authOptions:AuthOptions={
    pages:{
        signIn:'/_auth/login',
        error:'/_auth/login'
    },
    providers:[
        Credentials({
            name:'Credentials',
            credentials:{
                email:{},
                password:{}
            },
            authorize: async(credentials)=>{

                const response = await fetch(`${process.env.API}/auth/signin`,{
                    method:'POST',
                    body: JSON.stringify({
                        email:credentials?.email,
                        password:credentials?.password,
                    }),
                    headers:{
                        ...JSON_HEADER
                    }
                })

                

                const payLoad:APIResponse<LoginResponse> = await response.json()

                // if login is successful return userdata and token
                if(payLoad.message == 'success'){
                    return{
                        token: payLoad.token,
                        ...payLoad.user
                    }
                }
                //otherweise throw error returned from backend
                throw new Error(payLoad.error)
            }
        })
    ],
    callbacks:{
        jwt :({token , user})=>{
            if(user){
                token.token=user.token;
                token.id=user.id;
                token.firstName= user.firstName;
                token.lastName= user.lastName;
                token.email= user.email;
                token.gender= user.gender;
                token.phone= user.phone;
                token.photo= user.photo;
                token.role= user.role;
                token.wishlist= user.wishlist;
                token.addresses= user.addresses;
            }
            return token
        },
        session:({session,token})=>{
            session.token = token.token;
            session.id=token.id;
            session.firstName= token.firstName;
            session.lastName= token.lastName;
            session.email= token.email;
            session.gender= token.gender;
            session.phone= token.phone;
            session.photo= token.photo;
            session.role= token.role;
            session.wishlist= token.wishlist;
            session.addresses= token.addresses;

            return session 
        }
    }
}