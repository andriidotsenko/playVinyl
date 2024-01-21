// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



document.addEventListener('DOMContentLoaded', function () {
	const backButton = document.querySelector('.header__back-button');
	backButton.addEventListener('click', function (event) {
		event.preventDefault();
		history.back();
	});
});

document.addEventListener('DOMContentLoaded', function () {
	// Sample collection of objects (replace it with your actual data)
	const albumCollection = [
		{
			id: 1,
			imgSrc: 1,
			title: "Let There Be Rock",
			artist: "AC/DC",
			year: 1990,
			style: "Punk, Dub, Funk",
			country: "USA"
		},
		{
			id: 2,
			imgSrc: 2,
			title: "Dark Side of the Moon",
			artist: "Pink Floyd",
			year: 1973,
			style: "Progressive Rock",
			country: "UK"
		},
		{
			id: 3,
			imgSrc: 3,
			title: "Thriller",
			artist: "Michael Jackson",
			year: 1982,
			style: "Pop, R&B",
			country: "USA"
		},
		{
			id: 4,
			imgSrc: 4,
			title: "Back in Black",
			artist: "AC/DC",
			year: 1980,
			style: "Hard Rock",
			country: "Australia"
		},
		{
			id: 5,
			imgSrc: 5,
			title: "Abbey Road",
			artist: "The Beatles",
			year: 1969,
			style: "Rock",
			country: "UK"
		},
		{
			id: 6,
			imgSrc: 6,
			title: "Hotel California",
			artist: "Eagles",
			year: 1976,
			style: "Rock",
			country: "USA"
		},
		{
			id: 7,
			imgSrc: 7,
			title: "The Wall",
			artist: "Pink Floyd",
			year: 1979,
			style: "Progressive Rock",
			country: "UK"
		},
		{
			id: 8,
			imgSrc: 8,
			title: "Back to Black",
			artist: "Amy Winehouse",
			year: 2006,
			style: "Soul, R&B",
			country: "UK"
		},
		{
			id: 9,
			imgSrc: 9,
			title: "Rumours",
			artist: "Fleetwood Mac",
			year: 1977,
			style: "Rock, Pop",
			country: "UK"
		},
		{
			id: 10,
			imgSrc: 10,
			title: "The Dark Side of the Moon",
			artist: "Pink Floyd",
			year: 1973,
			style: "Progressive Rock",
			country: "UK"
		},
		{
			id: 11,
			imgSrc: 11,
			title: "Led Zeppelin IV",
			artist: "Led Zeppelin",
			year: 1971,
			style: "Hard Rock",
			country: "UK"
		},
		{
			id: 12,
			imgSrc: 12,
			title: "Sgt. Pepper's Lonely Hearts Club Band",
			artist: "The Beatles",
			year: 1967,
			style: "Rock",
			country: "UK"
		},
		{
			id: 13,
			imgSrc: 13,
			title: "Born to Run",
			artist: "Bruce Springsteen",
			year: 1975,
			style: "Rock",
			country: "USA"
		},
		{
			id: 14,
			imgSrc: 14,
			title: "The Joshua Tree",
			artist: "U2",
			year: 1987,
			style: "Rock",
			country: "Ireland"
		},
		{
			id: 15,
			imgSrc: 15,
			title: "A Night at the Opera",
			artist: "Queen",
			year: 1975,
			style: "Rock",
			country: "UK"
		},
		{
			id: 16,
			imgSrc: 16,
			title: "Thriller",
			artist: "Michael Jackson",
			year: 1982,
			style: "Pop, R&B",
			country: "USA"
		},
		{
			id: 17,
			imgSrc: 17,
			title: "Wish You Were Here",
			artist: "Pink Floyd",
			year: 1975,
			style: "Progressive Rock",
			country: "UK"
		},
		{
			id: 18,
			imgSrc: 18,
			title: "The White Album",
			artist: "The Beatles",
			year: 1968,
			style: "Rock",
			country: "UK"
		},
		{
			id: 19,
			imgSrc: 19,
			title: "Bridge Over Troubled Water",
			artist: "Simon & Garfunkel",
			year: 1970,
			style: "Folk Rock",
			country: "USA"
		},
		{
			id: 20,
			imgSrc: 20,
			title: "Court and Spark",
			artist: "Joni Mitchell",
			year: 1974,
			style: "Folk Jazz, Pop Rock",
			country: "Canada"
		},
		// Add more objects as needed
	];

	// Function to create a card element from an album object
	function createCard(album) {
		const card = document.createElement('div');
		card.className = 'output__card card';

		// Construct the card content
		card.innerHTML = `
					<div class="card__img img-ibg">
							<img srcset="img/1 – копія (${album.imgSrc}.jpg 1x, img/1 – копія (${album.imgSrc}).jpg 2x" src="img/1 – копія (${album.imgSrc}).jpg" alt="vinyl">
					</div>
					<button class="card__like _icon-heart"></button>
					<div class="card__title">${album.title}</div>
					<div class="card__name">${album.artist}</div>
					<div class="card__year-folder">
							<span class="card__year-title">Year:</span>
							<span class="card__year-value">${album.year}</span>
					</div>
					<div class="card__style-folder">
							<span class="card__style-title">Style :</span>
							<span class="card__style-value">${album.style}</span>
					</div>
					<div class="card__country-folder">
							<span class="card__country-title">Country :</span>
							<span class="card__country-value">${album.country}</span>
					</div>
					<button class="card__add-button">
					<span class="card__add-button-text _icon-plus">
					Add
					</span>
					</button>
			`;

		return card;
	}

	// Function to filter albums based on selected criteria
	function filterAlbums(criteria) {
		return albumCollection.filter(album => {
			// Check each selected criteria (genre, decade, country)
			return (
				(criteria.genre === '' || album.style.toLowerCase().includes(criteria.genre.toLowerCase())) &&
				(criteria.decade === '' || isAlbumInDecade(album, criteria.decade)) &&
				(criteria.country === '' || album.country.toLowerCase().includes(criteria.country.toLowerCase()))
			);
		});
	}

	// Function to check if an album is in the selected decade
	function isAlbumInDecade(album, selectedDecade) {
		const albumYear = album.year;
		switch (selectedDecade) {
			case '1950-60':
				return albumYear >= 1950 && albumYear < 1960;
			case '1960-70':
				return albumYear >= 1960 && albumYear < 1970;
			case '1970-80':
				return albumYear >= 1970 && albumYear < 1980;
			case '1980-90':
				return albumYear >= 1980 && albumYear < 1990;
			case '1990-00':
				return albumYear >= 1990 && albumYear < 2000;
			case '2000-10':
				return albumYear >= 2000 && albumYear < 2010;
			case '2010-20':
				return albumYear >= 2010 && albumYear < 2020;
			case '2020-30':
				return albumYear >= 2020 && albumYear < 2030;
			default:
				return true; // If no decade is selected, consider all albums
		}
	}

	// Event listener for the form submission
	const form = document.querySelector('.form');
	form.addEventListener('submit', function (event) {
		event.preventDefault();

		// Get selected criteria from the form
		const selectedGenre = form.querySelector('.form__genre .form__select').value;
		const selectedDecade = form.querySelector('.form__decade .form__select').value;
		const selectedCountry = form.querySelector('.form__country .form__select').value;

		// Create an object with selected criteria
		const selectedCriteria = {
			genre: selectedGenre,
			decade: selectedDecade,
			country: selectedCountry,
		};

		// Filter albums based on the selected criteria
		const filteredAlbums = filterAlbums(selectedCriteria);

		// Render filtered cards
		renderFilteredCards(filteredAlbums);
	});

	// Function to render filtered cards
	function renderFilteredCards(filteredAlbums) {
		const outputContainer = document.querySelector('.output');

		// Clear existing content
		outputContainer.innerHTML = '';

		// Iterate through the filtered collection and create cards
		filteredAlbums.forEach(album => {
			const card = createCard(album);
			outputContainer.appendChild(card);
		});
	}

	// Function to render cards from the collection
	function renderCards() {
		const outputContainer = document.querySelector('.output');

		// Clear existing content
		outputContainer.innerHTML = '';

		// Iterate through the collection and create cards
		albumCollection.forEach(album => {
			const card = createCard(album);
			outputContainer.appendChild(card);
		});
	}

	// Call the function to render cards on page load
	renderCards();
});