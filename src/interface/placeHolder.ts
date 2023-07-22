

export interface JResponse { //response from service
    data?: jsonplaceholderResponse
    status: number | undefined
}

export interface jsonplaceholderResponse { //larger scale
    result: Posts[]
}
export interface Posts { //inner scale
    userId: number
    id: number
    title: string
    body: string
}
