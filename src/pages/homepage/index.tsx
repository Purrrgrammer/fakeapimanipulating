import { useEffect, useState } from 'react'
import { showData } from '@/component/index'
import { createStore } from '@reduxjs/toolkit'
import { mainService } from '@/service'
import { JResponse, Post } from '@/interface/placeHolder'
// import axios from 'axios'
import { AxiosResponse, AxiosError } from 'axios'
import Info from '../info'



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
        getData()
    }, [])
    return (
        <>
            {storeData.map(el => { <h1 key={el.id}> {el.id}</h1> })}
        </>
    )
}

export default Home;