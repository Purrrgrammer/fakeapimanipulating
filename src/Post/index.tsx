import { Post } from "@/interface/model";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Posts({ id, title, body, postStatus }: Post) {
  return (
    <Link
      to={`/post/${id}`}
      className="text-decoration-none"
      onClick={() => {
        const status = postStatus;
        localStorage.setItem("status", JSON.stringify(status));
      }}
    >
      <Card
        style={{
          width: "100%",
          height: "300px",
          overflow: "hidden",
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Card.Body className="h-100 card-home mt-2">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <div
            className="card-status d-flex justify-content-between
          "
          >
            <div>{postStatus?.likes} likes</div>
            <div>{postStatus?.comments} comments</div>
            <div>{postStatus?.shares} shares</div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}
