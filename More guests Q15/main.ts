// more guesst
let guestList = ["Hamza", "Nihal", "Ali", "Haris"];

// jo guest nahi aaraha oskka hum bata rahe he
let dontCome = guestList[3];

console.log(dontCome, "Nai Ahh sakhta");

//splice is liye istammal  kiya he ke jo velua ham is batate he us ko ye remove kre or new value add kre. 
guestList.splice(3, 1, "Hassnain");

//forEach is liye istmal krte he kke veriables one by one likh kkr aahe trminal me.
guestList.forEach(guest => console.log(`Salam ${guest}, would you like to Dinner with me?`));

