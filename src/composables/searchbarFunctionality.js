import { useState } from "react";

function useSearchBarFunctionality() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setErrors] = useState(null);

  const fetchData = () => {
    const collectionRef = firebase.firestore().collection("LISTINGS");

    collectionRef
      .where("community_name", "==", query)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          throw new Error("This community does not exist");
        }
        const data = snapshot.docs.map((doc) => doc.data());
        setResults(data);
      })
      .catch((error) => {
        setErrors(error.message);
      });
  };

  const handleSearch = () => {
    fetchData();
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return {
    query,
    handleInputChange,
    handleSearch,
    error,
  };
}

export { useSearchBarFunctionality };
