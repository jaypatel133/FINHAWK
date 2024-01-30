import connectMongoDB from "@/libs/mongodb";
import User from "@/modules/users";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

const authOptions={
    providers:[
        Credentials({
        name:"credentials",
        credentials:{},
        async authorize(credential)
        {
            // const user = {id:'1'};
            // return user;
            const {email, password} = credential

            try{
                await connectMongoDB();
                const user = await User.findOne({email})

                
                if(!user)
                {
                    console.log('in')
                    return null
                }

                const passwordMatch = await bcrypt.compare(password, user.password)

                if(!passwordMatch)
                {
                    return null
                }
                return user
            }catch(e)
            {
                console.log(e)
            }
        }
    })
    ],
    session: {
        strategy:"jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:
    {
        signIn: '/login'
    }
};

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST};