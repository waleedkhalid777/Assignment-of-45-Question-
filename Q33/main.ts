// crating array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// using for-loop
for(let oneNumber of numbers){
    let origialEnding: string;
    
    if(oneNumber === 1){
        origialEnding = "st"
    }else if (oneNumber === 2){
        origialEnding = "nd"
    }
    else if(oneNumber === 3){
        origialEnding = "rd"
    }
    else(
        origialEnding = "th"
    )
    console.log(`${oneNumber}${origialEnding}`);
}