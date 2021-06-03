//@ts-check

const { PDFDocument } = require("pdf-lib");
const path = require("path");
const fs = require("fs");

(async () => {
	const mergedPdfDoc = await PDFDocument.create();
	const relativePathToPdfsToMerge = ["./1.pdf", "./2.pdf"];

	for (const relativePath of relativePathToPdfsToMerge) {
		const absolutePathToPdfToMerge = path.resolve(__dirname, relativePath);
		const pdfToMergeSrc = fs.readFileSync(absolutePathToPdfToMerge, {
			encoding: "base64",
		});
		const pdfDoc = await PDFDocument.load(pdfToMergeSrc);
		const pageIndices = pdfDoc.getPageIndices();
		const copiedPages = await mergedPdfDoc.copyPages(pdfDoc, pageIndices);
		for (const copiedPage of copiedPages) {
			await mergedPdfDoc.addPage(copiedPage);
		}
	}

	const mergedPdfSrc = await mergedPdfDoc.save();

	fs.writeFileSync("merged.pdf", mergedPdfSrc);
})();
