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
    desc: "We connect Chinese investors and international companies with high-value opportunities across Egypt.",
    ctaPrimary: "Start Your Business",
    ctaSecondary: "Contact Us",
    scroll: "Scroll to explore",
    stats: [
      { v: "24h", l: "Advisory response" },
      { v: "3", l: "Languages spoken" },
      { v: "100%", l: "Turnkey delivery" },
    ] as MiniStat[],
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
      email: "mo@primeegypt",
      email2: "hesham@primeegypt",
      email3: "khalifa@primeegypt",
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
  services: {
    tag: "Investment Services",
    title: "End-to-End Solutions for Market Entry",
    subtitle: "A single, trusted partner for every stage of your investment journey in Egypt.",
    items: [
      { title: "Real Estate Investment", desc: "Curated opportunities across Egypt." },
      { title: "Factory & Industrial Setup", desc: "Turnkey production facilities." },
      { title: "Import & Export Solutions", desc: "Efficient cross-border trade." },
      { title: "Company Formation", desc: "Fast entity registration." },
      { title: "Government Relations", desc: "Golden licenses & approvals." },
      { title: "Recruitment", desc: "Skilled multilingual teams." },
    ] as ServiceItem[],
  },
  about: {
    tag: "Who We Are",
    title: "A Bridge Between Ambition and Opportunity",
    lead: "Prime Connect Egypt guides investors into the Egyptian market.",
    p1: "From company formation to industrial setup, we deliver end-to-end solutions.",
    p2: "With deep local expertise, we navigate regulations and manage operations.",
    stats: [
      { value: 12, suffix: "+", label: "Years of expertise" },
      { value: 250, suffix: "+", label: "Investors guided" },
      { value: 9, suffix: "", label: "Service verticals" },
      { value: 109, suffix: "M", label: "Market reach" },
    ] as StatItem[],
  },
  why: {
    tag: "Why Egypt",
    title: "A Market Built for Growth",
    subtitle: "Strategic, incentivised and expanding.",
    items: [
      { title: "Strategic Location", desc: "Crossroads of Africa, Middle East and Europe." },
      { title: "Government Incentives", desc: "Golden licenses and tax exemptions." },
      { title: "Growing Economy", desc: "One of the region's largest consumer markets." },
    ] as ServiceItem[],
  },
  workforce: {
    tag: "Workforce & Recruitment",
    title: "The Talent Behind Your Operations",
    subtitle: "We recruit and deploy talent for your business.",
    items: ["Engineers", "Factory Workers", "Management Teams", "Office Staff"],
  },
  expansion: {
    tag: "Industrial & Real Estate",
    title: "Spaces Engineered for Success",
    subtitle: "Prime locations tailored to your ambitions.",
    items: [
      { title: "Industrial Zones", desc: "Investor-ready industrial cities." },
      { title: "Warehouses", desc: "Modern storage facilities." },
      { title: "Office Spaces", desc: "Grade-A corporate offices." },
    ] as ServiceItem[],
  },
  testimonials: {
    tag: "Client Experiences",
    title: "Trusted by Global Investors",
    subtitle: "Real partnerships with international companies.",
    items: [
      { quote: "Prime Connect Egypt made market entry smooth and transparent.", name: "Wei Chen", role: "Operations Director", company: "ShengTai Industries", country: "China" },
      { quote: "Their expertise saved us months of work.", name: "Sarah Müller", role: "Regional Head", company: "Helvetia Capital", country: "Switzerland" },
    ],
  },
  partners: {
    tag: "Network",
    title: "A Network You Can Rely On",
    subtitle: "Connected to authorities and institutions.",
    logos: [
      "Ministry of Investment",
      "Suez Canal Authority",
      "Industrial Development Authority",
      "New Administrative Capital",
    ],
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
    desc: "نربط المستثمرين الصينيين والشركات العالمية بأعلى الفرص قيمة في مصر.",
    ctaPrimary: "ابدأ أعمالك",
    ctaSecondary: "تواصل معنا",
    scroll: "مرّر للاستكشاف",
    stats: [
      { v: "24 س", l: "زمن الاستجابة" },
      { v: "3", l: "لغات" },
      { v: "100%", l: "تنفيذ متكامل" },
    ],
  },
  contact: {
    tag: "تواصل معنا",
    title: "ابدأ رحلتك في مصر",
    subtitle: "تحدّث مع فريق الاستشارات واكتشف الفرص.",
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
      email: "mo@primeegypt",
      email2: "hesham@primeegypt",
      email3: "khalifa@primeegypt",
      phone: "+20 10 00982441",
      whatsapp: "+20 10 00982441",
      address: "العاصمة الإدارية الجديدة، القاهرة، مصر",
      hours: "الأحد – الخميس · 9:00 – 18:00",
    },
    whatsappCta: "تحدّث عبر واتساب",
    success: "شكرًا لك. سيتواصل معك الفريق خلال 24 ساعة.",
    mapTitle: "قاعدة استراتيجية في قلب مصر",
  },
  footer: {
    tagline: "بوابتك الموثوقة بين المستثمرين الصينيين والسوق المصري.",
    explore: "استكشف",
    servicesCol: "الحلول",
    contactCol: "تواصل",
    rights: "جميع الحقوق محفوظة.",
    privacy: "الخصوصية",
    terms: "الشروط",
    built: "صُمّم للمستثمرين العالميين.",
  },
  services: {
    tag: "خدمات الاستثمار",
    title: "حلول متكاملة لدخول السوق",
    subtitle: "شريكٌ واحد موثوق لكل مرحلة من رحلتك.",
    items: [
      { title: "الاستثمار العقاري", desc: "فرص في أسرع المناطق نمواً." },
      { title: "تأسيس المصانع", desc: "مرافق إنتاج عالمية المستوى." },
      { title: "الاستيراد والتصدير", desc: "تجارة عابرة للحدود بكفاءة." },
      { title: "تأسيس الشركات", desc: "تسجيل سريع ومتوافق." },
      { title: "العلاقات الحكومية", desc: "تراخيص ذهبية وموافقات." },
      { title: "التوظيف", desc: "فرق متعددة اللغات." },
    ],
  },
  about: {
    tag: "من نحن",
    title: "جسرٌ بين الطموح والفرصة",
    lead: "برايم كونيكت مصر ترشد المستثمرين نحو السوق المصري.",
    p1: "من تأسيس الشركات إلى الإعداد الصناعي، نقدّم حلولاً متكاملة.",
    p2: "بخبرة محلية عميقة، نتعامل مع اللوائح وندير العمليات.",
    stats: [
      { value: 12, suffix: "+", label: "سنوات خبرة" },
      { value: 250, suffix: "+", label: "مستثمر" },
      { value: 9, suffix: "", label: "قطاعات خدمية" },
      { value: 109, suffix: "م", label: "وصول للسوق" },
    ],
  },
  why: {
    tag: "لماذا مصر",
    title: "سوقٌ صُنع للنمو",
    subtitle: "استراتيجية ومحفّزة ومتنامية.",
    items: [
      { title: "موقع استراتيجي", desc: "على مفترق طرق إفريقيا والشرق الأوسط." },
      { title: "حوافز حكومية", desc: "تراخيص ذهبية وإعفاءات." },
      { title: "اقتصاد نامٍ", desc: "من أكبر أسواق الاستهلاك." },
    ],
  },
  workforce: {
    tag: "القوى العاملة",
    title: "الكفاءات التي تقود عملياتك",
    subtitle: "نوظّف الكفاءات التي تُشغّل أعمالك.",
    items: ["مهندسون", "عمال مصانع", "فرق إدارية", "موظفو مكاتب"],
  },
  expansion: {
    tag: "الصناعة والعقارات",
    title: "مساحات مصمّمة للنجاح",
    subtitle: "مواقع رئيسية مُفصّلة على طموحاتك.",
    items: [
      { title: "مناطق صناعية", desc: "مدن صناعية جاهزة." },
      { title: "مستودعات", desc: "مرافق تخزين حديثة." },
      { title: "مساحات مكتبية", desc: "مكاتب شركات من الفئة أ." },
    ],
  },
  testimonials: {
    tag: "تجارب العملاء",
    title: "ثقة المستثمرين العالميين",
    subtitle: "شراكات حقيقية مع شركات دولية.",
    items: [
      { quote: "برايم كونيكت مصر جعلت دخول السوق سلساً وشفافاً.", name: "وي تشن", role: "مدير العمليات", company: "ShengTai Industries", country: "الصين" },
      { quote: "خبرتهم وفّرت علينا أشهرًا.", name: "سارة مولر", role: "رئيس إقليمي", company: "Helvetia Capital", country: "سويسرا" },
    ],
  },
  partners: {
    tag: "الشبكة",
    title: "شبكةٌ يمكنك الاعتماد عليها",
    subtitle: "مرتبطون بالجهات والمؤسسات.",
    logos: [
      "وزارة الاستثمار",
      "هيئة قناة السويس",
      "جهاز التنمية الصناعية",
      "العاصمة الإدارية الجديدة",
    ],
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
    desc: "我们为中国投资者与国际企业连接埃及最具价值的机会。",
    ctaPrimary: "启动您的业务",
    ctaSecondary: "联系我们",
    scroll: "向下滚动探索",
    stats: [
      { v: "24时", l: "顾问响应" },
      { v: "3", l: "支持语言" },
      { v: "100%", l: "一站式交付" },
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
      email: "mo@primeegypt",
      email2: "hesham@primeegypt",
      email3: "khalifa@primeegypt",
      phone: "+20 10 00982441",
      whatsapp: "+20 10 00982441",
      address: "埃及开罗，新行政首都",
      hours: "周日至周四 · 9:00 – 18:00",
    },
    whatsappCta: "通过 WhatsApp 联系",
    success: "感谢您。我们的顾问团队将在24小时内回复。",
    mapTitle: "立足埃及腹地的战略基地",
  },
  footer: {
    tagline: "您值得信赖的门户，连接中国投资者与埃及市场。",
    explore: "浏览",
    servicesCol: "解决方案",
    contactCol: "联系",
    rights: "保留所有权利。",
    privacy: "隐私政策",
    terms: "条款",
    built: "为全球投资者打造。",
  },
  services: {
    tag: "投资服务",
    title: "市场进入的端到端解决方案",
    subtitle: "您投资埃及旅程中每一个阶段的唯一可靠伙伴。",
    items: [
      { title: "房地产投资", desc: "位于增长最快区域的精选机会。" },
      { title: "工厂与工业落地", desc: "世界级生产设施。" },
      { title: "进出口解决方案", desc: "高效跨境贸易。" },
      { title: "公司注册", desc: "快速合规注册。" },
      { title: "政府关系与许可", desc: "黄金许可与审批。" },
      { title: "招聘与人力", desc: "多语言团队。" },
    ],
  },
  about: {
    tag: "关于我们",
    title: "连接雄心与机遇的桥梁",
    lead: "Prime Connect Egypt 为中国投资者指引进入埃及市场之路。",
    p1: "从公司注册到工业落地，我们提供端到端解决方案。",
    p2: "凭借深厚的本地经验与全球化视野，我们驾驭法规并管理运营。",
    stats: [
      { value: 12, suffix: "+", label: "年区域深耕经验" },
      { value: 250, suffix: "+", label: "服务投资者" },
      { value: 9, suffix: "", label: "端到端服务领域" },
      { value: 109, suffix: "M", label: "埃及市场覆盖" },
    ],
  },
  why: {
    tag: "为何投资埃及",
    title: "为增长而生的市场",
    subtitle: "战略位置、政策激励、持续扩张。",
    items: [
      { title: "战略位置", desc: "地处非洲、中东与欧洲的十字路口。" },
      { title: "政府激励", desc: "黄金许可、税收优惠。" },
      { title: "增长中的经济", desc: "区域最大的消费市场之一。" },
    ],
  },
  workforce: {
    tag: "人才与招聘",
    title: "驱动您运营的人才",
    subtitle: "我们招募并配置支撑您业务的人才。",
    items: ["工程师", "工厂工人", "管理团队", "办公人员"],
  },
  expansion: {
    tag: "工业与房地产",
    title: "为成功而打造的空间",
    subtitle: "契合您运营雄心的黄金地段。",
    items: [
      { title: "工业园区", desc: "投资者就绪的工业城。" },
      { title: "仓储物流", desc: "现代仓储设施。" },
      { title: "办公空间", desc: "甲级企业写字楼。" },
    ],
  },
  testimonials: {
    tag: "客户体验",
    title: "全球投资者的信赖之选",
    subtitle: "与国际企业建立真实合作。",
    items: [
      { quote: "Prime Connect Egypt 将复杂的市场进入变得流畅透明。", name: "陈伟", role: "运营总监", company: "ShengTai Industries", country: "中国" },
      { quote: "他们的专业能力为我们节省了数月时间。", name: "Sarah Müller", role: "区域负责人", company: "Helvetia Capital", country: "瑞士" },
    ],
  },
  partners: {
    tag: "合作网络",
    title: "值得信赖的网络",
    subtitle: "与推动投资前行的机构紧密相连。",
    logos: [
      "投资部",
      "苏伊士运河管理局",
      "工业发展局",
      "新行政首都",
    ],
  },
};

export const translations: Record<Lang, Translation> = { en, ar, zh };
export type { Translation };