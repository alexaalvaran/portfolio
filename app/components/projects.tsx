export default function Projects() {
    return (
        <section id="Projects" className="w-full min-h-screen flex flex-col items-start justify-center bg-amber-50 text-zinc-500 p-20 space-y-5">
            <h2 className="text-4xl font-bold mb-10"> My Projects </h2>

            <div className="w-full flex flex-row items-center justify-around">
                <div className="projectBox">
                  <h3>ProjectC</h3>
                    <p> My boyfriend and I have several restaurants and date ideas to try which often get lost and forgotten
                        in our messages. To solve this problem, I designed and developed a web application that allows
                        us to easily save and keep track of these ideas, as well as rate and review them, all in one place.
                    </p>

                    <p>
                        Current fetures of this web application include the ability to carry out CRUD (Create, Read, Update, Delete) operations on our saved notes, restaurants, and date ideas.
                        Further improvements that I would like to make to this application include the ability to upload photos, search and filter through existing notes, restaurants and date ideas,
                        as well as an AI feature that can recommend restaurants and date ideas based on our existing saved notes and preferences. I would also like to improve the security of the application
                        by implementing user authentication and authorization, as well as improving the overall design and user experience of the application.
                    </p>

                    <p>
                        This is a password protected application as it intended to be used by just the two of us, but if you would like
                        see it in action, please reach out to me and I would be happy to demonstrate it to you! Alternatively, you can check out the code on my Github.
                    </p>

                    <p>
                        This application was built with Next.js for the frontend, Node.js for the backend and PostgreSQL for the database.
                        The frontend is deployed on Vercel, the database is hosted on AWS RDS and the backend is hosted on AWS EC2.
                    </p>
                </div>

                <div className="projectBox">
                    <h3>Brainbox Education</h3>
                    <p> In this role I was tasked to design, develop, and launch a user-focused web application for a NZ based tutoring company.
                        The process of building this website involved close collaboration with the client to ensure that the final product met their needs and expectations.
                        I worked closely with the client to understand their requirements and goals for the website, and then used that information to design and develop a
                        user-friendly and visually appealing website that effectively showcased their services and offerings.
                    </p>

                    <p>
                        As the sole developer on this project, I was responsible for all aspects of the website development process, from initial design and development to testing and deployment.
                        For this project, Figma was used for the design, and Webflow was used to develop and launch the website. Webfllow was chosen for this project as it allowed for non-technical
                        team members to easily make updates and changes to the website without needing to rely on a developer, which was an important consideration for the client.
                    </p>

                    <p>
                        The end result was a successful launch of the website that effectively met the needs of the client and provided a positive user experience for their customers.
                    </p>
                    <a
                        href="https://brainbox.org.nz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-500 text-white text-sm font-bold border rounded-full px-2 py-2 hover:bg-zinc-600 mt-5"
                    >
                        Visit Brainbox Education
                    </a>
                </div>

                <div className="projectBox">
                    <h3>Automatic Sleep Stage Classification</h3>
                    <p>
                        This project was my final year research project for my Software Engineering degree. The goal of this project was to develop a deep learning model
                        that could automatically classify sleep stages based on raw, real recorded sleep data. The model was trained on the Physionet Sleep-EDF dataset,
                        which contains polysomnographic sleep recordings from healthy subjects.
                    </p>

                    <p>
                        The model was developed using Python and Tensorflow, and was trained on a GPU through Google Colab to speed up the training process.
                        The architecture of the model contained Convolutional Neural Networks (CNNs) to extract features from the raw sleep data,
                        and a Transformer architecture to capture the temporal dependencies inherent in sleep data.
                    </p>

                    <p>
                        Although the model did not achieve state-of-the-art performance, it was able to achieve a reasonable level of accuracy in classifying sleep stages, and provided
                        valuable insights into the potential of deep learning for sleep stage classification. At the end of the project, I was able to identify that the main area of
                        improvement for the model was in the data preparation - particularly in the imbalance of the dataset. Overall, this project provided a valuable learning experience in the
                        application of deep learning techniques to real-world data, and highlighted the importance of data preparation and preprocessing in achieving good model performance.
                    </p>
                </div>

            </div>

            <div className="w-full flex flex-row items-center justify-around">
          
                <div className="projectBox">
                    <h3>Doorknock</h3>
                    <p>
                        In this role, I was tasked with designing, developing, and launching a user-focused web application for Doorknock NZ. The project involved close collaboration with the founder,
                        Tim Hall, to ensure the final product accurately reflected the company&#39;s vision, values, and target audience.
                    </p>
                    <p>
                        Doorknock was founded on the belief that traditional property systems often advantage established investors who have access to off-market opportunities, leaving everyday buyers at a disadvantage.
                        In response to this, the platform aims to level the playing field by enabling more direct and proactive connections between buyers and homeowners before properties are publicly listed.
                   
                        Using these insights, I independently designed and developed a modern, user-friendly web application that communicated Doorknock&#39;s purpose while providing a clear and intuitive user experience.
                        The interface was designed in Figma, with a strong focus on simplicity, accessibility, and alignment with the brand&#39;s proactive, people-first philosophy.
                        The application was then built and deployed using Webflow, enabling efficient development while also allowing non-technical team members to manage and update content post-launch.
                        This was an important consideration for the client, ensuring long-term maintainability without reliance on developer intervention.
                    </p>

                    <p>
                        Throughout the project, I was responsible for the full end-to-end development lifecycle, including design, implementation, testing, and deployment. The final product successfully delivered a polished and functional web
                        application that reflected Doorknock&#39;s mission and provided a clear, engaging experience for its users.
                    </p>

                    <a
                        href=" https://www.doorknock.co.nz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-500 text-white text-sm font-bold border rounded-full px-2 py-2 hover:bg-zinc-600 mt-5"
                    >
                        Visit Doorknock
                    </a>
                </div>


                <div className="projectBox">
                    <h3>Portfolio</h3>
                    <p>
                        This is the website you are currently on! I have always wanted to create a personal portfolio website and I am very happy to have finally taken the time
                        to design and develop one. This initial deployment of the website is a simple and clean design with the purpose of simply showcasing my projects and experience.
                        I plan to continue improving and updating this website over time as I complete more projects and gain more experience, and I am excited to see how it evolves in the future.
                        The current UI is not very complex, but I wanted to focus on creating a responsive and user-friendly design that effectively showcases my work and experience, rather than getting caught up in complex design elements that may not add much value to the overall user experience.
                        In the future I plan to add more complex design elements and features to the website, such as animations, interactive elements, and possibly other sections.
                    </p>

                    <p>
                        This website was built using Next.js and Tailwind CSS, and is deployed on Vercel.
                        I chose to build this website using Next.js because of its powerful features for building modern web applications, 
                        such as server-side rendering and static site generation, which allow for fast load times and improved SEO performance.
                        Tailwind CSS was chosen for its utility-first approach to styling, which allows for rapid development and easy customization of the design.
                        Overall, this portfolio website serves as a showcase of my skills and projects, and provides a platform for potential employers or collaborators to learn more about my work and experience.
                    </p>
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