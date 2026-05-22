document.addEventListener("DOMContentLoaded", () => {

  console.log("home.js loaded");

  if (!window.chapters) {
    console.error("chapters.js not loaded or chapters undefined");
    return;
  }

  const grid = document.getElementById("chapterGrid");
  const latestButton = document.getElementById("latestChapter");

  if (!grid) {
    console.error("chapterGrid not found in HTML");
    return;
  }

  if (!latestButton) {
    console.error("latestChapter not found in HTML");
    return;
  }

  // build chapter grid
  grid.innerHTML = "";

  chapters.forEach((chapter, i) => {
  const a = document.createElement("a");
  a.href = `chapter.html?ch=${i}`;
  a.className = "card";

  a.innerHTML = `
    <img src="images/thumbnails/chapter${i + 1}.jpg">
    <div>Chapter ${i + 1}</div>
  `;

  grid.appendChild(a);
});

  // latest chapter
  latestButton.href = `chapter.html?ch=${chapters.length - 1}`;

});