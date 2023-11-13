export interface JResponse {
  //response from service
  data?: Post[] | undefined;
  // data?: Post[] | undefined,
  status: number | undefined;
}
export interface Post {
  //inner scale
  userId: number;
  id: number;
  title: string;
  body: string;
  postStatus?: PostStatus;
}
export interface PostStatus {
  likes: number;
  comments: number;
  shares: number;
}

export interface LikeItOrNot {
  liked: boolean;
}
export interface PostDetailResponse {
  data?: PostDetail | undefined;
  // data?: Post[] | undefined,
  status: number | undefined;
}
export interface PostDetail {
  userId: number;
  id: number;
  title: string;
  body: string;
  postStatus?: { likes: number; comments: number; shares: number };
}

export interface CommentResponse {
  data?: Comment[];
  status: number | undefined;
}
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
// account
export interface Account {
  userId: number;
  name: string;
  userName: string;
  id: number;
  email: string;
  friends: number;
  bio: string;
  image: string;
  prevPosts: Post[];
  socialMedia?: SocialMedia[];
}
export interface SocialMedia {
  [x: string]: string | undefined;
}

export interface OneMedia {
  name: string;
  url: string;
}
