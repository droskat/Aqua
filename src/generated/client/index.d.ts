
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Upvote
 * 
 */
export type Upvote = $Result.DefaultSelection<Prisma.$UpvotePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model CommentUpvote
 * 
 */
export type CommentUpvote = $Result.DefaultSelection<Prisma.$CommentUpvotePayload>
/**
 * Model CommentDownvote
 * 
 */
export type CommentDownvote = $Result.DefaultSelection<Prisma.$CommentDownvotePayload>
/**
 * Model ForumThread
 * 
 */
export type ForumThread = $Result.DefaultSelection<Prisma.$ForumThreadPayload>
/**
 * Model ForumComment
 * 
 */
export type ForumComment = $Result.DefaultSelection<Prisma.$ForumCommentPayload>
/**
 * Model ForumThreadUpvote
 * 
 */
export type ForumThreadUpvote = $Result.DefaultSelection<Prisma.$ForumThreadUpvotePayload>
/**
 * Model ForumThreadDownvote
 * 
 */
export type ForumThreadDownvote = $Result.DefaultSelection<Prisma.$ForumThreadDownvotePayload>
/**
 * Model ForumCommentUpvote
 * 
 */
export type ForumCommentUpvote = $Result.DefaultSelection<Prisma.$ForumCommentUpvotePayload>
/**
 * Model ForumCommentDownvote
 * 
 */
