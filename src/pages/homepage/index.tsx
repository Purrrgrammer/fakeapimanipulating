import { useEffect } from 'react'
import { mainDataService } from '@/service'
import axios from 'axios'
export const Home = () => {

    const getServiceData = async () => {
        const serviceResponse = await mainDataService().callService() //from returned promise
        console.log('this is from homepage', serviceResponse)
    }

    useEffect(() => {
        getServiceData()
    }, [])
    return (
        <h1>This is Home</h1>
    )
}

export default Home;