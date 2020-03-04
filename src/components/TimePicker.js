import React, { useState } from "react";

const TimePicker = props => {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [period, setPeriod] = useState("");
  return (
    <div className="timePicker">
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder="hh"
        onChange={event => setHour(event.target.value)}
        value={hour}
      />
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder="mm"
        onChange={event => setMinutes(event.target.value)}
        onBlur={event => {
          if (Number.parseInt(event.target.value) < 10) {
            setMinutes(`0${event.target.value}`);
          }
        }}
        value={minutes}
      />
      <select
        value={period}
        onChange={event => setPeriod(event.target.value)}
        required
      >
        <option value="">--</option>
        <option value="am">am</option>
        <option value="pm">pm</option>
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
