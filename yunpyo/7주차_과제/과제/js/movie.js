const container = document.getElementById("movie-container");

fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjZlMmMxM2Y3OWIyM2Q2ZGZmMzU3Y2VkNzljNjVkMCIsIm5iZiI6MTc0NzgxNzQ1MS42LCJzdWIiOiI2ODJkOTNlYmI2MDBiNWJlNDU4YzEwYmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z6ruvNs25hrn0yBMP5wZhPZLLHpavHUoGsOxWjZqZD0",
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <div class="movie-info">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-date">${movie.release_date}</div>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch((error) => console.error("에러 발생:", error));
