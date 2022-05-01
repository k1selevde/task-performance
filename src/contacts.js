const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

var items;
var itemOffsets;

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);

  items = Array.from(contacts.getElementsByClassName("contact"));
  itemOffsets = items.map((item) => item.offsetTop);
}



contacts.addEventListener("scroll", () => {
  stickyHeader.textContent = Math.floor(contacts.scrollTop / 18);
});

addContacts();