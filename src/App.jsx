import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const nameRef = useRef("");
  const priceRef = useRef(0);
  const desceRef = useRef("");
  const statusRef = useRef("Active");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function valiDate() {
    return true;
  }

  function handleClick(e) {
    e.preventDefault();
    const isValid = valiDate();
    if (isValid) {
      const phones = {
        name: nameRef.current.value,
        price: priceRef.current.value,
        description: desceRef.current.value,
        status: statusRef.current.value,
        category_id: 2
      };
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="my-4 text-center">Phones</h1>
        <form className="d-flex w-50 gap-2 flex-column mx-auto">
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            placeholder="Enter name..."
          />
          <input
            ref={priceRef}
            type="number"
            className="form-control"
            placeholder="Enter price..."
          />
          <textarea
            ref={desceRef}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter dascription"
          ></textarea>
          <select ref={statusRef} className="form-control">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button onClick={handleClick} className="btn btn-success">
            SAVE
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
