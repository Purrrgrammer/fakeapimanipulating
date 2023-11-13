import { useEffect, useState } from "react";
import { mainService } from "@/service";
import { Post } from "@/interface/model";
import Posts from "@/Post/index";
import React from "react";
// import ReactLoading from "react-loading";
import { Row, Col, Container } from "react-bootstrap";
// import axios from 'axios'

export const HomePage = () => {
  const [storeData, setStoreData] = useState<Post[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await mainService().callService();
        if (data.data) {
          const realData: Post[] = data.data;
          const newData = realData.map((el) =>
            Object.assign(el, {
              postStatus: {
                likes: Math.floor(Math.random() * 1000),
                comments: Math.floor(Math.random() * 1000),
                shares: Math.floor(Math.random() * 1000),
              },
            })
          );

          setStoreData(newData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <Container fluid className="p-4">
      <Row gap={4} className="d-flex">
        {storeData.map((el) => {
          return (
            <React.Fragment key={`postnumber-${el.id}`}>
              <Col sm={12} md={6} lg={3} key={el.id} className="h-100">
                <Posts
                  userId={el.userId}
                  id={el.id}
                  title={el.title}
                  body={el.body}
                  postStatus={el.postStatus}
                />
              </Col>
            </React.Fragment>
          );
        })}
      </Row>
    </Container>
  );
};

export default HomePage;
