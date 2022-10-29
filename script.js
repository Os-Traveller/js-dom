const fromSubmit = async (e) => {
  e.preventDefault();
  const emailFeild = document.querySelector("#email");
  const passFeild = document.querySelector("#pass");
  const nameFeild = document.querySelector("#name");
  const email = emailFeild.value;
  const pass = passFeild.value;
  const name = nameFeild.value;

  const userInfo = {
    name,
    email,
    pass,
  };

  const url = `http://localhost:5000/create-user`;
  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userInfo),
  };
  const res = await fetch(url, requestOptions)
    .then((res) => res.json())
    .then((res) => console.log(res));
};

const userNameFeild = document.querySelector("#userName");
const userEmailFeild = document.querySelector("#userEmail");

async function getUserInfo() {
  const url = "http://localhost:5000/get-user/faisal@gmail.com";
  const userInfo = await fetch(url).then((res) => res.json());
  userEmailFeild.textContent = "Email : " + userInfo.email;
  userNameFeild.textContent = "Name : " + userInfo.name;
}

getUserInfo();
