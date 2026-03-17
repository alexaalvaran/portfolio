export default function TechStack() {
    return (
        <section id="TechStack" className="w-full min-h-screen flex flex-col items-start justify-center bg-amber-50 text-zinc-500 p-8">
            <div className="w-full flex flex-row items-start justify-between">

                <div className="flex flex-col items-center justify-center space-y-4">
                    <h2 className="text-2xl font-bold"> Languages </h2>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        Python
                    </div>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        Java 
                    </div>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        Typescript
                    </div>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        C++
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 ml-16">
                    <h2 className="text-2xl font-bold"> Frameworks </h2>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        React
                    </div>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        Next.js
                    </div>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        Node.js
                    </div>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        PyTorch
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 ml-16">
                    <h2 className="text-2xl font-bold"> Tools </h2>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        Git
                    </div>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        Figma
                    </div>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        AWS
                    </div>
                    <div className="border rounded-full bg-zinc-500 text-white text-xl px-6 py-3 flex items-center justify-center">
                        Webflow
                    </div>
                </div>
            </div>
        </section>
    )
}