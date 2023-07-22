import { useEffect } from 'react'
import { showData } from '@/component/index'
import { createStore } from '@reduxjs/toolkit'
import { mainService } from '@/service'
import { JResponse, Posts, jsonplaceholderResponse } from '@/interface/placeHolder'
// import axios from 'axios'
import { AxiosResponse, AxiosError } from 'axios'




export const Home = () => {

    let storeData: any = []

    const getData = async () => {
        const data = await mainService().callService()
        console.log('data', data)
        return data //get .data and .status
    }

    const result = getData().then((result) => result).then((result) => result.data)
        .catch(error => error)

    console.log("result", result)
    console.log("storeData", storeData)


    /*
    // console.log(getData())
    result.then((response) => { storeData.push(response.data), responseStatus = response.status })
    
    console.log("storeData", typeof storeData)
    console.log("storeData", storeData)
    */
    return (
        <>
            {/* <h1>{storeData.map((el, index) => { console.log(el[index]) })}</h1> */}
            {/* <h1>{storeData.map(item:=>{

                <h1>{item, name}</h1>

            })}</h1> */}
        </>
    )
}

export default Home;