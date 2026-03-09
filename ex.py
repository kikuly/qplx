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
IMAGE_KEYWORDS = re.compile(r"hình|biển báo|xe|sa hình|tình huống", re.IGNORECASE)

for page_index in range(len(doc)):
        page = doc.load_page(page_index)
        blocks = page.get_text("dict")["blocks"]
        
        # 1. Tách riêng Text và Hình ảnh kèm tọa độ
        text_elements = []
        image_elements = []
        
        for b in blocks:
            if b["type"] == 0:  # Text
                for line in b["lines"]:
                    for span in line["spans"]:
                        text_elements.append({
                            "text": span["text"],
                            "y": span["bbox"][1], # Tọa độ y (đỉnh)
                            "bbox": span["bbox"]
                        })
            elif b["type"] == 1:  # Image
                image_elements.append({
                    "y": b["bbox"][1],
                    "bbox": b["bbox"],
                    "ext": b["ext"],
                    "image": b["image"]
                })

        # 2. Duyệt từng dòng text để tìm Câu hỏi
        for i, el in enumerate(text_elements):
            q_match = re.search(r"Câu\s+(\d+)\.", el["text"])
            if q_match:
                qid = int(q_match.group(1))
                full_text = el["text"] # Có thể cộng thêm vài dòng tiếp theo để check keyword
                
                has_img_signal = IMAGE_KEYWORDS.search(full_text)
                
                current_q = {
                    "id": qid,
                    "img": None,
                    "y": el["y"]
                }
                
                # 3. Tìm hình ảnh phù hợp cho câu này
                # Logic: Hình phải nằm DƯỚI câu hiện tại và TRÊN câu tiếp theo (nếu có)
                next_q_y = 9999 # Mặc định là cuối trang
                for next_el in text_elements[i+1:]:
                    if re.search(r"Câu\s+(\d+)\.", next_el["text"]):
                        next_q_y = next_el["y"]
                        break
                
                # Tìm hình trong khoảng (y_câu_hiện_tại, y_câu_tiếp_theo)
                for img in image_elements:
                    if current_q["y"] < img["y"] < next_q_y:
                        # Lưu hình
                        path = f"images1/{qid}.jpg"
                        with open(path, "wb") as f:
                            f.write(img["image"])
                        current_q["img"] = path
                        break # Đã tìm thấy hình cho câu này
                
                all_questions.append(current_q)

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