import { useState } from "react";

const Notification = () => {
  const noti = [
    {
      who: "billybong",
      activity: "like",
      what: "your post",
      time: "11/12/23",
      read: true,
    },
    {
      who: "billybong",
      activity: "like",
      what: "your post",
      time: "11/12/23",
      read: false,
    },
    {
      who: "billybong",
      activity: "like",
      what: "your post",
      time: "11/12/23",
      read: false,
    },
  ];

  const [notikey, setNotikey] = useState(noti);
  return (
    <div className="dropdown me-4">
      <div
        // type="button"
        className="btn dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bell"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
        </svg>{" "}
      </div>
      <ul className="dropdown-menu">
        {notikey.map((el, index) => (
          <a
            key={index}
            className="dropdown-item"
            href="#"
            onClick={() => {
              noti[index].read = false;
              setNotikey([...noti]);
            }}
          >
            <div className="d-flex flex-col p-3">
              <div className="">
                {el.who} {el.activity} {el.what}
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div
                onClick={() => {
                  el.read === el.read!;
                }}
              >
                {el.read ? <span className="dot mx-2"></span> : " "}
              </div>
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
