import React from "react";
import "../Home.css";

const StorageCapacity = ({ usedCapacity, maxCapacity }) => {
  return (
    <div className="storage-main-div">
      <div className="storage-container-1 main-div main-div-bgcolor">
        <h2>Veichle Parking Status</h2>
        <div className="parkin-status-main-div">
          <div className="parking-status-12hr">
            <p>Standing more than 12hr</p>
            <h3>10</h3>
          </div>
          <div className="parking-status-24hr">
            <p>Standing more than 24hr</p>
            <h3>10</h3>
          </div>
        </div>
      </div>
      <div className="storage-container-2 main-div main-div-bgcolor">
        <h2>Dumping Yard Capacity</h2>
        <div class="dumping-capacity-container">
          <div class="dumping-capacity-info">
            <p class="dumping-capacity-values">
              <span class="dumping-capacity-filled" data-filled="60">600 T </span>/<span class="dumping-capacity-max" data-max="100"> 1000 T </span>
            </p>
          </div>
          <div class="dumping-capacity-progress">
            <div class="dumping-capacity-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageCapacity;
