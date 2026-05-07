function showMenu(menuId) {
  const menus = document.querySelectorAll(".menu");

  menus.forEach((menu) => {
    menu.classList.remove("active");
  });

  document.getElementById(menuId).classList.add("active");
}

const form = document.getElementById("topupForm");
const hasil = document.getElementById("hasil");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userid = document.getElementById("userid").value;
  const nickname = document.getElementById("nickname").value;
  const diamond = document.getElementById("diamondSelect").value;

  output.innerHTML = `
    <b>Pesanan Berhasil!</b><br><br>
    User ID : ${userid}<br>
    Nickname : ${nickname}<br>
    Paket : ${diamond}<br><br>
    Silakan lakukan pembayaran.
  `;

  hasil.style.display = "block";
});
