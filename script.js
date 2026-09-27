// استدعاء عناصر الـ DOM
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.getElementById("close-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentImages = [];
let currentIndex = 0;

// 1. منطق تصفية الصور حسب الفئة (Filter Logic)
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // تبديل الزر النشط
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.filter;

    // إظهار وإخفاء الصور
    galleryItems.forEach((item) => {
      const itemCategory = item.dataset.category;
      if (category === "all" || category === itemCategory) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

// جمع الصور المعروضة حالياً وفق الفلتر المختار
function getVisibleItems() {
  return Array.from(galleryItems).filter(
    (item) => !item.classList.contains("hidden")
  );
}

// 2. فتح الـ Lightbox
function openLightbox(index) {
  currentImages = getVisibleItems();
  currentIndex = index;

  updateLightboxView();
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden"; // منع سكرول الصفحة أثناء الفتح
}

// تحديث الصورة والنص في الـ Lightbox
function updateLightboxView() {
  const currentItem = currentImages[currentIndex];
  const imgElement = currentItem.querySelector("img");
  const title = currentItem.querySelector("h3").innerText;
  const category = currentItem.querySelector("span").innerText;

  lightboxImg.src = imgElement.src;
  lightboxCaption.innerText = `${title} • ${category}`;
}

// 3. التنقل بين الصور (Next / Prev)
function showNext() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateLightboxView();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateLightboxView();
}

// إغلاق الـ Lightbox
function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

// 4. ربط الأحداث
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const visibleList = getVisibleItems();
    const clickedIndex = visibleList.indexOf(item);
    if (clickedIndex !== -1) {
      openLightbox(clickedIndex);
    }
  });
});

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// إغلاق عند الضغط خارج إطار الصورة
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// دعم لوحة المفاتيح للتنقل والإغلاق
window.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});