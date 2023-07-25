import { Post, Comment, CommentResponse } from "@/interface/placeHolder";
import { postDetailService } from "@/service/detailService";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";



export const DetailPage = () => {
    const { id } = useParams()
    const { postId } = useParams()
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
    //calling a post

    const callData = async (id: string) => {
        const response = await postDetailService().getDetail(id)
        if (response.status === 200) {
            console.log("response detail", response.data)
        }
        try {
            if (response.data) {
                setPostDetail(response.data)
            }
            return response
        } catch (error) {
            console.log(error);
        }
    }

    const callComments = async (id: string, postId: number) => {
        const response = await postDetailService().getComment(id, postId)
        if (response.status === 200) {
            console.log('comment data', response.data)
        }
        try {
            if (response.data) {
                setAllComment(response.data)
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
        console.log("id", id)
        console.log("postId", postId)
        if (id || postId) callComments(id || "1", postId || 1)
        console.log('post generated', id, postId)
    }, [id, postId])

    return (
        <>
            {/* mapping data */}
            <div className="bg-primary mt-100">
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
                <div className="comment-section d-flex d-flex justify-content-around mx-5">
                    <h1>{comment.email}</h1>
                </div>

                <Link to={`/`} className="text-decoration-none" >
                    <Button variant="dark" style={{ marginTop: '20px', marginLeft: '80%' }} className="">get back</Button>
                </Link>
            </div >
        </>

    )
}
export default DetailPage;