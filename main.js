console.log("hello world");

const card = document.querySelector(".card")

const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box4 = document.querySelector(".box4")
const box5 = document.querySelector(".box5")

const h1 = document.querySelector(".heading1")
const h2 = document.querySelector(".heading2")
const h3 = document.querySelector(".heading3")
const h4 = document.querySelector(".heading4")
const h5 = document.querySelector(".heading5")


box1.addEventListener("click", () => {
  box1.style.width = "60%";
  box2.style.width = "10%";
  box3.style.width = "10%";
  box4.style.width = "10%";
  box5.style.width = "10%";
  h1.style.opacity = '1'
  h2.style.opacity = '0'
  h3.style.opacity = '0'
  h4.style.opacity = '0'
  h5.style.opacity = '0'
})

box2.addEventListener("click", () => {
  box2.style.width = "60%";
  box1.style.width = "10%";
  box3.style.width = "10%";
  box4.style.width = "10%";
  box5.style.width = "10%";
  h1.style.opacity = '0'
  h3.style.opacity = '0'
  h4.style.opacity = '0'
  h5.style.opacity = '0'
  h2.style.opacity = '1'
})

box3.addEventListener("click", () => {
  box3.style.width = "60%";
  box2.style.width = "10%";
  box1.style.width = "10%";
  box4.style.width = "10%";
  box5.style.width = "10%";
  h2.style.opacity = '0'
  h1.style.opacity = '0'
  h4.style.opacity = '0'
  h5.style.opacity = '0'
  h3.style.opacity = '1'
})

box4.addEventListener("click", () => {
  box4.style.width = "60%";
  box2.style.width = "10%";
  box3.style.width = "10%";
  box1.style.width = "10%";
  box5.style.width = "10%";
  h2.style.opacity = '0'
  h3.style.opacity = '0'
  h1.style.opacity = '0'
  h5.style.opacity = '0'
  h4.style.opacity = '1'
})

box5.addEventListener("click", () => {
  box5.style.width = "60%";
  box2.style.width = "10%";
  box3.style.width = "10%";
  box4.style.width = "10%";
  box1.style.width = "10%";
  h2.style.opacity = '0'
  h3.style.opacity = '0'
  h4.style.opacity = '0'
  h1.style.opacity = '0'
  h5.style.opacity = '1'
})