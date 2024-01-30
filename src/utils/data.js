// All the data used in the project is stored in this file.

// ****** ABOUT Component *******

/* Career years.
1-3 years = 10
4-6 years = 30
7-10 years = 50
11-15 years = 70
16-20 years = 90
21+ years = 100 */

//Calculate from June 25, 2012. This is when I started my career.
const getCareerYears = (new Date() - new Date("2012-06-25")) / (1000 * 60 * 60 * 24 * 365.25); 

export const getCareerRating = () => {
  return (
    (getCareerYears < 4 ? 10  : 
     getCareerYears < 7 ? 30  : 
     getCareerYears < 11 ? 50 : 
     getCareerYears < 16 ? 70 : 
     getCareerYears < 21 ? 90 : 100));
}

/* Years of Experience:
1 year = 10
2-4 years = 30
5-8 years = 50
9-12 years = 70
13-15 years = 90
16+ years = 100 */
export const getExperienceWeight = (years) => {
  if ((years + 3) >= getCareerYears) return 80;
  if (years < 2) return 10;
  if (years < 5) return 30;
  if (years < 9) return 50;
  if (years < 13) return 70;
  if (years < 16) return 90;
  return 100;

};

/* Level Rating:
1 = 10. Novice: Basic familiarity, early stages of learning foundational skills.
2 = 30. Beginner Intermediate: Developing foundational understanding, may require guidance for advanced features.
3 = 50. Intermediate: Good proficiency, can work independently on routine tasks, comfortable with moderate complexity.
4 = 70. Advanced Intermediate: Handles more complex tasks within specific technologies, approaching advanced proficiency.
5 = 90. Proficient: High proficiency in multiple technologies, works independently, demonstrates mastery.
6 = 100. Expert: Recognized as an expert, comprehensive knowledge, excels at solving complex problems, significant contributions to specific technologies. */

export const getLevelWeight = {
  1: 10,
  2: 30,
  3: 50,
  4: 70,
  5: 90,
  6: 100
}

// Here goes the list of skills, weighted by years of experience and level rating of each one.
export const skillsData = [
    { id: "Rust_skill", content: "Rust", years: 3, level: 5 },
    { id: "JavaScript_skill", content: "JavaScript", years: 8, level: 5},
    { id: "React_skill", content: "ReactJS", years: 6, level: 5},
    { id: "TypeScript_skill", content: "TypeScript", years: 3, level: 3},
    { id: "HTML5_skill", content: "HTML5", years: 7, level: 4 },
    { id: "CSS3_skill", content: "CSS3", years: 7, level: 4 },
    { id: "node_skill", content: "NodeJS", years: 5, level: 4},
    { id: "Express_skill", content: "ExpressJS", years: 5, level: 4},
    { id: "SQL_skill", content: "SQL", years: 10, level: 6 },
    { id: "mongo_skill", content: "MongoDB", years: 4, level: 4},
    { id: "Blockchain_skill", content: "Blockchain", years: 4, level: 6},
    { id: "Solidity_skill", content: "Solidity", years: 3, level: 4},
    { id: "Web3_skill", content: "Web3", years: 4, level: 4},
    { id: "Ethereum_skill", content: "Ethereum", years: 4, level: 3},
    { id: "Solana_skill", content: "Solana", years: 3, level: 4},
    { id: "Git_skill", content: "Git", years: 8, level: 4},
    { id: "NPM_skill", content: "NPM", years: 8, level: 5},
    { id: "Webpack_skill", content: "Webpack", years: 6, level: 4},
    { id: "IPFS_skill", content: "IPFS", years: 3, level: 4},
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
 