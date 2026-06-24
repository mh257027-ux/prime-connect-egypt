export type Lang = "en" | "ar" | "zh";

export interface ServiceItem {
  title: string;
  desc: string;
}
export interface StatItem {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
}
export interface MiniStat {
  v: string;
  l: string;
}

const en = {
  dir: "ltr",
  meta: {
    brand: "Prime Connect Egypt",
    brandSub: "Gateway to Egypt",
  },
  nav: {
    about: "About",
    services: "Services",
    why: "Why Egypt",
    workforce: "Workforce",
    expansion: "Properties",
    testimonials: "Clients",
    partners: "Network",
    contact: "Contact",
    cta: "Start Now",
  },
  hero: {
    badge: "Prime Connect Egypt",
    title1: "Your Gateway to the",
    title2: "Egyptian Market",
    subtitle: "Investment • Industrial Development • Market Expansion",
    desc: "We connect Chinese investors and international companies with high-value opportunities across Egypt — end-to-end, from formation to expansion.",
    ctaPrimary: "Start Your Business",
    ctaSecondary: "Contact Us",
    scroll: "Scroll to explore",
    stats: [
      { v: "24h", l: "Advisory response" },
      { v: "3", l: "Languages spoken" },
      { v: "100%", l: "Turnkey delivery" },
    ] as MiniStat[],
  },
  about: {
    tag: "Who We Are",
    title: "A Bridge Between Ambition and Opportunity",
    lead: "Prime Connect Egypt is a premium business consultancy guiding Chinese investors and global enterprises into the Egyptian market.",
    p1: "From company formation and government licensing to industrial setup, real estate and workforce recruitment, we deliver end-to-end solutions that turn market entry into lasting success.",
    p2: "With deep local expertise and a global perspective, we navigate regulations, forge partnerships and manage operations — so our clients can invest with total confidence.",
    stats: [
      { value: 12, suffix: "+", label: "Years of regional expertise" },
      { value: 250, suffix: "+", label: "Investors & companies guided" },
      { value: 9, suffix: "", label: "End-to-end service verticals" },
      { value: 109, suffix: "M", label: "Egyptian market reach" },
    ] as StatItem[],
    points: [
      "Fully bilingual advisory (中文 / العربية / English)",
      "Direct government & licensing relations",
      "Turnkey operational management",
    ],
  },
  services: {
    tag: "Investment Services",
    title: "End-to-End Solutions for Market Entry",
    subtitle: "A single, trusted partner for every stage of your investment journey in Egypt.",
    items: [
      { title: "Real Estate Investment", desc: "Curated residential, commercial and land opportunities across Egypt's highest-growth zones." },
      { title: "Factory & Industrial Setup", desc: "Site selection, construction and turnkey commissioning of world-class production facilities." },
      { title: "Import & Export Solutions", desc: "Customs, logistics and trade structuring that move your goods across borders efficiently." },
      { title: "Company Formation", desc: "Fast, compliant entity registration and corporate structuring under Egyptian law." },
      { title: "Government Relations & Licensing", desc: "Golden licenses, approvals and regulatory navigation through the right channels." },
      { title: "Recruitment & Workforce", desc: "Skilled engineers, technicians and multilingual teams sourced and on-boarded for you." },
      { title: "Office & Headquarters", desc: "Premium offices, showrooms and headquarters sourced and fitted to your brand." },
      { title: "Industrial & Market Expansion", desc: "Scale operations, enter new sectors and capture demand across the region." },
    ] as ServiceItem[],
  },
  why: {
    tag: "Why Egypt",
    title: "A Market Built for Growth",
    subtitle: "Strategic, incentivised and expanding — Egypt is one of the world's most compelling investment destinations.",
    items: [
      { title: "Strategic Location", desc: "At the crossroads of Africa, the Middle East and Europe, with global maritime access via the Suez Canal." },
      { title: "Government Incentives", desc: "Golden licenses, tax exemptions and one-stop investment facilitation for strategic projects." },
      { title: "Growing Economy", desc: "A diversified, reform-driven economy and one of the region's largest consumer markets." },
      { title: "Regional Market Access", desc: "Free-trade reach into African and Middle Eastern markets of over 1.7 billion consumers." },
      { title: "Industrial Opportunity", desc: "World-class industrial zones, ports and logistics corridors ready for development." },
      { title: "Young Skilled Workforce", desc: "A large, educated and cost-competitive talent pool across every sector." },
    ] as ServiceItem[],
    stats: [
      { value: 109, suffix: "M+", label: "Population & consumer base" },
      { value: 1.7, suffix: "B", decimals: 1, label: "Consumers in reach (FTA)" },
      { value: 12, suffix: "%", label: "Of global trade via Suez" },
      { value: 40, suffix: "+", label: "Industrial & economic zones" },
    ] as StatItem[],
  },
  workforce: {
    tag: "Workforce & Recruitment",
    title: "The Talent Behind Your Operations",
    subtitle: "We recruit, vet and deploy the people who power your business in Egypt.",
    items: ["Engineers", "Factory Workers", "Management Teams", "Office Staff", "Skilled Labor", "Multilingual Teams"],
    note: "Every candidate is screened for qualifications, compliance and cultural fit — ready to integrate with your organisation from day one.",
  },
  expansion: {
    tag: "Industrial & Real Estate",
    title: "Spaces Engineered for Success",
    subtitle: "Prime locations, facilities and infrastructure tailored to your operational ambitions.",
    items: [
      { title: "Industrial Zones", desc: "Allocated land inside developed, investor-ready industrial cities." },
      { title: "Warehouses", desc: "Modern storage and distribution facilities in strategic logistics hubs." },
      { title: "Office Spaces", desc: "Grade-A corporate offices and administrative headquarters." },
      { title: "Commercial Buildings", desc: "Retail, showroom and mixed-use spaces in prime districts." },
      { title: "Factories", desc: "Built-to-suit production facilities with full utility and logistics access." },
      { title: "Ports & Logistics", desc: "Proximity to major ports and the Suez Canal for seamless global trade." },
    ] as ServiceItem[],
  },
  testimonials: {
    tag: "Client Experiences",
    title: "Trusted by Global Investors",
    subtitle: "Real partnerships with international companies building their future in Egypt.",
    items: [
      { quote: "Prime Connect Egypt turned a complex market entry into a smooth, transparent process. Our factory was operational faster than we imagined.", name: "Wei Chen", role: "Operations Director", company: "ShengTai Industries", country: "China" },
      { quote: "Their government relations expertise saved us months. A truly professional partner for doing business in Egypt.", name: "Sarah Müller", role: "Regional Head", company: "Helvetia Capital", country: "Switzerland" },
      { quote: "From licensing to recruitment, they managed everything end-to-end. We invested with total confidence.", name: "Hiroshi Tanaka", role: "Chief Executive", company: "Osaka Trading Group", country: "Japan" },
      { quote: "An exceptional team that understands both the Egyptian landscape and international standards. Highly recommended.", name: "Omar Al-Farsi", role: "Investor", company: "Gulf Holdings", country: "UAE" },
    ],
  },
  partners: {
    tag: "Network",
    title: "A Network You Can Rely On",
    subtitle: "Connected to the authorities, zones and institutions that move investments forward.",
    logos: [
      "Ministry of Investment",
      "Suez Canal Authority",
      "Industrial Development Authority",
      "New Administrative Capital",
      "General Authority for Free Zones",
      "Egyptian Banks Federation",
      "Federation of Chambers of Commerce",
      "Investment Zones Council",
    ],
  },
  contact: {
    tag: "Get in Touch",
    title: "Begin Your Egypt Journey",
    subtitle: "Speak with our advisory team and discover the opportunities waiting for you.",
    form: {
      name: "Full name",
      email: "Email address",
      phone: "Phone / WhatsApp",
      company: "Company",
      interest: "Area of interest",
      message: "Tell us about your project",
      submit: "Send Inquiry",
    },
    info: {
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      address: "Headquarters",
      hours: "Working hours",
    },
    values: {
<<<<<<< HEAD
      email: "mo@primeegypt",
      email2: "hesham@primeegypt",
      email3: "khalifa@primeegypt",
=======
      emails: ["mo@primeegypt", "hesham@primeegypt", "khalifa@primeegypt"],
>>>>>>> abdf80f6347f44d1bcd13098b37c180f40bc7fef
      phone: "+20 10 00982441",
      whatsapp: "+20 10 00982441",
      address: "New Administrative Capital, Cairo, Egypt",
      hours: "Sun – Thu · 9:00 – 18:00 EET",
    },
    whatsappCta: "Chat on WhatsApp",
    success: "Thank you. Our advisory team will respond within 24 hours.",
    mapTitle: "Strategic base in the heart of Egypt",
  },
  footer: {
    tagline: "Your trusted gateway between Chinese investors, international companies and the Egyptian market.",
    explore: "Explore",
    servicesCol: "Solutions",
    contactCol: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    built: "Crafted for global investors.",
  },
};

