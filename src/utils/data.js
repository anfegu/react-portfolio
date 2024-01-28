// All the data used in the project is stored in this file.

// ****** ABOUT Component *******
// Here goes the career years.
export const careerYears = (new Date() - new Date("2012-06-25")) /  (1000 * 60 * 60 * 24 * 365.25); //Calculate from June 25, 2012. This is when I started my career.

/*Years of Experience:
0-1 years: Novice
1-3 years: Intermediate
3-5 years: Advanced
5+ years: Expert

Level Rating:
1: Novice
2: Intermediate
3: Advanced
4: Expert */

// Here goes the list of skills, years of experience and level rating of each one.
export const skillsData = [
    { id: "Rust_skill", content: "Rust", years: 4, level: 4 },
    { id: "JavaScript_skill", content: "JavaScript", years: 9, level: 3 },
    { id: "React_skill", content: "ReactJS", years: 6, level: 3},
    { id: "TypeScript_skill", content: "TypeScript", years: 5, level: 3},
    { id: "HTML5_skill", content: "HTML5", years: 7, level: 3 },
    { id: "CSS3_skill", content: "CSS3", years: 7, level: 3 },
    { id: "node_skill", content: "NodeJS", years: 5, level: 4},
    { id: "Express_skill", content: "ExpressJS", years: 5, level: 4},
    { id: "SQL_skill", content: "SQL", years: 10, level: 4 },
    { id: "mongo_skill", content: "MongoDB", years: 4, level: 4},
    { id: "Blockchain_skill", content: "Blockchain", years: 5, level: 4},
    { id: "Solidity_skill", content: "Solidity", years: 3, level: 3},
    { id: "Web3_skill", content: "Web3", years: 4, level: 4},
    { id: "Ethereum_skill", content: "Ethereum", years: 4, level: 3},
    { id: "Solana_skill", content: "Solana", years: 2, level: 3},
    { id: "Git_skill", content: "Git", years: 7, level: 4},
    { id: "NPM_skill", content: "NPM", years: 7, level: 4},
    { id: "Webpack_skill", content: "Webpack", years: 8, level: 4},
    { id: "IPFS_skill", content: "IPFS", years: 3, level: 3},
    { id: "ReactNative_skill", content: "ReactNative", years: 3, level: 3},
    { id: "Flutter_skill", content: "Flutter", years: 3, level: 3},
    { id: "Docker_skill", content: "Docker", years: 5, level: 3},

 ];
 
// Here goes the about me data split in paragraphs
 export const aboutMeData = [
    {
      id: "first-p-about",
      content:
        "As a software analyst and developer with over a decade of seasoned experience, I specialize in architecting and developing high-performance IT solutions across various programming languages and frameworks. My expertise includes seamless systems integration, covering both client-side and server-side aspects of holistic application development. Throughout the years, I've refined my skills to deliver robust and efficient software solutions that adapt to the ever-evolving needs of the digital landscape."
    },
    {
      id: "second-p-about",
      content:
        "In the field of technology solutions, I enjoy contributing to innovative projects, especially within the dynamic domain of blockchain technology. Working collaboratively, I focus on system optimization, designing scalable architectures, and steering the development of cutting-edge applications. This dedication allows me to stay at the forefront of technological advancements and make impactful contributions in a constantly changing environment. My commitment is to push the boundaries of what is possible, ensuring that the solutions I contribute to are not only efficient but also well-aligned with the latest technological trends."
    },
    {
      id: "third-p-about",
      content:
        "In holistic app development, my versatile skill set enables seamless navigation between the user interface and server logic, fostering a comprehensive approach to crafting software solutions. With extensive experience, I've cultivated a profound understanding of the intricacies involved in creating high-performance IT solutions, making me a reliable and proficient professional in the field. Whether delving into Rust, mastering JavaScript nuances, or architecting scalable APIs, my dedication to excellence and staying ahead in the fast-paced world of technology remains unwavering."
    }
 ];
 