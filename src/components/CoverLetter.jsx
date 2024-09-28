import { coverLetter } from "../data/coverletter";

export default function CoverLetter() {
    return (
        <>
            <div className="cover-letter">
                <p>Dear HR Managers,</p>
                <p>{coverLetter}</p>
                <p><strong>Alejandro Cortés</strong></p>
            </div>
        </>
    );
}