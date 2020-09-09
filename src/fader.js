(function(cssBase64DataURI) {
  "use strict";
  // creating and injected fading effect element
  var fader = document.createElement("SVG");
  fader.id = "fader";
  fader.className = "fade-out";
  document.body.insertBefore(fader, document.body.firstChild);
  // injecting fader stylesheet
  var style = document.createElement("LINK");
  style.rel = "stylesheet";
  style.href = cssBase64DataURI || "data:text/css;base64,OnJvb3R7LS1mYWRlci1jb2xvcjojZmZmfSNmYWRlcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6OTk5OTk5OTtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQ6I2ZmZjtiYWNrZ3JvdW5kOnZhcigtLWZhZGVyLWNvbG9yKTstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouM3M7YW5pbWF0aW9uLWR1cmF0aW9uOi4zczstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dH0jZmFkZXIuZmFkZS1vdXR7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZXItLWZhZGUtb3V0O2FuaW1hdGlvbi1uYW1lOmZhZGVyLS1mYWRlLW91dH0jZmFkZXIuZmFkZS1pbntvcGFjaXR5OjE7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlci0tZmFkZS1pbjthbmltYXRpb24tbmFtZTpmYWRlci0tZmFkZS1pbn1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZXItLWZhZGUtb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlci0tZmFkZS1vdXR7ZnJvbXtvcGFjaXR5OjF9dG97b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZXItLWZhZGUtaW57ZnJvbXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZhZGVyLS1mYWRlLWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19";
  document.head.appendChild(style);
  // stop if AnimationEvent is not supported
  if (!window.AnimationEvent) {
    return;
  }
  // attaching fade-out effect events to all anchors of the page
  document.addEventListener("DOMContentLoaded", function() {
    var anchors = document.getElementsByTagName("a");
    // extracting some anchors from the effect
    for (var i = 0; i < anchors.length; i++) {
      if (
        (
          // anchors on the same pathname
          anchors[i].hash.length &&
          anchors[i].pathname === window.location.pathname
        ) ||
        (
          // anchors linking back to origin
          anchors[i].hash.length &&
          anchors[i].pathname === document.baseURI.replace(window.location.origin, '')
        ) ||
        // anchors linking to a different origin
        anchors[i].hostname !== window.location.hostname
      ) {
        continue;
      }
      // attaching events to the targeted anchors
      anchors[i].addEventListener("click", function(event) {
        var anchor = event.currentTarget;
        // defer location change until the animation has finished
        var listener = function listener() {
          window.location = anchor.href;
          fader.removeEventListener("animationend", listener);
        };
        // attaching the event to the anchor
        fader.addEventListener("animationend", listener);
        event.preventDefault();
        fader.classList.add("fade-in");
        // using fader.classList.remove("fade-out")
        // causes a problem with browsers that do not
        // reload the page when getting back to it
      });
    }
  });
  // stop fade effect for cached documents
  window.addEventListener("pageshow", function(event) {
    if (!event.persisted) {
      return;
    }
    fader.classList.remove("fade-in");
  });
  // remove fader script from the document
  var script = document.getElementById("fader-script");
  if (script) {
    document.body.removeChild(script);
  }
})();