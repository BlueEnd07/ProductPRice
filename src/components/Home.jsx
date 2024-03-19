import { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

function Home() {
  const [searchdata, setSearchdata] = useState(null);
  //stoeing data from search

  const handleDataFromSearchBar = (data) => {
    setSearchdata(data);
  };

  return (
    <div>
      <SearchBar onData={handleDataFromSearchBar} />
      <div>
        <div>
         {searchdata && <Card product={searchdata.amazon} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
