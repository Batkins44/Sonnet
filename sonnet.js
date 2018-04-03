function replaceWord(){
    res = sonnet.replace("winter", "yuletide");
    document.getElementById("sonnet").innerHTML = res;
}

function replaceTotal(){
    rep = sonnet.replace(/the/g, " a large ");
    document.getElementById("sonnet").innerHTML = rep;
    // hex = sonnet.replace(/ e /g, " thee ")
    // document.getElementById("sonnet").innerHTML = hex;
}



var sonnet = "How like a winter hath my absence been\
From thee, the pleasure of the fleeting year!\
What freezings have I felt, what dark days seen!\
What old December's bareness everywhere!\
And yet this time removed was summer's time;\
The teeming autumn, big with rich increase,\
Bearing the wanton burden of the prime,\
Like widow'd wombs after their lords' decease:\
Yet this abundant issue seemed to me\
But hope of orphans, and unfathered fruit;\
For summer and his pleasures wait on thee,\
And, thou away, the very birds are mute:\
   Or, if they sing, 'tis with so dull a cheer,\
   That leaves look pale, dreading the winter's near."
console.log("The word orphans appears at character # " + sonnet.indexOf("orphans"));
console.log("There are " + sonnet.length + " characters in the sonnet");



let replaceWinter = document.getElementById("replaceWord").addEventListener("click", replaceWord);
let replaceThe = document.getElementById("replaceThe").addEventListener("click",replaceTotal);

replaceWord();
replaceTotal();