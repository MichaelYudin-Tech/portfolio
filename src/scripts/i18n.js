/**
 * Client-side i18n for the portfolio.
 * Uses data-i18n attributes + localStorage persistence.
 * Supports English (LTR) and Hebrew (RTL).
 */

const translations = {
    en: {
        // Header
        "header.greeting": "Michael<span>Tech</span>",
        "header.bio": "MichaelTech — Web Development, Software Solutions & Digital Marketing. Custom web development and software solutions for businesses. We build fast, modern websites, web applications, and software systems tailored to business needs. Our services include website development, web apps, business management systems, landing pages, Google Ads campaigns, SEO, and ongoing digital marketing. From a simple business site to a complete management system — we help businesses build a strong digital presence and achieve real results.<br/><br/>Full-Stack Developer from Israel. Specializing in Production-grade web applications, Real-Time systems, and Cross-Platform mobile solutions with React, TypeScript, and Supabase.",

        // Packages
        "packages.label": "Digital Solutions",

        "package.1.title": "Digital Presence",
        "package.1.desc": "A stunning, fast landing page or business website to establish your brand.",
        "package.1.btn": "Order via WhatsApp",
        "package.1.wa": "https://wa.me/972505992409?text=Hi%20Michael%2C%20I%27m%20interested%20in%20the%20Digital%20Presence%20package.",
        "package.1.f1": "Custom Design",
        "package.1.f2": "SEO Optimized",
        "package.1.f3": "Mobile Responsive",
        "package.1.f4": "Contact Form Integration",

        "package.2.title": "Advanced Web App",
        "package.2.desc": "Custom web applications, dashboards, or portals with full functionality.",
        "package.2.btn": "Order via WhatsApp",
        "package.2.wa": "https://wa.me/972505992409?text=Hi%20Michael%2C%20I%27m%20interested%20in%20the%20Advanced%20Web%20App%20package.",
        "package.2.f1": "User Authentication",
        "package.2.f2": "Database Integration",
        "package.2.f3": "Payment Gateway (Optional)",
        "package.2.f4": "Custom Admin Dashboard",

        "package.3.title": "Complete Business Solution",
        "package.3.desc": "Enterprise-grade software, offline-first apps, and marketing management.",
        "package.3.btn": "Consult via WhatsApp",
        "package.3.wa": "https://wa.me/972505992409?text=Hi%20Michael%2C%20I%27d%20like%20to%20consult%20about%20a%20Complete%20Business%20Solution.",
        "package.3.f1": "Cross-Platform (Web/iOS/Android)",
        "package.3.f2": "Real-Time Sync & Offline Support",
        "package.3.f3": "Digital Marketing & SEO Campaigns",
        "package.3.f4": "Ongoing Maintenance & Support",

        // Blog nav
        "blog.link.label": "Blog",
        "blog.link.href": "/blog",

        // Featured writing on homepage
        "writing.label": "Latest Writing",
        "writing.all": "All posts",
        "writing.post.tag": "Web Development",
        "writing.post.date": "May 10, 2026",
        "writing.post.title": "Astro vs WordPress for Small Business",
        "writing.post.desc":
            "Why I stopped building marketing sites with WordPress, and what my Astro stack actually delivers for clients.",
        "writing.post.cta": "Read post",
        "writing.post.href": "/blog/why-astro-not-wordpress",

        // Section labels
        "projects.label": "Current Projects & Clients",

        // Project cards
        "project.ktrms.title": "KT-RMS",
        "project.ktrms.tag": "Enterprise",
        "project.ktrms.desc": "Full-stack, offline-first inventory management system for a supermarket chain. Barcode scanning, real-time stock tracking, and role-based access — built with React, Supabase, and Capacitor.",

        "project.trajectfi.title": "TrajectFi",
        "project.trajectfi.tag": "Finance",
        "project.trajectfi.desc": "Financial trajectory visualization. See where you're actually heading, not just where you are right now.",

        "project.jewishclock.title": "Jewish Clock",
        "project.jewishclock.tag": "Utility",
        "project.jewishclock.desc": "Precise halakhic times with personal alerts.",

        "project.avqb.title": "AVQB",
        "project.avqb.tag": "Business",
        "project.avqb.desc": "Business catalog and branding website for an Israeli importer of Voltronic and Winmaxx products.",

        "project.pigumyashir.title": "Pigum Yashir",
        "project.pigumyashir.tag": "Business",
        "project.pigumyashir.desc": "Marketing site for an Israeli mobile scaffolding rental service — interactive price calculator, transparent pricing, and direct WhatsApp contact.",

        // WorkWithMe / Contact
        "contact.cta": "Let's work together",
        "contact.label": "Get in Touch",
        "contact.email": "Michael.Yudin@protonmail.com",
        "contact.whatsapp": "WhatsApp Me",
        "contact.wa.link": "https://wa.me/972505992409?text=Hi%20Michael%2C%20I%27d%20like%20to%20work%20together.",
        "contact.website": "michaeltech.net",
        "contact.location": "Harish, Israel",

        // Support
        "support.text": "Your support helps me keep building and supports my family.",
        "support.btn": "Buy me a coffee",

        // Footer
        "footer.text": "Built with care in <span>Harish, Israel</span>",

        // Language toggle
        "lang.toggle": "עברית",

        // KT-RMS page
        "ktrms.back": "Back",
        "ktrms.tag1": "Enterprise",
        "ktrms.tag2": "Production",
        "ktrms.tag3": "Private Repo",
        "ktrms.title": "KT-RMS",
        "ktrms.subtitle": "Supermarket Inventory Management System",
        "ktrms.hero.desc": "A full-stack, offline-first inventory management PWA for a supermarket chain — built with React, Supabase, and Capacitor for cross-platform deployment on web, Android, and iOS.",

        "ktrms.problem.label": "The Problem",
        "ktrms.problem.text": "The client's supermarket chain was managing inventory with manual processes. Stock counts were unreliable, popular items would go out-of-stock without warning, and warehouse staff in areas with poor connectivity had no way to record movements. They needed a custom-built system tailored to their workflows, with a full Hebrew/RTL interface — one that's easy to adopt and built incrementally to match the chain's evolving needs.",

        "ktrms.solution.label": "The Solution",
        "ktrms.solution.text": "I designed KT-RMS as an offline-first, mobile-native inventory system with real-time barcode scanning, an immutable transaction ledger, role-based access control, and background sync. Staff can scan, track, and manage inventory from any device — smartphones on the warehouse floor, tablets at the dock, or desktops in the back office.",

        "ktrms.features.label": "Key Features",
        "ktrms.feature.1.title": "Barcode Scanning",
        "ktrms.feature.1.desc": "Real-time camera-based scanning with multiple modes — Stock In, Stock Out, Lookup, Direct-to-Shelf, Return to Supplier.",
        "ktrms.feature.2.title": "Inventory Ledger",
        "ktrms.feature.2.desc": "Immutable transaction ledger tracking every stock movement with a full audit trail.",
        "ktrms.feature.3.title": "Real-Time Tracking",
        "ktrms.feature.3.desc": "Trigger-automated current_stock table for instant stock level queries without recalculating history.",
        "ktrms.feature.4.title": "Role-Based Access",
        "ktrms.feature.4.desc": "Granular permissions system (Admin, Manager, Clerk, Trainee) with location-scoped role assignments.",
        "ktrms.feature.5.title": "Offline-First",
        "ktrms.feature.5.desc": "IndexedDB storage with Dexie.js, operation queuing, and background sync for seamless transitions.",
        "ktrms.feature.6.title": "Full Hebrew / RTL",
        "ktrms.feature.6.desc": "Complete internationalization with i18next, dynamic RTL/LTR layout switching.",
        "ktrms.feature.7.title": "Smart Low-Stock Alerts",
        "ktrms.feature.7.desc": "Per-product configurable thresholds with parent-child pack aggregation.",
        "ktrms.feature.8.title": "CSV Import",
        "ktrms.feature.8.desc": "Bulk product lookup and auto-population from supplier CSV files with Hebrew encoding support.",

        "ktrms.arch.label": "Architecture",
        "ktrms.arch.frontend": "Frontend",
        "ktrms.arch.backend": "Backend",
        "ktrms.arch.mobile": "Mobile & PWA",
        "ktrms.arch.data": "Data Layer",

        "ktrms.db.label": "Database Design",
        "ktrms.db.1.title": "Immutable Ledger",
        "ktrms.db.1.desc": "inventory_transactions is append-only with correction chaining via corrected_transaction_id. No edits, no deletes — full audit trail.",
        "ktrms.db.2.title": "Derived Stock Table",
        "ktrms.db.2.desc": "current_stock is automatically maintained by PostgreSQL triggers on every transaction insert — no recalculation needed.",
        "ktrms.db.3.title": "Hierarchical Locations",
        "ktrms.db.3.desc": "Locations support unlimited nesting via self-referencing parent_id with materialized paths and short codes for barcode labels.",
        "ktrms.db.4.title": "32 Managed Migrations",
        "ktrms.db.4.desc": "Clean, incremental database evolution tracked in version control — from initial schema to production-grade RLS policies.",

        "ktrms.flows.label": "Key User Flows",
        "ktrms.flow.1.title": "Barcode Scan → Stock Movement",
        "ktrms.flow.1.desc": "Staff selects mode (IN/OUT/Direct-to-Shelf), scans barcode, system identifies product, opens transaction form with context-aware location filtering.",
        "ktrms.flow.2.title": "Product Registration",
        "ktrms.flow.2.desc": "Scan unknown barcode → system checks database then CSV → auto-populates form with available data → staff completes and saves.",
        "ktrms.flow.3.title": "Inventory Dashboard",
        "ktrms.flow.3.desc": "Real-time stock levels with low-stock highlighting, filterable views, and parent-child aggregation toggle.",

        "ktrms.note.text": "This is an active, production-targeted project for a real business client. Code is private. Screenshots and live demo available on request.",
        "ktrms.note.cta": "Request a Demo",
    },

    he: {
        // Header
        "header.greeting": "Michael<span>Tech</span>",
        "header.bio": "MichaelTech — פיתוח אתרים, פתרונות תוכנה ושיווק דיגיטלי. פיתוח אתרים ופתרונות תוכנה מותאמים אישית לעסקים. אנחנו בונים אתרים מהירים ומודרניים, אפליקציות ווב ומערכות תוכנה מותאמות לצרכי העסק. השירותים שלנו כוללים בניית אתרים, פיתוח אפליקציות ווב, מערכות ניהול לעסקים, דפי נחיתה, ניהול קמפיינים בגוגל אדס, קידום אורגני (SEO) ושיווק דיגיטלי שוטף. מאתר עסקי פשוט ועד מערכת ניהול מלאה — אנחנו עוזרים לעסקים לבנות נוכחות דיגיטלית חזקה ולהשיג תוצאות אמיתיות.<br/><br/>מפתח Full-Stack מישראל. מתמחה בבניית אפליקציות ווב ברמת Production, מערכות Real-Time ופתרונות מובייל Cross-Platform עם React, TypeScript ו-Supabase.",

        // Packages
        "packages.label": "פתרונות דיגיטליים",

        "package.1.title": "נוכחות דיגיטלית",
        "package.1.desc": "דף נחיתה או אתר תדמית מהיר ומעוצב לביסוס המותג שלך.",
        "package.1.btn": "הזמן בוואטסאפ",
        "package.1.wa": "https://wa.me/972505992409?text=היי%20מיכאל%2C%20אני%20מתעניין%20בחבילת%20הנוכחות%20הדיגיטלית.",
        "package.1.f1": "עיצוב מותאם אישית",
        "package.1.f2": "אופטימיזציה למנועי חיפוש (SEO)",
        "package.1.f3": "התאמה מושלמת למובייל",
        "package.1.f4": "אינטגרציה של טפסי יצירת קשר",

        "package.2.title": "אפליקציית ווב מתקדמת",
        "package.2.desc": "אפליקציות ווב, דשבורדים או פורטלים עם פונקציונליות מלאה.",
        "package.2.btn": "הזמן בוואטסאפ",
        "package.2.wa": "https://wa.me/972505992409?text=היי%20מיכאל%2C%20אני%20מתעניין%20בחבילת%20אפליקציית%20וויב%20מתקדמת.",
        "package.2.f1": "הרשמה וניהול משתמשים",
        "package.2.f2": "אינטגרציה למסד נתונים",
        "package.2.f3": "אפשרות לסליקת אשראי",
        "package.2.f4": "דשבורד ניהול מותאם אישית",

        "package.3.title": "פתרון עסקי מושלם",
        "package.3.desc": "תוכנה ברמת אנטרפרייז, מערכות תומכות אופליין וניהול שיווק מקיף.",
        "package.3.btn": "ייעוץ בוואטסאפ",
        "package.3.wa": "https://wa.me/972505992409?text=היי%20מיכאל%2C%20אשמח%20להתייעץ%20לגבי%20פתרון%20עסקי%20כולל.",
        "package.3.f1": "תמיכה בכל הפלטפורמות",
        "package.3.f2": "סנכרון בזמן אמת ותמיכה באופליין",
        "package.3.f3": "ניהול קמפיינים ושיווק דיגיטלי",
        "package.3.f4": "תחזוקה שוטפת ותמיכה טכנית",

        // Blog nav
        "blog.link.label": "בלוג",
        "blog.link.href": "/he/blog",

        // Featured writing on homepage
        "writing.label": "מהבלוג",
        "writing.all": "לכל הפוסטים",
        "writing.post.tag": "פיתוח אתרים",
        "writing.post.date": "11 במאי 2026",
        "writing.post.title": "Astro מול WordPress לאתרים עסקיים",
        "writing.post.desc":
            "למה הפסקתי לבנות אתרי תדמית בוורדפרס, ומה הסטאק של Astro באמת נותן ללקוחות שלי.",
        "writing.post.cta": "לקריאת הפוסט",
        "writing.post.href": "/he/blog/why-astro-not-wordpress",

        // Section labels
        "projects.label": "פרויקטים ולקוחות",

        // Project cards
        "project.ktrms.title": "KT-RMS",
        "project.ktrms.tag": "ארגוני",
        "project.ktrms.desc": "מערכת ניהול מלאי Full-Stack עם תמיכה בעבודה ללא רשת, עבור רשת סופרמרקטים. סריקת ברקוד, מעקב מלאי בזמן אמת והרשאות לפי תפקיד — נבנתה עם React, Supabase ו-Capacitor.",

        "project.trajectfi.title": "TrajectFi",
        "project.trajectfi.tag": "פיננסים",
        "project.trajectfi.desc": "כלי לויזואליזציה של מגמות פיננסיות. לראות לאן אתה באמת הולך, לא רק איפה אתה עכשיו.",

        "project.jewishclock.title": "שעון יהודי",
        "project.jewishclock.tag": "כלי שימושי",
        "project.jewishclock.desc": "זמני הלכה מדויקים עם התראות אישיות.",

        "project.avqb.title": "AVQB",
        "project.avqb.tag": "עסקי",
        "project.avqb.desc": "אתר תדמית קטלוגי עסקי לחברת ייבוא של מוצרי Voltronic ו-Winmaxx.",

        "project.pigumyashir.title": "פיגום ישיר",
        "project.pigumyashir.tag": "עסקי",
        "project.pigumyashir.desc": "אתר שיווקי לחברת השכרת פיגומים ניידים בישראל — מחשבון מחיר אינטראקטיבי, מחירים שקופים ויצירת קשר ישירה בוואטסאפ.",

        // WorkWithMe / Contact
        "contact.cta": "בואו נעבוד ביחד",
        "contact.label": "יצירת קשר",
        "contact.email": "Michael.Yudin@protonmail.com",
        "contact.whatsapp": "שלחו וואטסאפ",
        "contact.wa.link": "https://wa.me/972505992409?text=היי%20מיכאל%2C%20הייתי%20שמח%20שנעבוד%20ביחד.",
        "contact.website": "michaeltech.net",
        "contact.location": "חריש, ישראל",

        // Support
        "support.text": "התמיכה שלכם עוזרת לי להמשיך לפתח ולפרנס את המשפחה.",
        "support.btn": "קנו לי קפה",

        // Footer
        "footer.text": "נבנה באהבה ב<span>חריש, ישראל</span>",

        // Language toggle
        "lang.toggle": "English",

        // KT-RMS page
        "ktrms.back": "חזרה",
        "ktrms.tag1": "ארגוני",
        "ktrms.tag2": "Production",
        "ktrms.tag3": "קוד סגור",
        "ktrms.title": "KT-RMS",
        "ktrms.subtitle": "מערכת ניהול מלאי לרשת סופרמרקטים",
        "ktrms.hero.desc": "מערכת ניהול מלאי PWA מלאה עם תמיכה בעבודה ללא רשת — נבנתה עם React, Supabase ו-Capacitor לפריסה על Web, Android ו-iOS.",

        "ktrms.problem.label": "האתגר",
        "ktrms.problem.text": "הלקוח ניהל מלאי בתהליכים ידניים. ספירות לא היו מדויקות, מוצרים נגמרו ללא התרעה, ולעובדים באזורים עם קליטה חלשה לא הייתה דרך לתעד תנועות סחורה. הלקוח חיפש מערכת מותאמת אישית שתתאים לתהליכי העבודה שלו, עם ממשק בעברית מלאה — מערכת שקל לאמץ, ושנבנית בהדרגה בהתאם לצרכי הרשת.",

        "ktrms.solution.label": "הפתרון",
        "ktrms.solution.text": "תכננתי ובניתי את KT-RMS כמערכת מלאי שעובדת גם בלי חיבור לרשת, עם סריקת ברקוד בזמן אמת, לוג עסקאות שלא ניתן לשנות, ניהול הרשאות לפי תפקיד וסנכרון אוטומטי ברקע. הצוות עובד מכל מכשיר — טלפון במחסן, טאבלט ברציף הפריקה או מחשב במשרד.",

        "ktrms.features.label": "יכולות מרכזיות",
        "ktrms.feature.1.title": "סריקת ברקוד",
        "ktrms.feature.1.desc": "סריקה במצלמה בזמן אמת עם מצבי עבודה שונים — כניסת סחורה, יציאה, חיפוש, העברה למדף והחזרה לספק.",
        "ktrms.feature.2.title": "לוג מלאי",
        "ktrms.feature.2.desc": "לוג עסקאות קבוע שמתעד כל תנועת מלאי עם מסלול ביקורת מלא — ללא אפשרות למחיקה או עריכה.",
        "ktrms.feature.3.title": "מעקב בזמן אמת",
        "ktrms.feature.3.desc": "טבלת מלאי נוכחי שמתעדכנת אוטומטית בכל עסקה באמצעות Triggers — ללא צורך בחישוב מחדש.",
        "ktrms.feature.4.title": "הרשאות לפי תפקיד",
        "ktrms.feature.4.desc": "מערכת הרשאות מפורטת (מנהל, אחראי משמרת, עובד, מתאמן) עם הגבלה לפי סניף ומיקום.",
        "ktrms.feature.5.title": "Offline-First",
        "ktrms.feature.5.desc": "אחסון מקומי עם IndexedDB, תור פעולות וסנכרון אוטומטי — המערכת עובדת גם ללא חיבור לרשת.",
        "ktrms.feature.6.title": "עברית מלאה + RTL",
        "ktrms.feature.6.desc": "תמיכה מלאה בעברית עם i18next, כולל היפוך כיוון תצוגה אוטומטי.",
        "ktrms.feature.7.title": "התראות מלאי חכמות",
        "ktrms.feature.7.desc": "סף התראה מותאם לכל מוצר, עם חישוב משולב של יחידות בודדות ואריזות.",
        "ktrms.feature.8.title": "ייבוא CSV",
        "ktrms.feature.8.desc": "טעינה מרוכזת של מוצרים מקובצי CSV של ספקים, כולל תמיכה בקידוד עברית.",

        "ktrms.arch.label": "ארכיטקטורה",
        "ktrms.arch.frontend": "Frontend",
        "ktrms.arch.backend": "Backend",
        "ktrms.arch.mobile": "Mobile & PWA",
        "ktrms.arch.data": "Data Layer",

        "ktrms.db.label": "תכנון בסיס הנתונים",
        "ktrms.db.1.title": "לוג עסקאות קבוע",
        "ktrms.db.1.desc": "טבלת inventory_transactions עובדת במנגנון Append-Only עם שרשרת תיקונים. ללא עריכה, ללא מחיקה — מסלול ביקורת מלא.",
        "ktrms.db.2.title": "טבלת מלאי נגזרת",
        "ktrms.db.2.desc": "current_stock מתעדכנת אוטומטית דרך Triggers של PostgreSQL בכל הוספת עסקה — ללא חישוב מחדש.",
        "ktrms.db.3.title": "מבנה מיקומים היררכי",
        "ktrms.db.3.desc": "מיקומים עם קינון ללא הגבלה, Materialized Paths וקודים קצרים לתוויות ברקוד.",
        "ktrms.db.4.title": "32 מיגרציות מנוהלות",
        "ktrms.db.4.desc": "פיתוח הדרגתי ומסודר של הסכמה, עם מעקב גרסאות — מסכמה ראשונית ועד מדיניות RLS ברמת Production.",

        "ktrms.flows.label": "תהליכי עבודה",
        "ktrms.flow.1.title": "סריקה ← תנועת מלאי",
        "ktrms.flow.1.desc": "העובד בוחר מצב עבודה (כניסה / יציאה / העברה למדף), סורק ברקוד, המערכת מזהה את המוצר ופותחת טופס עסקה עם סינון מיקומים רלוונטי.",
        "ktrms.flow.2.title": "רישום מוצר חדש",
        "ktrms.flow.2.desc": "סריקת ברקוד לא מוכר ← בדיקה במסד הנתונים ובקובצי CSV ← מילוי אוטומטי של הטופס ← העובד משלים ושומר.",
        "ktrms.flow.3.title": "דשבורד מלאי",
        "ktrms.flow.3.desc": "תצוגת מלאי בזמן אמת עם סימון מוצרים נמוכים, סינון מתקדם ומעבר בין תצוגה של יחידות ואריזות.",

        "ktrms.note.text": "זהו פרויקט פעיל שנבנה עבור לקוח עסקי אמיתי. הקוד סגור. צילומי מסך והדגמה חיה — לפי בקשה.",
        "ktrms.note.cta": "בקשו הדגמה",
    },
};