type Translation = typeof en;

const ar: Translation = {
  dir: "rtl",
  meta: {
    brand: "برايم كونيكت مصر",
    brandSub: "بوابتك إلى مصر",
  },
  nav: {
    about: "من نحن",
    services: "خدماتنا",
    why: "لماذا مصر",
    workforce: "القوى العاملة",
    expansion: "العقارات",
    testimonials: "عملاؤنا",
    partners: "شبكتنا",
    contact: "تواصل معنا",
    cta: "ابدأ الآن",
  },
  hero: {
    badge: "برايم كونيكت مصر",
    title1: "بوابتك إلى",
    title2: "السوق المصري",
    subtitle: "الاستثمار • التنمية الصناعية • التوسع في السوق",
    desc: "نربط المستثمرين الصينيين والشركات العالمية بأعلى الفرص قيمة في مصر — حلول متكاملة من التأسيس وحتى التوسع.",
    ctaPrimary: "ابدأ أعمالك",
    ctaSecondary: "تواصل معنا",
    scroll: "مرّر للاستكشاف",
    stats: [
      { v: "24 س", l: "زمن الاستجابة" },
      { v: "3", l: "لغات" },
      { v: "100%", l: "تنفيذ متكامل" },
    ],
  },
  about: {
    tag: "من نحن",
    title: "جسرٌ بين الطموح والفرصة",
    lead: "برايم كونيكت مصر شركة استشارات أعمال رائدة ترشد المستثمرين الصينيين والمؤسسات العالمية نحو السوق المصري.",
    p1: "من تأسيس الشركات والترخيص الحكومي إلى الإعداد الصناعي والعقارات وتوظيف القوى العاملة، نقدّم حلولاً متكاملة تحوّل دخول السوق إلى نجاحٍ دائم.",
    p2: "بخبرة محلية عميقة ورؤية عالمية، نتعامل مع اللوائح ونبني الشراكات وندير العمليات — ليتسنى لعملائنا الاستثمار بثقةٍ تامة.",
    stats: [
      { value: 12, suffix: "+", label: "سنوات من الخبرة الإقليمية" },
      { value: 250, suffix: "+", label: "مستثمر وشركة تم إرشادهم" },
      { value: 9, suffix: "", label: "قطاعات خدمية متكاملة" },
      { value: 109, suffix: "م", label: "وصول إلى السوق المصري" },
    ],
    points: [
      "استشارات ثلاثية اللغة (中文 / العربية / English)",
      "علاقات حكومية وترخيص مباشرة",
      "إدارة تشغيلية متكاملة",
    ],
  },
  services: {
    tag: "خدمات الاستثمار",
    title: "حلول متكاملة لدخول السوق",
    subtitle: "شريكٌ واحد موثوق لكل مرحلة من رحلة استثمارك في مصر.",
    items: [
      { title: "الاستثمار العقاري", desc: "فرص سكنية وتجارية وأراضي منتقاة في أسرع المناطق نمواً في مصر." },
      { title: "تأسيس المصانع والصناعات", desc: "اختيار المواقع والبناء وتشغيل مرافق إنتاج عالمية المستوى بشكل متكامل." },
      { title: "حلول الاستيراد والتصدير", desc: "الجمارك والخدمات اللوجستية وهيكلة التجارة لتنقل بضائعك عبر الحدود بكفاءة." },
      { title: "تأسيس الشركات", desc: "تسجيل كياناتٍ سريع ومتوافق وهيكلة شركات وفق القانون المصري." },
      { title: "العلاقات الحكومية والترخيص", desc: "تراخيص ذهبية وموافقات وتجاوزٌ تنظيمي عبر القنوات الصحيحة." },
      { title: "التوظيف والقوى العاملة", desc: "مصادر مهندسين وفنيين وفرق متعددة اللغات وإلحاقهم بفريقك." },
      { title: "المكاتب والمقرات", desc: "مكاتبٍ وصالات عرض ومقرات راقية مصمّمة وفق علامتك." },
      { title: "التوسع الصناعي والسوقي", desc: "توسيع العمليات ودخول قطاعات جديدة واستقطاب الطلب في المنطقة." },
    ],
  },
  why: {
    tag: "لماذا مصر",
    title: "سوقٌ صُنع للنمو",
    subtitle: "استراتيجية ومحفّزة ومتنامية — مصر من أكثر وجهات الاستثمار جاذبية في العالم.",
    items: [
      { title: "موقع استراتيجي", desc: "على مفترق طرق إفريقيا والشرق الأوسط وأوروبا، مع وصول بحري عالمي عبر قناة السويس." },
      { title: "حوافز حكومية", desc: "تراخيص ذهبية وإعفاءات ضريبية وتسهيل استثماري عبر نافذة واحدة للمشاريع الاستراتيجية." },
      { title: "اقتصاد نامٍ", desc: "اقتصاد متنوع مدفوع بالإصلاحات وواحد من أكبر أسواق الاستهلاك في المنطقة." },
      { title: "الوصول إلى الأسواق الإقليمية", desc: "وصول تجاري حر إلى أسواق إفريقيا والشرق الأوسط لأكثر من 1.7 مليار مستهلك." },
      { title: "فرص صناعية", desc: "مناطق صناعية ومرافئ وممرات لوجستية عالمية المستوى جاهزة للتطوير." },
      { title: "قوى عاملة شابة ماهرة", desc: "كتلة سكانية كبيرة ومتعلمة وتنافسية التكلفة في كل القطاعات." },
    ],
    stats: [
      { value: 109, suffix: "م+", label: "عدد السكان والقاعدة الاستهلاكية" },
      { value: 1.7, suffix: "مليار", decimals: 1, label: "مستهلك في متناول اليد (اتفاقيات حرة)" },
      { value: 12, suffix: "%", label: "من التجارة العالمية عبر السويس" },
      { value: 40, suffix: "+", label: "منطقة صناعية واقتصادية" },
    ],
  },
  workforce: {
    tag: "القوى العاملة والتوظيف",
    title: "الكفاءات التي تقود عملياتك",
    subtitle: "نوظّف ونُقيّم وندمج الكفاءات التي تُشغّل أعمالك في مصر.",
    items: ["مهندسون", "عمال مصانع", "فرق إدارية", "موظفو مكاتب", "عمالة ماهرة", "فرق متعددة اللغات"],
    note: "يُقيَّم كل مرشّح من حيث المؤهلات والامتثال والملاءمة الثقافية — جاهز للاندماج مع مؤسستك منذ اليوم الأول.",
  },
  expansion: {
    tag: "الصناعة والعقارات",
    title: "مساحات مصمّمة للنجاح",
    subtitle: "مواقع ومرافق وبنية تحتية رئيسية مُفصّلة على طموحاتك التشغيلية.",
    items: [
      { title: "مناطق صناعية", desc: "أراضٍ مخصّصة داخل مدن صناعية مطوّرة وجاهزة للمستثمرين." },
      { title: "مستودعات", desc: "مرافق تخزين وتوزيع حديثة في مراكز لوجستية استراتيجية." },
      { title: "مساحات مكتبية", desc: "مكاتب شركات من الفئة أ ومقرات إدارية." },
      { title: "مبانٍ تجارية", desc: "مساحات تجارية ومعارض ومتعددة الاستخدامات في مناطق متميّزة." },
      { title: "مصانع", desc: "مرافق إنتاج مصمّمة حسب الطلب مع وصول كامل للمرافق واللوجستيات." },
      { title: "مرافئ ولوجستيات", desc: "قرب من المرافئ الكبرى وقناة السويس لتجارة عالمية سلسة." },
    ],
  },
  testimonials: {
    tag: "تجارب العملاء",
    title: "ثقة المستثمرين العالميين",
    subtitle: "شراكات حقيقية مع شركات دولية تبني مستقبلها في مصر.",
    items: [
      { quote: "حوّلت برايم كونيكت مصر دخولًا معقّدًا للسوق إلى عملية سلسة وشفافة. أصبح مصنعنا جاهزًا للتشغيل أسرع مما تخيّلنا.", name: "وي تشن", role: "مدير العمليات", company: "ShengTai Industries", country: "الصين" },
      { quote: "خبرتهم في العلاقات الحكومية وفّرت علينا أشهرًا. شريك احترافي حقًا لممارسة الأعمال في مصر.", name: "سارة مولر", role: "رئيس إقليمي", company: "Helvetia Capital", country: "سويسرا" },
      { quote: "من الترخيص إلى التوظيف، أداروا كل شيء بشكل متكامل. استثمرنا بثقةٍ تامة.", name: "هيروشي تاناكا", role: "الرئيس التنفيذي", company: "Osaka Trading Group", country: "اليابان" },
      { quote: "فريق استثنائي يفهم المشهد المصري والمعايير الدولية معًا. ننصح به بشدة.", name: "عمر الفارسي", role: "مستثمر", company: "Gulf Holdings", country: "الإمارات" },
    ],
  },
  partners: {
    tag: "الشبكة",
    title: "شبكةٌ يمكنك الاعتماد عليها",
    subtitle: "مرتبطون بالجهات والمناطق والمؤسسات التي تحرّك الاستثمارات قُدمًا.",
    logos: [
      "وزارة الاستثمار",
      "هيئة قناة السويس",
      "جهاز التنمية الصناعية",
      "العاصمة الإدارية الجديدة",
      "الهيئة العامة للمناطق الاقتصادية",
      "اتحاد بنوك مصر",
      "اتحاد الغرف التجارية",
      "مجهد المناطق الاستثمارية",
    ],
  },
  contact: {
    tag: "تواصل معنا",
    title: "ابدأ رحلتك في مصر",
    subtitle: "تحدّث مع فريق الاستشارات واكتشف الفرص التي تنتظرك.",
    form: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "الهاتف / واتساب",
      company: "الشركة",
      interest: "مجال الاهتمام",
      message: "أخبرنا عن مشروعك",
      submit: "إرسال الاستفسار",
    },
    info: {
      email: "البريد",
      phone: "الهاتف",
      whatsapp: "واتساب",
      address: "المقر الرئيسي",
      hours: "ساعات العمل",
    },
    values: {
<<<<<<< HEAD
      email: "mo@primeegypt",
      email2: "hesham@primeegypt",
      email3: "khalifa@primeegypt",
=======
      emails: ["mo@primeegypt", "hesham@primeegypt", "khalifa@primeegypt"],
>>>>>>> abdf80f6347f44d1bcd13098b37c180f40bc7fef
      phone: "+20 10 00982441",
      whatsapp: "+20 10 00982441",
      address: "العاصمة الإدارية الجديدة، القاهرة، مصر",
      hours: "الأحد – الخميس · 9:00 – 18:00 بتوقيت مصر",
    },
    whatsappCta: "تحدّث عبر واتساب",
    success: "شكرًا لك. سيتواصل معك فريق الاستشارات خلال 24 ساعة.",
    mapTitle: "قاعدة استراتيجية في قلب مصر",
  },
  footer: {
    tagline: "بوابتك الموثوقة بين المستثمرين الصينيين والشركات العالمية والسوق المصري.",
    explore: "استكشف",
    servicesCol: "الحلول",
    contactCol: "تواصل",
    rights: "جميع الحقوق محفوظة.",
    privacy: "الخصوصية",
    terms: "الشروط",
    built: "صُمّم للمستثمرين العالميين.",
  },
};

