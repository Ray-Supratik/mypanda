const yesBttn = document.querySelector(".yesBttn");
const noBttn = document.querySelector(".noBttn");
const entireBody = document.querySelector("body");
const image = document.querySelector("img");

const bodyRect = entireBody.getBoundingClientRect();
const noBttnRect = noBttn.getBoundingClientRect();
const lovePhrases = [
  "I love You!",
  "Te quiero!",
  "আমি তোমায় ভালোবাসি!",
  "मैं तुमसे प्यार करता हूँ!",
  "사랑해!",
  "愛してる!",
  "මම ඔයාට ආදරෙයි!",
  "ನಾನು ನಿನಗೆ ಪ್ರೀತಿಸುತ್ತಿದ್ದೇನೆ!",
  "我爱你!",
  "أنا أحبك!",
  "Я тебя люблю!",
  "Ich liebe dich!",
  "Ti amo!",
  "Eu te amo!",
  "Ik hou van jou!",
  "Je t'aime!",
  "Seni seviyorum!",
];

yesBttn.addEventListener("click", () => {
  image.src = "./sparkly-eyes-open-mouth.gif";
  noBttn.style.position = "static";
});
noBttn.addEventListener("mouseover", () => {
  const i = Math.floor(Math.random() * (bodyRect.width - noBttnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (bodyRect.height - noBttnRect.height)) + 1;
  noBttn.style.position = "absolute";
  noBttn.style.left = i + "px";
  noBttn.style.top = j + "px";
});

const lovePhraseElement = document.getElementById("lovePhrase");
let index = 0;

function updateLovePhrase() {
  lovePhraseElement.textContent = lovePhrases[index];
  lovePhraseElement.style.opacity = 1;
  setTimeout(() => {
    lovePhraseElement.style.opacity = 0;
    index = (index + 1) % lovePhrases.length;
    setTimeout(updateLovePhrase, 1000);
  }, 1000);
}

updateLovePhrase();
