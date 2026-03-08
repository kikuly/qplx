import fitz
import json
import os
import re
from tqdm import tqdm

PDF_PATH = "600.pdf"
IMAGE_DIR = "images1"
OUTPUT_JSON = "questions.json"

os.makedirs(IMAGE_DIR, exist_ok=True)

doc = fitz.open(PDF_PATH)

questions = []
current_question = None
question_id = None
image_map = {}

question_pattern = re.compile(r"Câu\s+(\d+)\.")
option_pattern = re.compile(r"^\d+\.")

def extract_images(page, qid):
    images = page.get_images(full=True)
    if not images:
        return None

    for img_index, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]

        path = f"{IMAGE_DIR}/{qid}.jpg"

        with open(path, "wb") as f:
            f.write(image_bytes)

        return path

    return None


all_questions = []
pending_question = None # Lưu câu hỏi vừa tìm thấy nhưng chưa kiểm tra hình

for page_index in tqdm(range(len(doc))):
    page = doc.load_page(page_index)
    
    # Lấy text và hình ảnh của trang hiện tại
    text_instances = page.get_text("blocks") # Dùng blocks để có tọa độ y
    page_images = page.get_images(full=True)
    img_idx = 0
    
    # Sắp xếp các dòng text theo thứ tự từ trên xuống dưới (y1)
    lines = sorted(text_instances, key=lambda x: x[1])

    for line in lines:
        content = line[4] # Nội dung text
        q_match = question_pattern.search(content)

        if q_match:
            # Nếu có câu hỏi cũ đang chờ mà vẫn chưa tìm thấy hình trên trang trước
            # (Trường hợp này hiếm nhưng vẫn nên lưu vào list)
            if pending_question:
                all_questions.append(pending_question)

            question_id = int(q_match.group(1))
            pending_question = {
                "id": question_id,
                "img": None,
                "page": page_index
            }

        # Kiểm tra xem có hình ảnh nào nằm SAU vị trí câu hỏi hiện tại không
        # Hoặc nếu là đầu trang mới, mà pending_question vẫn chưa có hình
        if pending_question and img_idx < len(page_images):
            # Logic: Nếu tìm thấy hình, gán cho câu hỏi đang chờ
            xref = page_images[img_idx][0]
            base_image = doc.extract_image(xref)
            
            path = f"{IMAGE_DIR}/{pending_question['id']}.jpg"
            with open(path, "wb") as f:
                f.write(base_image["image"])
            
            pending_question["img"] = path
            img_idx += 1
            image_map[path] = path
            # Sau khi gán hình xong, đẩy câu hỏi vào danh sách chính thức
            all_questions.append(pending_question)
            pending_question = None

# Đẩy câu cuối cùng vào nếu còn sót
if pending_question:
    all_questions.append(pending_question)


if current_question:
    questions.append(current_question)

# save json
with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
    json.dump(all_questions, f, ensure_ascii=False, indent=2)

print("Total questions:", len(all_questions))
print("Questions with images:", len(image_map))