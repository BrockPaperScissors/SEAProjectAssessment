// Globally declared variables
let sortOptionsActiveFlag = false; // Used to check if sorting options are active/inactive
let clearContainerFlag = false; // Used to check if card links are active/inactive
let sortOptions; // Holds sorting options container
let sortOptionsButtons; // Holds sorting option buttons
let linkPanel; // Holds card-related links

// Game data snapshot 4/17/2026
// Collected manually from https://steamdb.info/
let games = [
	{
		active_players: 8043520,
	},
	{
		name: "Counter-Strike 2",
		developer: "Valve",
		desc: "Competitive First Person Shooter",
		img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
		players: {
			current: 894607,
			peak_daily: 1399032,
			peak_all_time: 1862531,
		},
		steam_db_url: "https://steamdb.info/app/730/charts/",
		steam_store_url: "https://store.steampowered.com/app/730/CounterStrike_2/",
	},
	{
		name: "Dota 2",
		developer: "Valve",
		desc: "Multiplayer Online Battle Arena",
		img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/header.jpg?t=1769535998",
		players: {
			current: 364079,
			peak_daily: 626460,
			peak_all_time: 1295114,
		},
		steam_db_url: "https://steamdb.info/app/570/charts/",
		steam_store_url: "https://store.steampowered.com/app/570/Dota_2/",
	},
	{
		name: "FiveM",
		developer: "CFX.re",
		desc: "Grand Theft Auto V Multiplayer Mod",
		img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2676230/9e8a2df18bfdd24267aefa6d3e14778c2ecb1708/header.jpg?t=1769533323",
		players: {
			current: 165810,
			peak_daily: 192794,
			peak_all_time: 215265,
		},
		steam_db_url: "https://steamdb.info/app/2676230/charts/",
		steam_store_url:
			"https://store.steampowered.com/app/3240220/Grand_Theft_Auto_V_Enhanced/",
	},
	{
		name: "PUBG: BATTLEGROUNDS",
		developer: "PUBG Corporation",
		desc: "Free-to-play Battle Royal",
		img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/841ea38bc58cabb70aef65365cf50bc2d79329d9/header.jpg?t=1775635041",
		players: {
			current: 124774,
			peak_daily: 864354,
			peak_all_time: 3257248,
		},
		steam_db_url: "https://steamdb.info/app/578080/charts/",
		steam_store_url:
			"https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/",
	},
	{
		name: "Slay the Spire 2",
		developer: "Mega Crit",
		desc: "Roguelike deck builder",
		img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2868840/b0958d387dc366211e0f353443710cfcf9fdb020/header.jpg?t=1773851542",
		players: {
			current: 120581,
			peak_daily: 286089,
			peak_all_time: 574638,
		},
		steam_db_url: "https://steamdb.info/app/2868840/charts/",
		steam_store_url:
			"https://store.steampowered.com/app/2868840/Slay_the_Spire_2/",
	},
	{
		name: "Windrose",
		developer: "Kraken Express",
		desc: "PvE Pirate survival adventure",
		img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3041230/7e838d87d787735d5d29d72777c5ee55653dfb2b/header.jpg?t=1776158614",
		players: {
			current: 112651,
			peak_daily: 135700,
			peak_all_time: 135700,
		},
		steam_db_url: "https://steamdb.info/app/3041230/charts/",
		steam_store_url: "https://store.steampowered.com/app/3041230/Windrose/",
	},
	{
		name: "Rust",
		developer: "Facepunch Studios",
		desc: "Crafting Open World Survival",
		img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1776257232",
		players: {
			current: 107222,
			peak_daily: 158709,
			peak_all_time: 262284,
		},
		steam_db_url: "https://steamdb.info/app/252490/charts/",
		steam_store_url: "https://store.steampowered.com/app/252490/Rust/",
	},
	{
		name: "Marvel Rivals",
		developer: "NetEase Games",
		desc: "Super Hero Team-based PVP Shooter",
		img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2767030/975bfe11c5b6843c866587138aec911964b60c85/header.jpg?t=1776420047",
		players: {
			current: 116125,
			peak_daily: 116199,
			peak_all_time: 644269,
		},
		steam_db_url: "https://steamdb.info/app/2767030/charts/",
		steam_store_url:
			"https://store.steampowered.com/app/2767030/Marvel_Rivals/",
	},
	{
		name: "Crimson Desert",
		developer: "Pearl Abyss",
		desc: "Open World Action Adventure",
		img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3321460/abd7dbdeaede8b6c9a6d40bf116ff2b883f2dd45/header.jpg?t=1776322395",
		players: {
			current: 93744,
			peak_daily: 112952,
			peak_all_time: 276261,
		},
		steam_db_url: "https://steamdb.info/app/3321460/charts/",
		steam_store_url:
			"https://store.steampowered.com/app/3321460/Crimson_Desert/",
	},
	{
		name: "ARC Raiders",
		developer: "Embark Studios",
		desc: "Multiplayer extraction adventure",
		img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1808500/04baafaf64a5aa5f46ecda5d71889a4848dc0628/header.jpg?t=1772007651",
		players: {
			current: 81258,
			peak_daily: 98844,
			peak_all_time: 481966,
		},
		steam_db_url: "https://steamdb.info/app/1808500/charts/",
		steam_store_url: "hhttps://store.steampowered.com/app/1808500/ARC_Raiders/",
	},
];

