import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <nav className="breadcrumb py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700">About Us</span>
      </nav>

      <div className="bg-white shadow-sm rounded-lg border border-gray-100 mb-8">
        <div className="p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            About Us
          </h1>

          <div className="border-t border-gray-200 pt-6 mt-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Welcome to the Company
            </h2>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-2/3">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                  mauris vitae erat consequat auctor eu in elit. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                  felis dapibus condimentum sit amet a augue. Sed non neque
                  elit.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur.
                </p>
              </div>
              <div className="lg:w-1/3">
                <img
                  src="/assets/images/product-5-7_PERSON_SPA.png"
                  alt="About our company"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            </p>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6">
            <h2 className="text-lg font-bold text-gray-800 mb-6">
              Our Company Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["member1", "member2", "member3", "member4"].map(
                (member, index) => (
                  <div key={member} className="text-center animate-on-scroll">
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={
                          index === 0
                            ? "/assets/images/product-TV_THEATER_SPA.png"
                            : index === 1
                              ? "/assets/images/product-Barrier_Reef_158_Jet_TV-_Stereo_-_Home_Theater_Supter_Spa.png"
                              : index === 2
                                ? "/assets/images/product-Extra_Large_and_Deep__8_Person_158_Jet_Supper_Spa,_TV-Home_Thea.png"
                                : "/assets/images/product-5-7_PERSON_SPA.png"
                        }
                        alt="Jennifer Lawrence"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      Jennifer Lawrence
                    </h4>
                    <p className="text-gray-500 text-xs mb-3">
                      Business Consultant
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet.
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
