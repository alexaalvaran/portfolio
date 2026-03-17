export default function Projects() {
    return (
        <section id="Projects" className="w-full min-h-screen flex flex-col items-start justify-center bg-amber-50 text-zinc-500 p-20 space-y-5">
            <h2 className="text-4xl font-bold mb-10"> My Projects </h2>

            <div className="w-full flex flex-row items-center justify-around">
                <div className="projectBox">
                  <h3>ProjectC</h3>
                  <p> A personal project </p>
                </div>

                <div className="projectBox">
                    <h3>Brainbox Education</h3>
                    <p> Designed, developed and launched website </p>
                </div>

                <div className="projectBox">
                    <h3>Automatic Sleep Stage Classification</h3>
                    <p> Designed, developed and launched website </p>
                </div>

            </div>

            <div className="w-full flex flex-row items-center justify-around">
          
                <div className="projectBox">
                    <h3>NZSL Detection</h3>
                    <p> Designed, developed and launched website </p>
                </div>

                <div className="projectBox">
                    <h3>Doorknock</h3>
                    <p> Designed, developed and launched website </p>
                </div>


                <div className="projectBox">
                    <h3>Portfolio</h3>
                    <p> Designed, developed and launched website </p>
                </div>
            </div>

            <div className="w-full flex flex-row items-center justify-around">

                <a
                    href="https://github.com/alexaalvaran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-500 text-white font-bold border rounded-full px-6 py-2 mt-10 hover:bg-zinc-600"
                >
                    Check out my Github for more projects!
                </a>

            </div>

        </section>
    )
}