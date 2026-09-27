const STORAGE_KEY = "codealpha_image_gallery_v2";

const DEFAULT_SETTINGS = {
  instagramUsername: "pavley_mousa",
  feedUrl: "",
  refreshMinutes: 15,
  appTitle: "Instagram Gallery",
  subtitle: "Your latest Instagram posts, displayed automatically.",
  logoUrl: "",
  accentColor: "#7c3aed",
  heroTitle: "Latest Instagram posts",
  heroDescription: "New posts appear here automatically when your connected feed refreshes.",
  footerText: "Frontend Only • Instagram Feed + Local Storage",
  theme: "dark",
  language: "en"
};

const TRANSLATIONS = {
  en: {
    instagramProfile: "Instagram Profile",
    connectFeed: "Connect Feed",
    instagramUsername: "Instagram username",
    beholdSetup: "Open Behold setup guide ↗",
    orUpload: "Or upload an image",
    posts: "Posts",
    followers: "Followers",
    updated: "Updated",
    refresh: "Refresh",
    searchLabel: "Search",
    searchPlaceholder: "Search captions and hashtags...",
    allContent: "All content",
    instagram: "Instagram",
    manual: "Manual",
    allTypes: "All types",
    images: "Images",
    videos: "Videos",
    reels: "Reels",
    carousels: "Carousels",
    newest: "Newest",
    oldest: "Oldest",
    loading: "Loading posts...",
    feedErrorTitle: "Instagram feed could not be loaded",
    openSettings: "Open Settings",
    emptyTitle: "No posts found",
    emptyText: "Add a feed URL in Settings or add manual images from Manage Gallery.",
    galleryEyebrow: "GALLERY",
    galleryTitle: "Your collection",
    manageGallery: "Manage Gallery",
    settingsTitle: "Platform Settings",
    instagramConnection: "Instagram Connection",
    instagramHelp: "Create a Behold JSON feed for your Instagram account, then paste the feed URL here.",
    feedUrl: "Behold JSON Feed URL",
    refreshInterval: "Browser refresh interval",
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
    frontendOnlyText: "Your settings and manual images are saved in this browser with localStorage. Instagram syncing is provided by the connected Behold feed, so no backend is stored in this project.",
    reset: "Reset Defaults",
    cancel: "Cancel",
    save: "Save Settings",
    manageTitle: "Manage Gallery",
    imageTitle: "Title",
    category: "Category",
    imageUrl: "Image URL",
    postLink: "Link",
    imageAlt: "Alt text",
    clear: "Clear",
    addImage: "Add Image",
    manualGalleryEyebrow: "MANUAL GALLERY",
    manualGalleryTitle: "Your locally saved images",
    edit: "Edit",
    delete: "Delete",
    openInstagram: "Open on Instagram",
    manualSource: "Manual",
    instagramSource: "Instagram",
    noManual: "No manual images yet.",
    saveEdit: "Save Changes"
  },
  ar: {
    instagramProfile: "حساب إنستجرام",
    connectFeed: "ربط الـFeed",
    instagramUsername: "اسم حساب إنستجرام",
    beholdSetup: "فتح شرح إعداد Behold ↗",
    orUpload: "أو ارفع صورة",
    posts: "منشورات",
    followers: "متابع",
    updated: "آخر تحديث",
    refresh: "تحديث",
    searchLabel: "بحث",
    searchPlaceholder: "ابحث في الكابشن والهاشتاجات...",
    allContent: "كل المحتوى",
    instagram: "إنستجرام",
    manual: "يدوي",
    allTypes: "كل الأنواع",
    images: "صور",
    videos: "فيديو",
    reels: "ريلز",
    carousels: "كاروسيل",
    newest: "الأحدث",
    oldest: "الأقدم",
    loading: "جاري تحميل المنشورات...",
    feedErrorTitle: "تعذر تحميل منشورات إنستجرام",
    openSettings: "فتح الإعدادات",
    emptyTitle: "مفيش منشورات",
    emptyText: "ضيف رابط الـFeed من الإعدادات أو ضيف صور يدويًا من إدارة المعرض.",
    galleryEyebrow: "المعرض",
    galleryTitle: "مجموعتك",
    manageGallery: "إدارة المعرض",
    settingsTitle: "إعدادات المنصة",
    instagramConnection: "ربط إنستجرام",
    instagramHelp: "اعمل Behold JSON Feed لحساب إنستجرام وبعدها حط رابط الـFeed هنا.",
    feedUrl: "رابط Behold JSON Feed",
    refreshInterval: "مدة التحديث داخل المتصفح",
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
    frontendOnlyText: "الإعدادات والصور اليدوية بتتخزن في المتصفح باستخدام localStorage. مزامنة إنستجرام بتتم عن طريق Behold، والمشروع نفسه مفيهوش Backend.",
    reset: "إرجاع الافتراضي",
    cancel: "إلغاء",
    save: "حفظ الإعدادات",
    manageTitle: "إدارة المعرض",
    imageTitle: "العنوان",
    category: "التصنيف",
    imageUrl: "رابط الصورة",
    postLink: "الرابط",
    imageAlt: "الوصف البديل",
    clear: "مسح",
    addImage: "إضافة صورة",
    manualGalleryEyebrow: "المعرض اليدوي",
    manualGalleryTitle: "الصور المحفوظة على جهازك",
    edit: "تعديل",
    delete: "حذف",
    openInstagram: "فتح على إنستجرام",
    manualSource: "يدوي",
    instagramSource: "إنستجرام",
    noManual: "مفيش صور يدوية لسه.",
    saveEdit: "حفظ التعديل"
  }
};

