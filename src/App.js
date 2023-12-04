import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UpdateForm from "./components/UpdateForm";

const App = () => {
  const [links, setLinks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    console.log("Fetching links...");
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/MSmithDev/Beam-Apps-Catalog/main/catalog.json"
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched links successfully:", data);
        setLinks(data);
      } else {
        console.error(`Failed to fetch links. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  const updateLinks = async (newLink) => {
    try {
      const response = await fetch("https://beamapps.azurewebsites.net/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLink),
      });

      if (response.ok) {
        console.log("Links updated successfully. Fetching new links...");
        fetchLinks();
      } else {
        console.error(`Failed to update links. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating links:", error);
    }
  };

  console.log("Rendering App component with links:", links);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              links={links}
              selectedCategory={selectedCategory}
              handleCategoryChange={(category) => {
                console.log("Category changed:", category);
                setSelectedCategory(category);
              }}
            />
          }
        />
        <Route
          path="/UpdateForm"
          element={
            <UpdateForm
              onSubmit={(newLink) => {
                console.log("Updating links with:", newLink);
                updateLinks(newLink);
              }}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
