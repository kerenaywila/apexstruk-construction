export default function ContactView() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded p-6 md:p-8 shadow-sm space-y-8">
            <div className="space-y-2">
              <h3 className="font-display font-bold text-[#0b1f3a] text-lg">
                Contact Information
              </h3>
              <p className="text-[11px] text-gray-500">
                Reach out to our engineering team directly through any of the
                channels below.
              </p>
            </div>

            <div className="border border-slate-100 rounded p-4 bg-slate-50">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                Email
              </p>
              <p className="text-sm font-medium text-[#0b1f3a] mt-1">
                apexstruk@gmail.com
              </p>
            </div>

            <div className="border border-slate-100 rounded p-4 bg-slate-50">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                Contact Number
              </p>
              <p className="text-sm font-medium text-[#0b1f3a] mt-1">
                +234 (81) 460-9380, +234 (90) 366-5464
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-gray-500">
                Typical response time: within 24 working hours
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-slate-900 text-white rounded border border-slate-800 p-6 space-y-4">
              <span className="text-[#FF0000] font-display text-[10px] font-bold uppercase tracking-widest block">
                HEAD OFFICE LOCATION
              </span>

              <h3 className="font-display font-semibold text-white text-base">
                Ikoyi, Lagos Office
              </h3>

              <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <p>15 Alfred Rewane Road, Ikoyi</p>
                <p>Lagos State, Nigeria</p>
                <p>Accessible from Victoria Island & Lekki axis</p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400">
                Business Hours: Mon – Fri (8:00 AM – 5:00 PM)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
