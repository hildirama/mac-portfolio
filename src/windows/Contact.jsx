import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
    return (
        <>
        <div id="window-header">
            <WindowControls target="contact" />
            <h2>Contact Me</h2>
        </div>

        <div className="p-5 space-y-5">
            <img src="/images/adrian.jpg" alt="Adrian" 
            className="w-20 rounded-full"/>

            <h3>let's connect</h3>
            <p>got an ide? i'm here to give your an idea</p>
            <p>contact@hira.com</p>

            <ul>
                {socials.map(({id, bg, link, icon, text}) => (
                    <li key={id} style={{backgroundColor: bg}}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src={icon} alt={text} className="size-5" />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;