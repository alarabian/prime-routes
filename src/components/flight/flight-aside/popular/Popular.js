import React from 'react';
const popular = [
  { id: 1, name: "Breakfast Included" },
  { id: 2, name: "Budget" },
  { id: 3, name: "4 Star Hotels" },
  { id: 4, name: "5 Star Hotels" },
];

const Popular = () => {
  return (
    <>
      <div className="facility">
        <h5>Popular</h5>
        {popular.map((item) => {
          return (
            <div className="form-check" key={item.id}>
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id={item.name}
              />
              <label className="form-check-label" htmlFor={item.name}>
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Popular