/**
 * Intro curtain.
 *
 * Deliberately a server component with zero JS: the whole sequence
 * is CSS, so it ships inside the static HTML (no flash of hero
 * before the curtain appears) and always lifts on its own — a
 * failed or slow bundle can never strand a visitor behind it.
 */
export default function Intro() {
    return (
        <div className="intro" aria-hidden="true">
            <div className="intro-panel intro-panel-top" />
            <div className="intro-panel intro-panel-bottom" />
            <div className="intro-mark">
                <span className="intro-word">TALIB</span>
                <span className="intro-bar" />
            </div>
        </div>
    );
}
