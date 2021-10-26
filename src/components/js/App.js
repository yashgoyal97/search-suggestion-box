import React, { useEffect, useState } from 'react';
// import { render } from 'react-dom';
import ProductCard from './ProductCard';
import SuggestionList from './SuggestionList';
import '../css/App.css';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState();
  const [suggestions, setSuggestions] = useState();
  const [collection, setCollection] = useState();

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://searchv7.expertrec.com/v6/search/eb17a931b1ab4950928cabbf42527715/?user=&q=${searchText}&size=6&suggestions=1&maxSuggestions=6`
      )
        .then((response) => response.json())
        .then((data) => {
          setSuggestions(data.suggestions);
          setCollection(data.sfacets.collectionname);
          setResults(data.results);
          document.getElementById('suggestions').style.display = 'flex';
        });
    } else {
      document.getElementById('suggestions').style.display = 'none';
    }
  }, [searchText]);

  const handleSearchInput = () => {
    setSearchText(document.getElementById('searchBoxInput').value);
  };

  return (
    <div className="search-box-container">
      <div id="searchBox">
        <input
          id="searchBoxInput"
          placeholder="Find your furniture..."
          value={searchText}
          onInput={handleSearchInput}
        />
        <img src="https://www.royaloakindia.com/royaloak-react/public/react-images/iconSearch.webp"></img>
      </div>

      <div id="suggestions">
        <div id="topContent">
          <div id="topSearches">
            <p className="suggestion-header-text">TOP SEARCHES</p>
            {suggestions && (
              <SuggestionList
                suggestions={suggestions}
                type="TOP_SEARCHES"
              ></SuggestionList>
            )}
          </div>
          <div id="topCollections">
            <p className="suggestion-header-text">TOP COLLECTIONS</p>
            {collection && (
              <SuggestionList
                suggestions={suggestions}
                type="TOP_SEARCHES"
              ></SuggestionList>
            )}
          </div>
        </div>

        <hr></hr>

        <div id="popularProducts">
          {searchText && (
            <p className="suggestion-header-text">
              POPULAR PRODUCTS IN '{searchText}'
            </p>
          )}
          {!searchText && (
            <p className="suggestion-header-text">POPULAR PRODUCTS</p>
          )}
          {results && (
            <div id="productCards">
              <ProductCard products={results}></ProductCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
