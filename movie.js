//movie.html

document.getElementById("search-form");
document.addEventListener("submit", function(event) {
    event.preventDefault();
    const searchValue = document.getElementById("query").value;
    let url = "https://api.themoviedb.org/3/search/movie";
    url += `?api_key=b0114a3f02393017b9b38cbd690bb5b1`;
    url += `&query=${encodeURI(searchValue)}`;
    fetch(url)
        .then(response => response.json())
        .then(responseData => showResults(responseData.results))
        .catch(error => alert("Make sure to put your API key in the code"));
});

function showResults(results) {
results.forEach(result => {
    let item = document.createElement("li");
    item.innerHTML = result.title;
    document.getElementById("results").appendChild(item);
});
}