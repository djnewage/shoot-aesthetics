import React from 'react';
export function WorkShowcase() {
  const projects = [{
    id: 1,
    image: "/c8524f79-02a2-4855-945d-7477a48b4be4.jpg",
    title: 'Cinematic Production'
  }, {
    id: 2,
    image: "/download.jpg",
    title: 'Studio Setup'
  }, {
    id: 3,
    image: "/c8524f79-02a2-4855-945d-7477a48b4be4.jpg",
    title: 'Creative Direction'
  }];
  return <section id="work" className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(project => <div key={project.id} className="rounded-lg overflow-hidden">
              <div className="aspect-video relative group cursor-pointer">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">
                    {project.title}
                  </span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}