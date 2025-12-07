use gymMemb; // Skapa databas


//Skapa collection med insertMany (Reviews)
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


    






