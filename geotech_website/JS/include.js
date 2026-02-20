window.addEventListener("DOMContentLoaded", () => {
  const loadComponent = async (id, path) => {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(`Failed to fetch ${path}`);
      const data = await res.text();
      const target = document.getElementById(id);
      if (target) {
        target.innerHTML = data;
      } else {
        console.error(`Element with ID '${id}' not found in HTML.`);
      }
    } catch (error) {
      console.error("Error loading component:", error.message);
    }
  };

  // ✅ FIXED PATHS
  // loadComponent("include-header", "components/header.html");
  loadComponent("include-footer", "geotech_website/HTML/components/footer.html");

});

