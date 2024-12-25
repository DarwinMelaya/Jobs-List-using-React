const Hero = ({
  title = "Become a React Dev",
  subtitle = "Find the React job that fits your skills set",
}) => {
  return (
    <>
      <style jsx>{`
        @keyframes typing {
          0% {
            width: 0;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: white;
          }
        }

        @keyframes glow {
          0% {
            text-shadow: 0 0 20px #fff, 0 0 30px #00ff00, 0 0 40px #00ff00,
              0 0 50px #00ff00, 0 0 60px #00ff00;
          }
          100% {
            text-shadow: 0 0 30px #fff, 0 0 40px #00ffff, 0 0 50px #00ffff,
              0 0 60px #00ffff, 0 0 70px #00ffff;
          }
        }
      `}</style>
      <section
        className="py-20 mb-4"
        style={{
          background:
            "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(112,189,255,1) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1
              className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl relative whitespace-nowrap overflow-hidden border-r-4 border-white inline-block pr-1"
              style={{
                animation:
                  "typing 6s steps(40, end) infinite, blink-caret .75s step-end infinite",
              }}
            >
              {title}
            </h1>
            <p className="my-4 text-xl text-white">{subtitle}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
