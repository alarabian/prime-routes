import React from 'react'
const roomSizes = [
  { id: 1, size: "30-40 sqm" },
  { id: 2, size: "40-55 sqm" },
  { id: 3, size: "55-80 sqm" },
  { id: 4, size: "80+ sqm" }
];
const RoomSize = () => {
  return (
    <>
      <div className="facility mt-4">
        <h4>Room Size</h4>
        {roomSizes.map((item) => {
          return (
            <div className="form-check" key={item.id}>
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id={item.size}
              />
              <label className="form-check-label" htmlFor={item.size}>
                {item.size}
              </label>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default RoomSize