let settings = loadJson("settings", DEFAULT_SETTINGS);
let manualItems = loadJson("manualItems", []);
let instagramItems = [];
let filteredItems = [];
let lightboxIndex = 0;
let refreshTimer = null;
let lastFetchAt = 0;

const $ = (selector) => document.querySelector(selector);

function loadJson(key, fallback) {
  try {
    const value = localStorage.getItem(`${STORAGE_KEY}_${key}`);
    return value ? JSON.parse(value) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function saveJson(key, value) {
  localStorage.setItem(`${STORAGE_KEY}_${key}`, JSON.stringify(value));
}

function t(key) {
  return TRANSLATIONS[settings.language]?.[key] || TRANSLATIONS.en[key] || key;
}

function init() {
  bindEvents();
  applySettings();
  populateSettingsForm();
  renderManualList();
  renderGallery();
  scheduleAutoRefresh();
  if (settings.feedUrl) fetchInstagramFeed();
}

function bindEvents() {
  $("#language-btn").addEventListener("click", () => {
    settings.language = settings.language === "en" ? "ar" : "en";
    saveSettings();
    applySettings();
    populateSettingsForm();
  });

  $("#theme-btn").addEventListener("click", () => {
    settings.theme = settings.theme === "dark" ? "light" : "dark";
    saveSettings();
    applySettings();
  });

  $("#settings-btn").addEventListener("click", () => openModal("settings-modal"));
  $("#connect-feed-btn").addEventListener("click", () => openModal("settings-modal"));
  $("#manage-btn").addEventListener("click", () => {
    renderManualList();
    openModal("manage-modal");
  });
  $("#open-settings-from-error").addEventListener("click", () => openModal("settings-modal"));

  $("#refresh-btn").addEventListener("click", fetchInstagramFeed);
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

  document.addEventListener("click", (event) => {
    const closeTarget = event.target.closest("[data-close]");
    if (closeTarget) closeModal(`${closeTarget.dataset.close}-modal`);
    
    const card = event.target.closest(".gallery-item");
    if (card) {
      const index = Number(card.dataset.index);
      openLightbox(index);
    }

    const editButton = event.target.closest("[data-edit-manual]");
    if (editButton) editManualItem(editButton.dataset.editManual);

    const deleteButton = event.target.closest("[data-delete-manual]");
    if (deleteButton) deleteManualItem(deleteButton.dataset.deleteManual);
  });

  document.addEventListener("keydown", (event) => {
    if ($("#lightbox-modal").classList.contains("hidden")) return;
    if (event.key === "Escape") closeModal("lightbox-modal");
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && settings.feedUrl) {
      const interval = settings.refreshMinutes * 60 * 1000;
      if (Date.now() - lastFetchAt >= interval) fetchInstagramFeed();
    }
  });
}

function saveSettings() {
  saveJson("settings", settings);
}

function applySettings() {
  document.documentElement.lang = settings.language;
  document.documentElement.dir = settings.language === "ar" ? "rtl" : "ltr";
  document.documentElement.style.setProperty("--accent", settings.accentColor || DEFAULT_SETTINGS.accentColor);

  $("#app-title").textContent = settings.appTitle;
  $("#app-subtitle").textContent = settings.subtitle;

  const username = (settings.instagramUsername || "pavley_mousa").replace(/^@+/, "");
  $("#profile-name").textContent = `@${username}`;
  $("#instagram-profile-btn").href = `https://www.instagram.com/${encodeURIComponent(username)}/`;
  $("#hero-title").textContent = settings.heroTitle;
  $("#hero-description").textContent = settings.heroDescription;
  $("#footer-text").textContent = settings.footerText;
  $("#theme-btn").textContent = settings.theme === "light" ? "☾" : "☀";
  $("#language-btn").textContent = settings.language === "en" ? "العربية" : "English";

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const activeTheme = settings.theme === "auto" ? (systemDark ? "dark" : "light") : settings.theme;
  document.body.dataset.theme = activeTheme;

  const logo = $("#brand-logo");
  if (settings.logoUrl) {
    logo.innerHTML = "";
    const img = document.createElement("img");
    img.src = settings.logoUrl;
    img.alt = "";
    img.onerror = () => {
      logo.textContent = "IG";
    };
    logo.appendChild(img);
  } else {
    logo.textContent = "IG";
  }

  translatePage();
}

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  $("#lightbox-link").textContent = t("openInstagram");
  renderGallery();
  renderManualList();
}

