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
        resultHEAD.innerHTML = "You Got A Labrador Retriever!";
        resultparagraph.innerHTML = " The Labrador Retriever is America's #1 dog breed. They are great family dogs, and very easy to train. " +
        "Labradors are entusiastic and require a lot of exercise. They're always down for a game of catch or a swim in the pool."; }
     else if ( work === "A" && weather === "B" && protection === "B" && baby === "B") {
        resultHEAD.innerHTML = "You Got A Chiuahua!";
        resultparagraph.innerHTML = "The Chiuahua is the smallest breed of dog. Despite their size, they are confident dogs that may reqiure training. Chiuahuas are very loyal to their owners, oftentimes snapping at strangers who seem threatening." +
        " With proper discipline and care, Chiuahuas can be your perfect city pet.";}
     else if (age === "D"&& exercise === "B" && protection === "B" && weather === "A" ) {
        resultHEAD.innerHTML = " You Got A Poodle! ";
        resultparagraph.innerHTML = "The Poodle is a very affectionate and easy-going dog. They are considerded low-maintenanace, and also come in three sizes." +
        " Poodle sizes include: Toy, Miniature, and Standard. Behind their abundant fur, Poodles are remarkably smart dogs.";}
    else if (baby ==="A" && family === "A" && protection === "B" && weather === "B" ) {
    resultHEAD.innerHTML = "You Got A English Bulldog!";
    resultparagraph.innerHTML = "Bulldogs are sweet and gentle dogs. They are family-oriented dogs - specifcally for families containing small children. English Bulldogs love human attention." +
     " They also have low endurance and don't require much exercise. Bulldogs possess much courage which makes them nice watchdogs as well.";}
    else if (protection === "A") {
        resultHEAD.innerHTML = "You Got A Doberman Pinscher!";  
        resultparagraph.innerHTML = "Doberman Pinschers are loyal and fearless dogs. Many consider Dobermans as aggresive because of their 'police dog' reputation. However, they are loving and caring companions. " +
        "Dobermans only turn on their protective instincts when faced with danger. With proper training, Doberman Pinschers become dependable guard dogs.";}
    else if (weather === "A") {
    resultHEAD.innerHTML = "You Got A Bernese Moutain Dog!";
    resultparagraph.innerHTML = "Bernese Moutain Dogs are known for being strong and powerful. Yet, they're very sweet and get along with everyone they come in contact with. Their thick, long coats allow them to strive in cold weather." +
    "The Bernese Moutain Dog is also versatile, possessing great abilities for hard tasks.";}
    else {
        resultHEAD.innerHTML = "You Got A Pug!";
        resultparagraph.innerHTML = "The Pug is the perfect blend of elegance and humor. Pugs are stocky, compact, and full of confidence. At times they may be stubborn, yet, they're actually one of the most plesant dogs. Pugs are outgoing and great around family/strangers." +
        " Ultimately, Pugs are the life of the party."; }
     if (age === "" && weather === "" && protection === "" && work === "" && baby === "" && family === "" && exercise === "" ) {
            resultHEAD.innerHTML = "";
            resultparagraph.innerHTML = "Please answer the questions."; }
       
    
}
