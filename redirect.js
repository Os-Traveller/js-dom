const emailFeild = document.querySelector("#email");
const passFeild = document.querySelector("#pass");
const nameFeild = document.querySelector("#name");

const redirect = (e) => {
  e.preventDefault();
  const userName = nameFeild.value;
  if (userName === "Faisal") {
    location.href = "./test.html";
  }
};