function populateSettingsForm() {
  $("#instagram-username-input").value = settings.instagramUsername || DEFAULT_SETTINGS.instagramUsername;
  $("#feed-url-input").value = settings.feedUrl;
  $("#refresh-interval-input").value = String(settings.refreshMinutes);
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
  settings = {
    ...settings,
    instagramUsername: $("#instagram-username-input").value.trim().replace(/^@+/, "") || DEFAULT_SETTINGS.instagramUsername,
    feedUrl: normalizeFeedUrl($("#feed-url-input").value.trim()),
    refreshMinutes: Number($("#refresh-interval-input").value) || 15,
    appTitle: $("#app-title-input").value.trim() || DEFAULT_SETTINGS.appTitle,
    subtitle: $("#app-subtitle-input").value.trim() || DEFAULT_SETTINGS.subtitle,
    logoUrl: $("#logo-url-input").value.trim(),
    accentColor: $("#accent-color-input").value || DEFAULT_SETTINGS.accentColor,
    heroTitle: $("#hero-title-input").value.trim() || DEFAULT_SETTINGS.heroTitle,
    heroDescription: $("#hero-description-input").value.trim() || DEFAULT_SETTINGS.heroDescription,
    footerText: $("#footer-text-input").value.trim() || DEFAULT_SETTINGS.footerText,
    theme: $("#theme-input").value,
    language: $("#language-input").value
  };

  saveSettings();
  applySettings();
  populateSettingsForm();
  scheduleAutoRefresh();
  closeModal("settings-modal");

  if (settings.feedUrl) fetchInstagramFeed();
  else {
    instagramItems = [];
    renderProfile(null);
    renderGallery();
  }
}

function resetSettings() {
  settings = structuredClone(DEFAULT_SETTINGS);
  saveSettings();
  applySettings();
  populateSettingsForm();
  scheduleAutoRefresh();
  instagramItems = [];
  renderProfile(null);
  renderGallery();
}

function normalizeFeedUrl(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host !== "feeds.behold.so") return url;
    return `https://feeds.behold.so/${parsed.pathname.replace(/^\//, "")}`;
  } catch {
    return url;
  }
}

function scheduleAutoRefresh() {
  if (refreshTimer) clearInterval(refreshTimer);
  if (!settings.feedUrl) return;
  refreshTimer = setInterval(() => {
    if (!document.hidden) fetchInstagramFeed();
  }, settings.refreshMinutes * 60 * 1000);
}

