import React, { useEffect, createElement } from 'react';
export function WorkShowcase() {
  const videoProjects = [{
    id: 2,
    vimeoId: '1108700803',
    title: 'UL x BR REEL',
    aspectRatio: '177.78%' // 9:16 ratio (vertical)
  }, {
    id: 3,
    vimeoId: '1108700730',
    title: 'She Wolf Milwaukee Camp',
    aspectRatio: '177.78%' // 9:16 ratio
  }, {
    id: 5,
    vimeoId: '1108700595',
    title: 'Jon - MKE UL',
    aspectRatio: '177.78%' // 9:16 ratio
  }, {
    id: 6,
    vimeoId: '1108700586',
    title: 'Ike - MKE Campaign',
    aspectRatio: '177.78%' // 9:16 ratio
  }, {
    id: 7,
    vimeoId: '1108700494',
    title: 'August Talking Head',
    aspectRatio: '177.78%' // 9:16 ratio
  }, {
    id: 1,
    vimeoId: '1108700816',
    title: 'UL x Brewers',
    aspectRatio: '75%' // 4:3 ratio
  }, {
    id: 4,
    vimeoId: '1108700681',
    title: 'Screen Print',
    aspectRatio: '75%' // 4:3 ratio
  }];
  useEffect(() => {
    // Load Vimeo player script once
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);
  return <section id="work" className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoProjects.map(project => <div key={project.id} className="rounded-lg overflow-hidden">
              <div className="relative" style={{
            padding: `${project.aspectRatio} 0 0 0`
          }}>
                <iframe src={`https://player.vimeo.com/video/${project.vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }} title={project.title} className="rounded-lg"></iframe>
              </div>
              <h3 className="mt-2 text-xl md:text-2xl font-medium">{project.title}</h3>
            </div>)}
        </div>
      </div>
    </section>;
}