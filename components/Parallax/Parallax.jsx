
import styled, {css} from "styled-components";
import Placeholder from "../../src/assets/react.svg";
import "./Parallax.scss";

const Parallax = (
  {
    mode = "vertical",
    images= [{
      src : Placeholder,
      zIndex : 1,
      placement: 1// 0: Delante, 1: Base, 2: Atrás, 3: Mas atrás
    }],
    ...props
  }
) => {

  const ParallaxDiv = styled.div`
    height: 100vh;
    overflow-x: ${mode === "vertical" ? "hidden" : "auto"};
    overflow-y: ${mode === "vertical" ? "auto" : "hidden"};
    -webkit-perspective: 300px;
    perspective: 300px;
    transform-style: preserve-3d;
    transition: transform 0.3s;
  `;

  const ParallaxGroup = styled.div`
    position: relative;
    height: 100vh;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
  `;

  const ParallaxImg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    ${props => props.$src && css`
      background-image: url(${props.$src});
      background-size: cover;
    `}
    ${props => props.$zIndex && css`
      z-index: ${props.$zIndex};
    `}
    ${props => props.$placement && css`
      transform: ${(() => {
        switch (props.$placement) {
          case 0:
            return "translateZ(90px) scale(.7)";
          case 1:
            return "translateZ(0)";
          case 2:
            return "translateZ(-300px) scale(2)";
          case 3:
            return "translateZ(-600px) scale(3)";
          default:
            return "translateZ(0)";
        }
      })()}
    `}
  `;

  return (
    <div
      style={{width: "100vw", height: "100vh", overflow: "hidden"}}
    >
      <ParallaxDiv>
        <ParallaxGroup>
          <div>
            {props.children}
          </div>
            {images?.map((img) => {
              return (
                <ParallaxImg
                  $src={img.src}
                  $zIndex={img.zIndex}
                  $placement={2}
                />
              )
            })}
        </ParallaxGroup>

      </ParallaxDiv>
    </div>

  )
}

export default Parallax;
