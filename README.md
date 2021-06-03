## Bug

In this repository I use pdf-lib to merge the following pdf:

- `./1.pdf`
- `./2.pdf`

These two pdf files have in page links that link somewhere inside the pdf (open the pdf and click on the blue highlighted links).

The merged pdf have these links not working.

The code used to merge the pdf is in `./merge-pdf.js`.

## Steps to reproduce

Clone this repository and change your current working directory to it:

```bash
git clone https://github.com/lillallol/issue-pdf-lib-merged-pdf-in-page-links-bug ./issue-pdf-lib-merged-pdf-in-page-links-bug;
cd ./issue-pdf-lib-merged-pdf-in-page-links-bug;
```

Then install the node modules:

```bash
npm install;
```

Then merge the pdf:

```bash
node merge-pdf.js;
```
