window.onload = () => {
	let name = document.getElementById("card-name");
	let projects = document.getElementById("card-projects");
	let podium = document.getElementById("card-podium");
	let location = document.getElementById("card-location");
	let skills = document.getElementById("card-skills");
	let social = document.getElementById("card-social");
	let resume = document.getElementById("card-resume");

	name.style.opacity = "1"; 

	projects.style.marginRight = (name.clientWidth / 2 + 20) + "px";
	projects.style.marginBottom = (name.clientHeight / -2) + "px";
	projects.style.opacity = "1";

	podium.style.marginRight = (name.clientWidth / -2) + "px";
	podium.style.marginTop = (name.clientHeight / 2 + 20) + "px";
	podium.style.opacity = "1";

	location.style.marginLeft = (name.clientWidth / -2) + "px";
	location.style.marginBottom = (name.clientHeight / 2 + 20) + "px";
	location.style.opacity = "1";

	skills.style.marginLeft = (name.clientWidth / 2 + 20) + "px";
	skills.style.marginTop = (name.clientHeight / -2) + "px";
	skills.style.opacity = "1";

	social.style.marginRight = (podium.clientWidth - name.clientWidth / 2 + 20) + "px";
	social.style.marginTop = (name.clientHeight / 2 + 20) + "px";
	social.style.opacity = "1";

	resume.style.marginLeft = (name.clientWidth / 2 + 20) + "px";
	resume.style.marginTop = (skills.clientHeight - name.clientHeight / 2 + 20) + "px";
	resume.style.opacity = "1";
};