import React, { useState } from "react";

const TimePicker = props => {
  const [hour, setHour] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [period, setPeriod] = useState(null);
  return (
    <div className="timePicker">
      <input
        type="number"
        placeholder="hh"
        onChange={event => setHour(Number.parseInt(event.target.value))}
        value={hour}
        min={1}
        max={12}
      />
      <input
        type="number"
        placeholder="mm"
        onChange={event => setMinutes(Number.parseInt(event.target.value))}
        value={minutes}
        min={0}
        max={59}
        step={1}
      />
      <select value={period} onChange={event => setPeriod(event.target.value)}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      <input
        id={props.id}
        name={props.id}
        type="hidden"
        value={`${hour}:${minutes} ${period}`}
      />
    </div>
  );
};

export default TimePicker;
