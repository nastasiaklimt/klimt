export function ProjectShowcase() {
    const projects = [
      {
        id: 1,
        title: "Maraya Cosmetics",
        description: "A reimagined visual identity for a leading beauty brand.",
        image: "/images/maraya-thumbnail.jpg",
      },
      {
        id: 2,
        title: "Urban Retreat",
        description: "A design concept blending architecture with art.",
        image: "/images/urban-thumbnail.jpg",
      },
      // Add more projects here
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="relative group overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                  <button
                    className="mt-4 px-4 py-2 bg-white text-black rounded-lg"
                    onClick={() => alert(`Viewing ${project.title}`)}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }