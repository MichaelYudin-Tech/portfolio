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

        "project.pigumrms.title": "Pigum Yashir RMS",
        "project.pigumrms.tag": "Pigum Yashir RMS",
        "project.pigumrms.desc": "Rental management system for an Israeli scaffolding and generator rental business. Live availability, conflict-free booking, field-staff delivery flow, and legal-grade evidence trails — built Hebrew-first.",

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

        // Pigum Yashir RMS page
        "pigumrms.back": "Back",
        "pigumrms.tag1": "Active Development",
        "pigumrms.tag2": "Hebrew-First",
        "pigumrms.tag3": "Multi-Vertical",
        "pigumrms.title": "Pigum Yashir RMS",
        "pigumrms.subtitle": "Rental Management System",
        "pigumrms.hero.desc": "A complete operational platform for rental businesses — inventory, customer relationships, field handoffs, and legal evidence trails — built around the realities of running a small rental operation in Hebrew on Israeli construction sites.",

        "pigumrms.ops.label": "Rental Operations",
        "pigumrms.ops.p1": "A rental business runs on four constants. There's equipment that's either available, booked, in repair, or out on rent right now. There are customers booking in advance for specific date ranges, sometimes weeks before pickup. There are physical handoffs — the moment a unit leaves the yard and the moment it comes back — that need photo evidence and signatures. And there's a paper trail that has to hold up when a customer disputes a charge or claims damage on arrival.",
        "pigumrms.ops.p2": "These four constants don't shift between scaffolding and party tents, between generators and medical equipment. The verticals change. The shape of the operation doesn't. Pigum Yashir RMS is built around that shape.",

        "pigumrms.worlds.label": "Two Worlds, One System",
        "pigumrms.worlds.office.tag": "The Office",
        "pigumrms.worlds.office.title": "Manager's Desktop View",
        "pigumrms.worlds.office.desc": "A live calendar of every unit across the next two weeks. Inventory status at a glance, customer history with full rental records, and order creation that catches double-bookings before they happen — not after the truck is already loaded.",
        "pigumrms.worlds.field.tag": "The Field",
        "pigumrms.worlds.field.title": "Field-Staff Mobile View",
        "pigumrms.worlds.field.desc": "Today's deliveries and pickups. One tap into a handoff flow with photo capture and signature, designed to complete in under 30 seconds between truck and customer — on whatever cell signal the construction site happens to have.",
        "pigumrms.worlds.foot": "Same data, same database. Different surfaces, calibrated to where the work actually happens.",

        "pigumrms.cap.label": "Capabilities",
        "pigumrms.cap.1.title": "Live Availability, 14+ Days Ahead",
        "pigumrms.cap.1.desc": "Every unit's status at a glance — available, reserved, out on rent, in repair — across the full booking horizon.",
        "pigumrms.cap.2.title": "Calendar View with Conflict-Free Booking",
        "pigumrms.cap.2.desc": "Daterange-aware booking enforced at the database layer. Two staff members can't double-book the same unit, ever.",
        "pigumrms.cap.3.title": "Customer Directory with Full History",
        "pigumrms.cap.3.desc": "Every rental, every receipt, every signature tied back to the customer. One-tap to call, WhatsApp, or open the file.",
        "pigumrms.cap.4.title": "Orders, Returns, Cancellations",
        "pigumrms.cap.4.desc": "Full order lifecycle — initial booking, on-site delivery, mid-rental adjustments, return, and reconciliation.",
        "pigumrms.cap.5.title": "Field-Staff Mobile Delivery Flow",
        "pigumrms.cap.5.desc": "Built for iPhone use in the truck. Today's deliveries and pickups, one tap into the handoff flow.",
        "pigumrms.cap.6.title": "Sub-30-Second Handoff Target",
        "pigumrms.cap.6.desc": "Photos, signature, confirm — designed to complete on real cellular conditions between truck and customer.",
        "pigumrms.cap.7.title": "In-Browser Photo Compression",
        "pigumrms.cap.7.desc": "Photos compressed on device before upload, so the flow doesn't stall on bad reception at a construction site.",
        "pigumrms.cap.8.title": "Digital Signature with Photo-of-Paper Fallback",
        "pigumrms.cap.8.desc": "Touchscreen signature is the primary path. A photo of a signed paper is captured the same way when needed.",
        "pigumrms.cap.9.title": "Hebrew RTL, Native to the Workflow",
        "pigumrms.cap.9.desc": "Built Hebrew-first from the data model up — not a translation layer bolted onto an English app.",
        "pigumrms.cap.10.title": "Role-Aware Access with Row-Level Permissions",
        "pigumrms.cap.10.desc": "Office and field staff see what they're meant to see. Permissions enforced in the database, not just the UI.",

        "pigumrms.evidence.label": "Evidence by Design",
        "pigumrms.evidence.p1": "Rental disputes happen. A customer claims a unit arrived damaged. A site manager insists nobody signed for the delivery. A piece of equipment comes back with a dent nobody owns. The platform is built so the evidence is already on the record before the dispute exists — photos at delivery, photos at return, signatures from whoever physically received the units.",
        "pigumrms.evidence.p2": "The rental contract and the delivery receipt are deliberately kept separate. The contract is signed in advance by the customer's authorized representative. The delivery receipt is signed on-site by whoever takes the units — a foreman, a site engineer, a driver. The same person rarely signs both, and the platform doesn't pretend otherwise.",

        "pigumrms.arch.label": "Architecture",
        "pigumrms.arch.frontend": "Frontend",
        "pigumrms.arch.backend": "Backend",
        "pigumrms.arch.storage": "Storage & Media",
        "pigumrms.arch.deploy": "Deployment",

        "pigumrms.vertical.label": "Adaptable to Any Rental Vertical",
        "pigumrms.vertical.intro": "The bones of the platform — dated inventory, customer relationships, field handoffs, evidence trails — are universal to rental. The current deployment serves a scaffolding and generator rental business; the same foundation adapts cleanly to:",
        "pigumrms.vertical.item.1": "Construction equipment rental",
        "pigumrms.vertical.item.2": "Tool rental",
        "pigumrms.vertical.item.3": "Party and event supply rental",
        "pigumrms.vertical.item.4": "A/V and production gear",
        "pigumrms.vertical.item.5": "Specialty rental — medical equipment, scientific instruments, specialty vehicles",
        "pigumrms.vertical.tail": "Adapting to a new vertical involves vertical-specific data — serial numbers, certifications, deposit handling — workflow tuning, and language. The platform is available for engagement on these adaptations.",

        "pigumrms.note.text": "Active development for a real Israeli rental business, currently in pilot deployment. Related: the same business runs <a href=\"https://pigum-yashir.co.il\" target=\"_blank\" rel=\"noopener noreferrer\">pigum-yashir.co.il</a> — separate project, also built by me. Code is private. Screenshots and live walkthroughs available on request.",
        "pigumrms.note.cta": "Request a Demo",
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

        "project.pigumrms.title": "Pigum Yashir RMS",
        "project.pigumrms.tag": "Pigum Yashir RMS",
        "project.pigumrms.desc": "מערכת ניהול השכרות לעסק ישראלי להשכרת פיגומים וגנרטורים. זמינות בזמן אמת, הזמנה בלי כפילויות, תהליך מסירה לצוות בשטח, ותיעוד שמחזיק כשמגיעים לבירור — בנויה בעברית מהיסוד.",

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

        // Pigum Yashir RMS page
        "pigumrms.back": "חזרה",
        "pigumrms.tag1": "בפיתוח",
        "pigumrms.tag2": "עברית מהיסוד",
        "pigumrms.tag3": "מתאימה לכל ענף השכרה",
        "pigumrms.title": "Pigum Yashir RMS",
        "pigumrms.subtitle": "מערכת ניהול השכרות",
        "pigumrms.hero.desc": "מערכת מלאה לניהול עסק השכרה — מלאי, לקוחות, מסירות בשטח, ותיעוד שמחזיק כשמגיעים לבירור — בנויה סביב איך באמת רץ עסק השכרה קטן בעברית, באתרי בנייה בישראל.",

        "pigumrms.ops.label": "תפעול השכרות",
        "pigumrms.ops.p1": "כל עסק השכרה בנוי על אותם ארבעה דברים. יש ציוד — בכל רגע נתון הוא זמין, מוזמן, בתיקון או יצא ללקוח. יש לקוחות שמזמינים מראש לטווח תאריכים מסוים, לפעמים שבועות לפני האיסוף. יש מסירות פיזיות — היציאה מהמחסן והחזרה אליו — שמחייבות תמונות וחתימה. ויש תיעוד שצריך להחזיק כשלקוח חולק על חיוב או טוען לנזק כבר באיסוף.",
        "pigumrms.ops.p2": "ארבעת הדברים האלה לא משתנים — לא בין פיגומים לאוהלים לאירועים, ולא בין גנרטורים לציוד רפואי. הענף מתחלף. אופי התפעול נשאר. סביב זה בנינו את Pigum Yashir RMS.",

        "pigumrms.worlds.label": "שני עולמות, מערכת אחת",
        "pigumrms.worlds.office.tag": "המשרד",
        "pigumrms.worlds.office.title": "מסך הניהול — בדסקטופ",
        "pigumrms.worlds.office.desc": "לוח זמינות חי של כל יחידה לשבועיים קדימה. סטטוס המלאי במבט אחד, כרטיס לקוח עם כל ההיסטוריה, ויצירת הזמנה שתופסת כפילויות בזמן אמת — לא אחרי שהמשאית כבר יצאה.",
        "pigumrms.worlds.field.tag": "השטח",
        "pigumrms.worlds.field.title": "מסך מובייל לצוות השטח",
        "pigumrms.worlds.field.desc": "המסירות והאיסופים של היום. הקשה אחת ונכנסים למסירה — צילום, חתימה, סיום בפחות מ-30 שניות בין המשאית ללקוח, גם עם הקליטה שיש באתר בנייה.",
        "pigumrms.worlds.foot": "אותם נתונים, אותו מסד נתונים. כל ממשק תפור למקום שבו העבודה באמת מתרחשת.",

        "pigumrms.cap.label": "יכולות",
        "pigumrms.cap.1.title": "זמינות בזמן אמת, ל-14+ ימים קדימה",
        "pigumrms.cap.1.desc": "סטטוס של כל יחידה במבט אחד — זמינה, מוזמנת, יצאה ללקוח או בתיקון — לכל טווח התאריכים שמעניין אותך.",
        "pigumrms.cap.2.title": "יומן עם הזמנה בלי כפילויות",
        "pigumrms.cap.2.desc": "לוגיקת הזמנה לפי טווחי תאריכים, נאכפת בתוך מסד הנתונים עצמו. שני אנשים מהצוות פשוט לא יכולים להזמין את אותה יחידה לאותם תאריכים.",
        "pigumrms.cap.3.title": "כרטיס לקוח עם היסטוריה מלאה",
        "pigumrms.cap.3.desc": "כל השכרה, כל קבלה, כל חתימה — הכל מצורף ללקוח. הקשה אחת לחיוג, לוואטסאפ או לפתיחת התיק.",
        "pigumrms.cap.4.title": "הזמנות, החזרות וביטולים",
        "pigumrms.cap.4.desc": "כל מחזור החיים של ההזמנה — מהזמנה ראשונית, דרך מסירה בשטח, שינויים תוך כדי השכרה, החזרה והתחשבנות.",
        "pigumrms.cap.5.title": "תהליך מסירה במובייל לצוות השטח",
        "pigumrms.cap.5.desc": "בנוי לעבודה מסמארטפון בתוך המשאית. מסך אחד עם המסירות והאיסופים של היום, הקשה אחת ופותחים את המסירה.",
        "pigumrms.cap.6.title": "יעד מסירה בפחות מ-30 שניות",
        "pigumrms.cap.6.desc": "תמונה, חתימה, אישור — מסירה שלמה גם כשעומדים בין המשאית ללקוח עם קליטה גרועה.",
        "pigumrms.cap.7.title": "דחיסת תמונות בדפדפן",
        "pigumrms.cap.7.desc": "התמונות נדחסות במכשיר לפני שהן עולות, כדי שלא נתקעים על קליטה חלשה באתר בנייה.",
        "pigumrms.cap.8.title": "חתימה דיגיטלית עם גיבוי של צילום נייר",
        "pigumrms.cap.8.desc": "ברירת המחדל היא חתימה על מסך המגע. אם צריך — צילום של נייר חתום נקלט באותה דרך בדיוק.",
        "pigumrms.cap.9.title": "עברית RTL מקצה לקצה",
        "pigumrms.cap.9.desc": "בנויה בעברית מהיסוד — מהמודל של הנתונים ומעלה. לא שכבת תרגום שהודבקה על אפליקציה אנגלית.",
        "pigumrms.cap.10.title": "הרשאות לפי תפקיד, ברמת השורה במסד הנתונים",
        "pigumrms.cap.10.desc": "צוות המשרד וצוות השטח רואים בדיוק את מה שהם אמורים לראות. ההרשאות נאכפות בתוך מסד הנתונים, לא רק בממשק.",

        "pigumrms.evidence.label": "תיעוד מובנה במערכת",
        "pigumrms.evidence.p1": "מחלוקות בהשכרה קורות. לקוח טוען שיחידה הגיעה פגומה. מנהל אתר מתעקש שאף אחד לא חתם על המסירה. ציוד חוזר עם מכה שאף אחד לא לוקח עליה אחריות. בנינו את המערכת כך שהתיעוד כבר נמצא במקום עוד לפני שיש בכלל ויכוח — תמונות במסירה, תמונות בהחזרה, וחתימה ממי שבאמת קיבל את היחידות בשטח.",
        "pigumrms.evidence.p2": "החוזה ותעודת המשלוח הם בכוונה שני מסמכים נפרדים. את החוזה חותם מראש מורשה החתימה של הלקוח. את תעודת המשלוח חותם בשטח מי שמקבל את היחידות בפועל — מנהל עבודה, מהנדס אתר או נהג. בפועל זה כמעט אף פעם לא אותו אדם, והמערכת לא מנסה להעמיד פנים אחרת.",

        "pigumrms.arch.label": "ארכיטקטורה",
        "pigumrms.arch.frontend": "Frontend",
        "pigumrms.arch.backend": "Backend",
        "pigumrms.arch.storage": "אחסון ומדיה",
        "pigumrms.arch.deploy": "פריסה",

        "pigumrms.vertical.label": "מתאימה לכל ענף השכרה",
        "pigumrms.vertical.intro": "הבסיס של המערכת — מלאי לפי תאריכים, ניהול לקוחות, מסירות בשטח ותיעוד — משותף לכל סוג של השכרה. הפריסה הנוכחית רצה אצל עסק להשכרת פיגומים וגנרטורים; אותו בסיס מתאים בקלות גם ל:",
        "pigumrms.vertical.item.1": "השכרת ציוד בנייה",
        "pigumrms.vertical.item.2": "השכרת כלי עבודה",
        "pigumrms.vertical.item.3": "השכרת ציוד לאירועים",
        "pigumrms.vertical.item.4": "ציוד הגברה והפקה",
        "pigumrms.vertical.item.5": "השכרה ייחודית — ציוד רפואי, מכשור מדעי, רכבים מיוחדים",
        "pigumrms.vertical.tail": "התאמה לענף חדש כוללת נתונים שייחודיים לענף — מספרים סידוריים, אישורים תקפים, ניהול פיקדונות — וכיול של תהליכי העבודה והשפה. אם זה רלוונטי לעסק שלך, אפשר לדבר.",

        "pigumrms.note.text": "פרויקט בפיתוח פעיל ללקוח אמיתי — עסק השכרה ישראלי, כרגע בפיילוט. קשור: אותו לקוח מפעיל גם את <a href=\"https://pigum-yashir.co.il\" target=\"_blank\" rel=\"noopener noreferrer\">pigum-yashir.co.il</a> — פרויקט נפרד שגם אותו בניתי. הקוד סגור. צילומי מסך וסיור חי — לפי בקשה.",
        "pigumrms.note.cta": "בקשו הדגמה",
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
