import json

# Sample JSON string (you can replace it with the actual JSON data from a file)
json_data = '''
{
    "name": "shriya",
    "age": 16,
    "is_student": true,
    "skills": ["Python", "JavaScript", "SQL"],
    "address": {
        "city": "San Diego",
        "state": "California"
    }
}
'''

# Load JSON data
data = json.loads(json_data)

# Edit the JSON data with different types of variables
data['name'] = "Swati Patel"          # String
data['age'] = 45                   # Integer
data['is_student'] = False         # Boolean
data['skills'].append("C++")       # List
data['address']['zip_code'] = 92127 # Dictionary (Adding new key-value pair)

# Print updated JSON data
print(json.dumps(data, indent=4))