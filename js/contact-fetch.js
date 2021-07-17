window.onload = () => {
  fetch("http://localhost:1111/allcontacts", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    }, // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.map((contact) => {
        console.log(contact);
        let grandParent = document.getElementById("responses-container");
        var titleParent = document.createElement("div");
        titleParent.classList.add("title-parent");
        grandParent.appendChild(titleParent);

        var condiv = document.createElement("h2");
        condiv.classList.add("contact-title");
        condiv.innerHTML = contact.title;
        titleParent.appendChild(condiv);
        var tc = document.createElement("p");
        tc.style.color = "#fff";
        tc.innerHTML = contact.content;
        condiv.appendChild(tc);
      });
    })
    .catch((err) => console.log(err));
};
