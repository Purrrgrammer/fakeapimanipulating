import { BASE_URL } from "@/utillity/constant"
import axios from "axios"


// interface Item { //smaller scale
//     id: number,
//     title: string,
//     price: number,
//     category: string,
//     description: string,
//     image: string
// }
// interface ItemResponse { //larger scale
//     result: Item[]
// }
// interface IGetListResponse {
//     status: number | undefined
//     data: ItemResponse
// }
// Promise<IGetListResponse>
export const mainDataService = () => {
    return {
        callService: async (limit?: number) => {
            const response = await axios.get(`${BASE_URL}?limit=${limit}`)
            return response //return as a promise
        }
    }
}

