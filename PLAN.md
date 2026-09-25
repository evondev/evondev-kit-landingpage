# Plan — landing page evondevKit

Landing quảng bá skill **`evon:ui-ux`** (plugin `evon` trong repo `evondev/evondevKit`).
Deploy trên Vercel.

## Nguồn dữ liệu (chỉ đọc, không ghi)

| Thứ | Ở đâu |
| --- | --- |
| Skill | `~/dev/evondevKit/skills/ui-ux/` |
| Danh sách UI đã làm + câu đề gốc | `~/dev/evondevKit/TESTS.md` |
| Lệnh cài, bảng tool hỗ trợ | `~/dev/evondevKit/README.md` |
| Token màu, font | `~/dev/evondevKit/skills/ui-ux/references/tokens.css` |
| Khung hero / tính năng / FAQ | `~/dev/evondevKit/archive/sales.md` |
| Nhánh refactor (cho Phase 2) | `~/dev/evondevKit/skills/ui-ux/references/refactor.md` |
| App chứa các màn đã dựng (nguồn ảnh) | `~/dev/ui-ux-dashboard` (Vite, React Router) |

---

## 1. Quyết định nền

**a. Repo riêng** ✅ đã chốt. Không đặt trong evondevKit: marketplace khai
`"source": "./"` nên người cài plugin sẽ kéo theo cả Next.js lẫn ảnh, và mỗi
lần chụp lại ảnh là lịch sử git nặng thêm vĩnh viễn.

**b. Phase 1 không có before/after → dùng cặp "đề → kết quả".** Mỗi mục
✅ trong `TESTS.md` có câu đề gốc. Mỗi ô showcase hiện câu đề đó cạnh ảnh kết
quả: người xem thấy "gõ một câu, ra màn này".

**c. Phase 2 có hai kiểu before/after.** `refactor.md` mặc định **giữ pixel**,
nên ảnh trước/sau ở chế độ đó giống hệt nhau. Tách:
- **Đổi diện mạo** (đề có "làm lại giao diện", "cho đẹp hơn", "theo gu") → thanh kéo so hai ảnh.
- **Refactor giữ pixel** → before/after là **số đo code**: màu thô, số `<button>`
  thuần, dòng CSS, selector trùng (lấy bằng bộ lệnh đo ở `refactor.md` L1), kèm
  dòng "ảnh chụp lệch 0 pixel".

**d. Không có bản chạy thật.** ✅ đã chốt. Showcase chỉ dùng ảnh chụp, không
deploy `ui-ux-dashboard`, không đụng vào dự án đó.

**e. Landing dùng chính token của skill** (`tokens.css`: nhấn `#181818`, viền,
font) để trang và ảnh showcase trông cùng một hệ — trang cũng là bằng chứng.

**f. Song ngữ: tiếng Việt mặc định, có nút chuyển sang tiếng Anh.** ✅ đã chốt. Xem mục 6.

---

## 2. Hướng thẩm mỹ

Theo cách landing của các sản phẩm dev lớn đang làm:

- Hero **một câu nói vấn đề**, không liệt kê tính năng. Vd: *"UI dashboard không còn mùi AI."*
- **Ảnh sản phẩm thật** làm hero. Không hình minh hoạ, không gradient trang trí.
- Gần như **đơn sắc**, một màu nhấn duy nhất cho CTA.
- **Lệnh cài ngay trên hero**, có nút copy — với sản phẩm dev đó là CTA.
- **Số thật, không thổi phồng.** Hiện có: 25 component, 8 UI chưa có mẫu vẫn dựng đạt, 9 khối ghép, 3 trang (đếm lại từ `TESTS.md` trước khi đăng).
- Nhịp dọc rộng, mỗi section một ý. Không carousel, không testimonial bịa.
- Không ghi tên sản phẩm hay dự án mà skill tham khảo, cả trên trang lẫn trong repo. Brand evondev thì giữ.

---

## 3. Cấu trúc trang

| # | Section | Nội dung |
|---|---|---|
| 1 | Header | Logo evondevKit · Showcase · Cài đặt · GitHub · nút chuyển VI / EN · nút "Cài skill" |
| 2 | Hero | Headline + một câu phụ + khối lệnh `/plugin marketplace add evondev/evondevKit` có nút copy + ảnh lớn trang quản lý khách hàng |
| 3 | Số liệu | 4 con số thật |
| 4 | Cách hoạt động | Gõ đề → skill chọn bố cục và component đã duyệt → kiểm 3 cổng checklist |
| 5 | Showcase | Tab Component / Khối / Trang (khớp bậc 1/2/3 trong `TESTS.md`). Mỗi ô: câu đề + ảnh, bấm mở lớn, bật tắt light/dark |
| 6 | Gu của skill | 4–5 luật tiêu biểu, mỗi luật một ảnh nhỏ: flat, một màu nhấn, viền thay bóng, đúng ở 375px, dark mode |
| 7 | Chạy ở đâu | Claude Code, Codex, Antigravity |
| 8 | Cài đặt | Tab theo tool, lệnh lấy từ README |
| 9 | FAQ | Có mất phí? Dùng với design system sẵn có được không? Có làm landing không (không — skill chỉ làm màn trong app)? UI ra tiếng gì (theo ngôn ngữ dự án, luật `T24`)? |
| 10 | Footer | evondev, GitHub, MIT |

Phase 2 chèn section **Refactor** giữa 5 và 6.

---

## 4. Phase

### Phase 1 — showcase

