chrome.runtime.onInstalled.addListener(() => {
  // コンテキストメニューの作成
  chrome.contextMenus.create({
    id: "indent",
    title: "段落を字下げにする",
    contexts: ["page"]
  });

  chrome.contextMenus.create({
    id: "large",
    title: "段落を特大サイズにする",
    contexts: ["page"]
  });

  chrome.contextMenus.create({
    id: "reset",
    title: "リセット",
    contexts: ["page"]
  })

  // コンテキストメニューが選択されたとき
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (tab.id) {
      chrome.tabs.sendMessage(tab.id, { action: info.menuItemId });
    }
  });

});
