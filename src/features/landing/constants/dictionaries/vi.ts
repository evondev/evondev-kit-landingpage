import type { Dictionary } from "@/features/landing/types/dictionary";

export const viDictionary: Dictionary = {
  meta: {
    title: "evon:ui-ux · UI dashboard không còn mùi AI",
    description:
      "Skill cho Claude Code dựng màn hình dashboard: đọc codebase của bạn, ráp từ component đã duyệt, tự kiểm bằng con số. Miễn phí, MIT.",
  },
  header: {
    homeLabel: "evondevKit, về đầu trang",
    showcase: "Showcase",
    install: "Cài đặt",
    github: "GitHub",
    installCta: "Cài skill",
    switchLanguageLabel: "Xem bản tiếng Anh",
  },
  copyButton: {
    copy: "Sao chép",
    copied: "Đã chép",
  },
  hero: {
    eyebrow: "Skill cho Claude Code · miễn phí, MIT",
    headline: "UI dashboard không còn mùi AI.",
    subheadline:
      "evon:ui-ux đọc codebase của bạn, ráp màn hình từ component đã duyệt và tự kiểm bằng con số, không bằng tính từ. Bảng, form, modal, cài đặt.",
    commandsLabel: "Gõ hai lệnh này trong Claude Code",
    secondaryCta: "Xem màn đã dựng",
    imageAlt: "Trang quản lý khách hàng do skill dựng: bảng có tìm kiếm, bộ lọc, phân trang",
    promptCardLabel: "Đề",
    promptCardText: "Dựng cho tôi bảng khách hàng có tìm kiếm, bộ lọc, phân trang.",
    checkCardTitle: "Vòng tra tấn",
    checkCardItems: ["Thu về 375px", "Tiêu đề 200 ký tự", "Danh sách rỗng"],
  },
  stats: {
    items: [
      { value: "25", label: "component đã duyệt" },
      { value: "8", label: "UI chưa có mẫu vẫn dựng đạt" },
      { value: "9", label: "khối ghép" },
      { value: "3", label: "trang hoàn chỉnh" },
    ],
    source: "Đếm từ danh sách test của skill, 25/09/2026.",
  },
  howItWorks: {
    eyebrow: "Cách hoạt động",
    title: "Một câu đề, ba bước",
    description: "Skill không dạy “thế nào là đẹp” bằng tính từ. Nó đi đúng thứ tự, cấm thói quen lộ ra là AI dựng, và ràng buộc bằng số.",
    steps: [
      {
        title: "Gõ một câu đề",
        description:
          "Không cần spec hay wireframe. Chỗ nào đề chưa rõ, skill lấy mặc định rồi báo lại đã chọn gì.",
        sample: "Dựng cho tôi bảng khách hàng có tìm kiếm, bộ lọc, phân trang và chọn nhiều dòng để xoá hàng loạt.",
      },
      {
        title: "Đọc codebase trước khi viết",
        description:
          "Audit stack, component có sẵn và phong cách dự án. Có sẵn thì dùng của bạn, chưa có thì ráp từ bố cục và component đã duyệt.",
        sample: "Audit: Next + Tailwind v4, có shadcn. Đã có Avatar ở components/ui/avatar.tsx, dùng cái đó. Chưa có dropdown, dựng mới.",
      },
      {
        title: "Qua ba cổng kiểm",
        description:
          "Trước khi viết class, dựng xong trước khi báo, và vòng tra tấn. Mỗi dòng trong checklist là một lỗi đã thật sự xảy ra.",
        sample: "Thu về 375px · tiêu đề 200 ký tự · số 0 và 1.284.500 · danh sách rỗng · dark mode",
      },
    ],
  },
  showcase: {
    eyebrow: "Showcase",
    title: "Gõ một câu, ra màn này",
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
    eyebrow: "Gu của skill",
    title: "Luật có số hiệu, không có tính từ",
    description:
      "177 luật chia mười nhóm, mỗi luật sống ở đúng một file. Đây là năm luật bạn nhìn thấy ngay trên màn hình.",
    rules: [
      {
        id: "flat",
        code: "P1",
        title: "Flat là mặc định",
        description:
          "Nền xám nhạt, card trắng. Không gradient, không glass trang trí. Dự án bạn đang dùng glass thì skill theo dự án.",
      },
      {
        id: "one-accent",
        code: "I1 · M3",
        title: "Một màu nhấn, một nút chính",
        description:
          "Nút mặc định là nút viền. Mỗi khu chỉ một nút nền nhấn, nên nút cần nổi thì nổi thật.",
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
        description: "Mọi màn kiểm ở bề ngang 375px. Nhãn dài thì xuống dòng, trang không bao giờ cuộn ngang.",
      },
      {
        id: "dark",
        code: "M21 · M23",
        title: "Dark mode không phải đảo màu",
        description:
          "Nền navy rất tối, viền rgba mờ, màu nhấn khai lại cho nền tối để nút chính không tàng hình.",
      },
    ],
  },
  platforms: {
    eyebrow: "Chạy ở đâu",
    title: "Một thư mục skill, ba công cụ",
    description: "Skill theo định dạng Agent Skills: một thư mục có SKILL.md và references/. Agent nào đọc được định dạng này là dùng được.",
    testedBadge: "Đã test",
    untestedBadge: "Chưa test",
    items: [
      {
        name: "Claude Code",
        description: "Cài như plugin, gọi bằng /evon:ui-ux. Mọi vòng test của skill đều chạy ở đây.",
        isTested: true,
      },
      {
        name: "Codex",
        description: "Chép thư mục skill vào .agents/skills/ của dự án. Agent tự bật skill khi đề khớp.",
        isTested: false,
      },
      {
        name: "Antigravity",
        description: "Đọc cùng thư mục .agents/skills/ với Codex, một bản dùng cho cả hai.",
        isTested: false,
      },
    ],
  },
  install: {
    eyebrow: "Cài đặt",
    title: "Cài trong một phút",
    description: "Chọn công cụ bạn đang dùng.",
    tabsLabel: "Công cụ",
  },
  faq: {
    eyebrow: "Hỏi đáp",
    title: "Câu hỏi thường gặp",
    items: [
      {
        question: "Có mất phí không?",
        answer: "Không. Skill mở mã nguồn theo giấy phép MIT.",
      },
      {
        question: "Dự án đã có design system thì sao?",
        answer:
          "Skill dùng component của bạn. Có shadcn, Radix, MUI, Ant hay bộ nội bộ thì dùng đúng những component đó, chỉ chỉnh token cho khớp. Có sẵn màu và font thì dùng, không hỏi.",
      },
      {
        question: "Có bắt buộc Tailwind không?",
        answer:
          "Không. Mặc định là Tailwind, còn dự án dùng CSS Module, SCSS hay styled-components thì theo quy ước đó. HTML thuần, WordPress, PHP thì skill dịch mẫu sang HTML và class rồi mới đưa.",
      },
      {
        question: "Skill có dựng landing page không?",
        answer:
          "Không. Phạm vi là màn hình trong app: dashboard, danh sách, bảng, form, cài đặt, modal. Ngoại lệ duy nhất là bảng giá.",
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
