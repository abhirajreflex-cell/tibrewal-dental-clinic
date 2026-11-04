import { clinic } from "@/lib/clinic";
import SectionTitle from "./SectionTitle";


function PinIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export default function MapSection() {
  return (
    <section id="location" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
       <SectionTitle
  label={
    <span className="inline-flex items-center gap-2">
      <PinIcon /> Location
    </span>
  }
  title="Visit Us"
/>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-5 rounded-3xl bg-teal-50 p-6 lg:col-span-1">
            <div>
  <p className="flex items-center gap-2 font-bold text-slate-900">
    <PinIcon className="h-5 w-5 text-orange-500" /> Address
  </p>
  <p className="text-slate-600">{clinic.address}</p>
  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${clinic.name} ${clinic.address}`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 inline-block font-semibold text-teal-700 hover:underline"
  >
    Get Directions →
  </a>
</div>
            <div>
              <p className="font-bold text-slate-900">Timings</p>
              <p className="text-slate-600">{clinic.timings}</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">Phone</p>
              <a href={`tel:${clinic.phone}`} className="text-teal-700 hover:underline">
                {clinic.phone}
              </a>
            </div>
            <div>
              <p className="font-bold text-slate-900">Email</p>
              <a href={`mailto:${clinic.email}`} className="text-teal-700 hover:underline">
                {clinic.email}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-md lg:col-span-2">
            <iframe
              src={clinic.mapEmbedUrl}
              title={`${clinic.name} location on Google Maps`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-80 w-full border-0 sm:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}