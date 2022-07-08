window.onload = async function () {
	await elizalina.loadLanguage("assets/localisation/error_en.json", ["en-GB", "en"]);
	await elizalina.loadLanguage("assets/localisation/error_fr.json", ["FR-fr", "fr"]);
	elizalina.fillDocument();
}