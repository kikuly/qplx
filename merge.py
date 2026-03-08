import json

file_a = "600.json"
file_b = "questions.json"
output = "questions_merged.json"

# load files
with open(file_a, "r", encoding="utf-8") as f:
    data_a = json.load(f)

with open(file_b, "r", encoding="utf-8") as f:
    data_b = json.load(f)

# convert B → dictionary for fast lookup
map_b = {item["id"]: item for item in data_b}

# merge
for item in data_a:
    _id = item["id"]

    if _id in map_b:
        for key, value in map_b[_id].items():

            if key != "id":
                item[key] = value

# save
with open(output, "w", encoding="utf-8") as f:
    json.dump(data_a, f, ensure_ascii=False, indent=2)

print("Merged file saved:", output)