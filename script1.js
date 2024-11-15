const handleModal = () => {
  const modal = document.getElementById("modalContainer");
  modal.classList.toggle("active");
};

const handleBgColor = () => {
  const colors = ["red", "blue", "green", "black", "white"];
  const input = document.getElementById("input");
  const inputValue = document.getElementById("input").value.toLowerCase();

  if (colors.includes(inputValue)) {
    document.body.style.backgroundColor = `${inputValue}`;
    input.value = "";
  } else {
    alert("enter color from: blue, green, black, white");
  }
};

const handleNumberAvarge = () => {
  const result = document.getElementById("avarageResult");
  const input = document.getElementById("number_input");
  const inputValue = document
    .getElementById("number_input")
    .value.split(":")
    .map(Number);

  if (!input.value.trim() || inputValue.some(isNaN)) {
    alert("Enter valid numbers separated by ':'");
    return;
  }

  const average =
    inputValue.reduce((acc, number) => acc + number, 0) / inputValue.length;

  result.textContent = `avarage of those numbers is ${average}`;
};
