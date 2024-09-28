import { Document, Page, pdfjs } from "react-pdf";
import { useState } from 'react';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import PdfPageController from "./PdfPageController";
import Zoom from "./ZoomController";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function PDFViewer({ pdfLocation }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.8); // State to manage zoom level

    // Correctly destructure the argument to get numPages
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className="pdf">
            {/* <Zoom onSetScale={setScale} scale={scale}></Zoom> */}
            <Document file={pdfLocation} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} scale={scale} />
            </Document>
            <PdfPageController isPageNumber={true} pageNumber={pageNumber} numPages={numPages} setPageNumber={setPageNumber}></PdfPageController>
        </div>
    );
}
