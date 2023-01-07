import { dedupExchange, fetchExchange, Exchange } from "urql";
import {
  LogoutMutation,
  MeQuery,
  MeDocument,
  LoginMutation,
  RegisterMutation,
  DeletePostMutation,
  CreatePostMutation,
} from "../generated/graphql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { betterUpdateQuery } from "./betterUpdateQuery";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const createUrqlClient = (ssrExchange: Exchange) => ({
  url: serverUrl as string,
  fetchOptions: {
    credentials: "include" as const,
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          logout: (_result, _args, cache, _info) => {
            betterUpdateQuery<LogoutMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              () => ({ me: null })
            );
          },
          login: (_result, _args, cache, _info) => {
            betterUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    me: result.login.user,
                  };
                }
              }
            );
          },

          register: (_result, _args, cache, _info) => {
            betterUpdateQuery<RegisterMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (!result.register.user) {
                  return query;
                } else {
                  return {
                    me: {
                      ...result.register.user,
                    },
                  };
                }
              }
            );
          },

          deletePost: (_result, _args, cache, _info) => {
            betterUpdateQuery<DeletePostMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.deletePost && query.me) {
                  return {
                    me: {
                      ...query.me,
                      post: null,
                    },
                  };
                } else {
                  return {
                    me: query.me,
                  };
                }
              }
            );
          },

          createPost: (_result, _args, cache, _info) => {
            betterUpdateQuery<CreatePostMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.createPost && query.me) {
                  return {
                    me: {
                      ...query.me,
                      post: result.createPost,
                    },
                  };
                } else {
                  return {
                    me: query.me,
                  };
                }
              }
            );
          },
        },
      },
    }),
    ssrExchange,
    fetchExchange,
  ],
});
