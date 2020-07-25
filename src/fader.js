(function (cssBase64DataURI) {
  "use strict";

  var style = document.createElement("LINK");
  style.rel = "stylesheet";
  style.href = cssBase64DataURI || "data:text/css;base64,I2ZhZGVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDo5OTk5OTk5O3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZDojZmZmOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi4zczthbmltYXRpb24tZHVyYXRpb246LjNzOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fSNmYWRlci5mYWRlLW91dHtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlLW91dDthbmltYXRpb24tbmFtZTpmYWRlLW91dH0jZmFkZXIuZmFkZS1pbntvcGFjaXR5OjE7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlLWluO2FuaW1hdGlvbi1uYW1lOmZhZGUtaW59QC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtb3V0e2Zyb217b3BhY2l0eToxfXRve29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlLW91dHtmcm9te29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19QGtleWZyYW1lcyBmYWRlLWlue2Zyb217b3BhY2l0eTowfXRve29wYWNpdHk6MX19";
  document.head.appendChild(style);

  var fader = document.createElement("SVG");
  fader.id = "fader";
  document.body.insertBefore(fader, document.body.firstChild);

  var script = document.getElementById("fader-script");
  document.body.removeChild(script);

  if (!window.AnimationEvent) {
    return;
  }

  fader.classList.add("fade-out");

  document.addEventListener("DOMContentLoaded", function () {
    var anchors = document.getElementsByTagName("a");

    for (var i = 0; i < anchors.length; i++) {
      if (
        anchors[i].hostname !== window.location.hostname ||
        anchors[i].pathname === window.location.pathname ||
        anchors[i].pathname === document.baseURI.replace(window.location.origin, '')
      ) {
        continue;
      }

      anchors[i].addEventListener("click", function (event) {
        var anchor = event.currentTarget;

        var listener = function listener() {
          window.location = anchor.href;
          fader.removeEventListener("animationend", listener);
        };

        fader.addEventListener("animationend", listener);
        event.preventDefault();
        fader.classList.add("fade-in");
        // using fader.classList.remove("fade-out")
        // causes a problem with browsers that do not
        // reload the page when getting back to it
      });
    }
  });

  window.addEventListener("pageshow", function (event) {
    if (!event.persisted) {
      return;
    }

    var fader = document.getElementById("fader");
    fader.classList.remove("fade-in");
  });

})();
