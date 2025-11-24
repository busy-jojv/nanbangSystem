// EmailJS 초기화 (Public Key 입력)
emailjs.init("jHBlYcoZxwqxNgs8Y");

// 폼 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quoteForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 기본 폼 동작 막기

    emailjs
      .sendForm("dbscordl0505", "template_51lb0h9", this)
      .then(
        function () {
          alert("문의가 성공적으로 전송되었습니다!");
          form.reset();
        },
        function (error) {
          alert("전송에 실패했습니다. 다시 시도해주세요.");
          console.error("FAILED", error);
        }
      );
  });
});
