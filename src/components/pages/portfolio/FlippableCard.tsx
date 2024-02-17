import styled from "styled-components";
import { ReactElement, useState } from "react";

function isFirefox(): boolean {
  return /Gecko\//.test(navigator.userAgent);
}

const getColorCardRandom = () => [
  { r: 0, g: 102, b: 136, mainColor: "#064", neonFilterColor: "#4ef9ed", neon: "neonGreen" }, // Green
  { r: 236, g: 39, b: 125, mainColor: "#e27", neonFilterColor: "#f94ea9", neon: "neonPink" }, // Red
  { r: 249, g: 246, b: 149, mainColor: "#ff9", neonFilterColor: "#f9f695", neon: "neonYellow" }, // Yellow
  { r: 179, g: 149, b: 249, mainColor: "#b9f", neonFilterColor: "#b395f9", neon: "neonPurple" }, // Purple
][Math.floor(Math.random() * 4)];

const InvisibleClickArea = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90vmin;
  width: 90vmin;
  margin: auto;
  border-radius: 30px;
  z-index: 60;
  cursor: pointer;
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 38vmin;
  width: 47vmin;
  margin: auto;
  perspective: 200vmin;
  transition: transform 1000ms, z-index 1000ms;
  will-change: transform, z-index;
  cursor: pointer;
`;

const Face = styled.div`
  height: 100%;
  width: 100%;
  border : none;
  border-radius: 1%;
  transition: transform 1000ms;
  will-change: transform;
  backface-visibility: hidden;
`;

const Front = styled(Face)`
  background-color: #012; 
  height: 205%;
  width: 205%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -50%;
  left: -51%;
  border: 10px solid black;
 
  @media (max-width: 768px) {
    height: 400%;
    top: -130%;
  }
`;

const Back = styled(Face)`
  display: flex;
  flex-direction: column; 
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Logo = styled.div`
  width: 15vmin; /* Adjust the size as needed */
  height: 15vmin; /* Adjust the size as needed */
  margin-bottom: 10px; /* Adjust the spacing between logo and title */
`;

const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const Title = styled.h5`
  font-size: 3vmin;
  font-weight: 500;
  color: #aaa;
  margin-top: 5%;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: white;
  z-index: 50;
`;

const ReturnIcon = styled.div`
  position: absolute;
  top: 0; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  font-size: 50px; /* Adjust the icon size */
  color: #222; /* Adjust the color */
  cursor: grab;
`;

export default function FlippableCard({ children, xOffset, yOffset, category, cardNo }: 
    { children: ReactElement, xOffset: number, yOffset: number, category: any, cardNo: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inTransition, setInTransition] = useState(false);
  const color = getColorCardRandom();

  const flip = () => {
    setInTransition(true);
    setIsOpen(!isOpen);
  };

  const returnToFront = () => {
    setIsOpen(false);
  };

  const title = category.projects[cardNo]?.title;
  const isComponent = category.projects[cardNo]?.component;

  return (
    <>
      {!isOpen && isFirefox() &&
        <InvisibleClickArea onClick={flip} style={{
          transform: `translateX(${xOffset*20}vmin) translateY(${yOffset*20}vmin) scale(.285)`
        }} />}
      <Card onClick={isOpen && isComponent ? undefined : flip} onTransitionEnd={() => setInTransition(false)} style={{
        transform: isOpen
          ? 'translateX(0) translateY(0) translateZ(0)'
          : `translateX(${xOffset*70}vmin) translateY(${yOffset*70}vmin) translateZ(-500vmin)`,
        zIndex: isOpen ? 100 : 1,
      }}>
        <Front style={{
          transform: isOpen
            ? 'rotateY(0deg)'
            : 'rotateY(180deg)',
            backgroundColor: isComponent ? '#eee' : '',
        }}>
          {(isOpen || inTransition) && 
            <div>
              {isComponent && 
                <ReturnIcon className="ion-ios-navigate" onClick={returnToFront} />
              }
              {children}
              
            </div>
           }
        </Front>
        <Back className="card-body" style={{
          transform: isOpen
            ? 'rotateY(-180deg)'
            : 'rotateY(0deg)',
            background: `linear-gradient(
              to bottom,
              rgba(${color.r}, ${color.g}, ${color.b}, 0.4) 0%,
              rgba(${color.r}, ${color.g}, ${color.b}, 0.5) 20%,
              rgba(${color.r}, ${color.g}, ${color.b}, 0.6) 40%,
              rgba(${color.r}, ${color.g}, ${color.b}, 0.5) 60%,
              rgba(${color.r}, ${color.g}, ${color.b}, 0.4) 80%,
              rgba(${color.r}, ${color.g}, ${color.b}, 0.6) 100%
            )`,
            borderColor: color.mainColor,
        }}>
          <CardContainer>
            <Logo style={{filter: `brightness(1.2) drop-shadow(0 0 10px ${color.neonFilterColor})`}}> 
              <div className={title ? `${color.neon} mdb-4`: "mdb-4"} 
                   dangerouslySetInnerHTML={{__html: category[`svg${category.id}`]}}
              />
            </Logo>
            <TitleTextContainer style={{filter: `brightness(1.3) drop-shadow(0 0 10px ${color.neonFilterColor})`}}>
              <Title className={title ? `${color.neon} mb-2` : "mb-2"}> {title} </Title>
            </TitleTextContainer>
            
          </CardContainer>
        </Back>
      </Card>
      {isOpen && <Background role="button" onClick={flip} />}
    </>
  );
}
