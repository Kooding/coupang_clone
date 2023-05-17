const inputId = document.querySelector("#login_id");
const inputPassword = document.querySelector("#login_pw");
const pwViewBtn = document.querySelector(".pw_view_btn");

pwViewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const parent = pwViewBtn.parentElement;
  parent.classList.toggle("view");

  if (parent.className.match("view")) {
    const icon = e.target.querySelector("img");
    icon.src = "./assets/coupang_assets/icon_eyes_closed.png";
    inputPassword.type = "text";
  } else {
    const icon = e.target.querySelector("img");
    icon.src = "./assets/coupang_assets/icon_eyes.png";
    inputPassword.type = "password";
  }
});

inputId.addEventListener("change", (e) => {
  const parentNode = e.target.parentNode.parentNode;
  const idValue = e.target.value.trim();
  const small = parentNode.querySelector("small");
  const underline = parentNode.querySelector(".underline");
  if (idValue.length === 0) {
    small.classList.remove("hidden");
    small.classList.add("block");
    small.innerText = "아이디(이메일)를 입력해주세요.";

    underline.classList.add(`peer-empty/logininput:underline-error`);
  } else if (!isEmail(idValue)) {
    small.innerText = "아이디(이메일)는 이메일 형식으로 입력해주세요.";
    small.classList.remove("hidden");
    small.classList.add("block");
    underline.classList.add(`peer-empty/logininput:underline-error`);
  } else {
    small.classList.remove("block");
    small.classList.add("hidden");
    underline.classList.remove(`peer-empty/logininput:underline-error`);
  }
});

inputPassword.addEventListener("change", (e) => {
  const parentNode = e.target.parentNode.parentNode;
  const passwordValue = e.target.value.trim();
  const small = parentNode.querySelector("small");
  const underline = parentNode.querySelector(".underline");
  if (passwordValue.length === 0) {
    small.classList.remove("hidden");
    small.classList.add("block");
    underline.classList.add(`peer-empty/logininput:underline-error`);
  } else {
    small.classList.remove("block");
    small.classList.add("hidden");
    underline.classList.remove(`peer-empty/logininput:underline-error`);
  }
});
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
