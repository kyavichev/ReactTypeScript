import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AddressKeySpecifier = ('city' | 'geo' | 'street' | 'suite' | 'zipcode' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	geo?: FieldPolicy<any> | FieldReadFunction<any>,
	street?: FieldPolicy<any> | FieldReadFunction<any>,
	suite?: FieldPolicy<any> | FieldReadFunction<any>,
	zipcode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AlbumKeySpecifier = ('id' | 'photos' | 'title' | 'user' | AlbumKeySpecifier)[];
export type AlbumFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	photos?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AlbumsPageKeySpecifier = ('data' | 'links' | 'meta' | AlbumsPageKeySpecifier)[];
export type AlbumsPageFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('body' | 'email' | 'id' | 'name' | 'post' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentsPageKeySpecifier = ('data' | 'links' | 'meta' | CommentsPageKeySpecifier)[];
export type CommentsPageFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyKeySpecifier = ('bs' | 'catchPhrase' | 'name' | CompanyKeySpecifier)[];
export type CompanyFieldPolicy = {
	bs?: FieldPolicy<any> | FieldReadFunction<any>,
	catchPhrase?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeoKeySpecifier = ('lat' | 'lng' | GeoKeySpecifier)[];
export type GeoFieldPolicy = {
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('_' | 'createAlbum' | 'createComment' | 'createPhoto' | 'createPost' | 'createTodo' | 'createUser' | 'deleteAlbum' | 'deleteComment' | 'deletePhoto' | 'deletePost' | 'deleteTodo' | 'deleteUser' | 'updateAlbum' | 'updateComment' | 'updatePhoto' | 'updatePost' | 'updateTodo' | 'updateUser' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	createAlbum?: FieldPolicy<any> | FieldReadFunction<any>,
	createComment?: FieldPolicy<any> | FieldReadFunction<any>,
	createPhoto?: FieldPolicy<any> | FieldReadFunction<any>,
	createPost?: FieldPolicy<any> | FieldReadFunction<any>,
	createTodo?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAlbum?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePhoto?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePost?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTodo?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAlbum?: FieldPolicy<any> | FieldReadFunction<any>,
	updateComment?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePhoto?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePost?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTodo?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageLimitPairKeySpecifier = ('limit' | 'page' | PageLimitPairKeySpecifier)[];
export type PageLimitPairFieldPolicy = {
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageMetadataKeySpecifier = ('totalCount' | PageMetadataKeySpecifier)[];
export type PageMetadataFieldPolicy = {
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginationLinksKeySpecifier = ('first' | 'last' | 'next' | 'prev' | PaginationLinksKeySpecifier)[];
export type PaginationLinksFieldPolicy = {
	first?: FieldPolicy<any> | FieldReadFunction<any>,
	last?: FieldPolicy<any> | FieldReadFunction<any>,
	next?: FieldPolicy<any> | FieldReadFunction<any>,
	prev?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhotoKeySpecifier = ('album' | 'id' | 'thumbnailUrl' | 'title' | 'url' | PhotoKeySpecifier)[];
export type PhotoFieldPolicy = {
	album?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhotosPageKeySpecifier = ('data' | 'links' | 'meta' | PhotosPageKeySpecifier)[];
export type PhotosPageFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('body' | 'comments' | 'id' | 'title' | 'user' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostsPageKeySpecifier = ('data' | 'links' | 'meta' | PostsPageKeySpecifier)[];
export type PostsPageFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('_' | 'album' | 'albums' | 'comment' | 'comments' | 'photo' | 'photos' | 'post' | 'posts' | 'todo' | 'todos' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	album?: FieldPolicy<any> | FieldReadFunction<any>,
	albums?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	photos?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	todo?: FieldPolicy<any> | FieldReadFunction<any>,
	todos?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TodoKeySpecifier = ('completed' | 'id' | 'title' | 'user' | TodoKeySpecifier)[];
export type TodoFieldPolicy = {
	completed?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TodosPageKeySpecifier = ('data' | 'links' | 'meta' | TodosPageKeySpecifier)[];
export type TodosPageFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('address' | 'albums' | 'company' | 'email' | 'id' | 'name' | 'phone' | 'posts' | 'todos' | 'username' | 'website' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	albums?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	todos?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPageKeySpecifier = ('data' | 'links' | 'meta' | UsersPageKeySpecifier)[];
export type UsersPageFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	Album?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AlbumKeySpecifier | (() => undefined | AlbumKeySpecifier),
		fields?: AlbumFieldPolicy,
	},
	AlbumsPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AlbumsPageKeySpecifier | (() => undefined | AlbumsPageKeySpecifier),
		fields?: AlbumsPageFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CommentsPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentsPageKeySpecifier | (() => undefined | CommentsPageKeySpecifier),
		fields?: CommentsPageFieldPolicy,
	},
	Company?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyKeySpecifier | (() => undefined | CompanyKeySpecifier),
		fields?: CompanyFieldPolicy,
	},
	Geo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeoKeySpecifier | (() => undefined | GeoKeySpecifier),
		fields?: GeoFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	PageLimitPair?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageLimitPairKeySpecifier | (() => undefined | PageLimitPairKeySpecifier),
		fields?: PageLimitPairFieldPolicy,
	},
	PageMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageMetadataKeySpecifier | (() => undefined | PageMetadataKeySpecifier),
		fields?: PageMetadataFieldPolicy,
	},
	PaginationLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginationLinksKeySpecifier | (() => undefined | PaginationLinksKeySpecifier),
		fields?: PaginationLinksFieldPolicy,
	},
	Photo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhotoKeySpecifier | (() => undefined | PhotoKeySpecifier),
		fields?: PhotoFieldPolicy,
	},
	PhotosPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhotosPageKeySpecifier | (() => undefined | PhotosPageKeySpecifier),
		fields?: PhotosPageFieldPolicy,
	},
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	PostsPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostsPageKeySpecifier | (() => undefined | PostsPageKeySpecifier),
		fields?: PostsPageFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Todo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TodoKeySpecifier | (() => undefined | TodoKeySpecifier),
		fields?: TodoFieldPolicy,
	},
	TodosPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TodosPageKeySpecifier | (() => undefined | TodosPageKeySpecifier),
		fields?: TodosPageFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UsersPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPageKeySpecifier | (() => undefined | UsersPageKeySpecifier),
		fields?: UsersPageFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;