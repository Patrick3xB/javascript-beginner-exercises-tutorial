function sing() {
    let lyrics = "";

    for (let i = 0; i < 10; i++) {
        if (i === 4) {
            lyrics += "there will be an answer, ";
        } else {
            lyrics += "let it be, ";
        }
    }

    lyrics += "whisper words of wisdom, let it be";
    return lyrics;
}

//Your code above ^^^

console.log(sing());