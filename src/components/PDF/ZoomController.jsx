export default function Zoom({ onSetScale, scale }) {
    return (
    <div>
        <label htmlFor="zoom">Zoom:</label>
        <input
            id="zoom"
            type="range"
            min="1.5"
            max="2"
            step="0.025"
            value={scale}
            onChange={(e) => onSetScale(Number(e.target.value))}
        />
    </div>
    );
}