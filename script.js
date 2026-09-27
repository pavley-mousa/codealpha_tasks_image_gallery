const STORAGE_KEY = "codealpha_image_gallery_v3";

const DEFAULT_SETTINGS = {
  instagramUsername: "pavley_mousa",
  appTitle: "Instagram Gallery",
  subtitle: "A clean gallery for your Instagram posts.",
  logoUrl: "",
  accentColor: "#7c3aed",
  heroTitle: "Your Instagram Gallery",
  heroDescription: "Add Instagram posts one by one, preview them here, and keep everything organized.",
  footerText: "Frontend Only • Manual Gallery • Local Storage",
  theme: "dark",
  language: "en"
};

const TRANSLATIONS = {
  en: {
    instagramProfile: "Instagram Profile",
    addInstagramPost: "Add Instagram Post",
    instagramUsername: "Instagram username",
    instagramProfileSettings: "Instagram Profile",
    instagramProfileHelp: "Posts are added manually from individual Instagram post URLs. There is no feed and no automatic synchronization.",
    orUpload: "Or upload an image",
    posts: "Items",
    searchLabel: "Search",
    searchPlaceholder: "Search titles, captions and hashtags...",
    allContent: "All content",
    instagram: "Instagram",
    demo: "Demo",
    manual: "Manual",
    allTypes: "All types",
    images: "Images",
    videos: "Videos",
    reels: "Reels",
    carousels: "Carousels",
    newest: "Newest",
    oldest: "Oldest",
    emptyTitle: "No items found",
    emptyText: "Add an Instagram post or an image from Manage Gallery.",
    galleryEyebrow: "GALLERY",
    galleryTitle: "Your collection",
    manageGallery: "Manage Gallery",
    settingsTitle: "Platform Settings",
    identity: "App Identity",
    appName: "App name",
    subtitle: "Subtitle",
    logoUrl: "Logo URL",
    accentColor: "Accent color",
    heroSettings: "Hero Section",
    heroTitle: "Hero title",
    heroDescription: "Hero description",
    footerText: "Footer text",
    appearance: "Appearance",
    theme: "Theme",
    language: "Language",
    frontendOnlyTitle: "Frontend Only",
    frontendOnlyText: "Settings and gallery content are saved in this browser with localStorage. No backend, database, Instagram feed, or automatic sync is used.",
    reset: "Reset Defaults",
    cancel: "Cancel",
    save: "Save Settings",
    manageTitle: "Manage Gallery",
    imageTitle: "Title",
    category: "Category",
    imageUrl: "Image URL",
    postLink: "Link",
    imageAlt: "Alt text",
    instagramPostUrl: "Instagram post URL",
    clear: "Clear",
    addImage: "Add Item",
    manualGalleryEyebrow: "MANUAL CONTENT",
    manualGalleryTitle: "Saved gallery items",
    edit: "Edit",
    delete: "Delete",
    openInstagram: "Open on Instagram",
    manualSource: "Manual",
    instagramSource: "Instagram",
    demoSource: "Demo",
    noManual: "No manually added items yet.",
    saveEdit: "Save Changes"
  },
  ar: {
    instagramProfile: "حساب إنستجرام",
    addInstagramPost: "إضافة بوست إنستجرام",
    instagramUsername: "اسم حساب إنستجرام",
    instagramProfileSettings: "حساب إنستجرام",
    instagramProfileHelp: "البوستات بتتضاف يدويًا من روابط البوستات نفسها. مفيش Feed ولا مزامنة تلقائية.",
    orUpload: "أو ارفع صورة",
    posts: "عنصر",
    searchLabel: "بحث",
    searchPlaceholder: "ابحث في العناوين والكابشن والهاشتاجات...",
    allContent: "كل المحتوى",
    instagram: "إنستجرام",
    demo: "تجريبي",
    manual: "يدوي",
    allTypes: "كل الأنواع",
    images: "صور",
    videos: "فيديو",
    reels: "ريلز",
    carousels: "كاروسيل",
    newest: "الأحدث",
    oldest: "الأقدم",
    emptyTitle: "مفيش عناصر",
    emptyText: "ضيف بوست إنستجرام أو صورة من إدارة المعرض.",
    galleryEyebrow: "المعرض",
    galleryTitle: "مجموعتك",
    manageGallery: "إدارة المعرض",
    settingsTitle: "إعدادات المنصة",
    identity: "هوية التطبيق",
    appName: "اسم التطبيق",
    subtitle: "الوصف المختصر",
    logoUrl: "رابط اللوجو",
    accentColor: "اللون الأساسي",
    heroSettings: "قسم الواجهة",
    heroTitle: "عنوان الواجهة",
    heroDescription: "وصف الواجهة",
    footerText: "نص الفوتر",
    appearance: "المظهر",
    theme: "الثيم",
    language: "اللغة",
    frontendOnlyTitle: "Frontend Only",
    frontendOnlyText: "الإعدادات ومحتوى الجاليري بيتخزنوا في المتصفح باستخدام localStorage. مفيش Backend ولا Database ولا Instagram Feed ولا مزامنة تلقائية.",
    reset: "إرجاع الافتراضي",
    cancel: "إلغاء",
    save: "حفظ الإعدادات",
    manageTitle: "إدارة المعرض",
    imageTitle: "العنوان",
    category: "التصنيف",
    imageUrl: "رابط الصورة",
    postLink: "الرابط",
    imageAlt: "الوصف البديل",
    instagramPostUrl: "رابط بوست إنستجرام",
    clear: "مسح",
    addImage: "إضافة عنصر",
    manualGalleryEyebrow: "المحتوى اليدوي",
    manualGalleryTitle: "عناصر الجاليري المحفوظة",
    edit: "تعديل",
    delete: "حذف",
    openInstagram: "فتح على إنستجرام",
    manualSource: "يدوي",
    instagramSource: "إنستجرام",
    demoSource: "تجريبي",
    noManual: "مفيش عناصر مضافة يدويًا لسه.",
    saveEdit: "حفظ التعديل"
  }
};

