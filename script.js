/** @format */

var spec = [
	"@",
	"%",
	"+",
	"\\",
	"/",
	"'",
	"!",
	"#",
	"$",
	"^",
	"?",
	":",
	",",
	")",
	"(",
	"}",
	"{",
	"]",
	"[",
	"~",
	"-",
	"_",
	".",
];

var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCase = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

var upperCase = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

function getPasswordOptions() {
	var length = prompt(
		"Choose how many characters you would like your password to contain. Must be between 8 - 128"
	);

	var hasSpec = confirm("Will your password include special characters?");
	var hasNum = confirm("numbers?");
	var hasLowerCase = confirm("lowercase letters?");
	var hasUpperCase = confirm("uppercase letters?");

	var passwordOptions = {
		length: length,
		hasSpec: hasSpec,
		hasNum: hasNum,
		hasLowerCase: hasLowerCase,
		hasUpperCase: hasUpperCase,
	};

	return passwordOptions;
}

function getRandom(arr) {
	var randIndex = Math.floor(Math.random() * arr.length);
	var randElement = arr[randIndex];

	return randElement;
}

function generatePassword() {
	var options = getPasswordOptions();
	var result = [];
	var possibleCharacters = [];
	var guaranteedCharacters = [];

	if (options.hasSpec) {
		possibleCharacters = possibleCharacters.concat(spec);
		guaranteedCharacters.push(getRandom(spec));
	}

	if (options.hasNum) {
		possibleCharacters = possibleCharacters.concat(num);
		guaranteedCharacters.push(getRandom(num));
	}

	if (options.hasLowerCase) {
		possibleCharacters = possibleCharacters.concat(lowerCase);
		guaranteedCharacters.push(getRandom(lowerCase));
	}

	if (options.hasUpperCase) {
		possibleCharacters = possibleCharacters.concat(upperCase);
		guaranteedCharacters.push(getRandom(upperCase));
	}

	for (var i = 0; i < options.length; i++) {
		var possibleCharacter = getRandom(possibleCharacters);

		result.push(possibleCharacter);
	}

	for (var i = 0; i < guaranteedCharacters.length; i++) {
		result[i] = guaranteedCharacters[i];
	}

	return result.join("");
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
