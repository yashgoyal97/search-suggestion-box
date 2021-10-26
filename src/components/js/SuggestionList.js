import React from 'react';
import '../css/SuggestionList.css';

const SuggestionList = (props) => {
  if (props.type === 'TOP_SEARCHES') {
    const suggestions = props.suggestions;
    const listItems = suggestions.map((element) => (
      <li className="top-searches-list" key={element.suggestion.toString()}>
        {element.suggestion}
      </li>
    ));
    return <ul>{listItems}</ul>;
  } else {
    const collections = props.collections;
    const listItems = collections.map((element) => (
      <li className="top-collections-list" key={element.name.toString()}>
        {element.name}
      </li>
    ));
    return <ul>{listItems}</ul>;
  }
};

export default SuggestionList;
