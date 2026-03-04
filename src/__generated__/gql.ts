/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation GetNewTokens {\n  newTokens {\n    user {\n      id\n    }\n  }\n}": typeof types.GetNewTokensDocument,
    "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}": typeof types.LoginDocument,
    "mutation Logout {\n  logout\n}": typeof types.LogoutDocument,
    "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}": typeof types.RegisterDocument,
    "mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestResetPassword(data: $data)\n}": typeof types.RequestPasswordResetDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": typeof types.ResetPasswordDocument,
    "mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}": typeof types.VerifyEmailDocument,
    "query GetMe {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n  }\n}": typeof types.GetMeDocument,
};
const documents: Documents = {
    "mutation GetNewTokens {\n  newTokens {\n    user {\n      id\n    }\n  }\n}": types.GetNewTokensDocument,
    "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout\n}": types.LogoutDocument,
    "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}": types.RegisterDocument,
    "mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestResetPassword(data: $data)\n}": types.RequestPasswordResetDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": types.ResetPasswordDocument,
    "mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}": types.VerifyEmailDocument,
    "query GetMe {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n  }\n}": types.GetMeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation GetNewTokens {\n  newTokens {\n    user {\n      id\n    }\n  }\n}"): (typeof documents)["mutation GetNewTokens {\n  newTokens {\n    user {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}"): (typeof documents)["mutation Login($data: AuthInput!) {\n  login(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout {\n  logout\n}"): (typeof documents)["mutation Logout {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}"): (typeof documents)["mutation Register($data: AuthInput!) {\n  register(data: $data) {\n    user {\n      id\n      email\n      role\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestResetPassword(data: $data)\n}"): (typeof documents)["mutation RequestPasswordReset($data: RequestPasswordResetInput!) {\n  requestResetPassword(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}"): (typeof documents)["mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}"): (typeof documents)["mutation VerifyEmail($token: String!) {\n  verifyEmail(token: $token)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMe {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n  }\n}"): (typeof documents)["query GetMe {\n  me {\n    id\n    email\n    role\n    isEmailVerified\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;