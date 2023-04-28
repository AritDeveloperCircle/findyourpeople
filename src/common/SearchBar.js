import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import FooterBar from "@/common/FooterBar";
import ReusableNavLink from "@/common/ReusableNavLink";
import Link from 'next/link';
import Data from "../mock-data.json"
import styles from "@/styles/SearchBar.module.css";
import {useState} from 'react';


function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        } 
    };
    return (
        <div>
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
                <div className={styles.dataResults}>
                {filteredData.slice(0, 14).map((community, index) => {
                        return (
                            <div className={styles.dataItem} key={community.id}>
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

export {SearchBar};