const AboutPage: React.FC = () => {
    const textLines = [
      "Hi \u0021 My name is Oindrila Banerjee and I am Software Developer passionate about my craft·",
      "I love solving complex problems and learning cutting-edge technologies",
      "Outside work̦ I enjoy reading̦ painting̦ drinking coffee̦ and aim to make an impact through technology·",
      "Scroll down to explore my work and get in touch for collaborations!",
    ];
  
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="relative w-11/12 md:w-3/4 lg:w-2/3 px-8 py-12  rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Who I am
          </h2>
          <div className="space-y-4 text-center">
            {textLines.map((line, index) => (
              <p key={index} className="text-lg/10 md:text-xl/20 text-white tracking-widest">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutPage;
  