window.onload = async function () {
	await elizalina.loadLanguage("assets/localisation/homepage_en.json", ["en-GB", "en"]);
	await elizalina.loadLanguage("assets/localisation/homepage_fr.json", ["FR-fr", "fr"]);
	elizalina.fillDocument();
}