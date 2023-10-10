import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";



const App = () => {
    const businesses = [
        {
            id: 1,
            imageSrc: "URL1",
            name: "Business 1",
            address: "Address 1",
            city: "City 1",
            state: "State 1",
            zipCode: "Zip 1",
            category: "Category 1",
            rating: 4.5,
            reviewCount: 90,
        },
        {
            id: 2,
            imageSrc: "URL2",
            name: "Business 2",
            address: "Address 2",
            city: "City 2",
            state: "State 2",
            zipCode: "Zip 2",
            category: "Category 2",
            rating: 3.7,
            reviewCount: 45,
        },
        // Add more businesses as needed
    ];
    return (
        <div className={styles.App}>
            <h1>ravenous</h1>
            <SearchBar />

            <p>Hello World!</p>
        </div>
      );
    };

export default App;
