export default function Contact() {
    return (
        <section id="Contact" className="w-full min-h-screen flex flex-col items-center justify-center bg-amber-50 text-zinc-500">
            <h2 className="text-4xl font-bold p-8"> Contact Me </h2>
            <div className="w-full flex flex-row items-center justify-around p-5">
                <div className="contactButton">
                    <a href="mailto:alexaalvaran.aa@gmail.com">
                    Email
                    </a>
                </div>  
                <div className="contactButton">
                    <a href="https://www.linkedin.com/in/alexa-alvaran/">
                        LinkedIn
                    </a>
                </div>
                <div className="contactButton">
                    <a href="https://github.com/alexaalvaran">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}
