function checkWord() {
    var enteredWord = document.getElementById("write").value;
    var correctWord = "PALMS";
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
    document.getElementById("previous").appendChild(document.createElement("br"));
    var gridOutput = document.createElement("div");
    gridOutput.classList.add("grid-container");
    for (let i = 0; i < 5; i++) {
        const idi = toLower(enteredWord[i]);
        switch (outputColor[i]) {
            case 'G':
                document.getElementById(idi).style.backgroundColor = "#006400";
                var j = document.createElement("div");
                j.innerHTML = enteredWord[i];
                j.style.backgroundColor = "#006400";
                j.style.display = "inline"
                j.classList.add("grid-item");
                j.setAttribute("id", idi);
                gridOutput.appendChild(j);
                break;
            case 'Y':
                if (document.getElementById(idi).style.backgroundColor != "G") {
                    document.getElementById(idi).style.backgroundColor = "#999900";
                }
                var j = document.createElement("div");
                j.innerHTML = enteredWord[i];
                j.style.backgroundColor = "#999900";
                j.style.display = "inline"
                j.classList.add("grid-item");
                j.setAttribute("id", idi);
                gridOutput.appendChild(j);
                break;
            default:
                document.getElementById(idi).style.backgroundColor = "black";
                var j = document.createElement("div");
                j.innerHTML = enteredWord[i];
                j.style.backgroundColor = "black";
                j.style.display = "inline"
                j.classList.add("grid-item");
                j.setAttribute("id", idi);
                gridOutput.appendChild(j);
                break;
        }
    }
    document.getElementById("previous").appendChild(gridOutput);
}
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}
function toLower(char) {
    var output = "";
    output=output+(char[0]-'A'+'a');
    return output;
}