function clone(value) {
  return structuredClone(value);
}

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return clone(fallback);
    return JSON.parse(raw);
  } catch {
    return clone(fallback);
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function sanitizeSettings(raw) {
  return {
    instagramUsername: String(raw && raw.instagramUsername || DEFAULT_SETTINGS.instagramUsername).replace(/^@+/, ""),
    appTitle: String(raw && raw.appTitle || DEFAULT_SETTINGS.appTitle),
    subtitle: String(raw && raw.subtitle || DEFAULT_SETTINGS.subtitle),
    logoUrl: String(raw && raw.logoUrl || ""),
    accentColor: /^#[0-9a-f]{6}$/i.test(raw && raw.accentColor || "") ? raw.accentColor : DEFAULT_SETTINGS.accentColor,
    heroTitle: String(raw && raw.heroTitle || DEFAULT_SETTINGS.heroTitle),
    heroDescription: String(raw && raw.heroDescription || DEFAULT_SETTINGS.heroDescription),
    footerText: String(raw && raw.footerText || DEFAULT_SETTINGS.footerText),
    theme: ["dark", "light", "auto"].includes(raw && raw.theme) ? raw.theme : DEFAULT_SETTINGS.theme,
    language: ["en", "ar"].includes(raw && raw.language) ? raw.language : DEFAULT_SETTINGS.language
  };
}

const settingsKey = STORAGE_KEY + "_settings";
const itemsKey = STORAGE_KEY + "_manualItems";

let settings = sanitizeSettings(loadJson(settingsKey, DEFAULT_SETTINGS));
const loadedManualItems = loadJson(itemsKey, []);
let manualItems = Array.isArray(loadedManualItems) ? loadedManualItems : [];
let filteredItems = [];
let lightboxIndex = 0;

const DEFAULT_INSTAGRAM_POSTS = [
  {
    id: "instagram-DYDoOcBjP4k",
    source: "instagram",
    title: "Instagram post",
    caption: "",
    image: "",
    alt: "@pavley_mousa Instagram post",
    link: "https://www.instagram.com/p/DYDoOcBjP4k/",
    embed: "https://www.instagram.com/p/DYDoOcBjP4k/embed/",
    timestamp: "",
    type: "image",
    username: "pavley_mousa",
    hashtags: []
  }
];

const DEMO_ITEMS = [
  { id: "demo-01", source: "demo", title: "Aurora", caption: "Local SVG demo for the main gallery.", image: "demo/aurora.svg", alt: "Abstract aurora gradient artwork", category: "Demo", timestamp: "2026-09-27T20:00:00.000Z", type: "image", link: "demo/aurora.svg" },
  { id: "demo-02", source: "demo", title: "Ocean", caption: "Local SVG demo for image card rendering.", image: "demo/ocean.svg", alt: "Abstract blue ocean artwork", category: "Demo", timestamp: "2026-09-26T20:00:00.000Z", type: "image", link: "demo/ocean.svg" },
  { id: "demo-03", source: "demo", title: "Sunset Grid", caption: "Local SVG demo for warm visual content.", image: "demo/sunset-grid.svg", alt: "Abstract sunset grid artwork", category: "Demo", timestamp: "2026-09-25T20:00:00.000Z", type: "image", link: "demo/sunset-grid.svg" },
  { id: "demo-04", source: "demo", title: "Forest Shapes", caption: "Local SVG demo for responsive grid testing.", image: "demo/forest.svg", alt: "Abstract forest shapes artwork", category: "Demo", timestamp: "2026-09-24T20:00:00.000Z", type: "image", link: "demo/forest.svg" },
  { id: "demo-05", source: "demo", title: "Cyber Flow", caption: "Local SVG demo for search and filtering.", image: "demo/cyber-flow.svg", alt: "Abstract cyber flow artwork", category: "Demo", timestamp: "2026-09-23T20:00:00.000Z", type: "image", link: "demo/cyber-flow.svg" },
  { id: "demo-06", source: "demo", title: "Coffee Desk", caption: "Local SVG demo for everyday content.", image: "demo/coffee-desk.svg", alt: "Abstract coffee desk artwork", category: "Demo", timestamp: "2026-09-22T20:00:00.000Z", type: "image", link: "demo/coffee-desk.svg" },
  { id: "demo-07", source: "demo", title: "Purple Pulse", caption: "Local SVG demo for dark and light themes.", image: "demo/purple-pulse.svg", alt: "Abstract purple pulse artwork", category: "Demo", timestamp: "2026-09-21T20:00:00.000Z", type: "image", link: "demo/purple-pulse.svg" },
  { id: "demo-08", source: "demo", title: "Minimal Lines", caption: "Local SVG demo for mobile layout testing.", image: "demo/minimal-lines.svg", alt: "Minimal abstract line artwork", category: "Demo", timestamp: "2026-09-20T20:00:00.000Z", type: "image", link: "demo/minimal-lines.svg" }
];

const $ = (selector) => document.querySelector(selector);

function t(key) {
  return (TRANSLATIONS[settings.language] && TRANSLATIONS[settings.language][key]) ||
    TRANSLATIONS.en[key] || key;
}

function init() {
  bindEvents();
  applySettings();
  populateSettingsForm();
  renderManualList();
  renderGallery();
}

function bindEvents() {
  $("#language-btn").addEventListener("click", function() {
    settings.language = settings.language === "en" ? "ar" : "en";
    saveSettings();
    applySettings();
    populateSettingsForm();
  });

  $("#theme-btn").addEventListener("click", function() {
    settings.theme = settings.theme === "dark" ? "light" : "dark";
    saveSettings();
    applySettings();
  });

  $("#settings-btn").addEventListener("click", function() {
    openModal("settings-modal");
  });

  $("#manage-btn").addEventListener("click", function() {
    openManage(false);
  });

  $("#add-instagram-post-btn").addEventListener("click", function() {
    openManage(true);
  });

  $("#search-input").addEventListener("input", renderGallery);
  $("#source-filter").addEventListener("change", renderGallery);
  $("#type-filter").addEventListener("change", renderGallery);
  $("#sort-filter").addEventListener("change", renderGallery);

  $("#save-settings-btn").addEventListener("click", saveSettingsFromForm);
  $("#reset-settings-btn").addEventListener("click", resetSettings);

  $("#save-manual-btn").addEventListener("click", saveManualItem);
  $("#clear-manual-btn").addEventListener("click", clearManualForm);
  $("#manual-file-input").addEventListener("change", handleManualFile);

  $("#lightbox-prev").addEventListener("click", showPrevious);
  $("#lightbox-next").addEventListener("click", showNext);

  document.addEventListener("click", function(event) {
    const closeTarget = event.target.closest("[data-close]");
    if (closeTarget) {
      closeModal(closeTarget.dataset.close + "-modal");
      return;
    }

    const editButton = event.target.closest("[data-edit-manual]");
    if (editButton) {
      editManualItem(editButton.dataset.editManual);
      return;
    }

    const deleteButton = event.target.closest("[data-delete-manual]");
    if (deleteButton) {
      deleteManualItem(deleteButton.dataset.deleteManual);
      return;
    }

    const card = event.target.closest(".gallery-item");
    if (card && !event.target.closest("a,button,input,select,textarea")) {
      openLightbox(Number(card.dataset.index));
    }
  });

  document.addEventListener("keydown", function(event) {
    const lightboxOpen = !$("#lightbox-modal").classList.contains("hidden");

    if (lightboxOpen) {
      if (event.key === "Escape") closeModal("lightbox-modal");
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") return;

    const activeCard = document.activeElement && document.activeElement.closest(".gallery-item");
    if (!activeCard) return;

    event.preventDefault();
    openLightbox(Number(activeCard.dataset.index));
  });
}

function saveSettings() {
  saveJson(settingsKey, settings);
}

function applySettings() {
  document.documentElement.lang = settings.language;
  document.documentElement.dir = settings.language === "ar" ? "rtl" : "ltr";
  document.documentElement.style.setProperty("--accent", settings.accentColor);

  $("#app-title").textContent = settings.appTitle;
  $("#app-subtitle").textContent = settings.subtitle;
  $("#profile-name").textContent = "@" + settings.instagramUsername;
  $("#profile-bio").textContent = settings.language === "ar"
    ? "ضيف بوستات إنستجرام واحد واحد داخل الجاليري."
    : "Add Instagram posts one by one to your gallery.";

  const profileUrl = getProfileUrl();
  $("#instagram-profile-btn").href = profileUrl;
  const settingsProfileLink = $("#settings-instagram-link");
  if (settingsProfileLink) settingsProfileLink.href = profileUrl;

  $("#hero-title").textContent = settings.heroTitle;
  $("#hero-description").textContent = settings.heroDescription;
  $("#footer-text").textContent = settings.footerText;
  $("#theme-btn").textContent = settings.theme === "light" ? "☾" : "☀";
  $("#language-btn").textContent = settings.language === "en" ? "العربية" : "English";

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.dataset.theme = settings.theme === "auto" ? (systemDark ? "dark" : "light") : settings.theme;

  const logo = $("#brand-logo");
  logo.innerHTML = "";
  if (settings.logoUrl) {
    const img = document.createElement("img");
    img.src = settings.logoUrl;
    img.alt = "";
    img.onerror = function() { logo.textContent = "IG"; };
    logo.appendChild(img);
  } else {
    logo.textContent = "IG";
  }

  translatePage();
}

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach(function(element) {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function(element) {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  $("#lightbox-link").textContent = t("openInstagram");
  renderGallery();
  renderManualList();
}

function getProfileUrl() {
  return "https://www.instagram.com/" + encodeURIComponent(settings.instagramUsername) + "/";
}

function populateSettingsForm() {
  $("#instagram-username-input").value = settings.instagramUsername;
  $("#app-title-input").value = settings.appTitle;
  $("#app-subtitle-input").value = settings.subtitle;
  $("#logo-url-input").value = settings.logoUrl;
  $("#accent-color-input").value = settings.accentColor;
  $("#hero-title-input").value = settings.heroTitle;
  $("#hero-description-input").value = settings.heroDescription;
  $("#footer-text-input").value = settings.footerText;
  $("#theme-input").value = settings.theme;
  $("#language-input").value = settings.language;
}

function saveSettingsFromForm() {
  settings = sanitizeSettings({
    instagramUsername: $("#instagram-username-input").value.trim(),
    appTitle: $("#app-title-input").value.trim(),
    subtitle: $("#app-subtitle-input").value.trim(),
    logoUrl: $("#logo-url-input").value.trim(),
    accentColor: $("#accent-color-input").value,
    heroTitle: $("#hero-title-input").value.trim(),
    heroDescription: $("#hero-description-input").value.trim(),
    footerText: $("#footer-text-input").value.trim(),
    theme: $("#theme-input").value,
    language: $("#language-input").value
  });
  saveSettings();
  applySettings();
  populateSettingsForm();
  closeModal("settings-modal");
}

function resetSettings() {
  settings = clone(DEFAULT_SETTINGS);
  saveSettings();
  applySettings();
  populateSettingsForm();
}

function openManage(focusInstagram) {
  clearManualForm();
  renderManualList();
  openModal("manage-modal");
  if (focusInstagram) {
    setTimeout(function() { $("#manual-instagram-input").focus(); }, 0);
  }
}

function normalizeInstagramPostUrl(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    if (!/(^|\.)instagram\.com$/i.test(parsed.hostname)) return "";
    const match = parsed.pathname.match(/^\/(p|reel|tv)\/([^/]+)/i);
    return match ? "https://www.instagram.com/" + match[1].toLowerCase() + "/" + match[2] : "";
  } catch {
    return "";
  }
}

function getInstagramTitle(url) {
  const normalized = normalizeInstagramPostUrl(url);
  if (!normalized) return "Instagram post";
  const token = normalized.split("/").filter(Boolean).pop();
  return token ? "Instagram • " + token : "Instagram post";
}

function getInstagramType(url) {
  const normalized = normalizeInstagramPostUrl(url);
  if (!normalized) return "image";

  const pathParts = new URL(normalized).pathname.split("/").filter(Boolean);
  return pathParts[0] === "reel" || pathParts[0] === "tv" ? "reel" : "image";
}

async function handleManualFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    event.target.value = "";
    return;
  }
  if (file.size > 3 * 1024 * 1024) {
    alert(settings.language === "ar"
      ? "استخدم صورة أقل من 3MB لأن الصورة هتتخزن داخل المتصفح."
      : "Please use an image smaller than 3MB because it will be stored in the browser.");
    event.target.value = "";
    return;
  }

  try {
    const dataUrl = await new Promise(function(resolve, reject) {
      const reader = new FileReader();
      reader.onload = function() { resolve(reader.result); };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    $("#manual-image-input").value = "";
    $("#manual-file-input").dataset.dataUrl = String(dataUrl);
  } catch {
    alert(settings.language === "ar" ? "حصل خطأ أثناء قراءة الصورة." : "The image could not be read.");
  }
}

function saveManualItem() {
  const titleInput = $("#manual-title-input").value.trim();
  const category = $("#manual-category-input").value.trim();
  const image = $("#manual-image-input").value.trim() || $("#manual-file-input").dataset.dataUrl || "";
  const instagramUrlInput = $("#manual-instagram-input").value.trim();
  const instagramUrl = normalizeInstagramPostUrl(instagramUrlInput);
  const customLink = $("#manual-link-input").value.trim();
  const altInput = $("#manual-alt-input").value.trim();
  const existingId = $("#manual-id-input").value;

  if (!image && !instagramUrl) {
    alert(settings.language === "ar"
      ? "حط رابط بوست إنستجرام أو صورة."
      : "Add an Instagram post URL or an image.");
    $("#manual-instagram-input").focus();
    return;
  }

  if (instagramUrlInput && !instagramUrl) {
    alert(settings.language === "ar"
      ? "رابط إنستجرام غير صالح. استخدم رابط /p/ أو /reel/ أو /tv/."
      : "Invalid Instagram URL. Use a /p/, /reel/, or /tv/ URL.");
    $("#manual-instagram-input").focus();
    return;
  }

  const previous = manualItems.find(function(entry) { return entry.id === existingId; });
  const previousImage = previous && previous.image ? previous.image : "";
  const itemImage = image || previousImage;
  const item = {
    id: existingId || "manual-" + Date.now(),
    source: "manual",
    title: titleInput || (instagramUrl ? getInstagramTitle(instagramUrl) : "Untitled image"),
    category: category || (instagramUrl ? "Instagram" : "Manual"),
    image: image,
    alt: altInput || (instagramUrl ? "Instagram post" : "Gallery image"),
    link: customLink || instagramUrl || "#",
    instagramUrl: instagramUrl,
    embed: instagramUrl ? instagramUrl + "/embed/" : "",
    caption: "",
    hashtags: [],
    timestamp: previous && previous.timestamp ? previous.timestamp : new Date().toISOString(),
    type: instagramUrl ? getInstagramType(instagramUrl) : "image"
  };

  const existingIndex = manualItems.findIndex(function(entry) { return entry.id === item.id; });
  if (existingIndex >= 0) manualItems[existingIndex] = item;
  else manualItems.unshift(item);

  saveJson(itemsKey, manualItems);
  clearManualForm();
  renderManualList();
  renderGallery();
}

function editManualItem(id) {
  const item = manualItems.find(function(entry) { return entry.id === id; });
  if (!item) return;

  $("#manual-id-input").value = item.id;
  $("#manual-title-input").value = item.title || "";
  $("#manual-category-input").value = item.category || "";
  $("#manual-image-input").value = item.image && !item.image.startsWith("data:") ? item.image : "";
  $("#manual-file-input").value = "";
  delete $("#manual-file-input").dataset.dataUrl;
  $("#manual-link-input").value = item.link || "";
  $("#manual-instagram-input").value = item.instagramUrl || "";
  $("#manual-alt-input").value = item.alt || "";
  $("#save-manual-btn").textContent = t("saveEdit");
  $("#manual-title-input").focus();
}

function deleteManualItem(id) {
  const item = manualItems.find(function(entry) { return entry.id === id; });
  if (!item) return;

  const message = settings.language === "ar"
    ? "تحذف \"" + (item.title || "العنصر") + "\" من الجاليري؟"
    : "Delete \"" + (item.title || "item") + "\" from the gallery?";

  if (!confirm(message)) return;
  manualItems = manualItems.filter(function(entry) { return entry.id !== id; });
  saveJson(itemsKey, manualItems);
  renderManualList();
  renderGallery();
}

function clearManualForm() {
  $("#manual-id-input").value = "";
  $("#manual-title-input").value = "";
  $("#manual-category-input").value = "";
  $("#manual-image-input").value = "";
  $("#manual-link-input").value = "";
  $("#manual-instagram-input").value = "";
  $("#manual-alt-input").value = "";
  $("#manual-file-input").value = "";
  delete $("#manual-file-input").dataset.dataUrl;
  $("#save-manual-btn").textContent = t("addImage");
}

function getCombinedItems() {
  return DEFAULT_INSTAGRAM_POSTS.concat(DEMO_ITEMS, manualItems.map(function(item) {
    return Object.assign({}, item, { source: "manual", type: item.type || "image" });
  }));
}

function getDateValue(item) {
  const value = item.timestamp ? new Date(item.timestamp).getTime() : 0;
  return Number.isFinite(value) ? value : 0;
}

function renderGallery() {
  const query = $("#search-input").value.trim().toLowerCase();
  const source = $("#source-filter").value;
  const type = $("#type-filter").value;
  const sort = $("#sort-filter").value;

  filteredItems = getCombinedItems().filter(function(item) {
    if (source !== "all" && item.source !== source) return false;
    if (type !== "all" && item.type !== type) return false;

    const haystack = [
      item.title,
      item.caption,
      item.alt,
      item.category,
      item.username
    ].concat(item.hashtags || []).filter(Boolean).join(" ").toLowerCase();

    return !query || haystack.includes(query);
  });

  filteredItems.sort(function(a, b) {
    const dateDiff = getDateValue(b) - getDateValue(a);
    if (dateDiff !== 0) return sort === "oldest" ? -dateDiff : dateDiff;
    return String(a.id).localeCompare(String(b.id));
  });

  const grid = $("#gallery-grid");
  grid.innerHTML = "";

  filteredItems.forEach(function(item, index) {
    const card = document.createElement("article");
    card.className = "gallery-item" + (item.source === "demo" ? " demo-item" : "");
    card.dataset.index = String(index);
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", item.title || "Gallery item");

    if (item.embed) {
      const embedWrap = document.createElement("div");
      embedWrap.className = "instagram-embed-preview";

      const frame = document.createElement("iframe");
      frame.src = item.embed;
      frame.title = item.title || "Instagram post";
      frame.loading = "lazy";
      frame.setAttribute("allowtransparency", "true");
      frame.setAttribute("scrolling", "no");
      frame.setAttribute("frameborder", "0");

      embedWrap.appendChild(frame);
      card.appendChild(embedWrap);
    } else {
      const image = document.createElement("img");
      image.loading = "lazy";
      image.src = item.image;
      image.alt = item.alt || item.title || "";
      image.onerror = function() {
        card.classList.add("image-error");
        image.removeAttribute("src");
      };
      card.appendChild(image);
    }

    const overlay = document.createElement("div");
    overlay.className = "item-overlay";

    const topRow = document.createElement("div");
    topRow.className = "item-top-row";

    const sourceBadge = document.createElement("span");
    sourceBadge.className = "item-badge";
    sourceBadge.textContent = item.source === "instagram"
      ? t("instagramSource")
      : item.source === "demo"
        ? t("demoSource")
        : t("manualSource");
    topRow.appendChild(sourceBadge);

    if (item.type !== "image") {
      const typeBadge = document.createElement("span");
      typeBadge.className = "item-badge";
      typeBadge.textContent = item.type.toUpperCase();
      topRow.appendChild(typeBadge);
    }

    const body = document.createElement("div");
    body.className = "item-overlay-body";

    const title = document.createElement("h3");
    title.textContent = item.title || "Gallery item";

    const meta = document.createElement("p");
    meta.textContent = formatRelativeDate(item.timestamp) || (
      item.source === "instagram" ? t("instagramSource") :
      item.source === "demo" ? t("demoSource") :
      t("manualSource")
    );

    body.append(title, meta);
    overlay.append(topRow, body);
    card.appendChild(overlay);

    if (item.source === "demo") {
      const demoBadge = document.createElement("span");
      demoBadge.className = "demo-corner-badge";
      demoBadge.textContent = t("demoSource");
      card.appendChild(demoBadge);
    }

    if (item.type !== "image") {
      const play = document.createElement("div");
      play.className = "play-badge";
      play.textContent = item.type === "carousel" ? "↔" : "▶";
      card.appendChild(play);
    }

    grid.appendChild(card);
    requestAnimationFrame(function() { card.classList.add("visible"); });
  });

  $("#result-count").textContent = String(filteredItems.length);
  $("#posts-count").textContent = String(getCombinedItems().length);
  setStatus(filteredItems.length ? "ready" : "empty");
}

function renderManualList() {
  const list = $("#manual-list");
  $("#manual-count").textContent = String(manualItems.length);
  list.innerHTML = "";

  if (!manualItems.length) {
    const empty = document.createElement("div");
    empty.className = "empty-inline";
    empty.textContent = t("noManual");
    list.appendChild(empty);
    return;
  }

  manualItems.forEach(function(item) {
    const row = document.createElement("div");
    row.className = "manual-row";

    if (item.image) {
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.alt || item.title || "";
      image.loading = "lazy";
      row.appendChild(image);
    } else {
      const preview = document.createElement("div");
      preview.className = "manual-preview-instagram";
      preview.textContent = "IG";
      preview.setAttribute("aria-label", "Instagram post");
      row.appendChild(preview);
    }

    const info = document.createElement("div");
    info.className = "manual-row-info";

    const title = document.createElement("strong");
    title.textContent = item.title || "Untitled";

    const meta = document.createElement("span");
    meta.textContent = item.instagramUrl
      ? t("instagramSource") + " • " + item.instagramUrl
      : item.category || t("manualSource");

    info.append(title, meta);

    const actions = document.createElement("div");
    actions.className = "row-actions";

    const edit = document.createElement("button");
    edit.className = "mini-btn";
    edit.textContent = t("edit");
    edit.dataset.editManual = item.id;

    const del = document.createElement("button");
    del.className = "mini-btn danger";
    del.textContent = t("delete");
    del.dataset.deleteManual = item.id;

    actions.append(edit, del);
    row.append(info, actions);
    list.appendChild(row);
  });
}

function openLightbox(index) {
  if (!filteredItems.length) return;
  lightboxIndex = Math.max(0, Math.min(index, filteredItems.length - 1));
  updateLightbox();
  openModal("lightbox-modal");
}

function updateLightbox() {
  const item = filteredItems[lightboxIndex];
  if (!item) return;

  const image = $("#lightbox-image");
  const video = $("#lightbox-video");
  const embed = $("#lightbox-embed");

  video.pause();
  video.removeAttribute("src");
  video.load();

  image.hidden = true;
  video.hidden = true;
  embed.hidden = true;
  embed.removeAttribute("src");

  if (item.embed) {
    embed.src = item.embed;
    embed.hidden = false;
  } else if (item.type === "video" || item.type === "reel") {
    video.src = item.video || item.image;
    video.hidden = !video.src;
  } else {
    image.src = item.image || "";
    image.alt = item.alt || item.title || "";
    image.hidden = !item.image;
  }

  $("#lightbox-title").textContent = item.title || "Gallery item";
  $("#lightbox-caption").textContent = item.caption || item.alt || "";

  $("#lightbox-meta").textContent = [
    item.source === "instagram" ? t("instagramSource") :
      item.source === "demo" ? t("demoSource") :
      t("manualSource"),
    item.type !== "image" ? item.type.toUpperCase() : "",
    formatDate(item.timestamp)
  ].filter(Boolean).join(" • ");

  const link = $("#lightbox-link");
  const hasExternalLink = item.link && item.link !== "#";
  link.href = hasExternalLink ? item.link : "#";
  link.textContent = item.source === "instagram" || item.instagramUrl
    ? t("openInstagram")
    : (settings.language === "ar" ? "فتح العنصر" : "Open item");
  link.style.display = hasExternalLink ? "inline-flex" : "none";
}

function showNext() {
  if (!filteredItems.length) return;
  lightboxIndex = (lightboxIndex + 1) % filteredItems.length;
  updateLightbox();
}

function showPrevious() {
  if (!filteredItems.length) return;
  lightboxIndex = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
  updateLightbox();
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("hidden");
  if ([].slice.call(document.querySelectorAll(".modal")).every(function(entry) {
    return entry.classList.contains("hidden");
  })) {
    document.body.classList.remove("modal-open");
  }
}

function setStatus(type) {
  $("#empty-state").classList.toggle("hidden", type !== "empty");
}

function formatDate(timestamp) {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(settings.language === "ar" ? "ar-EG" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

function formatRelativeDate(timestamp) {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "";

  const minutes = Math.max(0, Math.floor((Date.now() - date.getTime()) / 60000));
  if (minutes < 60) return settings.language === "ar" ? "منذ " + Math.max(1, minutes) + " د" : Math.max(1, minutes) + "m ago";

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return settings.language === "ar" ? "منذ " + hours + " س" : hours + "h ago";

  const days = Math.floor(hours / 24);
  if (days < 7) return settings.language === "ar" ? "منذ " + days + " يوم" : days + "d ago";

  return formatDate(timestamp).split(",")[0];
}

window.addEventListener("load", init);
