# CV

`resume.tex` is the source of the CV. It is kept here so the wording on the site and
the wording on the PDF can be changed together and stay in step.

## Producing the PDF

The document uses pdfLaTeX with EB Garamond and Source Sans, both of which ship with a
full TeX Live. Overleaf has them already, so the simplest route is:

1. Open the project on Overleaf.
2. Recompile.
3. Download the PDF.
4. Save it as `public/resume.pdf` in this project.
5. In `src/data/portfolio.ts`, set `resume.available` to `true`.

The Download CV button then appears in the hero. While `available` is `false` the
button is not rendered at all, so the page never offers a download that 404s.

To build it locally instead, install a TeX distribution (MacTeX on macOS) and run
`pdflatex resume.tex` twice from this folder.

## Why the PDF lives in `public/`

Anything in `public/` is copied into the build and served from your own domain, so the
CV ends up at `yourdomain.com/resume.pdf`: a permanent URL you control, with no sharing
permissions to get wrong and nothing that can expire.

Note that this makes the PDF publicly fetchable by anyone who knows the address, which
is normal for a portfolio CV but worth remembering, since this document carries a phone
number.
