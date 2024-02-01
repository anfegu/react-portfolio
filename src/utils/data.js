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
 
 export const techIcons = {
  Title: (
    <svg width="80" height="80" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M816.4 771.2H185.8c-11.5 0-20-10.9-17-22.1l45.7-173.7c2-7.7 9-13.1 17-13.1h539.1c8 0 15 5.4 17 13.1l45.7 173.7c3 11.2-5.4 22.1-16.9 22.1z m-573.5-43.9h516.4c11.5 0 20-10.9 17-22.1l-22.6-85.8c-2-7.7-9-13.1-17-13.1H265.4c-8 0-15 5.4-17 13.1l-22.6 85.8c-2.9 11.1 5.5 22.1 17.1 22.1z" fill="#333333"></path><path d="M259.6 210.5h483.8c12.1 0 22 9.8 22 22v318.9c0 12.1-9.8 22-22 22H259.6c-12.1 0-22-9.8-22-22v-319c0-12.1 9.9-21.9 22-21.9z" fill="#FFFFFF"></path><path d="M787.4 595.3H215.6V232.4c0-24.3 19.7-44 44-44h483.8c24.3 0 44 19.7 44 44v362.9zM259.6 232.4v318.9h483.8V232.4H259.6z" fill="#333333"></path><path d="M569.943 598.468l43.67-5.364 17.42 141.828-43.67 5.364zM372.01 735.071l17.42-141.828 43.67 5.364-17.42 141.828z" fill="#333333"></path><path d="M215.6 639.3h582.8v44H215.6z" fill="#333333"></path><path d="M351.1 276.4h300.8c26.3 0 47.5 21.3 47.5 47.5v146.8c0 26.3-21.3 47.5-47.5 47.5H351.1c-26.3 0-47.5-21.3-47.5-47.5V324c0-26.3 21.3-47.6 47.5-47.6z" fill="#F4CE26"></path><path d="M655.5 518.3H347.6c-24.3 0-44-19.7-44-44V320.4c0-24.3 19.7-44 44-44h307.9c24.3 0 44 19.7 44 44v153.9c0 24.3-19.8 44-44 44zM347.6 320.4v153.9h307.9V320.4H347.6z" fill="#333333"></path></g></svg>
  ),
  ReactJS: (
    <svg width="40" height="40" fill="#000000" viewBox="0 -1.5 27 27" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m15.902 11.974c0 1.331-1.079 2.41-2.41 2.41s-2.41-1.079-2.41-2.41 1.079-2.41 2.41-2.41 2.41 1.079 2.41 2.41z"></path><path d="m13.491 17.494c-.201.005-.438.008-.676.008-2.811 0-5.522-.425-8.073-1.214l.193.051c-1.351-.436-2.522-1.079-3.541-1.903l.021.016c-.789-.571-1.32-1.455-1.41-2.467l-.001-.013c0-1.594 1.747-3.154 4.681-4.172 2.512-.827 5.403-1.304 8.405-1.304.139 0 .278.001.417.003h-.021c.116-.002.252-.003.389-.003 2.965 0 5.82.469 8.496 1.337l-.195-.055c1.305.424 2.438 1.036 3.433 1.814l-.024-.018c.775.546 1.298 1.404 1.386 2.387l.001.013c0 1.656-1.954 3.332-5.103 4.374-2.363.729-5.08 1.149-7.895 1.149-.17 0-.339-.002-.508-.005h.025zm0-9.84c-.106-.002-.232-.002-.358-.002-2.881 0-5.656.452-8.259 1.289l.191-.053c-2.698.941-3.908 2.228-3.908 3.087 0 .893 1.301 2.3 4.153 3.274 2.249.697 4.834 1.099 7.513 1.099.235 0 .469-.003.702-.009l-.034.001c.146.003.318.005.49.005 2.684 0 5.274-.4 7.715-1.143l-.187.049c2.96-.984 4.32-2.391 4.32-3.28-.102-.638-.462-1.176-.966-1.515l-.008-.005c-.866-.674-1.876-1.217-2.97-1.574l-.07-.02c-2.368-.766-5.093-1.208-7.92-1.208-.142 0-.283.001-.424.003h.021z"></path><path d="m8.023 23.986c-.016 0-.035.001-.053.001-.453 0-.878-.119-1.245-.327l.013.007c-1.378-.8-1.858-3.092-1.28-6.141.697-3.128 1.827-5.894 3.344-8.4l-.069.124c1.499-2.655 3.31-4.926 5.425-6.872l.02-.018c.923-.844 2.003-1.537 3.187-2.028l.073-.027c.407-.196.885-.31 1.39-.31.501 0 .976.113 1.4.314l-.02-.008c1.435.826 1.911 3.36 1.238 6.606-.72 2.967-1.818 5.58-3.262 7.959l.07-.123c-1.452 2.63-3.209 4.882-5.266 6.819l-.014.013c-.958.877-2.083 1.59-3.321 2.082l-.074.026c-.46.181-.992.292-1.549.305h-.006zm1.205-14.447.499.288c-1.381 2.28-2.465 4.926-3.106 7.74l-.034.18c-.533 2.809-.019 4.498.72 4.926.191.102.417.161.657.161.02 0 .041 0 .061-.001h-.003c.955 0 2.458-.605 4.196-2.122 1.976-1.867 3.654-4.023 4.972-6.404l.068-.135c1.318-2.156 2.371-4.653 3.025-7.307l.038-.182c.629-3.058.086-4.93-.686-5.378-.238-.094-.514-.148-.802-.148-.364 0-.708.087-1.012.24l.013-.006c-1.118.465-2.078 1.086-2.907 1.846l.007-.006c-2.041 1.881-3.772 4.057-5.136 6.468l-.069.132z"></path><path d="m18.96 24c-1.306 0-2.96-.787-4.69-2.276-2.175-1.983-4.017-4.282-5.464-6.834l-.072-.137c-1.43-2.349-2.551-5.075-3.215-7.975l-.036-.185c-.162-.709-.255-1.522-.255-2.357 0-.527.037-1.044.108-1.551l-.007.058c.085-.998.608-1.858 1.372-2.399l.01-.007c1.43-.83 3.865.024 6.342 2.228 2.022 1.914 3.748 4.113 5.118 6.54l.072.138c1.428 2.297 2.557 4.961 3.242 7.798l.038.186c.163.709.257 1.524.257 2.36 0 .577-.044 1.143-.13 1.696l.008-.062c-.103 1.022-.644 1.901-1.429 2.456l-.011.007c-.348.199-.764.316-1.207.316-.018 0-.036 0-.054-.001h.003zm-9.228-9.823c1.458 2.571 3.217 4.771 5.271 6.656l.02.018c2.166 1.863 3.884 2.266 4.628 1.834.773-.446 1.339-2.276.754-5.233-.702-2.89-1.787-5.434-3.219-7.741l.065.112c-1.379-2.456-3.027-4.562-4.948-6.384l-.012-.011c-2.334-2.074-4.225-2.54-4.998-2.094-.473.385-.784.952-.825 1.593v.007c-.055.39-.086.84-.086 1.298 0 .757.086 1.493.248 2.201l-.013-.066c.673 2.952 1.747 5.559 3.182 7.924l-.066-.117z"></path></g></svg>
  ),
  JavaScript: (
    <svg width="40" height="40" fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 2v28h28v-28zM17.238 23.837c0 2.725-1.6 3.969-3.931 3.969-2.106 0-3.325-1.087-3.95-2.406l2.144-1.294c0.413 0.731 0.788 1.35 1.694 1.35 0.862 0 1.412-0.338 1.412-1.656v-8.944h2.631zM23.462 27.806c-2.444 0-4.025-1.162-4.794-2.688l2.144-1.237c0.563 0.919 1.3 1.6 2.594 1.6 1.087 0 1.788-0.544 1.788-1.3 0-0.9-0.713-1.219-1.919-1.75l-0.656-0.281c-1.9-0.806-3.156-1.825-3.156-3.969 0-1.975 1.506-3.475 3.85-3.475 1.675 0 2.875 0.581 3.738 2.106l-2.050 1.313c-0.45-0.806-0.938-1.125-1.694-1.125-0.768 0-1.256 0.488-1.256 1.125 0 0.788 0.488 1.106 1.619 1.6l0.656 0.281c2.238 0.956 3.494 1.938 3.494 4.137 0 2.363-1.863 3.662-4.357 3.662z"></path> </g></svg>
  ),
  HTML5: (
    <svg width="40" height="40" fill="#000000" viewBox="-1.5 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m16.95 7.035.24-2.625h-13.261l.705 8.01h9.18l-.33 3.42-2.955.795-2.94-.795-.195-2.1h-2.625l.33 4.17 5.43 1.5h.06v-.015l5.385-1.485.75-8.16h-9.66l-.225-2.715zm-16.95-7.035h21.12l-1.92 21.57-8.67 2.43-8.61-2.43z"></path></g></svg>
  ),
  CSS3: (
    <svg width="40" height="40" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>css3</title> <path d="M24.235 6.519l-16.47-0.004 0.266 3.277 12.653 0.002-0.319 3.394h-8.298l0.3 3.215h7.725l-0.457 4.403-3.636 1.005-3.694-1.012-0.235-2.637h-3.262l0.362 4.817 6.829 2.128 6.714-1.912 1.521-16.675zM2.879 1.004h26.242l-2.387 26.946-10.763 3.045-10.703-3.047z"></path> </g></svg>
  ),
  Rust : (
    <svg width="40" height="40" fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Rust icon</title><path d="M23.687 11.709l-.995-.616a13.559 13.559 0 0 0-.028-.29l.855-.797a.344.344 0 0 0-.114-.571l-1.093-.409a8.392 8.392 0 0 0-.086-.282l.682-.947a.342.342 0 0 0-.223-.538l-1.152-.187a9.243 9.243 0 0 0-.139-.259l.484-1.063c.05-.108.039-.234-.027-.332s-.178-.156-.297-.152l-1.17.041a6.662 6.662 0 0 0-.185-.224l.269-1.139a.343.343 0 0 0-.412-.412l-1.139.269a13.847 13.847 0 0 0-.225-.185l.041-1.17a.34.34 0 0 0-.484-.324l-1.063.485c-.086-.047-.172-.094-.259-.139l-.188-1.153a.344.344 0 0 0-.538-.223l-.948.682a8.383 8.383 0 0 0-.282-.085L14.562.596a.344.344 0 0 0-.571-.114l-.797.856a9.18 9.18 0 0 0-.29-.028l-.616-.995a.342.342 0 0 0-.582 0l-.616.995c-.097.008-.194.018-.29.028l-.798-.856a.342.342 0 0 0-.571.114l-.409 1.093c-.095.027-.188.056-.282.085l-.947-.682a.344.344 0 0 0-.538.223l-.188 1.153a9.243 9.243 0 0 0-.259.139l-1.063-.485a.342.342 0 0 0-.484.324l.041 1.17c-.076.06-.151.122-.225.185l-1.139-.269a.343.343 0 0 0-.412.412l.268 1.139c-.062.074-.124.149-.184.224l-1.17-.041a.342.342 0 0 0-.324.484l.485 1.063a9.055 9.055 0 0 0-.139.259l-1.152.187a.344.344 0 0 0-.223.538l.682.947c-.03.094-.058.187-.086.282L.59 9.435a.344.344 0 0 0-.114.571l.855.797a9.18 9.18 0 0 0-.028.29l-.995.616a.34.34 0 0 0 0 .582l.995.616c.008.097.018.194.028.29l-.855.798a.342.342 0 0 0 .114.571l1.093.409c.027.095.056.189.086.282l-.682.947a.341.341 0 0 0 .224.538l1.152.187c.045.087.091.173.139.259l-.485 1.063a.342.342 0 0 0 .324.484l1.169-.041c.061.076.122.151.185.225l-.268 1.14a.342.342 0 0 0 .412.411l1.139-.268c.074.063.149.124.225.184l-.041 1.17a.34.34 0 0 0 .484.323l1.063-.484c.086.048.172.094.259.139l.188 1.152a.344.344 0 0 0 .538.224l.947-.682c.094.03.187.059.282.086l.409 1.093a.341.341 0 0 0 .571.114l.798-.855c.096.011.193.02.29.029l.616.995a.343.343 0 0 0 .582 0l.616-.995c.097-.009.194-.018.29-.029l.797.855a.344.344 0 0 0 .571-.114l.409-1.093c.095-.027.189-.056.282-.086l.947.682a.341.341 0 0 0 .538-.224l.188-1.152c.087-.045.173-.092.259-.139l1.063.484a.343.343 0 0 0 .484-.323l-.041-1.17c.076-.06.151-.121.224-.184l1.139.268a.343.343 0 0 0 .412-.411l-.268-1.14c.062-.074.124-.149.184-.225l1.17.041a.34.34 0 0 0 .324-.484l-.484-1.063c.047-.086.094-.172.139-.259l1.152-.187a.344.344 0 0 0 .223-.538l-.682-.947.086-.282 1.093-.409a.342.342 0 0 0 .114-.571l-.855-.798c.01-.096.02-.193.028-.29l.995-.616a.34.34 0 0 0 0-.582zm-6.659 8.253a.705.705 0 0 1 .295-1.379.705.705 0 1 1-.296 1.379zm-.338-2.286a.641.641 0 0 0-.762.494l-.353 1.648c-1.09.495-2.3.77-3.575.77a8.63 8.63 0 0 1-3.65-.804l-.353-1.648a.64.64 0 0 0-.762-.493l-1.455.312a8.615 8.615 0 0 1-.752-.887h7.08c.08 0 .134-.014.134-.087v-2.505c0-.073-.053-.087-.134-.087h-2.071v-1.588h2.24c.204 0 1.093.058 1.377 1.194.089.349.284 1.486.418 1.85.133.408.675 1.223 1.253 1.223h3.528a.74.74 0 0 0 .128-.013 8.68 8.68 0 0 1-.802.941l-1.489-.32zm-9.793 2.252a.705.705 0 1 1-.296-1.379.705.705 0 0 1 .296 1.379zM4.211 9.036a.705.705 0 1 1-1.288.572.705.705 0 0 1 1.288-.572zm-.825 1.957l1.516-.674a.642.642 0 0 0 .326-.848l-.312-.706h1.228v5.534H3.667a8.668 8.668 0 0 1-.28-3.307zm6.652-.537V8.825h2.924c.151 0 1.066.175 1.066.859 0 .568-.702.772-1.279.772h-2.711zm10.626 1.468c0 .216-.008.431-.024.643h-.889c-.089 0-.125.058-.125.146v.408c0 .961-.542 1.17-1.017 1.223-.452.051-.953-.189-1.015-.466-.267-1.5-.711-1.821-1.413-2.374.871-.553 1.777-1.369 1.777-2.461 0-1.179-.809-1.922-1.36-2.287-.773-.51-1.629-.612-1.86-.612H5.545a8.658 8.658 0 0 1 4.847-2.736l1.084 1.137a.64.64 0 0 0 .907.021l1.212-1.16a8.668 8.668 0 0 1 5.931 4.224l-.83 1.875a.644.644 0 0 0 .326.848l1.598.71c.028.284.042.57.042.861zm-9.187-9.482a.703.703 0 1 1 .972 1.019.705.705 0 0 1-.972-1.019zm8.237 6.628c.157-.356.573-.516.928-.358a.705.705 0 1 1-.929.359z"></path></g></svg>
  ),
  TypeScript: (
    <svg width="40" height="40" fill="#000000" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m 0.9999998,7.0000066 0,5.9999944 12.0000002,0 0,-12.00000195 -12.0000002,0 0,6.00000755 z m 7.359375,-0.2109464 0,0.5390661 -1.546875,0 0,4.9218757 -1.265625,0 0,-4.9218757 -1.5468751,0 0,-1.078119 4.3593751,0 0,0.5390529 z M 11.40625,6.3156206 c 0.192187,0.037467 0.407812,0.089067 0.482812,0.1171999 l 0.126563,0.0516 0,0.5859327 c 0,0.3234397 -0.0094,0.5859328 -0.01875,0.5859328 -0.0094,0 -0.107812,-0.0516 -0.220312,-0.1125332 -0.421875,-0.2390665 -1.096875,-0.328133 -1.509375,-0.2062532 -0.09844,0.028133 -0.24375,0.1171999 -0.31875,0.1921865 -0.1124998,0.1078666 -0.1359374,0.1734399 -0.1359374,0.3468797 0,0.1874932 0.023437,0.2390664 0.178125,0.384373 0.098437,0.093733 0.4640624,0.3093731 0.8203124,0.4875062 0.75,0.3703064 1.129687,0.6843726 1.303125,1.0734256 0.154687,0.3468794 0.159375,1.0781324 0.0094,1.4062524 -0.140625,0.309373 -0.45,0.623439 -0.754687,0.768759 -0.646875,0.30468 -1.7015627,0.332813 -2.5265627,0.06093 l -0.2953125,-0.0984 0,-1.303119 0.2343751,0.168747 c 0.3046604,0.220306 0.6984105,0.356253 1.1109105,0.384373 0.4124996,0.02813 0.7171876,-0.04693 0.9046876,-0.225 0.117188,-0.107866 0.140625,-0.168746 0.140625,-0.346879 0,-0.342187 -0.196875,-0.520307 -1.0031252,-0.9140529 C 9.2218738,9.371911 8.9968739,9.2125379 8.7859364,8.9031649 8.3171864,8.2234721 8.4578113,7.1828598 9.0859363,6.7094202 9.6203113,6.3016073 10.506249,6.1516074 11.406249,6.3156606 Z"></path></g></svg>
  ),
  NodeJS: (
    <svg width="40" height="40" fill="#000000" viewBox="-1.5 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m10.639 24c-.001 0-.002 0-.003 0-.339 0-.656-.091-.928-.251l.009.005-2.937-1.737c-.438-.246-.224-.332-.08-.383.506-.159.946-.365 1.352-.618l-.024.014c.028-.013.06-.02.094-.02.046 0 .089.014.125.038l-.001-.001 2.256 1.339c.039.021.086.034.136.034s.097-.013.138-.035l-.002.001 8.794-5.077c.081-.05.134-.138.134-.238 0-.001 0-.001 0-.002v-10.147c-.001-.101-.055-.19-.136-.239l-.001-.001-8.791-5.072c-.039-.022-.086-.035-.135-.035s-.096.013-.137.036l.001-.001-8.789 5.073c-.083.049-.138.138-.139.24v10.149c0 .101.055.188.137.234l.001.001 2.41 1.392c1.307.654 2.107-.116 2.107-.889v-10.022c0-.14.114-.254.254-.254h.003 1.115.001c.14 0 .254.113.254.254v10.022c0 1.745-.95 2.746-2.604 2.746-.02 0-.043.001-.066.001-.725 0-1.402-.205-1.976-.56l-2.29-1.318c-.556-.328-.922-.923-.922-1.605v-10.151c.001-.68.368-1.273.914-1.595l.009-.005 8.795-5.082c.267-.149.585-.236.924-.236s.658.088.934.241l-.01-.005 8.794 5.082c.555.327.921.92.923 1.6v10.15c-.001.681-.368 1.276-.915 1.6l-.009.005-8.792 5.078c-.264.155-.582.246-.922.246-.002 0-.005 0-.007 0z"></path><path d="m13.356 17.009c-3.848 0-4.655-1.766-4.655-3.249v-.001c0-.14.113-.253.253-.253h.002 1.137.001c.127 0 .232.093.252.214v.001c.171 1.158.683 1.742 3.01 1.742 1.853 0 2.64-.419 2.64-1.402 0-.567-.223-.987-3.102-1.269-2.406-.24-3.894-.77-3.894-2.695 0-1.774 1.496-2.833 4-2.833 2.818 0 4.212.978 4.388 3.076.001.007.001.015.001.022 0 .141-.114.254-.254.254h-1.133c-.12 0-.221-.085-.246-.198v-.002c-.274-1.218-.94-1.607-2.746-1.607-2.023 0-2.258.705-2.258 1.232 0 .64.278.826 3.009 1.187 2.702.358 3.986.863 3.986 2.762-.004 1.919-1.601 3.017-4.388 3.017z"></path></g></svg>
  ),
  ExpressJS: (
    <svg width="40" height="40" viewBox="-2.5 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="M-3 0h32v32H-3z"></path> <path fill="#353535" d="M1.192 16.267c.04 2.065.288 3.982.745 5.75.456 1.767 1.16 3.307 2.115 4.618.953 1.31 2.185 2.343 3.694 3.098 1.51.755 3.357 1.132 5.54 1.132 3.22 0 5.89-.844 8.016-2.532 2.125-1.69 3.446-4.22 3.962-7.597h1.192c-.437 3.575-1.847 6.345-4.23 8.312-2.384 1.966-5.324 2.95-8.82 2.95-2.383.04-4.42-.338-6.107-1.133-1.69-.794-3.07-1.917-4.142-3.367-1.073-1.45-1.867-3.158-2.383-5.124C.258 20.408 0 18.294 0 16.028c0-2.542.377-4.806 1.132-6.792C1.887 7.25 2.88 5.57 4.112 4.2 5.34 2.83 6.77 1.79 8.4 1.074 10.03.358 11.698 0 13.406 0c2.383 0 4.44.457 6.167 1.37 1.728.914 3.138 2.126 4.23 3.635 1.093 1.51 1.887 3.238 2.384 5.184.496 1.945.705 3.97.625 6.077H1.193zm24.43-1.192c0-1.867-.26-3.645-.775-5.333-.516-1.688-1.28-3.168-2.294-4.44-1.013-1.27-2.274-2.273-3.784-3.008-1.51-.735-3.258-1.102-5.244-1.102-1.67 0-3.228.317-4.678.953-1.45.636-2.72 1.56-3.813 2.77-1.092 1.212-1.976 2.672-2.652 4.38-.675 1.708-1.072 3.635-1.19 5.78h24.43z"></path> </g> </g></svg>
  ),
  SQL: (
    <svg width="40" height="40" fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16,14c6.3,0,13-1.93,13-5.5v-3C29,1.93,22.3,0,16,0S3,1.93,3,5.5v3C3,12.07,9.7,14,16,14ZM5,5.5C5,4.07,9.29,2,16,2S27,4.07,27,5.5v3C27,9.93,22.71,12,16,12S5,9.93,5,8.5Z"></path> <path d="M16,32c6.3,0,13-1.93,13-5.5v-3a1,1,0,0,0-2,0v3c0,1.43-4.29,3.5-11,3.5S5,27.93,5,26.5v-3a1,1,0,0,0-2,0v3C3,30.07,9.7,32,16,32Z"></path> <path d="M16,23c6.3,0,13-1.93,13-5.5v-3a1,1,0,0,0-2,0v3c0,1.43-4.29,3.5-11,3.5S5,18.93,5,17.5v-3a1,1,0,0,0-2,0v3C3,21.07,9.7,23,16,23Z"></path> </g></svg>
  ),
  MongoDB: (
    <svg width="40" height="40" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mongodb</title> <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path> </g></svg>
  ),
  Blockchain: (
    <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="48 8 16 24 16 40 48 56"></polyline><polyline points="16 8 48 24 48 40 16 56"></polyline><line x1="48" y1="24" x2="32" y2="32"></line><line x1="16" y1="24" x2="32" y2="32"></line><line x1="32" y1="48" x2="32" y2="32"></line></g></svg>
  ),
  Ethereum: (
    <svg width="40" height="40" fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Ethereum icon</title><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"></path></g></svg>
  ),
  Solana: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.08398 5.22265C7.17671 5.08355 7.33282 5 7.5 5H18.5C18.6844 5 18.8538 5.10149 18.9408 5.26407C19.0278 5.42665 19.0183 5.62392 18.916 5.77735L16.916 8.77735C16.8233 8.91645 16.6672 9 16.5 9H5.5C5.3156 9 5.14617 8.89851 5.05916 8.73593C4.97215 8.57335 4.98169 8.37608 5.08398 8.22265L7.08398 5.22265ZM7.76759 6L6.43426 8H16.2324L17.5657 6H7.76759Z" fill="#47495F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.08398 15.2226C7.17671 15.0836 7.33282 15 7.5 15H18.5C18.6844 15 18.8538 15.1015 18.9408 15.2641C19.0278 15.4267 19.0183 15.6239 18.916 15.7774L16.916 18.7774C16.8233 18.9164 16.6672 19 16.5 19H5.5C5.3156 19 5.14617 18.8985 5.05916 18.7359C4.97215 18.5734 4.98169 18.3761 5.08398 18.2226L7.08398 15.2226ZM7.76759 16L6.43426 18H16.2324L17.5657 16H7.76759Z" fill="#47495F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.08398 13.7774C7.17671 13.9164 7.33282 14 7.5 14H18.5C18.6844 14 18.8538 13.8985 18.9408 13.7359C19.0278 13.5733 19.0183 13.3761 18.916 13.2226L16.916 10.2226C16.8233 10.0836 16.6672 10 16.5 10H5.5C5.3156 10 5.14617 10.1015 5.05916 10.2641C4.97215 10.4267 4.98169 10.6239 5.08398 10.7774L7.08398 13.7774ZM7.76759 13L6.43426 11H16.2324L17.5657 13H7.76759Z" fill="#47495F"></path> </g></svg>
  ),
  Git: (
    <svg width="40" height="40" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>git</title> <path d="M30.428 14.663l-13.095-13.094c-0.35-0.349-0.833-0.565-1.367-0.565s-1.017 0.216-1.367 0.565l0-0-2.713 2.718 3.449 3.449c0.22-0.077 0.473-0.121 0.737-0.121 1.269 0 2.297 1.028 2.297 2.297 0 0.269-0.046 0.526-0.131 0.766l0.005-0.016 3.322 3.324c0.222-0.079 0.479-0.125 0.746-0.125 1.268 0 2.296 1.028 2.296 2.296s-1.028 2.296-2.296 2.296c-1.268 0-2.296-1.028-2.296-2.296 0-0.313 0.063-0.611 0.176-0.883l-0.006 0.015-3.11-3.094v8.154c0.764 0.385 1.279 1.163 1.279 2.061 0 1.27-1.030 2.3-2.3 2.3s-2.3-1.030-2.3-2.3c0-0.634 0.256-1.207 0.671-1.623l-0 0c0.211-0.211 0.462-0.382 0.741-0.502l0.015-0.006v-8.234c-0.842-0.354-1.422-1.173-1.422-2.126 0-0.32 0.065-0.624 0.183-0.901l-0.006 0.015-3.389-3.405-8.98 8.974c-0.348 0.351-0.562 0.834-0.562 1.368s0.215 1.017 0.563 1.368l13.096 13.092c0.349 0.35 0.832 0.566 1.366 0.566s1.016-0.216 1.366-0.566l13.034-13.034c0.35-0.349 0.567-0.833 0.567-1.366s-0.217-1.017-0.567-1.366l-0-0z"></path> </g></svg>
  ),
  NPM: (
    <svg width="40" height="40" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="npm"> <rect width="24" height="24" opacity="0"></rect> <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h7V11h4v10h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></path> </g> </g> </g></svg>
  ),
  Webpack: (
    <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>webpack</title> <rect width="24" height="24" fill="none"></rect> <path d="M21,16.5a1,1,0,0,1-.53.88l-7.9,4.44a1,1,0,0,1-1.14,0l-7.9-4.44A1,1,0,0,1,3,16.5v-9a1,1,0,0,1,.53-.88l7.9-4.44a1,1,0,0,1,1.14,0l7.9,4.44A1,1,0,0,1,21,7.5v9M12,4.15,5,8.09v7.82l7,3.94,7-3.94V8.09L12,4.15m0,2.08,4.9,2.83L12,11.89,7.1,9.06,12,6.23m5,8.66L13,17.2V13.62l4-2.31v3.58M11,17.2,7,14.89V11.31l4,2.31Z"></path> </g></svg>
  ),
  IPFS: (
    <svg width="40" height="40" fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 0 1.608 6v12L12 24l10.392-6V6zm-1.073 1.445h.001a1.8 1.8 0 0 0 2.138 0l7.534 4.35a1.794 1.794 0 0 0 0 .403l-7.535 4.35a1.8 1.8 0 0 0-2.137 0l-7.536-4.35a1.795 1.795 0 0 0 0-.402zM21.324 7.4c.109.08.226.147.349.201v8.7a1.8 1.8 0 0 0-1.069 1.852l-7.535 4.35a1.8 1.8 0 0 0-.349-.2l-.009-8.653a1.8 1.8 0 0 0 1.07-1.851zm-18.648.048 7.535 4.35a1.8 1.8 0 0 0 1.069 1.852v8.7c-.124.054-.24.122-.349.202l-7.535-4.35a1.8 1.8 0 0 0-1.069-1.852v-8.7a1.85 1.85 0 0 0 .35-.202z"></path></g></svg>
  ),
  Flutter: (
    <svg width="40" height="40" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>flutter</title> <path d="M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z"></path> </g></svg>
  ), 
  Docker: (
    <svg width="40" height="40" fill="#000000" viewBox="0 -5 34 34" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m15.21 10.923v-3.159h3.533v3.159zm3.533-10.923v3.267h-3.533v-3.267zm4.177 7.77v3.159h-3.533v-3.159zm-8.353-3.855v3.213h-3.533v-3.213zm4.177 0v3.213h-3.534v-3.213zm14.834 5.348.696.482-.482.914c-.504.998-1.377 1.749-2.434 2.081l-.029.008c-.662.205-1.423.324-2.211.324-.07 0-.139-.001-.208-.003h.01c-1.36 3.409-3.692 6.19-6.652 8.072l-.068.041c-2.937 1.771-6.484 2.819-10.276 2.819-.2 0-.398-.003-.597-.009l.029.001q-5.89 0-8.889-3.534c-.957-1.185-1.68-2.603-2.072-4.152l-.016-.076c-.239-.864-.377-1.857-.377-2.881 0-.551.04-1.094.117-1.624l-.007.06h23.294c.044.001.096.002.148.002.885 0 1.719-.219 2.451-.605l-.029.014c-.416-.669-.663-1.481-.663-2.35 0-.153.008-.304.023-.453l-.002.019c.049-1.036.361-1.991.871-2.809l-.014.025.536-.75.75.536c1.139.766 1.944 1.956 2.189 3.339l.005.031c.39-.062.841-.097 1.299-.097.307 0 .61.016.909.047l-.037-.003c.647.024 1.245.22 1.753.542l-.014-.009zm-27.363-1.499v3.159h-3.534v-3.159zm4.177 0v3.159h-3.532v-3.159zm4.177 0v3.159h-3.535v-3.159zm-4.178-3.855v3.213h-3.531v-3.213z"></path></g></svg>
  )
  // Add more icons for other languages/frameworks
};