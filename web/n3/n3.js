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
Add("https://vhs.neocities.org");

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

output += '<div style="image-rendering: crisp-edges;text-align:center;margin: 10px;">'

output += '<A HREF="' + n3[PrevInn3].href + '" TARGET="_top">';

output += '<IMG SRC="https://openbooks.neocities.org/n3/Prev.png" BORDER="0" ALT="Previous"></A>';

output += '<A HREF="https://openbooks.neocities.org/" TARGET="_blank">';

output += '<IMG SRC="https://openbooks.neocities.org/n3/Button.png" BORDER="0" ALT=" "></A>';

output += '<A HREF="' + n3[NextInn3].href + '" TARGET="_top">';

output += '<IMG SRC="https://openbooks.neocities.org/n3/Next.png" BORDER="0" ALT=" "></A></div>';

document.write(output);