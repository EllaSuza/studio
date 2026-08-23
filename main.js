const contentElements = document.querySelectorAll('.cont');

// Function to create a grid item with the given content element
function createGridItem(contentElement) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('gridItem');

  const a = document.createElement('a');
  a.href = contentElement.querySelector('a').href;

  const gridImg = document.createElement('div');
  gridImg.classList.add('gridImg');
  const img = document.createElement('img');
  img.src = contentElement.querySelector('img').src;

  gridImg.appendChild(img);

  const gridDesc = document.createElement('div');
  gridDesc.classList.add('gridDesc');
  gridDesc.textContent = contentElement.querySelector('h2').textContent;

  a.appendChild(gridImg);
  a.appendChild(gridDesc);
  gridItem.appendChild(a);

  return gridItem;
}

// Container variables (assuming they exist)
const archiveContainer = document.querySelector('#studioSect');
const currentContainer = document.querySelector('#marketSect');

const archiveGrid = document.querySelector('#studioGrid');
const paintGrid = document.querySelector('#paintGrid'); // new section

// Loop through all .cont elements
for (const contentElement of contentElements) {
  const gridItem = createGridItem(contentElement);

  // Otherwise check the parent container
  const parentContainer = contentElement.parentElement; // Assuming a direct parent container

  if (parentContainer === currentContainer) {
    paintGrid.appendChild(gridItem); // Add to current section
  } else if (parentContainer === archiveContainer) {
    archiveGrid.appendChild(gridItem); // Add to archive section
  } else {
    console.warn(`.cont element with id "${contentElement.id}" not found within a known container.`);
  }
}








// ella page tabs
function openTab(evt, tabName) {
				var i, tabCont, tab;
				tabCont = document.getElementsByClassName("tabCont");
				for (i = 0; i < tabCont.length; i++) {
					tabCont[i].style.display = "none";
				}
				tab = document.getElementsByClassName("tab");
				for (i = 0; i < tab.length; i++) {
					tab[i].className = tab[i].className.replace(" active", "");
				}
				document.getElementById(tabName).style.display = "block";
				evt.currentTarget.className += " active";
}










//change title tag
function updateTitleFromHash() {
      switch (window.location.hash) {
        case "#studio":
          document.title = "Studio";
          break;
        case "#market":
          document.title = "Market";
          break;
        case "#ella":
          document.title = "Ella Suzanne";
          break;
        default:
          document.title = "Home";
      }
    }

    // Run on load
    updateTitleFromHash();

    // Run when hash changes
    window.addEventListener("hashchange", updateTitleFromHash);




// Move the nav button on the phone
document.getElementById("currentBtn").addEventListener("click", function () {
  const nav = document.querySelector("nav");

  nav.style.left = "75vw";
});
document.getElementById("archiveBtn").addEventListener("click", function () {
  const nav = document.querySelector("nav");

  nav.style.left = "5vw";
});


// Phone CV button
  document.getElementById("cvLink").addEventListener("click", function(e) {
    e.preventDefault();
    const div = document.getElementById("ellaPage");
    div.scrollTo({
      top: div.scrollHeight,
      behavior: "smooth"
    });
  });