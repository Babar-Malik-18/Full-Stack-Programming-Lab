export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
      <div className="text-center">
        <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          Contact Information
        </span>

        <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
          Let’s Connect
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Feel free to contact us for project discussion, academic queries, or
          collaboration.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-blue-300">
            Contact Details
          </h2>
          <p className="mb-3 text-gray-300">
            <span className="font-semibold text-white">Email:</span> 232048@students.au.edu.pk
          </p>
          <p className="mb-3 text-gray-300">
            <span className="font-semibold text-white">Phone:</span> 0304-1457002
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">Location:</span> Islamabad, Pakistan
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Office Hours
          </h2>
          <p className="mb-3 text-gray-300">Monday to Friday</p>
          <p className="mb-3 text-gray-300">9:00 AM to 5:00 PM</p>
          <p className="text-gray-300">Available for communication and support</p>
        </div>
      </div>
    </section>
  );
}