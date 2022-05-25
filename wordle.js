function checkWord() {
    var enteredWord = document.getElementById("firstGuess").value;
    var correctWord = "aisle";
    var outputColor = "BBBBB";
    for (let i = 0; i < 5; i++) {
        if (enteredWord[i] == correctWord[i]) {
            outputColor = setCharAt(outputColor, i, 'G');
            correctWord = setCharAt(correctWord, i, '-');
        }
    }
    for (let i = 0; i < 5; i++) {
        if (enteredWord[i] != correctWord[i]) {
            for (let j = 0; j < 5; j++) {
                if (enteredWord[i] == correctWord[j]) {
                    outputColor = setCharAt(outputColor, i, 'Y');
                    correctWord = setCharAt(correctWord, i, '-');
                    break;
                }
            }
        }
    }
    document.getElementById("firstGuess").value = outputColor;
    for (let i = 0; i < 5; i++) {
        const idi = enteredWord[i];
        switch (outputColor[i]) {
            case 'G':
                document.getElementById(idi).style.backgroundColor = "#00FF00";
                break;
            case 'Y':
                document.getElementById(idi).style.backgroundColor = "yellow";
                break;
            default:
                document.getElementById(idi).style.backgroundColor = "black";
                break;
        }
    }
}
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}