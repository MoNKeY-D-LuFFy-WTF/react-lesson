import React from "react";

function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select onChange={(e) => onChange(e.target.value)} value={value} name="">
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((op) => (
        <option value={op.value} key={op.value}>
          {op.name}
        </option>
      ))}
    </select>
  );
}

export default MySelect;