async function fetchInstagramFeed() {
  const url = normalizeFeedUrl(settings.feedUrl);
  if (!url) {
    setStatus("empty");
    renderProfile(null);
    renderGallery();
    return;
  }

  setStatus("loading");
  const cacheBuster = url.includes("?") ? "&" : "?";
  
  try {
    const response = await fetch(`${url}${cacheBuster}_=${Date.now()}`, {
      method: "GET",
      mode: "cors",
      cache: "no-store",
      headers: { Accept: "application/json" }
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    instagramItems = normalizeInstagramPosts(data?.posts || []);
    lastFetchAt = Date.now();
    renderProfile(data);
    renderGallery();
    setStatus(instagramItems.length || manualItems.length ? "ready" : "empty");
  } catch (error) {
    console.error("Instagram feed error:", error);
    renderProfile(null);
    renderGallery();
    setError(error.message || "Unknown error");
  }
}

function normalizeInstagramPosts(posts) {
  return posts.map((post, index) => {
    const isReel = Boolean(post.isReel);
    const type = isReel ? "reel" : post.mediaType === "CAROUSEL_ALBUM" ? "carousel" : post.mediaType === "VIDEO" ? "video" : "image";
    const firstChild = Array.isArray(post.children) && post.children.length ? post.children[0] : null;
    const imageSource = firstChild?.sizes?.medium?.mediaUrl ||
      firstChild?.sizes?.large?.mediaUrl ||
      post.sizes?.medium?.mediaUrl ||
      post.sizes?.large?.mediaUrl ||
      post.thumbnailUrl ||
      post.mediaUrl ||
      "";

    return {
      id: `instagram-${post.id || index}`,
      source: "instagram",
      title: post.prunedCaption?.split("\n")[0]?.slice(0, 70) || `@${post.username || "Instagram"}`,
      caption: post.caption || post.prunedCaption || "",
      image: imageSource,
      alt: post.altText || post.prunedCaption || "Instagram post",
      link: post.permalink || "#",
      timestamp: post.timestamp || "",
      type,
      video: (post.mediaType === "VIDEO" ? post.mediaUrl : ""),
      username: post.username || "",
      likeCount: Number.isFinite(post.likeCount) ? post.likeCount : null,
      commentsCount: Number.isFinite(post.commentsCount) ? post.commentsCount : null,
      hashtags: Array.isArray(post.hashtags) ? post.hashtags : []
    };
  }).filter((item) => item.image);
}

function renderProfile(data) {
  const profileName = data?.username || (settings.feedUrl ? "Instagram Feed" : "Instagram feed not connected");
  const bio = data?.biography || (settings.feedUrl
    ? "Connected feed"
    : "Connect a Behold JSON feed from Settings to load your latest posts.");

  $("#profile-name").textContent = profileName.startsWith("@") ? profileName : `@${profileName}`;
  $("#profile-bio").textContent = bio;
  $("#posts-count").textContent = data?.posts?.length ?? instagramItems.length ?? 0;
  $("#followers-count").textContent = data?.followersCount ?? "—";
  $("#last-sync").textContent = lastFetchAt ? new Date(lastFetchAt).toLocaleTimeString(settings.language === "ar" ? "ar-EG" : "en-US", { hour: "2-digit", minute: "2-digit" }) : "—";

  const avatar = $("#profile-avatar");
  if (data?.profilePictureUrl) {
    avatar.innerHTML = "";
    const img = document.createElement("img");
    img.src = data.profilePictureUrl;
    img.alt = "";
    img.onerror = () => { avatar.textContent = "IG"; };
    avatar.appendChild(img);
  } else {
    avatar.textContent = "IG";
  }
}

function getCombinedItems() {
  return [...instagramItems, ...manualItems.map((item) => ({
    ...item,
    source: "manual",
    type: "image"
  }))];
}

function renderGallery() {
  const query = $("#search-input").value.trim().toLowerCase();
  const source = $("#source-filter").value;
  const type = $("#type-filter").value;
  const sort = $("#sort-filter").value;

  filteredItems = getCombinedItems().filter((item) => {
    const sourceMatch = source === "all" || item.source === source;
    const typeMatch = type === "all" || item.type === type;
    const haystack = [item.title, item.caption, item.alt, ...(item.hashtags || [])].join(" ").toLowerCase();
    const queryMatch = !query || haystack.includes(query);
    return sourceMatch && typeMatch && queryMatch;
  });

  filteredItems.sort((a, b) => {
    const aTime = a.timestamp ? new Date(a.timestamp).getTime() : 0;
    const bTime = b.timestamp ? new Date(b.timestamp).getTime() : 0;
    return sort === "oldest" ? aTime - bTime : bTime - aTime;
  });

  const grid = $("#gallery-grid");
  grid.innerHTML = "";

  filteredItems.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "gallery-item";
    card.dataset.index = String(index);
    card.tabIndex = 0;
    card.setAttribute("role", "button");

    const image = document.createElement("img");
    image.loading = "lazy";
    image.src = item.image;
    image.alt = item.alt || item.title;
    image.onerror = () => {
      card.classList.add("image-error");
      image.removeAttribute("src");
    };

    const overlay = document.createElement("div");
    overlay.className = "item-overlay";

    const topRow = document.createElement("div");
    topRow.className = "item-top-row";

    const sourceBadge = document.createElement("span");
    sourceBadge.className = "item-badge";
    sourceBadge.textContent = item.source === "instagram" ? t("instagramSource") : t("manualSource");
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
    title.textContent = item.title || "Instagram post";

    const meta = document.createElement("p");
    meta.textContent = formatRelativeDate(item.timestamp) || (item.source === "manual" ? t("manualSource") : "");

    body.append(title, meta);
    overlay.append(topRow, body);
    card.append(image, overlay);

    if (item.type !== "image") {
      const play = document.createElement("div");
      play.className = "play-badge";
      play.textContent = item.type === "carousel" ? "↔" : "▶";
      card.appendChild(play);
    }

    grid.appendChild(card);
    requestAnimationFrame(() => card.classList.add("visible"));
  });

  $("#result-count").textContent = String(filteredItems.length);
  setStatusStateAfterRender();
}

