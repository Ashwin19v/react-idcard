import { useState } from "react";
import html2canvas from "html2canvas";
import "./Id.css";
export const IdCard = () => {
  const [user, SetUser] = useState({
    collegeName: "Vellore Institute Of Technology",
    collegeCampus: "Vellore campus",
    image: "5.png",
    name: "Ashwin",
    Regno: "22MIC0032",
    dayScholar: "DAYSCHOLAR",
  });

  function handle(e) {
    const { name, value } = e.target;
    SetUser({
      ...user,
      [name]: value,
    });
  }

  function download() {
    const container = document.getElementById("cont");
    html2canvas(container).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${user.name}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  }

  return (
    <>
      <div className="container" id="cont">
        <h2>{user.collegeName}</h2>
        <h3>{user.collegeCampus}</h3>
        <hr />
        <img src={user.image} alt="Student" />
        <h3 className="name">{user.name}</h3>
        <h3>{user.Regno}</h3>
        <h2
          className={
            user.dayScholar === "DAYSCHOLAR" ? "dayscholar" : "hosteller"
          }
        >
          {user.dayScholar}
        </h2>
      </div>
      <div className="details">
        <h1>Details</h1>
        <input
          onChange={handle}
          type="text"
          placeholder="Enter name of the college"
          name="collegeName"
        />
        <input
          onChange={handle}
          type="text"
          placeholder="Enter name of the college campus"
          name="collegeCampus"
        />
        <input
          onChange={handle}
          type="text"
          placeholder="Enter name of the img[1,3,4-jpeg 2,5-png]"
          name="image"
        />
        <input
          onChange={handle}
          type="text"
          placeholder="Enter name of the student"
          name="name"
        />
        <input
          onChange={handle}
          type="text"
          placeholder="Enter Regno of the student"
          name="Regno"
        />
        <input
          onChange={handle}
          type="text"
          placeholder="Dayscholar: true or false"
          name="dayScholar"
        />
        <button onClick={download}>Download</button>
      </div>
    </>
  );
};
