import ProjectCard from "./ProjectCard"
import CryptoProjImg from "../../assets/img/proj/crypto-thumb.png"
import Header from "../SubComponents/Header"
const projects = [
    {
        id: 1,
        title: 'CoinQuest 💸',
        description: 'Explore the world of digital assets with our Conquest website, powered by real-time data from the CoinGecko API.',
        imgSrc: CryptoProjImg,
        codeLink: 'https://github.com/andreikennethmoreno/CoinQuest-Crypto.git',
        demoLink: 'https://example.com/',
        technologies: ['Express', 'API']
    },
    {
        id: 2,
        title: 'CoinQuest 💸',
        description: 'Explore the world of digital assets with our Conquest website, powered by real-time data from the CoinGecko API.',
        imgSrc: CryptoProjImg,
        codeLink: 'https://github.com/andreikennethmoreno/CoinQuest-Crypto.git',
        demoLink: 'https://example.com/',
        technologies: ['Express', 'API']
    },
    {
        id: 3,
        title: 'CoinQuest 💸',
        description: 'Explore the world of digital assets with our Conquest website, powered by real-time data from the CoinGecko API.',
        imgSrc: CryptoProjImg,
        codeLink: 'https://github.com/andreikennethmoreno/CoinQuest-Crypto.git',
        demoLink: 'https://example.com/',
        technologies: ['Express', 'API']
    },
    {
        id: 4,
        title: 'CoinQuest 💸',
        description: 'Explore the world of digital assets with our Conquest website, powered by real-time data from the CoinGecko API.',
        imgSrc: CryptoProjImg,
        codeLink: 'https://github.com/andreikennethmoreno/CoinQuest-Crypto.git',
        demoLink: 'https://example.com/',
        technologies: ['Express', 'API']
    },
    {
        id: 5,
        title: 'CoinQuest 💸',
        description: 'Explore the world of digital assets with our Conquest website, powered by real-time data from the CoinGecko API.',
        imgSrc: CryptoProjImg,
        codeLink: 'https://github.com/andreikennethmoreno/CoinQuest-Crypto.git',
        demoLink: 'https://example.com/',
        technologies: ['Express', 'API']
    },

];

function Projects () {

    
    return (
        <>
            <section id="portfolio" className="off-white">

                <div id="proj1"></div>

                <div className="off-white about container col-xl-10 col-xxl-8 px-5 py-5 mt-5 ">
                    <div className="row flex-lg-row align-items-center g-lg-5 py-5">
                  
                  <Header 
                  activeTitle={"PROJECTS"} 
                  h2Title={"Each project is a unique piece of development 🧩"}/>

                  {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgSrc={project.imgSrc}
                            codeLink={project.codeLink}
                            demoLink={project.demoLink}
                            technologies={project.technologies}
                            className={project.id % 2 === 0 ? '' : 'flex-lg-row-reverse'}

                        />
                    ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects 