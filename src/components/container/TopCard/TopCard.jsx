import { Milestone, Truck, WeightIcon, Mountain } from "lucide-react";
import "./TopCard.css";

export const Topcard = () => {
  return (
    <>
      <div class="container">
        <div class="gradient-cards">
          <div class="card">
            <div class="container-card bg-green-box">
              <div className="container-header">
                <Milestone color="#3da077" height={50} width={50} />
                <p class="card-title">Mines</p>
              </div>
              <div className="container-body">
                <p class="card-description">No of Veichle In</p>
                <h1>10</h1>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="container-card bg-white-box">
              <div className="container-header">
                <Truck color="#ff0202" height={50} width={50} />
                <p class="card-title">Parking</p>
              </div>
              <div className="container-body">
                <p class="card-description">No of Veichle In</p>
                <h1>10</h1>
              </div>{" "}
            </div>
          </div>

          <div class="card">
            <div class="container-card bg-yellow-box">
              <div className="container-header">
                <WeightIcon color="#afa220" height={50} width={50} />
                <p class="card-title">Weight</p>
              </div>
              <div className="container-body">
                <p class="card-description">No of Veichle In</p>
                <h1>10</h1>
              </div>{" "}
            </div>
          </div>

          <div class="card">
            <div class="container-card bg-blue-box">
              <div className="container-header">
                <Mountain color="#5f6fad" height={50} width={50} />
                <p class="card-title">Dumping</p>
              </div>
              <div className="container-body">
                <p class="card-description">No of Veichle In</p>
                <h1>10</h1>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
