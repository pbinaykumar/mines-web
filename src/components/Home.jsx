import "./Home.css";
import { DailyProduction } from "./container/DailyProduction";
import { Notification } from "./container/Notification";
import { RunningMines } from "./container/RunningMines";
import StorageCapacity from "./container/StorageCapacity";
import { Topcard } from "./container/TopCard/TopCard";

export const Home = () => {
  return (
    <>
      {/* <div className="home-topbar">topbar</div> */}

      <div className="home-body-maindiv">
        <div className="home-title">
          <h2>Industrial Transport Monitoring System</h2>
        </div>
        <div className="home-main-div">
          <Topcard />
        </div>

        <div className="production-details-div">
          <div className="production-left-segment">
            <RunningMines />
          </div>
          <div className="production-right-segment">
            <DailyProduction />
          </div>
        </div>

        <div className="storage-details-div">
          <div className="storage-left-segment">
            <StorageCapacity />
          </div>
          <div className="storage-right-segment">
            <Notification />
          </div>
        </div>
      </div>
    </>
  );
};
