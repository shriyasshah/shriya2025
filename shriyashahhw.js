// Sample JSON data (you can replace it with actual JSON)
let jsonData = {
    "name": "Shriya",
    "age": 16,
    "is_student": true,
    "skills": ["Python", "JavaScript", "SQL"],
    "address": {
        "city": "San Diego",
        "state": "California"
    }
};

// Edit the JSON data with different types of variables
jsonData.name = "Swati Patel";          // String
jsonData.age = 45;                   // Integer
jsonData.is_student = false;         // Boolean
jsonData.skills.push("C++");         // Array
jsonData.address.zip_code = 94105;   // Object (Adding new key-value pair)

// Log the updated JSON data
console.log(JSON.stringify(jsonData, null, 4));