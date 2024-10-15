const facts = true;

console.log("Magic 8 Ball, will Shriya be rich in the future?");
console.log("[8] Magic Ball is thinking...");
console.log("[8] The ball has decided, that it is " + facts);

const jeepWrangler = {
    name: "Jeep Wrangler",
    performance: {
        engine: "3.6-liter V6",
        horsepower: 330,
        acceleration: "0 to 100 km/h in 6.1 seconds",
        top_speed: "over 160 km/h"
    },
    features: {
        drivetrain: "4WD with Selec-Trac system",
        interior: "Durable and weather-resistant materials",
        safety: "Advanced safety features including blind-spot monitoring"
    },
    pricing: {
        starting_price: "$20,000",
        production_year: 2019,
        warranty: "4 years or 100,000 miles"
    }
};

// Convert the object to a JSON string
const jsonString = JSON.stringify(jeepWrangler, null, 4); // Pretty print with 4 spaces
console.log(jsonString);