/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

let sortOptionsActive = false;
let sortOptions = [];
let sortOptionsButtons = [];

// Game data snapshot 4/17/2026
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
	},
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards(inGames) {
	const cardContainer = document.getElementById("card-container");
	cardContainer.innerHTML = "";
	const templateCard = document.querySelector(".card");

	// Make a card for each game in the data array
	// Start at 1 because index 0 is used for misc data
	for (let i = 1; i < games.length; i++) {
		const nextCard = templateCard.cloneNode(true); // Copy the template card
		editCardContent(nextCard, inGames[i]); // Edit title and image
		cardContainer.appendChild(nextCard); // Add new card to the container
	}
}

function editCardContent(card, gameInfo) {
	card.style.display = "block";

	const cardHeader = card.querySelector("h2");
	cardHeader.textContent = gameInfo.name;

	const cardImage = card.querySelector("img");
	cardImage.src = gameInfo.img;
	cardImage.alt = gameInfo.name + " Poster";

	const cardDescription = card.querySelector(".game-description");
	cardDescription.textContent = gameInfo.desc;

	const cardBulletPoints = card.querySelectorAll(".card-data");

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
					"% of Current Steam Users: " + String(percentage);
				break;
			default:
				break;
		}
	}

	// You can use console.log to help you debug!
	// View the output by right clicking on your website,
	// select "Inspect", then click on the "Console" tab
	// console.log("new card:", gameInfo.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function () {
	showCards(games);
	sortOptions = document.getElementById("sort-options-container");
	sortOptionsButtons = document.getElementsByClassName("sort-by-button");

	for (let i = 0; i < sortOptionsButtons.length; i++) {
		switch (i) {
			case 0:
				sortOptionsButtons[i].addEventListener("click", sortGames);
				sortOptionsButtons[i].sortParam = "players.current";
				sortOptionsButtons[i].gamePlayerData = games;
				break;
			case 1:
				sortOptionsButtons[i].addEventListener("click", sortGames);
				sortOptionsButtons[i].sortParam = "players.peak_daily";
				sortOptionsButtons[i].gamePlayerData = games;
				break;
			case 2:
				sortOptionsButtons[i].addEventListener("click", sortGames);
				sortOptionsButtons[i].sortParam = "players.peak_all_time";
				sortOptionsButtons[i].gamePlayerData = games;
				break;
			case 3:
				sortOptionsButtons[i].addEventListener("click", sortGames);
				sortOptionsButtons[i].sortParam = "clear";
				sortOptionsButtons[i].gamePlayerData = games;
				break;
			default:
				break;
		}
	}
});

function displaySortOptions() {
	if (sortOptionsActive) {
		sortOptions.classList.add("inactive-display");
		sortOptionsActive = false;
	} else {
		sortOptionsActive = true;
		sortOptions.classList.remove("inactive-display");
	}
}

function sortGames() {
	let inSortBy = event.currentTarget.sortParam;
	let inGameData = [...event.currentTarget.gamePlayerData];
	let tempGames = [];

	console.log(inGameData);

	switch (event.currentTarget.sortParam) {
		// sort by descending current player count - highest to lowest
		case "players.current":
			for (let i = 1; i < inGameData.length; i++) {
				console.log(event.currentTarget.gamePlayerData[i].players.current);
				tempGames[i] = inGameData[i];

				for (let j = i + 1; j < inGameData.length; j++) {
					if (tempGames[i].players.current < inGameData[j].players.current) {
						console.log(
							tempGames[i].name + " is less than " + inGameData[j].name,
						);
						let temp = tempGames[i];
						tempGames[i] = inGameData[j];
						inGameData[j] = temp;
					} else {
						continue;
					}
				}
			}
			break;

		// Sort by descending daily peak player count - highest to lowest
		case "players.peak_daily":
			for (let i = 1; i < inGameData.length; i++) {
				console.log(inGameData[i].players.peak_daily);
				tempGames[i] = inGameData[i];

				for (let j = i + 1; j < inGameData.length; j++) {
					if (
						tempGames[i].players.peak_daily < inGameData[j].players.peak_daily
					) {
						console.log(
							tempGames[i].name + " is less than " + inGameData[j].name,
						);
						let temp = tempGames[i];
						tempGames[i] = inGameData[j];
						inGameData[j] = temp;
					} else {
						continue;
					}
				}
			}
			break;

		//Sort by descending all time peak player count - highest to lowest
		case "players.peak_all_time":
			tempGames[0] = games[0];
			for (let i = 1; i < inGameData.length; i++) {
				console.log(inGameData[i].players.peak_all_time);
				tempGames[i] = inGameData[i];

				for (let j = i + 1; j < inGameData.length; j++) {
					if (
						tempGames[i].players.peak_all_time <
						inGameData[j].players.peak_all_time
					) {
						console.log(
							tempGames[i].name + " is less than " + inGameData[j].name,
						);
						let temp = tempGames[i];
						tempGames[i] = inGameData[j];
						inGameData[j] = temp;
					} else {
						continue;
					}
				}
			}
			break;
		default:
			tempGames[0] = inGameData[0];
			for (let i = 1; i < inGameData.length; i++) {
				tempGames[i] = inGameData[i];
			}
			break;
	}
	console.log(tempGames);

	showCards(tempGames);
}
