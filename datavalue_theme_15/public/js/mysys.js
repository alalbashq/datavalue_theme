$(document).ready(function() {
    console.log('ready!');
    // Iterate over all <span> elements in the menu
    $(".side-menu ul li span").each(function () {
        // Get the current text
        var text = $(this).text().trim();

        // Translate the text using Frappe's __() function
        var translatedText = __(text);

        // Update the <span> text with the translated version
        $(this).text(translatedText);
    });
});
console.log('ready!');