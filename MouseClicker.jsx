export function MouseClicker() {
  function handleButtonClick(event) {
    if (event.target.tagName === "IMG") {
      console.log(
        event.target.src

        //   // myButton, the value of the `name` attribute
        //   event.timestamp,
        //   // The number of ms expired since loading the page
        //   event.button
        //   // The button used to click
      );
    }
  }
  return (
    <button name="myButton" onClick={handleButtonClick}>
      <img
        width={24}
        height={24}
        src="https://www.indiscreto.org/wp-content/uploads/2021/05/Berserk-gatsu-eclipse-cap-355.jpg"
      />
      Click me!
    </button>
  );
}

// non ho capito la cosa della riga bianca