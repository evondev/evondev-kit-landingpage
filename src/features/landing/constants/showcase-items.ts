import type { ShowcaseItem } from "@/features/landing/types/showcase-item";

/**
 * Các ô showcase, chọn lọc từ những mục ✅ trong TESTS.md của evondevKit.
 * Câu đề `vi` chép nguyên văn từ TESTS.md. Ảnh không khai ở đây: script
 * scripts/capture-showcase.mjs chụp theo cùng `id` và ghi showcase-manifest.json.
 */
export const showcaseItems: ShowcaseItem[] = [
  // Bậc 1 — component riêng lẻ
  {
    id: "button",
    level: "component",
    title: { vi: "Bộ nút", en: "Buttons" },
    prompt: {
      vi: "Dựng cho tôi bộ nút: nút chính, nút viền, nút chỉ icon, nút xoá, đủ trạng thái hover, focus, đang tải, bị khoá.",
      en: "Build me a button set: primary, outline, icon-only, delete, with hover, focus, loading, and disabled states.",
    },
  },
  {
    id: "status-badge",
    level: "component",
    title: { vi: "Badge trạng thái", en: "Status badges" },
    prompt: {
      vi: "Dựng cho tôi badge trạng thái cho đơn hàng: chờ xử lý, đang giao, đã giao, đã huỷ.",
      en: "Build me order status badges: pending, shipping, delivered, cancelled.",
    },
  },
  {
    id: "date-range-picker",
    level: "component",
    title: { vi: "Ô chọn ngày", en: "Date picker" },
    prompt: {
      vi: "Dựng cho tôi ô chọn ngày, và ô chọn khoảng ngày có sẵn các mốc 7 ngày, 30 ngày, tháng này.",
      en: "Build me a date picker, and a date range picker with presets for 7 days, 30 days, and this month.",
    },
  },
  {
    id: "line-chart",
    level: "component",
    title: { vi: "Biểu đồ", en: "Charts" },
    prompt: {
      vi: "Dựng cho tôi bộ biểu đồ: đường doanh thu theo tháng, cột so sánh theo nhóm, donut tỉ lệ, và sparkline nhỏ trong card số liệu.",
      en: "Build me a chart set: monthly revenue line, grouped comparison bars, a proportion donut, and a small sparkline in a stat card.",
    },
  },
  {
    id: "invite-modal",
    level: "component",
    title: { vi: "Modal có form", en: "Modal with form" },
    prompt: {
      vi: "Dựng cho tôi modal mời thành viên, có form bên trong và nút huỷ, gửi.",
      en: "Build me an invite-member modal with a form inside and cancel and send buttons.",
    },
  },

  // Bậc 1b — UI chưa có mẫu, skill tự dựng từ nguyên tắc
  {
    id: "timeline",
    level: "component",
    isUnprecedented: true,
    title: { vi: "Dòng thời gian", en: "Timeline" },
    prompt: {
      vi: "Dựng cho tôi dòng thời gian hoạt động của một đơn hàng: tạo đơn, xác nhận, đóng gói, giao hàng, có một bước giao thất bại.",
      en: "Build me an order activity timeline: created, confirmed, packed, shipped, with one failed delivery step.",
    },
  },
  {
    id: "file-tree",
    level: "component",
    isUnprecedented: true,
    title: { vi: "Cây thư mục", en: "File tree" },
    prompt: {
      vi: "Dựng cho tôi cây thư mục tài liệu, mở đóng được từng nhánh, có thư mục rỗng và tên file rất dài.",
      en: "Build me a document folder tree with collapsible branches, an empty folder, and a very long file name.",
    },
  },
  {
    id: "comment-thread",
    level: "component",
    isUnprecedented: true,
    title: { vi: "Bình luận lồng nhau", en: "Nested comments" },
    prompt: {
      vi: "Dựng cho tôi khu bình luận có trả lời lồng nhau, có bình luận đã xoá và bình luận đang gửi.",
      en: "Build me a comment section with nested replies, a deleted comment, and a comment that's still sending.",
    },
  },
  {
    id: "email-tag-input",
    level: "component",
    isUnprecedented: true,
    title: { vi: "Ô nhập nhiều tag", en: "Tag input" },
    prompt: {
      vi: "Dựng cho tôi ô nhập email người nhận, gõ xong Enter thành một tag, có email sai định dạng.",
      en: "Build me a recipient email input where Enter turns each address into a tag, including an invalid email.",
    },
  },

  // Bậc 2 — khối ghép
  {
    id: "task-form",
    level: "block",
    title: { vi: "Form có kiểm lỗi", en: "Form validation" },
    prompt: {
      vi: "Dựng cho tôi form tạo công việc mới, có hiện lỗi khi nhập sai.",
      en: "Build me a create-task form that shows errors when input is invalid.",
    },
  },
  {
    id: "customer-drawer",
    level: "block",
    title: { vi: "Panel chi tiết khách hàng", en: "Customer detail panel" },
    prompt: {
      vi: "Dựng cho tôi panel bên phải xem chi tiết một khách hàng: nút thao tác nhanh, các tab Chi tiết / Tin nhắn / Tệp / Hoạt động, và vài card số liệu.",
      en: "Build me a right-side panel for a customer's details: quick actions, Details / Messages / Files / Activity tabs, and a few stat cards.",
    },
  },
  {
    id: "order-modal",
    level: "block",
    title: { vi: "Modal chi tiết đơn hàng", en: "Order detail modal" },
    prompt: {
      vi: "Dựng cho tôi modal xem chi tiết đơn hàng: mã đơn có nút sao chép, trạng thái, danh sách sản phẩm, thanh toán, và nút sang đơn trước / đơn sau.",
      en: "Build me an order detail modal: order ID with a copy button, status, product list, payment, and previous / next order buttons.",
    },
  },
  {
    id: "task-list",
    level: "block",
    title: { vi: "Bảng nhóm theo trạng thái", en: "Grouped task table" },
    prompt: {
      vi: "Dựng cho tôi danh sách công việc nhóm theo trạng thái, mỗi nhóm thu gọn được, có cột ưu tiên, người phụ trách, hạn chót, và chuyển giữa các view.",
      en: "Build me a task list grouped by status, each group collapsible, with priority, assignee, and due date columns, and view switching.",
    },
  },
  {
    id: "file-upload",
    level: "block",
    title: { vi: "Khu tải tài liệu", en: "File upload" },
    prompt: {
      vi: "Dựng cho tôi khu tải tài liệu lên cho một dự án.",
      en: "Build me a document upload area for a project.",
    },
  },
  {
    id: "notification-panel",
    level: "block",
    title: { vi: "Panel thông báo", en: "Notification panel" },
    prompt: {
      vi: "Dựng cho tôi panel thông báo mở từ chuông trên header.",
      en: "Build me a notification panel that opens from the bell in the header.",
    },
  },
  {
    id: "assistant-chat",
    level: "block",
    isUnprecedented: true,
    title: { vi: "Chat với trợ lý AI", en: "AI assistant chat" },
    prompt: {
      vi: "Dựng cho tôi khung chat với trợ lý AI: tin nhắn hai phía, câu trả lời đang chạy ra, bước dùng công cụ thu gọn được, gợi ý câu hỏi tiếp và ô soạn tin.",
      en: "Build me an AI assistant chat: messages from both sides, a streaming answer, collapsible tool steps, follow-up suggestions, and a composer.",
    },
  },

  // Bậc 3 — trang
  {
    id: "app-shell",
    level: "page",
    title: { vi: "Khung app có sidebar", en: "App shell with sidebar" },
    prompt: {
      vi: "Dựng cho tôi khung app dashboard có sidebar, sidebar thu gọn được.",
      en: "Build me a dashboard app shell with a collapsible sidebar.",
    },
  },
  {
    id: "customers",
    level: "page",
    title: { vi: "Trang quản lý khách hàng", en: "Customer management page" },
    prompt: {
      vi: "Dựng cho tôi bảng khách hàng có tìm kiếm, bộ lọc, phân trang và chọn nhiều dòng để xoá hàng loạt.",
      en: "Build me a customer table with search, filters, pagination, and multi-select for bulk delete.",
    },
  },
  {
    id: "customer-detail",
    level: "page",
    title: { vi: "Trang chi tiết khách hàng", en: "Customer detail page" },
    prompt: {
      vi: "Dựng cho tôi trang chi tiết một khách hàng.",
      en: "Build me a customer detail page.",
    },
  },
];
