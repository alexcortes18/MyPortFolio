export default function PdfPageController({ pageNumber, numPages, setPageNumber, isPageNumber }) {
    return (
        <>
            <div>
                <button className="page-control-button"
                    disabled={pageNumber <= 1}
                    onClick={() => setPageNumber(pageNumber - 1)}
                >
                    Previous
                </button>
                <button className="page-control-button"
                    disabled={pageNumber >= numPages}
                    onClick={() => setPageNumber(pageNumber + 1)}
                >
                    Next
                </button>
            </div>
            {isPageNumber && <p>Page {pageNumber} of {numPages}</p>}
        </>
    )
}