import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import PdfPageController from "./PdfPageController";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

export default function MultiPDFViewer({ pdfFiles, initialScale, cssClass }) {
    const [currentPdfIndex, setCurrentPdfIndex] = useState(0);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(initialScale);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1); // Reset to the first page of the new PDF
    }

    const handleNextPdf = () => {
        if (currentPdfIndex < pdfFiles.length - 1) {
            setCurrentPdfIndex(currentPdfIndex + 1);
        }
    };

    const handlePrevPdf = () => {
        if (currentPdfIndex > 0) {
            setCurrentPdfIndex(currentPdfIndex - 1);
        }
    };

    return (
        <div className={cssClass}>
            <Document
                file={pdfFiles[currentPdfIndex]}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} scale={scale} />
            </Document>
            <div>
                <button
                    className="page-control-button"
                    onClick={handlePrevPdf}
                    disabled={currentPdfIndex === 0}>
                    Previous PDF
                </button>
                <button
                    className="page-control-button"
                    onClick={handleNextPdf}
                    disabled={currentPdfIndex === pdfFiles.length - 1}>
                    Next PDF
                </button>
            </div>
            {<p>PDF {currentPdfIndex+1} of {pdfFiles.length}</p>}
        </div>
    );
}
