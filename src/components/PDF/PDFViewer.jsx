import { Document, Page, pdfjs } from "react-pdf";
import { useState } from 'react';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import PdfPageController from "./PdfPageController";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function PDFViewer({pdfLocation}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(2); // State to manage zoom level

    // Correctly destructure the argument to get numPages
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="pdf">
            {/* <PdfPageController pageNumber={pageNumber} numPages={numPages} setPageNumber={setPageNumber}></PdfPageController> */}
            <Document file={pdfLocation} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} scale={scale} />
            </Document>
            <PdfPageController isPageNumber={true} pageNumber={pageNumber} numPages={numPages} setPageNumber={setPageNumber}></PdfPageController>
            
            {/* <div>
                <label htmlFor="zoom">Zoom:</label>
                <select
                    id="zoom"
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                >
                    <option value={0.5}>50%</option>
                    <option value={1}>100%</option>
                    <option value={1.5}>150%</option>
                    <option value={2}>200%</option>
                </select>
            </div> */}
        </div>
    );
}
