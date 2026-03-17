export default function Header() {
    return (
        <section id="Header" className="w-full min-h-screen flex flex-col items-start justify-center bg-amber-50 text-zinc-500 p-8 space-y-4">
            <h1 className="text-2xl font-bold"> Hi, I&apos;m Alexa </h1>
            <p className="text-sm max-w-lg font-semibold">Hi, I am a recent Software Engineering graduate passionate about developing and designing applications,
                as well as the application of AI for real-world problems. I love learning new technologies and constantly exploring new ideas whether that&apos;s
                building web applications, exploring machine learning, or creative projects that combine both creative and technical thinking. </p>
            <button className="bg-zinc-500 text-white font-bold border rounded-full p-4">
                CONTACT ME
            </button>
        </section>
    )
}