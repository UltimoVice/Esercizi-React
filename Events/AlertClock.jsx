import React from "react";

export function AlertClockButton(props) {
  return <button onClick={props.onClick}>Click me!</button>;
}

export function MyAlertClock() {
  function handleShowTime() {
    const now = new Date();

    alert(`The current time is ${now.toLocaleTimeString()}`);
  }

  return (
    <div>
      <p>Click the button below to show the current time</p>
      {/* <button onClick={handleShowTime}>Click me!</button> */}
      <AlertClockButton onClick={handleShowTime} />
    </div>
  );
}
