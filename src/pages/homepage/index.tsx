import { useEffect, useState } from 'react'
import { showData } from '@/component/index'
import { createStore } from '@reduxjs/toolkit'
import { mainService } from '@/service'
import { JResponse, Post, jsonplaceholderResponse } from '@/interface/placeHolder'
// import axios from 'axios'
import { AxiosResponse, AxiosError } from 'axios'



export const Home = () => {
    const [storeData, setStoreData] = useState<Post[]>([])

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await mainService().callService()
                if (data.data) {
                    const realData: Post[] = data.data
                    setStoreData(realData)
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        const result = getData().then((result) => result)
            .catch(error => error)
        console.log("result", result)
    }, [])

    useEffect(() => { console.log(storeData) }, [storeData])


    /*
    console.log(getData())
    result.then((response) => { storeData.push(response.data), responseStatus = response.status })
    console.log("storeData", typeof storeData)
    console.log("storeData", storeData)
    */
    return (
        <>
            {storeData.map(el => { <h1 key={el.id}> {el.id}</h1> })}
            {/* {storeData.map((el: string, index: number) => { return <h1 >{el[index]}</h1> })} */}

        </>
    )
}

export default Home;