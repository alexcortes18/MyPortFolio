import { Document, Page, pdfjs } from "react-pdf";
import { useState } from 'react';
import myPdfFile from "../assets/AlexCortesCV2024.pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function PDFViewer() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file={myPdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            {/* Show page navigation */}
            <p>
                Page {pageNumber} of {numPages}
            </p>
            {/* Navigation buttons */}
            <button
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber(pageNumber - 1)}
            >
                Previous
            </button>
            <button
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber(pageNumber + 1)}
            >
                Next
            </button>
        </div>
    );
}