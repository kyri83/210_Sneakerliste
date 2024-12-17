import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function Sneakerlist() {
  const [sneakers, setSneakers] = useState([]);
  const [newSneaker, setNewSneaker] = useState({
    marke: "",
    model: "",
    releaseYear: "",
    price: "",
  });
  const [searchQuery, setSearchQuery] = useState(""); // State for the search bar

  useEffect(() => {
    getSneakers();
  }, []);

  async function getSneakers() {
    const { data, error } = await supabase
      .from("sneaker")
      .select("id, marke, model, releaseYear, price");

    if (error) {
      console.error("Error fetching sneakers:", error);
    } else {
      setSneakers(data);
    }
  }

  async function addSneaker(e) {
    e.preventDefault();
    const { error } = await supabase.from("sneaker").insert([newSneaker]);

    if (error) {
      console.error("Error adding sneaker:", error);
    } else {
      alert("Sneaker added successfully!");
      setNewSneaker({ marke: "", model: "", releaseYear: "", price: "" });
      getSneakers();
    }
  }

  async function deleteSneaker(sneakerId) {
    const { error } = await supabase.from("sneaker").delete().eq("id", sneakerId);

    if (error) {
      console.error("Error deleting sneaker:", error.message);
    } else {
      alert("Sneaker deleted successfully!");
      getSneakers();
    }
  }

  // Filter sneakers based on search query
  const filteredSneakers = sneakers.filter(
    (sneaker) =>
      sneaker.marke.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sneaker.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sneaker.releaseYear.toString().includes(searchQuery)
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Sneaker List</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand (Marke)</th>
            <th>Model</th>
            <th>Release Year</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredSneakers.map((sneaker) => (
            <tr key={sneaker.id}>
              <td>{sneaker.id}</td>
              <td>{sneaker.marke}</td>
              <td>{sneaker.model}</td>
              <td>{sneaker.releaseYear}</td>
              <td>{sneaker.price}</td>
              <td>
                <button
                  onClick={() => deleteSneaker(sneaker.id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.3rem 0.5rem",
                    borderRadius: "5px",
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Search Bar Section */}
      <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by brand, model, or year..."
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Add Sneaker Form */}
      <div className="add-sneaker-section">
        <h2>Add a New Sneaker</h2>
        <form onSubmit={addSneaker} className="add-sneaker-form">
          <div className="form-group">
            <label>Brand (Marke):</label>
            <input
              type="text"
              value={newSneaker.marke}
              onChange={(e) =>
                setNewSneaker({ ...newSneaker, marke: e.target.value })
              }
              placeholder="Enter brand (e.g., Nike)"
              required
            />
          </div>
          <div className="form-group">
            <label>Model:</label>
            <input
              type="text"
              value={newSneaker.model}
              onChange={(e) =>
                setNewSneaker({ ...newSneaker, model: e.target.value })
              }
              placeholder="Enter model (e.g., Air Jordan 1)"
              required
            />
          </div>
          <div className="form-group">
            <label>Release Year:</label>
            <input
              type="date"
              value={newSneaker.releaseYear}
              onChange={(e) =>
                setNewSneaker({ ...newSneaker, releaseYear: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="text"
              value={newSneaker.price}
              onChange={(e) =>
                setNewSneaker({ ...newSneaker, price: e.target.value })
              }
              placeholder="Enter price (e.g., $200)"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Sneaker
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sneakerlist;
