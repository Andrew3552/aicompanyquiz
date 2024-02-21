var isVimeo = $("iframe").hasClass("video-iframe"),
  isYT = $("#videoYT-id").hasClass("videoYT-id");
if (isVimeo) {
  const e = $(".video-iframe"),
    n = new Vimeo.Player(e);
  $(".video-iframe")
    .wrap('<div class="wrap-iframe"></div>')
    .after(
      '  <div class="unmute-wrapper bgc-dark">\n                                                <div class="unmute d-f">\n                                                    <div id="unmute-button" class="button-img xl"\n                                                         style="background-image: url(/turn-sound/png/bx-volume-full.png);"\n                                                    ></div>\n                                                    <span style="font-size: 12px">TURN ON THE SOUND!</span>\n                                                </div>\n                                                <div class="player-menu d-f none">\n                                                    <div id="mute-button" class="button-img"\n                                                         style="background-image: url(/turn-sound/png/bx-volume-mute.png);"\n                                                    ></div>\n                                                </div>\n                                            </div>'
    ),
    $("#mute-button").on("click", function () {
      n.setMuted(!0),
        $(".unmute").removeClass("none"),
        $(".player-menu").addClass("none"),
        $(".unmute-wrapper").addClass("bgc-dark");
    }),
    $("#unmute-button").on("click", function () {
      n.setMuted(!1),
        n.play(),
        $(".unmute").addClass("none"),
        $(".player-menu").removeClass("none"),
        $(".unmute-wrapper").removeClass("bgc-dark");
    });
}
if (isYT) {
  var videoID = $("#videoYT-id").val(),
    tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var player,
    firstScriptTag = document.getElementsByTagName("script")[0];
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("iframe-videoYT", {
      videoId: videoID,
      events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange },
      playerVars: { autoplay: 1, controls: 0, rel: 0, mute: 1, loop: 1 },
    });
  }
  function onPlayerReady(e) {
    e.target.playVideo();
  }
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var done = !1;
  function onPlayerStateChange(e) {
    e.data != YT.PlayerState.PLAYING || done || (done = !0);
  }
  function stopVideo() {
    player.stopVideo();
  }
  $("#iframe-videoYT").hasClass("iframe-videoYT") &&
    $("#iframe-videoYT")
      .wrap('<div class="wrap-iframe"></div>')
      .after(
        '  <div class="unmute-wrapper bgc-dark">\n                                                <div class="unmute d-f">\n                                                    <div id="unmute-button" class="button-img xl"\n                                                         style="background-image: url(/turn-sound/png/bx-volume-full.png);"\n                                                    ></div>\n                                                    <span style="font-size: 12px">TURN ON THE SOUND!</span>\n                                                </div>\n                                                <div class="player-menu d-f none">\n                                                    <div id="mute-button" class="button-img"\n                                                         style="background-image: url(/turn-sound/png/bx-volume-mute.png);"\n                                                    ></div>\n                                                </div>\n                                            </div>'
      ),
    $("#mute-button").on("click", function () {
      player.mute(),
        $(".unmute").removeClass("none"),
        $(".player-menu").addClass("none"),
        $(".unmute-wrapper").addClass("bgc-dark");
    }),
    $("#unmute-button").on("click", function () {
      player.unMute(),
        player.playVideo(),
        $(".unmute").addClass("none"),
        $(".player-menu").removeClass("none"),
        $(".unmute-wrapper").removeClass("bgc-dark");
    });
}
