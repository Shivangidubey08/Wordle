function checkWord() {
    var enteredWord = document.getElementById("write").value;
    var correctWord = "PALMS";
    var outputColor = "BBBBB";
    let enteredLowerCase = enteredWord.toLowerCase();
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
    for (let i = 0; i < 5; i++) {
        const idi = enteredLowerCase[i];
        const rows=0;
        const ind =(5*rows) + i+1;
        var rowCol = ind.toString();
        document.getElementById("previous").innerHTML=i+1;
        switch (outputColor[i]) {
            case 'G':
                document.getElementById(idi).style.backgroundColor = "#006400";
                document.getElementById(rowCol).innerHTML = enteredWord[i];
                document.getElementById(rowCol).style.backgroundColor = "#006400";
                break;
            case 'Y':
                if (document.getElementById(idi).style.backgroundColor != "G") {
                    document.getElementById(idi).style.backgroundColor = "#999900";
                }
                document.getElementById(rowCol).innerHTML = enteredWord[i];
                document.getElementById(rowCol).style.backgroundColor =  "#999900";
                break;
            default:
                document.getElementById(idi).style.backgroundColor =  "black";
                document.getElementById(rowCol).innerHTML = enteredWord[i];
                document.getElementById(rowCol).style.backgroundColor =  "black";
                break;
        }
    }
}
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}