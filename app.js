const sentences = [
  { eng: "She decided to embrace the challenge with enthusiasm.", tr: "O, meydan okumayı coşkuyla benimsemeye karar verdi." },
  { eng: "The curious cat jumped over the lazy dog.", tr: "Meraklı kedi tembel köpeğin üzerinden atladı." },
  { eng: "Time flies when you're having fun.", tr: "Eğlenirken zaman su gibi akar." },
  { eng: "Learning a new language opens many doors.", tr: "Yeni bir dil öğrenmek birçok kapıyı açar." },
  { eng: "Consistency is the key to mastering English.", tr: "Tutarlılık İngilizceyi ustalıkla öğrenmenin anahtarıdır." },
  { eng: "Practice makes perfect.", tr: "Pratik mükemmelleştirir." },
  { eng: "Don’t be afraid to make mistakes.", tr: "Hata yapmaktan korkma." },
  { eng: "Every day is a new opportunity to improve.", tr: "Her gün gelişmek için yeni bir fırsattır." },
  { eng: "Speak confidently and listen carefully.", tr: "Kendinden emin konuş ve dikkatle dinle." },
  { eng: "Reading expands your vocabulary naturally.", tr: "Okuma kelime dağarcığını doğal olarak genişletir." },
  { eng: "Success requires patience and hard work.", tr: "Başarı sabır ve sıkı çalışma gerektirir." },
  { eng: "Be curious, always ask questions.", tr: "Meraklı ol, her zaman soru sor." },
  { eng: "Travel broadens the mind and soul.", tr: "Seyahat zihin ve ruhu genişletir." },
  { eng: "Dream big and act bigger.", tr: "Büyük hayal kur ve daha büyük hareket et." },
  { eng: "Mistakes are proof that you’re trying.", tr: "Hatalar denediğinin kanıtıdır." },
  { eng: "Believe in yourself no matter what.", tr: "Ne olursa olsun kendine inan." },
  { eng: "Reading daily improves your language skills.", tr: "Günlük okumak dil becerilerini geliştirir." },
  { eng: "A positive attitude changes everything.", tr: "Pozitif tutum her şeyi değiştirir." },
  { eng: "Listen more than you speak.", tr: "Konuşmaktan çok dinle." },
  { eng: "Make learning a daily habit.", tr: "Öğrenmeyi günlük alışkanlık yap." },
  { eng: "Focus on progress, not perfection.", tr: "Mükemmellik değil, gelişime odaklan." },
  { eng: "Set clear goals and chase them.", tr: "Net hedefler koy ve onları kovala." },
  { eng: "Celebrate small wins every day.", tr: "Her gün küçük zaferleri kutla." },
  { eng: "Stay curious, stay humble.", tr: "Meraklı kal, alçakgönüllü kal." },
  { eng: "Hard work beats talent when talent doesn’t work hard.", tr: "Sıkı çalışma, yetenek çalışmadığında onu yener." },
  { eng: "Surround yourself with positive people.", tr: "Kendini pozitif insanlarla çevrele." },
  { eng: "Don’t compare yourself to others.", tr: "Kendini başkalarıyla kıyaslama." },
  { eng: "Learning never stops.", tr: "Öğrenme asla durmaz." },
  { eng: "Be patient with your progress.", tr: "İlerlemen konusunda sabırlı ol." },
  { eng: "Every expert was once a beginner.", tr: "Her uzman bir zamanlar acemiydi." },
  { eng: "Take breaks, don’t burn out.", tr: "Mola ver, tükenme." },
  { eng: "Practice daily, improve steadily.", tr: "Günlük pratik yap, istikrarlı ilerle." },
  { eng: "Keep your goals visible.", tr: "Hedeflerini görünür tut." },
  { eng: "Learn from failures, not just success.", tr: "Başarı kadar başarısızlıklardan da öğren." },
  { eng: "Challenge yourself every day.", tr: "Her gün kendine meydan oku." },
  { eng: "Stay focused and ignore distractions.", tr: "Odaklan ve dikkat dağıtıcıları görmezden gel." },
  { eng: "Use technology to your advantage.", tr: "Teknolojiyi avantajına kullan." },
  { eng: "Stay motivated by tracking progress.", tr: "İlerlemeni takip ederek motive ol." },
  { eng: "Ask for help when needed.", tr: "Gerekirse yardım iste." },
  { eng: "Visualize your success.", tr: "Başarını gözünde canlandır." },
  { eng: "Keep a journal of new sentences.", tr: "Yeni cümlelerin günlüğünü tut." },
  { eng: "Teach what you learn.", tr: "Öğrendiklerini başkalarına öğret." },
  { eng: "Stay consistent even when it’s hard.", tr: "Zor olsa bile tutarlı kal." },
  { eng: "Be proud of your effort.", tr: "Çabanla gurur duy." },
  { eng: "Celebrate progress, not just results.", tr: "Sadece sonuçları değil, ilerlemeyi de kutla." },
  { eng: "Focus on communication, not just grammar.", tr: "Sadece gramer değil, iletişime odaklan." },
  { eng: "Enjoy the process of learning.", tr: "Öğrenme sürecinin tadını çıkar." },
];

const engSentence = document.getElementById("english-sentence");
const trSentence = document.getElementById("turkish-translation");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");

const DAILY_AMOUNT = 15;
let dailySentences = [];
let currentIndex = 0;

function pickRandomSentences(amount) {
  let shuffled = [...sentences].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
}

function showSentence(index) {
  const { eng, tr } = dailySentences[index];
  engSentence.textContent = eng;
  trSentence.textContent = tr;
  engSentence.parentElement.style.animation = "none"; // Reset animasyon
  void engSentence.parentElement.offsetWidth; // Trigger reflow
  engSentence.parentElement.style.animation = null; // Animasyonu tekrar başlat
  updateProgress(index);
}

function updateProgress(index) {
  let progress = ((index + 1) / DAILY_AMOUNT) * 100;
  progressBar.style.width = progress + "%";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= dailySentences.length) {
    dailySentences = pickRandomSentences(DAILY_AMOUNT);
    currentIndex = 0;
    alert("Great job! New sentences loaded for you.");
  }
  showSentence(currentIndex);
});

// İlk yüklemede
dailySentences = pickRandomSentences(DAILY_AMOUNT);
showSentence(currentIndex);