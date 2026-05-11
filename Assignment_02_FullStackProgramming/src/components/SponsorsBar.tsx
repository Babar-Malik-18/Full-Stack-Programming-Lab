export default function SponsorsBar() {
  return (
    <section className="sponsors-bar bg-white py-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <img
          src="/assets/images/sponsor-save4.png"
          alt="Save4 Sponsor"
          className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition"
        />
        <img
          src="/assets/images/sponsor-caldera.png"
          alt="Caldera Spas"
          className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition"
        />
      </div>
    </section>
  );
}
