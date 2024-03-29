import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddTarheelInput = {
  arrival: Scalars['String'];
  carModel: Scalars['String'];
  days: Array<Scalars['String']>;
  departure: Scalars['String'];
  imageId: Scalars['String'];
  isAcWorking: Scalars['Boolean'];
  locations: Scalars['String'];
  numberOfSeats: Scalars['Float'];
  price: Scalars['Float'];
};

export type EmailPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FullRegisterInput = {
  address: Scalars['String'];
  batch: Scalars['String'];
  college: Scalars['String'];
  dep: Scalars['String'];
  email: Scalars['String'];
  gender: Scalars['String'];
  mobile: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createPost: Post;
  deletePost: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updatePost?: Maybe<Post>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreatePostArgs = {
  formInput: AddTarheelInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  options: EmailPasswordInput;
};


export type MutationRegisterArgs = {
  options: FullRegisterInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['Float'];
};

export type Post = {
  __typename?: 'Post';
  arrival: Scalars['String'];
  carModel: Scalars['String'];
  createdAt: Scalars['String'];
  days: Scalars['String'];
  departure: Scalars['String'];
  id: Scalars['Int'];
  imageId: Scalars['String'];
  isAcWorking: Scalars['Boolean'];
  locations: Scalars['String'];
  numberOfSeats: Scalars['Int'];
  price: Scalars['Int'];
  updatedAt: Scalars['String'];
  user: User;
};

export type PostsResponse = {
  __typename?: 'PostsResponse';
  count: Scalars['Int'];
  posts: Array<Post>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: PostsResponse;
};


export type QueryPostArgs = {
  id: Scalars['Float'];
};


export type QueryPostsArgs = {
  limit: Scalars['Int'];
  location?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  batch: Scalars['String'];
  college: Scalars['String'];
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['String'];
  dep: Scalars['String'];
  email: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['Int'];
  mobile: Scalars['String'];
  name: Scalars['String'];
  post?: Maybe<Post>;
  uni: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularUserFragment = { __typename?: 'User', id: number, email: string, name: string, post?: { __typename?: 'Post', id: number } | null };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, email: string, name: string, post?: { __typename?: 'Post', id: number } | null } | null };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, email: string, name: string, post?: { __typename?: 'Post', id: number } | null } | null } };

export type CreatePostMutationVariables = Exact<{
  arrival: Scalars['String'];
  carModel: Scalars['String'];
  imageId: Scalars['String'];
  days: Array<Scalars['String']> | Scalars['String'];
  departure: Scalars['String'];
  isAcWorking: Scalars['Boolean'];
  locations: Scalars['String'];
  numberOfSeats: Scalars['Float'];
  price: Scalars['Float'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: number } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, email: string, name: string, post?: { __typename?: 'Post', id: number } | null } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  address: Scalars['String'];
  mobile: Scalars['String'];
  college: Scalars['String'];
  dep: Scalars['String'];
  batch: Scalars['String'];
  gender: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, email: string, name: string, post?: { __typename?: 'Post', id: number } | null } | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, email: string, name: string, post?: { __typename?: 'Post', id: number } | null } | null };

export type PostQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: number, createdAt: string, updatedAt: string, carModel: string, imageId: string, numberOfSeats: number, isAcWorking: boolean, locations: string, price: number, departure: string, arrival: string, days: string, user: { __typename?: 'User', id: number, name: string, dep: string, batch: string, mobile: string, address: string } } | null };

export type PostsQueryVariables = Exact<{
  location?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type PostsQuery = { __typename?: 'Query', posts: { __typename?: 'PostsResponse', count: number, posts: Array<{ __typename?: 'Post', id: number, createdAt: string, updatedAt: string, imageId: string, carModel: string, numberOfSeats: number, isAcWorking: boolean, locations: string, price: number, departure: string, arrival: string, days: string, user: { __typename?: 'User', id: number, name: string, dep: string, batch: string, address: string } }> } };

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  email
  name
  post {
    id
  }
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreatePostDocument = gql`
    mutation CreatePost($arrival: String!, $carModel: String!, $imageId: String!, $days: [String!]!, $departure: String!, $isAcWorking: Boolean!, $locations: String!, $numberOfSeats: Float!, $price: Float!) {
  createPost(
    formInput: {imageId: $imageId, carModel: $carModel, numberOfSeats: $numberOfSeats, isAcWorking: $isAcWorking, locations: $locations, price: $price, arrival: $arrival, departure: $departure, days: $days}
  ) {
    id
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const DeletePostDocument = gql`
    mutation DeletePost($id: Float!) {
  deletePost(id: $id)
}
    `;

export function useDeletePostMutation() {
  return Urql.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(options: {email: $email, password: $password}) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $name: String!, $address: String!, $mobile: String!, $college: String!, $dep: String!, $batch: String!, $gender: String!) {
  register(
    options: {email: $email, password: $password, name: $name, address: $address, mobile: $mobile, college: $college, dep: $dep, batch: $batch, gender: $gender}
  ) {
    errors {
      field
      message
    }
    user {
      id
      email
      name
      post {
        id
      }
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};
export const PostDocument = gql`
    query Post($id: Float!) {
  post(id: $id) {
    id
    createdAt
    updatedAt
    carModel
    imageId
    numberOfSeats
    isAcWorking
    locations
    price
    departure
    arrival
    days
    user {
      id
      name
      dep
      batch
      mobile
      address
    }
  }
}
    `;

export function usePostQuery(options: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'>) {
  return Urql.useQuery<PostQuery, PostQueryVariables>({ query: PostDocument, ...options });
};
export const PostsDocument = gql`
    query Posts($location: String, $limit: Int!, $offset: Int) {
  posts(location: $location, limit: $limit, offset: $offset) {
    posts {
      id
      createdAt
      updatedAt
      imageId
      carModel
      numberOfSeats
      isAcWorking
      locations
      price
      departure
      arrival
      days
      user {
        id
        name
        dep
        batch
        address
      }
    }
    count
  }
}
    `;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'>) {
  return Urql.useQuery<PostsQuery, PostsQueryVariables>({ query: PostsDocument, ...options });
};