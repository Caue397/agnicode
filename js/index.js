document.getElementById("link-email").addEventListener("click", (ev) => {
  ev.preventDefault();
  const popup = document.getElementById("link-copied");
  const email = "agnicode.dev@gmail.com";
  navigator.clipboard.writeText(email);
  popup.classList.remove("hidden");
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.add("hidden");
    popup.classList.remove("show");
  }, 2000);
});
