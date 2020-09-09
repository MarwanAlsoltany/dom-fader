# DOM Fader

Add a subtle fade-in/fade-out effect when accessing or navigating into a website.

Inspired by Christopher Aue's article [How To Fade Web Pages On Load And Unload (CSS + JS)](https://christopheraue.net/design/fading-pages-on-load-and-unload).


## Installation

Just add the content of [fader.htm](./fader.htm) directly after the body tag in your layout.
This one-liner will add the necessary elements to your webpage, inject some CSS, and attach the events.

You can also use [fader.min.js](./dist/fader.min.js) and link it directly after the body tag if you don't want to use a script tag with data-uri. Make sure that the script tag has the id `fader-script`.

Fading color can be customized using CSS Custom Properties. Simply overwrite `--fader-color` with the color you want, `!important` rule may be neccesary depending where you overwrite `--fader-color` in your stylesheet.


## License

Licensed under the [**MIT License**](./LICENSE).
<br/>
Copyright (c) 2020 Marwan Al-Soltany. All rights reserved.
<br/>
