import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import FooterBar from "../common/FooterBar";
import ReusableNavLink from "../common/ReusableNavLink";
import Link from 'next/link';
import Data from "../mock-data.json"
import styles from "../styles/SearchBar.module.css";
import {useState} from 'react';


function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter)};

    return (
        <div className="parent">
            <form>
                <div>
                    <div className="search-inputs">
                    <input id="search-input-bar" type="text" placeholder= {placeholder} name='search' required onChange={handleFilter} />
                    <button type='submit'>
                    <Image
                        src="/search-glass.svg"
                        alt="Search Image"
                        className={styles.searchImage}
                        width={20}
                        height={20}
                    />
                    </button>
                    </div>
                </div>
            </form>
            {filteredData.length != 0 && (
                <div className="data-results">
                    {filteredData.slice(0, 14).map((community, index) => {
                        return (
                            <div className="data-item" key={community.id}>
                                <p>{community.name}</p>
                            
                            </div>
                        );
                    })
                }
                </div>
            )
                
            }
            
        </div>
    )
}

export default SearchBar;