function setStatusStateAfterRender() {
  if (filteredItems.length > 0) {
    setStatus("ready");
    return;
  }

  if (settings.feedUrl || manualItems.length) setStatus("empty");
  else setStatus("empty");
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

  manualItems.forEach((item) => {
    const row = document.createElement("div");
    row.className = "manual-row";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.alt || item.title || "";
    image.loading = "lazy";

    const info = document.createElement("div");
    info.className = "manual-row-info";
    const title = document.createElement("strong");
    title.textContent = item.title || "Untitled";
    const meta = document.createElement("span");
    meta.textContent = item.category || t("manualSource");
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
    row.append(image, info, actions);
    list.appendChild(row);
  });
}

async function handleManualFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    event.target.value = "";
    return;
  }
  if (file.size > 3 * 1024 * 1024) {
    window.alert(settings.language === "ar"
      ? "يفضل استخدام صورة أقل من 3MB لأن الصورة ستتخزن داخل المتصفح."
      : "Please use an image smaller than 3MB because it will be stored in the browser.");
    event.target.value = "";
    return;
  }

  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  $("#manual-image-input").value = "";
  $("#manual-file-input").dataset.dataUrl = String(dataUrl);
}

function saveManualItem() {
  const title = $("#manual-title-input").value.trim();
  const category = $("#manual-category-input").value.trim();
  const image = $("#manual-image-input").value.trim() || $("#manual-file-input").dataset.dataUrl || "";
  const link = $("#manual-link-input").value.trim() || "#";
  const alt = $("#manual-alt-input").value.trim() || title;
  const existingId = $("#manual-id-input").value;

  if (!image) {
    $("#manual-image-input").focus();
    return;
  }

  const item = {
    id: existingId || `manual-${Date.now()}`,
    title: title || "Untitled image",
    category,
    image,
    link,
    alt,
    timestamp: existingId
      ? manualItems.find((entry) => entry.id === existingId)?.timestamp || new Date().toISOString()
      : new Date().toISOString()
  };

  const existingIndex = manualItems.findIndex((entry) => entry.id === item.id);
  if (existingIndex >= 0) manualItems[existingIndex] = item;
  else manualItems.unshift(item);

  saveJson("manualItems", manualItems);
  clearManualForm();
  renderManualList();
  renderGallery();
}

