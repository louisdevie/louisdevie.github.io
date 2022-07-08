window.onload = async function () {
	await elizalina.loadLanguage("assets/localisation/links_en.json", ["en-GB", "en"]);
	await elizalina.loadLanguage("assets/localisation/links_fr.json", ["FR-fr", "fr"]);
	elizalina.fillDocument();
}