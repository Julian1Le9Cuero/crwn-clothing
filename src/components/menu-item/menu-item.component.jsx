import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      {/* We dont want the image to be bigger when it scales so we make this div,
    we just want it bigger when one hovers over it */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }} /* If we wrap the rest of the elemens they will also scale and we DONT want that */
      />

      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
