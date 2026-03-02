import { useRef } from "react";

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span key={i} className={className} style={{
            fontFeatureSettings: `'whgt ${baseWeight}`
        }}> {char === " " ? "\u00A0" : char} </span>
    ))
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    return (
        <section id="welcome">
            <p ref={subtitleRef}>Hai, I'm Hildi Welcome to my</p>
            <h1 ref={titleRef} className="mt-7">portfolio</h1>
            <div className="small-screen">
                <p>This portfolio is designed for desktop only</p>
            </div>

        </section>
    )
}

export default Welcome;