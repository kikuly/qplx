import os
import requests
import json

arrTipsImages = json.loads("""

""")

os.makedirs("images", exist_ok=True)

for i, url in enumerate(arrTipsImages):
    print("Downloading", url)

    r = requests.get(url)
    with open(f"images/img_{i+1}.jpg", "wb") as f:
        f.write(r.content)

print("DONE")