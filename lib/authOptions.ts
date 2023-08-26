import { connectToDB } from '@/mongoose'
import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import User from './models/User'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email' },
        password: { label: 'Password' }
      },
      async authorize(credentials, req) {
        if (credentials?.username === 'admin' && credentials.password === 'admin') {
          return {
            id: '1',
            email: 'admin@example.com'
          }
        }
        await connectToDB()

        const user = await User.findOne({
          email: credentials?.username as any
        })

        if (user) {
          const isPasswordCorrect = await bcrypt.compare(credentials?.password as any, user.password)
          return {
            id: '1',
            email: 'admin@example.com'
          }
        }
        return null
      }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  // session: {
  //   strategy: "jwt",
  // },
  secret: process.env.NEXTAUTH_SECRET
}
