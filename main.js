const movies = [
    {
        name: "Bullet Train",
        year: 2022,
        director: "David Leitch",
        picture: "https://upload.wikimedia.org/wikipedia/en/1/13/Bullet_Train_%28poster%29.jpeg"
    },
    {
        name: "Happy Gilmore",
        year: 1996,
        director: "Dennis Dugan",
        picture: "https://upload.wikimedia.org/wikipedia/en/b/be/Happygilmoreposter.jpg"
    },
    {
        name: "Django unchained",
        year: 2012,
        director: "Quentin Tarantino",
        picture: "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg"
    }
]

const moviesOrderedList = document.querySelector("ol");
for (let moviesIterator = 0; moviesIterator < 3; moviesIterator ++) {
        const li = document.createElement("li");
        const movie = movies[moviesIterator];

        const nameDiv = document.createElement("div");
        nameDiv.innerText = movie.name;
        li.appendChild(nameDiv);

        const yearDiv = document.createElement("div");
        yearDiv.innerText = movie.year;
        li.appendChild(yearDiv);

        const directorDiv = document.createElement("div");
        directorDiv.innerText = movie.director;
        li.appendChild(directorDiv);

        const pictureImg = document.createElement("img");
        pictureImg.src = movie.picture;
        li.appendChild(pictureImg);

        moviesOrderedList.appendChild(li);
      }