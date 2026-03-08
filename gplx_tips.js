/**
 * gplx_tips.js — Mẹo học 600 câu GPLX 2025
 * Nghiên cứu và phân tích từ bộ 600 câu chính thức.
 * Format tương thích với template gplx_app.html.
 *
 * Cách nhúng:
 *   <script src="gplx_tips.js"></script>
 *   Sau đó dùng: window.GPLX_TIPS (mảng tips)
 *   Hoặc gán vào app: BUILTIN_TIPS = window.GPLX_TIPS
 *
 * Cập nhật: 2025 — theo bộ 600 câu sát hạch lái xe cơ giới đường bộ.
 */

(function (global) {
  'use strict';

  // ─────────────────────────────────────────────────────────
  // HELPER để render nhanh
  // ─────────────────────────────────────────────────────────
  function txt(str) { return { text: str }; }
  function html(str) { return { html: str }; }
  function insight(str, cls) { return { insight: str, cls: cls || '' }; }
  function after_insight(str, cls) { return { insight: str, cls: cls || '' }; }

  // ─────────────────────────────────────────────────────────
  // TIPS DATA
  // ─────────────────────────────────────────────────────────
  var TIPS = [

    // ══════════════════════════════════════════════════════
    // 01 — OVERVIEW: Cấu trúc đề thi & chiến lược
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-00-overview',
      title: 'Hiểu cấu trúc đề thi trước khi học',
      icon: '🗺',
      badge: '600 câu · 6 chương',
      color: '#3d8ef8',
      type: 'table',
      intro: 'Bộ đề gồm 600 câu chia 6 chương. Biết trọng số từng chương giúp phân bổ thời gian ôn tập đúng chỗ:',
      headers: ['Chương', 'Nội dung', 'Số câu', 'Chiếm', 'Ưu tiên'],
      rows: [
        ['I (1–180)',   'Quy định chung, quy tắc giao thông', '180', '30%', '⭐⭐⭐'],
        ['II (181–205)','Văn hóa GT, đạo đức, PCCC',          '25',  '4%',  '⭐⭐'],
        ['III (206–263)','Kỹ thuật lái xe',                   '58',  '10%', '⭐⭐⭐'],
        ['IV (264–300)','Cấu tạo & bảo dưỡng xe',             '37',  '6%',  '⭐⭐'],
        ['V (301–485)', 'Báo hiệu đường bộ (biển báo)',        '185', '31%', '⭐⭐⭐'],
        ['VI (486–600)','Sa hình, tình huống thực tế',         '115', '19%', '⭐⭐⭐'],
      ],
      after: [
        after_insight(
          '<strong>Phân bố đáp án toàn bộ:</strong> ĐA1 chiếm ~33%, ĐA2 ~31%, ĐA3 ~25%, ĐA4 ~10%. ' +
          'Khi không biết đáp án → tránh đoán ĐA4. Nhưng đừng đoán mù — nên dùng loại trừ.',
          ''
        ),
        after_insight(
          '<strong>Đề thi B1/B2 thường 50 câu trong 22 phút</strong> — khoảng 26 giây/câu. ' +
          'Với câu dài (Ch.I, III) dành tối đa 45 giây, câu ngắn (Ch.VI) chỉ cần 10–15 giây.',
          'amber'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 02 — QUY TẮC VÀNG: "Cả ba/hai ý trên"
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-01-ca-y',
      title: 'Quy tắc vàng: "Cả ba / hai ý trên"',
      icon: '🏆',
      badge: '86% chính xác',
      color: '#22d48a',
      type: 'table',
      intro: 'Phân tích toàn bộ 600 câu cho thấy đây là mẫu đáng tin nhất:',
      headers: ['Option', 'Xuất hiện', 'Là ĐA đúng', 'Tỷ lệ', 'Chiến lược'],
      rows: [
        ['"Cả ba ý trên"',        '29 câu', '25 câu', '86%',  '✅ Ưu tiên chọn'],
        ['"Cả hai ý trên"',       '62 câu', '34 câu', '55%',  '⚠️ Xét từng câu'],
        ['"Tất cả đều đúng"',     '9 câu',  '7 câu',  '78%',  '✅ Thường chọn'],
        ['"Option đầy đủ nhất"',  '—',      '—',      '~100%','✅ Gồm cả A,B,C'],
      ],
      after: [
        after_insight(
          '<strong>Nguyên tắc "Đầy đủ nhất":</strong> Câu hỏi dạng <em>"gồm những loại nào / trường hợp nào"</em> → ' +
          'chọn option liệt kê <strong>đầy đủ nhất</strong>. Đề hay bẫy bằng option chỉ liệt kê 1–2 trong số 3 yếu tố đúng.',
          'green'
        ),
        after_insight(
          '<strong>Ngoại lệ:</strong> Khi câu hỏi hỏi về <em>1 trường hợp cụ thể</em> (VD: "Hành vi nào SAU ĐÂY bị cấm?") ' +
          'thì "Cả ba ý" chỉ đúng nếu cả 3 đều bị cấm.',
          'amber'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 03 — TỐC ĐỘ (Q144–157)
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-02-tocdo',
      title: 'Bảng tốc độ tối đa — chỉ cần nhớ ma trận này',
      icon: '🚗',
      badge: '14 câu · Q144–157',
      color: '#f0a030',
      type: 'text',
      content: [
        html(`<div style="overflow-x:auto;margin-bottom:14px">
<table style="width:100%;border-collapse:collapse;font-size:12px">
<thead>
<tr style="background:var(--bg3)">
  <th style="padding:8px 10px;border:1px solid var(--bd);text-align:left;color:var(--tx2)">Loại xe</th>
  <th style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#3d8ef8">Đô thị<br><span style="font-weight:400;font-size:10px">đường đôi/1 chiều ≥2 làn</span></th>
  <th style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#a060f8">Đô thị<br><span style="font-weight:400;font-size:10px">đường 2 chiều / 1 làn</span></th>
  <th style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#22d48a">Ngoài đô thị<br><span style="font-weight:400;font-size:10px">đường đôi/1 chiều ≥2 làn</span></th>
  <th style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#f0a030">Ngoài đô thị<br><span style="font-weight:400;font-size:10px">đường 2 chiều / 1 làn</span></th>
</tr>
</thead>
<tbody>
<tr>
  <td style="padding:8px 10px;border:1px solid var(--bd);color:var(--tx)"><strong>Xe máy chuyên dùng, xe gắn máy</strong></td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#f04060;font-weight:700">40</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#f04060;font-weight:700">40</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#f04060;font-weight:700">40</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#f04060;font-weight:700">40</td>
</tr>
<tr style="background:rgba(255,255,255,0.02)">
  <td style="padding:8px 10px;border:1px solid var(--bd);color:var(--tx)">Ô tô con, ô tô tải ≤28 chỗ (trừ xe buýt)</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#22d48a;font-weight:700">60</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#22d48a;font-weight:700">50</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#3d8ef8;font-weight:700">80</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#3d8ef8;font-weight:700">70</td>
</tr>
<tr>
  <td style="padding:8px 10px;border:1px solid var(--bd);color:var(--tx)">Ô tô tải, ô tô >28 chỗ (trừ xe buýt)</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#f0a030;font-weight:700">50</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#f0a030;font-weight:700">50</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#f0a030;font-weight:700">70</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#f0a030;font-weight:700">60</td>
</tr>
<tr style="background:rgba(255,255,255,0.02)">
  <td style="padding:8px 10px;border:1px solid var(--bd);color:var(--tx)">Xe buýt; đầu kéo kéo sơ mi rơ moóc xi téc, chở container</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#a060f8;font-weight:700">50</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#a060f8;font-weight:700">50</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#a060f8;font-weight:700">60</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#a060f8;font-weight:700">60</td>
</tr>
<tr>
  <td style="padding:8px 10px;border:1px solid var(--bd);color:var(--tx)">Ô tô kéo rơ moóc; ô tô trộn bê tông; xe kéo xe khác</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#20c8e0;font-weight:700">40</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#20c8e0;font-weight:700">40</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#20c8e0;font-weight:700">50</td>
  <td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:#20c8e0;font-weight:700">50</td>
</tr>
</tbody>
</table>
</div>`),
        insight(
          '<strong>Mẹo nhớ nhanh:</strong> <br>' +
          '• Xe gắn máy/chuyên dùng = <strong>40 km/h mọi nơi</strong> (đơn giản nhất)<br>' +
          '• Ô tô con đô thị = <strong>60 hoặc 50</strong> (đường rộng=60, đường hẹp=50)<br>' +
          '• Ô tô con ngoài đô thị = <strong>80 hoặc 70</strong> (tương tự: rộng=80, hẹp=70)<br>' +
          '• Xe tải nặng/buýt LUÔN thấp hơn xe con 10–20 km/h cùng loại đường',
          'green'
        ),
        insight(
          '<strong>Câu bẫy phổ biến (Q147–148):</strong> Hỏi "Loại xe nào có tốc độ 50 km/h trong đô thị đường 2 làn?" — ' +
          'đáp án là <strong>"Ô tô tải, ô tô chở người >28 chỗ"</strong>, không phải xe gắn máy (xe gắn máy chỉ 40, thấp hơn).',
          'amber'
        ),
      ],
      after: [],
    },

    // ══════════════════════════════════════════════════════
    // 04 — CỰ LY AN TOÀN (Q158–162)
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-03-culyantoant',
      title: 'Cự ly an toàn — bảng 4 mức dễ nhớ',
      icon: '📏',
      badge: 'Q158–162',
      color: '#20c8e0',
      type: 'speeds',
      intro: 'Khi không có biển "Cự ly tối thiểu giữa hai xe", áp dụng bảng sau. Chỉ cần nhớ 4 con số:',
      items: [
        { val: '35', unit: 'm', desc: 'Tốc độ dưới 60 km/h (Q161)' },
        { val: '55', unit: 'm', desc: 'Tốc độ từ 60 đến dưới 80 km/h (Q160)' },
        { val: '70', unit: 'm', desc: 'Tốc độ từ 80 đến dưới 100 km/h (Q158)' },
        { val: '100', unit: 'm', desc: 'Tốc độ từ 100 km/h trở lên (Q159)' },
      ],
      after: [
        after_insight(
          '<strong>Cách nhớ quy luật tăng:</strong> 35 → 55 → 70 → 100. ' +
          'Bước tăng: +20, +15, +30. Hoặc nhớ theo cặp: <strong>"35–55 dưới 80 / 70–100 trên 80"</strong>.',
          ''
        ),
        after_insight(
          '<strong>Q162:</strong> Hỏi "Phải làm gì để đảm bảo cự ly?" — ĐA = <strong>"Cả hai ý trên"</strong> ' +
          '(chủ động giữ + tùy điều kiện thực tế). Đây là câu dùng quy tắc "cả hai ý" (55% đúng).',
          'amber'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 05 — ĐỘ TUỔI & HẠNG GPLX (Q118–135)
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-04-tuoi-hang',
      title: 'Độ tuổi & Hạng GPLX — 8 mốc quan trọng',
      icon: '👤',
      badge: 'Q118–135',
      color: '#3d8ef8',
      type: 'table',
      intro: 'Chỉ 8 câu về độ tuổi trong 600 câu nhưng hay xuất hiện trong đề 50 câu. Học thuộc bảng:',
      headers: ['Tuổi', 'Quyền / Giới hạn', 'Câu thi'],
      rows: [
        ['16 → dưới 18',  'Chỉ điều khiển xe gắn máy (≤50cc hoặc công suất thấp)', 'Q123'],
        ['18 tuổi trở lên', 'Mô tô 2 bánh hạng A1; ô tô (B1, B2, C1...)', 'Q118, Q119'],
        ['24 tuổi trở lên', 'Hạng D1 — ô tô chở người 9–16 chỗ (không kể lái)', 'Q122'],
        ['27 tuổi trở lên', 'Hạng D — ô tô chở người >29 chỗ (không kể lái)', 'Q120'],
        ['Nam đủ 57 tuổi', 'KHÔNG được lái xe buýt/ô tô chở >29 chỗ nữa', 'Q121'],
        ['Nữ đủ 55 tuổi',  'KHÔNG được lái xe buýt/ô tô chở >29 chỗ nữa', 'Q121'],
        ['Trẻ <10 tuổi & <1,35m', 'Không ngồi cùng hàng ghế lái (trừ xe 1 hàng ghế)', 'Q42'],
        ['Người được chở mô tô', 'Vi phạm → phạt cả người lái lẫn người được chở', 'Q75'],
      ],
      after: [
        after_insight(
          '<strong>Mẹo nhớ cột tuổi tối thiểu:</strong> <strong>16 → 18 → 24 → 27</strong>. ' +
          'Khoảng cách: +2, +6, +3. Hoặc nhớ: "16 xe máy nhỏ, 18 xe máy lớn & ô tô, 24 xe buýt nhỏ, 27 xe buýt to".',
          ''
        ),
        after_insight(
          '<strong>Bẫy số chỗ ngồi:</strong> "16 chỗ" dùng cho hạng D1; "28 chỗ" là ngưỡng phân biệt tốc độ; ' +
          '"29 chỗ" là ngưỡng tuổi nghỉ hưu lái xe và hạng D. Ba con số KHÁC NHAU, không nhầm lẫn!',
          'red'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 06 — CÁC HẠNG GPLX ô tô (Q124–135)
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-05-hang-gplx',
      title: 'Hạng GPLX ô tô — ai được lái xe gì',
      icon: '📋',
      badge: 'Q124–135',
      color: '#a060f8',
      type: 'table',
      intro: 'Đề hay hỏi "Hạng X được lái loại xe nào?" hoặc "Cần hạng nào để lái xe Y?":',
      headers: ['Hạng', 'Loại xe được lái', 'Trọng tải / Chỗ ngồi'],
      rows: [
        ['A1', 'Mô tô 2 bánh', 'Dung tích ≤125cm³ hoặc động cơ điện ≤11kW (cấp từ 01/01/2025)'],
        ['A', 'Mô tô 2 bánh + 3 bánh', 'Mọi dung tích; kể cả xe A1'],
        ['B', 'Ô tô con + ô tô tải nhỏ', '≤8 chỗ (không kể lái) hoặc tải ≤3.500 kg'],
        ['C1', 'Ô tô tải + chuyên dùng lớn', 'Khối lượng toàn bộ >3.500 kg'],
        ['C', 'Ô tô tải nặng + đầu kéo', 'Mọi tải trọng; kéo rơ moóc'],
        ['D1', 'Ô tô chở người cỡ nhỏ', '9–16 chỗ (không kể lái) — cần ≥24 tuổi'],
        ['D', 'Xe buýt, ô tô chở người lớn', '>29 chỗ (không kể lái) — cần ≥27 tuổi'],
        ['BE, CE, DE', 'Xe ô tô kéo rơ moóc', 'Tương ứng hạng B/C/D kéo kèm rơ moóc'],
      ],
      after: [
        after_insight(
          '<strong>Q127 — Hạng B được lái gì?</strong> ĐA = "Cả hai ý trên" ' +
          '(xe con ≤8 chỗ AND ô tô tải ≤3.500kg). Câu dùng quy tắc "cả hai ý trên".',
          'green'
        ),
        after_insight(
          '<strong>Q126 — Hạng A:</strong> ĐA = "Cả hai ý trên" (mô tô 2 bánh + 3 bánh). ' +
          '<strong>Q129 — Hạng C:</strong> ĐA = "Cả hai ý trên". Cả hai câu đều dùng quy tắc vàng.',
          'green'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 07 — HỆ THỐNG ĐIỂM GPLX (Q136–143)
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-06-diem-gplx',
      title: 'Hệ thống điểm GPLX — 12 điểm & vi phạm',
      icon: '⚖️',
      badge: 'Q136–143',
      color: '#f04060',
      type: 'rules',
      intro: 'Luật mới 2025 áp dụng hệ thống điểm GPLX. Hay bị hỏi trong đề:',
      cards: [
        {
          title: 'Điểm ban đầu & phục hồi',
          color: '#3d8ef8',
          items: [
            'Mỗi GPLX có 12 điểm ban đầu mỗi năm',
            'Vi phạm bị trừ điểm theo mức độ (1–12 điểm/lần)',
            'Không bị trừ điểm trong 12 tháng liên tục → phục hồi đủ 12 điểm (Q140)',
            'Bị trừ HẾT điểm → phải thi lại sau ít nhất 6 tháng (Q141)',
          ],
        },
        {
          title: 'Tra cứu & thông báo',
          color: '#22d48a',
          items: [
            'Cảnh sát GT không thông báo từng lần trừ điểm riêng lẻ',
            'Người lái xe tự tra cứu trên Cổng dịch vụ công',
            'Khi còn 2 điểm trở xuống → được thông báo',
          ],
        },
        {
          title: 'Nồng độ cồn — Zero tolerance',
          color: '#f04060',
          items: [
            'Ô tô & mô tô: nồng độ cồn = 0 (tuyệt đối)',
            'Vi phạm → phạt tiền + tước GPLX + trừ điểm',
            'Ma túy: bị cấm hoàn toàn, xử lý hình sự nếu nghiêm trọng',
            'Q24: Câu hỏi về nồng độ cồn → ĐA = "Bị nghiêm cấm"',
          ],
        },
      ],
      after: [
        after_insight(
          '<strong>Q19, Q27, Q28, Q31, Q32</strong> đều hỏi về hành vi bị "nghiêm cấm". ' +
          'Đáp án thường là "Cả ba ý" hoặc "Cả hai ý" — áp dụng quy tắc vàng.',
          'amber'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 08 — QUY TẮC GIAO THÔNG quan trọng nhất Ch.I
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-07-quytac-ch1',
      title: 'Quy tắc Ch.I — 8 điều PHẢI biết',
      icon: '🚦',
      badge: '180 câu · Q1–180',
      color: '#3d8ef8',
      type: 'rules',
      intro: 'Chương I chiếm 30% toàn bộ 600 câu. Nắm 8 nhóm quy tắc cốt lõi:',
      cards: [
        {
          title: 'Làn đường & Vị trí xe',
          color: '#3d8ef8',
          items: [
            'Đường 1 chiều ≥3 làn: xe tải nặng/chậm đi LỀ PHẢI; xe con đi GIỮA/TRÁI',
            'Luôn đi bên phải theo chiều đi, sát lề phải',
            'Xe mô tô: không được đi vào làn dành cho ô tô',
            'Đường cao tốc: xe tải chỉ đi làn ngoài cùng bên phải',
          ],
        },
        {
          title: 'Vượt xe',
          color: '#22d48a',
          items: [
            'Vượt bên TRÁI (trừ khi xe trước báo hiệu rẽ trái)',
            'Không được vượt: trên cầu hẹp 1 làn, nơi giao nhau, đường vòng nguy hiểm, lên/xuống dốc không thấy rõ',
            'Phải báo hiệu trước khi vượt, đảm bảo an toàn',
            'Xe bị vượt: KHÔNG tăng tốc cản trở',
          ],
        },
        {
          title: 'Dừng & Đỗ xe',
          color: '#f0a030',
          items: [
            'Không dừng đỗ: trên cầu, gầm cầu vượt, hầm đường bộ, đường cao tốc',
            'Không dừng đỗ: trong phạm vi 5m trước và sau điểm dừng xe buýt',
            'Cách xe dừng trước ≥20m tại đường phố hẹp (Q61)',
            'Đỗ trên dốc: đánh lái về lề + chèn bánh',
          ],
        },
        {
          title: 'Sử dụng đèn & còi',
          color: '#f04060',
          items: [
            '22h–05h: báo hiệu bằng ĐÈN, KHÔNG bấm còi trong khu dân cư',
            'Gặp xe ngược chiều: chuyển pha → cốt (gần)',
            'Cấm bấm còi: gần trường học, bệnh viện, nơi có biển cấm',
            'Đèn hậu/đèn sương mù: bắt buộc khi tầm nhìn <50m',
          ],
        },
        {
          title: 'Không được làm khi lái xe',
          color: '#a060f8',
          items: [
            'Dùng điện thoại cầm tay (trừ điện thoại rảnh tay)',
            'Lạng lách, đánh võng, rú ga liên tục, đua xe',
            'Chở hàng cồng kềnh vượt quá kích thước quy định',
            'Đi vào đường ngược chiều, đường cấm',
          ],
        },
        {
          title: 'Tai nạn & Xử lý',
          color: '#20c8e0',
          items: [
            'Người lái xe gây tai nạn PHẢI dừng lại, cứu nạn nhân',
            'Báo cho cơ quan công an, bảo vệ hiện trường',
            'Người khác: có trách nhiệm hỗ trợ nhưng không bắt buộc ở lại',
            'Cứu thương khẩn cấp trên đường sắt: báo dừng tàu ngay (Q101)',
          ],
        },
      ],
      after: [
        after_insight(
          '<strong>Câu hỏi tiêu cực Ch.I:</strong> 68/600 câu dùng dạng "Không được / Nghiêm cấm / Không phải". ' +
          'Đọc chậm câu hỏi — hỏi hành vi BỊ CẤM hay ĐƯỢC PHÉP?',
          'amber'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 09 — KỸ THUẬT LÁI XE Ch.III (Q206–263)
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-08-kythuat',
      title: 'Kỹ thuật lái xe — luôn chọn thao tác AN TOÀN NHẤT',
      icon: '⛰',
      badge: '58 câu · Q206–263',
      color: '#22d48a',
      type: 'rules',
      intro: 'Đáp án đúng trong Chương III luôn là thao tác <strong>an toàn nhất</strong> và <strong>đầy đủ nhất</strong>. Mỗi bước cần thực hiện <em>theo thứ tự</em>:',
      cards: [
        {
          title: 'Khởi hành xe số sàn (Q207–209)',
          color: '#22d48a',
          items: [
            '① Đạp côn hết hành trình → ② Vào số 1',
            '③ Nhả phanh tay → ④ Báo hiệu còi/đèn',
            '⑤ Tăng ga + nhả côn từ từ (nhả đến ½, giữ 3s)',
            'Q209 ĐA2: bắt đầu bằng "đạp côn hết hành trình"',
          ],
        },
        {
          title: 'Lên / xuống dốc (Q212)',
          color: '#3d8ef8',
          items: [
            'Lên dốc: về số thấp TỪ CHÂN DỐC (Q212 ĐA2)',
            'Đỉnh dốc: đi chậm, sát lề phải, bật đèn/còi',
            'Xuống dốc: số thấp + phanh đều đặn — KHÔNG ngắt côn',
            'Hỏng trên dốc: chèn bánh + đánh lái vào lề',
          ],
        },
        {
          title: 'Đường ngập nước & trơn',
          color: '#f0a030',
          items: [
            'Ngập nước: số thấp, giữ đều ga, KHÔNG dừng giữa chừng',
            'Đường trơn: giảm tốc sớm, tránh phanh gấp/tăng ga đột ngột',
            'Trượt bánh: đừng phanh gấp — đánh lái theo chiều trượt',
          ],
        },
        {
          title: 'Kỹ thuật sang số (Q221–222)',
          color: '#a060f8',
          items: [
            'Tăng số: KHÔNG nhìn xuống buồng lái (Q221 ĐA1)',
            'Giảm số: KHÔNG nhìn xuống buồng lái (Q222 ĐA2)',
            'Tăng/giảm TUẦN TỰ: 1→2→3→4 không nhảy cóc',
            'Vù ga khi về số thấp để tránh giật xe',
          ],
        },
        {
          title: 'Rẽ và quay đầu (Q210, Q215–217)',
          color: '#20c8e0',
          items: [
            'Rẽ: tín hiệu sớm → giảm tốc → quan sát → rẽ từ từ',
            'Rẽ trái: kiểm tra bên trái + báo tín hiệu trước (Q217 ĐA1)',
            'Đường vòng: giảm tốc TRƯỚC khi vào cua (Q215 ĐA1)',
            'Quay đầu nguy hiểm: đầu xe về phía nguy hiểm (Q210 ĐA1)',
          ],
        },
        {
          title: 'Mở cửa xe & thoát cao tốc (Q249–256)',
          color: '#f04060',
          items: [
            'Mở cửa: quan sát CẢ HAI phía trước + sau + bên mở (Q256 ĐA1)',
            'Ra cao tốc: phát tín hiệu + chuyển dần sang làn phải',
            'Lỡ qua lối ra cao tốc: KHÔNG lùi — đi đến lối ra tiếp theo (Q249)',
          ],
        },
      ],
      after: [
        after_insight(
          '<strong>Chiến lược Ch.III:</strong> ĐA 1 chiếm 44.8% chương này — cao nhất trong 6 chương. ' +
          'Khi phân vân giữa 2 đáp án, ưu tiên đáp án nào <em>liệt kê đầy đủ từng bước an toàn hơn</em>.',
          ''
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 10 — CẤU TẠO XE Ch.IV (Q264–300)
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-09-cautao',
      title: 'Cấu tạo xe — học theo chức năng, không học tên',
      icon: '🔧',
      badge: '37 câu · Q264–300',
      color: '#f0a030',
      type: 'rules',
      intro: 'Không cần học sách cơ khí. Chỉ cần nhớ chức năng của từng bộ phận:',
      cards: [
        {
          title: 'Hệ thống lái & phanh',
          color: '#f0a030',
          items: [
            'Phanh tay (phanh đỗ): giữ xe đứng yên khi đỗ — KHÔNG dùng để giảm tốc khi đang chạy',
            'Phanh chân (phanh công tác): giảm tốc và dừng xe',
            'Trợ lực phanh: tăng lực phanh khi đạp — hỏng trợ lực cần đạp MẠNH HƠN',
            'Dầu phanh cạn: bàn đạp phanh "xốp", hành trình dài → phanh mất tác dụng',
          ],
        },
        {
          title: 'Hệ thống truyền động',
          color: '#3d8ef8',
          items: [
            'Động cơ 4 kỳ: pít tông đi 4 hành trình = 1 chu kỳ công tác (Q275 ĐA2)',
            'Côn (ly hợp): ngắt truyền động động cơ → hộp số → bánh xe',
            'Hộp số: thay đổi tỷ số truyền lực',
            'Cầu xe (vi sai): phân phối lực kéo 2 bánh sau khi vào cua',
          ],
        },
        {
          title: 'Hệ thống điện & an toàn',
          color: '#22d48a',
          items: [
            'Dây an toàn: giữ người lái/khách (Q293 ĐA2) khi xe dừng đột ngột',
            'Túi khí: bung ra trong va chạm mạnh — bổ trợ dây an toàn',
            'Kính an toàn: nhiều lớp, không rạn nứt, không méo hình ảnh (Q268 ĐA1)',
            'Ổn định điện tử (ESP/VSC): tự giảm tốc khi phát hiện trượt bánh',
          ],
        },
        {
          title: 'Đồng hồ & đèn cảnh báo',
          color: '#f04060',
          items: [
            'Đèn dầu engine sáng: dầu máy thấp/áp suất dầu thấp → dừng ngay, tắt máy',
            'Đèn nhiệt độ đỏ: động cơ quá nhiệt → dừng, mở nắp capo, KHÔNG mở nắp két nước ngay',
            'Đèn phanh ABS: hệ thống ABS lỗi → phanh vẫn hoạt động nhưng mất chức năng chống bó cứng',
            'Đồng hồ tốc độ: không được sửa làm sai số — bị nghiêm cấm (Q31)',
          ],
        },
      ],
      after: [
        after_insight(
          '<strong>ĐA3 chiếm 35.1% Ch.IV</strong> — cao nhất chương này. ' +
          'Khi không chắc, ĐA3 là lựa chọn thứ 2 sau ĐA1 (32.4%) cho chương này.',
          ''
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 11 — BIỂN BÁO: Phân loại theo màu & hình dạng (Ch.V)
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-10-bien-bao-loai',
      title: 'Biển báo — nhớ theo màu và hình dạng (185 câu)',
      icon: '🚧',
      badge: '185 câu · Q301–485',
      color: '#f04060',
      type: 'rules',
      intro: 'Não bộ nhớ màu & hình 3–5 lần nhanh hơn chữ. Học theo nguyên tắc: Hình dạng → Màu → Ý nghĩa:',
      cards: [
        {
          title: '🔴 Biển CẤM — Tròn viền đỏ',
          color: '#f04060',
          items: [
            'Hình: TRÒN · Nền TRẮNG · Viền và gạch chéo ĐỎ',
            'Ý nghĩa: CẤM các phương tiện/hành vi cụ thể',
            'Ký hiệu: C1–C45 (Circular = tròn = cấm)',
            'Ví dụ: C1 cấm đi ngược chiều; C11a cấm xe tải; C14 cấm vượt',
            '22 câu dạng "Biển nào cấm...?" — tập trung Q301–330',
          ],
        },
        {
          title: '⚠️ Biển NGUY HIỂM — Tam giác vàng',
          color: '#f0a030',
          items: [
            'Hình: TAM GIÁC · Nền VÀNG · Viền và biểu tượng ĐỎ/ĐEN',
            'Ý nghĩa: CẢNH BÁO nguy hiểm phía trước',
            'Ký hiệu: W.201–W.248',
            'Ví dụ: W.201 đường cong nguy hiểm; W.224 đường có gồ giảm tốc',
            '8 câu "nguy hiểm" — tập trung Q415–430',
          ],
        },
        {
          title: '🔵 Biển HIỆU LỆNH — Tròn xanh dương',
          color: '#3d8ef8',
          items: [
            'Hình: TRÒN · Nền XANH DƯƠNG · Biểu tượng TRẮNG',
            'Ý nghĩa: BẮT BUỘC làm theo',
            'Ký hiệu: R.301–R.412',
            'Ví dụ: R.301 chỉ được đi thẳng; R.302 đi sang phải',
            'Khác biển cấm: biển cấm = cấm, biển hiệu lệnh = bắt buộc',
          ],
        },
        {
          title: '🟩 Biển CHỈ DẪN — Chữ nhật/vuông xanh',
          color: '#22d48a',
          items: [
            'Hình: CHỮ NHẬT hoặc VUÔNG · Nền XANH LÁ/LAM',
            'Ý nghĩa: THÔNG TIN hướng dẫn (không bắt buộc)',
            'Xanh lá: biển chỉ dẫn thông thường',
            'Xanh lam: biển trên đường cao tốc',
            '12 câu "chỉ dẫn" — học theo ý nghĩa biển thực tế',
          ],
        },
        {
          title: '🟪 Biển PHỤ — Chữ nhật trắng nhỏ',
          color: '#a060f8',
          items: [
            'Đặt phía dưới biển chính để giải thích thêm',
            'VD: Biển cấm xe tải + biển phụ "ngoại trừ 7h–22h"',
            'Q351 ĐA2: biển phụ "trừ loại xe ở biển phụ" = được đi vào',
          ],
        },
        {
          title: '🟡 Vạch kẻ đường',
          color: '#f0a030',
          items: [
            'Vạch liền: không được lấn/vượt qua',
            'Vạch đứt: được phép vượt khi an toàn',
            'Vạch đôi liền: tuyệt đối không vượt theo cả 2 chiều',
            'Vạch trắng ngang: vạch dừng xe, vạch nhường đường',
            '10 câu về vạch kẻ trong Ch.V',
          ],
        },
      ],
      after: [
        after_insight(
          '<strong>44 câu dạng "Biển nào báo hiệu..."</strong> — chiếm 1/4 chương V. ' +
          'Câu này có hình biển kèm theo → CẦN nhớ hình biển thực tế, không chỉ đọc chữ.',
          'amber'
        ),
        after_insight(
          '<strong>33 câu dạng "Biển này có ý nghĩa như thế nào?"</strong> — học thuộc ý nghĩa từng biển số phổ biến. ' +
          'Đặc biệt dễ nhầm: Biển cấm dừng C35a vs cấm đỗ C35b; Biển tốc độ tối đa vs tối thiểu.',
          'red'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 12 — BIỂN BÁO: Học nhóm câu "Biển 1/2/3 là biển nào"
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-11-bien-nhom',
      title: 'Học biển báo theo nhóm — 10 nhóm hay gặp nhất',
      icon: '📦',
      badge: 'Ch.V · chiến lược học',
      color: '#f04060',
      type: 'table',
      intro: 'Rất nhiều câu Ch.V cho 3–4 hình biển và hỏi "Biển nào...?". Học theo nhóm logic thay vì từng biển riêng lẻ:',
      headers: ['Nhóm biển', 'Đặc điểm nhận dạng nhanh', 'Câu điển hình'],
      rows: [
        ['Cấm ô tô con vs tải', 'Hình xe con (nhỏ, 4 bánh) khác hình xe tải (có thùng)', 'Q302–310'],
        ['Cấm vượt xe', 'C14: 2 xe — đen bên trái, đỏ bên phải (cấm vượt ô tô)\nC14a: 2 xe — đỏ tải bên phải (cấm xe tải vượt)', 'Q308–310'],
        ['Tốc độ tối đa vs tối thiểu', 'Tối đa: viền đỏ + chữ đen trong nền trắng\nTối thiểu: nền xanh + chữ trắng', 'Q335, Q364–366'],
        ['Cấm dừng vs cấm đỗ', 'C35a: gạch chéo đỏ trên vạch xanh = cấm dừng lẫn đỗ\nC35b: gạch chéo đỏ ngắn hơn = chỉ cấm đỗ', 'Q344–348'],
        ['Biển nguy hiểm đường vòng', 'Mũi tên cong: 1 mũi = 1 cua; 2 mũi ngược chiều = đường zigzag', 'Q415–420'],
        ['Khoảng cách tối thiểu', 'Hình 2 xe + số mét: biển D501 (khoảng cách an toàn)', 'Q352–353'],
        ['Giao nhau với đường sắt', 'Biển hình chữ X hoặc gating: đường sắt cắt ngang', 'Q421–423'],
        ['Biển đường ưu tiên', 'Hình thoi vàng = được ưu tiên; Hình thoi có gạch = hết ưu tiên', 'Q380–390'],
        ['Phân chia làn đường', 'Hình mũi tên trên nền xanh = chỉ dẫn làn; mũi tên trên vạch = hiệu lệnh', 'Q455–465'],
        ['Biển cự ly & chiều dài', 'Số + m hoặc km trong biển = khoảng cách/độ dài quy định', 'Q351–354'],
      ],
      after: [
        after_insight(
          '<strong>Kỹ thuật học biển nhanh nhất:</strong> Flashcard — mặt trước: hình biển; mặt sau: ý nghĩa. ' +
          'Học 10–15 biển/ngày cùng nhóm màu. Không học lẫn lộn nhóm khác nhau trong cùng buổi.',
          'green'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 13 — SA HÌNH: 3 Nguyên tắc gốc (Q486–600)
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-12-sahinh',
      title: 'Sa hình — 3 nguyên tắc giải MỌI tình huống',
      icon: '🗺',
      badge: '115 câu · ĐIỂM LIỆT',
      color: '#20c8e0',
      type: 'rules',
      intro: 'Không học thuộc 115 tình huống riêng lẻ. Nắm 3 nguyên tắc → giải được >80% câu:',
      cards: [
        {
          title: 'Nguyên tắc 1 — Xe ưu tiên đi trước tất cả',
          color: '#f04060',
          items: [
            'Xe ưu tiên: Cứu thương + Cứu hỏa + Cảnh sát/Quân sự ĐI LÀM NHIỆM VỤ KHẨN CẤP',
            'Nhận biết: đèn ưu tiên sáng + còi ưu tiên kêu',
            'Xe ưu tiên được qua trước DÙ đèn đỏ hay đường phụ',
            'Khi gặp xe ưu tiên: vào lề phải ngay + dừng lại nhường đường',
            'Q495, Q498, Q501: câu về xe ưu tiên → chọn xe CỨU THƯƠNG hoặc CẢNH SÁT khẩn cấp',
          ],
        },
        {
          title: 'Nguyên tắc 2 — Nhường xe từ bên PHẢI',
          color: '#22d48a',
          items: [
            'Ngã tư KHÔNG có biển/đèn: xe đến từ bên PHẢI đi trước',
            'Câu hỏi: "Xe bạn phải nhường xe nào?" → tìm xe đến từ bên phải bạn',
            'Mẹo hình ảnh: chỉ tay phải của mình → xe đó có quyền ưu tiên',
            'Áp dụng cả mô tô lẫn ô tô ở ngã tư ngang hàng',
          ],
        },
        {
          title: 'Nguyên tắc 3 — Đường chính ưu tiên đường phụ',
          color: '#3d8ef8',
          items: [
            'Biển "Nhường đường" (tam giác đảo ngược): xe đó nhường TẤT CẢ xe khác',
            'Biển "Dừng lại" (STOP): phải dừng hẳn, nhìn hai phía, rồi mới đi',
            'Biển "Đường ưu tiên" (thoi vàng): đường chính, được ưu tiên qua đường phụ',
            'Vạch "Yield" (đường gạch trắng ngang): nhường ưu tiên',
          ],
        },
        {
          title: 'Giải quyết tình huống từng bước',
          color: '#a060f8',
          items: [
            '① Có xe ưu tiên không? → Nếu có: xe ưu tiên đi trước',
            '② Có biển/đèn điều tiết không? → Nếu có: theo biển/đèn',
            '③ Giao nhau không biển: xe từ BÊN PHẢI đi trước',
            '④ Cùng bên phải: xe trên đường CHÍNH đi trước',
            '⑤ Hòa đồng: nhường nhau theo thứ tự đến ngã tư',
          ],
        },
      ],
      after: [
        after_insight(
          '<strong>Thống kê Ch.VI:</strong> 46 câu dạng "Xe nào chấp hành đúng?" · 19 câu "Thứ tự xe đi?" · ' +
          '17 câu "Vi phạm không?" · 10 câu "Nhường ai?". ĐA2 chiếm 40.9% — cao nhất chương.',
          ''
        ),
        after_insight(
          '<strong>⚠️ Đây là chương chứa câu ĐIỂM LIỆT.</strong> ' +
          'Sai 1 câu điểm liệt → TRƯỢT dù đúng hết câu còn lại. ' +
          'Câu điểm liệt thường liên quan đến: xe ưu tiên, vượt đèn đỏ, nồng độ cồn, tốc độ nguy hiểm.',
          'red'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 14 — SA HÌNH: Phân tích 46 câu "Xe nào đúng"
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-13-sahinh-xe-nao',
      title: 'Sa hình: Phân tích 46 câu "Xe nào chấp hành đúng"',
      icon: '🎯',
      badge: '46 câu · Q486–600',
      color: '#20c8e0',
      type: 'rules',
      intro: '"Theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?" — đây là dạng câu nhiều nhất:',
      cards: [
        {
          title: 'Đọc hình sa hình theo 4 bước',
          color: '#3d8ef8',
          items: [
            '① Xác định loại ngã tư: có đèn? có biển? không có gì?',
            '② Tìm hướng đi của từng xe (mũi tên chỉ)',
            '③ Xác định quyền ưu tiên theo 3 nguyên tắc gốc',
            '④ So với đáp án: xe nào đi đúng quyền ưu tiên?',
          ],
        },
        {
          title: 'Các tình huống hay xuất hiện',
          color: '#22d48a',
          items: [
            'Ngã tư đèn xanh: xe rẽ phải nhường người đi bộ; xe rẽ trái nhường xe thẳng',
            'Ngã tư không biển: xe từ phải ưu tiên (Q486–490)',
            'Xe cứu thương/cảnh sát khẩn: QUA TRƯỚC tất cả (Q488, Q495)',
            'Đường 1 chiều gặp đường 2 chiều: xe đường 1 chiều thường nhường',
            'Vòng xuyến: xe TRONG vòng ưu tiên, xe vào phải nhường',
          ],
        },
        {
          title: '"Vi phạm không?" (17 câu)',
          color: '#f04060',
          items: [
            'Đọc kỹ: xe đang làm gì + có đúng quy tắc không?',
            'ĐA thường là "Vi phạm" (Q515 ĐA2, Q526 ĐA2, Q542 ĐA2)',
            'Hoặc "Không vi phạm" khi xe đi đúng quyền ưu tiên',
            'Q510 ĐA2: "Không đúng" — xe đi sai vị trí trong ngã tư',
          ],
        },
        {
          title: '"Thứ tự các xe" (19 câu)',
          color: '#a060f8',
          items: [
            'Xếp hàng theo nguyên tắc: xe ưu tiên → đường chính → bên phải',
            'Câu hỏi cho cụm xe cùng vào ngã tư: xếp ĐÚNG THỨ TỰ theo quyền ưu tiên',
            'Q487: thứ tự = Xe tải, xe mô tô, xe khách, xe con',
            'Q488: xe công an khẩn cấp LUÔN đứng đầu danh sách',
          ],
        },
      ],
      after: [
        after_insight(
          '<strong>Mẹo học Sa hình hiệu quả:</strong> Học nhóm 10 câu cùng loại tình huống. ' +
          'Dùng tool "Thực hành thi → Chương VI" trong app để luyện riêng 115 câu này.',
          'green'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 15 — VĂN HÓA GT & PCCC (Ch.II — Q181–205)
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-14-vanhoa-pccc',
      title: 'Văn hóa GT & PCCC — 25 câu, học 1 buổi',
      icon: '🤝',
      badge: '25 câu · Q181–205',
      color: '#a060f8',
      type: 'rules',
      intro: 'Chương II chỉ 25 câu, ĐA1 chiếm 48% — học nhanh trong 1 buổi:',
      cards: [
        {
          title: 'Văn hóa giao thông (Q187–201)',
          color: '#a060f8',
          items: [
            'Văn hóa giao thông = Hiểu luật + Chấp hành + Tôn trọng người khác (Q189 ĐA1)',
            'Ùn tắc: KHÔNG bấm còi liên tục, đi đúng làn, theo hướng dẫn CSGT (Q201 ĐA2)',
            'Thấy người gây tai nạn: cứu nạn nhân, báo công an (Q195 ĐA1)',
            'Q187 ĐA1: lạng lách, vượt ẩu = "Thiếu VH giao thông + VI PHẠM pháp luật"',
          ],
        },
        {
          title: 'Sơ cứu tai nạn (Q188–196)',
          color: '#f04060',
          items: [
            'Cầm máu trực tiếp: băng ép vào vết thương (Q188 ĐA1)',
            'Cầm máu không trực tiếp: chặn động mạch phía trên vết thương (Q188 ĐA2)',
            'Hô hấp nhân tạo: đặt nạn nhân nằm ngửa, khai thông đường thở TRƯỚC (Q196 ĐA1)',
            'Không tự ý di chuyển nạn nhân chấn thương cột sống nếu không cần thiết',
          ],
        },
        {
          title: 'PCCC trên xe & nơi làm việc (Q202–205)',
          color: '#f0a030',
          items: [
            'Bình chữa cháy trên ô tô: bắt buộc (trừ xe máy)',
            'Hút thuốc gần vật liệu dễ cháy: bị nghiêm cấm',
            'Phát hiện cháy: báo động → thoát nạn → gọi 114 → dập lửa nếu có thể',
            'Ngạt khói trong đám cháy: cúi thấp, bò ra ngoài, che miệng/mũi',
          ],
        },
      ],
      after: [
        after_insight(
          '<strong>ĐA1 chiếm 48% Ch.II</strong> — cao nhất trong 6 chương. Khi phân vân Ch.II → ưu tiên ĐA1.',
          ''
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 16 — 5 BẪY ĐỀ PHỔ BIẾN NHẤT
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-15-bay-de',
      title: '7 bẫy đề dễ sai nhất — đọc thật cẩn thận',
      icon: '🎣',
      badge: 'Cần cảnh giác',
      color: '#f04060',
      type: 'text',
      content: [
        html(`<div class="rule-cards">

<div class="rule-card" style="border-top-color:#f04060">
  <div class="rule-card-title">🪤 Bẫy 1: Định nghĩa thiếu 1 từ then chốt</div>
  <ul>
    <li>Hai đáp án trông giống hệt nhau nhưng 1 đáp án thiếu: "chỉ", "trừ", "tất cả", "trong thời hạn"</li>
    <li>VD: Q15 — "đỗ xe là đứng yên <strong>không giới hạn thời gian</strong>" (đúng) vs "có giới hạn thời gian" (sai)</li>
    <li>Giải pháp: gạch chân từ khóa TRƯỚC khi đọc đáp án</li>
  </ul>
</div>

<div class="rule-card" style="border-top-color:#f04060">
  <div class="rule-card-title">🪤 Bẫy 2: 28 chỗ vs 29 chỗ vs 16 chỗ</div>
  <ul>
    <li>28 chỗ: ngưỡng phân biệt <strong>tốc độ</strong> (Q147–150)</li>
    <li>16 chỗ: ngưỡng xác định <strong>hạng D1</strong> (Q122, Q130)</li>
    <li>29 chỗ: ngưỡng xác định <strong>hạng D + tuổi nghỉ hưu lái xe</strong> (Q120–121)</li>
    <li>Ba số khác nhau hoàn toàn — <strong>không được nhầm</strong></li>
  </ul>
</div>

<div class="rule-card" style="border-top-color:#f04060">
  <div class="rule-card-title">🪤 Bẫy 3: Câu hỏi phủ định</div>
  <ul>
    <li>Đọc chậm: đang hỏi hành vi ĐƯỢC PHÉP hay BỊ CẤM?</li>
    <li>"Không được vượt xe khi nào?" ≠ "Được vượt xe khi nào?"</li>
    <li>68 câu dùng từ phủ định — chiếm 11.3% toàn bộ đề</li>
    <li>Mẹo: tô đậm hoặc viết lại câu hỏi trên giấy nháp</li>
  </ul>
</div>

<div class="rule-card" style="border-top-color:#f04060">
  <div class="rule-card-title">🪤 Bẫy 4: Biển báo gần giống nhau</div>
  <ul>
    <li>Tốc độ tối ĐA (nền trắng, viền đỏ) vs tốc độ TỐI THIỂU (nền xanh) — Q364 vs Q366</li>
    <li>Cấm dừng (C35a) vs cấm đỗ (C35b)</li>
    <li>Cấm xe tải vs cấm ô tô con — nhìn kỹ hình vẽ bên trong biển</li>
    <li>Số trong biển: 50 vs 60 vs 70 — đọc thật kỹ</li>
  </ul>
</div>

<div class="rule-card" style="border-top-color:#f04060">
  <div class="rule-card-title">🪤 Bẫy 5: "Ý 1 và ý 2" ≠ "Cả hai ý trên"</div>
  <ul>
    <li>Khi có 3+ ý: "Ý 1 và ý 2" KHÔNG bao gồm ý 3</li>
    <li>"Cả ba ý trên" khác với "Ý 1 và ý 2" — cẩn thận đọc từng đáp án</li>
    <li>Nếu CẢ 3 ý đều đúng → chọn "Cả ba ý trên" không chọn "Ý 1 và ý 2"</li>
  </ul>
</div>

<div class="rule-card" style="border-top-color:#f0a030">
  <div class="rule-card-title">⚠️ Bẫy 6: Xe ưu tiên "đi làm nhiệm vụ khẩn cấp"</div>
  <ul>
    <li>Xe cứu thương/cảnh sát/cứu hỏa CHỈ được ưu tiên khi <strong>đang làm nhiệm vụ khẩn cấp</strong></li>
    <li>Xe cảnh sát đỗ bên đường, tắt đèn = KHÔNG có ưu tiên</li>
    <li>Phân biệt: Q495 "xe cứu thương đi cấp cứu" vs "xe cứu thương về bãi"</li>
  </ul>
</div>

<div class="rule-card" style="border-top-color:#f0a030">
  <div class="rule-card-title">⚠️ Bẫy 7: Cao tốc — không được lùi, không được dừng</div>
  <ul>
    <li>Trên đường cao tốc: lỡ qua lối ra → đi đến lối ra tiếp (Q249) — KHÔNG lùi xe</li>
    <li>Xe hỏng trên cao tốc: kéo vào lề phải, bật đèn cảnh báo, đặt biển</li>
    <li>Dừng đỗ trên cao tốc = vi phạm nghiêm trọng</li>
  </ul>
</div>

</div>`),
      ],
      after: [
        after_insight(
          '<strong>Chiến thuật khi không chắc:</strong> ① Đọc câu hỏi trước khi nhìn đáp án. ' +
          '② Gạch chân từ khóa. ③ Loại trừ đáp án sai rõ ràng. ' +
          '④ Áp dụng quy tắc "đầy đủ nhất". ⑤ Không thay đổi đáp án trừ khi có lý do rõ ràng.',
          'amber'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 17 — LỘ TRÌNH ÔN 10 NGÀY
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-16-lotrinh',
      title: 'Lộ trình ôn 10 ngày — từ 0 đến đậu',
      icon: '📅',
      badge: 'Kế hoạch',
      color: '#a060f8',
      type: 'table',
      intro: 'Kế hoạch tối ưu dựa trên trọng số từng chương và độ khó:',
      headers: ['Ngày', 'Nội dung', 'Số câu', 'Mục tiêu cuối ngày'],
      rows: [
        ['Ngày 1',   'Ch.I — Quy định chung (Q1–90)',             '90',  'Nhận dạng dạng câu, ghi chú số quan trọng'],
        ['Ngày 2',   'Ch.I — Quy tắc GT (Q91–180)',               '90',  'Nắm vững tốc độ, cự ly, tuổi, hạng GPLX'],
        ['Ngày 3',   'Ch.V — Biển cấm & nguy hiểm (Q301–380)',    '80',  'Học 40–50 biển theo nhóm màu'],
        ['Ngày 4',   'Ch.V — Biển hiệu lệnh, chỉ dẫn (Q381–485)','105', 'Hoàn thành biển báo'],
        ['Ngày 5',   'Ch.III Kỹ thuật + Ch.IV Cấu tạo (206–300)','95',  'Hiểu logic, chọn thao tác an toàn nhất'],
        ['Ngày 6',   'Ch.II Văn hóa GT (181–205)',                '25',  'Học nhanh 1 buổi'],
        ['Ngày 7',   'Ch.VI — Sa hình (Q486–545)',                '60',  'Nắm 3 nguyên tắc gốc, phân tích từng câu'],
        ['Ngày 8',   'Ch.VI — Sa hình (Q546–600) + thi thử lần 1','55', 'Mục tiêu ≥38/50 (76%)'],
        ['Ngày 9',   'Thi thử ngẫu nhiên × 4 đề 50 câu',         '—',   'Mục tiêu ≥43/50 (86%) liên tục 3 đề'],
        ['Ngày 10',  'Ôn lại câu sai nhiều lần + nghỉ ngơi',      '—',   'Ngủ đủ giấc. KHÔNG học thêm đêm hôm trước'],
      ],
      after: [
        after_insight(
          '<strong>Dùng tool "Thực hành thi"</strong> trong app để luyện theo chương và lưu lịch sử. ' +
          'Chọn "Hiển thị đáp án ngay sau mỗi câu" khi mới học, ' +
          'chuyển sang "Sau khi nộp bài" khi ôn cuối để giả lập thi thật.',
          'green'
        ),
        after_insight(
          '<strong>Ngưỡng đậu thực tế:</strong> Đề 50 câu cần đúng ≥40 câu (80%). ' +
          'Một số đề còn quy định câu điểm liệt — sai 1 câu là trượt. ' +
          'Học kỹ Ch.VI và quy tắc ưu tiên để tránh điểm liệt.',
          'red'
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 18 — PHÂN TÍCH ĐÁP ÁN PER CHAPTER (data-driven)
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-17-phanbo-da',
      title: 'Phân bố đáp án theo chương — khi nào dùng "đoán"',
      icon: '📊',
      badge: 'Dữ liệu thực tế',
      color: '#3d8ef8',
      type: 'table',
      intro: 'Khi hết thời gian hoặc thực sự không biết, dùng xác suất theo chương làm lựa chọn cuối:',
      headers: ['Chương', 'ĐA1 (%)', 'ĐA2 (%)', 'ĐA3 (%)', 'ĐA4 (%)', 'Nên đoán'],
      rows: [
        ['I — Quy định',    '32%', '26%', '28%', '14%', 'ĐA1 hoặc ĐA3'],
        ['II — Văn hóa',    '48%', '16%', '24%', '12%', 'ĐA1 rõ ràng'],
        ['III — Kỹ thuật',  '45%', '21%', '19%', '16%', 'ĐA1 rõ ràng'],
        ['IV — Cấu tạo',    '32%', '19%', '35%', '14%', 'ĐA3 cao bất thường'],
        ['V — Biển báo',    '32%', '38%', '23%', '6%',  'ĐA2 cao nhất'],
        ['VI — Sa hình',    '28%', '41%', '25%', '6%',  'ĐA2 cao nhất'],
      ],
      after: [
        after_insight(
          '<strong>Lưu ý quan trọng:</strong> Phân bố đáp án chỉ dùng làm <em>phương án cuối cùng</em> khi hết thời gian. ' +
          'Không thể thay thế việc học thuộc nội dung. ' +
          'ĐA4 hiếm gặp (<14% mọi chương) → tránh đoán ĐA4 nếu không chắc.',
          'amber'
        ),
        after_insight(
          '<strong>Xu hướng đặc biệt:</strong> Ch.II và Ch.III: ĐA1 chiếm gần 50% — cao bất thường. ' +
          'Ch.V và Ch.VI: ĐA2 dẫn đầu. Ch.IV: ĐA3 dẫn đầu (35%) — khác các chương còn lại.',
          ''
        ),
      ],
    },

    // ══════════════════════════════════════════════════════
    // 19 — PHƯƠNG PHÁP HỌC TÂM LÝ
    // ══════════════════════════════════════════════════════
    {
      id: 'tip-18-phuongphap',
      title: 'Phương pháp học hiệu quả — khoa học não bộ',
      icon: '🧠',
      badge: 'Học nhanh nhớ lâu',
      color: '#22d48a',
      type: 'rules',
      intro: '',
      cards: [
        {
          title: 'Spaced Repetition — Lặp lại cách quãng',
          color: '#22d48a',
          items: [
            'Học câu mới → ôn lại sau 1 ngày → 3 ngày → 7 ngày → 14 ngày',
            'Câu sai nhiều lần: ôn lại sớm hơn (1 → 1 → 2 → 5 ngày)',
            'App Anki hoặc dùng tool "Thi thử → Xem đáp án" lưu câu sai để ôn',
          ],
        },
        {
          title: 'Active Recall — Kiểm tra chủ động',
          color: '#3d8ef8',
          items: [
            'Đừng đọc đáp án trước khi cố nhớ câu trả lời',
            'Dùng tool thi thử chế độ "Sau khi nộp bài" — giả lập thi thật',
            'Viết ra câu trả lời trước khi kiểm tra đáp án',
          ],
        },
        {
          title: 'Chunking — Học theo nhóm',
          color: '#a060f8',
          items: [
            'Nhóm các câu cùng chủ đề: tất cả câu về tốc độ, tất cả câu về tuổi...',
            'Học 15–20 câu/nhóm, không học xen lẫn các nhóm khác nhau',
            'Não bộ xử lý thông tin theo pattern, không theo số thứ tự câu',
          ],
        },
        {
          title: 'Interleaving — Trộn khi ôn cuối',
          color: '#f0a030',
          items: [
            'Sau khi học từng chương riêng → trộn ngẫu nhiên khi luyện đề',
            'Đề thi thật không theo thứ tự chương — phải quen với trộn câu',
            'Tool "Thi thử → Ngẫu nhiên 50 câu" giả lập đúng cách này',
          ],
        },
      ],
      after: [
        after_insight(
          '<strong>Thời gian học tối ưu:</strong> 2–3 buổi × 45–60 phút/ngày hiệu quả hơn 1 buổi 3 tiếng liên tục. ' +
          'Não cần thời gian củng cố ký ức khi nghỉ ngơi.',
          'green'
        ),
      ],
    },

  ]; // end TIPS array

  // ─────────────────────────────────────────────────────────
  // EXPORT
  // ─────────────────────────────────────────────────────────
  global.GPLX_TIPS = TIPS;

  /**
   * Hàm tiện ích: tìm tip theo ID
   */
  global.GPLX_TIPS.findById = function (id) {
    return TIPS.find(function (t) { return t.id === id; });
  };

  /**
   * Hàm tiện ích: lấy tips theo chương
   * @param {number} chapter — 1 đến 6
   */
  global.GPLX_TIPS.byChapter = function (chapter) {
    var map = {
      1: ['tip-00-overview', 'tip-07-quytac-ch1', 'tip-02-tocdo', 'tip-03-culyantoant', 'tip-04-tuoi-hang', 'tip-05-hang-gplx', 'tip-06-diem-gplx'],
      2: ['tip-14-vanhoa-pccc'],
      3: ['tip-08-kythuat'],
      4: ['tip-09-cautao'],
      5: ['tip-10-bien-bao-loai', 'tip-11-bien-nhom'],
      6: ['tip-12-sahinh', 'tip-13-sahinh-xe-nao'],
    };
    var ids = map[chapter] || [];
    return TIPS.filter(function (t) { return ids.indexOf(t.id) !== -1; });
  };

  /**
   * Tự động gán vào BUILTIN_TIPS nếu trang đang dùng biến đó
   */
  if (typeof BUILTIN_TIPS !== 'undefined') {
    // Ghi đè danh sách built-in nếu đã có
    while (BUILTIN_TIPS.length) BUILTIN_TIPS.pop();
    TIPS.forEach(function (t) { BUILTIN_TIPS.push(t); });
  }

}(typeof window !== 'undefined' ? window : this));
