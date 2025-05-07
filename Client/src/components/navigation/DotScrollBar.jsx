import { useState, useEffect } from 'react';

const sections = ['home', 'about', 'projects', 'contact', 'footer'];

function DotScrollBar() {
  const [active, setActive] = useState('home');
  const [progressMap, setProgressMap] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const newProgressMap = {};

      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const sectionTop = el.offsetTop;
        const sectionHeight = el.offsetHeight;
        const scrollY = window.scrollY + window.innerHeight / 2;

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActive(id);
          const progress = Math.min(
            1,
            Math.max(0, (scrollY - sectionTop) / sectionHeight)
          );
          newProgressMap[id] = progress;
        } else {
          newProgressMap[id] = 0;
        }
      }

      setProgressMap(newProgressMap);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial run
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-1/2 right-0 lg:right-4 transform -translate-y-1/2 space-y-3 z-50">
      {sections.map((id) => {
        const isActive = id === active;
        const progress = progressMap[id] || 0;
        const height = isActive ? 10 + progress * 50 : 10;

        return (
          <div
            key={id}
            onClick={() => scrollTo(id)}
            className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full cursor-pointer lg:transition-all duration-1000 ${
              isActive
                ? 'bg-primary scale-110'
                : 'bg-gray-400'
            }`}
            style={{
              height: `${height}px`,
              transition: isActive ? 'none' : 'height 1s ease-in-out',
            }}
          />
        );
      })}
    </div>
  );
}

export default DotScrollBar;
