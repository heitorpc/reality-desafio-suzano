const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) => {
	window.getComputedStyle(element).getPropertyValue(style);
};

const initialColors = {
	bg: getStyle(html, "--bg"),
	headerBg: getStyle(html, "header-bg"),
	colorText: getStyle(html, "--color-text"),
	linkColor: getStyle(html, "--link-color"),
	textColor: getStyle(html, "--text-color"),
	spanColor: getStyle(html, "--span-color"),
	borderColor: getStyle(html, "--border-color"),
	diversityButtonColor: getStyle(html, "-diversity-button-color"),
	footerBg: getStyle(html, "--footer-bg"),
	footerTitle: getStyle(html, "--footer-title")
}

const darkMode = {

	bg: "#333333",
	headerBg: "#121212",
	colorText: "#fff",
	linkColor: "#fff",
	textColor: "#fff",
	borderColor: "#aaa",
	footerBg: "#121212",
	footerTitle: "#fff"
};

const transformKey = (key) =>
	"--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
	Object.keys(colors).map((key) =>
		html.style.setProperty(transformKey(key), colors[key])
	);
};

const checkboxColorMode = JSON.parse(localStorage.getItem('color-mode'))

if (checkboxColorMode) {
	checkbox.checked = checkboxColorMode
	changeColors(darkMode)
}

checkbox.addEventListener("change", ({ target }) => {
	target.checked ? changeColors(darkMode) : changeColors(initialColors);
	
	localStorage.setItem('color-mode', target.checked)
});

