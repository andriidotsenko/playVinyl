(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (function() {
        const backButton = document.querySelector(".header__back-button");
        backButton.addEventListener("click", (function(event) {
            event.preventDefault();
            history.back();
        }));
    }));
    document.addEventListener("DOMContentLoaded", (function() {
        const albumCollection = [ {
            id: 1,
            imgSrc: 1,
            title: "Let There Be Rock",
            artist: "AC/DC",
            year: 1990,
            style: "Punk, Dub, Funk",
            country: "USA"
        }, {
            id: 2,
            imgSrc: 2,
            title: "Dark Side of the Moon",
            artist: "Pink Floyd",
            year: 1973,
            style: "Progressive Rock",
            country: "UK"
        }, {
            id: 3,
            imgSrc: 3,
            title: "Thriller",
            artist: "Michael Jackson",
            year: 1982,
            style: "Pop, R&B",
            country: "USA"
        }, {
            id: 4,
            imgSrc: 4,
            title: "Back in Black",
            artist: "AC/DC",
            year: 1980,
            style: "Hard Rock",
            country: "Australia"
        }, {
            id: 5,
            imgSrc: 5,
            title: "Abbey Road",
            artist: "The Beatles",
            year: 1969,
            style: "Rock",
            country: "UK"
        }, {
            id: 6,
            imgSrc: 6,
            title: "Hotel California",
            artist: "Eagles",
            year: 1976,
            style: "Rock",
            country: "USA"
        }, {
            id: 7,
            imgSrc: 7,
            title: "The Wall",
            artist: "Pink Floyd",
            year: 1979,
            style: "Progressive Rock",
            country: "UK"
        }, {
            id: 8,
            imgSrc: 8,
            title: "Back to Black",
            artist: "Amy Winehouse",
            year: 2006,
            style: "Soul, R&B",
            country: "UK"
        }, {
            id: 9,
            imgSrc: 9,
            title: "Rumours",
            artist: "Fleetwood Mac",
            year: 1977,
            style: "Rock, Pop",
            country: "UK"
        }, {
            id: 10,
            imgSrc: 10,
            title: "The Dark Side of the Moon",
            artist: "Pink Floyd",
            year: 1973,
            style: "Progressive Rock",
            country: "UK"
        }, {
            id: 11,
            imgSrc: 11,
            title: "Led Zeppelin IV",
            artist: "Led Zeppelin",
            year: 1971,
            style: "Hard Rock",
            country: "UK"
        }, {
            id: 12,
            imgSrc: 12,
            title: "Sgt. Pepper's Lonely Hearts Club Band",
            artist: "The Beatles",
            year: 1967,
            style: "Rock",
            country: "UK"
        }, {
            id: 13,
            imgSrc: 13,
            title: "Born to Run",
            artist: "Bruce Springsteen",
            year: 1975,
            style: "Rock",
            country: "USA"
        }, {
            id: 14,
            imgSrc: 14,
            title: "The Joshua Tree",
            artist: "U2",
            year: 1987,
            style: "Rock",
            country: "Ireland"
        }, {
            id: 15,
            imgSrc: 15,
            title: "A Night at the Opera",
            artist: "Queen",
            year: 1975,
            style: "Rock",
            country: "UK"
        }, {
            id: 16,
            imgSrc: 16,
            title: "Thriller",
            artist: "Michael Jackson",
            year: 1982,
            style: "Pop, R&B",
            country: "USA"
        }, {
            id: 17,
            imgSrc: 17,
            title: "Wish You Were Here",
            artist: "Pink Floyd",
            year: 1975,
            style: "Progressive Rock",
            country: "UK"
        }, {
            id: 18,
            imgSrc: 18,
            title: "The White Album",
            artist: "The Beatles",
            year: 1968,
            style: "Rock",
            country: "UK"
        }, {
            id: 19,
            imgSrc: 19,
            title: "Bridge Over Troubled Water",
            artist: "Simon & Garfunkel",
            year: 1970,
            style: "Folk Rock",
            country: "USA"
        }, {
            id: 20,
            imgSrc: 20,
            title: "Court and Spark",
            artist: "Joni Mitchell",
            year: 1974,
            style: "Folk Jazz, Pop Rock",
            country: "Canada"
        } ];
        function createCard(album) {
            const card = document.createElement("div");
            card.className = "output__card card";
            card.innerHTML = `\n\t\t\t\t\t<div class="card__img img-ibg">\n\t\t\t\t\t\t\t<img srcset="img/1 – копія (${album.imgSrc}.jpg 1x, img/1 – копія (${album.imgSrc}).jpg 2x" src="img/1 – копія (${album.imgSrc}).jpg" alt="vinyl">\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class="card__like _icon-heart"></button>\n\t\t\t\t\t<div class="card__title">${album.title}</div>\n\t\t\t\t\t<div class="card__name">${album.artist}</div>\n\t\t\t\t\t<div class="card__year-folder">\n\t\t\t\t\t\t\t<span class="card__year-title">Year:</span>\n\t\t\t\t\t\t\t<span class="card__year-value">${album.year}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card__style-folder">\n\t\t\t\t\t\t\t<span class="card__style-title">Style :</span>\n\t\t\t\t\t\t\t<span class="card__style-value">${album.style}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card__country-folder">\n\t\t\t\t\t\t\t<span class="card__country-title">Country :</span>\n\t\t\t\t\t\t\t<span class="card__country-value">${album.country}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class="card__add-button">\n\t\t\t\t\t<span class="card__add-button-text _icon-plus">\n\t\t\t\t\tAdd\n\t\t\t\t\t</span>\n\t\t\t\t\t</button>\n\t\t\t`;
            return card;
        }
        function filterAlbums(criteria) {
            return albumCollection.filter((album => (criteria.genre === "" || album.style.toLowerCase().includes(criteria.genre.toLowerCase())) && (criteria.decade === "" || isAlbumInDecade(album, criteria.decade)) && (criteria.country === "" || album.country.toLowerCase().includes(criteria.country.toLowerCase()))));
        }
        function isAlbumInDecade(album, selectedDecade) {
            const albumYear = album.year;
            switch (selectedDecade) {
              case "1950-60":
                return albumYear >= 1950 && albumYear < 1960;

              case "1960-70":
                return albumYear >= 1960 && albumYear < 1970;

              case "1970-80":
                return albumYear >= 1970 && albumYear < 1980;

              case "1980-90":
                return albumYear >= 1980 && albumYear < 1990;

              case "1990-00":
                return albumYear >= 1990 && albumYear < 2e3;

              case "2000-10":
                return albumYear >= 2e3 && albumYear < 2010;

              case "2010-20":
                return albumYear >= 2010 && albumYear < 2020;

              case "2020-30":
                return albumYear >= 2020 && albumYear < 2030;

              default:
                return true;
            }
        }
        const form = document.querySelector(".form");
        form.addEventListener("submit", (function(event) {
            event.preventDefault();
            const selectedGenre = form.querySelector(".form__genre .form__select").value;
            const selectedDecade = form.querySelector(".form__decade .form__select").value;
            const selectedCountry = form.querySelector(".form__country .form__select").value;
            const selectedCriteria = {
                genre: selectedGenre,
                decade: selectedDecade,
                country: selectedCountry
            };
            const filteredAlbums = filterAlbums(selectedCriteria);
            renderFilteredCards(filteredAlbums);
        }));
        function renderFilteredCards(filteredAlbums) {
            const outputContainer = document.querySelector(".output");
            outputContainer.innerHTML = "";
            filteredAlbums.forEach((album => {
                const card = createCard(album);
                outputContainer.appendChild(card);
            }));
        }
        function renderCards() {
            const outputContainer = document.querySelector(".output");
            outputContainer.innerHTML = "";
            albumCollection.forEach((album => {
                const card = createCard(album);
                outputContainer.appendChild(card);
            }));
        }
        renderCards();
    }));
    window["FLS"] = true;
    isWebp();
})();