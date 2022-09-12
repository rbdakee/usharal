const textarea = document.querySelector("textarea");
const count = document.querySelector(".counter .currentValue");

function counter() {
  const text = textarea.value;
  const textlength = textarea.value.length;
  count.innerText = `${textlength}`;
}