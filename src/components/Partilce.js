import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'
import { useMemo } from 'react';

const Partilce = (props) => {

    const options = useMemo(() => {
        return {
            fpsLimit: 120,
            interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "repulse"
                  },
                  resize: true,
                },
                modes: {
                  repulse: {
                    distance: 80,
                    duration: 0.4,
                  }
                }
              },
              fulScreen: {
                enable: true,
                zIndex: 0,
              },
              particles: {
                zIndex: {
                    value: -4
                },
                color: {
                    value: '#000'
                },
                links: {
                  color: "#000",
                  enable: true,
                  distance: 80,
                  opacity: 1,
                  size: 7,
                },
                collisions: {
                  enable: true
                },
                move: {
                  enable: true,
                  outMode: {
                    default: "bounce"
                  },
                  speed: { min: 1, max: 2 },
                  straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 400,
                    },
                    value: 80,
                },
                opacity: {
                  value: 0.2,
                },
                size: {
                  value: { min: 1, max: 2 },
                }
              }
        }
    }, [])

    const partilceInit = async(main) => {
        console.log(main);
        await loadFull(main)
    }
    const particlesLoaded = (container) => {
        console.log(container);
    }

  return (
    <Particles 
    id={props.id}
    init={partilceInit}
    loaded={particlesLoaded}
    options={options}
    />
)
}

export default Partilce