const zh: Translation = {
  dir: "ltr",
  meta: {
    brand: "Prime Connect Egypt",
    brandSub: "通往埃及的门户",
  },
  nav: {
    about: "关于我们",
    services: "服务",
    why: "为何投资埃及",
    workforce: "人才招聘",
    expansion: "地产与园区",
    testimonials: "客户评价",
    partners: "合作网络",
    contact: "联系我们",
    cta: "立即开始",
  },
  hero: {
    badge: "Prime Connect Egypt · 埃及互联",
    title1: "通往",
    title2: "埃及市场的大门",
    subtitle: "投资 · 工业开发 · 市场拓展",
    desc: "我们为中国投资者与国际企业连接埃及最具价值的机会——从公司设立到业务扩张，提供端到端解决方案。",
    ctaPrimary: "启动您的业务",
    ctaSecondary: "联系我们",
    scroll: "向下滚动探索",
    stats: [
      { v: "24时", l: "顾问响应" },
      { v: "3", l: "支持语言" },
      { v: "100%", l: "一站式交付" },
    ],
  },
  about: {
    tag: "关于我们",
    title: "连接雄心与机遇的桥梁",
    lead: "Prime Connect Egypt 是一家高端商务咨询公司，为中国投资者与全球企业指引进入埃及市场之路。",
    p1: "从公司注册与政府许可，到工业落地、房地产与人才招聘，我们提供端到端解决方案，将市场进入转化为持久的成功。",
    p2: "凭借深厚的本地经验与全球化视野，我们驾驭法规、建立合作并管理运营——让客户安心投资、稳健发展。",
    stats: [
      { value: 12, suffix: "+", label: "年区域深耕经验" },
      { value: 250, suffix: "+", label: "服务投资者与企业" },
      { value: 9, suffix: "", label: "端到端服务领域" },
      { value: 109, suffix: "M", label: "埃及市场覆盖" },
    ],
    points: [
      "中 / 阿 / 英三语顾问",
      "直接对接政府与许可",
      "一站式运营管理",
    ],
  },
  services: {
    tag: "投资服务",
    title: "市场进入的端到端解决方案",
    subtitle: "您投资埃及旅程中每一个阶段的唯一可靠伙伴。",
    items: [
      { title: "房地产投资", desc: "精选住宅、商业及土地机会，位于埃及增长最快的区域。" },
      { title: "工厂与工业落地", desc: "选址、建设及世界级生产设施的一体化落地。" },
      { title: "进出口解决方案", desc: "通关、物流与贸易架构，让您的货物高效跨境流通。" },
      { title: "公司注册", desc: "依据埃及法律，快速合规的实体注册与公司架构。" },
      { title: "政府关系与许可", desc: "黄金许可、审批及通过正确渠道的合规落地。" },
      { title: "招聘与人力", desc: "为您物色并组建工程师、技术员及多语言团队。" },
      { title: "办公与总部", desc: "高端写字楼、展厅与总部，按您的品牌量身打造。" },
      { title: "工业与市场拓展", desc: "扩大运营、进入新行业并抢占区域需求。" },
    ],
  },
  why: {
    tag: "为何投资埃及",
    title: "为增长而生的市场",
    subtitle: "战略位置、政策激励、持续扩张——埃及是全球最具吸引力的投资目的地之一。",
    items: [
      { title: "战略位置", desc: "地处非洲、中东与欧洲的十字路口，经苏伊士运河连接全球海运。" },
      { title: "政府激励", desc: "黄金许可、税收优惠及为战略项目提供的一站式投资便利。" },
      { title: "增长中的经济", desc: "多元化的改革驱动型经济体，区域最大的消费市场之一。" },
      { title: "区域市场准入", desc: "自贸协定触达非洲与中东逾17亿消费者。" },
      { title: "工业机遇", desc: "世界级工业区、港口与物流走廊，随时可开发。" },
      { title: "年轻熟练的人才", desc: "庞大、受过良好教育且具成本竞争力的人才储备。" },
    ],
    stats: [
      { value: 109, suffix: "M+", label: "人口与消费基础" },
      { value: 1.7, suffix: "B", decimals: 1, label: "可达消费者（自贸）" },
      { value: 12, suffix: "%", label: "经苏伊士的全球贸易占比" },
      { value: 40, suffix: "+", label: "工业与经济区" },
    ],
  },
  workforce: {
    tag: "人才与招聘",
    title: "驱动您运营的人才",
    subtitle: "我们招募、筛选并配置在埃及支撑您业务的人才。",
    items: ["工程师", "工厂工人", "管理团队", "办公人员", "熟练技工", "多语言团队"],
    note: "每位候选人都会经过资格、合规与文化契合度审查——从第一天起即可融入您的组织。",
  },
  expansion: {
    tag: "工业与房地产",
    title: "为成功而打造的空间",
    subtitle: "契合您运营雄心的黄金地段、设施与基础设施。",
    items: [
      { title: "工业园区", desc: "位于成熟、投资者就绪的工业城内的划拨用地。" },
      { title: "仓储物流", desc: "位于战略物流枢纽的现代仓储与配送设施。" },
      { title: "办公空间", desc: "甲级企业写字楼与行政总部。" },
      { title: "商业楼宇", desc: "黄金地段的零售、展厅与综合体空间。" },
      { title: "工厂厂房", desc: "按需定制的生产设施，配套完善的公用设施与物流。" },
      { title: "港口与物流", desc: "毗邻主要港口与苏伊士运河，畅达全球贸易。" },
    ],
  },
  testimonials: {
    tag: "客户体验",
    title: "全球投资者的信赖之选",
    subtitle: "与国际企业建立真实合作，共同塑造在埃及的未来。",
    items: [
      { quote: "Prime Connect Egypt 将复杂的市场进入变得流畅而透明。我们的工厂比预期更快投入运营。", name: "陈伟", role: "运营总监", company: "ShengTai Industries", country: "中国" },
      { quote: "他们在政府关系方面的专业能力为我们节省了数月时间。是真正专业的合作伙伴。", name: "Sarah Müller", role: "区域负责人", company: "Helvetia Capital", country: "瑞士" },
      { quote: "从许可到招聘，他们端到端管理了一切。我们满怀信心地完成了投资。", name: "田中浩", role: "首席执行官", company: "Osaka Trading Group", country: "日本" },
      { quote: "一支既懂埃及国情又通晓国际标准的卓越团队。强烈推荐。", name: "Omar Al-Farsi", role: "投资者", company: "Gulf Holdings", country: "阿联酋" },
    ],
  },
  partners: {
    tag: "合作网络",
    title: "值得信赖的网络",
    subtitle: "与推动投资前行的机构、园区和部门紧密相连。",
    logos: [
      "投资部",
      "苏伊士运河管理局",
      "工业发展局",
      "新行政首都",
      "经济区管理总局",
      "埃及银行联合会",
      "商会联合会",
      "投资区理事会",
    ],
  },
  contact: {
    tag: "联系我们",
    title: "开启您的埃及之旅",
    subtitle: "与我们的顾问团队对话，发现等待您的机遇。",
    form: {
      name: "姓名",
      email: "电子邮箱",
      phone: "电话 / WhatsApp",
      company: "公司",
      interest: "关注领域",
      message: "请介绍您的项目",
      submit: "提交咨询",
    },
    info: {
      email: "邮箱",
      phone: "电话",
      whatsapp: "WhatsApp",
      address: "总部",
      hours: "工作时间",
    },
    values: {
<<<<<<< HEAD
      email: "mo@primeegypt",
      email2: "hesham@primeegypt",
      email3: "khalifa@primeegypt",
=======
      emails: ["mo@primeegypt", "hesham@primeegypt", "khalifa@primeegypt"],
>>>>>>> abdf80f6347f44d1bcd13098b37c180f40bc7fef
      phone: "+20 10 00982441",
      whatsapp: "+20 10 00982441",
      address: "埃及开罗，新行政首都",
      hours: "周日至周四 · 9:00 – 18:00（埃及时间）",
    },
    whatsappCta: "通过 WhatsApp 联系",
    success: "感谢您。我们的顾问团队将在24小时内回复。",
    mapTitle: "立足埃及腹地的战略基地",
  },
  footer: {
    tagline: "您值得信赖的门户，连接中国投资者、国际企业与埃及市场。",
    explore: "浏览",
    servicesCol: "解决方案",
    contactCol: "联系",
    rights: "保留所有权利。",
    privacy: "隐私政策",
    terms: "条款",
    built: "为全球投资者打造。",
  },
};

export const translations: Record<Lang, Translation> = { en, ar, zh };
export type { Translation };