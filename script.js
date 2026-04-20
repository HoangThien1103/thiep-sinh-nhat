// 🎈 lưu interval để có thể dừng / chạy lại
let balloonInterval = setInterval(createBalloon, 500);

function openCard() {
  const btn = document.querySelector(".btn");
  const card = document.querySelector(".card");

  btn.innerText = "Đang mở... 🎁";
  btn.disabled = true;

  setTimeout(() => {
    // ❗ dừng tạo bóng bay
    clearInterval(balloonInterval);

    // ❗ xoá bóng bay NGAY lúc mở thiệp
    document.querySelectorAll(".balloon").forEach((b) => b.remove());

    // mở thiệp
    card.style.display = "none";
    document.getElementById("popup").classList.remove("hidden");

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });

    typeText(
      "Chúc Chan tuổi mới luôn vui vẻ, hạnh phúc, coá nhiều tiền xài, sức khoẻ dồi dào 🎉",
      document.getElementById("typingText"),
    );
  }, 1500); //chỉnh số này cho hợp mắt (1.5s là đẹp)
}

function closeCard() {
  document.getElementById("popup").classList.add("hidden");

  const btn = document.querySelector(".btn");
  const card = document.querySelector(".card");

  // reset lại nút
  btn.innerText = "Mở quà 🎁";
  btn.disabled = false;

  // hiện lại card
  card.style.display = "block";

  // ❗ chạy lại bóng bay
  balloonInterval = setInterval(createBalloon, 500);
}

/* ✨ typing effect */
function typeText(text, element, speed = 40) {
  let i = 0;
  element.innerHTML = "";

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

/* 🎈 tạo bóng bay */
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  balloon.style.left = Math.random() * 100 + "vw";

  // màu
  balloon.style.background = `hsl(${Math.random() * 360},70%,60%)`;

  // tốc độ random
  balloon.style.animationDuration = 5 + Math.random() * 3 + "s";

  document.body.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 8000);
}