/** Get stored language, or detect from browser/device language */
function getLang() {
    const stored = localStorage.getItem("portfolio-lang");
    if (stored) return stored;

    // Detect device language — default to Hebrew if browser is set to Hebrew
    const browserLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return browserLang.startsWith("he") ? "he" : "en";
}

/** Set language and persist */
function setLang(lang) {
    localStorage.setItem("portfolio-lang", lang);
    applyLang(lang);
}

/** Apply translations to the DOM */
function applyLang(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // Set dir and lang on <html>
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";

    // Translate all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // Translate all hrefs with data-i18n-href
    document.querySelectorAll("[data-i18n-href]").forEach((el) => {
        const key = el.getAttribute("data-i18n-href");
        if (dict[key] !== undefined) {
            el.href = dict[key];
        }
    });

    // Update toggle buttons
    document.querySelectorAll("[data-i18n-toggle]").forEach((btn) => {
        btn.textContent = dict["lang.toggle"];
    });
}

/** Toggle between en and he */
function toggleLang() {
    const current = getLang();
    setLang(current === "en" ? "he" : "en");
}

// Static-bilingual pages (e.g. /blog, /he/blog) render their language server-side
// and must not be touched by client-side translation. They opt out via
// <html data-static-i18n="true">.
const isStaticPage =
    typeof document !== "undefined" &&
    document.documentElement.dataset.staticI18n === "true";

if (!isStaticPage) {
    // Initialize on load
    document.addEventListener("DOMContentLoaded", () => {
        applyLang(getLang());
    });

    // Also apply immediately for inline scripts that run after DOM is ready
    if (document.readyState !== "loading") {
        applyLang(getLang());
    }
}

// Expose globally
window.__i18n = { getLang, setLang, toggleLang, applyLang, translations };
