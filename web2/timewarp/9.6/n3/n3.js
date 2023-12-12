function Add(href) {
    n3[++NumInn3] = new n3Object(href);
    if (location.href.indexOf(href) > -1)
        Whereinn3 = NumInn3;
}

function n3Object(href) {
    this.href = href;
}

var Whereinn3 = 0, NumInn3 = 0, n3 = new Array();

Add("https://openbooks.neocities.org");
Add("https://openbooks.neocities.org/homes/coyote");
Add("https://vhs.neocities.org");
Add("https://personally-comfy.neocities.org");
Add("https://roly.neocities.org");

if (Whereinn3 == 0) Whereinn3 = 1;

if (Whereinn3 == 1)
    PrevInn3 = NumInn3;
else
    PrevInn3 = Whereinn3 - 1;

if (Whereinn3 == NumInn3)
    NextInn3 = 1;
else
    NextInn3 = Whereinn3 + 1;

var output = '';

output += '<style>img{transition-duration: 100ms;}.n3{image-rendering: pixelated;text-align:center;}.n3 img:hover{transform: translate(0, -1px);filter: brightness(125%);}.n3 img:active{transform: translate(0, 1px);filter: brightness(90%);}@media(prefers-reduced-motion){img{transition-duration:0ms;}}</style>'

output += '<div class="n3">'

output += '<A HREF="' + n3[PrevInn3].href + '" TARGET="_top">';

output += '<IMG SRC="https://openbooks.neocities.org/n3/Prev.png" BORDER="0" ALT="Previous"></A>';

output += '<A HREF="https://openbooks.neocities.org/" TARGET="_blank">';

output += '<IMG SRC="https://openbooks.neocities.org/n3/Button.png" BORDER="0" ALT=" "></A>';

output += '<A HREF="' + n3[NextInn3].href + '" TARGET="_top">';

output += '<IMG SRC="https://openbooks.neocities.org/n3/Next.png" BORDER="0" ALT=" "></A></div>';

document.write(output);