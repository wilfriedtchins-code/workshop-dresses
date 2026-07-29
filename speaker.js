const speakers = [
  {
    name: "Ada Lovelace",
    title: "Pioneer of Computing",
    img: "images/ada.jpg",
    bio: "Visionary mathematician who laid the foundation for programming."
  },
  {
    name: "Tim Berners-Lee",
    title: "Inventor of the Web",
    img: "images/tim.jpg",
    bio: "Creator of the World Wide Web, advocating for open internet."
  },
  {
    name: "Fei-Fei Li",
    title: "AI Researcher",
    img: "images/fei.jpg",
    bio: "Leading expert in computer vision and ethical AI."
  }
];

const container = document.getElementById("speakers-container");

speakers.forEach(speaker => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";
  col.innerHTML = `
    <div class="card h-100">
      <img src="${speaker.img}" class="card-img-top" alt="${speaker.name}">
      <div class="card-body">
        <h5 class="card-title">${speaker.name}</h5>
        <p class="card-text"><strong>${speaker.title}</strong></p>
        <p class="card-text">${speaker.bio}</p>
      </div>
    </div>
  `;
  container.appendChild(col);
});