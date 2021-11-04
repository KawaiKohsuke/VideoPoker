let cards = new Array(53);

for (let i=0; i<53; i++) {
    cards[i] = i;
}

cards = shuffle(cards);



for (let i=0; i<53; i++) {
    console.log(cards[i]);
}


function shuffle(arr) {
    for (let i=arr.length-1; i>0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;    
}