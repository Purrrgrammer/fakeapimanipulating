import { defaultUser } from "@/service/accountService";
const currentUserFromLocal = JSON.parse(localStorage.getItem("user")!);
const user = currentUserFromLocal || defaultUser;
const AccountCard = () => {
  return (
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
  );
};
export default AccountCard;
