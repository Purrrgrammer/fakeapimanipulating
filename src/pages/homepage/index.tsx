import { useEffect, useState } from 'react'
import { createStore } from '@reduxjs/toolkit'
import { mainService } from '@/service'
import { Post } from '@/interface/placeHolder'
import Posts from '@/Post/index'
import React from 'react'
import ReactLoading from 'react-loading';
import { Row, Col, Container } from 'react-bootstrap'
// import axios from 'axios'



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
        <Container fluid>
            <Row gap={4} className='d-flex'>
                {storeData.map(el => {
                    return <React.Fragment key={`postnumber-${el.id}`}>
                        <Col sm={12} md={6} lg={3} key={el.id} className='h-100'>
                            <Posts userID={el.userID}
                                id={el.id}
                                title={el.title}
                                body={el.body} />
                        </Col>
                    </React.Fragment>
                })}

            </Row>
        </Container>
    )
}

export default Home;