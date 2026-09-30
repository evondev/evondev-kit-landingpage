import type { Dictionary } from "@/features/landing/types/dictionary";

export const viDictionary: Dictionary = {
  meta: {
    home: {
      title: "evondevKit · Bộ skill Claude Code của evondev",
      description:
        "Bộ skill Claude Code do evondev viết. Skill đầu tiên là evon:ui-ux, làm UI app theo cách một designer làm. Skill nào cũng là bộ luật cụ thể, đã test trên dự án thật. Miễn phí, MIT.",
    },
    "ui-ux": {
      title: "evon:ui-ux · UI dashboard không còn mùi AI",
      description:
        "Skill Claude Code làm UI app theo cách một designer làm: đọc codebase, đưa brief và 2–3 wireframe cho bạn chọn, dựng bằng component có sẵn của dự án, rồi tự kiểm tra bằng script. Miễn phí, MIT.",
    },
  },
  header: {
    homeLabel: "evondevKit, về trang chủ",
    navLabel: "Điều hướng chính",
    nav: {
      modes: "Tính năng",
      designer: "Quy trình",
      showcase: "Showcase",
      install: "Cài đặt",
      roadmap: "Sắp có",
      skills: "Skill",
      principles: "Cách làm",
    },
    github: "GitHub",
    installCta: "Cài skill",
    switchLanguageLabel: "Xem bản tiếng Anh",
  },
  kitHome: {
    announcement: {
      text: "Mới: evon:ui-ux giờ làm việc như một designer. Đưa brief, 2–3 wireframe, bạn chọn xong mới dựng.",
      linkLabel: "Xem evon:ui-ux",
    },
    hero: {
      badge: "evon:ui-ux: làm UI như một designer",
      title: {
        lead: "Bộ skill Claude Code",
        accent: "của evondev",
      },
      subheadline:
        "Mỗi skill là một bộ luật cụ thể, test trên dự án thật rồi mới đưa lên đây. Cài một lần, dùng cho mọi dự án.",
      primaryCta: "Xem evon:ui-ux",
      secondaryCta: "Cài evondevKit",
      commandsLabel: "Gõ hai lệnh này trong Claude Code",
    },
    skills: {
      label: "Skill",
      eyebrow: "Có gì trong bộ",
      title: {
        lead: "Cài một lần,",
        accent: "có thêm skill mới",
      },
      description: "Bạn chỉ cần cài plugin evon một lần. Khi mình thêm skill mới, cập nhật marketplace là có.",
      detailLabel: "Xem chi tiết",
      placeholder: {
        title: "Skill tiếp theo",
        description: "Đang test trên dự án thật. Chưa qua test thì mình chưa đưa lên đây.",
      },
      items: [
        {
          id: "ui-ux",
          command: "/evon:ui-ux",
          title: "UI/UX cho app",
          description:
            "Dựng mới hoặc làm lại màn hình app theo cách một designer làm: brief, 2–3 wireframe, bạn chọn rồi mới dựng. Ngoài ra còn soi lỗi UI đang có, dựng lại mà giữ brand, và dọn code mà giao diện không đổi.",
          facts: ["Qua 70 prompt test", "Có wireframe trước khi code", "Đo từ 375 tới 1920px"],
          status: "beta",
        },
      ],
    },
    principles: {
      label: "Cách làm",
      eyebrow: "Mình viết skill thế nào",
      title: {
        lead: "Hứa ít,",
        accent: "đo nhiều",
      },
      description: "Ba nguyên tắc skill nào trong bộ cũng phải theo.",
      items: [
        {
          icon: "numbered-rules",
          title: {
            lead: "Luật cụ thể, có mã số.",
            accent: "Không dặn chung chung kiểu “làm\u00a0cho\u00a0đẹp”. Mỗi luật có mã riêng, nhiều luật ra đời từ chính lỗi gặp lúc test.",
          },
        },
        {
          icon: "tested",
          title: {
            lead: "Test xong mới hứa.",
            accent: "Tính năng nào chưa qua test, trang này ghi là “sắp có”, không ghi là “có”.",
          },
        },
        {
          icon: "codebase",
          title: {
            lead: "Theo dự án của bạn.",
            accent: "Đọc codebase trước khi viết dòng nào. Có component, token, quy ước sẵn thì dùng lại, không ép theo bộ của skill.",
          },
        },
      ],
    },
    cta: {
      eyebrow: "Cài đặt",
      title: "Cài evondevKit",
      description: "Gõ hai lệnh trong Claude Code là có đủ bộ. Miễn phí, mã nguồn mở MIT.",
      primaryCta: "Xem evon:ui-ux",
      secondaryCta: "Xem trên GitHub",
    },
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
    badge: "Mới: làm việc như một designer",
    title: {
      lead: "UI dashboard",
      accent: "không còn mùi AI",
    },
    subheadline:
      "evon:ui-ux đọc codebase của bạn, đưa brief và 2–3 wireframe để bạn chọn. Chọn xong mới dựng, bằng chính component của dự án, rồi tự kiểm tra bằng script.",
    primaryCta: "Cài skill",
    secondaryCta: "Xem màn đã dựng",
    promptBoxLabel: "Các cách dùng skill",
    copyPromptLabel: "Chép prompt mẫu",
    copiedPromptLabel: "Đã chép prompt mẫu",
    videoLabel: "Video trước và sau: màn Phòng trọ cũ của 68Lane, wireframe skill đưa ra, rồi màn dựng xong, kèm cách cài",
    playVideoLabel: "Phát video",
    pauseVideoLabel: "Tạm dừng video",
  },
  proof: {
    lead: "Đã qua",
    accent: "70 prompt test",
    tail: "từ một cái nút tới cả trang hoàn chỉnh",
    items: [
      { value: "30", label: "component đạt" },
      { value: "8", label: "UI chưa có mẫu sẵn" },
      { value: "10", label: "khối ghép" },
      { value: "22", label: "trang hoàn chỉnh" },
    ],
    source: "Đếm từ danh sách test của skill, ngày 29/09/2026.",
  },
  modes: {
    label: "Tính năng",
    eyebrow: "Skill làm được gì",
    title: {
      lead: "Một skill,",
      accent: "ba kiểu việc",
    },
    description:
      "Không cần nhớ lệnh. Skill đọc prompt rồi tự biết nên làm theo cách nào. Mặc định nó làm như designer, muốn khác thì bạn nói thẳng trong prompt.",
    promptLabel: "Prompt mẫu",
    groups: [
      {
        id: "build",
        title: "Dựng màn mới",
        description:
          "Mặc định skill đi đủ các bước như designer. Muốn tiết kiệm token thì bảo nó bỏ wireframe. Việc nhỏ hơn một màn thì nó làm luôn.",
        items: [
          {
            id: "designer",
            tabLabel: "Designer",
            title: "Làm như một designer",
            description:
              "Cách mặc định mỗi khi bạn nhờ dựng hoặc làm lại một màn. Skill viết brief, xác định màn này để làm gì, rồi đưa 2–3 wireframe có nội dung thật. Bạn chọn xong nó mới dựng.",
            prompt: "/evon:ui-ux Dựng màn danh sách đơn hàng: mã đơn, khách, tổng tiền, trạng thái.",
            status: "new",
          },
          {
            id: "just-build",
            tabLabel: "Dựng luôn",
            title: "Dựng luôn, bỏ wireframe",
            description:
              "Tiết kiệm token. Skill tự chọn phương án nó thấy hợp nhất rồi dựng thẳng. Lúc giao, nó nói rõ đã chọn bố cục nào và vì sao.",
            prompt: "/evon:ui-ux Dựng luôn màn cài đặt thông báo.",
            status: "new",
          },
          {
            id: "small-fix",
            tabLabel: "Sửa nhỏ",
            title: "Việc nhỏ hơn một màn",
            description:
              "Sửa một component, thêm một dropdown, fix một lỗi, đổi một màu. Skill vẫn đọc codebase trước, rồi làm luôn, không cần wireframe.",
            prompt: "/evon:ui-ux Thêm dropdown lọc theo trạng thái vào bảng đơn hàng.",
            status: null,
          },
        ],
      },
      {
        id: "rework",
        title: "Làm lại UI đang có",
        description:
          "Cả ba cách đều bắt đầu bằng việc đo trang của bạn. Khác nhau ở chỗ skill được phép đổi tới đâu.",
        items: [
          {
            id: "review",
            tabLabel: "Soi UI",
            title: "Soi lỗi UI đang có",
            description:
              "Đưa link localhost, skill tự mở trang, đo từ 375 tới 1920px, rồi gửi bảng lỗi kèm ảnh trước / sau. Bạn trả lời “sửa 1, 3” thì nó mới sửa.",
            prompt: "/evon:ui-ux Xem giúp trang này chỗ nào chưa ổn: http://localhost:3000/orders",
            status: null,
          },
          {
            id: "keep-brand",
            tabLabel: "Giữ brand",
            title: "Dựng lại, giữ brand",
            description:
              "Giữ nguyên khung trang và màu của bạn. Skill thay các control tự chế bằng component chuẩn và làm gọn từng card. Bạn trả lời “ok” hoặc “bỏ 7”.",
            prompt: "/evon:ui-ux Dựng lại trang này giữ brand.",
            status: null,
          },
          {
            id: "skill-taste",
            tabLabel: "Theo skill",
            title: "Làm lại theo gu skill",
            description:
              "Giống dựng lại giữ brand, nhưng đổi luôn cả màu sang bộ token của skill. Chỉ giữ logo và màu nhấn chính của bạn.",
            prompt: "/evon:ui-ux Dựng lại hoàn toàn theo gu skill, bỏ style cũ.",
            status: null,
          },
        ],
      },
      {
        id: "cleanup",
        title: "Dọn code",
        description: "Chỉ đổi code bên dưới. Giao diện phải y như cũ.",
        items: [
          {
            id: "refactor",
            tabLabel: "Refactor",
            title: "Dọn code, giao diện không đổi",
            description:
              "Đổi class, xoá CSS thừa, chụp ảnh trước và sau để chắc giao diện không lệch một pixel nào. Phần này mới viết, chưa qua test.",
            prompt: "/evon:ui-ux Refactor CSS trang /settings sang Tailwind, giữ nguyên giao diện.",
            status: "beta",
          },
        ],
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
      "Màn xấu thường không phải do màu mà do cấu trúc: card nhồi quá nhiều thứ, bộ lọc nằm xa bảng, hai nút tranh nhau. Designer bắt những lỗi này ngay từ wireframe, lúc sửa còn chưa tốn gì.",
    steps: [
      {
        code: "U1",
        title: "Brief",
        description: "Đọc repo, README và route trước. Chỉ hỏi những gì không tự tìm ra được.",
        gate: null,
      },
      {
        code: "U2",
        title: "Màn này để làm gì",
        description: "Người dùng vào đây để làm gì, họ so sánh dựa trên cái gì, và bấm gì ở cuối.",
        gate: "Dừng lần 1: bạn sửa brief hoặc trả lời “ok”",
      },
      {
        code: "U3",
        title: "2–3 wireframe",
        description:
          "Các phương án khác nhau thật ở cách bố cục, không phải chỉ đổi màu. Nội dung thật, khối nào cũng đánh số để bạn góp ý cho dễ.",
        gate: "Dừng lần 2: bạn chọn, ví dụ “C + D”",
      },
      {
        code: "U4",
        title: "Dựng thật",
        description:
          "Code theo phương án bạn chọn, bằng component có sẵn của dự án. Chạy script kiểm tra rồi sửa, tối đa ba vòng. Lỗi nào còn lại, lúc giao sẽ ghi rõ lý do.",
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
      reasonTitle: "Vì sao chọn A",
      reasonItems: [
        { label: "Ưu", text: "Tìm đơn trễ nhanh vì ô tìm kiếm và bộ lọc nằm ngay trên bảng." },
        { label: "Nhược", text: "Ít chỗ cho biểu đồ tổng quan." },
        { label: "Hợp khi", text: "Người dùng vào để xử lý đơn, không phải để xem số tổng." },
      ],
      recommendedLabel: "Khuyên dùng",
    },
    toolbarNote:
      "Ngay trên wireframe, bạn đổi qua lại các phương án, bật màu, thử màu nhấn, xem bản mobile, xem lúc trống dữ liệu và lúc lỗi, đọc ưu nhược, rồi chép góp ý theo số từng khối.",
  },
  beforeAfter: {
    label: "Trước / sau",
    eyebrow: "Một màn thật",
    title: {
      lead: "Từ màn cũ tới wireframe,",
      accent: "rồi tới bản hoàn chỉnh",
    },
    description:
      "Màn Phòng trọ của 68Lane qua ba bước: màn gốc, wireframe skill đưa ra để chọn, và màn dựng từ đúng wireframe đó. Kéo thanh ở giữa để so.",
    stages: {
      before: "Trước",
      wireframe: "Wireframe",
      after: "Sau",
    },
    imageAlts: {
      before: "Màn Phòng trọ của 68Lane trước khi làm lại",
      wireframe: "Wireframe skill đưa ra cho màn Phòng trọ",
      after: "Màn Phòng trọ sau khi skill dựng xong",
    },
    pairLabel: "Chọn cặp ảnh để so",
    sliderLabel: "Kéo để so hai ảnh",
    windowLabel: "68Lane · Phòng trọ",
    placeholder: "Ảnh đang cập nhật",
    hint: "Kéo ngang trong khung, hoặc bấm vào tay nắm rồi dùng phím ← →.",
  },
  probe: {
    label: "Soi và đo",
    eyebrow: "Script kiểm tra",
    title: {
      lead: "Đo bằng script,",
      accent: "không nhìn bằng mắt",
    },
    description:
      "Script mở trang thật, rê chuột, bấm Tab, mở từng menu, đo độ tương phản và thử từng độ rộng màn hình. Lỗi nào nó báo cũng phải lên bảng, hoặc phải ghi lý do bỏ qua.",
    reviewTitle: {
      lead: "Skill liệt kê lỗi, bạn chọn sửa gì.",
      accent: "Nó được soi thoải mái, nhưng chỉ sửa khi bạn đồng ý. Lỗi chấm theo chuẩn của dự án bạn, không theo gu của skill.",
    },
    reviewHeaders: {
      number: "#",
      issue: "Lỗi",
      fix: "Đề xuất",
    },
    reviewRows: [
      { issue: "Chữ phụ chỉ đạt 3,2:1 trên nền card", severity: "broken", fix: "Đổi sang màu phụ đạt 4,6:1" },
      { issue: "Menu bị rớt dòng ở 860–1000px", severity: "broken", fix: "Gom mục phụ vào một menu" },
      { issue: "Cùng loại card mà ba kiểu bo góc", severity: "off-system", fix: "Dùng một bo góc theo dự án" },
      { issue: "Hai nút nền đặc tranh nhau", severity: "taste", fix: "Giữ một nút chính, nút kia để viền" },
    ],
    reviewReply: "Bạn trả lời: sửa 1, 2",
    severities: [
      { tone: "broken", label: "Hỏng", description: "Sai đo được: thiếu tương phản, tràn, rớt dòng, bấm không được." },
      { tone: "off-system", label: "Lệch chuẩn", description: "Khác với quy ước của chính dự án bạn." },
      { tone: "taste", label: "Gu", description: "Gợi ý theo gu của skill, mặc định không chọn." },
    ],
    sweepTitle: {
      lead: "Đo ở sáu độ rộng.",
      accent: "375, 768, 1024, 1280, 1440 và 1920px. Thêm --sweep để quét liền từ 1440 xuống 375 và chỉ ra đoạn nào bị vỡ.",
    },
    sweepWidths: ["1920", "1440", "1280", "1024", "768", "375"],
    sweepCheckHeader: "Kiểm tra",
    sweepChecks: [
      { name: "Tương phản chữ ≥ 4,5:1", marks: ["pass", "pass", "pass", "pass", "pass", "pass"] },
      { name: "Không cuộn ngang", marks: ["pass", "pass", "pass", "pass", "pass", "fail"] },
      { name: "Menu không rớt dòng", marks: ["pass", "pass", "pass", "pass", "fail", "pass"] },
      { name: "Dropdown, modal không tràn màn", marks: ["pass", "pass", "pass", "pass", "pass", "fail"] },
      { name: "Hover có thấy rõ", marks: ["pass", "pass", "pass", "pass", "pass", "pass"] },
    ],
    sweepNote: "Báo cáo mẫu. Script còn kiểm tra mục đang chọn, viền focus và trạng thái ngay sau khi bấm.",
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
    description: "Mỗi ô là prompt gốc và màn hình skill dựng từ đúng prompt đó. Không sửa tay sau khi dựng.",
    tabs: {
      component: "Component",
      block: "Khối ghép",
      page: "Trang",
    },
    promptLabel: "Prompt",
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
      lead: "Không dặn “làm\u00a0cho\u00a0đẹp”,",
      accent: "chỉ có luật cụ thể",
    },
    description:
      "Mỗi luật nằm ở đúng một file, nhiều luật ra đời từ lỗi gặp lúc test. Đây là bốn luật bạn nhìn thấy ngay trên màn hình.",
    rules: [
      {
        id: "flat",
        code: "P6 · M12",
        title: "Mặc định là flat",
        description: "Nền xám nhạt, card trắng. Không gradient, không hiệu ứng kính cho đẹp.",
      },
      {
        id: "one-accent",
        code: "M3 · I1 · I3",
        title: "Chỉ một nút chính",
        description: "Nút mặc định chỉ có viền. Mỗi khu vực chỉ một nút tô màu nhấn, nên nút cần nổi thì nổi thật.",
      },
      {
        id: "hairline",
        code: "M13 · M15",
        title: "Viền thay cho bóng",
        description: "Card trong trang cách nhau bằng viền 1px. Bóng chỉ dùng cho thứ nổi lên trên trang như modal, dropdown.",
      },
      {
        id: "narrow",
        code: "R1 · T15",
        title: "Không vỡ ở 375px",
        description: "Nhãn dài thì tự xuống dòng, trang không bao giờ bị cuộn ngang.",
      },
    ],
    stylesTitle: "Muốn phong cách khác, nói một câu trong prompt",
    stylesNote: "Dự án đã có phong cách riêng thì skill theo dự án, và báo lại cho bạn lúc giao.",
    defaultStyleLabel: "Mặc định",
    styles: [
      { name: "Flat viền mảnh", isDefault: true },
      { name: "Đổ bóng", isDefault: false },
      { name: "Glassmorphism", isDefault: false },
      { name: "Gradient", isDefault: false },
      { name: "Nền tối", isDefault: false },
      { name: "Nhiều màu", isDefault: false },
    ],
  },
  install: {
    label: "Cài đặt",
    eyebrow: "Cài đặt",
    title: {
      lead: "Cài xong trong",
      accent: "một phút",
    },
    description: "Chọn công cụ bạn đang dùng. Toàn bộ test của skill đều chạy trên Claude Code.",
    tabsLabel: "Công cụ",
    testedBadge: "Đã test",
    untestedBadge: "Chưa test",
  },
  roadmap: {
    label: "Sắp có",
    eyebrow: "Lộ trình",
    title: {
      lead: "Mình đang làm,",
      accent: "sắp có",
    },
    description: "Những thứ mình chưa dám hứa. Chưa test xong thì trang này chưa ghi là có.",
    items: [
      {
        icon: "dark-mode",
        title: "Thêm dark mode cho app đang có",
        description:
          "Nút chuyển sáng / tối, nhớ lựa chọn của người dùng, tải trang không bị nháy trắng. Soi lại bảng, form, modal, biểu đồ trên nền tối.",
        progress: "0/7 mục test",
      },
      {
        icon: "english",
        title: "Test với prompt tiếng Anh",
        description:
          "Gõ prompt tiếng Anh vào dự án trống rồi so với bản tiếng Việt: bố cục, màu, khoảng cách phải y hệt, chỉ khác chữ.",
        progress: "0/8 prompt",
      },
      {
        icon: "agents",
        title: "Test trên Codex và Antigravity",
        description: "README đã có hướng dẫn cài cho hai công cụ này, nhưng mình chưa test lần nào. Test xong mới ghi là hỗ trợ.",
        progress: "Chưa bắt đầu",
      },
      {
        icon: "before-after",
        title: "Thêm ca trước / sau từ dự án thật",
        description: "Ca đầu tiên là 68Lane ở phía trên. Mình đang làm thêm vài dự án nữa, kèm số đo code trước và sau.",
        progress: "Đã có 1 dự án",
      },
    ],
  },
  cta: {
    eyebrow: "Bắt đầu",
    title: "Dựng màn đầu tiên nhé?",
    description: "Gõ hai lệnh trong Claude Code, rồi viết prompt như đang nói chuyện với designer. Miễn phí, mã nguồn mở MIT.",
    primaryCta: "Cài skill",
    secondaryCta: "Xem trên GitHub",
  },
  faq: {
    label: "Hỏi đáp",
    eyebrow: "Hỏi đáp",
    title: {
      lead: "Câu hỏi",
      accent: "hay gặp",
    },
    items: [
      {
        question: "Skill dùng thật được chưa?",
        answer:
          "Được, đang ở bản beta. Giao diện app nền sáng đã qua 70 prompt test trên dự án thật. Dark mode, prompt tiếng Anh, Codex và Antigravity mình vẫn đang test, bạn xem ở mục Sắp có. Gặp chỗ nào chưa ổn thì mở issue trên GitHub, kèm link hoặc ảnh màn đó. Cập nhật bản mới bằng lệnh /plugin marketplace update evondevkit.",
      },
      {
        question: "Dựng xong mà chưa ưng thì sao?",
        answer:
          "Skill không hoàn hảo, nó chỉ làm tốt nhất có thể trong bộ luật của nó. Gu mỗi người mỗi khác, dự án nào cũng có cái riêng. Dựng xong bạn sửa tay hay nhờ AI sửa đều được, cứ nói như đang góp ý cho designer: “tiêu đề đậm hơn”, “thoáng hơn chút”, “bỏ khối 3”.",
      },
      {
        question: "Có tốn phí không?",
        answer: "Không. Skill mở mã nguồn theo giấy phép MIT.",
      },
      {
        question: "Skill có hỏi nhiều không?",
        answer:
          "Chế độ designer chỉ dừng hai lần: duyệt brief và chọn wireframe. Ngoài hai lần đó, skill tự chọn theo mặc định rồi báo lại lúc giao. Muốn bỏ luôn bước wireframe thì gõ “dựng luôn”.",
      },
      {
        question: "Dự án đã có design system thì sao?",
        answer:
          "Skill dùng component của bạn. Dự án dùng shadcn, Radix, MUI, Ant hay bộ tự làm thì nó dùng đúng bộ đó, chỉ chỉnh token cho khớp. Màu brand giữ nguyên, trừ khi bạn nói “bỏ style cũ”.",
      },
      {
        question: "Có bắt buộc dùng Tailwind không?",
        answer:
          "Không. Dự án dùng CSS Module, SCSS hay styled-components thì skill theo cách đó. Với HTML thuần, WordPress hay PHP, skill chuyển mẫu sang HTML và class rồi mới đưa.",
      },
      {
        question: "Có làm dark mode không?",
        answer:
          "Có, skill dựng được giao diện nền tối nếu bạn nói trong prompt. Còn thêm dark mode cho app đang chạy (có nút chuyển sáng / tối) thì mình vẫn đang test, bạn xem ở mục Sắp có.",
      },
      {
        question: "Skill có làm landing page không?",
        answer:
          "Không. Skill chỉ làm màn hình bên trong app: dashboard, danh sách, bảng, form, cài đặt, modal, và các trang người dùng lướt để chọn. Riêng bảng giá thì có làm.",
      },
      {
        question: "Chữ trên giao diện sẽ là tiếng gì?",
        answer:
          "Theo ngôn ngữ của dự án. Có i18n thì theo i18n, có sẵn nhãn thì theo nhãn đó, dự án trống thì theo ngôn ngữ bạn gõ prompt.",
      },
    ],
  },
  footer: {
    tagline: "Bộ skill Claude Code của evondev.",
    license: "Giấy phép MIT",
  },
};
