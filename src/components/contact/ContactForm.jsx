
const ContactForm = () => {
  return (
    <form className="space-y-5 rounded-3xl bg-white p-8 shadow-lg">

      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />

      <input
        type="text"
        placeholder="Company Name"
        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />

      <input
        type="url"
        placeholder="Website"
        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />

      <input
        type="text"
        placeholder="Service Needed"
        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />

      <textarea
        rows="5"
        placeholder="Tell us about your project..."
        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />

      <button type="submit" className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 shadow-lg shadow-blue-600/25">
        Send Inquiry
      </button>

    </form>
  );
};

export default ContactForm;