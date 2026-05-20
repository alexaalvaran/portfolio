export default function Header() {
    return (
        <section id="About" className="w-full min-h-screen flex flex-col items-start justify-center bg-amber-50 text-zinc-500 p-20 space-y-4">
            <h1 className="text-4xl font-bold"> Hi, I&apos;m Alexa Alvaran </h1>
            <p className="text-lg text-zinc-400 max-w-4xl font-semibold">
                I am a recent Software Engineering graduate passionate about developing and designing applications,
                as well as the application of AI for real-world problems. I love learning new technologies and constantly exploring new ideas whether that&apos;s
                building web applications, exploring machine learning, or creative projects that combine both creative and technical thinking. I am currently looking for new opportunities
                to grow and develop my skills as a software engineer, and I am open to both full-time roles and internships.
            </p>

            <p className="text-lg text-zinc-400 max-w-4xl font-semibold">
                Outside of tech, I enjoy reading, baking, spending time with my loved ones and cats, lifting weights, pilates, swimming, and exploring new cafes and restaurants.
                
            </p>
            <button className="bg-zinc-500 text-white font-bold border rounded-full px-4 py-2">
                CONTACT ME
            </button>
        </section>
    )
}