function editManualItem(id) {
  const item = manualItems.find((entry) => entry.id === id);
  if (!item) return;

  $("#manual-id-input").value = item.id;
  $("#manual-title-input").value = item.title || "";
  $("#manual-category-input").value = item.category || "";
  $("#manual-image-input").value = item.image || "";
  $("#manual-link-input").value = item.link || "";
  $("#manual-alt-input").value = item.alt || "";
  $("#save-manual-btn").textContent = t("saveEdit");
  $("#manual-title-input").focus();
}

function deleteManualItem(id) {
  const item = manualItems.find((entry) => entry.id === id);
  if (!item) return;

  const confirmed = window.confirm(settings.language === "ar"
    ? "تحذف الصورة دي من المعرض المحلي؟"
    : "Delete this image from the local gallery?");
  if (!confirmed) return;

  manualItems = manualItems.filter((entry) => entry.id !== id);
  saveJson("manualItems", manualItems);
  renderManualList();
  renderGallery();
}

function clearManualForm() {
  $("#manual-id-input").value = "";
  $("#manual-title-input").value = "";
  $("#manual-category-input").value = "";
  $("#manual-image-input").value = "";
  $("#manual-link-input").value = "";
  $("#manual-alt-input").value = "";
  $("#manual-file-input").value = "";
  delete $("#manual-file-input").dataset.dataUrl;
  $("#save-manual-btn").textContent = t("addImage");
}

function openLightbox(index) {
  if (!filteredItems.length) return;
  lightboxIndex = index;
  updateLightbox();
  openModal("lightbox-modal");
}

function updateLightbox() {
  const item = filteredItems[lightboxIndex];
  if (!item) return;

  const image = $("#lightbox-image");
  const video = $("#lightbox-video");
  video.pause();
  video.removeAttribute("src");
  video.load();

  if (item.type === "video" || item.type === "reel") {
    image.hidden = true;
    video.hidden = false;
    video.src = item.video || item.image;
  } else {
    video.hidden = true;
    image.hidden = false;
    image.src = item.image;
    image.alt = item.alt || item.title || "";
  }

  $("#lightbox-title").textContent = item.title || "Instagram post";
  $("#lightbox-caption").textContent = item.caption || item.alt || "";
  $("#lightbox-meta").textContent = [
    item.source === "instagram" ? t("instagramSource") : t("manualSource"),
    item.type && item.type !== "image" ? item.type.toUpperCase() : "",
    formatDate(item.timestamp)
  ].filter(Boolean).join(" • ");

  const link = $("#lightbox-link");
  link.href = item.link || "#";
  link.style.display = item.link && item.link !== "#" ? "inline-flex" : "none";
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
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("hidden");
  if ([...document.querySelectorAll(".modal")].every((entry) => entry.classList.contains("hidden"))) {
    document.body.classList.remove("modal-open");
  }
}

function setStatus(type) {
  const loading = $("#loading-state");
  const error = $("#error-state");
  const empty = $("#empty-state");

  loading.classList.add("hidden");
  error.classList.add("hidden");
  empty.classList.add("hidden");

  if (type === "loading") loading.classList.remove("hidden");
  if (type === "empty") empty.classList.remove("hidden");
}

function setError(message) {
  $("#loading-state").classList.add("hidden");
  $("#empty-state").classList.add("hidden");
  $("#error-state").classList.remove("hidden");
  $("#error-message").textContent = message;
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
  const diffMinutes = Math.floor((Date.now() - date.getTime()) / 60000);
  if (diffMinutes < 60) return settings.language === "ar" ? `منذ ${Math.max(1, diffMinutes)} د` : `${Math.max(1, diffMinutes)}m ago`;
  const hours = Math.floor(diffMinutes / 60);
  if (hours < 24) return settings.language === "ar" ? `منذ ${hours} س` : `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return settings.language === "ar" ? `منذ ${days} يوم` : `${days}d ago`;
  return formatDate(timestamp).split(",")[0];
}

window.addEventListener("load", init);