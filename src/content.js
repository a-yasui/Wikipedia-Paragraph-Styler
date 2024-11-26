
// 字下げスタイルを適用する関数
function applyIndent() {
  console.log("applyIndent");
  document.querySelectorAll("p").forEach((paragraph) => {
    // 参考: https://lopan.jp/paragraph/

    // 字下げ
    paragraph.style.textIndent = "1em";

    // 両端揃え
    paragraph.style.textAlign = 'justify';

    // 字詰め
    paragraph.style.fontFeatureSettings = '"pkna" 1';

    // 禁則処理は厳しめ
    paragraph.style.lineBreak = 'strict';

    // ぶら下がりはあり
    paragraph.style.hangingPunctuation = '"last" "allow-end"';
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

// ページロード時に自動で字下げ
if(document.readyState !== 'complete') {
  window.addEventListener('load',applyIndent);
} else {
  applyIndent();
}
