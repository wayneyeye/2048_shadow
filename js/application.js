// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  prev_state={"grid":{"size":4,"cells":[[null,{"position":{"x":0,"y":1},"value":2},null,null],[null,null,null,null],[null,null,{"position":{"x":2,"y":2},"value":2},null],[null,null,null,null]]},"score":0,"over":false,"won":false,"keepPlaying":false};
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager,prev_state);

  // TODO: This code is in need of a refactor (along with the rest)
  var storage     = new LocalStorageManager;
  var noticeClose = document.querySelector(".notice-close-button");
  var notice      = document.querySelector(".app-notice");
  if (storage.getNoticeClosed()) {
    notice.parentNode.removeChild(notice);
  } else {
    noticeClose.addEventListener("click", function () {
      notice.parentNode.removeChild(notice);
      storage.setNoticeClosed(true);
      ga("send", "event", "notice", "closed");
    });
  }
});
