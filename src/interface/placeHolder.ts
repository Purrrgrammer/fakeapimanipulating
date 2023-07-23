
export interface JResponse { //response from service
    data?: Post[]
    status: number | undefined
}
export interface Post { //inner scale
    userID: number
    id: number
    title: string
    body: string
}


// export interface jsonplaceholderResponse { //larger scale
//     result:
// }