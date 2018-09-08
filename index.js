// Code your solutions in this file
function printBadges(names) {
    for(i = 0; i < names.length; i++){
        console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
    }
    return names;
}


function maybeTrue() {
    return Math.random() >= 0.5;
}

function tailsNeverFails() {
    let counter = 0;
    // while(!maybeTrue()){
    //     counter++
    // }
    console.log(`You got ${counter} Tails in a row!`);
}
