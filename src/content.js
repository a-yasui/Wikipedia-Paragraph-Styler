// ページロード時に自動で字下げ
window.addEventListener("DOMContentLoaded", () => {
  applyIndent();
});

// 字下げスタイルを適用する関数
function applyIndent() {
  document.querySelectorAll("p").forEach((paragraph) => {
    paragraph.style.textIndent = "1em";
  });
}

// 特大サイズスタイルを適用する関数
function applyLargeFont() {
  document.querySelectorAll("p").forEach((paragraph) => {
    paragraph.style.fontSize = "2em";
  });
}

// メッセージを受け取ってスタイルを変更
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "indent") {
    applyIndent();
  } else if (message.action === "large") {
    applyLargeFont();
  } else if (message.action === 'reset') {
    document.querySelectorAll("p").forEach((paragraph) => {
      paragraph.style.textIndent = "";
      paragraph.style.fontSize = "";
    });
  }
});
