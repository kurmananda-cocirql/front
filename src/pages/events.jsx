
export default function EventsPage() {
  return (
    <main className="h-[87vh] bg-gray-100">

      <div className="container mx-auto px-8 py-2 h-[80vh]">
        <div className="bg-white rounded-lg shadow-sm p-[2vh] px-[6vh] max-w-6xl mx-auto h-[80vh]">
          {/* Coming Soon Header */}
          <div className="text-center mb-8">
            <h1 className="text-[8vh] font-light text-[#DAA520] mb-6">Events</h1>
            <p className="text-[2vh] italic text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We believe great events bring people closer, whether it's a fun hangout with friends, a special moment
              with family, or a creative team activity at work.
            </p>
          </div>

          {/* Event Hosting Section */}
          <div className="flex items-start gap-8 mb-2 mt-16">
            <div className="flex-shrink-0">
              <img
                src="/event-planning.png"
                alt="People planning an event with decorations and celebration"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-[3vh] font-semibold text-gray-900 mb-4">Want to host your own event?</h2>
              <p className="text-gray-700 text-[2vh] leading-relaxed">
                From ideas to execution, we'll help you plan and run it smoothly, whether it's personal or professional.
              </p>
            </div>
          </div>

          {/* Corporate Events Section */}
          <div className="flex items-start gap-8 mb-6">
            <div className="flex-shrink-0">
              <img
                src="/office-team.png"
                alt="Office team collaborating around a presentation board"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-[3vh] font-semibold text-gray-900 mb-4">For offices and teams</h2>
              <p className="text-gray-700 text-[2vh] leading-relaxed">
                We also organize corporate events that are fun, fresh, and perfect for team bonding.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-gray-200 pt-2">
            <h3 className="text-[2vh] font-medium text-gray-900 mb-2">Have an idea or want to work with us?</h3>
            <p className="text-gray-700">
              Email us at :{" "}
              <a href="mailto:email@cocirql.com" className="text-blue-600 hover:underline">
                email@cocirql.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