// container for games "favorited" by the user
let favoritedGames = [];

// include meta data buffer for consistent game data operations
favoritedGames[0] = games[0];

//This calls the addCards() function when the page is first loaded
// Added: Once page is loaded -- safely adds event listeners to the sorting buttons
document.addEventListener("DOMContentLoaded", function () {
	// Initially draw all game cards
	showCards(games);

	// Store reference to sorting options container
	sortOptions = document.querySelector(".sort-options-container");

	// Store reference to sorting option buttons
	sortOptionsButtons = document.querySelectorAll(".sort-by-button");

	// For each sorting option button
	// Could move this to event handler function so that it doesnt bog down
	// Initial loading performance.
	for (let i = 0; i < sortOptionsButtons.length; i++) {
		switch (i) {
			// Set first button to sort by current players
			case 0:
				sortOptionsButtons[i].addEventListener("click", sortGames);
				sortOptionsButtons[i].sortParam = "players.current";
				sortOptionsButtons[i].gamePlayerData = games;
				break;

			// Set second button to issue sort by daily peak
			case 1:
				sortOptionsButtons[i].addEventListener("click", sortGames);
				sortOptionsButtons[i].sortParam = "players.peak_daily";
				sortOptionsButtons[i].gamePlayerData = games;
				break;

			// Set third button to issue sort by all time peak
			case 2:
				sortOptionsButtons[i].addEventListener("click", sortGames);
				sortOptionsButtons[i].sortParam = "players.peak_all_time";
				sortOptionsButtons[i].gamePlayerData = games;
				break;

			// Set fourth button to issue sort by favorites
			case 3:
				sortOptionsButtons[i].addEventListener("click", sortGames);
				sortOptionsButtons[i].sortParam = "favorites";
				sortOptionsButtons[i].gamePlayerData = favoritedGames;
				break;

			// set fifth button to issue clear all sorting preferences
			case 4:
				sortOptionsButtons[i].addEventListener("click", sortGames);
				sortOptionsButtons[i].sortParam = "clear";
				sortOptionsButtons[i].gamePlayerData = games;
				break;
			default:
				break;
		}
	}
});

// This function adds cards the page to display the data in the array
// Function: showCards
// Purpose: render HTML card elements based on the data set being passed in
// Input: an array of game objects
function showCards(inGames) {
	const cardContainer = document.getElementById("card-container");
	cardContainer.innerHTML = "";
	const templateCard = document.querySelector(".card");

	// Make a card for each game in the incoming data array
	// Start at 1 because index 0 is used for misc/meta data
	for (let i = 1; i < inGames.length; i++) {
		const nextCard = templateCard.cloneNode(true); // Copy the template card
		editCardContent(nextCard, inGames[i]); // Add all related game details to each card
		cardContainer.appendChild(nextCard); // Add new card to the container
	}
}

// Function: editCardContent
// Purpose: add HTML elements to each card and set the content of each elements
// Input: a default card template, and a game object
function editCardContent(card, gameInfo) {
	card.addEventListener("click", toggleCardLinks);
	card.style.display = "block";

	const cardHeader = card.querySelector("h2");
	cardHeader.textContent = gameInfo.name;

	const cardImage = card.querySelector("img");
	cardImage.src = gameInfo.img;
	cardImage.alt = gameInfo.name + " Poster";

	const cardDescription = card.querySelector(".game-description");
	cardDescription.textContent = gameInfo.desc;

	const cardBulletPoints = card.querySelectorAll(".card-data");

	// Loop over each bullet point and set information to be displayed
	for (let i = 0; i < cardBulletPoints.length; i++) {
		switch (i) {
			case 0:
				cardBulletPoints[i].textContent =
					"Current: " + gameInfo.players.current;
				break;
			case 1:
				cardBulletPoints[i].textContent =
					"Daily Peak: " + gameInfo.players.peak_daily;
				break;
			case 2:
				cardBulletPoints[i].textContent =
					"All Time Peak: " + gameInfo.players.peak_all_time;
				break;
			case 3:
				let percentage =
					(gameInfo.players.current / games[0].active_players) * 100;
				percentage = percentage.toFixed(2);
				cardBulletPoints[i].textContent =
					"% of Current Steam Users: " + percentage;
				break;
			default:
				break;
		}
	}
}

// Function: displaySortOptions
// Purpose: toggle visibilty of the sorting by adding/removing pre-defined CSS class
function toggleSortOptions() {
	// Check if sort options are already being displayed
	if (sortOptionsActiveFlag) {
		// Turn them off
		sortOptions.classList.add("inactive-display");
		sortOptionsActiveFlag = false;
	} else {
		// Turn them on
		sortOptionsActiveFlag = true;
		sortOptions.classList.remove("inactive-display");
	}
}

