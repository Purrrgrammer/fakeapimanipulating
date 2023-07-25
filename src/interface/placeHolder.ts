
export interface JResponse { //response from service
    data?: Post[] | undefined,
    status: number | undefined,
}
export interface Post { //inner scale
    userId: number,
    id: number,
    title: string,
    body: string,
}

export interface CommentResponse {
    data?: Comment[],
    status: number | undefined,

}
export interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

// export interface jsonplaceholderResponse { //larger scale
//     result:
// }