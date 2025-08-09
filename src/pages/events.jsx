export default function EventsPage() {
  return (
    <main className="h-[87vh] bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-sm p-4 w-full max-w-6xl h-full flex flex-col justify-between overflow-hidden">

          {/* Header */}
          <div className="text-center">
            <h1 className="text-[5vh] font-light text-[#DAA520] mb-2">Events</h1>
            <p className="text-[1.8vh] italic text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We believe great events bring people closer, whether it's a fun hangout with friends,
              a special moment with family, or a creative team activity at work.
            </p>
          </div>

          {/* Event Sections */}
          <div className="flex flex-col gap-4 overflow-hidden flex-grow justify-center px-10">

            {/* Hosting */}
            <div className="flex items-center gap-4">
              <img
                src="/event-planning.png"
                alt="Planning"
                className="w-[6vh] h-[6vh] object-contain"
              />
              <div>
                <h2 className="text-[2.2vh] font-semibold text-gray-900">Want to host your own event?</h2>
                <p className="text-[1.8vh] text-gray-700">
                  From ideas to execution, we'll help you plan and run it smoothly.
                </p>
              </div>
            </div>

            {/* Corporate */}
            <div className="flex items-center gap-4">
              <img
                src="/office-team.png"
                alt="Team"
                className="w-[6vh] h-[6vh] object-contain"
              />
              <div>
                <h2 className="text-[2.2vh] font-semibold text-gray-900">For offices and teams</h2>
                <p className="text-[1.8vh] text-gray-700">
                  We also organize corporate events that are fun and great for bonding.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-300 pt-2 text-center">
            <h3 className="text-[1.8vh] font-medium text-gray-900">Want to collaborate?</h3>
            <p className="text-[1.6vh] text-gray-700">
              Email us: <a href="mailto:email@cocirql.com" className="text-blue-600 hover:underline">email@cocirql.com</a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
