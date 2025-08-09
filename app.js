const sentences = [
  // Günlük ve iş hayatı odaklı örnek cümleler (sen ekleyip genişletebilirsin)
  { eng: "Can you send me the report by tomorrow?", tr: "Raporu yarına kadar gönderebilir misin?" },
  { eng: "I have a meeting with the client at 3 PM.", tr: "Saat 3'te müşteriyle toplantım var." },
  { eng: "Please update the spreadsheet with the latest data.", tr: "Lütfen tabloyu en son verilerle güncelle." },
  { eng: "The market is very competitive these days.", tr: "Piyasa şu günlerde çok rekabetçi." },
  { eng: "Could you help me find the right product?", tr: "Doğru ürünü bulmama yardımcı olabilir misin?" },
  { eng: "The professor explained the concept very clearly.", tr: "Profesör konsepti çok net açıkladı." },
  { eng: "I need to finish this assignment before the deadline.", tr: "Bu ödevi son teslim tarihinden önce bitirmem gerekiyor." },
  { eng: "Don't forget to submit your timesheet today.", tr: "Bugün çalışma saatlerinizi teslim etmeyi unutmayın." },
  { eng: "We should schedule a team meeting next week.", tr: "Gelecek hafta bir ekip toplantısı planlamalıyız." },
  { eng: "The university library has a vast collection of books.", tr: "Üniversite kütüphanesinde geniş bir kitap koleksiyonu var." },
  { eng: "I'm looking for a job in the marketing department.", tr: "Pazarlama departmanında iş arıyorum." },
  { eng: "Please review the document and give me feedback.", tr: "Lütfen dokümanı inceleyip bana geri bildirim ver." },
  { eng: "The new software will improve our productivity.", tr: "Yeni yazılım verimliliğimizi artıracak." },
  { eng: "She submitted her thesis last month.", tr: "Geçen ay tezini teslim etti." },
  { eng: "We need to prepare for the upcoming conference.", tr: "Yaklaşan konferansa hazırlanmalıyız." },
];

let usedIndices = new Set();
let currentIndex = -1;

const engSentenceEl = document.getElementById("english-sentence");
const trSentenceEl = document.getElementById("turkish-translation");
const nextBtn = document.getElementById("next-btn");
const wordPopup = document.getElementById("word-popup");
const showWordbookBtn = document.getElementById("show-wordbook-btn");
const wordBookSection = document.getElementById("word-book-section");
const wordListEl = document.getElementById("word-list");
const closeWordbookBtn = document.getElementById("close-wordbook-btn");

let wordBook = JSON.parse(localStorage.getItem("wordBook") || "{}");

// Cümleyi göster, kelimeleri tıklanabilir yap
function showSentence() {
  if (usedIndices.size === sentences.length) {
    alert("Tüm cümleler gösterildi! Yeni cümleler ekle.");
    return;
  }
  do {
    currentIndex = Math.floor(Math.random() * sentences.length);
  } while (usedIndices.has(currentIndex));
  usedIndices.add(currentIndex);

  const sentence = sentences[currentIndex];
  engSentenceEl.innerHTML = makeClickable(sentence.eng);
  trSentenceEl.textContent = sentence.tr;
}

// Kelimeleri <span> ile tıklanabilir yap
function makeClickable(text) {
  const words = text.split(/\\s+/);
  return words.map(word => `<span class="clickable-word">${word}</span>`).join(" ");
}

// Popup aç ve kelimeyi kaydetme seçeneği sun
function showWordPopup(word, x, y) {
  const lowerWord = word.toLowerCase().replace(/[.,?!;:]$/, "");
  let meaning = wordBook[lowerWord] || "Kelime defterinde kayıtlı değil.";

  wordPopup.textContent = `${word}: ${meaning}`;
  wordPopup.style.left = x + "px";
  wordPopup.style.top = y + "px";
  wordPopup.classList.add("visible");

  // 3 saniye sonra otomatik kapat
  setTimeout(() => wordPopup.classList.remove("visible"), 3000);
}

// Kelime defterini güncelle ve kaydet
function addToWordBook(word) {
  const lowerWord = word.toLowerCase().replace(/[.,?!;:]$/, "");
  if (!(lowerWord in wordBook)) {
    // Basit Türkçe anlamı prompt ile sorabiliriz (istersen geliştirebiliriz)
    const meaning = prompt(`"${word}" kelimesinin Türkçe anlamını gir:`);
    if (meaning && meaning.trim()) {
      wordBook[lowerWord] = meaning.trim();
      localStorage.setItem("wordBook", JSON.stringify(wordBook));
      alert(`"${word}" kelimesi kelime defterine eklendi.`);
      renderWordBook();
    }
  } else {
    alert(`"${word}" kelimesi zaten kelime defterinde.`);
  }
}

// Kelime defterini listele
function renderWordBook() {
  wordListEl.innerHTML = "";
  for (const [word, meaning] of Object.entries(wordBook)) {
    const li = document.createElement("li");
    li.textContent = `${word} — ${meaning}`;
    li.addEventListener("click", () => {
      alert(`${word}: ${meaning}`);
    });
    wordListEl.appendChild(li);
  }
}

// Olay dinleyiciler
nextBtn.addEventListener("click", showSentence);

engSentenceEl.addEventListener("click", e => {
  if (e.target.classList.contains("clickable-word")) {
    const word = e.target.textContent;
    const rect = e.target.getBoundingClientRect();
    addToWordBook(word);
    showWordPopup(word, rect.left, rect.bottom);
  }
});

showWordbookBtn.addEventListener("click", () => {
  wordBookSection.classList.remove("hidden");
});

closeWordbookBtn.addEventListener("click", () => {
  wordBookSection.classList.add("hidden");
});

// İlk cümleyi göster
showSentence();
renderWordBook();
