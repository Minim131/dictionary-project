import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonymsList) {
    return (
      <div className="Synonyms">
        {props.synonymsList.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
