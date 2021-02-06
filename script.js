function submit() {
    var age = document.getElementById("age").value;
    var family = document.getElementById("fam").value;
    var exercise = document.getElementById("exercise").value;
    var work = document.getElementById("work").value;
    var protection = document.getElementById("prot").value;
    var weather = document.getElementById("cold").value;
    var baby = document.getElementById("baby").value;

    var resultHEAD = document.getElementById("ResultH");
    var resultparagraph = document.getElementById("resultp");

    if(family === "A" && exercise === "A" && protection === "B" && weather === "B" && work === "B") {
        resultHEAD.innerHTML = "You got Labrador Retriever!";
        resultparagraph.innerHTML = " The Labrador Retriever is America's #1 dog breed. They are great family dogs, and very easy to train. " +
        "Labs are entusiastic and require a lot of exercise. Labrador Retrievers enjoy a game of catch and a swim in the pool."; }
     else if ( work === "A" && weather === "B" && protection === "B" && baby === "B") {
        resultHEAD.innerHTML = "You got Chiuahua!";
        resultparagraph.innerHTML = "The Chiuahua is the smallest breed of dog. Chiuahuas are very loyal to their owners. They often snap at strangers who may be threatening to them." +
        " Chiuahua's are confident and do reqiure training. Overall they are the perfect city pet.";}
     else if (age === "D"&& exercise === "B" && family === "B" && protection === "B" ) {
        resultHEAD.innerHTML = "You got Poodle!";
        resultparagraph.innerHTML = "The Poodle is very affectionate and easy-going. They are considerded low-maintenanace, and also come in three sizes." +
        " Poodle sizes include: Toy, Miniature, and Standard. Behind the fur of coat, Poodles are remarkably smart.";}
    else if (baby ==="A" && family === "A" && protection === "B" && weather === "B" ) {
    resultHEAD.innerHTML = "You got English Bulldog!";
    resultparagraph.innerHTML = "Bulldog's are sweet and gentle dogs. They are great family-pets, specifcally, families containing small children. English Bulldogs love human attention." +
     "They are also low endurance and dont require much exercise. Bulldogs possess the courage which makes them nice watchdogs too.";}
    else if (protection === "A") {
        resultHEAD.innerHTML = "You got Doberman Pinscher!";  
        resultparagraph.innerHTML = "Doberman Pinschers are loyal and fearless dogs. Many consider Dobermans as aggresive because of their repuataions of being a war/police dogs, however, they are generally loving and caring companions. " +
        "Dobermans only turn on their protective instincts when faced with danger. Through training, Doberman Pinschers become dependable guard dogs.";}
     else if (weather === "A") {
    resultHEAD.innerHTML = "You got Bernese Moutain Dog!";
    resultparagraph.innerHTML = "The Bernese Moutain Dog is known for being strong and powerful. They are sweet and get along with everyone they come in contact with. Their thick, long coats allow them to strive in cold weather." +
    "The Bernese Moutain Dog is very versatile, and is always up for a hard job.";}
    else {
        resultHEAD.innerHTML = "You got Pug!";
        resultparagraph.innerHTML = "The Pug is the perfect blend of elegance and humor. Pug's are stocky, compact, and full of confidence. At times they may be stubborn, however, they are actually one of the most plesant dogs. Pugs like to go out on a daliy basis, and are great around the family." +
        " Pugs are the life of the party."; }
     if (age === "" && weather === "" && protection === "" && work === "" && baby === "" && family === "" && exercise === "" ) {
            resultHEAD.innerHTML = "";
            resultparagraph.innerHTML = "Please answer the questions."; }
       
    
}
