import { Post } from "@/interface/placeHolder";
import { postDetailService } from "@/service/detailService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const DetailPage = () => {
    const { id } = useParams()
    const [postDetail, setPostDetail] = useState<Post>({
        userID: 0,
        id: 0,
        title: "string",
        body: "string"
    })
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

    useEffect(() => {
        if (id) callData(id || "1")
        console.log('post generated', id)
    }, [id])

    return (<>
        Detail of the id:{id}
        <h1>{postDetail.id}</h1>
        <h1>{postDetail.userID}</h1>
        <h1>{postDetail.title}</h1>
        <h1>{postDetail.body}</h1>

    </>
    )
}

export default DetailPage;