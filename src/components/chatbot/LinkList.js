import React from "react";
import "../../componentCSS/Option.css"
import { Link } from "react-router-dom"


const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <div key={link.id} className="link-list-item">
      <Link
        to={link.url}
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {link.text}
      </Link>
    </div>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;