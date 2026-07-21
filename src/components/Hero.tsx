export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14 lg:py-20">
        <div className="w-full">
          {/* Center */}
          <div className="w-full max-w-6xl">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-orange-700 font-semibold">
              Trusted Electronic Security Solutions
            </span>

            <h1 className="mt-6 max-w-6xl text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-gray-900">
              Trusted Security for Industries

              <span className="block text-[#D97706]">
                Corefix Technologies
              </span>
            </h1>

            <p className="mt-8 max-w-5xl text-base sm:text-lg lg:text-xl leading-9 text-gray-600">
              Specializing in integrated CCTV surveillance, vehicle security,
              intelligent monitoring, industrial networking, automation,
              renewable energy, and perimeter protection solutions for
              commercial, industrial, institutional, and government projects.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-xl bg-[#F59E0B] px-3 sm:px-5 lg:px-8 py-2 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold text-white hover:bg-[#D97706] transition">
                Explore Products
              </button>

              <button className="rounded-xl border-2 border-[#F59E0B] px-8 py-4 font-semibold text-[#D97706] hover:bg-orange-50">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}