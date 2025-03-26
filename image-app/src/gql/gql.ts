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
    "\n\t# GraphQL query variables are defined using \"$var: Type\", such as \"$user: String\"\n\t# See GraphQL API playground https://graphqlzero.almansi.me/api for schema\n\tquery GetUsersPhotos($user: String!, $startIndex: Int!) {\n\t\tusers(options: { search: { q: $user } }) {\n\t\t\tdata {\n\t\t\t\talbums(options: { slice: { limit: 1 } }) {\n\t\t\t\t\tdata {\n\t\t\t\t\t\t# will need to add $start: Int! and $limit: Int! to the query variables\n\t\t\t\t\t\tphotos(options: { slice: { start: $startIndex, limit: 5 } }) {\n\t\t\t\t\t\t\tmeta {\n\t\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tthumbnailUrl\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t# ...\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.GetUsersPhotosDocument,
};
const documents: Documents = {
    "\n\t# GraphQL query variables are defined using \"$var: Type\", such as \"$user: String\"\n\t# See GraphQL API playground https://graphqlzero.almansi.me/api for schema\n\tquery GetUsersPhotos($user: String!, $startIndex: Int!) {\n\t\tusers(options: { search: { q: $user } }) {\n\t\t\tdata {\n\t\t\t\talbums(options: { slice: { limit: 1 } }) {\n\t\t\t\t\tdata {\n\t\t\t\t\t\t# will need to add $start: Int! and $limit: Int! to the query variables\n\t\t\t\t\t\tphotos(options: { slice: { start: $startIndex, limit: 5 } }) {\n\t\t\t\t\t\t\tmeta {\n\t\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tthumbnailUrl\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t# ...\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetUsersPhotosDocument,
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
export function graphql(source: "\n\t# GraphQL query variables are defined using \"$var: Type\", such as \"$user: String\"\n\t# See GraphQL API playground https://graphqlzero.almansi.me/api for schema\n\tquery GetUsersPhotos($user: String!, $startIndex: Int!) {\n\t\tusers(options: { search: { q: $user } }) {\n\t\t\tdata {\n\t\t\t\talbums(options: { slice: { limit: 1 } }) {\n\t\t\t\t\tdata {\n\t\t\t\t\t\t# will need to add $start: Int! and $limit: Int! to the query variables\n\t\t\t\t\t\tphotos(options: { slice: { start: $startIndex, limit: 5 } }) {\n\t\t\t\t\t\t\tmeta {\n\t\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tthumbnailUrl\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t# ...\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\t# GraphQL query variables are defined using \"$var: Type\", such as \"$user: String\"\n\t# See GraphQL API playground https://graphqlzero.almansi.me/api for schema\n\tquery GetUsersPhotos($user: String!, $startIndex: Int!) {\n\t\tusers(options: { search: { q: $user } }) {\n\t\t\tdata {\n\t\t\t\talbums(options: { slice: { limit: 1 } }) {\n\t\t\t\t\tdata {\n\t\t\t\t\t\t# will need to add $start: Int! and $limit: Int! to the query variables\n\t\t\t\t\t\tphotos(options: { slice: { start: $startIndex, limit: 5 } }) {\n\t\t\t\t\t\t\tmeta {\n\t\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tthumbnailUrl\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t# ...\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;