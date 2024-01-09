import "../Home.css";

export const RunningMines = () => {
  return (
    <>
      <div className="runningmines-main-div main-div main-div-bgcolor">
        <div className="runningmines-container">
          {/* Header */}
          <div className="runningmines-header">
            <div className="runningmines-title">Running Mines</div>
            {/* Search Bar */}
            <div className="runningmines-search-container">
              <input
                type="text"
                placeholder="Search..."
                className="runningmines-search-input"
              />
              <button className="runningmines-search-button">
                {/* You can replace the search icon with your preferred icon */}
                Search
              </button>
            </div>
          </div>

          {/* Table */}
          <table className="runningmines-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Mine No</th>
                <th>Mine Capacity</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data, you can replace it with your actual data */}
              <tr>
                <td>1</td>
                <td>A123</td>
                <td>
                  <div className="runningmines-bar-container">
                    <div
                      className="runningmines-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>B456</td>
                <td>
                  <div className="runningmines-bar-container">
                    <div
                      className="runningmines-bar"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>C476</td>
                <td>
                  <div className="runningmines-bar-container">
                    <div
                      className="runningmines-bar"
                      style={{ width: "57%" }}
                    ></div>
                  </div>
                </td>
              </tr>{" "}
              <tr>
                <td>4</td>
                <td>D452</td>
                <td>
                  <div className="runningmines-bar-container">
                    <div
                      className="runningmines-bar"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </td>
              </tr>{" "}
              <tr>
                <td>5</td>
                <td>E456</td>
                <td>
                  <div className="runningmines-bar-container">
                    <div
                      className="runningmines-bar"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </td>
              </tr>{" "}
              <tr>
                <td>6</td>
                <td>B456</td>
                <td>
                  <div className="runningmines-bar-container">
                    <div
                      className="runningmines-bar"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
