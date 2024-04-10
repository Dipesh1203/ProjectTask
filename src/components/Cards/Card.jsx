import React, { useState } from "react";
import "./Card.css";

const Card = (prop) => {
  let data = prop.value && prop.value.path;
  let title = prop.value && prop.value.title;
  let text = prop.value && prop.value.text;
  console.log("PROP VALUE", prop.value);

  const [showText, setShowText] = useState(false);
  return (
    <div>
      <div
        class="card"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        <img src={data} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>

          {showText ? (
            <div>
              {" "}
              <p class="card-text">{text}</p>{" "}
            </div>
          ) : (
            <></>
          )}
          <div>
            <input
              class="form-check-input m-auto p-2 "
              type="checkbox"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
