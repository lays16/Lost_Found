import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
const AddContact = () => {
  const [item, setItem] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [link,setLink] = useState("");
  const navigate = useNavigate();

  const saveContact = async (e) => {
    e.preventDefault();
    alert("you have added the item");
    try {
      await axios.post("http://localhost:5000/items", {
        item,
        place,
        description,
        phonenumber,
        link,
      });
      navigate("/items/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="has-background-grey-lighter">
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <form onSubmit={saveContact}>
            <div className="field">
              <label className="label">Item</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Place</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="Place"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Phonenumber</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                  placeholder="Phonenumber"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Link</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Drive Link Of Image"
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-success">
                <Link to="/items/dashboard">
                Save </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
