const select_btn = document.querySelector(".btn-select");
const list = document.querySelector(".option-select");

select_btn.addEventListener("click", function () {
  list.classList.toggle("on");
  select_btn.classList.toggle("on");
  //select_btn.classList.toggle("on");
});
list.addEventListener("click", (event) => {
  //event는 매개변수, 변수명은 맘대로
  if (event.target.nodeName === "BUTTON") {
    // 클릭한 지점의 대상 element , nodeName 대문자로!
    select_btn.innerText = event.target.innerText;
    // innerText는 요소의 렌더링(사람이 읽을 수 있는)된 텍스트 콘텐츠만 나타낸다.
    list.classList.remove("on");
    select_btn.classList.remove("on");
  }
});
