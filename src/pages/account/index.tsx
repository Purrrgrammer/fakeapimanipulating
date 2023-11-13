import { Post } from "@/interface/model";
import { mainService } from "@/service";
import { defaultUser } from "@/service/accountService";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const AccountPage = () => {
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [contentSelected, setContentSelected] = useState("Liked");
  const currentUserFromLocal = JSON.parse(localStorage.getItem("user")!);
  const user = currentUserFromLocal || defaultUser;
  const liked = JSON.parse(localStorage.getItem("likedPosts")!);
  // const shared = JSON.parse(localStorage.getItem("likedPosts")!);
  // const posts = currentUserFromLocal?.prevPosts || defaultUser;
  console.log([...new Set(liked)]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await mainService().callService();
        if (data.data) {
          const realData: Post[] = data.data;
          const postOfCurrentUser = realData
            .filter((data) => data.userId === user.userId)
            .map((el) =>
              Object.assign(el, {
                postStatus: {
                  likes: Math.floor(Math.random() * 1000),
                  comments: Math.floor(Math.random() * 1000),
                  shares: Math.floor(Math.random() * 1000),
                },
              })
            );
          console.log(postOfCurrentUser);
          setUserPosts(postOfCurrentUser);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const contentType = [
    { name: "Posts" },
    { name: "Liked" },
    { name: "Shared" },
  ];

  let content;
  switch (contentSelected) {
    case "Liked":
      content = (
        <div className={`p-4 `}>
          {liked ? (
            liked.map((el: any) => (
              <Card
                className="mx-auto"
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "20px",
                  margin: "10px 0px",
                }}
              >
                Post #{el.id}
                <a href={`/post/${el.id}`}>
                  {" "}
                  <h2>{el.title}</h2>
                </a>
                <p>{el.body}</p>
                <div className="d-flex justify-content-between"></div>
              </Card>
            ))
          ) : (
            <div>no content</div>
          )}
        </div>
      );
      break;
    case "Posts":
      content = (
        <div className={`p-4 `}>
          {userPosts ? (
            userPosts.map((el) => (
              <Card
                className="mx-auto"
                style={{
                  height: "100%",
                  width: "100%",
                  padding: "20px",
                  margin: "10px 0px",
                }}
              >
                Post #{el.id}
                <a href={`/post/${el.id}`}>
                  {" "}
                  <h2>{el.title}</h2>
                </a>
                <p>{el.body}</p>
                <div className="d-flex justify-content-between"></div>
              </Card>
            ))
          ) : (
            <div>no content</div>
          )}
        </div>
      );
      break;

    default:
      break;
  }

  return (
    <div className="px-4 d-flex justify-content-center mt-4 ">
      <div className="account-card me-4 d-flex flex-column align-items-center">
        <img className="account-profile-pic" src={user.image} />
        <div className="account-info d-flex flex-column align-items-center mt-2">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="">{user.name.toUpperCase()}</h1>
            <div className="d-flex">
              <div className="px-1 border-end border-dark">{user.userName}</div>
              <div className="px-1 ">{user.email}</div>
            </div>
          </div>
          <div className="border p-2 rounded">{user.friends} friends</div>
          <div className="align-self-start mt-4">bio: {user.bio}</div>
        </div>
      </div>
      <div className="account-content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-li">
              {contentType.map((el, index) => (
                <li
                  key={index}
                  className={`nav-item active ${
                    contentSelected === el.name ? "unun" : undefined
                  }`}
                >
                  <div
                    className="nav-link content-li"
                    onClick={() => {
                      setContentSelected(el.name);
                    }}
                  >
                    {el.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="acc-content">{content}</div>
      </div>
    </div>
  );
};

export default AccountPage;
