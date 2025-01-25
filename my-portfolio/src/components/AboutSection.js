export function AboutSection() {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <img
            src="/images/designer-portrait.jpg"
            alt="Designer Portrait"
            className="rounded-full w-48 h-48 object-cover mb-6 md:mb-0 md:mr-12"
          />
          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-600">
              Hi, I’m a passionate graphic designer with a knack for creating visually
              stunning and effective designs. Over the years, I’ve worked with a
              variety of clients to bring their ideas to life through thoughtful and
              compelling design solutions.
            </p>
          </div>
        </div>
      </section>
    );
  }