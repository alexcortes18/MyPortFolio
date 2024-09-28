import MultiPDFViewer from "../PDF/MultiPDFViewer";
import DeepLearningCertificate from "../../assets/DeepLearningCNNs.pdf";
import JavascriptBasics from "../../assets/Javascript Basics.pdf";
import AngularBasics from "../../assets/Angular_Basics.pdf";



export default function Courses() {
    return (
        <>
            <div className="courses">
                <h2>Recent Courses:</h2>
                <MultiPDFViewer
                    pdfFiles={[DeepLearningCertificate, JavascriptBasics, AngularBasics]}
                    initialScale={0.7}
                    cssClass={"pdf pdfscaling"}
                >
                </MultiPDFViewer>
            </div>
        </>
    );
}