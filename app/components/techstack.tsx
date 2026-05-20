export default function TechStack() {
    return (
        <section id="TechStack" className="w-full min-h-screen flex flex-col items-center justify-center bg-amber-50 text-zinc-500">
    
                <h2 className="text-4xl font-bold p-8"> My Tech Stack </h2>
                   
            <div className="w-full flex flex-row items-center justify-around p-5">

                <div className="flex flex-col items-center justify-center space-y-6">
                    <h3 className="text-2xl font-bold"> Languages </h3>
                    <div className="techstackpill">
                        Python
                    </div>
                    <div className="techstackpill">
                        Java 
                    </div>
                    <div className="techstackpill">
                        Typescript
                    </div>
                    <div className="techstackpill">
                        C++
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-6">
                    <h3 className="text-2xl font-bold"> Frameworks </h3>
                    <div className="techstackpill">
                        React
                    </div>
                    <div className="techstackpill">
                        Next.js
                    </div>
                    <div className="techstackpill">
                        Node.js
                    </div>
                    <div className="techstackpill">
                        PyTorch
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-6">
                    <h3 className="text-2xl font-bold"> Tools </h3>
                    <div className="techstackpill">
                        Git
                    </div>
                    <div className="techstackpill">
                        Figma
                    </div>
                    <div className="techstackpill">
                        AWS
                    </div>
                    <div className="techstackpill">
                        Webflow
                    </div>
                </div>
            </div>
        </section>
    )
}