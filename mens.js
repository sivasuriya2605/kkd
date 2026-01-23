const members=[
    {
        id:1,
        image:"img/samp.jpg",
        name:"sample"

    },
    {
        id:2,
        image:"img/samp.jpg",
        name:"sample"

    },
    {
        id:3,
        image:"img/samp.jpg",
        name:"sample"

    },
    {
        id:4,
        image:"img/samp.jpg",
        name:"sample"

    },
    {
        id:5,
        image:"img/samp.jpg",
        name:"sample"

    },
    {
        id:6,
        image:"img/samp.jpg",
        name:"sample"

    },
    {
        id:7,
        image:"img/samp.jpg",
        name:"sample"

    },
    {
        id:8,
        image:"img/samp.jpg",
        name:"sample"

    },
    {
        id:9,
        image:"img/samp.jpg",
        name:"sample"

    },
    {
        id:10,
        image:"img/samp.jpg",
        name:"sample"

    },

];

const container = document.getElementById('member-container');
members.forEach(member => {
  const card = document.createElement('div');
  card.className = 'member-card';

  card.innerHTML = `
    <img src="${member.image}" alt="${member.name}">
    <p>${member.name}</p>
  `;

  container.appendChild(card);
});

export default members;