import React from "react";

function CarCard(props) {
  return (
    <div class="card" style={{ width: "100%", margin: "2rem" }}>
      <img
        src="https://fastly-production.24c.in/hello-ar/dev/uploads/3feb3bb1-5347-4dd7-a0c6-358948bd2fc7/45193a12-0b4d-436c-bcaa-a7729762ac28/43.jpg?w=690&auto=format"
        class="card-img-top"
        alt="..."
        width={"100%"}
        height={"100%"}
      />
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
        {/* <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name:{props.name}</li>
        <li class="list-group-item">Brand:{props.brandName}</li>
        <li class="list-group-item">Price: ₹ {props.price}</li>
        <li class="list-group-item">Fuel:{props.fuel}</li>
        <li class="list-group-item">Body:{props.bodyType}</li>
        <li class="list-group-item">Features:{props.features}</li>
      </ul>
      {/* <div class="card-body">
          <a href="./" class="card-link">
            Card link
          </a>
          <a href="./" class="card-link">
            Another link
          </a>
        </div> */}
    </div>
  );
}

export default CarCard;
