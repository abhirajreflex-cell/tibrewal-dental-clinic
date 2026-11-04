// lib/clinic.js
// Naye clinic ke liye SIRF ye file aur public/images badlo.

 export const clinic = {
  // ---------- Basic ----------
  name: "Tibrewal Dental Clinic",
  tagline: "Sitamarhi's Modern Dental Studio",
  heroTitle: "Your Smile, Our Responsibility",
  
heroHighlight: "Tibrewal Dental",   // ye word colored dikhega
  heroSubtitle:
    "Painless treatment, experienced doctors and easy online booking. For kids to seniors.",
  city: "Sitamarhi",
  address: "Tibrewal Dental Clinic, Main Road, near Joharimal High School, Bairgania, Bihar 843313",

  // ---------- About ----------
  about: {
    title: "A Clinic Where You Smile Without Fear",
    text: "Smile Studio is a modern dental clinic in Sitamarhi. We combine latest technology with a gentle approach so every patient, from kids to seniors, feels comfortable.",
    image: "/images/clinic-1.jpg",
    stats: [
      { value: "5000+", label: "Happy Patients" },
      { value: "10+", label: "Years Experience" },
      { value: "4.8", label: "Google Rating" },
    ],
  },

  // ---------- Contact ----------
  phone: "+919939496421",          // call button ke liye
    
  whatsapp: "919939496421",        // country code ke saath, + ke bina
  email: "info@tibrewal.com",
  website:
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL || // Netlify apne aap deta hai (site ka main link)
  "http://localhost:3000",
   // deploy ke baad badlenge
   ogImage: "/images/og.jpg",

  // ---------- Social ----------
  facebook: "null",
  instagram: "null",

  // ---------- Rating (sirf display) ----------
  rating: 4.8,
  reviewCount: 300,
  googleReviewsLink: "https://g.page/r/xxxx/review", // follow-up link

  // ---------- Images (public/images ke andar) ----------
  heroImage: "/images/hero.jpg",
  gallery: [
    { src: "/images/clinic-1.jpg", alt: "Clinic reception" },
    { src: "/images/clinic-2.jpg", alt: "Treatment room" },
    { src: "/images/clinic-3.jpg", alt: "Dental chair" },
  ],

  // ---------- Doctor ----------
  doctor: {
    name: "Dr. Ankit Kumar Tibrewal",
    degree: "BDS, MDS (dentist)",
    experience: "10+ Years",
    image: "/images/doctor.jpg",
    bio: "Dr. Ankit Kumar Tibrewal has treated 5000+ patients with a gentle, painless approach.",
    specialities: ["Braces", "Root Canal", "Implants"],
  },

  // ---------- Services ----------
  services: [
    { title: "Braces", desc: "Metal and ceramic braces for a perfect smile.", image: "/images/braces.jpg" },
    { title: "Root Canal", desc: "Painless single-sitting root canal.", image: "/images/root-canal.jpg" },
    { title: "Teeth Whitening", desc: "Safe and quick whitening.", image: "/images/whitening.jpg" },
    { title: "Dental Implants", desc: "Long lasting, natural looking implants.", image: "/images/implant.jpg" },
  ],

  // ---------- Why Us ----------
  whyUs: [
    { title: "Painless Treatment", desc: "Modern technique, minimum discomfort." },
    { title: "Experienced Doctors", desc: "10+ years of clinical experience." },
    { title: "Sterilized Equipment", desc: "Hygiene is our first priority." },
    { title: "Affordable Pricing", desc: "Quality care at fair prices." },
  ],

  // ---------- Reviews (slideshow ke liye) ----------
  reviews: [
        { name: "Sunita Devi", rating: 5, text: "My son was scared but the doctor made him comfortable." },
    { name: "Vikash Raj", rating: 5, text: "Affordable pricing and very hygienic clinic." },
    { name: "Neha Kumari", rating: 4, text: "Quick appointment and no long waiting time." },
    { name: "Amit Kumar", rating: 5, text: "Very friendly doctor, completely painless root canal." },
    { name: "Priya Singh", rating: 5, text: "Clean clinic and great staff. Highly recommended." },
    { name: "Rohit Jha", rating: 4, text: "Got my braces here, happy with the result." },
  ],

  // ---------- Google Map ----------
  // Google Maps -> Share -> Embed a map -> src="..." ke andar ka link
  mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d456067.63357138203!2d85.273304!3d26.743470199999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec950f51bb5471%3A0xa769544bfb15b4d6!2sTIBREWAL%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1793809120431!5m2!1sen!2sin",

  // ---------- Timings ----------
  timings: "Mon - Sat: 10:00 AM - 8:00 PM",

    // ---------- SEO / Local business ----------
  indexable: false,   // demo ke time false. Clinic accept kare aur asli domain lage to true
  state: "Bihar",
  postalCode: "843313",
  country: "IN",
  geo: { lat: 26.5944, lng: 85.4913 }, // Google Maps me clinic par right-click karke asli lat/lng copy karo
  priceRange: "₹₹",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "20:00" },
  ],
  keywords: [
    "dentist in Sitamarhi",
    "dental clinic Sitamarhi",
    "root canal Sitamarhi",
    "braces Sitamarhi",
    "dental implants Sitamarhi",
  ],

    // ---------- Footer links ----------
  privacyUrl: "/privacy-policy",
  disclaimerUrl: "/disclaimer",
};

  

  