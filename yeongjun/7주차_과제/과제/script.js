// 영화 카드들을 담을 요소 가져오기
const container = document.querySelector(".movie-container");

// API 주소와 토큰
const API_URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTllMDg5NTEyN2RmMDEyMTUyODYwOWU1M2NkNjViMiIsIm5iZiI6MTczODI1Mzk2Mi45ODU5OTk4LCJzdWIiOiI2NzliYTY4YWIwMGQzYmFkOTJiZDg5Y2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tvE4Ck92yfRyRlOFiLruabQyQa-O2ZefJ1bYB1lrGmQ";

// 영화 목록 가져오기
function getMovies() {
  fetch(API_URL, {
    headers: {
      accept: "application/json",
      Authorization: TOKEN,
    },
  })
    .then(function (res) {
      if (!res.ok) {
        throw new Error("응답 실패: " + res.status);
      }
      return res.json();
    })
    .then(function (data) {
      const movies = data.results;

      // 영화 하나씩 카드로 만들기
      for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];

        // 카드 만들기
        const card = document.createElement("div");
        card.className = "movie_card";

        // 카드 안에 HTML 넣기
        card.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <div class="movie_info">
            <div class="movie_title">${movie.title}</div>
            <div class="movie_vote_average">🤩 ${movie.vote_average}</div>
            <div class="movie_date">${movie.release_date}</div>
          </div>
        `;

        // container에 카드 추가하기
        container.appendChild(card);
      }
    })
    .catch(function (err) {
      console.log("에러 발생:", err);
    });
}

// 그대로 실행
getMovies();
