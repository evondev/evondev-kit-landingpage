import type { Dictionary } from "@/features/landing/types/dictionary";

export const viDictionary: Dictionary = {
  meta: {
    title: "evon:ui-ux · UI dashboard không còn mùi AI",
    description:
      "Skill cho Claude Code làm UI app như một designer: đọc codebase, đưa brief và 2–3 wireframe để bạn chọn, dựng bằng component của dự án, tự đo bằng máy. Miễn phí, MIT.",
  },
  announcement: {
    text: "Mới: skill mặc định làm như một designer. Brief, 2–3 wireframe, bạn chọn rồi mới dựng.",
    linkLabel: "Xem cách làm",
  },
  header: {
    homeLabel: "evondevKit, về đầu trang",
    navLabel: "Điều hướng chính",
    modes: "Tính năng",
    designer: "Quy trình",
    showcase: "Showcase",
    install: "Cài đặt",
    roadmap: "Sắp có",
    github: "GitHub",
    installCta: "Cài skill",
    switchLanguageLabel: "Xem bản tiếng Anh",
  },
  copyButton: {
    copy: "Sao chép",
    copied: "Đã chép",
  },
  statusLabels: {
    new: "Mới",
    beta: "Beta",
    soon: "Sắp có",
  },
  hero: {
    badge: "Mới: làm như một designer",
    title: {
      lead: "UI dashboard",
      accent: "không còn mùi AI",
    },
    subheadline:
      "evon:ui-ux đọc codebase của bạn, đưa brief và 2–3 wireframe để bạn chọn, rồi mới dựng bằng component của dự án và tự đo bằng máy.",
    primaryCta: "Cài skill",
    secondaryCta: "Xem màn đã dựng",
    promptBoxLabel: "Lối vào của skill",
    copyPromptLabel: "Chép đề mẫu",
    copiedPromptLabel: "Đã chép đề mẫu",
    imageAlt: "Trang quản lý khách hàng do skill dựng: bảng có tìm kiếm, bộ lọc, phân trang",
    windowLabel: "localhost:3000/dashboard/customers",
  },
  proof: {
    lead: "Đã qua",
    accent: "70 đề test",
    tail: "từ một cái nút tới trang hoàn chỉnh",
    items: [
      { value: "30", label: "component đã duyệt" },
      { value: "8", label: "UI chưa có mẫu vẫn dựng đạt" },
      { value: "10", label: "khối ghép" },
      { value: "22", label: "trang hoàn chỉnh" },
    ],
    source: "Đếm từ danh sách test của skill, 29/09/2026.",
  },
  modes: {
    label: "Tính năng",
    eyebrow: "Sáu lối vào",
    title: {
      lead: "Một skill,",
      accent: "sáu cách làm việc",
    },
    description:
      "Mặc định là làm như designer. Muốn đi lối khác thì nói rõ trong đề: skill nhận ra, không hỏi lại.",
    promptLabel: "Đề mẫu",
    items: [
      {
        id: "designer",
        tabLabel: "Designer",
        title: "Làm như một designer",
        description:
          "Mặc định cho mọi đề dựng hay làm lại một màn. Brief, việc chính của từng màn, 2–3 wireframe có nội dung thật. Bạn chọn rồi mới dựng.",
        prompt: "/evon:ui-ux Dựng màn danh sách đơn hàng: mã đơn, khách, tổng tiền, trạng thái.",
        status: "new",
      },
      {
        id: "just-build",
        tabLabel: "Dựng luôn",
        title: "Dựng luôn, không wireframe",
        description:
          "Đỡ tốn token. Skill tự chọn phương án nó sẽ khuyên rồi dựng thẳng, lúc giao báo đã chọn bố cục nào và vì sao.",
        prompt: "/evon:ui-ux Dựng luôn màn cài đặt thông báo.",
        status: "new",
      },
      {
        id: "review",
        tabLabel: "Soi UI",
        title: "Soi UI đang có",
        description:
          "Đưa link localhost, skill tự mở trang, đo từ 375 tới 1920px, rồi đưa bảng lỗi có ảnh trước / sau. Bạn trả lời “sửa 1, 3” mới sửa.",
        prompt: "/evon:ui-ux Xem giúp trang này chỗ nào chưa ổn: http://localhost:3000/orders",
        status: null,
      },
      {
        id: "keep-brand",
        tabLabel: "Giữ brand",
        title: "Dựng lại, giữ brand",
        description:
          "Giữ khung trang và màu của bạn. Thay control gốc bằng component chuẩn, làm gọn từng card. Trả lời “ok” hoặc “bỏ 7”.",
        prompt: "/evon:ui-ux Dựng lại trang này giữ brand.",
        status: null,
      },
      {
        id: "skill-taste",
        tabLabel: "Gu skill",
        title: "Đổi hẳn sang gu skill",
        description:
          "Như dựng lại giữ brand, nhưng đổi cả màu sang token của skill. Chỉ giữ logo và màu nhấn chính.",
        prompt: "/evon:ui-ux Dựng lại hoàn toàn theo gu skill, bỏ style cũ.",
        status: null,
      },
      {
        id: "refactor",
        tabLabel: "Refactor",
        title: "Dọn code, giữ nguyên hình",
        description:
          "Đổi class, xoá CSS cũ, chụp ảnh trước và sau để chắc giao diện không lệch. Nhánh mới viết, chưa qua vòng test.",
        prompt: "/evon:ui-ux Refactor CSS trang /settings sang Tailwind, giữ nguyên giao diện.",
        status: "beta",
      },
    ],
  },
  designer: {
    label: "Quy trình",
    eyebrow: "Chế độ designer",
    title: {
      lead: "Brief, wireframe,",
      accent: "rồi mới dựng",
    },
    description:
      "Phần xấu nặng nhất thường là cấu trúc, không phải màu: card quá tải, lọc đặt xa bảng, hai nút tranh nhau. Designer bắt mấy thứ này ở wireframe, lúc sửa gần như không tốn gì.",
    steps: [
      {
        code: "U1",
        title: "Brief",
        description: "Đọc repo, README, route trước. Chỉ hỏi phần không tự suy ra được.",
        gate: null,
      },
      {
        code: "U2",
        title: "Việc chính của từng màn",
        description: "Người dùng đến màn này để làm gì, so sánh bằng gì, hành động cuối là gì.",
        gate: "Cổng 1: bạn sửa hoặc trả lời “ok”",
      },
      {
        code: "U3",
        title: "2–3 wireframe",
        description:
          "Khác nhau thật ở chiến lược bố cục, không chỉ khác màu. Nội dung thật, mỗi khối có số để góp ý.",
        gate: "Cổng 2: bạn chọn, ví dụ “C + D + có màu”",
      },
      {
        code: "U4",
        title: "Dựng thật",
        description:
          "Code theo phương án đã chọn, bám component của dự án, chạy probe tới khi danh sách lỗi trống.",
        gate: null,
      },
    ],
    wireframe: {
      toolbarLabel: "Thanh công cụ wireframe",
      optionLabel: "Phương án",
      colorLabel: "Màu",
      desktopLabel: "Desktop",
      mobileLabel: "Mobile",
      stateLabel: "Trạng thái",
      stateValue: "Có dữ liệu",
      reasonTitle: "Vì sao A",
      reasonLines: [
        "Việc chính: tìm đơn trễ. Ô tìm và lọc nằm ngay trên bảng.",
        "Đổi so với bản cũ: bỏ hàng card số liệu ở đầu trang.",
        "Đánh đổi: ít chỗ cho biểu đồ.",
      ],
      recommendedLabel: "Khuyên dùng",
    },
    toolbarNote:
      "Trên wireframe: đổi phương án, bật màu, thử màu nhấn, xem mobile, xem màn rỗng và lỗi, đọc ưu nhược, chép câu góp ý theo số khối.",
  },
  probe: {
    label: "Soi và đo",
    eyebrow: "Probe",
    title: {
      lead: "Đo bằng máy,",
      accent: "không đoán bằng mắt",
    },
    description:
      "Script probe mở trang thật, rê chuột, bấm Tab, mở từng menu, đo tương phản và quét bề ngang. Mục nào báo lỗi thì phải lên bảng, hoặc ghi lý do loại.",
    reviewTitle: {
      lead: "Bảng lỗi, bạn chọn dòng.",
      accent: "Soi không hỏi, sửa thì hỏi. Chấm theo hệ của dự án bạn, không bắt theo gu skill.",
    },
    reviewHeaders: {
      number: "#",
      issue: "Lỗi",
      fix: "Đề xuất",
    },
    reviewRows: [
      { issue: "Chữ phụ 3,2:1 trên nền card", severity: "broken", fix: "Đổi sang màu phụ đạt 4,6:1" },
      { issue: "Nav rớt dòng ở 860–1000px", severity: "broken", fix: "Gom mục phụ vào menu" },
      { issue: "Ba kiểu bo góc cho cùng loại card", severity: "off-system", fix: "Về một bo góc của dự án" },
      { issue: "Hai nút nền đặc tranh nhau", severity: "taste", fix: "Giữ một nút chính, nút kia viền" },
    ],
    reviewReply: "Bạn trả lời: sửa 1, 2",
    severities: [
      { tone: "broken", label: "Hỏng", description: "Sai đo được: tương phản, tràn, rớt dòng, bấm không được." },
      { tone: "off-system", label: "Lệch hệ", description: "Khác chính quy ước của dự án bạn." },
      { tone: "taste", label: "Gu", description: "Gợi ý theo gu skill, mặc định không chọn." },
    ],
    sweepTitle: {
      lead: "Quét năm khổ màn.",
      accent: "Từ 1920 xuống 375px, báo khoảng bề ngang bị lỗi thay vì chỉ chụp một ảnh 375.",
    },
    sweepWidths: ["1920", "1440", "1280", "768", "375"],
    sweepCheckHeader: "Phép đo",
    sweepChecks: [
      { name: "Tương phản chữ ≥ 4,5:1", marks: ["pass", "pass", "pass", "pass", "pass"] },
      { name: "Trang không cuộn ngang", marks: ["pass", "pass", "pass", "pass", "fail"] },
      { name: "Nav không rớt dòng", marks: ["pass", "pass", "pass", "fail", "pass"] },
      { name: "Lớp nổi nằm trong màn", marks: ["pass", "pass", "pass", "pass", "fail"] },
      { name: "Rê chuột nhìn thấy được", marks: ["pass", "pass", "pass", "pass", "pass"] },
    ],
    sweepNote: "Báo cáo mẫu. Probe còn đo mục đang chọn, vòng focus, và trạng thái bấm xong đứng yên.",
    passLabel: "Đạt",
    failLabel: "Lỗi",
  },
  showcase: {
    label: "Showcase",
    eyebrow: "Màn đã dựng",
    title: {
      lead: "Gõ một câu,",
      accent: "ra màn này",
    },
    description: "Mỗi ô là câu đề gốc và màn hình skill dựng ra từ đúng câu đó. Không chỉnh tay sau khi dựng.",
    tabs: {
      component: "Component",
      block: "Khối ghép",
      page: "Trang",
    },
    promptLabel: "Đề",
    unprecedentedBadge: "Chưa có mẫu",
    placeholder: "Ảnh đang chụp",
    openImageLabel: "Xem lớn",
    closeLabel: "Đóng",
    lightLabel: "Sáng",
    darkLabel: "Tối",
    themeLabel: "Chế độ màu",
    languageNote: null,
  },
  taste: {
    label: "Gu",
    eyebrow: "Gu của skill",
    title: {
      lead: "Luật có số hiệu,",
      accent: "không có tính từ",
    },
    description:
      "Mỗi luật sống ở đúng một file và sinh ra từ một lỗi đã thật sự xảy ra. Đây là bốn luật bạn thấy ngay trên màn hình.",
    rules: [
      {
        id: "flat",
        code: "P6 · M12",
        title: "Flat là mặc định",
        description: "Nền xám nhạt, card trắng. Không gradient, không glass trang trí.",
      },
      {
        id: "one-accent",
        code: "M3",
        title: "Một màu nhấn, một nút chính",
        description: "Nút mặc định là nút viền. Mỗi khu chỉ một nút nền nhấn, nên nút cần nổi thì nổi thật.",
      },
      {
        id: "hairline",
        code: "M13 · M15",
        title: "Viền tóc thay cho bóng",
        description: "Card trong trang tách nhau bằng viền 1px. Bóng chỉ dành cho lớp nổi: modal, dropdown.",
      },
      {
        id: "narrow",
        code: "R1 · T15",
        title: "Đúng ở 375px",
        description: "Nhãn dài thì xuống dòng, trang không bao giờ cuộn ngang.",
      },
    ],
    stylesTitle: "Đổi phong cách bằng một câu trong đề",
    stylesNote: "Dự án đã có phong cách riêng thì skill theo dự án và báo lúc giao.",
    defaultStyleLabel: "Mặc định",
    styles: [
      { name: "Flat đường tóc", isDefault: true },
      { name: "Nổi", isDefault: false },
      { name: "Glassmorphism", isDefault: false },
      { name: "Gradient", isDefault: false },
      { name: "Nền tối", isDefault: false },
      { name: "Có màu", isDefault: false },
    ],
  },
  install: {
    label: "Cài đặt",
    eyebrow: "Cài đặt",
    title: {
      lead: "Cài trong",
      accent: "một phút",
    },
    description: "Chọn công cụ bạn đang dùng. Mọi vòng test của skill chạy trên Claude Code.",
    tabsLabel: "Công cụ",
    testedBadge: "Đã test",
    untestedBadge: "Chưa test",
  },
  roadmap: {
    label: "Sắp có",
    eyebrow: "Lộ trình",
    title: {
      lead: "Đang làm,",
      accent: "sắp có",
    },
    description: "Những thứ skill chưa dám hứa. Chưa chạy xong vòng test thì trang này chưa ghi là có.",
    items: [
      {
        icon: "dark-mode",
        title: "Thêm dark mode cho app đang có",
        description:
          "Nút đổi sáng / tối, nhớ lựa chọn, không nháy trắng khi tải. Soi lại bảng, form, lớp nổi, biểu đồ trên nền tối.",
        progress: "0/7 mục test",
      },
      {
        icon: "english",
        title: "Vòng test tiếng Anh",
        description:
          "Gõ đề tiếng Anh vào dự án trống, so ảnh với bản tiếng Việt: bố cục, màu, khoảng thở y hệt, chỉ chữ khác.",
        progress: "0/8 đề",
      },
      {
        icon: "agents",
        title: "Test trên Codex và Antigravity",
        description: "Hai công cụ đã đọc được skill nhưng chưa chạy vòng test nào. Test xong mới ghi là hỗ trợ.",
        progress: "Chưa bắt đầu",
      },
      {
        icon: "before-after",
        title: "Ảnh trước / sau khi làm lại",
        description: "Thanh kéo so hai ảnh trên dự án thật đã làm lại bằng skill, kèm số đo code trước và sau.",
        progress: "Đang chọn dự án",
      },
    ],
  },
  cta: {
    eyebrow: "Bắt đầu",
    title: "Dựng màn đầu tiên?",
    description: "Hai lệnh trong Claude Code, rồi gõ đề như đang nói với designer. Miễn phí, mã nguồn mở MIT.",
    primaryCta: "Cài skill",
    secondaryCta: "Xem trên GitHub",
  },
  faq: {
    label: "Hỏi đáp",
    eyebrow: "Hỏi đáp",
    title: {
      lead: "Câu hỏi",
      accent: "thường gặp",
    },
    items: [
      {
        question: "Có mất phí không?",
        answer: "Không. Skill mở mã nguồn theo giấy phép MIT.",
      },
      {
        question: "Skill có hỏi nhiều không?",
        answer:
          "Chế độ designer dừng đúng hai lần: duyệt brief và chọn wireframe. Ngoài hai chỗ đó skill lấy mặc định rồi báo lúc giao. Muốn bỏ luôn wireframe thì gõ “dựng luôn”.",
      },
      {
        question: "Dự án đã có design system thì sao?",
        answer:
          "Skill dùng component của bạn. Có shadcn, Radix, MUI, Ant hay bộ nội bộ thì dùng đúng những component đó, chỉ chỉnh token cho khớp. Màu brand giữ nguyên, trừ khi bạn nói “bỏ style cũ”.",
      },
      {
        question: "Có bắt buộc Tailwind không?",
        answer:
          "Không. Dự án dùng CSS Module, SCSS hay styled-components thì theo quy ước đó. HTML thuần, WordPress, PHP thì skill dịch mẫu sang HTML và class rồi mới đưa.",
      },
      {
        question: "Có dark mode không?",
        answer:
          "Skill dựng được giao diện nền tối khi bạn nói trong đề. Thêm dark mode cho một app đang có (nút đổi sáng / tối) thì đang test, xem mục Sắp có.",
      },
      {
        question: "Skill có dựng landing page không?",
        answer:
          "Không. Phạm vi là màn hình trong app: dashboard, danh sách, bảng, form, cài đặt, modal, và trang người dùng lướt để chọn. Ngoại lệ là bảng giá.",
      },
      {
        question: "Chữ trên UI ra tiếng gì?",
        answer:
          "Theo ngôn ngữ của dự án. Có i18n thì theo i18n, có nhãn sẵn thì theo nhãn đó, dự án trống thì theo tiếng bạn đang gõ đề.",
      },
    ],
  },
  footer: {
    tagline: "Bộ skill Claude Code của evondev.",
    license: "Giấy phép MIT",
  },
};
