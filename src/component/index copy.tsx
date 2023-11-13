// import { mainService } from '@/service'
// import { useState, useEffect } from 'react'
// import { jsonplaceholderResponse, JResponse } from "@/interface/model"
// import axios from 'axios'

// //store
// const initial = {
//     data: [],
//     loading: false,
//     error: null
// }
// export const [showData, setshowData] = useState(initial)
// export const [fetchData, setfetchData] = useState(initial)

// type itemData = {
//     data: jsonplaceholderResponse[],
//     loading: boolean,
//     error: null | any
// }

// type DataStoreType = {
//     data: itemData
//     fetchData: itemData

// }
// const getListDetailService = {
//     // getPostDetail: async (post: number): Promise<JResponse> => {
//     //     try {
//     //         const response = await axios.get(`${URL}${post | 1}`)
//     //     } catch (error) {

//     //     }
// }
// //-----------------------------------------------------
// const useData = () => {

//     const callData = async (post: number) => {
//         setfetchData({
//             data: [],
//             loading: true,
//             error: null
//         })
//         // state for showing data
//         const responseList = await userService().callService(post) //from returned promise
//         const receiveList = []

//         if (responseList?.status === 200) {
//             const responseResults = responseList.data?.result || []
//             // console.log(responseList)
//             console.log('this is from callData', responseList?.data)
//             for (const post of responseResults) {
//                 const response = await
// // const postData = response.data
//             }
//         } else {
//             setfetchData(initial)
//         }

//     }

// }

// export { useData }
