window.addEventListener("DOMContentLoaded", () => {
  const loadComponent = async (id, path) => {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(`Failed to fetch ${path}`);
      const data = await res.text();
      const target = document.getElementById(id);
      if (target) target.innerHTML = data;
    } catch (error) {
      console.error("Error loading component:", error.message);
    }
  };

  const isInsideHTMLFolder = window.location.pathname.includes("/HTML/");

  const headerPath = isInsideHTMLFolder
    ? "components/header.html"
    : "HTML/components/header.html";

  const footerPath = isInsideHTMLFolder
    ? "components/footer.html"
    : "HTML/components/footer.html";

  loadComponent("include-header", headerPath);
  loadComponent("include-footer", footerPath);
});
