////////////////////////Skapa databas////////////////////////
use gymMemb;


////////////////////////Skapa collection med insertMany (Reviews)////////////////////////
    db.reviews.insertMany([
        {
            memberName: "Amin Nazari",
            rating: 5,
            comment: "Bra gym, ej så mycket folk",
            tags: ["Magövningar", "Kväll"],
            createdAt: "2025-12-03"
        },
        {
            memberName: "Gustav Lenander",
            rating: 4,
            comment: "Dålig ventilation",
            tags: ["Benpass", "Eftermiddag"],
            createdAt: "2025-12-01"
        },
        {
            memberName: "Tobias Karlsson",
            rating: 3,
            comment: "Behöver fler maskiner",
            tags: ["Cardio", "Morgon"],
            createdAt: "2025-12-04"
        }
]);


////////////////////CRUD////////////////////////

//CREATE - Lägg till en recension - dokument i collection.
db.reviews.insertOne({
    memberName: "Leo bentgsson",
    rating: 3,
    comment: "Älskar grupppassen",
    tags: ["Gruppass", "Kväll"],
    createdAt: "2025-11-15"
});

//READ - Visa alla recensioner.
db.reviews.find();


//UPDATE - Ändra rating och kommentar för Tobias.
db.reviews.updateOne(
    {memberName: "Tobias Karlsson"},
    {
        $set: {
            rating: 4,
            comment: "Bättre nu efter köpt in fler maskiner."
        }
    }
);


//Delete - ta bort ett dokument i collections. en recension
db.reviews.deleteOne({
    memberName: "Tobias Karlsson"
});


////////////////////////Sökning////////////////////////
db.reviews.find({
    comment: /bra/i
});


db.reviews.find({
    rating: {$gte: 3}
}).sort({rating: 1});


////////////////////////Arrayer, PUSH + UPPDATERA ELEMENT////////////////////////
db.reviews.updateOne(
    {memberName: "Amin Nazari"},
    {$push: {tags: "kvällspass"}
});


db.reviews.updateOne(
  { memberName: "Amin Nazari", tags: "kväll" },
  { $set: { "tags.$": "sen kväll" } }
);


////////////////////////COUNT, RÄKNA DOKUMENT////////////////////////
    //räkna alla dokument i collections
db.reviews.countDocuments();

    //räkna alla recensioner med rating >= 4
db.reviews.countDocuments({
    rating: {$gte: 4}
});


////////////////////////UNIKT INDEX OCH TESTA ATT DET FUNGERAR////////////////////////

//skapa unikt index för kombinationen memberName och createdAt.
db.reviews.createIndex(
    {memberName: 1, createdAt: 1},
    {unique: true}
);


//TEST: försök lägga till en rad som bryder indexet (Ska ge error)
db.reviews.insertOne({
    memberName: "Amin Nazari",
    rating: 5,
    comment: "Duplicerad rad för test",
    tags: ["test"],
    createdAt: "2025-12-03"
});