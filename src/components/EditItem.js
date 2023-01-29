import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditItem = () => {
    const [item, setItem] = useState("");
    const [place, setPlace] = useState("");
    const [description, setDescription] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [link,setLink] = useState("");
    const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getItemsById();
  }, []);

  const updateItem = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/items/${id}`, {
        item,
        place,
        description,
        phonenumber,
      });
      navigate("/items/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const getItemsById = async () => {
    const response = await axios.get(`http://localhost:5000/items/${id}`);
    setItem(response.data.item);
    setPlace(response.data.place);
    setPhonenumber(response.data.phonenumber);
    setDescription(response.data.description);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateItem}>
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
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
