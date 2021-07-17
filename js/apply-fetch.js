fetch("http://localhost:1111/allapplications", {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  headers: {
    "Content-Type": "application/json",
  }, // body data type must match "Content-Type" header
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const container = document.getElementById("team-container");
    data.map((member) => {
      // console.log(member.name);

      document.body.appendChild(container);
      const teamMember = document.createElement("div");
      teamMember.classList.add("team-member");
      container.appendChild(teamMember);

      var semnbio = document.createElement("div");
      semnbio.classList.add("semnbio");
      teamMember.appendChild(semnbio);

      var memdiv = document.createElement("h1");
      memdiv.classList.add("member-name");
      memdiv.style.color = "#fff";
      memdiv.innerHTML = member.name; // Insert text
      semnbio.appendChild(memdiv);

      const sem = document.createElement("h2");
      sem.classList.add("semester");
      sem.innerHTML = member.semester;
      semnbio.appendChild(sem);

      const bio = document.createElement("p");
      bio.classList.add("bio");
      bio.innerHTML = "'" + member.bio + "'";
      teamMember.appendChild(bio);

      const ghbtn = document.createElement("button");
      ghbtn.classList.add("primary-btn");
      ghbtn.innerHTML = `<a class="gh-link" href="${member.github}"><i  class="fab fa-github"></i></a>`;
      teamMember.appendChild(ghbtn);
    });
  })
  .catch((err) => console.log(err));