export type ForumCommentDownvote = $Result.DefaultSelection<Prisma.$ForumCommentDownvotePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.upvote`: Exposes CRUD operations for the **Upvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Upvotes
    * const upvotes = await prisma.upvote.findMany()
    * ```
    */
  get upvote(): Prisma.UpvoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentUpvote`: Exposes CRUD operations for the **CommentUpvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentUpvotes
    * const commentUpvotes = await prisma.commentUpvote.findMany()
    * ```
    */
  get commentUpvote(): Prisma.CommentUpvoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentDownvote`: Exposes CRUD operations for the **CommentDownvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentDownvotes
    * const commentDownvotes = await prisma.commentDownvote.findMany()
    * ```
    */
  get commentDownvote(): Prisma.CommentDownvoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumThread`: Exposes CRUD operations for the **ForumThread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumThreads
    * const forumThreads = await prisma.forumThread.findMany()
    * ```
    */
  get forumThread(): Prisma.ForumThreadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumComment`: Exposes CRUD operations for the **ForumComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumComments
    * const forumComments = await prisma.forumComment.findMany()
    * ```
    */
  get forumComment(): Prisma.ForumCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumThreadUpvote`: Exposes CRUD operations for the **ForumThreadUpvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumThreadUpvotes
    * const forumThreadUpvotes = await prisma.forumThreadUpvote.findMany()
    * ```
    */
  get forumThreadUpvote(): Prisma.ForumThreadUpvoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumThreadDownvote`: Exposes CRUD operations for the **ForumThreadDownvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumThreadDownvotes
    * const forumThreadDownvotes = await prisma.forumThreadDownvote.findMany()
    * ```
    */
  get forumThreadDownvote(): Prisma.ForumThreadDownvoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumCommentUpvote`: Exposes CRUD operations for the **ForumCommentUpvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumCommentUpvotes
    * const forumCommentUpvotes = await prisma.forumCommentUpvote.findMany()
    * ```
    */
  get forumCommentUpvote(): Prisma.ForumCommentUpvoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumCommentDownvote`: Exposes CRUD operations for the **ForumCommentDownvote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumCommentDownvotes
    * const forumCommentDownvotes = await prisma.forumCommentDownvote.findMany()
    * ```
    */
  get forumCommentDownvote(): Prisma.ForumCommentDownvoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Blog: 'Blog',
    Image: 'Image',
    Upvote: 'Upvote',
    Comment: 'Comment',
    CommentUpvote: 'CommentUpvote',
    CommentDownvote: 'CommentDownvote',
    ForumThread: 'ForumThread',
    ForumComment: 'ForumComment',
    ForumThreadUpvote: 'ForumThreadUpvote',
    ForumThreadDownvote: 'ForumThreadDownvote',
    ForumCommentUpvote: 'ForumCommentUpvote',
    ForumCommentDownvote: 'ForumCommentDownvote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "blog" | "image" | "upvote" | "comment" | "commentUpvote" | "commentDownvote" | "forumThread" | "forumComment" | "forumThreadUpvote" | "forumThreadDownvote" | "forumCommentUpvote" | "forumCommentDownvote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Upvote: {
        payload: Prisma.$UpvotePayload<ExtArgs>
        fields: Prisma.UpvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpvoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpvoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          findFirst: {
            args: Prisma.UpvoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpvoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          findMany: {
            args: Prisma.UpvoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>[]
          }
          create: {
            args: Prisma.UpvoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          createMany: {
            args: Prisma.UpvoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpvoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>[]
          }
          delete: {
            args: Prisma.UpvoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          update: {
            args: Prisma.UpvoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          deleteMany: {
            args: Prisma.UpvoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpvoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpvoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>[]
          }
          upsert: {
            args: Prisma.UpvoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotePayload>
          }
          aggregate: {
            args: Prisma.UpvoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpvote>
          }
          groupBy: {
            args: Prisma.UpvoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpvoteCountArgs<ExtArgs>
            result: $Utils.Optional<UpvoteCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      CommentUpvote: {
        payload: Prisma.$CommentUpvotePayload<ExtArgs>
        fields: Prisma.CommentUpvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentUpvoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentUpvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentUpvoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentUpvotePayload>
          }
          findFirst: {
            args: Prisma.CommentUpvoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentUpvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentUpvoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentUpvotePayload>
          }
          findMany: {
            args: Prisma.CommentUpvoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentUpvotePayload>[]
          }
          create: {
            args: Prisma.CommentUpvoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentUpvotePayload>
          }
          createMany: {
            args: Prisma.CommentUpvoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentUpvoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentUpvotePayload>[]
          }
          delete: {
            args: Prisma.CommentUpvoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentUpvotePayload>
          }
          update: {
            args: Prisma.CommentUpvoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentUpvotePayload>
          }
          deleteMany: {
            args: Prisma.CommentUpvoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpvoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpvoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentUpvotePayload>[]
          }
          upsert: {
            args: Prisma.CommentUpvoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentUpvotePayload>
          }
          aggregate: {
            args: Prisma.CommentUpvoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentUpvote>
          }
          groupBy: {
            args: Prisma.CommentUpvoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentUpvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentUpvoteCountArgs<ExtArgs>
            result: $Utils.Optional<CommentUpvoteCountAggregateOutputType> | number
          }
        }
      }
      CommentDownvote: {
        payload: Prisma.$CommentDownvotePayload<ExtArgs>
        fields: Prisma.CommentDownvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentDownvoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentDownvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentDownvoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentDownvotePayload>
          }
          findFirst: {
            args: Prisma.CommentDownvoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentDownvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentDownvoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentDownvotePayload>
          }
          findMany: {
            args: Prisma.CommentDownvoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentDownvotePayload>[]
          }
          create: {
            args: Prisma.CommentDownvoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentDownvotePayload>
          }
          createMany: {
            args: Prisma.CommentDownvoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentDownvoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentDownvotePayload>[]
          }
          delete: {
            args: Prisma.CommentDownvoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentDownvotePayload>
          }
          update: {
            args: Prisma.CommentDownvoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentDownvotePayload>
          }
          deleteMany: {
            args: Prisma.CommentDownvoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentDownvoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentDownvoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentDownvotePayload>[]
          }
          upsert: {
            args: Prisma.CommentDownvoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentDownvotePayload>
          }
          aggregate: {
            args: Prisma.CommentDownvoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentDownvote>
          }
          groupBy: {
            args: Prisma.CommentDownvoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentDownvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentDownvoteCountArgs<ExtArgs>
            result: $Utils.Optional<CommentDownvoteCountAggregateOutputType> | number
          }
        }
      }
      ForumThread: {
        payload: Prisma.$ForumThreadPayload<ExtArgs>
        fields: Prisma.ForumThreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumThreadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumThreadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          findFirst: {
            args: Prisma.ForumThreadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumThreadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          findMany: {
            args: Prisma.ForumThreadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>[]
          }
          create: {
            args: Prisma.ForumThreadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          createMany: {
            args: Prisma.ForumThreadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumThreadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>[]
          }
          delete: {
            args: Prisma.ForumThreadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          update: {
            args: Prisma.ForumThreadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          deleteMany: {
            args: Prisma.ForumThreadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumThreadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumThreadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>[]
          }
          upsert: {
            args: Prisma.ForumThreadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadPayload>
          }
          aggregate: {
            args: Prisma.ForumThreadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumThread>
          }
          groupBy: {
            args: Prisma.ForumThreadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumThreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumThreadCountArgs<ExtArgs>
            result: $Utils.Optional<ForumThreadCountAggregateOutputType> | number
          }
        }
      }
      ForumComment: {
        payload: Prisma.$ForumCommentPayload<ExtArgs>
        fields: Prisma.ForumCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          findFirst: {
            args: Prisma.ForumCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          findMany: {
            args: Prisma.ForumCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>[]
          }
          create: {
            args: Prisma.ForumCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          createMany: {
            args: Prisma.ForumCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>[]
          }
          delete: {
            args: Prisma.ForumCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          update: {
            args: Prisma.ForumCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          deleteMany: {
            args: Prisma.ForumCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>[]
          }
          upsert: {
            args: Prisma.ForumCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          aggregate: {
            args: Prisma.ForumCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumComment>
          }
          groupBy: {
            args: Prisma.ForumCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumCommentCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentCountAggregateOutputType> | number
          }
        }
      }
      ForumThreadUpvote: {
        payload: Prisma.$ForumThreadUpvotePayload<ExtArgs>
        fields: Prisma.ForumThreadUpvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumThreadUpvoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadUpvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumThreadUpvoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadUpvotePayload>
          }
          findFirst: {
            args: Prisma.ForumThreadUpvoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadUpvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumThreadUpvoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadUpvotePayload>
          }
          findMany: {
            args: Prisma.ForumThreadUpvoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadUpvotePayload>[]
          }
          create: {
            args: Prisma.ForumThreadUpvoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadUpvotePayload>
          }
          createMany: {
            args: Prisma.ForumThreadUpvoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumThreadUpvoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadUpvotePayload>[]
          }
          delete: {
            args: Prisma.ForumThreadUpvoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadUpvotePayload>
          }
          update: {
            args: Prisma.ForumThreadUpvoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadUpvotePayload>
          }
          deleteMany: {
            args: Prisma.ForumThreadUpvoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumThreadUpvoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumThreadUpvoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadUpvotePayload>[]
          }
          upsert: {
            args: Prisma.ForumThreadUpvoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadUpvotePayload>
          }
          aggregate: {
            args: Prisma.ForumThreadUpvoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumThreadUpvote>
          }
          groupBy: {
            args: Prisma.ForumThreadUpvoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumThreadUpvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumThreadUpvoteCountArgs<ExtArgs>
            result: $Utils.Optional<ForumThreadUpvoteCountAggregateOutputType> | number
          }
        }
      }
      ForumThreadDownvote: {
        payload: Prisma.$ForumThreadDownvotePayload<ExtArgs>
        fields: Prisma.ForumThreadDownvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumThreadDownvoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadDownvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumThreadDownvoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadDownvotePayload>
          }
          findFirst: {
            args: Prisma.ForumThreadDownvoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadDownvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumThreadDownvoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadDownvotePayload>
          }
          findMany: {
            args: Prisma.ForumThreadDownvoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadDownvotePayload>[]
          }
          create: {
            args: Prisma.ForumThreadDownvoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadDownvotePayload>
          }
          createMany: {
            args: Prisma.ForumThreadDownvoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumThreadDownvoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadDownvotePayload>[]
          }
          delete: {
            args: Prisma.ForumThreadDownvoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadDownvotePayload>
          }
          update: {
            args: Prisma.ForumThreadDownvoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadDownvotePayload>
          }
          deleteMany: {
            args: Prisma.ForumThreadDownvoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumThreadDownvoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumThreadDownvoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadDownvotePayload>[]
          }
          upsert: {
            args: Prisma.ForumThreadDownvoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumThreadDownvotePayload>
          }
          aggregate: {
            args: Prisma.ForumThreadDownvoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumThreadDownvote>
          }
          groupBy: {
            args: Prisma.ForumThreadDownvoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumThreadDownvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumThreadDownvoteCountArgs<ExtArgs>
            result: $Utils.Optional<ForumThreadDownvoteCountAggregateOutputType> | number
          }
        }
      }
      ForumCommentUpvote: {
        payload: Prisma.$ForumCommentUpvotePayload<ExtArgs>
        fields: Prisma.ForumCommentUpvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumCommentUpvoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentUpvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumCommentUpvoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentUpvotePayload>
          }
          findFirst: {
            args: Prisma.ForumCommentUpvoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentUpvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumCommentUpvoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentUpvotePayload>
          }
          findMany: {
            args: Prisma.ForumCommentUpvoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentUpvotePayload>[]
          }
          create: {
            args: Prisma.ForumCommentUpvoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentUpvotePayload>
          }
          createMany: {
            args: Prisma.ForumCommentUpvoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumCommentUpvoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentUpvotePayload>[]
          }
          delete: {
            args: Prisma.ForumCommentUpvoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentUpvotePayload>
          }
          update: {
            args: Prisma.ForumCommentUpvoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentUpvotePayload>
          }
          deleteMany: {
            args: Prisma.ForumCommentUpvoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumCommentUpvoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumCommentUpvoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentUpvotePayload>[]
          }
          upsert: {
            args: Prisma.ForumCommentUpvoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentUpvotePayload>
          }
          aggregate: {
            args: Prisma.ForumCommentUpvoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumCommentUpvote>
          }
          groupBy: {
            args: Prisma.ForumCommentUpvoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentUpvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumCommentUpvoteCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentUpvoteCountAggregateOutputType> | number
          }
        }
      }
      ForumCommentDownvote: {
        payload: Prisma.$ForumCommentDownvotePayload<ExtArgs>
        fields: Prisma.ForumCommentDownvoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumCommentDownvoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentDownvotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumCommentDownvoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentDownvotePayload>
          }
          findFirst: {
            args: Prisma.ForumCommentDownvoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentDownvotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumCommentDownvoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentDownvotePayload>
          }
          findMany: {
            args: Prisma.ForumCommentDownvoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentDownvotePayload>[]
          }
          create: {
            args: Prisma.ForumCommentDownvoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentDownvotePayload>
          }
          createMany: {
            args: Prisma.ForumCommentDownvoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumCommentDownvoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentDownvotePayload>[]
          }
          delete: {
            args: Prisma.ForumCommentDownvoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentDownvotePayload>
          }
          update: {
            args: Prisma.ForumCommentDownvoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentDownvotePayload>
          }
          deleteMany: {
            args: Prisma.ForumCommentDownvoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumCommentDownvoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumCommentDownvoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentDownvotePayload>[]
          }
          upsert: {
            args: Prisma.ForumCommentDownvoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentDownvotePayload>
          }
          aggregate: {
            args: Prisma.ForumCommentDownvoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumCommentDownvote>
          }
          groupBy: {
            args: Prisma.ForumCommentDownvoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentDownvoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumCommentDownvoteCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentDownvoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    blog?: BlogOmit
    image?: ImageOmit
    upvote?: UpvoteOmit
    comment?: CommentOmit
    commentUpvote?: CommentUpvoteOmit
    commentDownvote?: CommentDownvoteOmit
    forumThread?: ForumThreadOmit
    forumComment?: ForumCommentOmit
    forumThreadUpvote?: ForumThreadUpvoteOmit
    forumThreadDownvote?: ForumThreadDownvoteOmit
    forumCommentUpvote?: ForumCommentUpvoteOmit
    forumCommentDownvote?: ForumCommentDownvoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    blogs: number
    ForumThread: number
    ForumComment: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | UserCountOutputTypeCountBlogsArgs
    ForumThread?: boolean | UserCountOutputTypeCountForumThreadArgs
    ForumComment?: boolean | UserCountOutputTypeCountForumCommentArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForumThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumThreadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForumCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
  }


  /**
   * Count Type BlogCountOutputType
   */

  export type BlogCountOutputType = {
    comments: number
    upvotesRelation: number
  }

  export type BlogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | BlogCountOutputTypeCountCommentsArgs
    upvotesRelation?: boolean | BlogCountOutputTypeCountUpvotesRelationArgs
  }

  // Custom InputTypes
  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCountOutputType
     */
    select?: BlogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountUpvotesRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpvoteWhereInput
  }


  /**
   * Count Type ForumThreadCountOutputType
   */

  export type ForumThreadCountOutputType = {
    comments: number
    upvotesRelation: number
    downvotesRelation: number
  }

  export type ForumThreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ForumThreadCountOutputTypeCountCommentsArgs
    upvotesRelation?: boolean | ForumThreadCountOutputTypeCountUpvotesRelationArgs
    downvotesRelation?: boolean | ForumThreadCountOutputTypeCountDownvotesRelationArgs
  }

  // Custom InputTypes
  /**
   * ForumThreadCountOutputType without action
   */
  export type ForumThreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadCountOutputType
     */
    select?: ForumThreadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumThreadCountOutputType without action
   */
  export type ForumThreadCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
  }

  /**
   * ForumThreadCountOutputType without action
   */
  export type ForumThreadCountOutputTypeCountUpvotesRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumThreadUpvoteWhereInput
  }

  /**
   * ForumThreadCountOutputType without action
   */
  export type ForumThreadCountOutputTypeCountDownvotesRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumThreadDownvoteWhereInput
  }


  /**
   * Count Type ForumCommentCountOutputType
   */

  export type ForumCommentCountOutputType = {
    replies: number
    upvotesRelation: number
    downvotesRelation: number
  }

  export type ForumCommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | ForumCommentCountOutputTypeCountRepliesArgs
    upvotesRelation?: boolean | ForumCommentCountOutputTypeCountUpvotesRelationArgs
    downvotesRelation?: boolean | ForumCommentCountOutputTypeCountDownvotesRelationArgs
  }

  // Custom InputTypes
  /**
   * ForumCommentCountOutputType without action
   */
  export type ForumCommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentCountOutputType
     */
    select?: ForumCommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumCommentCountOutputType without action
   */
  export type ForumCommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
  }

  /**
   * ForumCommentCountOutputType without action
   */
  export type ForumCommentCountOutputTypeCountUpvotesRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentUpvoteWhereInput
  }

  /**
   * ForumCommentCountOutputType without action
   */
  export type ForumCommentCountOutputTypeCountDownvotesRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentDownvoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    provider: string | null
    providerAccountId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    provider: string | null
    providerAccountId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    provider: number
    providerAccountId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    provider?: true
    providerAccountId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    provider?: true
    providerAccountId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    provider?: true
    providerAccountId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password: string
    provider: string | null
    providerAccountId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    provider?: boolean
    providerAccountId?: boolean
    blogs?: boolean | User$blogsArgs<ExtArgs>
    ForumThread?: boolean | User$ForumThreadArgs<ExtArgs>
    ForumComment?: boolean | User$ForumCommentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    provider?: boolean
    providerAccountId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    provider?: boolean
    providerAccountId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    provider?: boolean
    providerAccountId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "provider" | "providerAccountId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | User$blogsArgs<ExtArgs>
    ForumThread?: boolean | User$ForumThreadArgs<ExtArgs>
    ForumComment?: boolean | User$ForumCommentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      blogs: Prisma.$BlogPayload<ExtArgs>[]
      ForumThread: Prisma.$ForumThreadPayload<ExtArgs>[]
      ForumComment: Prisma.$ForumCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
      provider: string | null
      providerAccountId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends User$blogsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ForumThread<T extends User$ForumThreadArgs<ExtArgs> = {}>(args?: Subset<T, User$ForumThreadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ForumComment<T extends User$ForumCommentArgs<ExtArgs> = {}>(args?: Subset<T, User$ForumCommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly providerAccountId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.blogs
   */
  export type User$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * User.ForumThread
   */
  export type User$ForumThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    where?: ForumThreadWhereInput
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    cursor?: ForumThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumThreadScalarFieldEnum | ForumThreadScalarFieldEnum[]
  }

  /**
   * User.ForumComment
   */
  export type User$ForumCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    cursor?: ForumCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    upvotes: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    upvotes: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    authorId: number | null
    upvotes: number | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    authorId: number | null
    upvotes: number | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    content: number
    authorId: number
    upvotes: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
    authorId?: true
    upvotes?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
    authorId?: true
    upvotes?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    upvotes?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    upvotes?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    upvotes?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: number
    title: string
    content: string
    authorId: number
    upvotes: number
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    upvotes?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Blog$commentsArgs<ExtArgs>
    upvotesRelation?: boolean | Blog$upvotesRelationArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    upvotes?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    upvotes?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    upvotes?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "authorId" | "upvotes", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Blog$commentsArgs<ExtArgs>
    upvotesRelation?: boolean | Blog$upvotesRelationArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      upvotesRelation: Prisma.$UpvotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      authorId: number
      upvotes: number
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Blog$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Blog$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    upvotesRelation<T extends Blog$upvotesRelationArgs<ExtArgs> = {}>(args?: Subset<T, Blog$upvotesRelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'Int'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly authorId: FieldRef<"Blog", 'Int'>
    readonly upvotes: FieldRef<"Blog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog.comments
   */
  export type Blog$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Blog.upvotesRelation
   */
  export type Blog$upvotesRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    where?: UpvoteWhereInput
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    cursor?: UpvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    author: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    author: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    title: number
    author: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    author?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    author?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    author?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    url: string
    title: string
    author: string
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    author?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    author?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    author?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    author?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "author", ExtArgs["result"]["image"]>

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      title: string
      author: string
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
    readonly title: FieldRef<"Image", 'String'>
    readonly author: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
  }


  /**
   * Model Upvote
   */

  export type AggregateUpvote = {
    _count: UpvoteCountAggregateOutputType | null
    _avg: UpvoteAvgAggregateOutputType | null
    _sum: UpvoteSumAggregateOutputType | null
    _min: UpvoteMinAggregateOutputType | null
    _max: UpvoteMaxAggregateOutputType | null
  }

  export type UpvoteAvgAggregateOutputType = {
    id: number | null
    blogId: number | null
    userId: number | null
  }

  export type UpvoteSumAggregateOutputType = {
    id: number | null
    blogId: number | null
    userId: number | null
  }

  export type UpvoteMinAggregateOutputType = {
    id: number | null
    blogId: number | null
    userId: number | null
  }

  export type UpvoteMaxAggregateOutputType = {
    id: number | null
    blogId: number | null
    userId: number | null
  }

  export type UpvoteCountAggregateOutputType = {
    id: number
    blogId: number
    userId: number
    _all: number
  }


  export type UpvoteAvgAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
  }

  export type UpvoteSumAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
  }

  export type UpvoteMinAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
  }

  export type UpvoteMaxAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
  }

  export type UpvoteCountAggregateInputType = {
    id?: true
    blogId?: true
    userId?: true
    _all?: true
  }

  export type UpvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upvote to aggregate.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Upvotes
    **/
    _count?: true | UpvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UpvoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UpvoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpvoteMaxAggregateInputType
  }

  export type GetUpvoteAggregateType<T extends UpvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateUpvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpvote[P]>
      : GetScalarType<T[P], AggregateUpvote[P]>
  }




  export type UpvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpvoteWhereInput
    orderBy?: UpvoteOrderByWithAggregationInput | UpvoteOrderByWithAggregationInput[]
    by: UpvoteScalarFieldEnum[] | UpvoteScalarFieldEnum
    having?: UpvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpvoteCountAggregateInputType | true
    _avg?: UpvoteAvgAggregateInputType
    _sum?: UpvoteSumAggregateInputType
    _min?: UpvoteMinAggregateInputType
    _max?: UpvoteMaxAggregateInputType
  }

  export type UpvoteGroupByOutputType = {
    id: number
    blogId: number
    userId: number
    _count: UpvoteCountAggregateOutputType | null
    _avg: UpvoteAvgAggregateOutputType | null
    _sum: UpvoteSumAggregateOutputType | null
    _min: UpvoteMinAggregateOutputType | null
    _max: UpvoteMaxAggregateOutputType | null
  }

  type GetUpvoteGroupByPayload<T extends UpvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpvoteGroupByOutputType[P]>
            : GetScalarType<T[P], UpvoteGroupByOutputType[P]>
        }
      >
    >


  export type UpvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    Blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upvote"]>

  export type UpvoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    Blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upvote"]>

  export type UpvoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    userId?: boolean
    Blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upvote"]>

  export type UpvoteSelectScalar = {
    id?: boolean
    blogId?: boolean
    userId?: boolean
  }

  export type UpvoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogId" | "userId", ExtArgs["result"]["upvote"]>
  export type UpvoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type UpvoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type UpvoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blog?: boolean | BlogDefaultArgs<ExtArgs>
  }

  export type $UpvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Upvote"
    objects: {
      Blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blogId: number
      userId: number
    }, ExtArgs["result"]["upvote"]>
    composites: {}
  }

  type UpvoteGetPayload<S extends boolean | null | undefined | UpvoteDefaultArgs> = $Result.GetResult<Prisma.$UpvotePayload, S>

  type UpvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpvoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpvoteCountAggregateInputType | true
    }

  export interface UpvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Upvote'], meta: { name: 'Upvote' } }
    /**
     * Find zero or one Upvote that matches the filter.
     * @param {UpvoteFindUniqueArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpvoteFindUniqueArgs>(args: SelectSubset<T, UpvoteFindUniqueArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Upvote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpvoteFindUniqueOrThrowArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpvoteFindUniqueOrThrowArgs>(args: SelectSubset<T, UpvoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteFindFirstArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpvoteFindFirstArgs>(args?: SelectSubset<T, UpvoteFindFirstArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteFindFirstOrThrowArgs} args - Arguments to find a Upvote
     * @example
     * // Get one Upvote
     * const upvote = await prisma.upvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpvoteFindFirstOrThrowArgs>(args?: SelectSubset<T, UpvoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Upvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Upvotes
     * const upvotes = await prisma.upvote.findMany()
     * 
     * // Get first 10 Upvotes
     * const upvotes = await prisma.upvote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upvoteWithIdOnly = await prisma.upvote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpvoteFindManyArgs>(args?: SelectSubset<T, UpvoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Upvote.
     * @param {UpvoteCreateArgs} args - Arguments to create a Upvote.
     * @example
     * // Create one Upvote
     * const Upvote = await prisma.upvote.create({
     *   data: {
     *     // ... data to create a Upvote
     *   }
     * })
     * 
     */
    create<T extends UpvoteCreateArgs>(args: SelectSubset<T, UpvoteCreateArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Upvotes.
     * @param {UpvoteCreateManyArgs} args - Arguments to create many Upvotes.
     * @example
     * // Create many Upvotes
     * const upvote = await prisma.upvote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpvoteCreateManyArgs>(args?: SelectSubset<T, UpvoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Upvotes and returns the data saved in the database.
     * @param {UpvoteCreateManyAndReturnArgs} args - Arguments to create many Upvotes.
     * @example
     * // Create many Upvotes
     * const upvote = await prisma.upvote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Upvotes and only return the `id`
     * const upvoteWithIdOnly = await prisma.upvote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpvoteCreateManyAndReturnArgs>(args?: SelectSubset<T, UpvoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Upvote.
     * @param {UpvoteDeleteArgs} args - Arguments to delete one Upvote.
     * @example
     * // Delete one Upvote
     * const Upvote = await prisma.upvote.delete({
     *   where: {
     *     // ... filter to delete one Upvote
     *   }
     * })
     * 
     */
    delete<T extends UpvoteDeleteArgs>(args: SelectSubset<T, UpvoteDeleteArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Upvote.
     * @param {UpvoteUpdateArgs} args - Arguments to update one Upvote.
     * @example
     * // Update one Upvote
     * const upvote = await prisma.upvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpvoteUpdateArgs>(args: SelectSubset<T, UpvoteUpdateArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Upvotes.
     * @param {UpvoteDeleteManyArgs} args - Arguments to filter Upvotes to delete.
     * @example
     * // Delete a few Upvotes
     * const { count } = await prisma.upvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpvoteDeleteManyArgs>(args?: SelectSubset<T, UpvoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Upvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Upvotes
     * const upvote = await prisma.upvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpvoteUpdateManyArgs>(args: SelectSubset<T, UpvoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Upvotes and returns the data updated in the database.
     * @param {UpvoteUpdateManyAndReturnArgs} args - Arguments to update many Upvotes.
     * @example
     * // Update many Upvotes
     * const upvote = await prisma.upvote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Upvotes and only return the `id`
     * const upvoteWithIdOnly = await prisma.upvote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UpvoteUpdateManyAndReturnArgs>(args: SelectSubset<T, UpvoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Upvote.
     * @param {UpvoteUpsertArgs} args - Arguments to update or create a Upvote.
     * @example
     * // Update or create a Upvote
     * const upvote = await prisma.upvote.upsert({
     *   create: {
     *     // ... data to create a Upvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Upvote we want to update
     *   }
     * })
     */
    upsert<T extends UpvoteUpsertArgs>(args: SelectSubset<T, UpvoteUpsertArgs<ExtArgs>>): Prisma__UpvoteClient<$Result.GetResult<Prisma.$UpvotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Upvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteCountArgs} args - Arguments to filter Upvotes to count.
     * @example
     * // Count the number of Upvotes
     * const count = await prisma.upvote.count({
     *   where: {
     *     // ... the filter for the Upvotes we want to count
     *   }
     * })
    **/
    count<T extends UpvoteCountArgs>(
      args?: Subset<T, UpvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Upvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UpvoteAggregateArgs>(args: Subset<T, UpvoteAggregateArgs>): Prisma.PrismaPromise<GetUpvoteAggregateType<T>>

    /**
     * Group by Upvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UpvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpvoteGroupByArgs['orderBy'] }
        : { orderBy?: UpvoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UpvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Upvote model
   */
  readonly fields: UpvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Upvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Upvote model
   */
  interface UpvoteFieldRefs {
    readonly id: FieldRef<"Upvote", 'Int'>
    readonly blogId: FieldRef<"Upvote", 'Int'>
    readonly userId: FieldRef<"Upvote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Upvote findUnique
   */
  export type UpvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where: UpvoteWhereUniqueInput
  }

  /**
   * Upvote findUniqueOrThrow
   */
  export type UpvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where: UpvoteWhereUniqueInput
  }

  /**
   * Upvote findFirst
   */
  export type UpvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upvotes.
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upvotes.
     */
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }

  /**
   * Upvote findFirstOrThrow
   */
  export type UpvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvote to fetch.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upvotes.
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upvotes.
     */
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }

  /**
   * Upvote findMany
   */
  export type UpvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter, which Upvotes to fetch.
     */
    where?: UpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvoteOrderByWithRelationInput | UpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Upvotes.
     */
    cursor?: UpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    distinct?: UpvoteScalarFieldEnum | UpvoteScalarFieldEnum[]
  }

  /**
   * Upvote create
   */
  export type UpvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Upvote.
     */
    data: XOR<UpvoteCreateInput, UpvoteUncheckedCreateInput>
  }

  /**
   * Upvote createMany
   */
  export type UpvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Upvotes.
     */
    data: UpvoteCreateManyInput | UpvoteCreateManyInput[]
  }

  /**
   * Upvote createManyAndReturn
   */
  export type UpvoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * The data used to create many Upvotes.
     */
    data: UpvoteCreateManyInput | UpvoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Upvote update
   */
  export type UpvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Upvote.
     */
    data: XOR<UpvoteUpdateInput, UpvoteUncheckedUpdateInput>
    /**
     * Choose, which Upvote to update.
     */
    where: UpvoteWhereUniqueInput
  }

  /**
   * Upvote updateMany
   */
  export type UpvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Upvotes.
     */
    data: XOR<UpvoteUpdateManyMutationInput, UpvoteUncheckedUpdateManyInput>
    /**
     * Filter which Upvotes to update
     */
    where?: UpvoteWhereInput
    /**
     * Limit how many Upvotes to update.
     */
    limit?: number
  }

  /**
   * Upvote updateManyAndReturn
   */
  export type UpvoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * The data used to update Upvotes.
     */
    data: XOR<UpvoteUpdateManyMutationInput, UpvoteUncheckedUpdateManyInput>
    /**
     * Filter which Upvotes to update
     */
    where?: UpvoteWhereInput
    /**
     * Limit how many Upvotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Upvote upsert
   */
  export type UpvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Upvote to update in case it exists.
     */
    where: UpvoteWhereUniqueInput
    /**
     * In case the Upvote found by the `where` argument doesn't exist, create a new Upvote with this data.
     */
    create: XOR<UpvoteCreateInput, UpvoteUncheckedCreateInput>
    /**
     * In case the Upvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpvoteUpdateInput, UpvoteUncheckedUpdateInput>
  }

  /**
   * Upvote delete
   */
  export type UpvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
    /**
     * Filter which Upvote to delete.
     */
    where: UpvoteWhereUniqueInput
  }

  /**
   * Upvote deleteMany
   */
  export type UpvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upvotes to delete
     */
    where?: UpvoteWhereInput
    /**
     * Limit how many Upvotes to delete.
     */
    limit?: number
  }

  /**
   * Upvote without action
   */
  export type UpvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvote
     */
    select?: UpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvote
     */
    omit?: UpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvoteInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    upvotes: number | null
    downvotes: number | null
    blogId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    upvotes: number | null
    downvotes: number | null
    blogId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    upvotes: number | null
    downvotes: number | null
    blogId: number | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    upvotes: number | null
    downvotes: number | null
    blogId: number | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    upvotes: number
    downvotes: number
    blogId: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    upvotes?: true
    downvotes?: true
    blogId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    upvotes?: true
    downvotes?: true
    blogId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    upvotes?: true
    downvotes?: true
    blogId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    upvotes?: true
    downvotes?: true
    blogId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    upvotes?: true
    downvotes?: true
    blogId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    content: string
    upvotes: number
    downvotes: number
    blogId: number
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    upvotes?: boolean
    downvotes?: boolean
    blogId?: boolean
    createdAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    upvotes?: boolean
    downvotes?: boolean
    blogId?: boolean
    createdAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    upvotes?: boolean
    downvotes?: boolean
    blogId?: boolean
    createdAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    upvotes?: boolean
    downvotes?: boolean
    blogId?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "upvotes" | "downvotes" | "blogId" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      upvotes: number
      downvotes: number
      blogId: number
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly upvotes: FieldRef<"Comment", 'Int'>
    readonly downvotes: FieldRef<"Comment", 'Int'>
    readonly blogId: FieldRef<"Comment", 'Int'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model CommentUpvote
   */

  export type AggregateCommentUpvote = {
    _count: CommentUpvoteCountAggregateOutputType | null
    _avg: CommentUpvoteAvgAggregateOutputType | null
    _sum: CommentUpvoteSumAggregateOutputType | null
    _min: CommentUpvoteMinAggregateOutputType | null
    _max: CommentUpvoteMaxAggregateOutputType | null
  }

  export type CommentUpvoteAvgAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
  }

  export type CommentUpvoteSumAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
  }

  export type CommentUpvoteMinAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
  }

  export type CommentUpvoteMaxAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
  }

  export type CommentUpvoteCountAggregateOutputType = {
    id: number
    commentId: number
    userId: number
    _all: number
  }


  export type CommentUpvoteAvgAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
  }

  export type CommentUpvoteSumAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
  }

  export type CommentUpvoteMinAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
  }

  export type CommentUpvoteMaxAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
  }

  export type CommentUpvoteCountAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    _all?: true
  }

  export type CommentUpvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentUpvote to aggregate.
     */
    where?: CommentUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentUpvotes to fetch.
     */
    orderBy?: CommentUpvoteOrderByWithRelationInput | CommentUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentUpvotes
    **/
    _count?: true | CommentUpvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentUpvoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentUpvoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentUpvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentUpvoteMaxAggregateInputType
  }

  export type GetCommentUpvoteAggregateType<T extends CommentUpvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentUpvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentUpvote[P]>
      : GetScalarType<T[P], AggregateCommentUpvote[P]>
  }




  export type CommentUpvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentUpvoteWhereInput
    orderBy?: CommentUpvoteOrderByWithAggregationInput | CommentUpvoteOrderByWithAggregationInput[]
    by: CommentUpvoteScalarFieldEnum[] | CommentUpvoteScalarFieldEnum
    having?: CommentUpvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentUpvoteCountAggregateInputType | true
    _avg?: CommentUpvoteAvgAggregateInputType
    _sum?: CommentUpvoteSumAggregateInputType
    _min?: CommentUpvoteMinAggregateInputType
    _max?: CommentUpvoteMaxAggregateInputType
  }

  export type CommentUpvoteGroupByOutputType = {
    id: number
    commentId: number
    userId: number
    _count: CommentUpvoteCountAggregateOutputType | null
    _avg: CommentUpvoteAvgAggregateOutputType | null
    _sum: CommentUpvoteSumAggregateOutputType | null
    _min: CommentUpvoteMinAggregateOutputType | null
    _max: CommentUpvoteMaxAggregateOutputType | null
  }

  type GetCommentUpvoteGroupByPayload<T extends CommentUpvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentUpvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentUpvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentUpvoteGroupByOutputType[P]>
            : GetScalarType<T[P], CommentUpvoteGroupByOutputType[P]>
        }
      >
    >


  export type CommentUpvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
  }, ExtArgs["result"]["commentUpvote"]>

  export type CommentUpvoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
  }, ExtArgs["result"]["commentUpvote"]>

  export type CommentUpvoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
  }, ExtArgs["result"]["commentUpvote"]>

  export type CommentUpvoteSelectScalar = {
    id?: boolean
    commentId?: boolean
    userId?: boolean
  }

  export type CommentUpvoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commentId" | "userId", ExtArgs["result"]["commentUpvote"]>

  export type $CommentUpvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentUpvote"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      commentId: number
      userId: number
    }, ExtArgs["result"]["commentUpvote"]>
    composites: {}
  }

  type CommentUpvoteGetPayload<S extends boolean | null | undefined | CommentUpvoteDefaultArgs> = $Result.GetResult<Prisma.$CommentUpvotePayload, S>

  type CommentUpvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentUpvoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentUpvoteCountAggregateInputType | true
    }

  export interface CommentUpvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentUpvote'], meta: { name: 'CommentUpvote' } }
    /**
     * Find zero or one CommentUpvote that matches the filter.
     * @param {CommentUpvoteFindUniqueArgs} args - Arguments to find a CommentUpvote
     * @example
     * // Get one CommentUpvote
     * const commentUpvote = await prisma.commentUpvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentUpvoteFindUniqueArgs>(args: SelectSubset<T, CommentUpvoteFindUniqueArgs<ExtArgs>>): Prisma__CommentUpvoteClient<$Result.GetResult<Prisma.$CommentUpvotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommentUpvote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentUpvoteFindUniqueOrThrowArgs} args - Arguments to find a CommentUpvote
     * @example
     * // Get one CommentUpvote
     * const commentUpvote = await prisma.commentUpvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentUpvoteFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentUpvoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentUpvoteClient<$Result.GetResult<Prisma.$CommentUpvotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentUpvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpvoteFindFirstArgs} args - Arguments to find a CommentUpvote
     * @example
     * // Get one CommentUpvote
     * const commentUpvote = await prisma.commentUpvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentUpvoteFindFirstArgs>(args?: SelectSubset<T, CommentUpvoteFindFirstArgs<ExtArgs>>): Prisma__CommentUpvoteClient<$Result.GetResult<Prisma.$CommentUpvotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentUpvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpvoteFindFirstOrThrowArgs} args - Arguments to find a CommentUpvote
     * @example
     * // Get one CommentUpvote
     * const commentUpvote = await prisma.commentUpvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentUpvoteFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentUpvoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentUpvoteClient<$Result.GetResult<Prisma.$CommentUpvotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommentUpvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpvoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentUpvotes
     * const commentUpvotes = await prisma.commentUpvote.findMany()
     * 
     * // Get first 10 CommentUpvotes
     * const commentUpvotes = await prisma.commentUpvote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentUpvoteWithIdOnly = await prisma.commentUpvote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentUpvoteFindManyArgs>(args?: SelectSubset<T, CommentUpvoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommentUpvote.
     * @param {CommentUpvoteCreateArgs} args - Arguments to create a CommentUpvote.
     * @example
     * // Create one CommentUpvote
     * const CommentUpvote = await prisma.commentUpvote.create({
     *   data: {
     *     // ... data to create a CommentUpvote
     *   }
     * })
     * 
     */
    create<T extends CommentUpvoteCreateArgs>(args: SelectSubset<T, CommentUpvoteCreateArgs<ExtArgs>>): Prisma__CommentUpvoteClient<$Result.GetResult<Prisma.$CommentUpvotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommentUpvotes.
     * @param {CommentUpvoteCreateManyArgs} args - Arguments to create many CommentUpvotes.
     * @example
     * // Create many CommentUpvotes
     * const commentUpvote = await prisma.commentUpvote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentUpvoteCreateManyArgs>(args?: SelectSubset<T, CommentUpvoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommentUpvotes and returns the data saved in the database.
     * @param {CommentUpvoteCreateManyAndReturnArgs} args - Arguments to create many CommentUpvotes.
     * @example
     * // Create many CommentUpvotes
     * const commentUpvote = await prisma.commentUpvote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommentUpvotes and only return the `id`
     * const commentUpvoteWithIdOnly = await prisma.commentUpvote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentUpvoteCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentUpvoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentUpvotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommentUpvote.
     * @param {CommentUpvoteDeleteArgs} args - Arguments to delete one CommentUpvote.
     * @example
     * // Delete one CommentUpvote
     * const CommentUpvote = await prisma.commentUpvote.delete({
     *   where: {
     *     // ... filter to delete one CommentUpvote
     *   }
     * })
     * 
     */
    delete<T extends CommentUpvoteDeleteArgs>(args: SelectSubset<T, CommentUpvoteDeleteArgs<ExtArgs>>): Prisma__CommentUpvoteClient<$Result.GetResult<Prisma.$CommentUpvotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommentUpvote.
     * @param {CommentUpvoteUpdateArgs} args - Arguments to update one CommentUpvote.
     * @example
     * // Update one CommentUpvote
     * const commentUpvote = await prisma.commentUpvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpvoteUpdateArgs>(args: SelectSubset<T, CommentUpvoteUpdateArgs<ExtArgs>>): Prisma__CommentUpvoteClient<$Result.GetResult<Prisma.$CommentUpvotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommentUpvotes.
     * @param {CommentUpvoteDeleteManyArgs} args - Arguments to filter CommentUpvotes to delete.
     * @example
     * // Delete a few CommentUpvotes
     * const { count } = await prisma.commentUpvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentUpvoteDeleteManyArgs>(args?: SelectSubset<T, CommentUpvoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentUpvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentUpvotes
     * const commentUpvote = await prisma.commentUpvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpvoteUpdateManyArgs>(args: SelectSubset<T, CommentUpvoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentUpvotes and returns the data updated in the database.
     * @param {CommentUpvoteUpdateManyAndReturnArgs} args - Arguments to update many CommentUpvotes.
     * @example
     * // Update many CommentUpvotes
     * const commentUpvote = await prisma.commentUpvote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommentUpvotes and only return the `id`
     * const commentUpvoteWithIdOnly = await prisma.commentUpvote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpvoteUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpvoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentUpvotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommentUpvote.
     * @param {CommentUpvoteUpsertArgs} args - Arguments to update or create a CommentUpvote.
     * @example
     * // Update or create a CommentUpvote
     * const commentUpvote = await prisma.commentUpvote.upsert({
     *   create: {
     *     // ... data to create a CommentUpvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentUpvote we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpvoteUpsertArgs>(args: SelectSubset<T, CommentUpvoteUpsertArgs<ExtArgs>>): Prisma__CommentUpvoteClient<$Result.GetResult<Prisma.$CommentUpvotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommentUpvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpvoteCountArgs} args - Arguments to filter CommentUpvotes to count.
     * @example
     * // Count the number of CommentUpvotes
     * const count = await prisma.commentUpvote.count({
     *   where: {
     *     // ... the filter for the CommentUpvotes we want to count
     *   }
     * })
    **/
    count<T extends CommentUpvoteCountArgs>(
      args?: Subset<T, CommentUpvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentUpvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentUpvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentUpvoteAggregateArgs>(args: Subset<T, CommentUpvoteAggregateArgs>): Prisma.PrismaPromise<GetCommentUpvoteAggregateType<T>>

    /**
     * Group by CommentUpvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpvoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentUpvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentUpvoteGroupByArgs['orderBy'] }
        : { orderBy?: CommentUpvoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentUpvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentUpvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentUpvote model
   */
  readonly fields: CommentUpvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentUpvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentUpvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommentUpvote model
   */
  interface CommentUpvoteFieldRefs {
    readonly id: FieldRef<"CommentUpvote", 'Int'>
    readonly commentId: FieldRef<"CommentUpvote", 'Int'>
    readonly userId: FieldRef<"CommentUpvote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CommentUpvote findUnique
   */
  export type CommentUpvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentUpvote to fetch.
     */
    where: CommentUpvoteWhereUniqueInput
  }

  /**
   * CommentUpvote findUniqueOrThrow
   */
  export type CommentUpvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentUpvote to fetch.
     */
    where: CommentUpvoteWhereUniqueInput
  }

  /**
   * CommentUpvote findFirst
   */
  export type CommentUpvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentUpvote to fetch.
     */
    where?: CommentUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentUpvotes to fetch.
     */
    orderBy?: CommentUpvoteOrderByWithRelationInput | CommentUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentUpvotes.
     */
    cursor?: CommentUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentUpvotes.
     */
    distinct?: CommentUpvoteScalarFieldEnum | CommentUpvoteScalarFieldEnum[]
  }

  /**
   * CommentUpvote findFirstOrThrow
   */
  export type CommentUpvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentUpvote to fetch.
     */
    where?: CommentUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentUpvotes to fetch.
     */
    orderBy?: CommentUpvoteOrderByWithRelationInput | CommentUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentUpvotes.
     */
    cursor?: CommentUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentUpvotes.
     */
    distinct?: CommentUpvoteScalarFieldEnum | CommentUpvoteScalarFieldEnum[]
  }

  /**
   * CommentUpvote findMany
   */
  export type CommentUpvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentUpvotes to fetch.
     */
    where?: CommentUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentUpvotes to fetch.
     */
    orderBy?: CommentUpvoteOrderByWithRelationInput | CommentUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentUpvotes.
     */
    cursor?: CommentUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentUpvotes.
     */
    skip?: number
    distinct?: CommentUpvoteScalarFieldEnum | CommentUpvoteScalarFieldEnum[]
  }

  /**
   * CommentUpvote create
   */
  export type CommentUpvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
    /**
     * The data needed to create a CommentUpvote.
     */
    data: XOR<CommentUpvoteCreateInput, CommentUpvoteUncheckedCreateInput>
  }

  /**
   * CommentUpvote createMany
   */
  export type CommentUpvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentUpvotes.
     */
    data: CommentUpvoteCreateManyInput | CommentUpvoteCreateManyInput[]
  }

  /**
   * CommentUpvote createManyAndReturn
   */
  export type CommentUpvoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
    /**
     * The data used to create many CommentUpvotes.
     */
    data: CommentUpvoteCreateManyInput | CommentUpvoteCreateManyInput[]
  }

  /**
   * CommentUpvote update
   */
  export type CommentUpvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
    /**
     * The data needed to update a CommentUpvote.
     */
    data: XOR<CommentUpvoteUpdateInput, CommentUpvoteUncheckedUpdateInput>
    /**
     * Choose, which CommentUpvote to update.
     */
    where: CommentUpvoteWhereUniqueInput
  }

  /**
   * CommentUpvote updateMany
   */
  export type CommentUpvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentUpvotes.
     */
    data: XOR<CommentUpvoteUpdateManyMutationInput, CommentUpvoteUncheckedUpdateManyInput>
    /**
     * Filter which CommentUpvotes to update
     */
    where?: CommentUpvoteWhereInput
    /**
     * Limit how many CommentUpvotes to update.
     */
    limit?: number
  }

  /**
   * CommentUpvote updateManyAndReturn
   */
  export type CommentUpvoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
    /**
     * The data used to update CommentUpvotes.
     */
    data: XOR<CommentUpvoteUpdateManyMutationInput, CommentUpvoteUncheckedUpdateManyInput>
    /**
     * Filter which CommentUpvotes to update
     */
    where?: CommentUpvoteWhereInput
    /**
     * Limit how many CommentUpvotes to update.
     */
    limit?: number
  }

  /**
   * CommentUpvote upsert
   */
  export type CommentUpvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
    /**
     * The filter to search for the CommentUpvote to update in case it exists.
     */
    where: CommentUpvoteWhereUniqueInput
    /**
     * In case the CommentUpvote found by the `where` argument doesn't exist, create a new CommentUpvote with this data.
     */
    create: XOR<CommentUpvoteCreateInput, CommentUpvoteUncheckedCreateInput>
    /**
     * In case the CommentUpvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpvoteUpdateInput, CommentUpvoteUncheckedUpdateInput>
  }

  /**
   * CommentUpvote delete
   */
  export type CommentUpvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
    /**
     * Filter which CommentUpvote to delete.
     */
    where: CommentUpvoteWhereUniqueInput
  }

  /**
   * CommentUpvote deleteMany
   */
  export type CommentUpvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentUpvotes to delete
     */
    where?: CommentUpvoteWhereInput
    /**
     * Limit how many CommentUpvotes to delete.
     */
    limit?: number
  }

  /**
   * CommentUpvote without action
   */
  export type CommentUpvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentUpvote
     */
    select?: CommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentUpvote
     */
    omit?: CommentUpvoteOmit<ExtArgs> | null
  }


  /**
   * Model CommentDownvote
   */

  export type AggregateCommentDownvote = {
    _count: CommentDownvoteCountAggregateOutputType | null
    _avg: CommentDownvoteAvgAggregateOutputType | null
    _sum: CommentDownvoteSumAggregateOutputType | null
    _min: CommentDownvoteMinAggregateOutputType | null
    _max: CommentDownvoteMaxAggregateOutputType | null
  }

  export type CommentDownvoteAvgAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
  }

  export type CommentDownvoteSumAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
  }

  export type CommentDownvoteMinAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
  }

  export type CommentDownvoteMaxAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
  }

  export type CommentDownvoteCountAggregateOutputType = {
    id: number
    commentId: number
    userId: number
    _all: number
  }


  export type CommentDownvoteAvgAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
  }

  export type CommentDownvoteSumAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
  }

  export type CommentDownvoteMinAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
  }

  export type CommentDownvoteMaxAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
  }

  export type CommentDownvoteCountAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    _all?: true
  }

  export type CommentDownvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentDownvote to aggregate.
     */
    where?: CommentDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentDownvotes to fetch.
     */
    orderBy?: CommentDownvoteOrderByWithRelationInput | CommentDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentDownvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentDownvotes
    **/
    _count?: true | CommentDownvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentDownvoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentDownvoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentDownvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentDownvoteMaxAggregateInputType
  }

  export type GetCommentDownvoteAggregateType<T extends CommentDownvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentDownvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentDownvote[P]>
      : GetScalarType<T[P], AggregateCommentDownvote[P]>
  }




  export type CommentDownvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentDownvoteWhereInput
    orderBy?: CommentDownvoteOrderByWithAggregationInput | CommentDownvoteOrderByWithAggregationInput[]
    by: CommentDownvoteScalarFieldEnum[] | CommentDownvoteScalarFieldEnum
    having?: CommentDownvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentDownvoteCountAggregateInputType | true
    _avg?: CommentDownvoteAvgAggregateInputType
    _sum?: CommentDownvoteSumAggregateInputType
    _min?: CommentDownvoteMinAggregateInputType
    _max?: CommentDownvoteMaxAggregateInputType
  }

  export type CommentDownvoteGroupByOutputType = {
    id: number
    commentId: number
    userId: number
    _count: CommentDownvoteCountAggregateOutputType | null
    _avg: CommentDownvoteAvgAggregateOutputType | null
    _sum: CommentDownvoteSumAggregateOutputType | null
    _min: CommentDownvoteMinAggregateOutputType | null
    _max: CommentDownvoteMaxAggregateOutputType | null
  }

  type GetCommentDownvoteGroupByPayload<T extends CommentDownvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentDownvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentDownvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentDownvoteGroupByOutputType[P]>
            : GetScalarType<T[P], CommentDownvoteGroupByOutputType[P]>
        }
      >
    >


  export type CommentDownvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
  }, ExtArgs["result"]["commentDownvote"]>

  export type CommentDownvoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
  }, ExtArgs["result"]["commentDownvote"]>

  export type CommentDownvoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
  }, ExtArgs["result"]["commentDownvote"]>

  export type CommentDownvoteSelectScalar = {
    id?: boolean
    commentId?: boolean
    userId?: boolean
  }

  export type CommentDownvoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commentId" | "userId", ExtArgs["result"]["commentDownvote"]>

  export type $CommentDownvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentDownvote"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      commentId: number
      userId: number
    }, ExtArgs["result"]["commentDownvote"]>
    composites: {}
  }

  type CommentDownvoteGetPayload<S extends boolean | null | undefined | CommentDownvoteDefaultArgs> = $Result.GetResult<Prisma.$CommentDownvotePayload, S>

  type CommentDownvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentDownvoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentDownvoteCountAggregateInputType | true
    }

  export interface CommentDownvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentDownvote'], meta: { name: 'CommentDownvote' } }
    /**
     * Find zero or one CommentDownvote that matches the filter.
     * @param {CommentDownvoteFindUniqueArgs} args - Arguments to find a CommentDownvote
     * @example
     * // Get one CommentDownvote
     * const commentDownvote = await prisma.commentDownvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentDownvoteFindUniqueArgs>(args: SelectSubset<T, CommentDownvoteFindUniqueArgs<ExtArgs>>): Prisma__CommentDownvoteClient<$Result.GetResult<Prisma.$CommentDownvotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommentDownvote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentDownvoteFindUniqueOrThrowArgs} args - Arguments to find a CommentDownvote
     * @example
     * // Get one CommentDownvote
     * const commentDownvote = await prisma.commentDownvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentDownvoteFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentDownvoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentDownvoteClient<$Result.GetResult<Prisma.$CommentDownvotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentDownvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentDownvoteFindFirstArgs} args - Arguments to find a CommentDownvote
     * @example
     * // Get one CommentDownvote
     * const commentDownvote = await prisma.commentDownvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentDownvoteFindFirstArgs>(args?: SelectSubset<T, CommentDownvoteFindFirstArgs<ExtArgs>>): Prisma__CommentDownvoteClient<$Result.GetResult<Prisma.$CommentDownvotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentDownvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentDownvoteFindFirstOrThrowArgs} args - Arguments to find a CommentDownvote
     * @example
     * // Get one CommentDownvote
     * const commentDownvote = await prisma.commentDownvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentDownvoteFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentDownvoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentDownvoteClient<$Result.GetResult<Prisma.$CommentDownvotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommentDownvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentDownvoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentDownvotes
     * const commentDownvotes = await prisma.commentDownvote.findMany()
     * 
     * // Get first 10 CommentDownvotes
     * const commentDownvotes = await prisma.commentDownvote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentDownvoteWithIdOnly = await prisma.commentDownvote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentDownvoteFindManyArgs>(args?: SelectSubset<T, CommentDownvoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentDownvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommentDownvote.
     * @param {CommentDownvoteCreateArgs} args - Arguments to create a CommentDownvote.
     * @example
     * // Create one CommentDownvote
     * const CommentDownvote = await prisma.commentDownvote.create({
     *   data: {
     *     // ... data to create a CommentDownvote
     *   }
     * })
     * 
     */
    create<T extends CommentDownvoteCreateArgs>(args: SelectSubset<T, CommentDownvoteCreateArgs<ExtArgs>>): Prisma__CommentDownvoteClient<$Result.GetResult<Prisma.$CommentDownvotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommentDownvotes.
     * @param {CommentDownvoteCreateManyArgs} args - Arguments to create many CommentDownvotes.
     * @example
     * // Create many CommentDownvotes
     * const commentDownvote = await prisma.commentDownvote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentDownvoteCreateManyArgs>(args?: SelectSubset<T, CommentDownvoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommentDownvotes and returns the data saved in the database.
     * @param {CommentDownvoteCreateManyAndReturnArgs} args - Arguments to create many CommentDownvotes.
     * @example
     * // Create many CommentDownvotes
     * const commentDownvote = await prisma.commentDownvote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommentDownvotes and only return the `id`
     * const commentDownvoteWithIdOnly = await prisma.commentDownvote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentDownvoteCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentDownvoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentDownvotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommentDownvote.
     * @param {CommentDownvoteDeleteArgs} args - Arguments to delete one CommentDownvote.
     * @example
     * // Delete one CommentDownvote
     * const CommentDownvote = await prisma.commentDownvote.delete({
     *   where: {
     *     // ... filter to delete one CommentDownvote
     *   }
     * })
     * 
     */
    delete<T extends CommentDownvoteDeleteArgs>(args: SelectSubset<T, CommentDownvoteDeleteArgs<ExtArgs>>): Prisma__CommentDownvoteClient<$Result.GetResult<Prisma.$CommentDownvotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommentDownvote.
     * @param {CommentDownvoteUpdateArgs} args - Arguments to update one CommentDownvote.
     * @example
     * // Update one CommentDownvote
     * const commentDownvote = await prisma.commentDownvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentDownvoteUpdateArgs>(args: SelectSubset<T, CommentDownvoteUpdateArgs<ExtArgs>>): Prisma__CommentDownvoteClient<$Result.GetResult<Prisma.$CommentDownvotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommentDownvotes.
     * @param {CommentDownvoteDeleteManyArgs} args - Arguments to filter CommentDownvotes to delete.
     * @example
     * // Delete a few CommentDownvotes
     * const { count } = await prisma.commentDownvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDownvoteDeleteManyArgs>(args?: SelectSubset<T, CommentDownvoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentDownvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentDownvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentDownvotes
     * const commentDownvote = await prisma.commentDownvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentDownvoteUpdateManyArgs>(args: SelectSubset<T, CommentDownvoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentDownvotes and returns the data updated in the database.
     * @param {CommentDownvoteUpdateManyAndReturnArgs} args - Arguments to update many CommentDownvotes.
     * @example
     * // Update many CommentDownvotes
     * const commentDownvote = await prisma.commentDownvote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommentDownvotes and only return the `id`
     * const commentDownvoteWithIdOnly = await prisma.commentDownvote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentDownvoteUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentDownvoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentDownvotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommentDownvote.
     * @param {CommentDownvoteUpsertArgs} args - Arguments to update or create a CommentDownvote.
     * @example
     * // Update or create a CommentDownvote
     * const commentDownvote = await prisma.commentDownvote.upsert({
     *   create: {
     *     // ... data to create a CommentDownvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentDownvote we want to update
     *   }
     * })
     */
    upsert<T extends CommentDownvoteUpsertArgs>(args: SelectSubset<T, CommentDownvoteUpsertArgs<ExtArgs>>): Prisma__CommentDownvoteClient<$Result.GetResult<Prisma.$CommentDownvotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommentDownvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentDownvoteCountArgs} args - Arguments to filter CommentDownvotes to count.
     * @example
     * // Count the number of CommentDownvotes
     * const count = await prisma.commentDownvote.count({
     *   where: {
     *     // ... the filter for the CommentDownvotes we want to count
     *   }
     * })
    **/
    count<T extends CommentDownvoteCountArgs>(
      args?: Subset<T, CommentDownvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentDownvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentDownvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentDownvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentDownvoteAggregateArgs>(args: Subset<T, CommentDownvoteAggregateArgs>): Prisma.PrismaPromise<GetCommentDownvoteAggregateType<T>>

    /**
     * Group by CommentDownvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentDownvoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentDownvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentDownvoteGroupByArgs['orderBy'] }
        : { orderBy?: CommentDownvoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentDownvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentDownvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentDownvote model
   */
  readonly fields: CommentDownvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentDownvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentDownvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommentDownvote model
   */
  interface CommentDownvoteFieldRefs {
    readonly id: FieldRef<"CommentDownvote", 'Int'>
    readonly commentId: FieldRef<"CommentDownvote", 'Int'>
    readonly userId: FieldRef<"CommentDownvote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CommentDownvote findUnique
   */
  export type CommentDownvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentDownvote to fetch.
     */
    where: CommentDownvoteWhereUniqueInput
  }

  /**
   * CommentDownvote findUniqueOrThrow
   */
  export type CommentDownvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentDownvote to fetch.
     */
    where: CommentDownvoteWhereUniqueInput
  }

  /**
   * CommentDownvote findFirst
   */
  export type CommentDownvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentDownvote to fetch.
     */
    where?: CommentDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentDownvotes to fetch.
     */
    orderBy?: CommentDownvoteOrderByWithRelationInput | CommentDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentDownvotes.
     */
    cursor?: CommentDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentDownvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentDownvotes.
     */
    distinct?: CommentDownvoteScalarFieldEnum | CommentDownvoteScalarFieldEnum[]
  }

  /**
   * CommentDownvote findFirstOrThrow
   */
  export type CommentDownvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentDownvote to fetch.
     */
    where?: CommentDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentDownvotes to fetch.
     */
    orderBy?: CommentDownvoteOrderByWithRelationInput | CommentDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentDownvotes.
     */
    cursor?: CommentDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentDownvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentDownvotes.
     */
    distinct?: CommentDownvoteScalarFieldEnum | CommentDownvoteScalarFieldEnum[]
  }

  /**
   * CommentDownvote findMany
   */
  export type CommentDownvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentDownvotes to fetch.
     */
    where?: CommentDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentDownvotes to fetch.
     */
    orderBy?: CommentDownvoteOrderByWithRelationInput | CommentDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentDownvotes.
     */
    cursor?: CommentDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentDownvotes.
     */
    skip?: number
    distinct?: CommentDownvoteScalarFieldEnum | CommentDownvoteScalarFieldEnum[]
  }

  /**
   * CommentDownvote create
   */
  export type CommentDownvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
    /**
     * The data needed to create a CommentDownvote.
     */
    data: XOR<CommentDownvoteCreateInput, CommentDownvoteUncheckedCreateInput>
  }

  /**
   * CommentDownvote createMany
   */
  export type CommentDownvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentDownvotes.
     */
    data: CommentDownvoteCreateManyInput | CommentDownvoteCreateManyInput[]
  }

  /**
   * CommentDownvote createManyAndReturn
   */
  export type CommentDownvoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
    /**
     * The data used to create many CommentDownvotes.
     */
    data: CommentDownvoteCreateManyInput | CommentDownvoteCreateManyInput[]
  }

  /**
   * CommentDownvote update
   */
  export type CommentDownvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
    /**
     * The data needed to update a CommentDownvote.
     */
    data: XOR<CommentDownvoteUpdateInput, CommentDownvoteUncheckedUpdateInput>
    /**
     * Choose, which CommentDownvote to update.
     */
    where: CommentDownvoteWhereUniqueInput
  }

  /**
   * CommentDownvote updateMany
   */
  export type CommentDownvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentDownvotes.
     */
    data: XOR<CommentDownvoteUpdateManyMutationInput, CommentDownvoteUncheckedUpdateManyInput>
    /**
     * Filter which CommentDownvotes to update
     */
    where?: CommentDownvoteWhereInput
    /**
     * Limit how many CommentDownvotes to update.
     */
    limit?: number
  }

  /**
   * CommentDownvote updateManyAndReturn
   */
  export type CommentDownvoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
    /**
     * The data used to update CommentDownvotes.
     */
    data: XOR<CommentDownvoteUpdateManyMutationInput, CommentDownvoteUncheckedUpdateManyInput>
    /**
     * Filter which CommentDownvotes to update
     */
    where?: CommentDownvoteWhereInput
    /**
     * Limit how many CommentDownvotes to update.
     */
    limit?: number
  }

  /**
   * CommentDownvote upsert
   */
  export type CommentDownvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
    /**
     * The filter to search for the CommentDownvote to update in case it exists.
     */
    where: CommentDownvoteWhereUniqueInput
    /**
     * In case the CommentDownvote found by the `where` argument doesn't exist, create a new CommentDownvote with this data.
     */
    create: XOR<CommentDownvoteCreateInput, CommentDownvoteUncheckedCreateInput>
    /**
     * In case the CommentDownvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentDownvoteUpdateInput, CommentDownvoteUncheckedUpdateInput>
  }

  /**
   * CommentDownvote delete
   */
  export type CommentDownvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
    /**
     * Filter which CommentDownvote to delete.
     */
    where: CommentDownvoteWhereUniqueInput
  }

  /**
   * CommentDownvote deleteMany
   */
  export type CommentDownvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentDownvotes to delete
     */
    where?: CommentDownvoteWhereInput
    /**
     * Limit how many CommentDownvotes to delete.
     */
    limit?: number
  }

  /**
   * CommentDownvote without action
   */
  export type CommentDownvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentDownvote
     */
    select?: CommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentDownvote
     */
    omit?: CommentDownvoteOmit<ExtArgs> | null
  }


  /**
   * Model ForumThread
   */

  export type AggregateForumThread = {
    _count: ForumThreadCountAggregateOutputType | null
    _avg: ForumThreadAvgAggregateOutputType | null
    _sum: ForumThreadSumAggregateOutputType | null
    _min: ForumThreadMinAggregateOutputType | null
    _max: ForumThreadMaxAggregateOutputType | null
  }

  export type ForumThreadAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    upvotes: number | null
    downvotes: number | null
  }

  export type ForumThreadSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    upvotes: number | null
    downvotes: number | null
  }

  export type ForumThreadMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    authorId: number | null
    createdAt: Date | null
    upvotes: number | null
    downvotes: number | null
  }

  export type ForumThreadMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    authorId: number | null
    createdAt: Date | null
    upvotes: number | null
    downvotes: number | null
  }

  export type ForumThreadCountAggregateOutputType = {
    id: number
    title: number
    content: number
    authorId: number
    createdAt: number
    upvotes: number
    downvotes: number
    _all: number
  }


  export type ForumThreadAvgAggregateInputType = {
    id?: true
    authorId?: true
    upvotes?: true
    downvotes?: true
  }

  export type ForumThreadSumAggregateInputType = {
    id?: true
    authorId?: true
    upvotes?: true
    downvotes?: true
  }

  export type ForumThreadMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    createdAt?: true
    upvotes?: true
    downvotes?: true
  }

  export type ForumThreadMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    createdAt?: true
    upvotes?: true
    downvotes?: true
  }

  export type ForumThreadCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    createdAt?: true
    upvotes?: true
    downvotes?: true
    _all?: true
  }

  export type ForumThreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumThread to aggregate.
     */
    where?: ForumThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreads to fetch.
     */
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumThreads
    **/
    _count?: true | ForumThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumThreadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumThreadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumThreadMaxAggregateInputType
  }

  export type GetForumThreadAggregateType<T extends ForumThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateForumThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumThread[P]>
      : GetScalarType<T[P], AggregateForumThread[P]>
  }




  export type ForumThreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumThreadWhereInput
    orderBy?: ForumThreadOrderByWithAggregationInput | ForumThreadOrderByWithAggregationInput[]
    by: ForumThreadScalarFieldEnum[] | ForumThreadScalarFieldEnum
    having?: ForumThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumThreadCountAggregateInputType | true
    _avg?: ForumThreadAvgAggregateInputType
    _sum?: ForumThreadSumAggregateInputType
    _min?: ForumThreadMinAggregateInputType
    _max?: ForumThreadMaxAggregateInputType
  }

  export type ForumThreadGroupByOutputType = {
    id: number
    title: string
    content: string
    authorId: number
    createdAt: Date
    upvotes: number
    downvotes: number
    _count: ForumThreadCountAggregateOutputType | null
    _avg: ForumThreadAvgAggregateOutputType | null
    _sum: ForumThreadSumAggregateOutputType | null
    _min: ForumThreadMinAggregateOutputType | null
    _max: ForumThreadMaxAggregateOutputType | null
  }

  type GetForumThreadGroupByPayload<T extends ForumThreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumThreadGroupByOutputType[P]>
            : GetScalarType<T[P], ForumThreadGroupByOutputType[P]>
        }
      >
    >


  export type ForumThreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | ForumThread$commentsArgs<ExtArgs>
    upvotesRelation?: boolean | ForumThread$upvotesRelationArgs<ExtArgs>
    downvotesRelation?: boolean | ForumThread$downvotesRelationArgs<ExtArgs>
    _count?: boolean | ForumThreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumThread"]>

  export type ForumThreadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumThread"]>

  export type ForumThreadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumThread"]>

  export type ForumThreadSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
  }

  export type ForumThreadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "authorId" | "createdAt" | "upvotes" | "downvotes", ExtArgs["result"]["forumThread"]>
  export type ForumThreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | ForumThread$commentsArgs<ExtArgs>
    upvotesRelation?: boolean | ForumThread$upvotesRelationArgs<ExtArgs>
    downvotesRelation?: boolean | ForumThread$downvotesRelationArgs<ExtArgs>
    _count?: boolean | ForumThreadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumThreadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ForumThreadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ForumThreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumThread"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$ForumCommentPayload<ExtArgs>[]
      upvotesRelation: Prisma.$ForumThreadUpvotePayload<ExtArgs>[]
      downvotesRelation: Prisma.$ForumThreadDownvotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      authorId: number
      createdAt: Date
      upvotes: number
      downvotes: number
    }, ExtArgs["result"]["forumThread"]>
    composites: {}
  }

  type ForumThreadGetPayload<S extends boolean | null | undefined | ForumThreadDefaultArgs> = $Result.GetResult<Prisma.$ForumThreadPayload, S>

  type ForumThreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumThreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumThreadCountAggregateInputType | true
    }

  export interface ForumThreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumThread'], meta: { name: 'ForumThread' } }
    /**
     * Find zero or one ForumThread that matches the filter.
     * @param {ForumThreadFindUniqueArgs} args - Arguments to find a ForumThread
     * @example
     * // Get one ForumThread
     * const forumThread = await prisma.forumThread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumThreadFindUniqueArgs>(args: SelectSubset<T, ForumThreadFindUniqueArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumThread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumThreadFindUniqueOrThrowArgs} args - Arguments to find a ForumThread
     * @example
     * // Get one ForumThread
     * const forumThread = await prisma.forumThread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumThreadFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumThreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumThread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadFindFirstArgs} args - Arguments to find a ForumThread
     * @example
     * // Get one ForumThread
     * const forumThread = await prisma.forumThread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumThreadFindFirstArgs>(args?: SelectSubset<T, ForumThreadFindFirstArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumThread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadFindFirstOrThrowArgs} args - Arguments to find a ForumThread
     * @example
     * // Get one ForumThread
     * const forumThread = await prisma.forumThread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumThreadFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumThreadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumThreads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumThreads
     * const forumThreads = await prisma.forumThread.findMany()
     * 
     * // Get first 10 ForumThreads
     * const forumThreads = await prisma.forumThread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumThreadWithIdOnly = await prisma.forumThread.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumThreadFindManyArgs>(args?: SelectSubset<T, ForumThreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumThread.
     * @param {ForumThreadCreateArgs} args - Arguments to create a ForumThread.
     * @example
     * // Create one ForumThread
     * const ForumThread = await prisma.forumThread.create({
     *   data: {
     *     // ... data to create a ForumThread
     *   }
     * })
     * 
     */
    create<T extends ForumThreadCreateArgs>(args: SelectSubset<T, ForumThreadCreateArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumThreads.
     * @param {ForumThreadCreateManyArgs} args - Arguments to create many ForumThreads.
     * @example
     * // Create many ForumThreads
     * const forumThread = await prisma.forumThread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumThreadCreateManyArgs>(args?: SelectSubset<T, ForumThreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumThreads and returns the data saved in the database.
     * @param {ForumThreadCreateManyAndReturnArgs} args - Arguments to create many ForumThreads.
     * @example
     * // Create many ForumThreads
     * const forumThread = await prisma.forumThread.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumThreads and only return the `id`
     * const forumThreadWithIdOnly = await prisma.forumThread.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumThreadCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumThreadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumThread.
     * @param {ForumThreadDeleteArgs} args - Arguments to delete one ForumThread.
     * @example
     * // Delete one ForumThread
     * const ForumThread = await prisma.forumThread.delete({
     *   where: {
     *     // ... filter to delete one ForumThread
     *   }
     * })
     * 
     */
    delete<T extends ForumThreadDeleteArgs>(args: SelectSubset<T, ForumThreadDeleteArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumThread.
     * @param {ForumThreadUpdateArgs} args - Arguments to update one ForumThread.
     * @example
     * // Update one ForumThread
     * const forumThread = await prisma.forumThread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumThreadUpdateArgs>(args: SelectSubset<T, ForumThreadUpdateArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumThreads.
     * @param {ForumThreadDeleteManyArgs} args - Arguments to filter ForumThreads to delete.
     * @example
     * // Delete a few ForumThreads
     * const { count } = await prisma.forumThread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumThreadDeleteManyArgs>(args?: SelectSubset<T, ForumThreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumThreads
     * const forumThread = await prisma.forumThread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumThreadUpdateManyArgs>(args: SelectSubset<T, ForumThreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumThreads and returns the data updated in the database.
     * @param {ForumThreadUpdateManyAndReturnArgs} args - Arguments to update many ForumThreads.
     * @example
     * // Update many ForumThreads
     * const forumThread = await prisma.forumThread.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumThreads and only return the `id`
     * const forumThreadWithIdOnly = await prisma.forumThread.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumThreadUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumThreadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumThread.
     * @param {ForumThreadUpsertArgs} args - Arguments to update or create a ForumThread.
     * @example
     * // Update or create a ForumThread
     * const forumThread = await prisma.forumThread.upsert({
     *   create: {
     *     // ... data to create a ForumThread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumThread we want to update
     *   }
     * })
     */
    upsert<T extends ForumThreadUpsertArgs>(args: SelectSubset<T, ForumThreadUpsertArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadCountArgs} args - Arguments to filter ForumThreads to count.
     * @example
     * // Count the number of ForumThreads
     * const count = await prisma.forumThread.count({
     *   where: {
     *     // ... the filter for the ForumThreads we want to count
     *   }
     * })
    **/
    count<T extends ForumThreadCountArgs>(
      args?: Subset<T, ForumThreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumThreadAggregateArgs>(args: Subset<T, ForumThreadAggregateArgs>): Prisma.PrismaPromise<GetForumThreadAggregateType<T>>

    /**
     * Group by ForumThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumThreadGroupByArgs['orderBy'] }
        : { orderBy?: ForumThreadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumThread model
   */
  readonly fields: ForumThreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumThread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumThreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends ForumThread$commentsArgs<ExtArgs> = {}>(args?: Subset<T, ForumThread$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    upvotesRelation<T extends ForumThread$upvotesRelationArgs<ExtArgs> = {}>(args?: Subset<T, ForumThread$upvotesRelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    downvotesRelation<T extends ForumThread$downvotesRelationArgs<ExtArgs> = {}>(args?: Subset<T, ForumThread$downvotesRelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumThread model
   */
  interface ForumThreadFieldRefs {
    readonly id: FieldRef<"ForumThread", 'Int'>
    readonly title: FieldRef<"ForumThread", 'String'>
    readonly content: FieldRef<"ForumThread", 'String'>
    readonly authorId: FieldRef<"ForumThread", 'Int'>
    readonly createdAt: FieldRef<"ForumThread", 'DateTime'>
    readonly upvotes: FieldRef<"ForumThread", 'Int'>
    readonly downvotes: FieldRef<"ForumThread", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ForumThread findUnique
   */
  export type ForumThreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter, which ForumThread to fetch.
     */
    where: ForumThreadWhereUniqueInput
  }

  /**
   * ForumThread findUniqueOrThrow
   */
  export type ForumThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter, which ForumThread to fetch.
     */
    where: ForumThreadWhereUniqueInput
  }

  /**
   * ForumThread findFirst
   */
  export type ForumThreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter, which ForumThread to fetch.
     */
    where?: ForumThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreads to fetch.
     */
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumThreads.
     */
    cursor?: ForumThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumThreads.
     */
    distinct?: ForumThreadScalarFieldEnum | ForumThreadScalarFieldEnum[]
  }

  /**
   * ForumThread findFirstOrThrow
   */
  export type ForumThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter, which ForumThread to fetch.
     */
    where?: ForumThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreads to fetch.
     */
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumThreads.
     */
    cursor?: ForumThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumThreads.
     */
    distinct?: ForumThreadScalarFieldEnum | ForumThreadScalarFieldEnum[]
  }

  /**
   * ForumThread findMany
   */
  export type ForumThreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreads to fetch.
     */
    where?: ForumThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreads to fetch.
     */
    orderBy?: ForumThreadOrderByWithRelationInput | ForumThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumThreads.
     */
    cursor?: ForumThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreads.
     */
    skip?: number
    distinct?: ForumThreadScalarFieldEnum | ForumThreadScalarFieldEnum[]
  }

  /**
   * ForumThread create
   */
  export type ForumThreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumThread.
     */
    data: XOR<ForumThreadCreateInput, ForumThreadUncheckedCreateInput>
  }

  /**
   * ForumThread createMany
   */
  export type ForumThreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumThreads.
     */
    data: ForumThreadCreateManyInput | ForumThreadCreateManyInput[]
  }

  /**
   * ForumThread createManyAndReturn
   */
  export type ForumThreadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * The data used to create many ForumThreads.
     */
    data: ForumThreadCreateManyInput | ForumThreadCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumThread update
   */
  export type ForumThreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumThread.
     */
    data: XOR<ForumThreadUpdateInput, ForumThreadUncheckedUpdateInput>
    /**
     * Choose, which ForumThread to update.
     */
    where: ForumThreadWhereUniqueInput
  }

  /**
   * ForumThread updateMany
   */
  export type ForumThreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumThreads.
     */
    data: XOR<ForumThreadUpdateManyMutationInput, ForumThreadUncheckedUpdateManyInput>
    /**
     * Filter which ForumThreads to update
     */
    where?: ForumThreadWhereInput
    /**
     * Limit how many ForumThreads to update.
     */
    limit?: number
  }

  /**
   * ForumThread updateManyAndReturn
   */
  export type ForumThreadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * The data used to update ForumThreads.
     */
    data: XOR<ForumThreadUpdateManyMutationInput, ForumThreadUncheckedUpdateManyInput>
    /**
     * Filter which ForumThreads to update
     */
    where?: ForumThreadWhereInput
    /**
     * Limit how many ForumThreads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumThread upsert
   */
  export type ForumThreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumThread to update in case it exists.
     */
    where: ForumThreadWhereUniqueInput
    /**
     * In case the ForumThread found by the `where` argument doesn't exist, create a new ForumThread with this data.
     */
    create: XOR<ForumThreadCreateInput, ForumThreadUncheckedCreateInput>
    /**
     * In case the ForumThread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumThreadUpdateInput, ForumThreadUncheckedUpdateInput>
  }

  /**
   * ForumThread delete
   */
  export type ForumThreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    /**
     * Filter which ForumThread to delete.
     */
    where: ForumThreadWhereUniqueInput
  }

  /**
   * ForumThread deleteMany
   */
  export type ForumThreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumThreads to delete
     */
    where?: ForumThreadWhereInput
    /**
     * Limit how many ForumThreads to delete.
     */
    limit?: number
  }

  /**
   * ForumThread.comments
   */
  export type ForumThread$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    cursor?: ForumCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumThread.upvotesRelation
   */
  export type ForumThread$upvotesRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteInclude<ExtArgs> | null
    where?: ForumThreadUpvoteWhereInput
    orderBy?: ForumThreadUpvoteOrderByWithRelationInput | ForumThreadUpvoteOrderByWithRelationInput[]
    cursor?: ForumThreadUpvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumThreadUpvoteScalarFieldEnum | ForumThreadUpvoteScalarFieldEnum[]
  }

  /**
   * ForumThread.downvotesRelation
   */
  export type ForumThread$downvotesRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteInclude<ExtArgs> | null
    where?: ForumThreadDownvoteWhereInput
    orderBy?: ForumThreadDownvoteOrderByWithRelationInput | ForumThreadDownvoteOrderByWithRelationInput[]
    cursor?: ForumThreadDownvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumThreadDownvoteScalarFieldEnum | ForumThreadDownvoteScalarFieldEnum[]
  }

  /**
   * ForumThread without action
   */
  export type ForumThreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
  }


  /**
   * Model ForumComment
   */

  export type AggregateForumComment = {
    _count: ForumCommentCountAggregateOutputType | null
    _avg: ForumCommentAvgAggregateOutputType | null
    _sum: ForumCommentSumAggregateOutputType | null
    _min: ForumCommentMinAggregateOutputType | null
    _max: ForumCommentMaxAggregateOutputType | null
  }

  export type ForumCommentAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    threadId: number | null
    parentId: number | null
    upvotes: number | null
    downvotes: number | null
  }

  export type ForumCommentSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    threadId: number | null
    parentId: number | null
    upvotes: number | null
    downvotes: number | null
  }

  export type ForumCommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    authorId: number | null
    threadId: number | null
    parentId: number | null
    createdAt: Date | null
    upvotes: number | null
    downvotes: number | null
  }

  export type ForumCommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    authorId: number | null
    threadId: number | null
    parentId: number | null
    createdAt: Date | null
    upvotes: number | null
    downvotes: number | null
  }

  export type ForumCommentCountAggregateOutputType = {
    id: number
    content: number
    authorId: number
    threadId: number
    parentId: number
    createdAt: number
    upvotes: number
    downvotes: number
    _all: number
  }


  export type ForumCommentAvgAggregateInputType = {
    id?: true
    authorId?: true
    threadId?: true
    parentId?: true
    upvotes?: true
    downvotes?: true
  }

  export type ForumCommentSumAggregateInputType = {
    id?: true
    authorId?: true
    threadId?: true
    parentId?: true
    upvotes?: true
    downvotes?: true
  }

  export type ForumCommentMinAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    threadId?: true
    parentId?: true
    createdAt?: true
    upvotes?: true
    downvotes?: true
  }

  export type ForumCommentMaxAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    threadId?: true
    parentId?: true
    createdAt?: true
    upvotes?: true
    downvotes?: true
  }

  export type ForumCommentCountAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    threadId?: true
    parentId?: true
    createdAt?: true
    upvotes?: true
    downvotes?: true
    _all?: true
  }

  export type ForumCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumComment to aggregate.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumComments
    **/
    _count?: true | ForumCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumCommentMaxAggregateInputType
  }

  export type GetForumCommentAggregateType<T extends ForumCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateForumComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumComment[P]>
      : GetScalarType<T[P], AggregateForumComment[P]>
  }




  export type ForumCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithAggregationInput | ForumCommentOrderByWithAggregationInput[]
    by: ForumCommentScalarFieldEnum[] | ForumCommentScalarFieldEnum
    having?: ForumCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCommentCountAggregateInputType | true
    _avg?: ForumCommentAvgAggregateInputType
    _sum?: ForumCommentSumAggregateInputType
    _min?: ForumCommentMinAggregateInputType
    _max?: ForumCommentMaxAggregateInputType
  }

  export type ForumCommentGroupByOutputType = {
    id: number
    content: string
    authorId: number
    threadId: number
    parentId: number | null
    createdAt: Date
    upvotes: number
    downvotes: number
    _count: ForumCommentCountAggregateOutputType | null
    _avg: ForumCommentAvgAggregateOutputType | null
    _sum: ForumCommentSumAggregateOutputType | null
    _min: ForumCommentMinAggregateOutputType | null
    _max: ForumCommentMaxAggregateOutputType | null
  }

  type GetForumCommentGroupByPayload<T extends ForumCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumCommentGroupByOutputType[P]>
            : GetScalarType<T[P], ForumCommentGroupByOutputType[P]>
        }
      >
    >


  export type ForumCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    threadId?: boolean
    parentId?: boolean
    createdAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    parent?: boolean | ForumComment$parentArgs<ExtArgs>
    replies?: boolean | ForumComment$repliesArgs<ExtArgs>
    upvotesRelation?: boolean | ForumComment$upvotesRelationArgs<ExtArgs>
    downvotesRelation?: boolean | ForumComment$downvotesRelationArgs<ExtArgs>
    _count?: boolean | ForumCommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumComment"]>

  export type ForumCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    threadId?: boolean
    parentId?: boolean
    createdAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    parent?: boolean | ForumComment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["forumComment"]>

  export type ForumCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    threadId?: boolean
    parentId?: boolean
    createdAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    parent?: boolean | ForumComment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["forumComment"]>

  export type ForumCommentSelectScalar = {
    id?: boolean
    content?: boolean
    authorId?: boolean
    threadId?: boolean
    parentId?: boolean
    createdAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
  }

  export type ForumCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "authorId" | "threadId" | "parentId" | "createdAt" | "upvotes" | "downvotes", ExtArgs["result"]["forumComment"]>
  export type ForumCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    parent?: boolean | ForumComment$parentArgs<ExtArgs>
    replies?: boolean | ForumComment$repliesArgs<ExtArgs>
    upvotesRelation?: boolean | ForumComment$upvotesRelationArgs<ExtArgs>
    downvotesRelation?: boolean | ForumComment$downvotesRelationArgs<ExtArgs>
    _count?: boolean | ForumCommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    parent?: boolean | ForumComment$parentArgs<ExtArgs>
  }
  export type ForumCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ForumThreadDefaultArgs<ExtArgs>
    parent?: boolean | ForumComment$parentArgs<ExtArgs>
  }

  export type $ForumCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumComment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      thread: Prisma.$ForumThreadPayload<ExtArgs>
      parent: Prisma.$ForumCommentPayload<ExtArgs> | null
      replies: Prisma.$ForumCommentPayload<ExtArgs>[]
      upvotesRelation: Prisma.$ForumCommentUpvotePayload<ExtArgs>[]
      downvotesRelation: Prisma.$ForumCommentDownvotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      authorId: number
      threadId: number
      parentId: number | null
      createdAt: Date
      upvotes: number
      downvotes: number
    }, ExtArgs["result"]["forumComment"]>
    composites: {}
  }

  type ForumCommentGetPayload<S extends boolean | null | undefined | ForumCommentDefaultArgs> = $Result.GetResult<Prisma.$ForumCommentPayload, S>

  type ForumCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCommentCountAggregateInputType | true
    }

  export interface ForumCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumComment'], meta: { name: 'ForumComment' } }
    /**
     * Find zero or one ForumComment that matches the filter.
     * @param {ForumCommentFindUniqueArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumCommentFindUniqueArgs>(args: SelectSubset<T, ForumCommentFindUniqueArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumCommentFindUniqueOrThrowArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindFirstArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumCommentFindFirstArgs>(args?: SelectSubset<T, ForumCommentFindFirstArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindFirstOrThrowArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumComments
     * const forumComments = await prisma.forumComment.findMany()
     * 
     * // Get first 10 ForumComments
     * const forumComments = await prisma.forumComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumCommentWithIdOnly = await prisma.forumComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumCommentFindManyArgs>(args?: SelectSubset<T, ForumCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumComment.
     * @param {ForumCommentCreateArgs} args - Arguments to create a ForumComment.
     * @example
     * // Create one ForumComment
     * const ForumComment = await prisma.forumComment.create({
     *   data: {
     *     // ... data to create a ForumComment
     *   }
     * })
     * 
     */
    create<T extends ForumCommentCreateArgs>(args: SelectSubset<T, ForumCommentCreateArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumComments.
     * @param {ForumCommentCreateManyArgs} args - Arguments to create many ForumComments.
     * @example
     * // Create many ForumComments
     * const forumComment = await prisma.forumComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCommentCreateManyArgs>(args?: SelectSubset<T, ForumCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumComments and returns the data saved in the database.
     * @param {ForumCommentCreateManyAndReturnArgs} args - Arguments to create many ForumComments.
     * @example
     * // Create many ForumComments
     * const forumComment = await prisma.forumComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumComments and only return the `id`
     * const forumCommentWithIdOnly = await prisma.forumComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumComment.
     * @param {ForumCommentDeleteArgs} args - Arguments to delete one ForumComment.
     * @example
     * // Delete one ForumComment
     * const ForumComment = await prisma.forumComment.delete({
     *   where: {
     *     // ... filter to delete one ForumComment
     *   }
     * })
     * 
     */
    delete<T extends ForumCommentDeleteArgs>(args: SelectSubset<T, ForumCommentDeleteArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumComment.
     * @param {ForumCommentUpdateArgs} args - Arguments to update one ForumComment.
     * @example
     * // Update one ForumComment
     * const forumComment = await prisma.forumComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumCommentUpdateArgs>(args: SelectSubset<T, ForumCommentUpdateArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumComments.
     * @param {ForumCommentDeleteManyArgs} args - Arguments to filter ForumComments to delete.
     * @example
     * // Delete a few ForumComments
     * const { count } = await prisma.forumComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumCommentDeleteManyArgs>(args?: SelectSubset<T, ForumCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumComments
     * const forumComment = await prisma.forumComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumCommentUpdateManyArgs>(args: SelectSubset<T, ForumCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumComments and returns the data updated in the database.
     * @param {ForumCommentUpdateManyAndReturnArgs} args - Arguments to update many ForumComments.
     * @example
     * // Update many ForumComments
     * const forumComment = await prisma.forumComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumComments and only return the `id`
     * const forumCommentWithIdOnly = await prisma.forumComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumComment.
     * @param {ForumCommentUpsertArgs} args - Arguments to update or create a ForumComment.
     * @example
     * // Update or create a ForumComment
     * const forumComment = await prisma.forumComment.upsert({
     *   create: {
     *     // ... data to create a ForumComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumComment we want to update
     *   }
     * })
     */
    upsert<T extends ForumCommentUpsertArgs>(args: SelectSubset<T, ForumCommentUpsertArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentCountArgs} args - Arguments to filter ForumComments to count.
     * @example
     * // Count the number of ForumComments
     * const count = await prisma.forumComment.count({
     *   where: {
     *     // ... the filter for the ForumComments we want to count
     *   }
     * })
    **/
    count<T extends ForumCommentCountArgs>(
      args?: Subset<T, ForumCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumCommentAggregateArgs>(args: Subset<T, ForumCommentAggregateArgs>): Prisma.PrismaPromise<GetForumCommentAggregateType<T>>

    /**
     * Group by ForumComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumCommentGroupByArgs['orderBy'] }
        : { orderBy?: ForumCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumComment model
   */
  readonly fields: ForumCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    thread<T extends ForumThreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumThreadDefaultArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends ForumComment$parentArgs<ExtArgs> = {}>(args?: Subset<T, ForumComment$parentArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends ForumComment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, ForumComment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    upvotesRelation<T extends ForumComment$upvotesRelationArgs<ExtArgs> = {}>(args?: Subset<T, ForumComment$upvotesRelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    downvotesRelation<T extends ForumComment$downvotesRelationArgs<ExtArgs> = {}>(args?: Subset<T, ForumComment$downvotesRelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumComment model
   */
  interface ForumCommentFieldRefs {
    readonly id: FieldRef<"ForumComment", 'Int'>
    readonly content: FieldRef<"ForumComment", 'String'>
    readonly authorId: FieldRef<"ForumComment", 'Int'>
    readonly threadId: FieldRef<"ForumComment", 'Int'>
    readonly parentId: FieldRef<"ForumComment", 'Int'>
    readonly createdAt: FieldRef<"ForumComment", 'DateTime'>
    readonly upvotes: FieldRef<"ForumComment", 'Int'>
    readonly downvotes: FieldRef<"ForumComment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ForumComment findUnique
   */
  export type ForumCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment findUniqueOrThrow
   */
  export type ForumCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment findFirst
   */
  export type ForumCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumComments.
     */
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment findFirstOrThrow
   */
  export type ForumCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumComments.
     */
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment findMany
   */
  export type ForumCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComments to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment create
   */
  export type ForumCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumComment.
     */
    data: XOR<ForumCommentCreateInput, ForumCommentUncheckedCreateInput>
  }

  /**
   * ForumComment createMany
   */
  export type ForumCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumComments.
     */
    data: ForumCommentCreateManyInput | ForumCommentCreateManyInput[]
  }

  /**
   * ForumComment createManyAndReturn
   */
  export type ForumCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * The data used to create many ForumComments.
     */
    data: ForumCommentCreateManyInput | ForumCommentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumComment update
   */
  export type ForumCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumComment.
     */
    data: XOR<ForumCommentUpdateInput, ForumCommentUncheckedUpdateInput>
    /**
     * Choose, which ForumComment to update.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment updateMany
   */
  export type ForumCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumComments.
     */
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyInput>
    /**
     * Filter which ForumComments to update
     */
    where?: ForumCommentWhereInput
    /**
     * Limit how many ForumComments to update.
     */
    limit?: number
  }

  /**
   * ForumComment updateManyAndReturn
   */
  export type ForumCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * The data used to update ForumComments.
     */
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyInput>
    /**
     * Filter which ForumComments to update
     */
    where?: ForumCommentWhereInput
    /**
     * Limit how many ForumComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumComment upsert
   */
  export type ForumCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumComment to update in case it exists.
     */
    where: ForumCommentWhereUniqueInput
    /**
     * In case the ForumComment found by the `where` argument doesn't exist, create a new ForumComment with this data.
     */
    create: XOR<ForumCommentCreateInput, ForumCommentUncheckedCreateInput>
    /**
     * In case the ForumComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumCommentUpdateInput, ForumCommentUncheckedUpdateInput>
  }

  /**
   * ForumComment delete
   */
  export type ForumCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter which ForumComment to delete.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment deleteMany
   */
  export type ForumCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumComments to delete
     */
    where?: ForumCommentWhereInput
    /**
     * Limit how many ForumComments to delete.
     */
    limit?: number
  }

  /**
   * ForumComment.parent
   */
  export type ForumComment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
  }

  /**
   * ForumComment.replies
   */
  export type ForumComment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    cursor?: ForumCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment.upvotesRelation
   */
  export type ForumComment$upvotesRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteInclude<ExtArgs> | null
    where?: ForumCommentUpvoteWhereInput
    orderBy?: ForumCommentUpvoteOrderByWithRelationInput | ForumCommentUpvoteOrderByWithRelationInput[]
    cursor?: ForumCommentUpvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumCommentUpvoteScalarFieldEnum | ForumCommentUpvoteScalarFieldEnum[]
  }

  /**
   * ForumComment.downvotesRelation
   */
  export type ForumComment$downvotesRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteInclude<ExtArgs> | null
    where?: ForumCommentDownvoteWhereInput
    orderBy?: ForumCommentDownvoteOrderByWithRelationInput | ForumCommentDownvoteOrderByWithRelationInput[]
    cursor?: ForumCommentDownvoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumCommentDownvoteScalarFieldEnum | ForumCommentDownvoteScalarFieldEnum[]
  }

  /**
   * ForumComment without action
   */
  export type ForumCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
  }


  /**
   * Model ForumThreadUpvote
   */

  export type AggregateForumThreadUpvote = {
    _count: ForumThreadUpvoteCountAggregateOutputType | null
    _avg: ForumThreadUpvoteAvgAggregateOutputType | null
    _sum: ForumThreadUpvoteSumAggregateOutputType | null
    _min: ForumThreadUpvoteMinAggregateOutputType | null
    _max: ForumThreadUpvoteMaxAggregateOutputType | null
  }

  export type ForumThreadUpvoteAvgAggregateOutputType = {
    id: number | null
    threadId: number | null
    userId: number | null
    forumThreadId: number | null
  }

  export type ForumThreadUpvoteSumAggregateOutputType = {
    id: number | null
    threadId: number | null
    userId: number | null
    forumThreadId: number | null
  }

  export type ForumThreadUpvoteMinAggregateOutputType = {
    id: number | null
    threadId: number | null
    userId: number | null
    forumThreadId: number | null
  }

  export type ForumThreadUpvoteMaxAggregateOutputType = {
    id: number | null
    threadId: number | null
    userId: number | null
    forumThreadId: number | null
  }

  export type ForumThreadUpvoteCountAggregateOutputType = {
    id: number
    threadId: number
    userId: number
    forumThreadId: number
    _all: number
  }


  export type ForumThreadUpvoteAvgAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    forumThreadId?: true
  }

  export type ForumThreadUpvoteSumAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    forumThreadId?: true
  }

  export type ForumThreadUpvoteMinAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    forumThreadId?: true
  }

  export type ForumThreadUpvoteMaxAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    forumThreadId?: true
  }

  export type ForumThreadUpvoteCountAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    forumThreadId?: true
    _all?: true
  }

  export type ForumThreadUpvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumThreadUpvote to aggregate.
     */
    where?: ForumThreadUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreadUpvotes to fetch.
     */
    orderBy?: ForumThreadUpvoteOrderByWithRelationInput | ForumThreadUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumThreadUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreadUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreadUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumThreadUpvotes
    **/
    _count?: true | ForumThreadUpvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumThreadUpvoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumThreadUpvoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumThreadUpvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumThreadUpvoteMaxAggregateInputType
  }

  export type GetForumThreadUpvoteAggregateType<T extends ForumThreadUpvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateForumThreadUpvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumThreadUpvote[P]>
      : GetScalarType<T[P], AggregateForumThreadUpvote[P]>
  }




  export type ForumThreadUpvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumThreadUpvoteWhereInput
    orderBy?: ForumThreadUpvoteOrderByWithAggregationInput | ForumThreadUpvoteOrderByWithAggregationInput[]
    by: ForumThreadUpvoteScalarFieldEnum[] | ForumThreadUpvoteScalarFieldEnum
    having?: ForumThreadUpvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumThreadUpvoteCountAggregateInputType | true
    _avg?: ForumThreadUpvoteAvgAggregateInputType
    _sum?: ForumThreadUpvoteSumAggregateInputType
    _min?: ForumThreadUpvoteMinAggregateInputType
    _max?: ForumThreadUpvoteMaxAggregateInputType
  }

  export type ForumThreadUpvoteGroupByOutputType = {
    id: number
    threadId: number
    userId: number
    forumThreadId: number | null
    _count: ForumThreadUpvoteCountAggregateOutputType | null
    _avg: ForumThreadUpvoteAvgAggregateOutputType | null
    _sum: ForumThreadUpvoteSumAggregateOutputType | null
    _min: ForumThreadUpvoteMinAggregateOutputType | null
    _max: ForumThreadUpvoteMaxAggregateOutputType | null
  }

  type GetForumThreadUpvoteGroupByPayload<T extends ForumThreadUpvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumThreadUpvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumThreadUpvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumThreadUpvoteGroupByOutputType[P]>
            : GetScalarType<T[P], ForumThreadUpvoteGroupByOutputType[P]>
        }
      >
    >


  export type ForumThreadUpvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    forumThreadId?: boolean
    ForumThread?: boolean | ForumThreadUpvote$ForumThreadArgs<ExtArgs>
  }, ExtArgs["result"]["forumThreadUpvote"]>

  export type ForumThreadUpvoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    forumThreadId?: boolean
    ForumThread?: boolean | ForumThreadUpvote$ForumThreadArgs<ExtArgs>
  }, ExtArgs["result"]["forumThreadUpvote"]>

  export type ForumThreadUpvoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    forumThreadId?: boolean
    ForumThread?: boolean | ForumThreadUpvote$ForumThreadArgs<ExtArgs>
  }, ExtArgs["result"]["forumThreadUpvote"]>

  export type ForumThreadUpvoteSelectScalar = {
    id?: boolean
    threadId?: boolean
    userId?: boolean
    forumThreadId?: boolean
  }

  export type ForumThreadUpvoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "threadId" | "userId" | "forumThreadId", ExtArgs["result"]["forumThreadUpvote"]>
  export type ForumThreadUpvoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumThread?: boolean | ForumThreadUpvote$ForumThreadArgs<ExtArgs>
  }
  export type ForumThreadUpvoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumThread?: boolean | ForumThreadUpvote$ForumThreadArgs<ExtArgs>
  }
  export type ForumThreadUpvoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumThread?: boolean | ForumThreadUpvote$ForumThreadArgs<ExtArgs>
  }

  export type $ForumThreadUpvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumThreadUpvote"
    objects: {
      ForumThread: Prisma.$ForumThreadPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      threadId: number
      userId: number
      forumThreadId: number | null
    }, ExtArgs["result"]["forumThreadUpvote"]>
    composites: {}
  }

  type ForumThreadUpvoteGetPayload<S extends boolean | null | undefined | ForumThreadUpvoteDefaultArgs> = $Result.GetResult<Prisma.$ForumThreadUpvotePayload, S>

  type ForumThreadUpvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumThreadUpvoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumThreadUpvoteCountAggregateInputType | true
    }

  export interface ForumThreadUpvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumThreadUpvote'], meta: { name: 'ForumThreadUpvote' } }
    /**
     * Find zero or one ForumThreadUpvote that matches the filter.
     * @param {ForumThreadUpvoteFindUniqueArgs} args - Arguments to find a ForumThreadUpvote
     * @example
     * // Get one ForumThreadUpvote
     * const forumThreadUpvote = await prisma.forumThreadUpvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumThreadUpvoteFindUniqueArgs>(args: SelectSubset<T, ForumThreadUpvoteFindUniqueArgs<ExtArgs>>): Prisma__ForumThreadUpvoteClient<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumThreadUpvote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumThreadUpvoteFindUniqueOrThrowArgs} args - Arguments to find a ForumThreadUpvote
     * @example
     * // Get one ForumThreadUpvote
     * const forumThreadUpvote = await prisma.forumThreadUpvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumThreadUpvoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumThreadUpvoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumThreadUpvoteClient<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumThreadUpvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadUpvoteFindFirstArgs} args - Arguments to find a ForumThreadUpvote
     * @example
     * // Get one ForumThreadUpvote
     * const forumThreadUpvote = await prisma.forumThreadUpvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumThreadUpvoteFindFirstArgs>(args?: SelectSubset<T, ForumThreadUpvoteFindFirstArgs<ExtArgs>>): Prisma__ForumThreadUpvoteClient<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumThreadUpvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadUpvoteFindFirstOrThrowArgs} args - Arguments to find a ForumThreadUpvote
     * @example
     * // Get one ForumThreadUpvote
     * const forumThreadUpvote = await prisma.forumThreadUpvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumThreadUpvoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumThreadUpvoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumThreadUpvoteClient<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumThreadUpvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadUpvoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumThreadUpvotes
     * const forumThreadUpvotes = await prisma.forumThreadUpvote.findMany()
     * 
     * // Get first 10 ForumThreadUpvotes
     * const forumThreadUpvotes = await prisma.forumThreadUpvote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumThreadUpvoteWithIdOnly = await prisma.forumThreadUpvote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumThreadUpvoteFindManyArgs>(args?: SelectSubset<T, ForumThreadUpvoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumThreadUpvote.
     * @param {ForumThreadUpvoteCreateArgs} args - Arguments to create a ForumThreadUpvote.
     * @example
     * // Create one ForumThreadUpvote
     * const ForumThreadUpvote = await prisma.forumThreadUpvote.create({
     *   data: {
     *     // ... data to create a ForumThreadUpvote
     *   }
     * })
     * 
     */
    create<T extends ForumThreadUpvoteCreateArgs>(args: SelectSubset<T, ForumThreadUpvoteCreateArgs<ExtArgs>>): Prisma__ForumThreadUpvoteClient<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumThreadUpvotes.
     * @param {ForumThreadUpvoteCreateManyArgs} args - Arguments to create many ForumThreadUpvotes.
     * @example
     * // Create many ForumThreadUpvotes
     * const forumThreadUpvote = await prisma.forumThreadUpvote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumThreadUpvoteCreateManyArgs>(args?: SelectSubset<T, ForumThreadUpvoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumThreadUpvotes and returns the data saved in the database.
     * @param {ForumThreadUpvoteCreateManyAndReturnArgs} args - Arguments to create many ForumThreadUpvotes.
     * @example
     * // Create many ForumThreadUpvotes
     * const forumThreadUpvote = await prisma.forumThreadUpvote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumThreadUpvotes and only return the `id`
     * const forumThreadUpvoteWithIdOnly = await prisma.forumThreadUpvote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumThreadUpvoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumThreadUpvoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumThreadUpvote.
     * @param {ForumThreadUpvoteDeleteArgs} args - Arguments to delete one ForumThreadUpvote.
     * @example
     * // Delete one ForumThreadUpvote
     * const ForumThreadUpvote = await prisma.forumThreadUpvote.delete({
     *   where: {
     *     // ... filter to delete one ForumThreadUpvote
     *   }
     * })
     * 
     */
    delete<T extends ForumThreadUpvoteDeleteArgs>(args: SelectSubset<T, ForumThreadUpvoteDeleteArgs<ExtArgs>>): Prisma__ForumThreadUpvoteClient<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumThreadUpvote.
     * @param {ForumThreadUpvoteUpdateArgs} args - Arguments to update one ForumThreadUpvote.
     * @example
     * // Update one ForumThreadUpvote
     * const forumThreadUpvote = await prisma.forumThreadUpvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumThreadUpvoteUpdateArgs>(args: SelectSubset<T, ForumThreadUpvoteUpdateArgs<ExtArgs>>): Prisma__ForumThreadUpvoteClient<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumThreadUpvotes.
     * @param {ForumThreadUpvoteDeleteManyArgs} args - Arguments to filter ForumThreadUpvotes to delete.
     * @example
     * // Delete a few ForumThreadUpvotes
     * const { count } = await prisma.forumThreadUpvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumThreadUpvoteDeleteManyArgs>(args?: SelectSubset<T, ForumThreadUpvoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumThreadUpvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadUpvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumThreadUpvotes
     * const forumThreadUpvote = await prisma.forumThreadUpvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumThreadUpvoteUpdateManyArgs>(args: SelectSubset<T, ForumThreadUpvoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumThreadUpvotes and returns the data updated in the database.
     * @param {ForumThreadUpvoteUpdateManyAndReturnArgs} args - Arguments to update many ForumThreadUpvotes.
     * @example
     * // Update many ForumThreadUpvotes
     * const forumThreadUpvote = await prisma.forumThreadUpvote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumThreadUpvotes and only return the `id`
     * const forumThreadUpvoteWithIdOnly = await prisma.forumThreadUpvote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumThreadUpvoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumThreadUpvoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumThreadUpvote.
     * @param {ForumThreadUpvoteUpsertArgs} args - Arguments to update or create a ForumThreadUpvote.
     * @example
     * // Update or create a ForumThreadUpvote
     * const forumThreadUpvote = await prisma.forumThreadUpvote.upsert({
     *   create: {
     *     // ... data to create a ForumThreadUpvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumThreadUpvote we want to update
     *   }
     * })
     */
    upsert<T extends ForumThreadUpvoteUpsertArgs>(args: SelectSubset<T, ForumThreadUpvoteUpsertArgs<ExtArgs>>): Prisma__ForumThreadUpvoteClient<$Result.GetResult<Prisma.$ForumThreadUpvotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumThreadUpvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadUpvoteCountArgs} args - Arguments to filter ForumThreadUpvotes to count.
     * @example
     * // Count the number of ForumThreadUpvotes
     * const count = await prisma.forumThreadUpvote.count({
     *   where: {
     *     // ... the filter for the ForumThreadUpvotes we want to count
     *   }
     * })
    **/
    count<T extends ForumThreadUpvoteCountArgs>(
      args?: Subset<T, ForumThreadUpvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumThreadUpvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumThreadUpvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadUpvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumThreadUpvoteAggregateArgs>(args: Subset<T, ForumThreadUpvoteAggregateArgs>): Prisma.PrismaPromise<GetForumThreadUpvoteAggregateType<T>>

    /**
     * Group by ForumThreadUpvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadUpvoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumThreadUpvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumThreadUpvoteGroupByArgs['orderBy'] }
        : { orderBy?: ForumThreadUpvoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumThreadUpvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumThreadUpvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumThreadUpvote model
   */
  readonly fields: ForumThreadUpvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumThreadUpvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumThreadUpvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ForumThread<T extends ForumThreadUpvote$ForumThreadArgs<ExtArgs> = {}>(args?: Subset<T, ForumThreadUpvote$ForumThreadArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumThreadUpvote model
   */
  interface ForumThreadUpvoteFieldRefs {
    readonly id: FieldRef<"ForumThreadUpvote", 'Int'>
    readonly threadId: FieldRef<"ForumThreadUpvote", 'Int'>
    readonly userId: FieldRef<"ForumThreadUpvote", 'Int'>
    readonly forumThreadId: FieldRef<"ForumThreadUpvote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ForumThreadUpvote findUnique
   */
  export type ForumThreadUpvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreadUpvote to fetch.
     */
    where: ForumThreadUpvoteWhereUniqueInput
  }

  /**
   * ForumThreadUpvote findUniqueOrThrow
   */
  export type ForumThreadUpvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreadUpvote to fetch.
     */
    where: ForumThreadUpvoteWhereUniqueInput
  }

  /**
   * ForumThreadUpvote findFirst
   */
  export type ForumThreadUpvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreadUpvote to fetch.
     */
    where?: ForumThreadUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreadUpvotes to fetch.
     */
    orderBy?: ForumThreadUpvoteOrderByWithRelationInput | ForumThreadUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumThreadUpvotes.
     */
    cursor?: ForumThreadUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreadUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreadUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumThreadUpvotes.
     */
    distinct?: ForumThreadUpvoteScalarFieldEnum | ForumThreadUpvoteScalarFieldEnum[]
  }

  /**
   * ForumThreadUpvote findFirstOrThrow
   */
  export type ForumThreadUpvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreadUpvote to fetch.
     */
    where?: ForumThreadUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreadUpvotes to fetch.
     */
    orderBy?: ForumThreadUpvoteOrderByWithRelationInput | ForumThreadUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumThreadUpvotes.
     */
    cursor?: ForumThreadUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreadUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreadUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumThreadUpvotes.
     */
    distinct?: ForumThreadUpvoteScalarFieldEnum | ForumThreadUpvoteScalarFieldEnum[]
  }

  /**
   * ForumThreadUpvote findMany
   */
  export type ForumThreadUpvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreadUpvotes to fetch.
     */
    where?: ForumThreadUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreadUpvotes to fetch.
     */
    orderBy?: ForumThreadUpvoteOrderByWithRelationInput | ForumThreadUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumThreadUpvotes.
     */
    cursor?: ForumThreadUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreadUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreadUpvotes.
     */
    skip?: number
    distinct?: ForumThreadUpvoteScalarFieldEnum | ForumThreadUpvoteScalarFieldEnum[]
  }

  /**
   * ForumThreadUpvote create
   */
  export type ForumThreadUpvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumThreadUpvote.
     */
    data: XOR<ForumThreadUpvoteCreateInput, ForumThreadUpvoteUncheckedCreateInput>
  }

  /**
   * ForumThreadUpvote createMany
   */
  export type ForumThreadUpvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumThreadUpvotes.
     */
    data: ForumThreadUpvoteCreateManyInput | ForumThreadUpvoteCreateManyInput[]
  }

  /**
   * ForumThreadUpvote createManyAndReturn
   */
  export type ForumThreadUpvoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * The data used to create many ForumThreadUpvotes.
     */
    data: ForumThreadUpvoteCreateManyInput | ForumThreadUpvoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumThreadUpvote update
   */
  export type ForumThreadUpvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumThreadUpvote.
     */
    data: XOR<ForumThreadUpvoteUpdateInput, ForumThreadUpvoteUncheckedUpdateInput>
    /**
     * Choose, which ForumThreadUpvote to update.
     */
    where: ForumThreadUpvoteWhereUniqueInput
  }

  /**
   * ForumThreadUpvote updateMany
   */
  export type ForumThreadUpvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumThreadUpvotes.
     */
    data: XOR<ForumThreadUpvoteUpdateManyMutationInput, ForumThreadUpvoteUncheckedUpdateManyInput>
    /**
     * Filter which ForumThreadUpvotes to update
     */
    where?: ForumThreadUpvoteWhereInput
    /**
     * Limit how many ForumThreadUpvotes to update.
     */
    limit?: number
  }

  /**
   * ForumThreadUpvote updateManyAndReturn
   */
  export type ForumThreadUpvoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * The data used to update ForumThreadUpvotes.
     */
    data: XOR<ForumThreadUpvoteUpdateManyMutationInput, ForumThreadUpvoteUncheckedUpdateManyInput>
    /**
     * Filter which ForumThreadUpvotes to update
     */
    where?: ForumThreadUpvoteWhereInput
    /**
     * Limit how many ForumThreadUpvotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumThreadUpvote upsert
   */
  export type ForumThreadUpvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumThreadUpvote to update in case it exists.
     */
    where: ForumThreadUpvoteWhereUniqueInput
    /**
     * In case the ForumThreadUpvote found by the `where` argument doesn't exist, create a new ForumThreadUpvote with this data.
     */
    create: XOR<ForumThreadUpvoteCreateInput, ForumThreadUpvoteUncheckedCreateInput>
    /**
     * In case the ForumThreadUpvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumThreadUpvoteUpdateInput, ForumThreadUpvoteUncheckedUpdateInput>
  }

  /**
   * ForumThreadUpvote delete
   */
  export type ForumThreadUpvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteInclude<ExtArgs> | null
    /**
     * Filter which ForumThreadUpvote to delete.
     */
    where: ForumThreadUpvoteWhereUniqueInput
  }

  /**
   * ForumThreadUpvote deleteMany
   */
  export type ForumThreadUpvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumThreadUpvotes to delete
     */
    where?: ForumThreadUpvoteWhereInput
    /**
     * Limit how many ForumThreadUpvotes to delete.
     */
    limit?: number
  }

  /**
   * ForumThreadUpvote.ForumThread
   */
  export type ForumThreadUpvote$ForumThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    where?: ForumThreadWhereInput
  }

  /**
   * ForumThreadUpvote without action
   */
  export type ForumThreadUpvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadUpvote
     */
    select?: ForumThreadUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadUpvote
     */
    omit?: ForumThreadUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadUpvoteInclude<ExtArgs> | null
  }


  /**
   * Model ForumThreadDownvote
   */

  export type AggregateForumThreadDownvote = {
    _count: ForumThreadDownvoteCountAggregateOutputType | null
    _avg: ForumThreadDownvoteAvgAggregateOutputType | null
    _sum: ForumThreadDownvoteSumAggregateOutputType | null
    _min: ForumThreadDownvoteMinAggregateOutputType | null
    _max: ForumThreadDownvoteMaxAggregateOutputType | null
  }

  export type ForumThreadDownvoteAvgAggregateOutputType = {
    id: number | null
    threadId: number | null
    userId: number | null
    forumThreadId: number | null
  }

  export type ForumThreadDownvoteSumAggregateOutputType = {
    id: number | null
    threadId: number | null
    userId: number | null
    forumThreadId: number | null
  }

  export type ForumThreadDownvoteMinAggregateOutputType = {
    id: number | null
    threadId: number | null
    userId: number | null
    forumThreadId: number | null
  }

  export type ForumThreadDownvoteMaxAggregateOutputType = {
    id: number | null
    threadId: number | null
    userId: number | null
    forumThreadId: number | null
  }

  export type ForumThreadDownvoteCountAggregateOutputType = {
    id: number
    threadId: number
    userId: number
    forumThreadId: number
    _all: number
  }


  export type ForumThreadDownvoteAvgAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    forumThreadId?: true
  }

  export type ForumThreadDownvoteSumAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    forumThreadId?: true
  }

  export type ForumThreadDownvoteMinAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    forumThreadId?: true
  }

  export type ForumThreadDownvoteMaxAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    forumThreadId?: true
  }

  export type ForumThreadDownvoteCountAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    forumThreadId?: true
    _all?: true
  }

  export type ForumThreadDownvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumThreadDownvote to aggregate.
     */
    where?: ForumThreadDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreadDownvotes to fetch.
     */
    orderBy?: ForumThreadDownvoteOrderByWithRelationInput | ForumThreadDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumThreadDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreadDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreadDownvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumThreadDownvotes
    **/
    _count?: true | ForumThreadDownvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumThreadDownvoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumThreadDownvoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumThreadDownvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumThreadDownvoteMaxAggregateInputType
  }

  export type GetForumThreadDownvoteAggregateType<T extends ForumThreadDownvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateForumThreadDownvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumThreadDownvote[P]>
      : GetScalarType<T[P], AggregateForumThreadDownvote[P]>
  }




  export type ForumThreadDownvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumThreadDownvoteWhereInput
    orderBy?: ForumThreadDownvoteOrderByWithAggregationInput | ForumThreadDownvoteOrderByWithAggregationInput[]
    by: ForumThreadDownvoteScalarFieldEnum[] | ForumThreadDownvoteScalarFieldEnum
    having?: ForumThreadDownvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumThreadDownvoteCountAggregateInputType | true
    _avg?: ForumThreadDownvoteAvgAggregateInputType
    _sum?: ForumThreadDownvoteSumAggregateInputType
    _min?: ForumThreadDownvoteMinAggregateInputType
    _max?: ForumThreadDownvoteMaxAggregateInputType
  }

  export type ForumThreadDownvoteGroupByOutputType = {
    id: number
    threadId: number
    userId: number
    forumThreadId: number | null
    _count: ForumThreadDownvoteCountAggregateOutputType | null
    _avg: ForumThreadDownvoteAvgAggregateOutputType | null
    _sum: ForumThreadDownvoteSumAggregateOutputType | null
    _min: ForumThreadDownvoteMinAggregateOutputType | null
    _max: ForumThreadDownvoteMaxAggregateOutputType | null
  }

  type GetForumThreadDownvoteGroupByPayload<T extends ForumThreadDownvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumThreadDownvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumThreadDownvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumThreadDownvoteGroupByOutputType[P]>
            : GetScalarType<T[P], ForumThreadDownvoteGroupByOutputType[P]>
        }
      >
    >


  export type ForumThreadDownvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    forumThreadId?: boolean
    ForumThread?: boolean | ForumThreadDownvote$ForumThreadArgs<ExtArgs>
  }, ExtArgs["result"]["forumThreadDownvote"]>

  export type ForumThreadDownvoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    forumThreadId?: boolean
    ForumThread?: boolean | ForumThreadDownvote$ForumThreadArgs<ExtArgs>
  }, ExtArgs["result"]["forumThreadDownvote"]>

  export type ForumThreadDownvoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    forumThreadId?: boolean
    ForumThread?: boolean | ForumThreadDownvote$ForumThreadArgs<ExtArgs>
  }, ExtArgs["result"]["forumThreadDownvote"]>

  export type ForumThreadDownvoteSelectScalar = {
    id?: boolean
    threadId?: boolean
    userId?: boolean
    forumThreadId?: boolean
  }

  export type ForumThreadDownvoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "threadId" | "userId" | "forumThreadId", ExtArgs["result"]["forumThreadDownvote"]>
  export type ForumThreadDownvoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumThread?: boolean | ForumThreadDownvote$ForumThreadArgs<ExtArgs>
  }
  export type ForumThreadDownvoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumThread?: boolean | ForumThreadDownvote$ForumThreadArgs<ExtArgs>
  }
  export type ForumThreadDownvoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumThread?: boolean | ForumThreadDownvote$ForumThreadArgs<ExtArgs>
  }

  export type $ForumThreadDownvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumThreadDownvote"
    objects: {
      ForumThread: Prisma.$ForumThreadPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      threadId: number
      userId: number
      forumThreadId: number | null
    }, ExtArgs["result"]["forumThreadDownvote"]>
    composites: {}
  }

  type ForumThreadDownvoteGetPayload<S extends boolean | null | undefined | ForumThreadDownvoteDefaultArgs> = $Result.GetResult<Prisma.$ForumThreadDownvotePayload, S>

  type ForumThreadDownvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumThreadDownvoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumThreadDownvoteCountAggregateInputType | true
    }

  export interface ForumThreadDownvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumThreadDownvote'], meta: { name: 'ForumThreadDownvote' } }
    /**
     * Find zero or one ForumThreadDownvote that matches the filter.
     * @param {ForumThreadDownvoteFindUniqueArgs} args - Arguments to find a ForumThreadDownvote
     * @example
     * // Get one ForumThreadDownvote
     * const forumThreadDownvote = await prisma.forumThreadDownvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumThreadDownvoteFindUniqueArgs>(args: SelectSubset<T, ForumThreadDownvoteFindUniqueArgs<ExtArgs>>): Prisma__ForumThreadDownvoteClient<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumThreadDownvote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumThreadDownvoteFindUniqueOrThrowArgs} args - Arguments to find a ForumThreadDownvote
     * @example
     * // Get one ForumThreadDownvote
     * const forumThreadDownvote = await prisma.forumThreadDownvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumThreadDownvoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumThreadDownvoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumThreadDownvoteClient<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumThreadDownvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadDownvoteFindFirstArgs} args - Arguments to find a ForumThreadDownvote
     * @example
     * // Get one ForumThreadDownvote
     * const forumThreadDownvote = await prisma.forumThreadDownvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumThreadDownvoteFindFirstArgs>(args?: SelectSubset<T, ForumThreadDownvoteFindFirstArgs<ExtArgs>>): Prisma__ForumThreadDownvoteClient<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumThreadDownvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadDownvoteFindFirstOrThrowArgs} args - Arguments to find a ForumThreadDownvote
     * @example
     * // Get one ForumThreadDownvote
     * const forumThreadDownvote = await prisma.forumThreadDownvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumThreadDownvoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumThreadDownvoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumThreadDownvoteClient<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumThreadDownvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadDownvoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumThreadDownvotes
     * const forumThreadDownvotes = await prisma.forumThreadDownvote.findMany()
     * 
     * // Get first 10 ForumThreadDownvotes
     * const forumThreadDownvotes = await prisma.forumThreadDownvote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumThreadDownvoteWithIdOnly = await prisma.forumThreadDownvote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumThreadDownvoteFindManyArgs>(args?: SelectSubset<T, ForumThreadDownvoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumThreadDownvote.
     * @param {ForumThreadDownvoteCreateArgs} args - Arguments to create a ForumThreadDownvote.
     * @example
     * // Create one ForumThreadDownvote
     * const ForumThreadDownvote = await prisma.forumThreadDownvote.create({
     *   data: {
     *     // ... data to create a ForumThreadDownvote
     *   }
     * })
     * 
     */
    create<T extends ForumThreadDownvoteCreateArgs>(args: SelectSubset<T, ForumThreadDownvoteCreateArgs<ExtArgs>>): Prisma__ForumThreadDownvoteClient<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumThreadDownvotes.
     * @param {ForumThreadDownvoteCreateManyArgs} args - Arguments to create many ForumThreadDownvotes.
     * @example
     * // Create many ForumThreadDownvotes
     * const forumThreadDownvote = await prisma.forumThreadDownvote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumThreadDownvoteCreateManyArgs>(args?: SelectSubset<T, ForumThreadDownvoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumThreadDownvotes and returns the data saved in the database.
     * @param {ForumThreadDownvoteCreateManyAndReturnArgs} args - Arguments to create many ForumThreadDownvotes.
     * @example
     * // Create many ForumThreadDownvotes
     * const forumThreadDownvote = await prisma.forumThreadDownvote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumThreadDownvotes and only return the `id`
     * const forumThreadDownvoteWithIdOnly = await prisma.forumThreadDownvote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumThreadDownvoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumThreadDownvoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumThreadDownvote.
     * @param {ForumThreadDownvoteDeleteArgs} args - Arguments to delete one ForumThreadDownvote.
     * @example
     * // Delete one ForumThreadDownvote
     * const ForumThreadDownvote = await prisma.forumThreadDownvote.delete({
     *   where: {
     *     // ... filter to delete one ForumThreadDownvote
     *   }
     * })
     * 
     */
    delete<T extends ForumThreadDownvoteDeleteArgs>(args: SelectSubset<T, ForumThreadDownvoteDeleteArgs<ExtArgs>>): Prisma__ForumThreadDownvoteClient<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumThreadDownvote.
     * @param {ForumThreadDownvoteUpdateArgs} args - Arguments to update one ForumThreadDownvote.
     * @example
     * // Update one ForumThreadDownvote
     * const forumThreadDownvote = await prisma.forumThreadDownvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumThreadDownvoteUpdateArgs>(args: SelectSubset<T, ForumThreadDownvoteUpdateArgs<ExtArgs>>): Prisma__ForumThreadDownvoteClient<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumThreadDownvotes.
     * @param {ForumThreadDownvoteDeleteManyArgs} args - Arguments to filter ForumThreadDownvotes to delete.
     * @example
     * // Delete a few ForumThreadDownvotes
     * const { count } = await prisma.forumThreadDownvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumThreadDownvoteDeleteManyArgs>(args?: SelectSubset<T, ForumThreadDownvoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumThreadDownvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadDownvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumThreadDownvotes
     * const forumThreadDownvote = await prisma.forumThreadDownvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumThreadDownvoteUpdateManyArgs>(args: SelectSubset<T, ForumThreadDownvoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumThreadDownvotes and returns the data updated in the database.
     * @param {ForumThreadDownvoteUpdateManyAndReturnArgs} args - Arguments to update many ForumThreadDownvotes.
     * @example
     * // Update many ForumThreadDownvotes
     * const forumThreadDownvote = await prisma.forumThreadDownvote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumThreadDownvotes and only return the `id`
     * const forumThreadDownvoteWithIdOnly = await prisma.forumThreadDownvote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumThreadDownvoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumThreadDownvoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumThreadDownvote.
     * @param {ForumThreadDownvoteUpsertArgs} args - Arguments to update or create a ForumThreadDownvote.
     * @example
     * // Update or create a ForumThreadDownvote
     * const forumThreadDownvote = await prisma.forumThreadDownvote.upsert({
     *   create: {
     *     // ... data to create a ForumThreadDownvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumThreadDownvote we want to update
     *   }
     * })
     */
    upsert<T extends ForumThreadDownvoteUpsertArgs>(args: SelectSubset<T, ForumThreadDownvoteUpsertArgs<ExtArgs>>): Prisma__ForumThreadDownvoteClient<$Result.GetResult<Prisma.$ForumThreadDownvotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumThreadDownvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadDownvoteCountArgs} args - Arguments to filter ForumThreadDownvotes to count.
     * @example
     * // Count the number of ForumThreadDownvotes
     * const count = await prisma.forumThreadDownvote.count({
     *   where: {
     *     // ... the filter for the ForumThreadDownvotes we want to count
     *   }
     * })
    **/
    count<T extends ForumThreadDownvoteCountArgs>(
      args?: Subset<T, ForumThreadDownvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumThreadDownvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumThreadDownvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadDownvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumThreadDownvoteAggregateArgs>(args: Subset<T, ForumThreadDownvoteAggregateArgs>): Prisma.PrismaPromise<GetForumThreadDownvoteAggregateType<T>>

    /**
     * Group by ForumThreadDownvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumThreadDownvoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumThreadDownvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumThreadDownvoteGroupByArgs['orderBy'] }
        : { orderBy?: ForumThreadDownvoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumThreadDownvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumThreadDownvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumThreadDownvote model
   */
  readonly fields: ForumThreadDownvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumThreadDownvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumThreadDownvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ForumThread<T extends ForumThreadDownvote$ForumThreadArgs<ExtArgs> = {}>(args?: Subset<T, ForumThreadDownvote$ForumThreadArgs<ExtArgs>>): Prisma__ForumThreadClient<$Result.GetResult<Prisma.$ForumThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumThreadDownvote model
   */
  interface ForumThreadDownvoteFieldRefs {
    readonly id: FieldRef<"ForumThreadDownvote", 'Int'>
    readonly threadId: FieldRef<"ForumThreadDownvote", 'Int'>
    readonly userId: FieldRef<"ForumThreadDownvote", 'Int'>
    readonly forumThreadId: FieldRef<"ForumThreadDownvote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ForumThreadDownvote findUnique
   */
  export type ForumThreadDownvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreadDownvote to fetch.
     */
    where: ForumThreadDownvoteWhereUniqueInput
  }

  /**
   * ForumThreadDownvote findUniqueOrThrow
   */
  export type ForumThreadDownvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreadDownvote to fetch.
     */
    where: ForumThreadDownvoteWhereUniqueInput
  }

  /**
   * ForumThreadDownvote findFirst
   */
  export type ForumThreadDownvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreadDownvote to fetch.
     */
    where?: ForumThreadDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreadDownvotes to fetch.
     */
    orderBy?: ForumThreadDownvoteOrderByWithRelationInput | ForumThreadDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumThreadDownvotes.
     */
    cursor?: ForumThreadDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreadDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreadDownvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumThreadDownvotes.
     */
    distinct?: ForumThreadDownvoteScalarFieldEnum | ForumThreadDownvoteScalarFieldEnum[]
  }

  /**
   * ForumThreadDownvote findFirstOrThrow
   */
  export type ForumThreadDownvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreadDownvote to fetch.
     */
    where?: ForumThreadDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreadDownvotes to fetch.
     */
    orderBy?: ForumThreadDownvoteOrderByWithRelationInput | ForumThreadDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumThreadDownvotes.
     */
    cursor?: ForumThreadDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreadDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreadDownvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumThreadDownvotes.
     */
    distinct?: ForumThreadDownvoteScalarFieldEnum | ForumThreadDownvoteScalarFieldEnum[]
  }

  /**
   * ForumThreadDownvote findMany
   */
  export type ForumThreadDownvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumThreadDownvotes to fetch.
     */
    where?: ForumThreadDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumThreadDownvotes to fetch.
     */
    orderBy?: ForumThreadDownvoteOrderByWithRelationInput | ForumThreadDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumThreadDownvotes.
     */
    cursor?: ForumThreadDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumThreadDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumThreadDownvotes.
     */
    skip?: number
    distinct?: ForumThreadDownvoteScalarFieldEnum | ForumThreadDownvoteScalarFieldEnum[]
  }

  /**
   * ForumThreadDownvote create
   */
  export type ForumThreadDownvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumThreadDownvote.
     */
    data: XOR<ForumThreadDownvoteCreateInput, ForumThreadDownvoteUncheckedCreateInput>
  }

  /**
   * ForumThreadDownvote createMany
   */
  export type ForumThreadDownvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumThreadDownvotes.
     */
    data: ForumThreadDownvoteCreateManyInput | ForumThreadDownvoteCreateManyInput[]
  }

  /**
   * ForumThreadDownvote createManyAndReturn
   */
  export type ForumThreadDownvoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * The data used to create many ForumThreadDownvotes.
     */
    data: ForumThreadDownvoteCreateManyInput | ForumThreadDownvoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumThreadDownvote update
   */
  export type ForumThreadDownvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumThreadDownvote.
     */
    data: XOR<ForumThreadDownvoteUpdateInput, ForumThreadDownvoteUncheckedUpdateInput>
    /**
     * Choose, which ForumThreadDownvote to update.
     */
    where: ForumThreadDownvoteWhereUniqueInput
  }

  /**
   * ForumThreadDownvote updateMany
   */
  export type ForumThreadDownvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumThreadDownvotes.
     */
    data: XOR<ForumThreadDownvoteUpdateManyMutationInput, ForumThreadDownvoteUncheckedUpdateManyInput>
    /**
     * Filter which ForumThreadDownvotes to update
     */
    where?: ForumThreadDownvoteWhereInput
    /**
     * Limit how many ForumThreadDownvotes to update.
     */
    limit?: number
  }

  /**
   * ForumThreadDownvote updateManyAndReturn
   */
  export type ForumThreadDownvoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * The data used to update ForumThreadDownvotes.
     */
    data: XOR<ForumThreadDownvoteUpdateManyMutationInput, ForumThreadDownvoteUncheckedUpdateManyInput>
    /**
     * Filter which ForumThreadDownvotes to update
     */
    where?: ForumThreadDownvoteWhereInput
    /**
     * Limit how many ForumThreadDownvotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumThreadDownvote upsert
   */
  export type ForumThreadDownvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumThreadDownvote to update in case it exists.
     */
    where: ForumThreadDownvoteWhereUniqueInput
    /**
     * In case the ForumThreadDownvote found by the `where` argument doesn't exist, create a new ForumThreadDownvote with this data.
     */
    create: XOR<ForumThreadDownvoteCreateInput, ForumThreadDownvoteUncheckedCreateInput>
    /**
     * In case the ForumThreadDownvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumThreadDownvoteUpdateInput, ForumThreadDownvoteUncheckedUpdateInput>
  }

  /**
   * ForumThreadDownvote delete
   */
  export type ForumThreadDownvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteInclude<ExtArgs> | null
    /**
     * Filter which ForumThreadDownvote to delete.
     */
    where: ForumThreadDownvoteWhereUniqueInput
  }

  /**
   * ForumThreadDownvote deleteMany
   */
  export type ForumThreadDownvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumThreadDownvotes to delete
     */
    where?: ForumThreadDownvoteWhereInput
    /**
     * Limit how many ForumThreadDownvotes to delete.
     */
    limit?: number
  }

  /**
   * ForumThreadDownvote.ForumThread
   */
  export type ForumThreadDownvote$ForumThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThread
     */
    select?: ForumThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThread
     */
    omit?: ForumThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadInclude<ExtArgs> | null
    where?: ForumThreadWhereInput
  }

  /**
   * ForumThreadDownvote without action
   */
  export type ForumThreadDownvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumThreadDownvote
     */
    select?: ForumThreadDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumThreadDownvote
     */
    omit?: ForumThreadDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumThreadDownvoteInclude<ExtArgs> | null
  }


  /**
   * Model ForumCommentUpvote
   */

  export type AggregateForumCommentUpvote = {
    _count: ForumCommentUpvoteCountAggregateOutputType | null
    _avg: ForumCommentUpvoteAvgAggregateOutputType | null
    _sum: ForumCommentUpvoteSumAggregateOutputType | null
    _min: ForumCommentUpvoteMinAggregateOutputType | null
    _max: ForumCommentUpvoteMaxAggregateOutputType | null
  }

  export type ForumCommentUpvoteAvgAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
    forumCommentId: number | null
  }

  export type ForumCommentUpvoteSumAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
    forumCommentId: number | null
  }

  export type ForumCommentUpvoteMinAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
    forumCommentId: number | null
  }

  export type ForumCommentUpvoteMaxAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
    forumCommentId: number | null
  }

  export type ForumCommentUpvoteCountAggregateOutputType = {
    id: number
    commentId: number
    userId: number
    forumCommentId: number
    _all: number
  }


  export type ForumCommentUpvoteAvgAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    forumCommentId?: true
  }

  export type ForumCommentUpvoteSumAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    forumCommentId?: true
  }

  export type ForumCommentUpvoteMinAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    forumCommentId?: true
  }

  export type ForumCommentUpvoteMaxAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    forumCommentId?: true
  }

  export type ForumCommentUpvoteCountAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    forumCommentId?: true
    _all?: true
  }

  export type ForumCommentUpvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumCommentUpvote to aggregate.
     */
    where?: ForumCommentUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCommentUpvotes to fetch.
     */
    orderBy?: ForumCommentUpvoteOrderByWithRelationInput | ForumCommentUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumCommentUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCommentUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCommentUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumCommentUpvotes
    **/
    _count?: true | ForumCommentUpvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumCommentUpvoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumCommentUpvoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumCommentUpvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumCommentUpvoteMaxAggregateInputType
  }

  export type GetForumCommentUpvoteAggregateType<T extends ForumCommentUpvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateForumCommentUpvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumCommentUpvote[P]>
      : GetScalarType<T[P], AggregateForumCommentUpvote[P]>
  }




  export type ForumCommentUpvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentUpvoteWhereInput
    orderBy?: ForumCommentUpvoteOrderByWithAggregationInput | ForumCommentUpvoteOrderByWithAggregationInput[]
    by: ForumCommentUpvoteScalarFieldEnum[] | ForumCommentUpvoteScalarFieldEnum
    having?: ForumCommentUpvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCommentUpvoteCountAggregateInputType | true
    _avg?: ForumCommentUpvoteAvgAggregateInputType
    _sum?: ForumCommentUpvoteSumAggregateInputType
    _min?: ForumCommentUpvoteMinAggregateInputType
    _max?: ForumCommentUpvoteMaxAggregateInputType
  }

  export type ForumCommentUpvoteGroupByOutputType = {
    id: number
    commentId: number
    userId: number
    forumCommentId: number | null
    _count: ForumCommentUpvoteCountAggregateOutputType | null
    _avg: ForumCommentUpvoteAvgAggregateOutputType | null
    _sum: ForumCommentUpvoteSumAggregateOutputType | null
    _min: ForumCommentUpvoteMinAggregateOutputType | null
    _max: ForumCommentUpvoteMaxAggregateOutputType | null
  }

  type GetForumCommentUpvoteGroupByPayload<T extends ForumCommentUpvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumCommentUpvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumCommentUpvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumCommentUpvoteGroupByOutputType[P]>
            : GetScalarType<T[P], ForumCommentUpvoteGroupByOutputType[P]>
        }
      >
    >


  export type ForumCommentUpvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
    forumCommentId?: boolean
    ForumComment?: boolean | ForumCommentUpvote$ForumCommentArgs<ExtArgs>
  }, ExtArgs["result"]["forumCommentUpvote"]>

  export type ForumCommentUpvoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
    forumCommentId?: boolean
    ForumComment?: boolean | ForumCommentUpvote$ForumCommentArgs<ExtArgs>
  }, ExtArgs["result"]["forumCommentUpvote"]>

  export type ForumCommentUpvoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
    forumCommentId?: boolean
    ForumComment?: boolean | ForumCommentUpvote$ForumCommentArgs<ExtArgs>
  }, ExtArgs["result"]["forumCommentUpvote"]>

  export type ForumCommentUpvoteSelectScalar = {
    id?: boolean
    commentId?: boolean
    userId?: boolean
    forumCommentId?: boolean
  }

  export type ForumCommentUpvoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commentId" | "userId" | "forumCommentId", ExtArgs["result"]["forumCommentUpvote"]>
  export type ForumCommentUpvoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumComment?: boolean | ForumCommentUpvote$ForumCommentArgs<ExtArgs>
  }
  export type ForumCommentUpvoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumComment?: boolean | ForumCommentUpvote$ForumCommentArgs<ExtArgs>
  }
  export type ForumCommentUpvoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumComment?: boolean | ForumCommentUpvote$ForumCommentArgs<ExtArgs>
  }

  export type $ForumCommentUpvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumCommentUpvote"
    objects: {
      ForumComment: Prisma.$ForumCommentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      commentId: number
      userId: number
      forumCommentId: number | null
    }, ExtArgs["result"]["forumCommentUpvote"]>
    composites: {}
  }

  type ForumCommentUpvoteGetPayload<S extends boolean | null | undefined | ForumCommentUpvoteDefaultArgs> = $Result.GetResult<Prisma.$ForumCommentUpvotePayload, S>

  type ForumCommentUpvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumCommentUpvoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCommentUpvoteCountAggregateInputType | true
    }

  export interface ForumCommentUpvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumCommentUpvote'], meta: { name: 'ForumCommentUpvote' } }
    /**
     * Find zero or one ForumCommentUpvote that matches the filter.
     * @param {ForumCommentUpvoteFindUniqueArgs} args - Arguments to find a ForumCommentUpvote
     * @example
     * // Get one ForumCommentUpvote
     * const forumCommentUpvote = await prisma.forumCommentUpvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumCommentUpvoteFindUniqueArgs>(args: SelectSubset<T, ForumCommentUpvoteFindUniqueArgs<ExtArgs>>): Prisma__ForumCommentUpvoteClient<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumCommentUpvote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumCommentUpvoteFindUniqueOrThrowArgs} args - Arguments to find a ForumCommentUpvote
     * @example
     * // Get one ForumCommentUpvote
     * const forumCommentUpvote = await prisma.forumCommentUpvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumCommentUpvoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumCommentUpvoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumCommentUpvoteClient<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumCommentUpvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentUpvoteFindFirstArgs} args - Arguments to find a ForumCommentUpvote
     * @example
     * // Get one ForumCommentUpvote
     * const forumCommentUpvote = await prisma.forumCommentUpvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumCommentUpvoteFindFirstArgs>(args?: SelectSubset<T, ForumCommentUpvoteFindFirstArgs<ExtArgs>>): Prisma__ForumCommentUpvoteClient<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumCommentUpvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentUpvoteFindFirstOrThrowArgs} args - Arguments to find a ForumCommentUpvote
     * @example
     * // Get one ForumCommentUpvote
     * const forumCommentUpvote = await prisma.forumCommentUpvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumCommentUpvoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumCommentUpvoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumCommentUpvoteClient<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumCommentUpvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentUpvoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumCommentUpvotes
     * const forumCommentUpvotes = await prisma.forumCommentUpvote.findMany()
     * 
     * // Get first 10 ForumCommentUpvotes
     * const forumCommentUpvotes = await prisma.forumCommentUpvote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumCommentUpvoteWithIdOnly = await prisma.forumCommentUpvote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumCommentUpvoteFindManyArgs>(args?: SelectSubset<T, ForumCommentUpvoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumCommentUpvote.
     * @param {ForumCommentUpvoteCreateArgs} args - Arguments to create a ForumCommentUpvote.
     * @example
     * // Create one ForumCommentUpvote
     * const ForumCommentUpvote = await prisma.forumCommentUpvote.create({
     *   data: {
     *     // ... data to create a ForumCommentUpvote
     *   }
     * })
     * 
     */
    create<T extends ForumCommentUpvoteCreateArgs>(args: SelectSubset<T, ForumCommentUpvoteCreateArgs<ExtArgs>>): Prisma__ForumCommentUpvoteClient<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumCommentUpvotes.
     * @param {ForumCommentUpvoteCreateManyArgs} args - Arguments to create many ForumCommentUpvotes.
     * @example
     * // Create many ForumCommentUpvotes
     * const forumCommentUpvote = await prisma.forumCommentUpvote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCommentUpvoteCreateManyArgs>(args?: SelectSubset<T, ForumCommentUpvoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumCommentUpvotes and returns the data saved in the database.
     * @param {ForumCommentUpvoteCreateManyAndReturnArgs} args - Arguments to create many ForumCommentUpvotes.
     * @example
     * // Create many ForumCommentUpvotes
     * const forumCommentUpvote = await prisma.forumCommentUpvote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumCommentUpvotes and only return the `id`
     * const forumCommentUpvoteWithIdOnly = await prisma.forumCommentUpvote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumCommentUpvoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumCommentUpvoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumCommentUpvote.
     * @param {ForumCommentUpvoteDeleteArgs} args - Arguments to delete one ForumCommentUpvote.
     * @example
     * // Delete one ForumCommentUpvote
     * const ForumCommentUpvote = await prisma.forumCommentUpvote.delete({
     *   where: {
     *     // ... filter to delete one ForumCommentUpvote
     *   }
     * })
     * 
     */
    delete<T extends ForumCommentUpvoteDeleteArgs>(args: SelectSubset<T, ForumCommentUpvoteDeleteArgs<ExtArgs>>): Prisma__ForumCommentUpvoteClient<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumCommentUpvote.
     * @param {ForumCommentUpvoteUpdateArgs} args - Arguments to update one ForumCommentUpvote.
     * @example
     * // Update one ForumCommentUpvote
     * const forumCommentUpvote = await prisma.forumCommentUpvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumCommentUpvoteUpdateArgs>(args: SelectSubset<T, ForumCommentUpvoteUpdateArgs<ExtArgs>>): Prisma__ForumCommentUpvoteClient<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumCommentUpvotes.
     * @param {ForumCommentUpvoteDeleteManyArgs} args - Arguments to filter ForumCommentUpvotes to delete.
     * @example
     * // Delete a few ForumCommentUpvotes
     * const { count } = await prisma.forumCommentUpvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumCommentUpvoteDeleteManyArgs>(args?: SelectSubset<T, ForumCommentUpvoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumCommentUpvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentUpvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumCommentUpvotes
     * const forumCommentUpvote = await prisma.forumCommentUpvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumCommentUpvoteUpdateManyArgs>(args: SelectSubset<T, ForumCommentUpvoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumCommentUpvotes and returns the data updated in the database.
     * @param {ForumCommentUpvoteUpdateManyAndReturnArgs} args - Arguments to update many ForumCommentUpvotes.
     * @example
     * // Update many ForumCommentUpvotes
     * const forumCommentUpvote = await prisma.forumCommentUpvote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumCommentUpvotes and only return the `id`
     * const forumCommentUpvoteWithIdOnly = await prisma.forumCommentUpvote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumCommentUpvoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumCommentUpvoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumCommentUpvote.
     * @param {ForumCommentUpvoteUpsertArgs} args - Arguments to update or create a ForumCommentUpvote.
     * @example
     * // Update or create a ForumCommentUpvote
     * const forumCommentUpvote = await prisma.forumCommentUpvote.upsert({
     *   create: {
     *     // ... data to create a ForumCommentUpvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumCommentUpvote we want to update
     *   }
     * })
     */
    upsert<T extends ForumCommentUpvoteUpsertArgs>(args: SelectSubset<T, ForumCommentUpvoteUpsertArgs<ExtArgs>>): Prisma__ForumCommentUpvoteClient<$Result.GetResult<Prisma.$ForumCommentUpvotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumCommentUpvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentUpvoteCountArgs} args - Arguments to filter ForumCommentUpvotes to count.
     * @example
     * // Count the number of ForumCommentUpvotes
     * const count = await prisma.forumCommentUpvote.count({
     *   where: {
     *     // ... the filter for the ForumCommentUpvotes we want to count
     *   }
     * })
    **/
    count<T extends ForumCommentUpvoteCountArgs>(
      args?: Subset<T, ForumCommentUpvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumCommentUpvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumCommentUpvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentUpvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumCommentUpvoteAggregateArgs>(args: Subset<T, ForumCommentUpvoteAggregateArgs>): Prisma.PrismaPromise<GetForumCommentUpvoteAggregateType<T>>

    /**
     * Group by ForumCommentUpvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentUpvoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumCommentUpvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumCommentUpvoteGroupByArgs['orderBy'] }
        : { orderBy?: ForumCommentUpvoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumCommentUpvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumCommentUpvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumCommentUpvote model
   */
  readonly fields: ForumCommentUpvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumCommentUpvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumCommentUpvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ForumComment<T extends ForumCommentUpvote$ForumCommentArgs<ExtArgs> = {}>(args?: Subset<T, ForumCommentUpvote$ForumCommentArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumCommentUpvote model
   */
  interface ForumCommentUpvoteFieldRefs {
    readonly id: FieldRef<"ForumCommentUpvote", 'Int'>
    readonly commentId: FieldRef<"ForumCommentUpvote", 'Int'>
    readonly userId: FieldRef<"ForumCommentUpvote", 'Int'>
    readonly forumCommentId: FieldRef<"ForumCommentUpvote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ForumCommentUpvote findUnique
   */
  export type ForumCommentUpvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumCommentUpvote to fetch.
     */
    where: ForumCommentUpvoteWhereUniqueInput
  }

  /**
   * ForumCommentUpvote findUniqueOrThrow
   */
  export type ForumCommentUpvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumCommentUpvote to fetch.
     */
    where: ForumCommentUpvoteWhereUniqueInput
  }

  /**
   * ForumCommentUpvote findFirst
   */
  export type ForumCommentUpvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumCommentUpvote to fetch.
     */
    where?: ForumCommentUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCommentUpvotes to fetch.
     */
    orderBy?: ForumCommentUpvoteOrderByWithRelationInput | ForumCommentUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumCommentUpvotes.
     */
    cursor?: ForumCommentUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCommentUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCommentUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumCommentUpvotes.
     */
    distinct?: ForumCommentUpvoteScalarFieldEnum | ForumCommentUpvoteScalarFieldEnum[]
  }

  /**
   * ForumCommentUpvote findFirstOrThrow
   */
  export type ForumCommentUpvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumCommentUpvote to fetch.
     */
    where?: ForumCommentUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCommentUpvotes to fetch.
     */
    orderBy?: ForumCommentUpvoteOrderByWithRelationInput | ForumCommentUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumCommentUpvotes.
     */
    cursor?: ForumCommentUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCommentUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCommentUpvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumCommentUpvotes.
     */
    distinct?: ForumCommentUpvoteScalarFieldEnum | ForumCommentUpvoteScalarFieldEnum[]
  }

  /**
   * ForumCommentUpvote findMany
   */
  export type ForumCommentUpvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumCommentUpvotes to fetch.
     */
    where?: ForumCommentUpvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCommentUpvotes to fetch.
     */
    orderBy?: ForumCommentUpvoteOrderByWithRelationInput | ForumCommentUpvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumCommentUpvotes.
     */
    cursor?: ForumCommentUpvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCommentUpvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCommentUpvotes.
     */
    skip?: number
    distinct?: ForumCommentUpvoteScalarFieldEnum | ForumCommentUpvoteScalarFieldEnum[]
  }

  /**
   * ForumCommentUpvote create
   */
  export type ForumCommentUpvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumCommentUpvote.
     */
    data: XOR<ForumCommentUpvoteCreateInput, ForumCommentUpvoteUncheckedCreateInput>
  }

  /**
   * ForumCommentUpvote createMany
   */
  export type ForumCommentUpvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumCommentUpvotes.
     */
    data: ForumCommentUpvoteCreateManyInput | ForumCommentUpvoteCreateManyInput[]
  }

  /**
   * ForumCommentUpvote createManyAndReturn
   */
  export type ForumCommentUpvoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * The data used to create many ForumCommentUpvotes.
     */
    data: ForumCommentUpvoteCreateManyInput | ForumCommentUpvoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumCommentUpvote update
   */
  export type ForumCommentUpvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumCommentUpvote.
     */
    data: XOR<ForumCommentUpvoteUpdateInput, ForumCommentUpvoteUncheckedUpdateInput>
    /**
     * Choose, which ForumCommentUpvote to update.
     */
    where: ForumCommentUpvoteWhereUniqueInput
  }

  /**
   * ForumCommentUpvote updateMany
   */
  export type ForumCommentUpvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumCommentUpvotes.
     */
    data: XOR<ForumCommentUpvoteUpdateManyMutationInput, ForumCommentUpvoteUncheckedUpdateManyInput>
    /**
     * Filter which ForumCommentUpvotes to update
     */
    where?: ForumCommentUpvoteWhereInput
    /**
     * Limit how many ForumCommentUpvotes to update.
     */
    limit?: number
  }

  /**
   * ForumCommentUpvote updateManyAndReturn
   */
  export type ForumCommentUpvoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * The data used to update ForumCommentUpvotes.
     */
    data: XOR<ForumCommentUpvoteUpdateManyMutationInput, ForumCommentUpvoteUncheckedUpdateManyInput>
    /**
     * Filter which ForumCommentUpvotes to update
     */
    where?: ForumCommentUpvoteWhereInput
    /**
     * Limit how many ForumCommentUpvotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumCommentUpvote upsert
   */
  export type ForumCommentUpvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumCommentUpvote to update in case it exists.
     */
    where: ForumCommentUpvoteWhereUniqueInput
    /**
     * In case the ForumCommentUpvote found by the `where` argument doesn't exist, create a new ForumCommentUpvote with this data.
     */
    create: XOR<ForumCommentUpvoteCreateInput, ForumCommentUpvoteUncheckedCreateInput>
    /**
     * In case the ForumCommentUpvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumCommentUpvoteUpdateInput, ForumCommentUpvoteUncheckedUpdateInput>
  }

  /**
   * ForumCommentUpvote delete
   */
  export type ForumCommentUpvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteInclude<ExtArgs> | null
    /**
     * Filter which ForumCommentUpvote to delete.
     */
    where: ForumCommentUpvoteWhereUniqueInput
  }

  /**
   * ForumCommentUpvote deleteMany
   */
  export type ForumCommentUpvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumCommentUpvotes to delete
     */
    where?: ForumCommentUpvoteWhereInput
    /**
     * Limit how many ForumCommentUpvotes to delete.
     */
    limit?: number
  }

  /**
   * ForumCommentUpvote.ForumComment
   */
  export type ForumCommentUpvote$ForumCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
  }

  /**
   * ForumCommentUpvote without action
   */
  export type ForumCommentUpvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentUpvote
     */
    select?: ForumCommentUpvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentUpvote
     */
    omit?: ForumCommentUpvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentUpvoteInclude<ExtArgs> | null
  }


  /**
   * Model ForumCommentDownvote
   */

  export type AggregateForumCommentDownvote = {
    _count: ForumCommentDownvoteCountAggregateOutputType | null
    _avg: ForumCommentDownvoteAvgAggregateOutputType | null
    _sum: ForumCommentDownvoteSumAggregateOutputType | null
    _min: ForumCommentDownvoteMinAggregateOutputType | null
    _max: ForumCommentDownvoteMaxAggregateOutputType | null
  }

  export type ForumCommentDownvoteAvgAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
    forumCommentId: number | null
  }

  export type ForumCommentDownvoteSumAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
    forumCommentId: number | null
  }

  export type ForumCommentDownvoteMinAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
    forumCommentId: number | null
  }

  export type ForumCommentDownvoteMaxAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
    forumCommentId: number | null
  }

  export type ForumCommentDownvoteCountAggregateOutputType = {
    id: number
    commentId: number
    userId: number
    forumCommentId: number
    _all: number
  }


  export type ForumCommentDownvoteAvgAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    forumCommentId?: true
  }

  export type ForumCommentDownvoteSumAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    forumCommentId?: true
  }

  export type ForumCommentDownvoteMinAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    forumCommentId?: true
  }

  export type ForumCommentDownvoteMaxAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    forumCommentId?: true
  }

  export type ForumCommentDownvoteCountAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    forumCommentId?: true
    _all?: true
  }

  export type ForumCommentDownvoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumCommentDownvote to aggregate.
     */
    where?: ForumCommentDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCommentDownvotes to fetch.
     */
    orderBy?: ForumCommentDownvoteOrderByWithRelationInput | ForumCommentDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumCommentDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCommentDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCommentDownvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumCommentDownvotes
    **/
    _count?: true | ForumCommentDownvoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumCommentDownvoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumCommentDownvoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumCommentDownvoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumCommentDownvoteMaxAggregateInputType
  }

  export type GetForumCommentDownvoteAggregateType<T extends ForumCommentDownvoteAggregateArgs> = {
        [P in keyof T & keyof AggregateForumCommentDownvote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumCommentDownvote[P]>
      : GetScalarType<T[P], AggregateForumCommentDownvote[P]>
  }




  export type ForumCommentDownvoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentDownvoteWhereInput
    orderBy?: ForumCommentDownvoteOrderByWithAggregationInput | ForumCommentDownvoteOrderByWithAggregationInput[]
    by: ForumCommentDownvoteScalarFieldEnum[] | ForumCommentDownvoteScalarFieldEnum
    having?: ForumCommentDownvoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCommentDownvoteCountAggregateInputType | true
    _avg?: ForumCommentDownvoteAvgAggregateInputType
    _sum?: ForumCommentDownvoteSumAggregateInputType
    _min?: ForumCommentDownvoteMinAggregateInputType
    _max?: ForumCommentDownvoteMaxAggregateInputType
  }

  export type ForumCommentDownvoteGroupByOutputType = {
    id: number
    commentId: number
    userId: number
    forumCommentId: number | null
    _count: ForumCommentDownvoteCountAggregateOutputType | null
    _avg: ForumCommentDownvoteAvgAggregateOutputType | null
    _sum: ForumCommentDownvoteSumAggregateOutputType | null
    _min: ForumCommentDownvoteMinAggregateOutputType | null
    _max: ForumCommentDownvoteMaxAggregateOutputType | null
  }

  type GetForumCommentDownvoteGroupByPayload<T extends ForumCommentDownvoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumCommentDownvoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumCommentDownvoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumCommentDownvoteGroupByOutputType[P]>
            : GetScalarType<T[P], ForumCommentDownvoteGroupByOutputType[P]>
        }
      >
    >


  export type ForumCommentDownvoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
    forumCommentId?: boolean
    ForumComment?: boolean | ForumCommentDownvote$ForumCommentArgs<ExtArgs>
  }, ExtArgs["result"]["forumCommentDownvote"]>

  export type ForumCommentDownvoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
    forumCommentId?: boolean
    ForumComment?: boolean | ForumCommentDownvote$ForumCommentArgs<ExtArgs>
  }, ExtArgs["result"]["forumCommentDownvote"]>

  export type ForumCommentDownvoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
    forumCommentId?: boolean
    ForumComment?: boolean | ForumCommentDownvote$ForumCommentArgs<ExtArgs>
  }, ExtArgs["result"]["forumCommentDownvote"]>

  export type ForumCommentDownvoteSelectScalar = {
    id?: boolean
    commentId?: boolean
    userId?: boolean
    forumCommentId?: boolean
  }

  export type ForumCommentDownvoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commentId" | "userId" | "forumCommentId", ExtArgs["result"]["forumCommentDownvote"]>
  export type ForumCommentDownvoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumComment?: boolean | ForumCommentDownvote$ForumCommentArgs<ExtArgs>
  }
  export type ForumCommentDownvoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumComment?: boolean | ForumCommentDownvote$ForumCommentArgs<ExtArgs>
  }
  export type ForumCommentDownvoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForumComment?: boolean | ForumCommentDownvote$ForumCommentArgs<ExtArgs>
  }

  export type $ForumCommentDownvotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumCommentDownvote"
    objects: {
      ForumComment: Prisma.$ForumCommentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      commentId: number
      userId: number
      forumCommentId: number | null
    }, ExtArgs["result"]["forumCommentDownvote"]>
    composites: {}
  }

  type ForumCommentDownvoteGetPayload<S extends boolean | null | undefined | ForumCommentDownvoteDefaultArgs> = $Result.GetResult<Prisma.$ForumCommentDownvotePayload, S>

  type ForumCommentDownvoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumCommentDownvoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCommentDownvoteCountAggregateInputType | true
    }

  export interface ForumCommentDownvoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumCommentDownvote'], meta: { name: 'ForumCommentDownvote' } }
    /**
     * Find zero or one ForumCommentDownvote that matches the filter.
     * @param {ForumCommentDownvoteFindUniqueArgs} args - Arguments to find a ForumCommentDownvote
     * @example
     * // Get one ForumCommentDownvote
     * const forumCommentDownvote = await prisma.forumCommentDownvote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumCommentDownvoteFindUniqueArgs>(args: SelectSubset<T, ForumCommentDownvoteFindUniqueArgs<ExtArgs>>): Prisma__ForumCommentDownvoteClient<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumCommentDownvote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumCommentDownvoteFindUniqueOrThrowArgs} args - Arguments to find a ForumCommentDownvote
     * @example
     * // Get one ForumCommentDownvote
     * const forumCommentDownvote = await prisma.forumCommentDownvote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumCommentDownvoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumCommentDownvoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumCommentDownvoteClient<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumCommentDownvote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentDownvoteFindFirstArgs} args - Arguments to find a ForumCommentDownvote
     * @example
     * // Get one ForumCommentDownvote
     * const forumCommentDownvote = await prisma.forumCommentDownvote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumCommentDownvoteFindFirstArgs>(args?: SelectSubset<T, ForumCommentDownvoteFindFirstArgs<ExtArgs>>): Prisma__ForumCommentDownvoteClient<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumCommentDownvote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentDownvoteFindFirstOrThrowArgs} args - Arguments to find a ForumCommentDownvote
     * @example
     * // Get one ForumCommentDownvote
     * const forumCommentDownvote = await prisma.forumCommentDownvote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumCommentDownvoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumCommentDownvoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumCommentDownvoteClient<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumCommentDownvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentDownvoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumCommentDownvotes
     * const forumCommentDownvotes = await prisma.forumCommentDownvote.findMany()
     * 
     * // Get first 10 ForumCommentDownvotes
     * const forumCommentDownvotes = await prisma.forumCommentDownvote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumCommentDownvoteWithIdOnly = await prisma.forumCommentDownvote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumCommentDownvoteFindManyArgs>(args?: SelectSubset<T, ForumCommentDownvoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumCommentDownvote.
     * @param {ForumCommentDownvoteCreateArgs} args - Arguments to create a ForumCommentDownvote.
     * @example
     * // Create one ForumCommentDownvote
     * const ForumCommentDownvote = await prisma.forumCommentDownvote.create({
     *   data: {
     *     // ... data to create a ForumCommentDownvote
     *   }
     * })
     * 
     */
    create<T extends ForumCommentDownvoteCreateArgs>(args: SelectSubset<T, ForumCommentDownvoteCreateArgs<ExtArgs>>): Prisma__ForumCommentDownvoteClient<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumCommentDownvotes.
     * @param {ForumCommentDownvoteCreateManyArgs} args - Arguments to create many ForumCommentDownvotes.
     * @example
     * // Create many ForumCommentDownvotes
     * const forumCommentDownvote = await prisma.forumCommentDownvote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCommentDownvoteCreateManyArgs>(args?: SelectSubset<T, ForumCommentDownvoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumCommentDownvotes and returns the data saved in the database.
     * @param {ForumCommentDownvoteCreateManyAndReturnArgs} args - Arguments to create many ForumCommentDownvotes.
     * @example
     * // Create many ForumCommentDownvotes
     * const forumCommentDownvote = await prisma.forumCommentDownvote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumCommentDownvotes and only return the `id`
     * const forumCommentDownvoteWithIdOnly = await prisma.forumCommentDownvote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumCommentDownvoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumCommentDownvoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumCommentDownvote.
     * @param {ForumCommentDownvoteDeleteArgs} args - Arguments to delete one ForumCommentDownvote.
     * @example
     * // Delete one ForumCommentDownvote
     * const ForumCommentDownvote = await prisma.forumCommentDownvote.delete({
     *   where: {
     *     // ... filter to delete one ForumCommentDownvote
     *   }
     * })
     * 
     */
    delete<T extends ForumCommentDownvoteDeleteArgs>(args: SelectSubset<T, ForumCommentDownvoteDeleteArgs<ExtArgs>>): Prisma__ForumCommentDownvoteClient<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumCommentDownvote.
     * @param {ForumCommentDownvoteUpdateArgs} args - Arguments to update one ForumCommentDownvote.
     * @example
     * // Update one ForumCommentDownvote
     * const forumCommentDownvote = await prisma.forumCommentDownvote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumCommentDownvoteUpdateArgs>(args: SelectSubset<T, ForumCommentDownvoteUpdateArgs<ExtArgs>>): Prisma__ForumCommentDownvoteClient<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumCommentDownvotes.
     * @param {ForumCommentDownvoteDeleteManyArgs} args - Arguments to filter ForumCommentDownvotes to delete.
     * @example
     * // Delete a few ForumCommentDownvotes
     * const { count } = await prisma.forumCommentDownvote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumCommentDownvoteDeleteManyArgs>(args?: SelectSubset<T, ForumCommentDownvoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumCommentDownvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentDownvoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumCommentDownvotes
     * const forumCommentDownvote = await prisma.forumCommentDownvote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumCommentDownvoteUpdateManyArgs>(args: SelectSubset<T, ForumCommentDownvoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumCommentDownvotes and returns the data updated in the database.
     * @param {ForumCommentDownvoteUpdateManyAndReturnArgs} args - Arguments to update many ForumCommentDownvotes.
     * @example
     * // Update many ForumCommentDownvotes
     * const forumCommentDownvote = await prisma.forumCommentDownvote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumCommentDownvotes and only return the `id`
     * const forumCommentDownvoteWithIdOnly = await prisma.forumCommentDownvote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumCommentDownvoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumCommentDownvoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumCommentDownvote.
     * @param {ForumCommentDownvoteUpsertArgs} args - Arguments to update or create a ForumCommentDownvote.
     * @example
     * // Update or create a ForumCommentDownvote
     * const forumCommentDownvote = await prisma.forumCommentDownvote.upsert({
     *   create: {
     *     // ... data to create a ForumCommentDownvote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumCommentDownvote we want to update
     *   }
     * })
     */
    upsert<T extends ForumCommentDownvoteUpsertArgs>(args: SelectSubset<T, ForumCommentDownvoteUpsertArgs<ExtArgs>>): Prisma__ForumCommentDownvoteClient<$Result.GetResult<Prisma.$ForumCommentDownvotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumCommentDownvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentDownvoteCountArgs} args - Arguments to filter ForumCommentDownvotes to count.
     * @example
     * // Count the number of ForumCommentDownvotes
     * const count = await prisma.forumCommentDownvote.count({
     *   where: {
     *     // ... the filter for the ForumCommentDownvotes we want to count
     *   }
     * })
    **/
    count<T extends ForumCommentDownvoteCountArgs>(
      args?: Subset<T, ForumCommentDownvoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumCommentDownvoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumCommentDownvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentDownvoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumCommentDownvoteAggregateArgs>(args: Subset<T, ForumCommentDownvoteAggregateArgs>): Prisma.PrismaPromise<GetForumCommentDownvoteAggregateType<T>>

    /**
     * Group by ForumCommentDownvote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentDownvoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumCommentDownvoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumCommentDownvoteGroupByArgs['orderBy'] }
        : { orderBy?: ForumCommentDownvoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumCommentDownvoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumCommentDownvoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumCommentDownvote model
   */
  readonly fields: ForumCommentDownvoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumCommentDownvote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumCommentDownvoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ForumComment<T extends ForumCommentDownvote$ForumCommentArgs<ExtArgs> = {}>(args?: Subset<T, ForumCommentDownvote$ForumCommentArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumCommentDownvote model
   */
  interface ForumCommentDownvoteFieldRefs {
    readonly id: FieldRef<"ForumCommentDownvote", 'Int'>
    readonly commentId: FieldRef<"ForumCommentDownvote", 'Int'>
    readonly userId: FieldRef<"ForumCommentDownvote", 'Int'>
    readonly forumCommentId: FieldRef<"ForumCommentDownvote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ForumCommentDownvote findUnique
   */
  export type ForumCommentDownvoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumCommentDownvote to fetch.
     */
    where: ForumCommentDownvoteWhereUniqueInput
  }

  /**
   * ForumCommentDownvote findUniqueOrThrow
   */
  export type ForumCommentDownvoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumCommentDownvote to fetch.
     */
    where: ForumCommentDownvoteWhereUniqueInput
  }

  /**
   * ForumCommentDownvote findFirst
   */
  export type ForumCommentDownvoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumCommentDownvote to fetch.
     */
    where?: ForumCommentDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCommentDownvotes to fetch.
     */
    orderBy?: ForumCommentDownvoteOrderByWithRelationInput | ForumCommentDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumCommentDownvotes.
     */
    cursor?: ForumCommentDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCommentDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCommentDownvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumCommentDownvotes.
     */
    distinct?: ForumCommentDownvoteScalarFieldEnum | ForumCommentDownvoteScalarFieldEnum[]
  }

  /**
   * ForumCommentDownvote findFirstOrThrow
   */
  export type ForumCommentDownvoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumCommentDownvote to fetch.
     */
    where?: ForumCommentDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCommentDownvotes to fetch.
     */
    orderBy?: ForumCommentDownvoteOrderByWithRelationInput | ForumCommentDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumCommentDownvotes.
     */
    cursor?: ForumCommentDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCommentDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCommentDownvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumCommentDownvotes.
     */
    distinct?: ForumCommentDownvoteScalarFieldEnum | ForumCommentDownvoteScalarFieldEnum[]
  }

  /**
   * ForumCommentDownvote findMany
   */
  export type ForumCommentDownvoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteInclude<ExtArgs> | null
    /**
     * Filter, which ForumCommentDownvotes to fetch.
     */
    where?: ForumCommentDownvoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCommentDownvotes to fetch.
     */
    orderBy?: ForumCommentDownvoteOrderByWithRelationInput | ForumCommentDownvoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumCommentDownvotes.
     */
    cursor?: ForumCommentDownvoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCommentDownvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCommentDownvotes.
     */
    skip?: number
    distinct?: ForumCommentDownvoteScalarFieldEnum | ForumCommentDownvoteScalarFieldEnum[]
  }

  /**
   * ForumCommentDownvote create
   */
  export type ForumCommentDownvoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumCommentDownvote.
     */
    data: XOR<ForumCommentDownvoteCreateInput, ForumCommentDownvoteUncheckedCreateInput>
  }

  /**
   * ForumCommentDownvote createMany
   */
  export type ForumCommentDownvoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumCommentDownvotes.
     */
    data: ForumCommentDownvoteCreateManyInput | ForumCommentDownvoteCreateManyInput[]
  }

  /**
   * ForumCommentDownvote createManyAndReturn
   */
  export type ForumCommentDownvoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * The data used to create many ForumCommentDownvotes.
     */
    data: ForumCommentDownvoteCreateManyInput | ForumCommentDownvoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumCommentDownvote update
   */
  export type ForumCommentDownvoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumCommentDownvote.
     */
    data: XOR<ForumCommentDownvoteUpdateInput, ForumCommentDownvoteUncheckedUpdateInput>
    /**
     * Choose, which ForumCommentDownvote to update.
     */
    where: ForumCommentDownvoteWhereUniqueInput
  }

  /**
   * ForumCommentDownvote updateMany
   */
  export type ForumCommentDownvoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumCommentDownvotes.
     */
    data: XOR<ForumCommentDownvoteUpdateManyMutationInput, ForumCommentDownvoteUncheckedUpdateManyInput>
    /**
     * Filter which ForumCommentDownvotes to update
     */
    where?: ForumCommentDownvoteWhereInput
    /**
     * Limit how many ForumCommentDownvotes to update.
     */
    limit?: number
  }

  /**
   * ForumCommentDownvote updateManyAndReturn
   */
  export type ForumCommentDownvoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * The data used to update ForumCommentDownvotes.
     */
    data: XOR<ForumCommentDownvoteUpdateManyMutationInput, ForumCommentDownvoteUncheckedUpdateManyInput>
    /**
     * Filter which ForumCommentDownvotes to update
     */
    where?: ForumCommentDownvoteWhereInput
    /**
     * Limit how many ForumCommentDownvotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumCommentDownvote upsert
   */
  export type ForumCommentDownvoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumCommentDownvote to update in case it exists.
     */
    where: ForumCommentDownvoteWhereUniqueInput
    /**
     * In case the ForumCommentDownvote found by the `where` argument doesn't exist, create a new ForumCommentDownvote with this data.
     */
    create: XOR<ForumCommentDownvoteCreateInput, ForumCommentDownvoteUncheckedCreateInput>
    /**
     * In case the ForumCommentDownvote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumCommentDownvoteUpdateInput, ForumCommentDownvoteUncheckedUpdateInput>
  }

  /**
   * ForumCommentDownvote delete
   */
  export type ForumCommentDownvoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteInclude<ExtArgs> | null
    /**
     * Filter which ForumCommentDownvote to delete.
     */
    where: ForumCommentDownvoteWhereUniqueInput
  }

  /**
   * ForumCommentDownvote deleteMany
   */
  export type ForumCommentDownvoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumCommentDownvotes to delete
     */
    where?: ForumCommentDownvoteWhereInput
    /**
     * Limit how many ForumCommentDownvotes to delete.
     */
    limit?: number
  }

  /**
   * ForumCommentDownvote.ForumComment
   */
  export type ForumCommentDownvote$ForumCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
  }

  /**
   * ForumCommentDownvote without action
   */
  export type ForumCommentDownvoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentDownvote
     */
    select?: ForumCommentDownvoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCommentDownvote
     */
    omit?: ForumCommentDownvoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentDownvoteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    provider: 'provider',
    providerAccountId: 'providerAccountId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    upvotes: 'upvotes'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    author: 'author'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const UpvoteScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    userId: 'userId'
  };

  export type UpvoteScalarFieldEnum = (typeof UpvoteScalarFieldEnum)[keyof typeof UpvoteScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    upvotes: 'upvotes',
    downvotes: 'downvotes',
    blogId: 'blogId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const CommentUpvoteScalarFieldEnum: {
    id: 'id',
    commentId: 'commentId',
    userId: 'userId'
  };

  export type CommentUpvoteScalarFieldEnum = (typeof CommentUpvoteScalarFieldEnum)[keyof typeof CommentUpvoteScalarFieldEnum]


  export const CommentDownvoteScalarFieldEnum: {
    id: 'id',
    commentId: 'commentId',
    userId: 'userId'
  };

  export type CommentDownvoteScalarFieldEnum = (typeof CommentDownvoteScalarFieldEnum)[keyof typeof CommentDownvoteScalarFieldEnum]


  export const ForumThreadScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    createdAt: 'createdAt',
    upvotes: 'upvotes',
    downvotes: 'downvotes'
  };

  export type ForumThreadScalarFieldEnum = (typeof ForumThreadScalarFieldEnum)[keyof typeof ForumThreadScalarFieldEnum]


  export const ForumCommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    authorId: 'authorId',
    threadId: 'threadId',
    parentId: 'parentId',
    createdAt: 'createdAt',
    upvotes: 'upvotes',
    downvotes: 'downvotes'
  };

  export type ForumCommentScalarFieldEnum = (typeof ForumCommentScalarFieldEnum)[keyof typeof ForumCommentScalarFieldEnum]


  export const ForumThreadUpvoteScalarFieldEnum: {
    id: 'id',
    threadId: 'threadId',
    userId: 'userId',
    forumThreadId: 'forumThreadId'
  };

  export type ForumThreadUpvoteScalarFieldEnum = (typeof ForumThreadUpvoteScalarFieldEnum)[keyof typeof ForumThreadUpvoteScalarFieldEnum]


  export const ForumThreadDownvoteScalarFieldEnum: {
    id: 'id',
    threadId: 'threadId',
    userId: 'userId',
    forumThreadId: 'forumThreadId'
  };

  export type ForumThreadDownvoteScalarFieldEnum = (typeof ForumThreadDownvoteScalarFieldEnum)[keyof typeof ForumThreadDownvoteScalarFieldEnum]


  export const ForumCommentUpvoteScalarFieldEnum: {
    id: 'id',
    commentId: 'commentId',
    userId: 'userId',
    forumCommentId: 'forumCommentId'
  };

  export type ForumCommentUpvoteScalarFieldEnum = (typeof ForumCommentUpvoteScalarFieldEnum)[keyof typeof ForumCommentUpvoteScalarFieldEnum]


  export const ForumCommentDownvoteScalarFieldEnum: {
    id: 'id',
    commentId: 'commentId',
    userId: 'userId',
    forumCommentId: 'forumCommentId'
  };

  export type ForumCommentDownvoteScalarFieldEnum = (typeof ForumCommentDownvoteScalarFieldEnum)[keyof typeof ForumCommentDownvoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    provider?: StringNullableFilter<"User"> | string | null
    providerAccountId?: StringNullableFilter<"User"> | string | null
    blogs?: BlogListRelationFilter
    ForumThread?: ForumThreadListRelationFilter
    ForumComment?: ForumCommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerAccountId?: SortOrderInput | SortOrder
    blogs?: BlogOrderByRelationAggregateInput
    ForumThread?: ForumThreadOrderByRelationAggregateInput
    ForumComment?: ForumCommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    provider?: StringNullableFilter<"User"> | string | null
    providerAccountId?: StringNullableFilter<"User"> | string | null
    blogs?: BlogListRelationFilter
    ForumThread?: ForumThreadListRelationFilter
    ForumComment?: ForumCommentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerAccountId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    providerAccountId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    authorId?: IntFilter<"Blog"> | number
    upvotes?: IntFilter<"Blog"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    upvotesRelation?: UpvoteListRelationFilter
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
    author?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    upvotesRelation?: UpvoteOrderByRelationAggregateInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    authorId?: IntFilter<"Blog"> | number
    upvotes?: IntFilter<"Blog"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    upvotesRelation?: UpvoteListRelationFilter
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blog"> | number
    title?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringWithAggregatesFilter<"Blog"> | string
    authorId?: IntWithAggregatesFilter<"Blog"> | number
    upvotes?: IntWithAggregatesFilter<"Blog"> | number
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    title?: StringFilter<"Image"> | string
    author?: StringFilter<"Image"> | string
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    author?: SortOrder
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    title?: StringFilter<"Image"> | string
    author?: StringFilter<"Image"> | string
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    author?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    url?: StringWithAggregatesFilter<"Image"> | string
    title?: StringWithAggregatesFilter<"Image"> | string
    author?: StringWithAggregatesFilter<"Image"> | string
  }

  export type UpvoteWhereInput = {
    AND?: UpvoteWhereInput | UpvoteWhereInput[]
    OR?: UpvoteWhereInput[]
    NOT?: UpvoteWhereInput | UpvoteWhereInput[]
    id?: IntFilter<"Upvote"> | number
    blogId?: IntFilter<"Upvote"> | number
    userId?: IntFilter<"Upvote"> | number
    Blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }

  export type UpvoteOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    Blog?: BlogOrderByWithRelationInput
  }

  export type UpvoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    blogId_userId?: UpvoteBlogIdUserIdCompoundUniqueInput
    AND?: UpvoteWhereInput | UpvoteWhereInput[]
    OR?: UpvoteWhereInput[]
    NOT?: UpvoteWhereInput | UpvoteWhereInput[]
    blogId?: IntFilter<"Upvote"> | number
    userId?: IntFilter<"Upvote"> | number
    Blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }, "id" | "blogId_userId">

  export type UpvoteOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
    _count?: UpvoteCountOrderByAggregateInput
    _avg?: UpvoteAvgOrderByAggregateInput
    _max?: UpvoteMaxOrderByAggregateInput
    _min?: UpvoteMinOrderByAggregateInput
    _sum?: UpvoteSumOrderByAggregateInput
  }

  export type UpvoteScalarWhereWithAggregatesInput = {
    AND?: UpvoteScalarWhereWithAggregatesInput | UpvoteScalarWhereWithAggregatesInput[]
    OR?: UpvoteScalarWhereWithAggregatesInput[]
    NOT?: UpvoteScalarWhereWithAggregatesInput | UpvoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Upvote"> | number
    blogId?: IntWithAggregatesFilter<"Upvote"> | number
    userId?: IntWithAggregatesFilter<"Upvote"> | number
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    upvotes?: IntFilter<"Comment"> | number
    downvotes?: IntFilter<"Comment"> | number
    blogId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    blogId?: SortOrder
    createdAt?: SortOrder
    blog?: BlogOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    upvotes?: IntFilter<"Comment"> | number
    downvotes?: IntFilter<"Comment"> | number
    blogId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    blogId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    upvotes?: IntWithAggregatesFilter<"Comment"> | number
    downvotes?: IntWithAggregatesFilter<"Comment"> | number
    blogId?: IntWithAggregatesFilter<"Comment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type CommentUpvoteWhereInput = {
    AND?: CommentUpvoteWhereInput | CommentUpvoteWhereInput[]
    OR?: CommentUpvoteWhereInput[]
    NOT?: CommentUpvoteWhereInput | CommentUpvoteWhereInput[]
    id?: IntFilter<"CommentUpvote"> | number
    commentId?: IntFilter<"CommentUpvote"> | number
    userId?: IntFilter<"CommentUpvote"> | number
  }

  export type CommentUpvoteOrderByWithRelationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentUpvoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    commentId_userId?: CommentUpvoteCommentIdUserIdCompoundUniqueInput
    AND?: CommentUpvoteWhereInput | CommentUpvoteWhereInput[]
    OR?: CommentUpvoteWhereInput[]
    NOT?: CommentUpvoteWhereInput | CommentUpvoteWhereInput[]
    commentId?: IntFilter<"CommentUpvote"> | number
    userId?: IntFilter<"CommentUpvote"> | number
  }, "id" | "commentId_userId">

  export type CommentUpvoteOrderByWithAggregationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    _count?: CommentUpvoteCountOrderByAggregateInput
    _avg?: CommentUpvoteAvgOrderByAggregateInput
    _max?: CommentUpvoteMaxOrderByAggregateInput
    _min?: CommentUpvoteMinOrderByAggregateInput
    _sum?: CommentUpvoteSumOrderByAggregateInput
  }

  export type CommentUpvoteScalarWhereWithAggregatesInput = {
    AND?: CommentUpvoteScalarWhereWithAggregatesInput | CommentUpvoteScalarWhereWithAggregatesInput[]
    OR?: CommentUpvoteScalarWhereWithAggregatesInput[]
    NOT?: CommentUpvoteScalarWhereWithAggregatesInput | CommentUpvoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommentUpvote"> | number
    commentId?: IntWithAggregatesFilter<"CommentUpvote"> | number
    userId?: IntWithAggregatesFilter<"CommentUpvote"> | number
  }

  export type CommentDownvoteWhereInput = {
    AND?: CommentDownvoteWhereInput | CommentDownvoteWhereInput[]
    OR?: CommentDownvoteWhereInput[]
    NOT?: CommentDownvoteWhereInput | CommentDownvoteWhereInput[]
    id?: IntFilter<"CommentDownvote"> | number
    commentId?: IntFilter<"CommentDownvote"> | number
    userId?: IntFilter<"CommentDownvote"> | number
  }

  export type CommentDownvoteOrderByWithRelationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentDownvoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    commentId_userId?: CommentDownvoteCommentIdUserIdCompoundUniqueInput
    AND?: CommentDownvoteWhereInput | CommentDownvoteWhereInput[]
    OR?: CommentDownvoteWhereInput[]
    NOT?: CommentDownvoteWhereInput | CommentDownvoteWhereInput[]
    commentId?: IntFilter<"CommentDownvote"> | number
    userId?: IntFilter<"CommentDownvote"> | number
  }, "id" | "commentId_userId">

  export type CommentDownvoteOrderByWithAggregationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    _count?: CommentDownvoteCountOrderByAggregateInput
    _avg?: CommentDownvoteAvgOrderByAggregateInput
    _max?: CommentDownvoteMaxOrderByAggregateInput
    _min?: CommentDownvoteMinOrderByAggregateInput
    _sum?: CommentDownvoteSumOrderByAggregateInput
  }

  export type CommentDownvoteScalarWhereWithAggregatesInput = {
    AND?: CommentDownvoteScalarWhereWithAggregatesInput | CommentDownvoteScalarWhereWithAggregatesInput[]
    OR?: CommentDownvoteScalarWhereWithAggregatesInput[]
    NOT?: CommentDownvoteScalarWhereWithAggregatesInput | CommentDownvoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommentDownvote"> | number
    commentId?: IntWithAggregatesFilter<"CommentDownvote"> | number
    userId?: IntWithAggregatesFilter<"CommentDownvote"> | number
  }

  export type ForumThreadWhereInput = {
    AND?: ForumThreadWhereInput | ForumThreadWhereInput[]
    OR?: ForumThreadWhereInput[]
    NOT?: ForumThreadWhereInput | ForumThreadWhereInput[]
    id?: IntFilter<"ForumThread"> | number
    title?: StringFilter<"ForumThread"> | string
    content?: StringFilter<"ForumThread"> | string
    authorId?: IntFilter<"ForumThread"> | number
    createdAt?: DateTimeFilter<"ForumThread"> | Date | string
    upvotes?: IntFilter<"ForumThread"> | number
    downvotes?: IntFilter<"ForumThread"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: ForumCommentListRelationFilter
    upvotesRelation?: ForumThreadUpvoteListRelationFilter
    downvotesRelation?: ForumThreadDownvoteListRelationFilter
  }

  export type ForumThreadOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    author?: UserOrderByWithRelationInput
    comments?: ForumCommentOrderByRelationAggregateInput
    upvotesRelation?: ForumThreadUpvoteOrderByRelationAggregateInput
    downvotesRelation?: ForumThreadDownvoteOrderByRelationAggregateInput
  }

  export type ForumThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ForumThreadWhereInput | ForumThreadWhereInput[]
    OR?: ForumThreadWhereInput[]
    NOT?: ForumThreadWhereInput | ForumThreadWhereInput[]
    title?: StringFilter<"ForumThread"> | string
    content?: StringFilter<"ForumThread"> | string
    authorId?: IntFilter<"ForumThread"> | number
    createdAt?: DateTimeFilter<"ForumThread"> | Date | string
    upvotes?: IntFilter<"ForumThread"> | number
    downvotes?: IntFilter<"ForumThread"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: ForumCommentListRelationFilter
    upvotesRelation?: ForumThreadUpvoteListRelationFilter
    downvotesRelation?: ForumThreadDownvoteListRelationFilter
  }, "id">

  export type ForumThreadOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    _count?: ForumThreadCountOrderByAggregateInput
    _avg?: ForumThreadAvgOrderByAggregateInput
    _max?: ForumThreadMaxOrderByAggregateInput
    _min?: ForumThreadMinOrderByAggregateInput
    _sum?: ForumThreadSumOrderByAggregateInput
  }

  export type ForumThreadScalarWhereWithAggregatesInput = {
    AND?: ForumThreadScalarWhereWithAggregatesInput | ForumThreadScalarWhereWithAggregatesInput[]
    OR?: ForumThreadScalarWhereWithAggregatesInput[]
    NOT?: ForumThreadScalarWhereWithAggregatesInput | ForumThreadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ForumThread"> | number
    title?: StringWithAggregatesFilter<"ForumThread"> | string
    content?: StringWithAggregatesFilter<"ForumThread"> | string
    authorId?: IntWithAggregatesFilter<"ForumThread"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ForumThread"> | Date | string
    upvotes?: IntWithAggregatesFilter<"ForumThread"> | number
    downvotes?: IntWithAggregatesFilter<"ForumThread"> | number
  }

  export type ForumCommentWhereInput = {
    AND?: ForumCommentWhereInput | ForumCommentWhereInput[]
    OR?: ForumCommentWhereInput[]
    NOT?: ForumCommentWhereInput | ForumCommentWhereInput[]
    id?: IntFilter<"ForumComment"> | number
    content?: StringFilter<"ForumComment"> | string
    authorId?: IntFilter<"ForumComment"> | number
    threadId?: IntFilter<"ForumComment"> | number
    parentId?: IntNullableFilter<"ForumComment"> | number | null
    createdAt?: DateTimeFilter<"ForumComment"> | Date | string
    upvotes?: IntFilter<"ForumComment"> | number
    downvotes?: IntFilter<"ForumComment"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    thread?: XOR<ForumThreadScalarRelationFilter, ForumThreadWhereInput>
    parent?: XOR<ForumCommentNullableScalarRelationFilter, ForumCommentWhereInput> | null
    replies?: ForumCommentListRelationFilter
    upvotesRelation?: ForumCommentUpvoteListRelationFilter
    downvotesRelation?: ForumCommentDownvoteListRelationFilter
  }

  export type ForumCommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    threadId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    author?: UserOrderByWithRelationInput
    thread?: ForumThreadOrderByWithRelationInput
    parent?: ForumCommentOrderByWithRelationInput
    replies?: ForumCommentOrderByRelationAggregateInput
    upvotesRelation?: ForumCommentUpvoteOrderByRelationAggregateInput
    downvotesRelation?: ForumCommentDownvoteOrderByRelationAggregateInput
  }

  export type ForumCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ForumCommentWhereInput | ForumCommentWhereInput[]
    OR?: ForumCommentWhereInput[]
    NOT?: ForumCommentWhereInput | ForumCommentWhereInput[]
    content?: StringFilter<"ForumComment"> | string
    authorId?: IntFilter<"ForumComment"> | number
    threadId?: IntFilter<"ForumComment"> | number
    parentId?: IntNullableFilter<"ForumComment"> | number | null
    createdAt?: DateTimeFilter<"ForumComment"> | Date | string
    upvotes?: IntFilter<"ForumComment"> | number
    downvotes?: IntFilter<"ForumComment"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    thread?: XOR<ForumThreadScalarRelationFilter, ForumThreadWhereInput>
    parent?: XOR<ForumCommentNullableScalarRelationFilter, ForumCommentWhereInput> | null
    replies?: ForumCommentListRelationFilter
    upvotesRelation?: ForumCommentUpvoteListRelationFilter
    downvotesRelation?: ForumCommentDownvoteListRelationFilter
  }, "id">

  export type ForumCommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    threadId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    _count?: ForumCommentCountOrderByAggregateInput
    _avg?: ForumCommentAvgOrderByAggregateInput
    _max?: ForumCommentMaxOrderByAggregateInput
    _min?: ForumCommentMinOrderByAggregateInput
    _sum?: ForumCommentSumOrderByAggregateInput
  }

  export type ForumCommentScalarWhereWithAggregatesInput = {
    AND?: ForumCommentScalarWhereWithAggregatesInput | ForumCommentScalarWhereWithAggregatesInput[]
    OR?: ForumCommentScalarWhereWithAggregatesInput[]
    NOT?: ForumCommentScalarWhereWithAggregatesInput | ForumCommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ForumComment"> | number
    content?: StringWithAggregatesFilter<"ForumComment"> | string
    authorId?: IntWithAggregatesFilter<"ForumComment"> | number
    threadId?: IntWithAggregatesFilter<"ForumComment"> | number
    parentId?: IntNullableWithAggregatesFilter<"ForumComment"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ForumComment"> | Date | string
    upvotes?: IntWithAggregatesFilter<"ForumComment"> | number
    downvotes?: IntWithAggregatesFilter<"ForumComment"> | number
  }

  export type ForumThreadUpvoteWhereInput = {
    AND?: ForumThreadUpvoteWhereInput | ForumThreadUpvoteWhereInput[]
    OR?: ForumThreadUpvoteWhereInput[]
    NOT?: ForumThreadUpvoteWhereInput | ForumThreadUpvoteWhereInput[]
    id?: IntFilter<"ForumThreadUpvote"> | number
    threadId?: IntFilter<"ForumThreadUpvote"> | number
    userId?: IntFilter<"ForumThreadUpvote"> | number
    forumThreadId?: IntNullableFilter<"ForumThreadUpvote"> | number | null
    ForumThread?: XOR<ForumThreadNullableScalarRelationFilter, ForumThreadWhereInput> | null
  }

  export type ForumThreadUpvoteOrderByWithRelationInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrderInput | SortOrder
    ForumThread?: ForumThreadOrderByWithRelationInput
  }

  export type ForumThreadUpvoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    threadId_userId?: ForumThreadUpvoteThreadIdUserIdCompoundUniqueInput
    AND?: ForumThreadUpvoteWhereInput | ForumThreadUpvoteWhereInput[]
    OR?: ForumThreadUpvoteWhereInput[]
    NOT?: ForumThreadUpvoteWhereInput | ForumThreadUpvoteWhereInput[]
    threadId?: IntFilter<"ForumThreadUpvote"> | number
    userId?: IntFilter<"ForumThreadUpvote"> | number
    forumThreadId?: IntNullableFilter<"ForumThreadUpvote"> | number | null
    ForumThread?: XOR<ForumThreadNullableScalarRelationFilter, ForumThreadWhereInput> | null
  }, "id" | "threadId_userId">

  export type ForumThreadUpvoteOrderByWithAggregationInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrderInput | SortOrder
    _count?: ForumThreadUpvoteCountOrderByAggregateInput
    _avg?: ForumThreadUpvoteAvgOrderByAggregateInput
    _max?: ForumThreadUpvoteMaxOrderByAggregateInput
    _min?: ForumThreadUpvoteMinOrderByAggregateInput
    _sum?: ForumThreadUpvoteSumOrderByAggregateInput
  }

  export type ForumThreadUpvoteScalarWhereWithAggregatesInput = {
    AND?: ForumThreadUpvoteScalarWhereWithAggregatesInput | ForumThreadUpvoteScalarWhereWithAggregatesInput[]
    OR?: ForumThreadUpvoteScalarWhereWithAggregatesInput[]
    NOT?: ForumThreadUpvoteScalarWhereWithAggregatesInput | ForumThreadUpvoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ForumThreadUpvote"> | number
    threadId?: IntWithAggregatesFilter<"ForumThreadUpvote"> | number
    userId?: IntWithAggregatesFilter<"ForumThreadUpvote"> | number
    forumThreadId?: IntNullableWithAggregatesFilter<"ForumThreadUpvote"> | number | null
  }

  export type ForumThreadDownvoteWhereInput = {
    AND?: ForumThreadDownvoteWhereInput | ForumThreadDownvoteWhereInput[]
    OR?: ForumThreadDownvoteWhereInput[]
    NOT?: ForumThreadDownvoteWhereInput | ForumThreadDownvoteWhereInput[]
    id?: IntFilter<"ForumThreadDownvote"> | number
    threadId?: IntFilter<"ForumThreadDownvote"> | number
    userId?: IntFilter<"ForumThreadDownvote"> | number
    forumThreadId?: IntNullableFilter<"ForumThreadDownvote"> | number | null
    ForumThread?: XOR<ForumThreadNullableScalarRelationFilter, ForumThreadWhereInput> | null
  }

  export type ForumThreadDownvoteOrderByWithRelationInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrderInput | SortOrder
    ForumThread?: ForumThreadOrderByWithRelationInput
  }

  export type ForumThreadDownvoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    threadId_userId?: ForumThreadDownvoteThreadIdUserIdCompoundUniqueInput
    AND?: ForumThreadDownvoteWhereInput | ForumThreadDownvoteWhereInput[]
    OR?: ForumThreadDownvoteWhereInput[]
    NOT?: ForumThreadDownvoteWhereInput | ForumThreadDownvoteWhereInput[]
    threadId?: IntFilter<"ForumThreadDownvote"> | number
    userId?: IntFilter<"ForumThreadDownvote"> | number
    forumThreadId?: IntNullableFilter<"ForumThreadDownvote"> | number | null
    ForumThread?: XOR<ForumThreadNullableScalarRelationFilter, ForumThreadWhereInput> | null
  }, "id" | "threadId_userId">

  export type ForumThreadDownvoteOrderByWithAggregationInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrderInput | SortOrder
    _count?: ForumThreadDownvoteCountOrderByAggregateInput
    _avg?: ForumThreadDownvoteAvgOrderByAggregateInput
    _max?: ForumThreadDownvoteMaxOrderByAggregateInput
    _min?: ForumThreadDownvoteMinOrderByAggregateInput
    _sum?: ForumThreadDownvoteSumOrderByAggregateInput
  }

  export type ForumThreadDownvoteScalarWhereWithAggregatesInput = {
    AND?: ForumThreadDownvoteScalarWhereWithAggregatesInput | ForumThreadDownvoteScalarWhereWithAggregatesInput[]
    OR?: ForumThreadDownvoteScalarWhereWithAggregatesInput[]
    NOT?: ForumThreadDownvoteScalarWhereWithAggregatesInput | ForumThreadDownvoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ForumThreadDownvote"> | number
    threadId?: IntWithAggregatesFilter<"ForumThreadDownvote"> | number
    userId?: IntWithAggregatesFilter<"ForumThreadDownvote"> | number
    forumThreadId?: IntNullableWithAggregatesFilter<"ForumThreadDownvote"> | number | null
  }

  export type ForumCommentUpvoteWhereInput = {
    AND?: ForumCommentUpvoteWhereInput | ForumCommentUpvoteWhereInput[]
    OR?: ForumCommentUpvoteWhereInput[]
    NOT?: ForumCommentUpvoteWhereInput | ForumCommentUpvoteWhereInput[]
    id?: IntFilter<"ForumCommentUpvote"> | number
    commentId?: IntFilter<"ForumCommentUpvote"> | number
    userId?: IntFilter<"ForumCommentUpvote"> | number
    forumCommentId?: IntNullableFilter<"ForumCommentUpvote"> | number | null
    ForumComment?: XOR<ForumCommentNullableScalarRelationFilter, ForumCommentWhereInput> | null
  }

  export type ForumCommentUpvoteOrderByWithRelationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrderInput | SortOrder
    ForumComment?: ForumCommentOrderByWithRelationInput
  }

  export type ForumCommentUpvoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    commentId_userId?: ForumCommentUpvoteCommentIdUserIdCompoundUniqueInput
    AND?: ForumCommentUpvoteWhereInput | ForumCommentUpvoteWhereInput[]
    OR?: ForumCommentUpvoteWhereInput[]
    NOT?: ForumCommentUpvoteWhereInput | ForumCommentUpvoteWhereInput[]
    commentId?: IntFilter<"ForumCommentUpvote"> | number
    userId?: IntFilter<"ForumCommentUpvote"> | number
    forumCommentId?: IntNullableFilter<"ForumCommentUpvote"> | number | null
    ForumComment?: XOR<ForumCommentNullableScalarRelationFilter, ForumCommentWhereInput> | null
  }, "id" | "commentId_userId">

  export type ForumCommentUpvoteOrderByWithAggregationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrderInput | SortOrder
    _count?: ForumCommentUpvoteCountOrderByAggregateInput
    _avg?: ForumCommentUpvoteAvgOrderByAggregateInput
    _max?: ForumCommentUpvoteMaxOrderByAggregateInput
    _min?: ForumCommentUpvoteMinOrderByAggregateInput
    _sum?: ForumCommentUpvoteSumOrderByAggregateInput
  }

  export type ForumCommentUpvoteScalarWhereWithAggregatesInput = {
    AND?: ForumCommentUpvoteScalarWhereWithAggregatesInput | ForumCommentUpvoteScalarWhereWithAggregatesInput[]
    OR?: ForumCommentUpvoteScalarWhereWithAggregatesInput[]
    NOT?: ForumCommentUpvoteScalarWhereWithAggregatesInput | ForumCommentUpvoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ForumCommentUpvote"> | number
    commentId?: IntWithAggregatesFilter<"ForumCommentUpvote"> | number
    userId?: IntWithAggregatesFilter<"ForumCommentUpvote"> | number
    forumCommentId?: IntNullableWithAggregatesFilter<"ForumCommentUpvote"> | number | null
  }

  export type ForumCommentDownvoteWhereInput = {
    AND?: ForumCommentDownvoteWhereInput | ForumCommentDownvoteWhereInput[]
    OR?: ForumCommentDownvoteWhereInput[]
    NOT?: ForumCommentDownvoteWhereInput | ForumCommentDownvoteWhereInput[]
    id?: IntFilter<"ForumCommentDownvote"> | number
    commentId?: IntFilter<"ForumCommentDownvote"> | number
    userId?: IntFilter<"ForumCommentDownvote"> | number
    forumCommentId?: IntNullableFilter<"ForumCommentDownvote"> | number | null
    ForumComment?: XOR<ForumCommentNullableScalarRelationFilter, ForumCommentWhereInput> | null
  }

  export type ForumCommentDownvoteOrderByWithRelationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrderInput | SortOrder
    ForumComment?: ForumCommentOrderByWithRelationInput
  }

  export type ForumCommentDownvoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    commentId_userId?: ForumCommentDownvoteCommentIdUserIdCompoundUniqueInput
    AND?: ForumCommentDownvoteWhereInput | ForumCommentDownvoteWhereInput[]
    OR?: ForumCommentDownvoteWhereInput[]
    NOT?: ForumCommentDownvoteWhereInput | ForumCommentDownvoteWhereInput[]
    commentId?: IntFilter<"ForumCommentDownvote"> | number
    userId?: IntFilter<"ForumCommentDownvote"> | number
    forumCommentId?: IntNullableFilter<"ForumCommentDownvote"> | number | null
    ForumComment?: XOR<ForumCommentNullableScalarRelationFilter, ForumCommentWhereInput> | null
  }, "id" | "commentId_userId">

  export type ForumCommentDownvoteOrderByWithAggregationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrderInput | SortOrder
    _count?: ForumCommentDownvoteCountOrderByAggregateInput
    _avg?: ForumCommentDownvoteAvgOrderByAggregateInput
    _max?: ForumCommentDownvoteMaxOrderByAggregateInput
    _min?: ForumCommentDownvoteMinOrderByAggregateInput
    _sum?: ForumCommentDownvoteSumOrderByAggregateInput
  }

  export type ForumCommentDownvoteScalarWhereWithAggregatesInput = {
    AND?: ForumCommentDownvoteScalarWhereWithAggregatesInput | ForumCommentDownvoteScalarWhereWithAggregatesInput[]
    OR?: ForumCommentDownvoteScalarWhereWithAggregatesInput[]
    NOT?: ForumCommentDownvoteScalarWhereWithAggregatesInput | ForumCommentDownvoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ForumCommentDownvote"> | number
    commentId?: IntWithAggregatesFilter<"ForumCommentDownvote"> | number
    userId?: IntWithAggregatesFilter<"ForumCommentDownvote"> | number
    forumCommentId?: IntNullableWithAggregatesFilter<"ForumCommentDownvote"> | number | null
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
    password: string
    provider?: string | null
    providerAccountId?: string | null
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    ForumThread?: ForumThreadCreateNestedManyWithoutAuthorInput
    ForumComment?: ForumCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    provider?: string | null
    providerAccountId?: string | null
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    ForumThread?: ForumThreadUncheckedCreateNestedManyWithoutAuthorInput
    ForumComment?: ForumCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    ForumThread?: ForumThreadUpdateManyWithoutAuthorNestedInput
    ForumComment?: ForumCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    ForumThread?: ForumThreadUncheckedUpdateManyWithoutAuthorNestedInput
    ForumComment?: ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    provider?: string | null
    providerAccountId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogCreateInput = {
    title: string
    content: string
    upvotes?: number
    author: UserCreateNestedOneWithoutBlogsInput
    comments?: CommentCreateNestedManyWithoutBlogInput
    upvotesRelation?: UpvoteCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    authorId: number
    upvotes?: number
    comments?: CommentUncheckedCreateNestedManyWithoutBlogInput
    upvotesRelation?: UpvoteUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutBlogsNestedInput
    comments?: CommentUpdateManyWithoutBlogNestedInput
    upvotesRelation?: UpvoteUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutBlogNestedInput
    upvotesRelation?: UpvoteUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogCreateManyInput = {
    id?: number
    title: string
    content: string
    authorId: number
    upvotes?: number
  }

  export type BlogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
  }

  export type ImageCreateInput = {
    url: string
    title?: string
    author?: string
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    url: string
    title?: string
    author?: string
  }

  export type ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateManyInput = {
    id?: number
    url: string
    title?: string
    author?: string
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type UpvoteCreateInput = {
    userId: number
    Blog: BlogCreateNestedOneWithoutUpvotesRelationInput
  }

  export type UpvoteUncheckedCreateInput = {
    id?: number
    blogId: number
    userId: number
  }

  export type UpvoteUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    Blog?: BlogUpdateOneRequiredWithoutUpvotesRelationNestedInput
  }

  export type UpvoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UpvoteCreateManyInput = {
    id?: number
    blogId: number
    userId: number
  }

  export type UpvoteUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UpvoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
    blog: BlogCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    content: string
    upvotes?: number
    downvotes?: number
    blogId: number
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    content: string
    upvotes?: number
    downvotes?: number
    blogId: number
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    blogId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpvoteCreateInput = {
    commentId: number
    userId: number
  }

  export type CommentUpvoteUncheckedCreateInput = {
    id?: number
    commentId: number
    userId: number
  }

  export type CommentUpvoteUpdateInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpvoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpvoteCreateManyInput = {
    id?: number
    commentId: number
    userId: number
  }

  export type CommentUpvoteUpdateManyMutationInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpvoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentDownvoteCreateInput = {
    commentId: number
    userId: number
  }

  export type CommentDownvoteUncheckedCreateInput = {
    id?: number
    commentId: number
    userId: number
  }

  export type CommentDownvoteUpdateInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentDownvoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentDownvoteCreateManyInput = {
    id?: number
    commentId: number
    userId: number
  }

  export type CommentDownvoteUpdateManyMutationInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentDownvoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadCreateInput = {
    title: string
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    author: UserCreateNestedOneWithoutForumThreadInput
    comments?: ForumCommentCreateNestedManyWithoutThreadInput
    upvotesRelation?: ForumThreadUpvoteCreateNestedManyWithoutForumThreadInput
    downvotesRelation?: ForumThreadDownvoteCreateNestedManyWithoutForumThreadInput
  }

  export type ForumThreadUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    authorId: number
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    comments?: ForumCommentUncheckedCreateNestedManyWithoutThreadInput
    upvotesRelation?: ForumThreadUpvoteUncheckedCreateNestedManyWithoutForumThreadInput
    downvotesRelation?: ForumThreadDownvoteUncheckedCreateNestedManyWithoutForumThreadInput
  }

  export type ForumThreadUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutForumThreadNestedInput
    comments?: ForumCommentUpdateManyWithoutThreadNestedInput
    upvotesRelation?: ForumThreadUpvoteUpdateManyWithoutForumThreadNestedInput
    downvotesRelation?: ForumThreadDownvoteUpdateManyWithoutForumThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    comments?: ForumCommentUncheckedUpdateManyWithoutThreadNestedInput
    upvotesRelation?: ForumThreadUpvoteUncheckedUpdateManyWithoutForumThreadNestedInput
    downvotesRelation?: ForumThreadDownvoteUncheckedUpdateManyWithoutForumThreadNestedInput
  }

  export type ForumThreadCreateManyInput = {
    id?: number
    title: string
    content: string
    authorId: number
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
  }

  export type ForumThreadUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentCreateInput = {
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    author: UserCreateNestedOneWithoutForumCommentInput
    thread: ForumThreadCreateNestedOneWithoutCommentsInput
    parent?: ForumCommentCreateNestedOneWithoutRepliesInput
    replies?: ForumCommentCreateNestedManyWithoutParentInput
    upvotesRelation?: ForumCommentUpvoteCreateNestedManyWithoutForumCommentInput
    downvotesRelation?: ForumCommentDownvoteCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentUncheckedCreateInput = {
    id?: number
    content: string
    authorId: number
    threadId: number
    parentId?: number | null
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    replies?: ForumCommentUncheckedCreateNestedManyWithoutParentInput
    upvotesRelation?: ForumCommentUpvoteUncheckedCreateNestedManyWithoutForumCommentInput
    downvotesRelation?: ForumCommentDownvoteUncheckedCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutForumCommentNestedInput
    thread?: ForumThreadUpdateOneRequiredWithoutCommentsNestedInput
    parent?: ForumCommentUpdateOneWithoutRepliesNestedInput
    replies?: ForumCommentUpdateManyWithoutParentNestedInput
    upvotesRelation?: ForumCommentUpvoteUpdateManyWithoutForumCommentNestedInput
    downvotesRelation?: ForumCommentDownvoteUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    replies?: ForumCommentUncheckedUpdateManyWithoutParentNestedInput
    upvotesRelation?: ForumCommentUpvoteUncheckedUpdateManyWithoutForumCommentNestedInput
    downvotesRelation?: ForumCommentDownvoteUncheckedUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentCreateManyInput = {
    id?: number
    content: string
    authorId: number
    threadId: number
    parentId?: number | null
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
  }

  export type ForumCommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadUpvoteCreateInput = {
    threadId: number
    userId: number
    ForumThread?: ForumThreadCreateNestedOneWithoutUpvotesRelationInput
  }

  export type ForumThreadUpvoteUncheckedCreateInput = {
    id?: number
    threadId: number
    userId: number
    forumThreadId?: number | null
  }

  export type ForumThreadUpvoteUpdateInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ForumThread?: ForumThreadUpdateOneWithoutUpvotesRelationNestedInput
  }

  export type ForumThreadUpvoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    forumThreadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ForumThreadUpvoteCreateManyInput = {
    id?: number
    threadId: number
    userId: number
    forumThreadId?: number | null
  }

  export type ForumThreadUpvoteUpdateManyMutationInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadUpvoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    forumThreadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ForumThreadDownvoteCreateInput = {
    threadId: number
    userId: number
    ForumThread?: ForumThreadCreateNestedOneWithoutDownvotesRelationInput
  }

  export type ForumThreadDownvoteUncheckedCreateInput = {
    id?: number
    threadId: number
    userId: number
    forumThreadId?: number | null
  }

  export type ForumThreadDownvoteUpdateInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ForumThread?: ForumThreadUpdateOneWithoutDownvotesRelationNestedInput
  }

  export type ForumThreadDownvoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    forumThreadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ForumThreadDownvoteCreateManyInput = {
    id?: number
    threadId: number
    userId: number
    forumThreadId?: number | null
  }

  export type ForumThreadDownvoteUpdateManyMutationInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadDownvoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    forumThreadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ForumCommentUpvoteCreateInput = {
    commentId: number
    userId: number
    ForumComment?: ForumCommentCreateNestedOneWithoutUpvotesRelationInput
  }

  export type ForumCommentUpvoteUncheckedCreateInput = {
    id?: number
    commentId: number
    userId: number
    forumCommentId?: number | null
  }

  export type ForumCommentUpvoteUpdateInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ForumComment?: ForumCommentUpdateOneWithoutUpvotesRelationNestedInput
  }

  export type ForumCommentUpvoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    forumCommentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ForumCommentUpvoteCreateManyInput = {
    id?: number
    commentId: number
    userId: number
    forumCommentId?: number | null
  }

  export type ForumCommentUpvoteUpdateManyMutationInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentUpvoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    forumCommentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ForumCommentDownvoteCreateInput = {
    commentId: number
    userId: number
    ForumComment?: ForumCommentCreateNestedOneWithoutDownvotesRelationInput
  }

  export type ForumCommentDownvoteUncheckedCreateInput = {
    id?: number
    commentId: number
    userId: number
    forumCommentId?: number | null
  }

  export type ForumCommentDownvoteUpdateInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ForumComment?: ForumCommentUpdateOneWithoutDownvotesRelationNestedInput
  }

  export type ForumCommentDownvoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    forumCommentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ForumCommentDownvoteCreateManyInput = {
    id?: number
    commentId: number
    userId: number
    forumCommentId?: number | null
  }

  export type ForumCommentDownvoteUpdateManyMutationInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentDownvoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    forumCommentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type ForumThreadListRelationFilter = {
    every?: ForumThreadWhereInput
    some?: ForumThreadWhereInput
    none?: ForumThreadWhereInput
  }

  export type ForumCommentListRelationFilter = {
    every?: ForumCommentWhereInput
    some?: ForumCommentWhereInput
    none?: ForumCommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type UpvoteListRelationFilter = {
    every?: UpvoteWhereInput
    some?: UpvoteWhereInput
    none?: UpvoteWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UpvoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    author?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    author?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    author?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlogScalarRelationFilter = {
    is?: BlogWhereInput
    isNot?: BlogWhereInput
  }

  export type UpvoteBlogIdUserIdCompoundUniqueInput = {
    blogId: number
    userId: number
  }

  export type UpvoteCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
  }

  export type UpvoteAvgOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
  }

  export type UpvoteMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
  }

  export type UpvoteMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
  }

  export type UpvoteSumOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    blogId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    blogId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    blogId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    blogId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    blogId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CommentUpvoteCommentIdUserIdCompoundUniqueInput = {
    commentId: number
    userId: number
  }

  export type CommentUpvoteCountOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentUpvoteAvgOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentUpvoteMaxOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentUpvoteMinOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentUpvoteSumOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentDownvoteCommentIdUserIdCompoundUniqueInput = {
    commentId: number
    userId: number
  }

  export type CommentDownvoteCountOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentDownvoteAvgOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentDownvoteMaxOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentDownvoteMinOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentDownvoteSumOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type ForumThreadUpvoteListRelationFilter = {
    every?: ForumThreadUpvoteWhereInput
    some?: ForumThreadUpvoteWhereInput
    none?: ForumThreadUpvoteWhereInput
  }

  export type ForumThreadDownvoteListRelationFilter = {
    every?: ForumThreadDownvoteWhereInput
    some?: ForumThreadDownvoteWhereInput
    none?: ForumThreadDownvoteWhereInput
  }

  export type ForumThreadUpvoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumThreadDownvoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumThreadCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type ForumThreadAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type ForumThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type ForumThreadMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type ForumThreadSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ForumThreadScalarRelationFilter = {
    is?: ForumThreadWhereInput
    isNot?: ForumThreadWhereInput
  }

  export type ForumCommentNullableScalarRelationFilter = {
    is?: ForumCommentWhereInput | null
    isNot?: ForumCommentWhereInput | null
  }

  export type ForumCommentUpvoteListRelationFilter = {
    every?: ForumCommentUpvoteWhereInput
    some?: ForumCommentUpvoteWhereInput
    none?: ForumCommentUpvoteWhereInput
  }

  export type ForumCommentDownvoteListRelationFilter = {
    every?: ForumCommentDownvoteWhereInput
    some?: ForumCommentDownvoteWhereInput
    none?: ForumCommentDownvoteWhereInput
  }

  export type ForumCommentUpvoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumCommentDownvoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumCommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    threadId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type ForumCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    threadId?: SortOrder
    parentId?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type ForumCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    threadId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type ForumCommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    threadId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type ForumCommentSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    threadId?: SortOrder
    parentId?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ForumThreadNullableScalarRelationFilter = {
    is?: ForumThreadWhereInput | null
    isNot?: ForumThreadWhereInput | null
  }

  export type ForumThreadUpvoteThreadIdUserIdCompoundUniqueInput = {
    threadId: number
    userId: number
  }

  export type ForumThreadUpvoteCountOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrder
  }

  export type ForumThreadUpvoteAvgOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrder
  }

  export type ForumThreadUpvoteMaxOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrder
  }

  export type ForumThreadUpvoteMinOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrder
  }

  export type ForumThreadUpvoteSumOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrder
  }

  export type ForumThreadDownvoteThreadIdUserIdCompoundUniqueInput = {
    threadId: number
    userId: number
  }

  export type ForumThreadDownvoteCountOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrder
  }

  export type ForumThreadDownvoteAvgOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrder
  }

  export type ForumThreadDownvoteMaxOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrder
  }

  export type ForumThreadDownvoteMinOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrder
  }

  export type ForumThreadDownvoteSumOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    forumThreadId?: SortOrder
  }

  export type ForumCommentUpvoteCommentIdUserIdCompoundUniqueInput = {
    commentId: number
    userId: number
  }

  export type ForumCommentUpvoteCountOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrder
  }

  export type ForumCommentUpvoteAvgOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrder
  }

  export type ForumCommentUpvoteMaxOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrder
  }

  export type ForumCommentUpvoteMinOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrder
  }

  export type ForumCommentUpvoteSumOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrder
  }

  export type ForumCommentDownvoteCommentIdUserIdCompoundUniqueInput = {
    commentId: number
    userId: number
  }

  export type ForumCommentDownvoteCountOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrder
  }

  export type ForumCommentDownvoteAvgOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrder
  }

  export type ForumCommentDownvoteMaxOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrder
  }

  export type ForumCommentDownvoteMinOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrder
  }

  export type ForumCommentDownvoteSumOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    forumCommentId?: SortOrder
  }

  export type BlogCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type ForumThreadCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput> | ForumThreadCreateWithoutAuthorInput[] | ForumThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutAuthorInput | ForumThreadCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumThreadCreateManyAuthorInputEnvelope
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
  }

  export type ForumCommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput> | ForumCommentCreateWithoutAuthorInput[] | ForumCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutAuthorInput | ForumCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumCommentCreateManyAuthorInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type ForumThreadUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput> | ForumThreadCreateWithoutAuthorInput[] | ForumThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutAuthorInput | ForumThreadCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumThreadCreateManyAuthorInputEnvelope
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
  }

  export type ForumCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput> | ForumCommentCreateWithoutAuthorInput[] | ForumCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutAuthorInput | ForumCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumCommentCreateManyAuthorInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BlogUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAuthorInput | BlogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAuthorInput | BlogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAuthorInput | BlogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type ForumThreadUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput> | ForumThreadCreateWithoutAuthorInput[] | ForumThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutAuthorInput | ForumThreadCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumThreadUpsertWithWhereUniqueWithoutAuthorInput | ForumThreadUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumThreadCreateManyAuthorInputEnvelope
    set?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    disconnect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    delete?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    update?: ForumThreadUpdateWithWhereUniqueWithoutAuthorInput | ForumThreadUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumThreadUpdateManyWithWhereWithoutAuthorInput | ForumThreadUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
  }

  export type ForumCommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput> | ForumCommentCreateWithoutAuthorInput[] | ForumCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutAuthorInput | ForumCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutAuthorInput | ForumCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumCommentCreateManyAuthorInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutAuthorInput | ForumCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutAuthorInput | ForumCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BlogUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAuthorInput | BlogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAuthorInput | BlogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAuthorInput | BlogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type ForumThreadUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput> | ForumThreadCreateWithoutAuthorInput[] | ForumThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumThreadCreateOrConnectWithoutAuthorInput | ForumThreadCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumThreadUpsertWithWhereUniqueWithoutAuthorInput | ForumThreadUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumThreadCreateManyAuthorInputEnvelope
    set?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    disconnect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    delete?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    connect?: ForumThreadWhereUniqueInput | ForumThreadWhereUniqueInput[]
    update?: ForumThreadUpdateWithWhereUniqueWithoutAuthorInput | ForumThreadUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumThreadUpdateManyWithWhereWithoutAuthorInput | ForumThreadUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
  }

  export type ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput> | ForumCommentCreateWithoutAuthorInput[] | ForumCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutAuthorInput | ForumCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutAuthorInput | ForumCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumCommentCreateManyAuthorInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutAuthorInput | ForumCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutAuthorInput | ForumCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBlogsInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutBlogInput = {
    create?: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput> | CommentCreateWithoutBlogInput[] | CommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogInput | CommentCreateOrConnectWithoutBlogInput[]
    createMany?: CommentCreateManyBlogInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UpvoteCreateNestedManyWithoutBlogInput = {
    create?: XOR<UpvoteCreateWithoutBlogInput, UpvoteUncheckedCreateWithoutBlogInput> | UpvoteCreateWithoutBlogInput[] | UpvoteUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutBlogInput | UpvoteCreateOrConnectWithoutBlogInput[]
    createMany?: UpvoteCreateManyBlogInputEnvelope
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput> | CommentCreateWithoutBlogInput[] | CommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogInput | CommentCreateOrConnectWithoutBlogInput[]
    createMany?: CommentCreateManyBlogInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UpvoteUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<UpvoteCreateWithoutBlogInput, UpvoteUncheckedCreateWithoutBlogInput> | UpvoteCreateWithoutBlogInput[] | UpvoteUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutBlogInput | UpvoteCreateOrConnectWithoutBlogInput[]
    createMany?: UpvoteCreateManyBlogInputEnvelope
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    upsert?: UserUpsertWithoutBlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogsInput, UserUpdateWithoutBlogsInput>, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type CommentUpdateManyWithoutBlogNestedInput = {
    create?: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput> | CommentCreateWithoutBlogInput[] | CommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogInput | CommentCreateOrConnectWithoutBlogInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBlogInput | CommentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: CommentCreateManyBlogInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBlogInput | CommentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBlogInput | CommentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UpvoteUpdateManyWithoutBlogNestedInput = {
    create?: XOR<UpvoteCreateWithoutBlogInput, UpvoteUncheckedCreateWithoutBlogInput> | UpvoteCreateWithoutBlogInput[] | UpvoteUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutBlogInput | UpvoteCreateOrConnectWithoutBlogInput[]
    upsert?: UpvoteUpsertWithWhereUniqueWithoutBlogInput | UpvoteUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: UpvoteCreateManyBlogInputEnvelope
    set?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    disconnect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    delete?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    update?: UpvoteUpdateWithWhereUniqueWithoutBlogInput | UpvoteUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: UpvoteUpdateManyWithWhereWithoutBlogInput | UpvoteUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput> | CommentCreateWithoutBlogInput[] | CommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogInput | CommentCreateOrConnectWithoutBlogInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBlogInput | CommentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: CommentCreateManyBlogInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBlogInput | CommentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBlogInput | CommentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UpvoteUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<UpvoteCreateWithoutBlogInput, UpvoteUncheckedCreateWithoutBlogInput> | UpvoteCreateWithoutBlogInput[] | UpvoteUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: UpvoteCreateOrConnectWithoutBlogInput | UpvoteCreateOrConnectWithoutBlogInput[]
    upsert?: UpvoteUpsertWithWhereUniqueWithoutBlogInput | UpvoteUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: UpvoteCreateManyBlogInputEnvelope
    set?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    disconnect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    delete?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    connect?: UpvoteWhereUniqueInput | UpvoteWhereUniqueInput[]
    update?: UpvoteUpdateWithWhereUniqueWithoutBlogInput | UpvoteUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: UpvoteUpdateManyWithWhereWithoutBlogInput | UpvoteUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
  }

  export type BlogCreateNestedOneWithoutUpvotesRelationInput = {
    create?: XOR<BlogCreateWithoutUpvotesRelationInput, BlogUncheckedCreateWithoutUpvotesRelationInput>
    connectOrCreate?: BlogCreateOrConnectWithoutUpvotesRelationInput
    connect?: BlogWhereUniqueInput
  }

  export type BlogUpdateOneRequiredWithoutUpvotesRelationNestedInput = {
    create?: XOR<BlogCreateWithoutUpvotesRelationInput, BlogUncheckedCreateWithoutUpvotesRelationInput>
    connectOrCreate?: BlogCreateOrConnectWithoutUpvotesRelationInput
    upsert?: BlogUpsertWithoutUpvotesRelationInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutUpvotesRelationInput, BlogUpdateWithoutUpvotesRelationInput>, BlogUncheckedUpdateWithoutUpvotesRelationInput>
  }

  export type BlogCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutCommentsInput
    connect?: BlogWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BlogUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutCommentsInput
    upsert?: BlogUpsertWithoutCommentsInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutCommentsInput, BlogUpdateWithoutCommentsInput>, BlogUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutForumThreadInput = {
    create?: XOR<UserCreateWithoutForumThreadInput, UserUncheckedCreateWithoutForumThreadInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumThreadInput
    connect?: UserWhereUniqueInput
  }

  export type ForumCommentCreateNestedManyWithoutThreadInput = {
    create?: XOR<ForumCommentCreateWithoutThreadInput, ForumCommentUncheckedCreateWithoutThreadInput> | ForumCommentCreateWithoutThreadInput[] | ForumCommentUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutThreadInput | ForumCommentCreateOrConnectWithoutThreadInput[]
    createMany?: ForumCommentCreateManyThreadInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type ForumThreadUpvoteCreateNestedManyWithoutForumThreadInput = {
    create?: XOR<ForumThreadUpvoteCreateWithoutForumThreadInput, ForumThreadUpvoteUncheckedCreateWithoutForumThreadInput> | ForumThreadUpvoteCreateWithoutForumThreadInput[] | ForumThreadUpvoteUncheckedCreateWithoutForumThreadInput[]
    connectOrCreate?: ForumThreadUpvoteCreateOrConnectWithoutForumThreadInput | ForumThreadUpvoteCreateOrConnectWithoutForumThreadInput[]
    createMany?: ForumThreadUpvoteCreateManyForumThreadInputEnvelope
    connect?: ForumThreadUpvoteWhereUniqueInput | ForumThreadUpvoteWhereUniqueInput[]
  }

  export type ForumThreadDownvoteCreateNestedManyWithoutForumThreadInput = {
    create?: XOR<ForumThreadDownvoteCreateWithoutForumThreadInput, ForumThreadDownvoteUncheckedCreateWithoutForumThreadInput> | ForumThreadDownvoteCreateWithoutForumThreadInput[] | ForumThreadDownvoteUncheckedCreateWithoutForumThreadInput[]
    connectOrCreate?: ForumThreadDownvoteCreateOrConnectWithoutForumThreadInput | ForumThreadDownvoteCreateOrConnectWithoutForumThreadInput[]
    createMany?: ForumThreadDownvoteCreateManyForumThreadInputEnvelope
    connect?: ForumThreadDownvoteWhereUniqueInput | ForumThreadDownvoteWhereUniqueInput[]
  }

  export type ForumCommentUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<ForumCommentCreateWithoutThreadInput, ForumCommentUncheckedCreateWithoutThreadInput> | ForumCommentCreateWithoutThreadInput[] | ForumCommentUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutThreadInput | ForumCommentCreateOrConnectWithoutThreadInput[]
    createMany?: ForumCommentCreateManyThreadInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type ForumThreadUpvoteUncheckedCreateNestedManyWithoutForumThreadInput = {
    create?: XOR<ForumThreadUpvoteCreateWithoutForumThreadInput, ForumThreadUpvoteUncheckedCreateWithoutForumThreadInput> | ForumThreadUpvoteCreateWithoutForumThreadInput[] | ForumThreadUpvoteUncheckedCreateWithoutForumThreadInput[]
    connectOrCreate?: ForumThreadUpvoteCreateOrConnectWithoutForumThreadInput | ForumThreadUpvoteCreateOrConnectWithoutForumThreadInput[]
    createMany?: ForumThreadUpvoteCreateManyForumThreadInputEnvelope
    connect?: ForumThreadUpvoteWhereUniqueInput | ForumThreadUpvoteWhereUniqueInput[]
  }

  export type ForumThreadDownvoteUncheckedCreateNestedManyWithoutForumThreadInput = {
    create?: XOR<ForumThreadDownvoteCreateWithoutForumThreadInput, ForumThreadDownvoteUncheckedCreateWithoutForumThreadInput> | ForumThreadDownvoteCreateWithoutForumThreadInput[] | ForumThreadDownvoteUncheckedCreateWithoutForumThreadInput[]
    connectOrCreate?: ForumThreadDownvoteCreateOrConnectWithoutForumThreadInput | ForumThreadDownvoteCreateOrConnectWithoutForumThreadInput[]
    createMany?: ForumThreadDownvoteCreateManyForumThreadInputEnvelope
    connect?: ForumThreadDownvoteWhereUniqueInput | ForumThreadDownvoteWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutForumThreadNestedInput = {
    create?: XOR<UserCreateWithoutForumThreadInput, UserUncheckedCreateWithoutForumThreadInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumThreadInput
    upsert?: UserUpsertWithoutForumThreadInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForumThreadInput, UserUpdateWithoutForumThreadInput>, UserUncheckedUpdateWithoutForumThreadInput>
  }

  export type ForumCommentUpdateManyWithoutThreadNestedInput = {
    create?: XOR<ForumCommentCreateWithoutThreadInput, ForumCommentUncheckedCreateWithoutThreadInput> | ForumCommentCreateWithoutThreadInput[] | ForumCommentUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutThreadInput | ForumCommentCreateOrConnectWithoutThreadInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutThreadInput | ForumCommentUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: ForumCommentCreateManyThreadInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutThreadInput | ForumCommentUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutThreadInput | ForumCommentUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type ForumThreadUpvoteUpdateManyWithoutForumThreadNestedInput = {
    create?: XOR<ForumThreadUpvoteCreateWithoutForumThreadInput, ForumThreadUpvoteUncheckedCreateWithoutForumThreadInput> | ForumThreadUpvoteCreateWithoutForumThreadInput[] | ForumThreadUpvoteUncheckedCreateWithoutForumThreadInput[]
    connectOrCreate?: ForumThreadUpvoteCreateOrConnectWithoutForumThreadInput | ForumThreadUpvoteCreateOrConnectWithoutForumThreadInput[]
    upsert?: ForumThreadUpvoteUpsertWithWhereUniqueWithoutForumThreadInput | ForumThreadUpvoteUpsertWithWhereUniqueWithoutForumThreadInput[]
    createMany?: ForumThreadUpvoteCreateManyForumThreadInputEnvelope
    set?: ForumThreadUpvoteWhereUniqueInput | ForumThreadUpvoteWhereUniqueInput[]
    disconnect?: ForumThreadUpvoteWhereUniqueInput | ForumThreadUpvoteWhereUniqueInput[]
    delete?: ForumThreadUpvoteWhereUniqueInput | ForumThreadUpvoteWhereUniqueInput[]
    connect?: ForumThreadUpvoteWhereUniqueInput | ForumThreadUpvoteWhereUniqueInput[]
    update?: ForumThreadUpvoteUpdateWithWhereUniqueWithoutForumThreadInput | ForumThreadUpvoteUpdateWithWhereUniqueWithoutForumThreadInput[]
    updateMany?: ForumThreadUpvoteUpdateManyWithWhereWithoutForumThreadInput | ForumThreadUpvoteUpdateManyWithWhereWithoutForumThreadInput[]
    deleteMany?: ForumThreadUpvoteScalarWhereInput | ForumThreadUpvoteScalarWhereInput[]
  }

  export type ForumThreadDownvoteUpdateManyWithoutForumThreadNestedInput = {
    create?: XOR<ForumThreadDownvoteCreateWithoutForumThreadInput, ForumThreadDownvoteUncheckedCreateWithoutForumThreadInput> | ForumThreadDownvoteCreateWithoutForumThreadInput[] | ForumThreadDownvoteUncheckedCreateWithoutForumThreadInput[]
    connectOrCreate?: ForumThreadDownvoteCreateOrConnectWithoutForumThreadInput | ForumThreadDownvoteCreateOrConnectWithoutForumThreadInput[]
    upsert?: ForumThreadDownvoteUpsertWithWhereUniqueWithoutForumThreadInput | ForumThreadDownvoteUpsertWithWhereUniqueWithoutForumThreadInput[]
    createMany?: ForumThreadDownvoteCreateManyForumThreadInputEnvelope
    set?: ForumThreadDownvoteWhereUniqueInput | ForumThreadDownvoteWhereUniqueInput[]
    disconnect?: ForumThreadDownvoteWhereUniqueInput | ForumThreadDownvoteWhereUniqueInput[]
    delete?: ForumThreadDownvoteWhereUniqueInput | ForumThreadDownvoteWhereUniqueInput[]
    connect?: ForumThreadDownvoteWhereUniqueInput | ForumThreadDownvoteWhereUniqueInput[]
    update?: ForumThreadDownvoteUpdateWithWhereUniqueWithoutForumThreadInput | ForumThreadDownvoteUpdateWithWhereUniqueWithoutForumThreadInput[]
    updateMany?: ForumThreadDownvoteUpdateManyWithWhereWithoutForumThreadInput | ForumThreadDownvoteUpdateManyWithWhereWithoutForumThreadInput[]
    deleteMany?: ForumThreadDownvoteScalarWhereInput | ForumThreadDownvoteScalarWhereInput[]
  }

  export type ForumCommentUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<ForumCommentCreateWithoutThreadInput, ForumCommentUncheckedCreateWithoutThreadInput> | ForumCommentCreateWithoutThreadInput[] | ForumCommentUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutThreadInput | ForumCommentCreateOrConnectWithoutThreadInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutThreadInput | ForumCommentUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: ForumCommentCreateManyThreadInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutThreadInput | ForumCommentUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutThreadInput | ForumCommentUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type ForumThreadUpvoteUncheckedUpdateManyWithoutForumThreadNestedInput = {
    create?: XOR<ForumThreadUpvoteCreateWithoutForumThreadInput, ForumThreadUpvoteUncheckedCreateWithoutForumThreadInput> | ForumThreadUpvoteCreateWithoutForumThreadInput[] | ForumThreadUpvoteUncheckedCreateWithoutForumThreadInput[]
    connectOrCreate?: ForumThreadUpvoteCreateOrConnectWithoutForumThreadInput | ForumThreadUpvoteCreateOrConnectWithoutForumThreadInput[]
    upsert?: ForumThreadUpvoteUpsertWithWhereUniqueWithoutForumThreadInput | ForumThreadUpvoteUpsertWithWhereUniqueWithoutForumThreadInput[]
    createMany?: ForumThreadUpvoteCreateManyForumThreadInputEnvelope
    set?: ForumThreadUpvoteWhereUniqueInput | ForumThreadUpvoteWhereUniqueInput[]
    disconnect?: ForumThreadUpvoteWhereUniqueInput | ForumThreadUpvoteWhereUniqueInput[]
    delete?: ForumThreadUpvoteWhereUniqueInput | ForumThreadUpvoteWhereUniqueInput[]
    connect?: ForumThreadUpvoteWhereUniqueInput | ForumThreadUpvoteWhereUniqueInput[]
    update?: ForumThreadUpvoteUpdateWithWhereUniqueWithoutForumThreadInput | ForumThreadUpvoteUpdateWithWhereUniqueWithoutForumThreadInput[]
    updateMany?: ForumThreadUpvoteUpdateManyWithWhereWithoutForumThreadInput | ForumThreadUpvoteUpdateManyWithWhereWithoutForumThreadInput[]
    deleteMany?: ForumThreadUpvoteScalarWhereInput | ForumThreadUpvoteScalarWhereInput[]
  }

  export type ForumThreadDownvoteUncheckedUpdateManyWithoutForumThreadNestedInput = {
    create?: XOR<ForumThreadDownvoteCreateWithoutForumThreadInput, ForumThreadDownvoteUncheckedCreateWithoutForumThreadInput> | ForumThreadDownvoteCreateWithoutForumThreadInput[] | ForumThreadDownvoteUncheckedCreateWithoutForumThreadInput[]
    connectOrCreate?: ForumThreadDownvoteCreateOrConnectWithoutForumThreadInput | ForumThreadDownvoteCreateOrConnectWithoutForumThreadInput[]
    upsert?: ForumThreadDownvoteUpsertWithWhereUniqueWithoutForumThreadInput | ForumThreadDownvoteUpsertWithWhereUniqueWithoutForumThreadInput[]
    createMany?: ForumThreadDownvoteCreateManyForumThreadInputEnvelope
    set?: ForumThreadDownvoteWhereUniqueInput | ForumThreadDownvoteWhereUniqueInput[]
    disconnect?: ForumThreadDownvoteWhereUniqueInput | ForumThreadDownvoteWhereUniqueInput[]
    delete?: ForumThreadDownvoteWhereUniqueInput | ForumThreadDownvoteWhereUniqueInput[]
    connect?: ForumThreadDownvoteWhereUniqueInput | ForumThreadDownvoteWhereUniqueInput[]
    update?: ForumThreadDownvoteUpdateWithWhereUniqueWithoutForumThreadInput | ForumThreadDownvoteUpdateWithWhereUniqueWithoutForumThreadInput[]
    updateMany?: ForumThreadDownvoteUpdateManyWithWhereWithoutForumThreadInput | ForumThreadDownvoteUpdateManyWithWhereWithoutForumThreadInput[]
    deleteMany?: ForumThreadDownvoteScalarWhereInput | ForumThreadDownvoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutForumCommentInput = {
    create?: XOR<UserCreateWithoutForumCommentInput, UserUncheckedCreateWithoutForumCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumCommentInput
    connect?: UserWhereUniqueInput
  }

  export type ForumThreadCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ForumThreadCreateWithoutCommentsInput, ForumThreadUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ForumThreadCreateOrConnectWithoutCommentsInput
    connect?: ForumThreadWhereUniqueInput
  }

  export type ForumCommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ForumCommentCreateWithoutRepliesInput, ForumCommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ForumCommentCreateOrConnectWithoutRepliesInput
    connect?: ForumCommentWhereUniqueInput
  }

  export type ForumCommentCreateNestedManyWithoutParentInput = {
    create?: XOR<ForumCommentCreateWithoutParentInput, ForumCommentUncheckedCreateWithoutParentInput> | ForumCommentCreateWithoutParentInput[] | ForumCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutParentInput | ForumCommentCreateOrConnectWithoutParentInput[]
    createMany?: ForumCommentCreateManyParentInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type ForumCommentUpvoteCreateNestedManyWithoutForumCommentInput = {
    create?: XOR<ForumCommentUpvoteCreateWithoutForumCommentInput, ForumCommentUpvoteUncheckedCreateWithoutForumCommentInput> | ForumCommentUpvoteCreateWithoutForumCommentInput[] | ForumCommentUpvoteUncheckedCreateWithoutForumCommentInput[]
    connectOrCreate?: ForumCommentUpvoteCreateOrConnectWithoutForumCommentInput | ForumCommentUpvoteCreateOrConnectWithoutForumCommentInput[]
    createMany?: ForumCommentUpvoteCreateManyForumCommentInputEnvelope
    connect?: ForumCommentUpvoteWhereUniqueInput | ForumCommentUpvoteWhereUniqueInput[]
  }

  export type ForumCommentDownvoteCreateNestedManyWithoutForumCommentInput = {
    create?: XOR<ForumCommentDownvoteCreateWithoutForumCommentInput, ForumCommentDownvoteUncheckedCreateWithoutForumCommentInput> | ForumCommentDownvoteCreateWithoutForumCommentInput[] | ForumCommentDownvoteUncheckedCreateWithoutForumCommentInput[]
    connectOrCreate?: ForumCommentDownvoteCreateOrConnectWithoutForumCommentInput | ForumCommentDownvoteCreateOrConnectWithoutForumCommentInput[]
    createMany?: ForumCommentDownvoteCreateManyForumCommentInputEnvelope
    connect?: ForumCommentDownvoteWhereUniqueInput | ForumCommentDownvoteWhereUniqueInput[]
  }

  export type ForumCommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ForumCommentCreateWithoutParentInput, ForumCommentUncheckedCreateWithoutParentInput> | ForumCommentCreateWithoutParentInput[] | ForumCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutParentInput | ForumCommentCreateOrConnectWithoutParentInput[]
    createMany?: ForumCommentCreateManyParentInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type ForumCommentUpvoteUncheckedCreateNestedManyWithoutForumCommentInput = {
    create?: XOR<ForumCommentUpvoteCreateWithoutForumCommentInput, ForumCommentUpvoteUncheckedCreateWithoutForumCommentInput> | ForumCommentUpvoteCreateWithoutForumCommentInput[] | ForumCommentUpvoteUncheckedCreateWithoutForumCommentInput[]
    connectOrCreate?: ForumCommentUpvoteCreateOrConnectWithoutForumCommentInput | ForumCommentUpvoteCreateOrConnectWithoutForumCommentInput[]
    createMany?: ForumCommentUpvoteCreateManyForumCommentInputEnvelope
    connect?: ForumCommentUpvoteWhereUniqueInput | ForumCommentUpvoteWhereUniqueInput[]
  }

  export type ForumCommentDownvoteUncheckedCreateNestedManyWithoutForumCommentInput = {
    create?: XOR<ForumCommentDownvoteCreateWithoutForumCommentInput, ForumCommentDownvoteUncheckedCreateWithoutForumCommentInput> | ForumCommentDownvoteCreateWithoutForumCommentInput[] | ForumCommentDownvoteUncheckedCreateWithoutForumCommentInput[]
    connectOrCreate?: ForumCommentDownvoteCreateOrConnectWithoutForumCommentInput | ForumCommentDownvoteCreateOrConnectWithoutForumCommentInput[]
    createMany?: ForumCommentDownvoteCreateManyForumCommentInputEnvelope
    connect?: ForumCommentDownvoteWhereUniqueInput | ForumCommentDownvoteWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutForumCommentNestedInput = {
    create?: XOR<UserCreateWithoutForumCommentInput, UserUncheckedCreateWithoutForumCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumCommentInput
    upsert?: UserUpsertWithoutForumCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForumCommentInput, UserUpdateWithoutForumCommentInput>, UserUncheckedUpdateWithoutForumCommentInput>
  }

  export type ForumThreadUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ForumThreadCreateWithoutCommentsInput, ForumThreadUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ForumThreadCreateOrConnectWithoutCommentsInput
    upsert?: ForumThreadUpsertWithoutCommentsInput
    connect?: ForumThreadWhereUniqueInput
    update?: XOR<XOR<ForumThreadUpdateToOneWithWhereWithoutCommentsInput, ForumThreadUpdateWithoutCommentsInput>, ForumThreadUncheckedUpdateWithoutCommentsInput>
  }

  export type ForumCommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<ForumCommentCreateWithoutRepliesInput, ForumCommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ForumCommentCreateOrConnectWithoutRepliesInput
    upsert?: ForumCommentUpsertWithoutRepliesInput
    disconnect?: ForumCommentWhereInput | boolean
    delete?: ForumCommentWhereInput | boolean
    connect?: ForumCommentWhereUniqueInput
    update?: XOR<XOR<ForumCommentUpdateToOneWithWhereWithoutRepliesInput, ForumCommentUpdateWithoutRepliesInput>, ForumCommentUncheckedUpdateWithoutRepliesInput>
  }

  export type ForumCommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<ForumCommentCreateWithoutParentInput, ForumCommentUncheckedCreateWithoutParentInput> | ForumCommentCreateWithoutParentInput[] | ForumCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutParentInput | ForumCommentCreateOrConnectWithoutParentInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutParentInput | ForumCommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ForumCommentCreateManyParentInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutParentInput | ForumCommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutParentInput | ForumCommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type ForumCommentUpvoteUpdateManyWithoutForumCommentNestedInput = {
    create?: XOR<ForumCommentUpvoteCreateWithoutForumCommentInput, ForumCommentUpvoteUncheckedCreateWithoutForumCommentInput> | ForumCommentUpvoteCreateWithoutForumCommentInput[] | ForumCommentUpvoteUncheckedCreateWithoutForumCommentInput[]
    connectOrCreate?: ForumCommentUpvoteCreateOrConnectWithoutForumCommentInput | ForumCommentUpvoteCreateOrConnectWithoutForumCommentInput[]
    upsert?: ForumCommentUpvoteUpsertWithWhereUniqueWithoutForumCommentInput | ForumCommentUpvoteUpsertWithWhereUniqueWithoutForumCommentInput[]
    createMany?: ForumCommentUpvoteCreateManyForumCommentInputEnvelope
    set?: ForumCommentUpvoteWhereUniqueInput | ForumCommentUpvoteWhereUniqueInput[]
    disconnect?: ForumCommentUpvoteWhereUniqueInput | ForumCommentUpvoteWhereUniqueInput[]
    delete?: ForumCommentUpvoteWhereUniqueInput | ForumCommentUpvoteWhereUniqueInput[]
    connect?: ForumCommentUpvoteWhereUniqueInput | ForumCommentUpvoteWhereUniqueInput[]
    update?: ForumCommentUpvoteUpdateWithWhereUniqueWithoutForumCommentInput | ForumCommentUpvoteUpdateWithWhereUniqueWithoutForumCommentInput[]
    updateMany?: ForumCommentUpvoteUpdateManyWithWhereWithoutForumCommentInput | ForumCommentUpvoteUpdateManyWithWhereWithoutForumCommentInput[]
    deleteMany?: ForumCommentUpvoteScalarWhereInput | ForumCommentUpvoteScalarWhereInput[]
  }

  export type ForumCommentDownvoteUpdateManyWithoutForumCommentNestedInput = {
    create?: XOR<ForumCommentDownvoteCreateWithoutForumCommentInput, ForumCommentDownvoteUncheckedCreateWithoutForumCommentInput> | ForumCommentDownvoteCreateWithoutForumCommentInput[] | ForumCommentDownvoteUncheckedCreateWithoutForumCommentInput[]
    connectOrCreate?: ForumCommentDownvoteCreateOrConnectWithoutForumCommentInput | ForumCommentDownvoteCreateOrConnectWithoutForumCommentInput[]
    upsert?: ForumCommentDownvoteUpsertWithWhereUniqueWithoutForumCommentInput | ForumCommentDownvoteUpsertWithWhereUniqueWithoutForumCommentInput[]
    createMany?: ForumCommentDownvoteCreateManyForumCommentInputEnvelope
    set?: ForumCommentDownvoteWhereUniqueInput | ForumCommentDownvoteWhereUniqueInput[]
    disconnect?: ForumCommentDownvoteWhereUniqueInput | ForumCommentDownvoteWhereUniqueInput[]
    delete?: ForumCommentDownvoteWhereUniqueInput | ForumCommentDownvoteWhereUniqueInput[]
    connect?: ForumCommentDownvoteWhereUniqueInput | ForumCommentDownvoteWhereUniqueInput[]
    update?: ForumCommentDownvoteUpdateWithWhereUniqueWithoutForumCommentInput | ForumCommentDownvoteUpdateWithWhereUniqueWithoutForumCommentInput[]
    updateMany?: ForumCommentDownvoteUpdateManyWithWhereWithoutForumCommentInput | ForumCommentDownvoteUpdateManyWithWhereWithoutForumCommentInput[]
    deleteMany?: ForumCommentDownvoteScalarWhereInput | ForumCommentDownvoteScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ForumCommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ForumCommentCreateWithoutParentInput, ForumCommentUncheckedCreateWithoutParentInput> | ForumCommentCreateWithoutParentInput[] | ForumCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutParentInput | ForumCommentCreateOrConnectWithoutParentInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutParentInput | ForumCommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ForumCommentCreateManyParentInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutParentInput | ForumCommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutParentInput | ForumCommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type ForumCommentUpvoteUncheckedUpdateManyWithoutForumCommentNestedInput = {
    create?: XOR<ForumCommentUpvoteCreateWithoutForumCommentInput, ForumCommentUpvoteUncheckedCreateWithoutForumCommentInput> | ForumCommentUpvoteCreateWithoutForumCommentInput[] | ForumCommentUpvoteUncheckedCreateWithoutForumCommentInput[]
    connectOrCreate?: ForumCommentUpvoteCreateOrConnectWithoutForumCommentInput | ForumCommentUpvoteCreateOrConnectWithoutForumCommentInput[]
    upsert?: ForumCommentUpvoteUpsertWithWhereUniqueWithoutForumCommentInput | ForumCommentUpvoteUpsertWithWhereUniqueWithoutForumCommentInput[]
    createMany?: ForumCommentUpvoteCreateManyForumCommentInputEnvelope
    set?: ForumCommentUpvoteWhereUniqueInput | ForumCommentUpvoteWhereUniqueInput[]
    disconnect?: ForumCommentUpvoteWhereUniqueInput | ForumCommentUpvoteWhereUniqueInput[]
    delete?: ForumCommentUpvoteWhereUniqueInput | ForumCommentUpvoteWhereUniqueInput[]
    connect?: ForumCommentUpvoteWhereUniqueInput | ForumCommentUpvoteWhereUniqueInput[]
    update?: ForumCommentUpvoteUpdateWithWhereUniqueWithoutForumCommentInput | ForumCommentUpvoteUpdateWithWhereUniqueWithoutForumCommentInput[]
    updateMany?: ForumCommentUpvoteUpdateManyWithWhereWithoutForumCommentInput | ForumCommentUpvoteUpdateManyWithWhereWithoutForumCommentInput[]
    deleteMany?: ForumCommentUpvoteScalarWhereInput | ForumCommentUpvoteScalarWhereInput[]
  }

  export type ForumCommentDownvoteUncheckedUpdateManyWithoutForumCommentNestedInput = {
    create?: XOR<ForumCommentDownvoteCreateWithoutForumCommentInput, ForumCommentDownvoteUncheckedCreateWithoutForumCommentInput> | ForumCommentDownvoteCreateWithoutForumCommentInput[] | ForumCommentDownvoteUncheckedCreateWithoutForumCommentInput[]
    connectOrCreate?: ForumCommentDownvoteCreateOrConnectWithoutForumCommentInput | ForumCommentDownvoteCreateOrConnectWithoutForumCommentInput[]
    upsert?: ForumCommentDownvoteUpsertWithWhereUniqueWithoutForumCommentInput | ForumCommentDownvoteUpsertWithWhereUniqueWithoutForumCommentInput[]
    createMany?: ForumCommentDownvoteCreateManyForumCommentInputEnvelope
    set?: ForumCommentDownvoteWhereUniqueInput | ForumCommentDownvoteWhereUniqueInput[]
    disconnect?: ForumCommentDownvoteWhereUniqueInput | ForumCommentDownvoteWhereUniqueInput[]
    delete?: ForumCommentDownvoteWhereUniqueInput | ForumCommentDownvoteWhereUniqueInput[]
    connect?: ForumCommentDownvoteWhereUniqueInput | ForumCommentDownvoteWhereUniqueInput[]
    update?: ForumCommentDownvoteUpdateWithWhereUniqueWithoutForumCommentInput | ForumCommentDownvoteUpdateWithWhereUniqueWithoutForumCommentInput[]
    updateMany?: ForumCommentDownvoteUpdateManyWithWhereWithoutForumCommentInput | ForumCommentDownvoteUpdateManyWithWhereWithoutForumCommentInput[]
    deleteMany?: ForumCommentDownvoteScalarWhereInput | ForumCommentDownvoteScalarWhereInput[]
  }

  export type ForumThreadCreateNestedOneWithoutUpvotesRelationInput = {
    create?: XOR<ForumThreadCreateWithoutUpvotesRelationInput, ForumThreadUncheckedCreateWithoutUpvotesRelationInput>
    connectOrCreate?: ForumThreadCreateOrConnectWithoutUpvotesRelationInput
    connect?: ForumThreadWhereUniqueInput
  }

  export type ForumThreadUpdateOneWithoutUpvotesRelationNestedInput = {
    create?: XOR<ForumThreadCreateWithoutUpvotesRelationInput, ForumThreadUncheckedCreateWithoutUpvotesRelationInput>
    connectOrCreate?: ForumThreadCreateOrConnectWithoutUpvotesRelationInput
    upsert?: ForumThreadUpsertWithoutUpvotesRelationInput
    disconnect?: ForumThreadWhereInput | boolean
    delete?: ForumThreadWhereInput | boolean
    connect?: ForumThreadWhereUniqueInput
    update?: XOR<XOR<ForumThreadUpdateToOneWithWhereWithoutUpvotesRelationInput, ForumThreadUpdateWithoutUpvotesRelationInput>, ForumThreadUncheckedUpdateWithoutUpvotesRelationInput>
  }

  export type ForumThreadCreateNestedOneWithoutDownvotesRelationInput = {
    create?: XOR<ForumThreadCreateWithoutDownvotesRelationInput, ForumThreadUncheckedCreateWithoutDownvotesRelationInput>
    connectOrCreate?: ForumThreadCreateOrConnectWithoutDownvotesRelationInput
    connect?: ForumThreadWhereUniqueInput
  }

  export type ForumThreadUpdateOneWithoutDownvotesRelationNestedInput = {
    create?: XOR<ForumThreadCreateWithoutDownvotesRelationInput, ForumThreadUncheckedCreateWithoutDownvotesRelationInput>
    connectOrCreate?: ForumThreadCreateOrConnectWithoutDownvotesRelationInput
    upsert?: ForumThreadUpsertWithoutDownvotesRelationInput
    disconnect?: ForumThreadWhereInput | boolean
    delete?: ForumThreadWhereInput | boolean
    connect?: ForumThreadWhereUniqueInput
    update?: XOR<XOR<ForumThreadUpdateToOneWithWhereWithoutDownvotesRelationInput, ForumThreadUpdateWithoutDownvotesRelationInput>, ForumThreadUncheckedUpdateWithoutDownvotesRelationInput>
  }

  export type ForumCommentCreateNestedOneWithoutUpvotesRelationInput = {
    create?: XOR<ForumCommentCreateWithoutUpvotesRelationInput, ForumCommentUncheckedCreateWithoutUpvotesRelationInput>
    connectOrCreate?: ForumCommentCreateOrConnectWithoutUpvotesRelationInput
    connect?: ForumCommentWhereUniqueInput
  }

  export type ForumCommentUpdateOneWithoutUpvotesRelationNestedInput = {
    create?: XOR<ForumCommentCreateWithoutUpvotesRelationInput, ForumCommentUncheckedCreateWithoutUpvotesRelationInput>
    connectOrCreate?: ForumCommentCreateOrConnectWithoutUpvotesRelationInput
    upsert?: ForumCommentUpsertWithoutUpvotesRelationInput
    disconnect?: ForumCommentWhereInput | boolean
    delete?: ForumCommentWhereInput | boolean
    connect?: ForumCommentWhereUniqueInput
    update?: XOR<XOR<ForumCommentUpdateToOneWithWhereWithoutUpvotesRelationInput, ForumCommentUpdateWithoutUpvotesRelationInput>, ForumCommentUncheckedUpdateWithoutUpvotesRelationInput>
  }

  export type ForumCommentCreateNestedOneWithoutDownvotesRelationInput = {
    create?: XOR<ForumCommentCreateWithoutDownvotesRelationInput, ForumCommentUncheckedCreateWithoutDownvotesRelationInput>
    connectOrCreate?: ForumCommentCreateOrConnectWithoutDownvotesRelationInput
    connect?: ForumCommentWhereUniqueInput
  }

  export type ForumCommentUpdateOneWithoutDownvotesRelationNestedInput = {
    create?: XOR<ForumCommentCreateWithoutDownvotesRelationInput, ForumCommentUncheckedCreateWithoutDownvotesRelationInput>
    connectOrCreate?: ForumCommentCreateOrConnectWithoutDownvotesRelationInput
    upsert?: ForumCommentUpsertWithoutDownvotesRelationInput
    disconnect?: ForumCommentWhereInput | boolean
    delete?: ForumCommentWhereInput | boolean
    connect?: ForumCommentWhereUniqueInput
    update?: XOR<XOR<ForumCommentUpdateToOneWithWhereWithoutDownvotesRelationInput, ForumCommentUpdateWithoutDownvotesRelationInput>, ForumCommentUncheckedUpdateWithoutDownvotesRelationInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BlogCreateWithoutAuthorInput = {
    title: string
    content: string
    upvotes?: number
    comments?: CommentCreateNestedManyWithoutBlogInput
    upvotesRelation?: UpvoteCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    content: string
    upvotes?: number
    comments?: CommentUncheckedCreateNestedManyWithoutBlogInput
    upvotesRelation?: UpvoteUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogCreateManyAuthorInputEnvelope = {
    data: BlogCreateManyAuthorInput | BlogCreateManyAuthorInput[]
  }

  export type ForumThreadCreateWithoutAuthorInput = {
    title: string
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    comments?: ForumCommentCreateNestedManyWithoutThreadInput
    upvotesRelation?: ForumThreadUpvoteCreateNestedManyWithoutForumThreadInput
    downvotesRelation?: ForumThreadDownvoteCreateNestedManyWithoutForumThreadInput
  }

  export type ForumThreadUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    comments?: ForumCommentUncheckedCreateNestedManyWithoutThreadInput
    upvotesRelation?: ForumThreadUpvoteUncheckedCreateNestedManyWithoutForumThreadInput
    downvotesRelation?: ForumThreadDownvoteUncheckedCreateNestedManyWithoutForumThreadInput
  }

  export type ForumThreadCreateOrConnectWithoutAuthorInput = {
    where: ForumThreadWhereUniqueInput
    create: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ForumThreadCreateManyAuthorInputEnvelope = {
    data: ForumThreadCreateManyAuthorInput | ForumThreadCreateManyAuthorInput[]
  }

  export type ForumCommentCreateWithoutAuthorInput = {
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    thread: ForumThreadCreateNestedOneWithoutCommentsInput
    parent?: ForumCommentCreateNestedOneWithoutRepliesInput
    replies?: ForumCommentCreateNestedManyWithoutParentInput
    upvotesRelation?: ForumCommentUpvoteCreateNestedManyWithoutForumCommentInput
    downvotesRelation?: ForumCommentDownvoteCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentUncheckedCreateWithoutAuthorInput = {
    id?: number
    content: string
    threadId: number
    parentId?: number | null
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    replies?: ForumCommentUncheckedCreateNestedManyWithoutParentInput
    upvotesRelation?: ForumCommentUpvoteUncheckedCreateNestedManyWithoutForumCommentInput
    downvotesRelation?: ForumCommentDownvoteUncheckedCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentCreateOrConnectWithoutAuthorInput = {
    where: ForumCommentWhereUniqueInput
    create: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput>
  }

  export type ForumCommentCreateManyAuthorInputEnvelope = {
    data: ForumCommentCreateManyAuthorInput | ForumCommentCreateManyAuthorInput[]
  }

  export type BlogUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    authorId?: IntFilter<"Blog"> | number
    upvotes?: IntFilter<"Blog"> | number
  }

  export type ForumThreadUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ForumThreadWhereUniqueInput
    update: XOR<ForumThreadUpdateWithoutAuthorInput, ForumThreadUncheckedUpdateWithoutAuthorInput>
    create: XOR<ForumThreadCreateWithoutAuthorInput, ForumThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ForumThreadUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ForumThreadWhereUniqueInput
    data: XOR<ForumThreadUpdateWithoutAuthorInput, ForumThreadUncheckedUpdateWithoutAuthorInput>
  }

  export type ForumThreadUpdateManyWithWhereWithoutAuthorInput = {
    where: ForumThreadScalarWhereInput
    data: XOR<ForumThreadUpdateManyMutationInput, ForumThreadUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ForumThreadScalarWhereInput = {
    AND?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
    OR?: ForumThreadScalarWhereInput[]
    NOT?: ForumThreadScalarWhereInput | ForumThreadScalarWhereInput[]
    id?: IntFilter<"ForumThread"> | number
    title?: StringFilter<"ForumThread"> | string
    content?: StringFilter<"ForumThread"> | string
    authorId?: IntFilter<"ForumThread"> | number
    createdAt?: DateTimeFilter<"ForumThread"> | Date | string
    upvotes?: IntFilter<"ForumThread"> | number
    downvotes?: IntFilter<"ForumThread"> | number
  }

  export type ForumCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ForumCommentWhereUniqueInput
    update: XOR<ForumCommentUpdateWithoutAuthorInput, ForumCommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput>
  }

  export type ForumCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ForumCommentWhereUniqueInput
    data: XOR<ForumCommentUpdateWithoutAuthorInput, ForumCommentUncheckedUpdateWithoutAuthorInput>
  }

  export type ForumCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: ForumCommentScalarWhereInput
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ForumCommentScalarWhereInput = {
    AND?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
    OR?: ForumCommentScalarWhereInput[]
    NOT?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
    id?: IntFilter<"ForumComment"> | number
    content?: StringFilter<"ForumComment"> | string
    authorId?: IntFilter<"ForumComment"> | number
    threadId?: IntFilter<"ForumComment"> | number
    parentId?: IntNullableFilter<"ForumComment"> | number | null
    createdAt?: DateTimeFilter<"ForumComment"> | Date | string
    upvotes?: IntFilter<"ForumComment"> | number
    downvotes?: IntFilter<"ForumComment"> | number
  }

  export type UserCreateWithoutBlogsInput = {
    name?: string | null
    email: string
    password: string
    provider?: string | null
    providerAccountId?: string | null
    ForumThread?: ForumThreadCreateNestedManyWithoutAuthorInput
    ForumComment?: ForumCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutBlogsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    provider?: string | null
    providerAccountId?: string | null
    ForumThread?: ForumThreadUncheckedCreateNestedManyWithoutAuthorInput
    ForumComment?: ForumCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutBlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
  }

  export type CommentCreateWithoutBlogInput = {
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutBlogInput = {
    id?: number
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutBlogInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput>
  }

  export type CommentCreateManyBlogInputEnvelope = {
    data: CommentCreateManyBlogInput | CommentCreateManyBlogInput[]
  }

  export type UpvoteCreateWithoutBlogInput = {
    userId: number
  }

  export type UpvoteUncheckedCreateWithoutBlogInput = {
    id?: number
    userId: number
  }

  export type UpvoteCreateOrConnectWithoutBlogInput = {
    where: UpvoteWhereUniqueInput
    create: XOR<UpvoteCreateWithoutBlogInput, UpvoteUncheckedCreateWithoutBlogInput>
  }

  export type UpvoteCreateManyBlogInputEnvelope = {
    data: UpvoteCreateManyBlogInput | UpvoteCreateManyBlogInput[]
  }

  export type UserUpsertWithoutBlogsInput = {
    update: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type UserUpdateWithoutBlogsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    ForumThread?: ForumThreadUpdateManyWithoutAuthorNestedInput
    ForumComment?: ForumCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    ForumThread?: ForumThreadUncheckedUpdateManyWithoutAuthorNestedInput
    ForumComment?: ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutBlogInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutBlogInput, CommentUncheckedUpdateWithoutBlogInput>
    create: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutBlogInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutBlogInput, CommentUncheckedUpdateWithoutBlogInput>
  }

  export type CommentUpdateManyWithWhereWithoutBlogInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutBlogInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    upvotes?: IntFilter<"Comment"> | number
    downvotes?: IntFilter<"Comment"> | number
    blogId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type UpvoteUpsertWithWhereUniqueWithoutBlogInput = {
    where: UpvoteWhereUniqueInput
    update: XOR<UpvoteUpdateWithoutBlogInput, UpvoteUncheckedUpdateWithoutBlogInput>
    create: XOR<UpvoteCreateWithoutBlogInput, UpvoteUncheckedCreateWithoutBlogInput>
  }

  export type UpvoteUpdateWithWhereUniqueWithoutBlogInput = {
    where: UpvoteWhereUniqueInput
    data: XOR<UpvoteUpdateWithoutBlogInput, UpvoteUncheckedUpdateWithoutBlogInput>
  }

  export type UpvoteUpdateManyWithWhereWithoutBlogInput = {
    where: UpvoteScalarWhereInput
    data: XOR<UpvoteUpdateManyMutationInput, UpvoteUncheckedUpdateManyWithoutBlogInput>
  }

  export type UpvoteScalarWhereInput = {
    AND?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
    OR?: UpvoteScalarWhereInput[]
    NOT?: UpvoteScalarWhereInput | UpvoteScalarWhereInput[]
    id?: IntFilter<"Upvote"> | number
    blogId?: IntFilter<"Upvote"> | number
    userId?: IntFilter<"Upvote"> | number
  }

  export type BlogCreateWithoutUpvotesRelationInput = {
    title: string
    content: string
    upvotes?: number
    author: UserCreateNestedOneWithoutBlogsInput
    comments?: CommentCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutUpvotesRelationInput = {
    id?: number
    title: string
    content: string
    authorId: number
    upvotes?: number
    comments?: CommentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutUpvotesRelationInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutUpvotesRelationInput, BlogUncheckedCreateWithoutUpvotesRelationInput>
  }

  export type BlogUpsertWithoutUpvotesRelationInput = {
    update: XOR<BlogUpdateWithoutUpvotesRelationInput, BlogUncheckedUpdateWithoutUpvotesRelationInput>
    create: XOR<BlogCreateWithoutUpvotesRelationInput, BlogUncheckedCreateWithoutUpvotesRelationInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutUpvotesRelationInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutUpvotesRelationInput, BlogUncheckedUpdateWithoutUpvotesRelationInput>
  }

  export type BlogUpdateWithoutUpvotesRelationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutBlogsNestedInput
    comments?: CommentUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutUpvotesRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogCreateWithoutCommentsInput = {
    title: string
    content: string
    upvotes?: number
    author: UserCreateNestedOneWithoutBlogsInput
    upvotesRelation?: UpvoteCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    content: string
    authorId: number
    upvotes?: number
    upvotesRelation?: UpvoteUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutCommentsInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
  }

  export type BlogUpsertWithoutCommentsInput = {
    update: XOR<BlogUpdateWithoutCommentsInput, BlogUncheckedUpdateWithoutCommentsInput>
    create: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutCommentsInput, BlogUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutBlogsNestedInput
    upvotesRelation?: UpvoteUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    upvotes?: IntFieldUpdateOperationsInput | number
    upvotesRelation?: UpvoteUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type UserCreateWithoutForumThreadInput = {
    name?: string | null
    email: string
    password: string
    provider?: string | null
    providerAccountId?: string | null
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    ForumComment?: ForumCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutForumThreadInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    provider?: string | null
    providerAccountId?: string | null
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    ForumComment?: ForumCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutForumThreadInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutForumThreadInput, UserUncheckedCreateWithoutForumThreadInput>
  }

  export type ForumCommentCreateWithoutThreadInput = {
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    author: UserCreateNestedOneWithoutForumCommentInput
    parent?: ForumCommentCreateNestedOneWithoutRepliesInput
    replies?: ForumCommentCreateNestedManyWithoutParentInput
    upvotesRelation?: ForumCommentUpvoteCreateNestedManyWithoutForumCommentInput
    downvotesRelation?: ForumCommentDownvoteCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentUncheckedCreateWithoutThreadInput = {
    id?: number
    content: string
    authorId: number
    parentId?: number | null
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    replies?: ForumCommentUncheckedCreateNestedManyWithoutParentInput
    upvotesRelation?: ForumCommentUpvoteUncheckedCreateNestedManyWithoutForumCommentInput
    downvotesRelation?: ForumCommentDownvoteUncheckedCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentCreateOrConnectWithoutThreadInput = {
    where: ForumCommentWhereUniqueInput
    create: XOR<ForumCommentCreateWithoutThreadInput, ForumCommentUncheckedCreateWithoutThreadInput>
  }

  export type ForumCommentCreateManyThreadInputEnvelope = {
    data: ForumCommentCreateManyThreadInput | ForumCommentCreateManyThreadInput[]
  }

  export type ForumThreadUpvoteCreateWithoutForumThreadInput = {
    threadId: number
    userId: number
  }

  export type ForumThreadUpvoteUncheckedCreateWithoutForumThreadInput = {
    id?: number
    threadId: number
    userId: number
  }

  export type ForumThreadUpvoteCreateOrConnectWithoutForumThreadInput = {
    where: ForumThreadUpvoteWhereUniqueInput
    create: XOR<ForumThreadUpvoteCreateWithoutForumThreadInput, ForumThreadUpvoteUncheckedCreateWithoutForumThreadInput>
  }

  export type ForumThreadUpvoteCreateManyForumThreadInputEnvelope = {
    data: ForumThreadUpvoteCreateManyForumThreadInput | ForumThreadUpvoteCreateManyForumThreadInput[]
  }

  export type ForumThreadDownvoteCreateWithoutForumThreadInput = {
    threadId: number
    userId: number
  }

  export type ForumThreadDownvoteUncheckedCreateWithoutForumThreadInput = {
    id?: number
    threadId: number
    userId: number
  }

  export type ForumThreadDownvoteCreateOrConnectWithoutForumThreadInput = {
    where: ForumThreadDownvoteWhereUniqueInput
    create: XOR<ForumThreadDownvoteCreateWithoutForumThreadInput, ForumThreadDownvoteUncheckedCreateWithoutForumThreadInput>
  }

  export type ForumThreadDownvoteCreateManyForumThreadInputEnvelope = {
    data: ForumThreadDownvoteCreateManyForumThreadInput | ForumThreadDownvoteCreateManyForumThreadInput[]
  }

  export type UserUpsertWithoutForumThreadInput = {
    update: XOR<UserUpdateWithoutForumThreadInput, UserUncheckedUpdateWithoutForumThreadInput>
    create: XOR<UserCreateWithoutForumThreadInput, UserUncheckedCreateWithoutForumThreadInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutForumThreadInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutForumThreadInput, UserUncheckedUpdateWithoutForumThreadInput>
  }

  export type UserUpdateWithoutForumThreadInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    ForumComment?: ForumCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutForumThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    ForumComment?: ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ForumCommentUpsertWithWhereUniqueWithoutThreadInput = {
    where: ForumCommentWhereUniqueInput
    update: XOR<ForumCommentUpdateWithoutThreadInput, ForumCommentUncheckedUpdateWithoutThreadInput>
    create: XOR<ForumCommentCreateWithoutThreadInput, ForumCommentUncheckedCreateWithoutThreadInput>
  }

  export type ForumCommentUpdateWithWhereUniqueWithoutThreadInput = {
    where: ForumCommentWhereUniqueInput
    data: XOR<ForumCommentUpdateWithoutThreadInput, ForumCommentUncheckedUpdateWithoutThreadInput>
  }

  export type ForumCommentUpdateManyWithWhereWithoutThreadInput = {
    where: ForumCommentScalarWhereInput
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyWithoutThreadInput>
  }

  export type ForumThreadUpvoteUpsertWithWhereUniqueWithoutForumThreadInput = {
    where: ForumThreadUpvoteWhereUniqueInput
    update: XOR<ForumThreadUpvoteUpdateWithoutForumThreadInput, ForumThreadUpvoteUncheckedUpdateWithoutForumThreadInput>
    create: XOR<ForumThreadUpvoteCreateWithoutForumThreadInput, ForumThreadUpvoteUncheckedCreateWithoutForumThreadInput>
  }

  export type ForumThreadUpvoteUpdateWithWhereUniqueWithoutForumThreadInput = {
    where: ForumThreadUpvoteWhereUniqueInput
    data: XOR<ForumThreadUpvoteUpdateWithoutForumThreadInput, ForumThreadUpvoteUncheckedUpdateWithoutForumThreadInput>
  }

  export type ForumThreadUpvoteUpdateManyWithWhereWithoutForumThreadInput = {
    where: ForumThreadUpvoteScalarWhereInput
    data: XOR<ForumThreadUpvoteUpdateManyMutationInput, ForumThreadUpvoteUncheckedUpdateManyWithoutForumThreadInput>
  }

  export type ForumThreadUpvoteScalarWhereInput = {
    AND?: ForumThreadUpvoteScalarWhereInput | ForumThreadUpvoteScalarWhereInput[]
    OR?: ForumThreadUpvoteScalarWhereInput[]
    NOT?: ForumThreadUpvoteScalarWhereInput | ForumThreadUpvoteScalarWhereInput[]
    id?: IntFilter<"ForumThreadUpvote"> | number
    threadId?: IntFilter<"ForumThreadUpvote"> | number
    userId?: IntFilter<"ForumThreadUpvote"> | number
    forumThreadId?: IntNullableFilter<"ForumThreadUpvote"> | number | null
  }

  export type ForumThreadDownvoteUpsertWithWhereUniqueWithoutForumThreadInput = {
    where: ForumThreadDownvoteWhereUniqueInput
    update: XOR<ForumThreadDownvoteUpdateWithoutForumThreadInput, ForumThreadDownvoteUncheckedUpdateWithoutForumThreadInput>
    create: XOR<ForumThreadDownvoteCreateWithoutForumThreadInput, ForumThreadDownvoteUncheckedCreateWithoutForumThreadInput>
  }

  export type ForumThreadDownvoteUpdateWithWhereUniqueWithoutForumThreadInput = {
    where: ForumThreadDownvoteWhereUniqueInput
    data: XOR<ForumThreadDownvoteUpdateWithoutForumThreadInput, ForumThreadDownvoteUncheckedUpdateWithoutForumThreadInput>
  }

  export type ForumThreadDownvoteUpdateManyWithWhereWithoutForumThreadInput = {
    where: ForumThreadDownvoteScalarWhereInput
    data: XOR<ForumThreadDownvoteUpdateManyMutationInput, ForumThreadDownvoteUncheckedUpdateManyWithoutForumThreadInput>
  }

  export type ForumThreadDownvoteScalarWhereInput = {
    AND?: ForumThreadDownvoteScalarWhereInput | ForumThreadDownvoteScalarWhereInput[]
    OR?: ForumThreadDownvoteScalarWhereInput[]
    NOT?: ForumThreadDownvoteScalarWhereInput | ForumThreadDownvoteScalarWhereInput[]
    id?: IntFilter<"ForumThreadDownvote"> | number
    threadId?: IntFilter<"ForumThreadDownvote"> | number
    userId?: IntFilter<"ForumThreadDownvote"> | number
    forumThreadId?: IntNullableFilter<"ForumThreadDownvote"> | number | null
  }

  export type UserCreateWithoutForumCommentInput = {
    name?: string | null
    email: string
    password: string
    provider?: string | null
    providerAccountId?: string | null
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    ForumThread?: ForumThreadCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutForumCommentInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    provider?: string | null
    providerAccountId?: string | null
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    ForumThread?: ForumThreadUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutForumCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutForumCommentInput, UserUncheckedCreateWithoutForumCommentInput>
  }

  export type ForumThreadCreateWithoutCommentsInput = {
    title: string
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    author: UserCreateNestedOneWithoutForumThreadInput
    upvotesRelation?: ForumThreadUpvoteCreateNestedManyWithoutForumThreadInput
    downvotesRelation?: ForumThreadDownvoteCreateNestedManyWithoutForumThreadInput
  }

  export type ForumThreadUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    content: string
    authorId: number
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    upvotesRelation?: ForumThreadUpvoteUncheckedCreateNestedManyWithoutForumThreadInput
    downvotesRelation?: ForumThreadDownvoteUncheckedCreateNestedManyWithoutForumThreadInput
  }

  export type ForumThreadCreateOrConnectWithoutCommentsInput = {
    where: ForumThreadWhereUniqueInput
    create: XOR<ForumThreadCreateWithoutCommentsInput, ForumThreadUncheckedCreateWithoutCommentsInput>
  }

  export type ForumCommentCreateWithoutRepliesInput = {
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    author: UserCreateNestedOneWithoutForumCommentInput
    thread: ForumThreadCreateNestedOneWithoutCommentsInput
    parent?: ForumCommentCreateNestedOneWithoutRepliesInput
    upvotesRelation?: ForumCommentUpvoteCreateNestedManyWithoutForumCommentInput
    downvotesRelation?: ForumCommentDownvoteCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentUncheckedCreateWithoutRepliesInput = {
    id?: number
    content: string
    authorId: number
    threadId: number
    parentId?: number | null
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    upvotesRelation?: ForumCommentUpvoteUncheckedCreateNestedManyWithoutForumCommentInput
    downvotesRelation?: ForumCommentDownvoteUncheckedCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentCreateOrConnectWithoutRepliesInput = {
    where: ForumCommentWhereUniqueInput
    create: XOR<ForumCommentCreateWithoutRepliesInput, ForumCommentUncheckedCreateWithoutRepliesInput>
  }

  export type ForumCommentCreateWithoutParentInput = {
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    author: UserCreateNestedOneWithoutForumCommentInput
    thread: ForumThreadCreateNestedOneWithoutCommentsInput
    replies?: ForumCommentCreateNestedManyWithoutParentInput
    upvotesRelation?: ForumCommentUpvoteCreateNestedManyWithoutForumCommentInput
    downvotesRelation?: ForumCommentDownvoteCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentUncheckedCreateWithoutParentInput = {
    id?: number
    content: string
    authorId: number
    threadId: number
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    replies?: ForumCommentUncheckedCreateNestedManyWithoutParentInput
    upvotesRelation?: ForumCommentUpvoteUncheckedCreateNestedManyWithoutForumCommentInput
    downvotesRelation?: ForumCommentDownvoteUncheckedCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentCreateOrConnectWithoutParentInput = {
    where: ForumCommentWhereUniqueInput
    create: XOR<ForumCommentCreateWithoutParentInput, ForumCommentUncheckedCreateWithoutParentInput>
  }

  export type ForumCommentCreateManyParentInputEnvelope = {
    data: ForumCommentCreateManyParentInput | ForumCommentCreateManyParentInput[]
  }

  export type ForumCommentUpvoteCreateWithoutForumCommentInput = {
    commentId: number
    userId: number
  }

  export type ForumCommentUpvoteUncheckedCreateWithoutForumCommentInput = {
    id?: number
    commentId: number
    userId: number
  }

  export type ForumCommentUpvoteCreateOrConnectWithoutForumCommentInput = {
    where: ForumCommentUpvoteWhereUniqueInput
    create: XOR<ForumCommentUpvoteCreateWithoutForumCommentInput, ForumCommentUpvoteUncheckedCreateWithoutForumCommentInput>
  }

  export type ForumCommentUpvoteCreateManyForumCommentInputEnvelope = {
    data: ForumCommentUpvoteCreateManyForumCommentInput | ForumCommentUpvoteCreateManyForumCommentInput[]
  }

  export type ForumCommentDownvoteCreateWithoutForumCommentInput = {
    commentId: number
    userId: number
  }

  export type ForumCommentDownvoteUncheckedCreateWithoutForumCommentInput = {
    id?: number
    commentId: number
    userId: number
  }

  export type ForumCommentDownvoteCreateOrConnectWithoutForumCommentInput = {
    where: ForumCommentDownvoteWhereUniqueInput
    create: XOR<ForumCommentDownvoteCreateWithoutForumCommentInput, ForumCommentDownvoteUncheckedCreateWithoutForumCommentInput>
  }

  export type ForumCommentDownvoteCreateManyForumCommentInputEnvelope = {
    data: ForumCommentDownvoteCreateManyForumCommentInput | ForumCommentDownvoteCreateManyForumCommentInput[]
  }

  export type UserUpsertWithoutForumCommentInput = {
    update: XOR<UserUpdateWithoutForumCommentInput, UserUncheckedUpdateWithoutForumCommentInput>
    create: XOR<UserCreateWithoutForumCommentInput, UserUncheckedCreateWithoutForumCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutForumCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutForumCommentInput, UserUncheckedUpdateWithoutForumCommentInput>
  }

  export type UserUpdateWithoutForumCommentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
    ForumThread?: ForumThreadUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutForumCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
    ForumThread?: ForumThreadUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ForumThreadUpsertWithoutCommentsInput = {
    update: XOR<ForumThreadUpdateWithoutCommentsInput, ForumThreadUncheckedUpdateWithoutCommentsInput>
    create: XOR<ForumThreadCreateWithoutCommentsInput, ForumThreadUncheckedCreateWithoutCommentsInput>
    where?: ForumThreadWhereInput
  }

  export type ForumThreadUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ForumThreadWhereInput
    data: XOR<ForumThreadUpdateWithoutCommentsInput, ForumThreadUncheckedUpdateWithoutCommentsInput>
  }

  export type ForumThreadUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutForumThreadNestedInput
    upvotesRelation?: ForumThreadUpvoteUpdateManyWithoutForumThreadNestedInput
    downvotesRelation?: ForumThreadDownvoteUpdateManyWithoutForumThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    upvotesRelation?: ForumThreadUpvoteUncheckedUpdateManyWithoutForumThreadNestedInput
    downvotesRelation?: ForumThreadDownvoteUncheckedUpdateManyWithoutForumThreadNestedInput
  }

  export type ForumCommentUpsertWithoutRepliesInput = {
    update: XOR<ForumCommentUpdateWithoutRepliesInput, ForumCommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<ForumCommentCreateWithoutRepliesInput, ForumCommentUncheckedCreateWithoutRepliesInput>
    where?: ForumCommentWhereInput
  }

  export type ForumCommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: ForumCommentWhereInput
    data: XOR<ForumCommentUpdateWithoutRepliesInput, ForumCommentUncheckedUpdateWithoutRepliesInput>
  }

  export type ForumCommentUpdateWithoutRepliesInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutForumCommentNestedInput
    thread?: ForumThreadUpdateOneRequiredWithoutCommentsNestedInput
    parent?: ForumCommentUpdateOneWithoutRepliesNestedInput
    upvotesRelation?: ForumCommentUpvoteUpdateManyWithoutForumCommentNestedInput
    downvotesRelation?: ForumCommentDownvoteUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    upvotesRelation?: ForumCommentUpvoteUncheckedUpdateManyWithoutForumCommentNestedInput
    downvotesRelation?: ForumCommentDownvoteUncheckedUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentUpsertWithWhereUniqueWithoutParentInput = {
    where: ForumCommentWhereUniqueInput
    update: XOR<ForumCommentUpdateWithoutParentInput, ForumCommentUncheckedUpdateWithoutParentInput>
    create: XOR<ForumCommentCreateWithoutParentInput, ForumCommentUncheckedCreateWithoutParentInput>
  }

  export type ForumCommentUpdateWithWhereUniqueWithoutParentInput = {
    where: ForumCommentWhereUniqueInput
    data: XOR<ForumCommentUpdateWithoutParentInput, ForumCommentUncheckedUpdateWithoutParentInput>
  }

  export type ForumCommentUpdateManyWithWhereWithoutParentInput = {
    where: ForumCommentScalarWhereInput
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyWithoutParentInput>
  }

  export type ForumCommentUpvoteUpsertWithWhereUniqueWithoutForumCommentInput = {
    where: ForumCommentUpvoteWhereUniqueInput
    update: XOR<ForumCommentUpvoteUpdateWithoutForumCommentInput, ForumCommentUpvoteUncheckedUpdateWithoutForumCommentInput>
    create: XOR<ForumCommentUpvoteCreateWithoutForumCommentInput, ForumCommentUpvoteUncheckedCreateWithoutForumCommentInput>
  }

  export type ForumCommentUpvoteUpdateWithWhereUniqueWithoutForumCommentInput = {
    where: ForumCommentUpvoteWhereUniqueInput
    data: XOR<ForumCommentUpvoteUpdateWithoutForumCommentInput, ForumCommentUpvoteUncheckedUpdateWithoutForumCommentInput>
  }

  export type ForumCommentUpvoteUpdateManyWithWhereWithoutForumCommentInput = {
    where: ForumCommentUpvoteScalarWhereInput
    data: XOR<ForumCommentUpvoteUpdateManyMutationInput, ForumCommentUpvoteUncheckedUpdateManyWithoutForumCommentInput>
  }

  export type ForumCommentUpvoteScalarWhereInput = {
    AND?: ForumCommentUpvoteScalarWhereInput | ForumCommentUpvoteScalarWhereInput[]
    OR?: ForumCommentUpvoteScalarWhereInput[]
    NOT?: ForumCommentUpvoteScalarWhereInput | ForumCommentUpvoteScalarWhereInput[]
    id?: IntFilter<"ForumCommentUpvote"> | number
    commentId?: IntFilter<"ForumCommentUpvote"> | number
    userId?: IntFilter<"ForumCommentUpvote"> | number
    forumCommentId?: IntNullableFilter<"ForumCommentUpvote"> | number | null
  }

  export type ForumCommentDownvoteUpsertWithWhereUniqueWithoutForumCommentInput = {
    where: ForumCommentDownvoteWhereUniqueInput
    update: XOR<ForumCommentDownvoteUpdateWithoutForumCommentInput, ForumCommentDownvoteUncheckedUpdateWithoutForumCommentInput>
    create: XOR<ForumCommentDownvoteCreateWithoutForumCommentInput, ForumCommentDownvoteUncheckedCreateWithoutForumCommentInput>
  }

  export type ForumCommentDownvoteUpdateWithWhereUniqueWithoutForumCommentInput = {
    where: ForumCommentDownvoteWhereUniqueInput
    data: XOR<ForumCommentDownvoteUpdateWithoutForumCommentInput, ForumCommentDownvoteUncheckedUpdateWithoutForumCommentInput>
  }

  export type ForumCommentDownvoteUpdateManyWithWhereWithoutForumCommentInput = {
    where: ForumCommentDownvoteScalarWhereInput
    data: XOR<ForumCommentDownvoteUpdateManyMutationInput, ForumCommentDownvoteUncheckedUpdateManyWithoutForumCommentInput>
  }

  export type ForumCommentDownvoteScalarWhereInput = {
    AND?: ForumCommentDownvoteScalarWhereInput | ForumCommentDownvoteScalarWhereInput[]
    OR?: ForumCommentDownvoteScalarWhereInput[]
    NOT?: ForumCommentDownvoteScalarWhereInput | ForumCommentDownvoteScalarWhereInput[]
    id?: IntFilter<"ForumCommentDownvote"> | number
    commentId?: IntFilter<"ForumCommentDownvote"> | number
    userId?: IntFilter<"ForumCommentDownvote"> | number
    forumCommentId?: IntNullableFilter<"ForumCommentDownvote"> | number | null
  }

  export type ForumThreadCreateWithoutUpvotesRelationInput = {
    title: string
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    author: UserCreateNestedOneWithoutForumThreadInput
    comments?: ForumCommentCreateNestedManyWithoutThreadInput
    downvotesRelation?: ForumThreadDownvoteCreateNestedManyWithoutForumThreadInput
  }

  export type ForumThreadUncheckedCreateWithoutUpvotesRelationInput = {
    id?: number
    title: string
    content: string
    authorId: number
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    comments?: ForumCommentUncheckedCreateNestedManyWithoutThreadInput
    downvotesRelation?: ForumThreadDownvoteUncheckedCreateNestedManyWithoutForumThreadInput
  }

  export type ForumThreadCreateOrConnectWithoutUpvotesRelationInput = {
    where: ForumThreadWhereUniqueInput
    create: XOR<ForumThreadCreateWithoutUpvotesRelationInput, ForumThreadUncheckedCreateWithoutUpvotesRelationInput>
  }

  export type ForumThreadUpsertWithoutUpvotesRelationInput = {
    update: XOR<ForumThreadUpdateWithoutUpvotesRelationInput, ForumThreadUncheckedUpdateWithoutUpvotesRelationInput>
    create: XOR<ForumThreadCreateWithoutUpvotesRelationInput, ForumThreadUncheckedCreateWithoutUpvotesRelationInput>
    where?: ForumThreadWhereInput
  }

  export type ForumThreadUpdateToOneWithWhereWithoutUpvotesRelationInput = {
    where?: ForumThreadWhereInput
    data: XOR<ForumThreadUpdateWithoutUpvotesRelationInput, ForumThreadUncheckedUpdateWithoutUpvotesRelationInput>
  }

  export type ForumThreadUpdateWithoutUpvotesRelationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutForumThreadNestedInput
    comments?: ForumCommentUpdateManyWithoutThreadNestedInput
    downvotesRelation?: ForumThreadDownvoteUpdateManyWithoutForumThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateWithoutUpvotesRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    comments?: ForumCommentUncheckedUpdateManyWithoutThreadNestedInput
    downvotesRelation?: ForumThreadDownvoteUncheckedUpdateManyWithoutForumThreadNestedInput
  }

  export type ForumThreadCreateWithoutDownvotesRelationInput = {
    title: string
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    author: UserCreateNestedOneWithoutForumThreadInput
    comments?: ForumCommentCreateNestedManyWithoutThreadInput
    upvotesRelation?: ForumThreadUpvoteCreateNestedManyWithoutForumThreadInput
  }

  export type ForumThreadUncheckedCreateWithoutDownvotesRelationInput = {
    id?: number
    title: string
    content: string
    authorId: number
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    comments?: ForumCommentUncheckedCreateNestedManyWithoutThreadInput
    upvotesRelation?: ForumThreadUpvoteUncheckedCreateNestedManyWithoutForumThreadInput
  }

  export type ForumThreadCreateOrConnectWithoutDownvotesRelationInput = {
    where: ForumThreadWhereUniqueInput
    create: XOR<ForumThreadCreateWithoutDownvotesRelationInput, ForumThreadUncheckedCreateWithoutDownvotesRelationInput>
  }

  export type ForumThreadUpsertWithoutDownvotesRelationInput = {
    update: XOR<ForumThreadUpdateWithoutDownvotesRelationInput, ForumThreadUncheckedUpdateWithoutDownvotesRelationInput>
    create: XOR<ForumThreadCreateWithoutDownvotesRelationInput, ForumThreadUncheckedCreateWithoutDownvotesRelationInput>
    where?: ForumThreadWhereInput
  }

  export type ForumThreadUpdateToOneWithWhereWithoutDownvotesRelationInput = {
    where?: ForumThreadWhereInput
    data: XOR<ForumThreadUpdateWithoutDownvotesRelationInput, ForumThreadUncheckedUpdateWithoutDownvotesRelationInput>
  }

  export type ForumThreadUpdateWithoutDownvotesRelationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutForumThreadNestedInput
    comments?: ForumCommentUpdateManyWithoutThreadNestedInput
    upvotesRelation?: ForumThreadUpvoteUpdateManyWithoutForumThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateWithoutDownvotesRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    comments?: ForumCommentUncheckedUpdateManyWithoutThreadNestedInput
    upvotesRelation?: ForumThreadUpvoteUncheckedUpdateManyWithoutForumThreadNestedInput
  }

  export type ForumCommentCreateWithoutUpvotesRelationInput = {
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    author: UserCreateNestedOneWithoutForumCommentInput
    thread: ForumThreadCreateNestedOneWithoutCommentsInput
    parent?: ForumCommentCreateNestedOneWithoutRepliesInput
    replies?: ForumCommentCreateNestedManyWithoutParentInput
    downvotesRelation?: ForumCommentDownvoteCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentUncheckedCreateWithoutUpvotesRelationInput = {
    id?: number
    content: string
    authorId: number
    threadId: number
    parentId?: number | null
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    replies?: ForumCommentUncheckedCreateNestedManyWithoutParentInput
    downvotesRelation?: ForumCommentDownvoteUncheckedCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentCreateOrConnectWithoutUpvotesRelationInput = {
    where: ForumCommentWhereUniqueInput
    create: XOR<ForumCommentCreateWithoutUpvotesRelationInput, ForumCommentUncheckedCreateWithoutUpvotesRelationInput>
  }

  export type ForumCommentUpsertWithoutUpvotesRelationInput = {
    update: XOR<ForumCommentUpdateWithoutUpvotesRelationInput, ForumCommentUncheckedUpdateWithoutUpvotesRelationInput>
    create: XOR<ForumCommentCreateWithoutUpvotesRelationInput, ForumCommentUncheckedCreateWithoutUpvotesRelationInput>
    where?: ForumCommentWhereInput
  }

  export type ForumCommentUpdateToOneWithWhereWithoutUpvotesRelationInput = {
    where?: ForumCommentWhereInput
    data: XOR<ForumCommentUpdateWithoutUpvotesRelationInput, ForumCommentUncheckedUpdateWithoutUpvotesRelationInput>
  }

  export type ForumCommentUpdateWithoutUpvotesRelationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutForumCommentNestedInput
    thread?: ForumThreadUpdateOneRequiredWithoutCommentsNestedInput
    parent?: ForumCommentUpdateOneWithoutRepliesNestedInput
    replies?: ForumCommentUpdateManyWithoutParentNestedInput
    downvotesRelation?: ForumCommentDownvoteUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateWithoutUpvotesRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    replies?: ForumCommentUncheckedUpdateManyWithoutParentNestedInput
    downvotesRelation?: ForumCommentDownvoteUncheckedUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentCreateWithoutDownvotesRelationInput = {
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    author: UserCreateNestedOneWithoutForumCommentInput
    thread: ForumThreadCreateNestedOneWithoutCommentsInput
    parent?: ForumCommentCreateNestedOneWithoutRepliesInput
    replies?: ForumCommentCreateNestedManyWithoutParentInput
    upvotesRelation?: ForumCommentUpvoteCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentUncheckedCreateWithoutDownvotesRelationInput = {
    id?: number
    content: string
    authorId: number
    threadId: number
    parentId?: number | null
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
    replies?: ForumCommentUncheckedCreateNestedManyWithoutParentInput
    upvotesRelation?: ForumCommentUpvoteUncheckedCreateNestedManyWithoutForumCommentInput
  }

  export type ForumCommentCreateOrConnectWithoutDownvotesRelationInput = {
    where: ForumCommentWhereUniqueInput
    create: XOR<ForumCommentCreateWithoutDownvotesRelationInput, ForumCommentUncheckedCreateWithoutDownvotesRelationInput>
  }

  export type ForumCommentUpsertWithoutDownvotesRelationInput = {
    update: XOR<ForumCommentUpdateWithoutDownvotesRelationInput, ForumCommentUncheckedUpdateWithoutDownvotesRelationInput>
    create: XOR<ForumCommentCreateWithoutDownvotesRelationInput, ForumCommentUncheckedCreateWithoutDownvotesRelationInput>
    where?: ForumCommentWhereInput
  }

  export type ForumCommentUpdateToOneWithWhereWithoutDownvotesRelationInput = {
    where?: ForumCommentWhereInput
    data: XOR<ForumCommentUpdateWithoutDownvotesRelationInput, ForumCommentUncheckedUpdateWithoutDownvotesRelationInput>
  }

  export type ForumCommentUpdateWithoutDownvotesRelationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutForumCommentNestedInput
    thread?: ForumThreadUpdateOneRequiredWithoutCommentsNestedInput
    parent?: ForumCommentUpdateOneWithoutRepliesNestedInput
    replies?: ForumCommentUpdateManyWithoutParentNestedInput
    upvotesRelation?: ForumCommentUpvoteUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateWithoutDownvotesRelationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    replies?: ForumCommentUncheckedUpdateManyWithoutParentNestedInput
    upvotesRelation?: ForumCommentUpvoteUncheckedUpdateManyWithoutForumCommentNestedInput
  }

  export type BlogCreateManyAuthorInput = {
    id?: number
    title: string
    content: string
    upvotes?: number
  }

  export type ForumThreadCreateManyAuthorInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
  }

  export type ForumCommentCreateManyAuthorInput = {
    id?: number
    content: string
    threadId: number
    parentId?: number | null
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
  }

  export type BlogUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: CommentUpdateManyWithoutBlogNestedInput
    upvotesRelation?: UpvoteUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutBlogNestedInput
    upvotesRelation?: UpvoteUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    comments?: ForumCommentUpdateManyWithoutThreadNestedInput
    upvotesRelation?: ForumThreadUpvoteUpdateManyWithoutForumThreadNestedInput
    downvotesRelation?: ForumThreadDownvoteUpdateManyWithoutForumThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    comments?: ForumCommentUncheckedUpdateManyWithoutThreadNestedInput
    upvotesRelation?: ForumThreadUpvoteUncheckedUpdateManyWithoutForumThreadNestedInput
    downvotesRelation?: ForumThreadDownvoteUncheckedUpdateManyWithoutForumThreadNestedInput
  }

  export type ForumThreadUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    thread?: ForumThreadUpdateOneRequiredWithoutCommentsNestedInput
    parent?: ForumCommentUpdateOneWithoutRepliesNestedInput
    replies?: ForumCommentUpdateManyWithoutParentNestedInput
    upvotesRelation?: ForumCommentUpvoteUpdateManyWithoutForumCommentNestedInput
    downvotesRelation?: ForumCommentDownvoteUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    threadId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    replies?: ForumCommentUncheckedUpdateManyWithoutParentNestedInput
    upvotesRelation?: ForumCommentUpvoteUncheckedUpdateManyWithoutForumCommentNestedInput
    downvotesRelation?: ForumCommentDownvoteUncheckedUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    threadId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateManyBlogInput = {
    id?: number
    content: string
    upvotes?: number
    downvotes?: number
    createdAt?: Date | string
  }

  export type UpvoteCreateManyBlogInput = {
    id?: number
    userId: number
  }

  export type CommentUpdateWithoutBlogInput = {
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpvoteUpdateWithoutBlogInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UpvoteUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UpvoteUncheckedUpdateManyWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentCreateManyThreadInput = {
    id?: number
    content: string
    authorId: number
    parentId?: number | null
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
  }

  export type ForumThreadUpvoteCreateManyForumThreadInput = {
    id?: number
    threadId: number
    userId: number
  }

  export type ForumThreadDownvoteCreateManyForumThreadInput = {
    id?: number
    threadId: number
    userId: number
  }

  export type ForumCommentUpdateWithoutThreadInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutForumCommentNestedInput
    parent?: ForumCommentUpdateOneWithoutRepliesNestedInput
    replies?: ForumCommentUpdateManyWithoutParentNestedInput
    upvotesRelation?: ForumCommentUpvoteUpdateManyWithoutForumCommentNestedInput
    downvotesRelation?: ForumCommentDownvoteUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    replies?: ForumCommentUncheckedUpdateManyWithoutParentNestedInput
    upvotesRelation?: ForumCommentUpvoteUncheckedUpdateManyWithoutForumCommentNestedInput
    downvotesRelation?: ForumCommentDownvoteUncheckedUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateManyWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadUpvoteUpdateWithoutForumThreadInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadUpvoteUncheckedUpdateWithoutForumThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadUpvoteUncheckedUpdateManyWithoutForumThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadDownvoteUpdateWithoutForumThreadInput = {
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadDownvoteUncheckedUpdateWithoutForumThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumThreadDownvoteUncheckedUpdateManyWithoutForumThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentCreateManyParentInput = {
    id?: number
    content: string
    authorId: number
    threadId: number
    createdAt?: Date | string
    upvotes?: number
    downvotes?: number
  }

  export type ForumCommentUpvoteCreateManyForumCommentInput = {
    id?: number
    commentId: number
    userId: number
  }

  export type ForumCommentDownvoteCreateManyForumCommentInput = {
    id?: number
    commentId: number
    userId: number
  }

  export type ForumCommentUpdateWithoutParentInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutForumCommentNestedInput
    thread?: ForumThreadUpdateOneRequiredWithoutCommentsNestedInput
    replies?: ForumCommentUpdateManyWithoutParentNestedInput
    upvotesRelation?: ForumCommentUpvoteUpdateManyWithoutForumCommentNestedInput
    downvotesRelation?: ForumCommentDownvoteUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
    replies?: ForumCommentUncheckedUpdateManyWithoutParentNestedInput
    upvotesRelation?: ForumCommentUpvoteUncheckedUpdateManyWithoutForumCommentNestedInput
    downvotesRelation?: ForumCommentDownvoteUncheckedUpdateManyWithoutForumCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    threadId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: IntFieldUpdateOperationsInput | number
    downvotes?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentUpvoteUpdateWithoutForumCommentInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentUpvoteUncheckedUpdateWithoutForumCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentUpvoteUncheckedUpdateManyWithoutForumCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentDownvoteUpdateWithoutForumCommentInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentDownvoteUncheckedUpdateWithoutForumCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCommentDownvoteUncheckedUpdateManyWithoutForumCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}