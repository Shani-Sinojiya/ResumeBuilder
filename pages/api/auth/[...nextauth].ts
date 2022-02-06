import NextAuth from "next-auth";
import clientPromise from "../../../lib/mongodb";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
    GitHubProvider({
      clientId: `${process.env.GITHUB_CLIENT_ID}`,
      clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
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
