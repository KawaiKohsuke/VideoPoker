let cards = new Array(53);
let new_cards = new Array(53);


for (let i=0; i<13; i++) {
    cards[i] = {suit: "spade", rank: i + 1};
    cards[i+13] = {suit: "club", rank: i + 1};
    cards[i+26] = {suit: "diamond", rank: i + 1};
    cards[i+39] = {suit: "heart", rank: i + 1};
}
cards[52] = {suit: "joker", rank: -1};




new_cards = shuffle(cards);



for (let i=0; i<5; i++) {
    console.log(i+1 + "枚目 -> " + new_cards[i].suit + " " + new_cards[i].rank);
}



function shuffle(arr) {
    for (let i=arr.length-1; i>0; i--) {
        
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;    
}