- [ ] Khung Next.js (App Router) + Tailwind v4 + token của skill, nối Vercel, có preview ngay từ đầu
- [ ] Nội dung đủ các section, ảnh để placeholder
- [ ] Script chụp ảnh (mục 5), chụp 15–20 ảnh chọn lọc — không chụp hết
- [ ] File dữ liệu `showcase.ts`: `id, level, title, prompt, image { light, dark }`, **để sẵn trường `before?`** cho Phase 2
- [ ] Bản tiếng Anh `/en` + nút chuyển ngôn ngữ
- [ ] Ảnh OG (mỗi thứ tiếng một ảnh), metadata, `hreflang`, favicon

### Phase 2 — refactor before/after

- [ ] Chọn 2–3 dự án thật refactor bằng skill, ghi commit trước/sau
- [ ] Component thanh kéo before/after + thẻ "số đo trước/sau"
- [ ] (Tuỳ chọn) trang `/refactor` kể một case study

---

## 5. Chụp ảnh — bằng script

Chụp tay dễ lệch cỡ, lệch dữ liệu mẫu, quên dark. Dùng script Playwright trong
repo này, chạy vào `localhost` của `ui-ux-dashboard`:

- Trang: viewport 1440×900, `deviceScaleFactor: 2`. Màn hẹp: 390. Component: cắt theo vùng.
- Mỗi route chụp light + dark, xuất `.webp` vào `public/showcase/<id>-<theme>.webp`.
- Danh sách route nằm trong file config. Skill cập nhật → chạy lại một lệnh.

Route sẵn có trong `ui-ux-dashboard`: `/dashboard/customers`,
`/dashboard/customers/:customerId`, `/dashboard/customers/quick-view`,
`/dashboard/tasks`, `/dashboard/tasks/new`, `/dashboard/assistant`,
`/dashboard/orders/detail`, `/dashboard/projects/documents`, `/components`,
`/pricing`, `/login`, `/register`, `/verify-otp`…

Chụp tay thì giữ đúng các thông số trên và cùng bộ dữ liệu mẫu.

---

## 6. Kỹ thuật & deploy

- Next.js tĩnh hoàn toàn, không backend. `next/image` tự ra AVIF/WebP.
- Cấu trúc theo feature (`src/features/landing/...`), `cn()`, icon lucide — theo rule chung.
- Vercel: production từ `main`, mỗi PR một link preview. **Domain dùng luôn
  `*.vercel.app` của Vercel**, chưa gắn domain riêng.

### Song ngữ

- **Tiếng Việt ở `/`, tiếng Anh ở `/en`.** Hai route cùng render một page
  component, truyền `locale` vào. Không middleware, không đoán ngôn ngữ trình
  duyệt để tự chuyển: người dùng tự bấm, link chia sẻ ra đúng thứ tiếng.
- Chữ đặt trong hai file từ điển có chung một interface (`vi.ts`, `en.ts`), thiếu
  khoá là TypeScript báo lỗi. Trang ít chữ, chưa cần thư viện i18n.
- Nút chuyển VI / EN trên header là `Link` sang route tương ứng. Thêm
  `alternates.languages` trong metadata để máy tìm kiếm biết hai bản là một.
- **Câu đề trong showcase dịch sang tiếng Anh**, trường `prompt` trong
  `showcase.ts` thành `{ vi, en }`.
- **Ảnh vẫn là UI tiếng Việt**, vì `ui-ux-dashboard` chỉ có tiếng Việt. Bản EN
  ghi một dòng dưới showcase: *"Screens shown in Vietnamese — the skill writes
  UI copy in your project's language."* Nếu sau này có ảnh UI tiếng Anh thì
  thêm trường `image.en`.
- Bản EN **chỉ hứa những gì đã test bằng tiếng Anh** (xem mục 7).

---

## 7. Skill với người dùng quốc tế (việc bên evondevKit, không làm ở repo này)

Skill viết bằng tiếng Việt nhưng người dùng nói tiếng Anh vẫn dùng được. Mô hình
đọc luật tiếng Việt rồi trả lời bằng tiếng của người dùng, còn chữ trên UI đã có
luật `T24` (theo i18n → theo nhãn sẵn có → dự án trống thì theo ngôn ngữ người
dùng đang nói). Muốn **hứa** trên landing EN thì cần làm trước ở evondevKit:

- [x] Luật `T27`: trả lời, phân tích, câu giao theo tiếng người dùng đang viết;
  câu mẫu tiếng Việt trong skill thì dịch ý, không chép; bảng nhãn tiếng Anh quen dùng.
- [x] Luật `T28`: bảng các luật chỉ đúng với tiếng Việt và bản tiếng Anh tương ứng
  (khép chữ, dấu font, tiền, dấu thập phân, ngày, avatar, đầu tuần, số nhiều).
  `T15` và `T18` áp cho mọi thứ tiếng.
- [x] Luật `T29`: copy tiếng Anh viết sentence case, một việc một cặp từ.
- [ ] Chạy mục "Vòng tiếng Anh" cuối `TESTS.md`, so ảnh với bản tiếng Việt.

Chạy xong vòng tiếng Anh thì bản EN của landing mới được nói skill hỗ trợ tiếng Anh.

---

## Đã chốt

- [x] Repo riêng → `evondev-kit-landingpage`
- [x] Ngôn ngữ → tiếng Việt mặc định, nút chuyển sang tiếng Anh
- [x] Domain → `*.vercel.app` mặc định của Vercel
- [x] Bản chạy thật `ui-ux-dashboard` → không làm