// Function: sortGames
// Purpose: Sort games in order determined by which sorting button was selected
// Input: None
// Output: Calls a re-render of cards to the screen
// Special: Implements a selection sort algorithm - requires shallow copy of data
function sortGames() {
	// Stores sorting preference
	let inSortBy = event.currentTarget.sortParam;

	// Use a temporary copy of data to avoid modifying original data
	// Copying large amounts of data is expensive -- but here it should be acceptable
	let inGameData = [...event.currentTarget.gamePlayerData];

	// Create a tempory container to store sorted items
	let tempGames = [];

	// Execute sort based on stored preference
	switch (event.currentTarget.sortParam) {
		// Sort by descending current player count - highest to lowest
		case "players.current":
			// Compare each element to the first element in the array
			// Move on to the next and repeat comparison to new starting position
			for (let i = 1; i < inGameData.length; i++) {
				tempGames[i] = inGameData[i];

				for (let j = i + 1; j < inGameData.length; j++) {
					// If starting element is less than next element
					if (tempGames[i].players.current < inGameData[j].players.current) {
						// Temporarily store current element
						let temp = tempGames[i];

						// Perform swap of elements position
						tempGames[i] = inGameData[j];
						inGameData[j] = temp;
					}
					// Advance to the next element
					else {
						continue;
					}
				}
			}
			break;

		// Sort by descending daily peak player count - highest to lowest
		case "players.peak_daily":
			for (let i = 1; i < inGameData.length; i++) {
				tempGames[i] = inGameData[i];

				for (let j = i + 1; j < inGameData.length; j++) {
					if (
						tempGames[i].players.peak_daily < inGameData[j].players.peak_daily
					) {
						let temp = tempGames[i];
						tempGames[i] = inGameData[j];
						inGameData[j] = temp;
					} else {
						continue;
					}
				}
			}
			break;

		// Sort by descending all time peak player count - highest to lowest
		case "players.peak_all_time":
			tempGames[0] = games[0];
			for (let i = 1; i < inGameData.length; i++) {
				tempGames[i] = inGameData[i];

				for (let j = i + 1; j < inGameData.length; j++) {
					if (
						tempGames[i].players.peak_all_time <
						inGameData[j].players.peak_all_time
					) {
						let temp = tempGames[i];
						tempGames[i] = inGameData[j];
						inGameData[j] = temp;
					} else {
						continue;
					}
				}
			}
			break;

		// Only display games marked as "favorites" by the user
		case "favorites":
			tempGames[0] = inGameData[0];
			for (let i = 1; i < favoritedGames.length; i++) {
				tempGames[i] = inGameData[i];
			}
			break;
		default:
			tempGames[0] = inGameData[0];
			for (let i = 1; i < inGameData.length; i++) {
				tempGames[i] = inGameData[i];
			}
			break;
	}

	// Re-render the sorted/modified list of games
	showCards(tempGames);
}

// Function: toggleCardLinks
// Purpose:  Toggle visibility of card link container/buttons
// Input: click event
// Output: displays a menu over the face of the card with associated links
function toggleCardLinks(event) {
	// Store reference to necessary card elements
	const clickedCard = event.currentTarget.querySelector(".card-links");
	const linkButtons = event.currentTarget.querySelectorAll("a");
	const gameName = event.currentTarget.querySelector("h2").textContent;

	// Favorite button event listener added here in code.
	const favoriteButton = event.currentTarget.querySelector(".favorite-button");
	favoriteButton.addEventListener("click", addToFavorites);

	// Set a-tag hrefs to proper links of the game that was clicked on
	for (let i = 1; i < games.length; i++) {
		if (games[i].name === gameName) {
			linkButtons[0].href = games[i].steam_store_url;
			linkButtons[1].href = games[i].steam_db_url;
			break;
		}
	}

	// If panel was displayed
	if (clearContainerFlag) {
		// Add pre-configured css display class
		clickedCard.classList.add("inactive-display");

		// Set display flag to false
		clearContainerFlag = false;
	} else {
		// Remove pre=configured css class hiding the display
		clickedCard.classList.remove("inactive-display");
		// Set display flag to true
		clearContainerFlag = true;
	}
}

// Function: addToFavorites
// Purpose: Check if the selected game is already a favorite
//			Find the game in games data and add the associated object to favorites list
// Input: click event
function addToFavorites(event) {
	// Store reference to clicked game name
	const gameToAdd =
		event.currentTarget.parentElement.parentElement.querySelector(
			"h2",
		).textContent;

	// Create boolean to check if the game is already in favoritedGames
	const existingFavorite = favoritedGames.some(
		(game) => game.name === gameToAdd,
	);

	// If the game is a valid game in game data, check if existing boolean is true or false
	for (let i = 1; i < games.length; i++) {
		if (games[i].name === gameToAdd) {
			// If existing item boolean is true, dont add another object
			if (existingFavorite) {
				break;
			}
			// If existing item boolean is false, add favorited game.
			favoritedGames[favoritedGames.length] = games[i];
			break;
		}
	}
}
