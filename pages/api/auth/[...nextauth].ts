import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: "test",
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "database",
    maxAge: 15 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60, 
  },
});
