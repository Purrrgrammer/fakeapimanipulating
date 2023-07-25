import { Post, Comment, CommentResponse } from "@/interface/placeHolder";
import { postDetailService } from "@/service/detailService";
import { useEffect, useState } from "react";
import { Button, Card, InputGroup } from "react-bootstrap";
import { Form, Link, useParams } from "react-router-dom";




export const DetailPage = () => {
    const { id } = useParams()
    // const { postId } = useParams()
    //default
    const [postDetail, setPostDetail] = useState<Post>({
        userId: 0,
        id: 0,
        title: 'fetch failed',
        body: 'fetch failed'
    })
    const [comment, setComment] = useState<Comment | Comment>({
        postId: 0,
        id: 0,
        name: 'fetch failed',
        email: 'fetch failed',
        body: 'fetch failed',
    })
    const [allComment, setAllComment] = useState<Comment[] | undefined>([])
    const [commentStatus, setCommentStatus] = useState(false)
    //calling a post

    const callData = async (id: string) => {
        const response = await postDetailService().getDetail(id)
        if (response.status === 200) {
            console.log("response detail", response.data)
        }
        try {
            if (response.data) {
                setPostDetail(response.data) //set to a post
            }
            return response
        } catch (error) {
            console.log(error);
        }
    }

    const callComments = async (id: string) => {
        const response = await postDetailService().getComment(id)
        if (response.status === 200) {
            console.log('comment data', response.data)
        }
        try {
            if (response.data) {
                setAllComment(response.data)
                setCommentStatus(true)
                // console.log("recent comment", comment)
                console.log("All comment", allComment)
            }
            return response
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (id) callData(id || "1")
        if (id) callComments(id || "1")
        console.log('post and comment generated', id)
    }, [id])

    return (
        <>
            {/* mapping data */}
            <div className="bg-light mt-100">
                <Card className="mx-auto" style={{ height: "100%", width: "70%", padding: "20px" }}>
                    Post #{id}
                    <h1>{postDetail.userId}</h1>
                    <h2>{postDetail.title}</h2>
                    <p>{postDetail.body}</p>
                </Card>
                <div className="reacting-section border-bottom border-dark d-flex d-flex justify-content-around mx-5">
                    <h3>like</h3>
                    <h3>comment</h3>
                    <h3>share</h3>
                </div>
                {/* ---Comment Section=== */}

                {commentStatus && (
                    <div className="comment-section mx-5">
                        {allComment?.map(el =>
                            <div key={el.id}>
                                <b>{el.name} : <span>{el.email}</span></b>
                                <p key={el.id}>{el.body}</p>
                            </div>)}


                        <InputGroup className="mb-3">
                            <input className="form-control"
                                placeholder="say anything..."
                                aria-label="say anything..."
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                comment
                            </Button>
                        </InputGroup>




                    </div>)

                }
                <Link to={`/`} className="text-decoration-none" >
                    <Button variant="dark" style={{ marginTop: '20px', marginLeft: '80%' }} className="">get back</Button>
                </Link>
            </div >
        </>

    )
}
export default DetailPage;