// TableComponent.js
import React from "react";
import "./detail-table-styles.css";

const TableComponent = () => {
  const data = [
    {
      slno: 1,
      truckNo: "ABC123",
      driverName: "John Doe",
      mineNo: "M123",
      outTime: "5:00 PM",
      parking: "9:00 AM",
      weightMachine: "7:30 AM",
      dumping: { status: "Completed", time: "9:00 AM" },
    },
  ];

  const getRowColor = (parkingInTime) => {
    const inTime = new Date(parkingInTime).getTime();
    const currentTime = new Date().getTime();
    const twelveHours = 12 * 60 * 60 * 1000;
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (currentTime - inTime > twelveHours && currentTime - inTime <= twentyFourHours) {
      return "detail-table-yellow-row";
    } else if (currentTime - inTime > twentyFourHours) {
      return "detail-table-red-row";
    }
    return "";
  };

  return (
    <div className="detail-table-container">
      <table className="detail-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Truck No</th>
            <th>Driver Name</th>
            <th>Mine No</th>
            <th>Mines Out Time</th>
            <th>Parking In Time</th>
            <th>Weight Machine In Time</th>
            <th>Dumping Status</th>
          </tr>
         
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={getRowColor(row.parking)}>
              <td>{row.slno}</td>
              <td>{row.truckNo}</td>
              <td>{row.driverName}</td>
              <td>{row.mineNo}</td>
              <td>{row.outTime}</td>
              <td>{row.parking}</td>             
              <td>{row.weightMachine}</td>
              <td>{`${row.dumping.status} - ${row.dumping.time}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
