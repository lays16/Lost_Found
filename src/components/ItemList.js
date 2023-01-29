import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [keyword,setKeyword]=useState("");
  const[query,setQuery]=useState("");
 
  useEffect(() => {
    getItems();
  }, [keyword]);

  const getItems = async () => {
    const response = await axios.get(`http://localhost:5000/items?search_query=${keyword}`);
    setItems(response.data);
  };
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      getItems();
    } catch (error) {
      console.log(error);
    }
  };
  const searchData = (e) => {
    e.preventDefault();
    setKeyword(query);
  };
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
      <form onSubmit={searchData}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              type="text"
              className="input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find something here..."
            />
          </div>
          
          <div className="control">
            <button type="submit" className="button is-info">
              Search
            </button>
          </div>
        </div>
        
      </form>
      
      

        {items.map((item, index) => (
          <div class="card block has-background-grey-lighter  border-radius: 25">
            <div class="card-content">
              <div class="content">
                <table>
                <tr></tr><td></td>
                  <tr>
                    <td class="has-text-weight-bold">Item Name</td>
                    <td>{item.item}</td>
                    <td class="has-text-weight-bold">Item Place</td>
                    <td>{item.place}           
                    
        
      
                    </td>
                  </tr>
                  <tr>
                  <td class="has-text-weight-bold">Phonenumber</td>
                    <td>{item.phonenumber}</td>
                    <td class="has-text-weight-bold">Description</td>
                    <td>{item.description}</td>
                  </tr>
                  <tr>
                  <td class="has-text-weight-bold">Image Link</td>
                    <td><a href={`//${item.link}`}  target="_blank"> {item.item}</a></td>
                    
                  </tr>
                </table>
              </div>
              
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="button is-small is-danger"
                  >
                    Item Found
                  </button>
                  
            </div>
          </div>
        ))}

        <br></br>
      </div>
    </div>
  );
};

export default ItemList;
