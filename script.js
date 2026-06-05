const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Save checkbox states locally in the browser.
// Each page uses its file name so checklist states do not collide across pages.
const pageKey = window.location.pathname.split("/").pop() || "index.html";
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((box, index) => {
  const key = `svalbard-doc-${pageKey}-checkbox-${index}`;
  box.checked = localStorage.getItem(key) === "true";

  box.addEventListener("change", () => {
    localStorage.setItem(key, box.checked);
  });
});
