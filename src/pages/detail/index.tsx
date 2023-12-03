import { Comment, PostDetail, PostStatus } from "@/interface/model";
import { defaultUser } from "@/service/accountService";
import { postDetailService } from "@/service/detailService";
import { useEffect, useRef, useState } from "react";
import { Button, Card, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const DetailPage = () => {
  const { id } = useParams();
  // const { postId } = useParams()
  //default
  const commentRef = useRef<any>(null);
  const localStatus = JSON.parse(localStorage.getItem("status")!);
  const localUser = JSON.parse(localStorage.getItem("user")!);
  const [postLiked, setPostLiked] = useState<boolean>(false);
  const [postStatus, setPostStatus] = useState<PostStatus>(localStatus);
  const [commentMessage, setCommentMessage] = useState<string | undefined>("");
  useEffect(() => {}, [postStatus]);
  const reactionHandler = (reaction: "likes" | "comments" | "shares") => {
    let newReactionVal = postStatus;
    console.log(newReactionVal);
    switch (reaction) {
      case "likes":
        let likedToLocal: any = [];
        const likeFromLocal = JSON.parse(localStorage.getItem("likedPosts")!);
        if (postLiked) {
          newReactionVal[reaction] = newReactionVal[reaction] - 1;
          likedToLocal = likeFromLocal;
          const removedLike = likedToLocal.filter(
            (el: any) => el.id !== postDetail.id
          );
          localStorage.setItem("likedPosts", JSON.stringify(removedLike));
          // alert("case1");
        } else {
          newReactionVal[reaction] = newReactionVal[reaction] + 1;
          if (!likeFromLocal) {
            likedToLocal.push(postDetail);
            localStorage.setItem("likedPosts", JSON.stringify(likedToLocal));

            // alert("case2");
          } else {
            if (likeFromLocal.includes(postDetail)) {
              // alert("case3");
            } else {
              likedToLocal = likeFromLocal;
              likedToLocal.push(postDetail);
              const removeDupes = likedToLocal.filter(
                (obj: any, index: number) =>
                  index === likedToLocal.findIndex((o: any) => obj.id === o.id)
              );
              localStorage.setItem("likedPosts", JSON.stringify(removeDupes));
              // alert("case4");
            }
          }
        }
        setPostLiked(!postLiked);
        break;
      case "comments":
        newReactionVal[reaction] = newReactionVal[reaction] + 1;
        const newComment = {
          postId: 999,
          id: 999,
          name: localUser ? localUser.name : defaultUser.name,
          email: localUser ? localUser.email : defaultUser.email,
          // name: localUser.name || "default",
          // email: localUser.email || "default@default.com",
          body: commentMessage,
        };
        if (commentRef) {
          commentRef.current.value = "";
        }
        setCommentMessage("");
        setAllComment((prev: any) => [...prev, newComment]);
        break;
      case "shares":
        newReactionVal[reaction] = newReactionVal[reaction] + 1;
        break;
    }
    setPostStatus((prev: PostStatus) => ({
      ...prev,
      newReactionVal,
    }));
  };
  const [postDetail, setPostDetail] = useState<PostDetail>({
    userId: 0,
    id: 0,
    title: "fetch failed",
    body: "fetch failed",
    postStatus: undefined,
  });
  // const [comment, setComment] = useState<Comment | Comment>({
  //   postId: 0,
  //   id: 0,
  //   name: "fetch failed",
  //   email: "fetch failed",
  //   body: "fetch failed",
  // });
  const [allComment, setAllComment] = useState<Comment[] | undefined>([]);
  const [commentStatus, setCommentStatus] = useState(false);
  //calling a post

  const callDetail = async (id: string) => {
    const response = await postDetailService().getDetail(id);
    try {
      if (response.status === 200 && response.data) {
        const result = response.data;
        console.log(result);
        setPostDetail(result); //set to a post
        if (
          JSON.parse(localStorage.getItem("likedPosts")!)
            .map((el: PostDetail) => el.body)
            .includes(response.data.body)
        ) {
          setPostLiked(true);
        }
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const callComments = async (id: string) => {
    const response = await postDetailService().getComment(id);
    console.log(response.data);
    if (response.status === 200) {
      console.log("comment data", response.data);
    }
    try {
      if (response.data) {
        setAllComment(response.data);
        setCommentStatus(true);
        console.log("All comment", allComment);
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callDetail(id || "1");
    callComments(id || "1");
  }, [id]);
  return (
    <>
      <div className="bg-light ">
        <Card
          className="mx-auto card-detail"
          style={{ height: "100%", width: "70%", padding: "20px" }}
        >
          Post #{id}
          <h1>{postDetail.userId}</h1>
          <h2>{postDetail.title}</h2>
          <p>{postDetail.body}</p>
          <div className="d-flex justify-content-between">
            <div>{postStatus.likes} likes</div>
            <div className="d-flex justify-content-end">
              <div className="ms-4">{postStatus.comments} comments</div>
              <div className="ms-4">{postStatus.shares} share</div>
            </div>
          </div>
        </Card>
        <div className="py-1 reacting-section border-bottom border-dark d-flex d-flex justify-content-around mx-5">
          <button
            onClick={() => {
              reactionHandler("likes");
            }}
          >
            {postLiked ? (
              <i className="bi bi-hand-thumbs-up-fill"></i>
            ) : (
              <i className="bi bi-hand-thumbs-up"></i>
            )}
          </button>
          <button onClick={() => (window.location.href = "#input")}>
            <i className="bi bi-chat"></i>
          </button>
          <button>
            <i
              className="bi bi-share"
              onClick={() => {
                reactionHandler("shares");
              }}
            ></i>
          </button>
        </div>

        {/* ---Comment Section=== */}
        {commentStatus && (
          <div className="comment-section mx-5 mt-3">
            {allComment?.map((el) => (
              <div key={el.id}>
                <b>
                  {el.name} : <span>{el.email}</span>
                </b>
                <p key={el.id}>{el.body}</p>
              </div>
            ))}
            <InputGroup className="mb-3" id="input">
              <input
                ref={commentRef}
                type="text"
                name="comment"
                className="form-control"
                placeholder="say anything..."
                aria-label="say anything..."
                aria-describedby="basic-addon2"
                onChange={(e) => setCommentMessage(e.target.value)}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={() => {
                  reactionHandler("comments");
                }}
              >
                comment
              </Button>
            </InputGroup>
          </div>
        )}
      </div>
    </>
  );
};
export default DetailPage;
