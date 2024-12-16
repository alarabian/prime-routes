import React from "react";

const CheckAvailability = () => {
  return (
    <>
      <form className="checkAvailability">
        <h4>Check Availability</h4>
        <div className="form-group">
          <label htmlFor="check-in">Check In</label>
          <input type="date" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="check-out">Check Out</label>
          <input type="date" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="room">Rooms</label>
          <select className="form-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="guest">Guest</label>
          <select className="form-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default CheckAvailability;
