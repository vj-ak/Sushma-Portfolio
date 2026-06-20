export const doctor = {

  // ── Personal ────────────────────────────────────────────────
  name: "Dr. Sushma S",
  shortName: "Dr. Sushma",
  title: "BAMS · Ayurveda Physician",
  tagline: "Holistic Ayurvedic care for lifestyle diseases, women's health & pain management",
  profilePhoto: "/images/profile.jpg",
  email: "drsushmas852@gmail.com",
  phone: "+91 75981 58582",
  location: "Madiwala, Bengaluru, Karnataka, India – 560068",
  consultationHours: "Mon – Sun, 9:30 AM – 8:00 PM (Weekly off: usually Wednesday, subject to change)",

  // ── About ───────────────────────────────────────────────────
  bio: [
    "I am a qualified Ayurvedic Physician (BAMS, 2024) with a strong foundation in classical Ayurvedic medicine and evidence-based clinical practice. I graduated from Sri Sairam Ayurveda Medical College & Research Center, Chennai — one of Tamil Nadu's leading Ayurvedic institutions — where I developed in-depth expertise across all major departments of Ayurvedic medicine.",
    "My clinical training spans multiple prestigious institutions, including Kottakkal Arya Vaidya Sala and Dhanwantralaya Ayurveda Specialty Hospital, providing hands-on exposure to over 300 OPD cases, advanced Panchakarma procedures, herbal pharmacology, and structured patient documentation. This breadth of experience has equipped me with both the technical proficiency and the patient-centred approach essential to quality Ayurvedic care.",
    "I currently practice at Vedakshethra Kerala Ayurvedic Treatment Centre, Madiwala, Bengaluru, delivering authentic Kerala-style Panchakarma and personalised treatment protocols for lifestyle diseases, women's health, and musculoskeletal conditions. I am committed to integrating the time-tested wisdom of Ayurveda with a compassionate, evidence-informed approach to holistic healing.",
  ],

  stats: [
    { value: "5.5+", label: "Years of Study" },
    { value: "300+", label: "OPD Cases" },
    { value: "8",    label: "Panchakarma Therapies" },
    { value: "2",    label: "Research Papers" },
  ],

  // ── Skills ──────────────────────────────────────────────────
  skills: [
    {
      icon: "GiHerbsBundle",
      title: "Panchakarma & Detox",
      items: ["Vamana", "Virechana", "Basti", "Nasya", "Shirodhara", "Leech therapy"],
    },
    {
      icon: "FaSeedling",
      title: "Women's Health",
      items: ["PCOD / PCOS management", "Hormonal imbalance", "Menstrual disorders", "Weight management therapy"],
    },
    {
      icon: "GiMeditation",
      title: "Neurological & Mental Health",
      items: ["Sinus & Migraine", "Stress & Anxiety", "Insomnia", "Hypertension management"],
    },
    {
      icon: "MdOutlineScience",
      title: "Lifestyle Diseases",
      items: ["Diabetes", "Hypertension", "Thyroid dysfunction", "Obesity & metabolic disorders"],
    },
    {
      icon: "FaLeaf",
      title: "Gastrointestinal Health",
      items: ["Acidity & GERD", "Irritable Bowel Syndrome (IBS)", "Constipation", "Digestive disorders"],
    },
    {
      icon: "FaBone",
      title: "Musculoskeletal & Pain",
      items: ["Cervical & shoulder pain", "Low back ache", "Sciatica", "Joint disorders & Arthritis"],
    },
  ],

  // ── Experience ──────────────────────────────────────────────
  experience: [
    {
      role: "Ayurveda Physician",
      institution: "Vedakshethra Kerala Ayurvedic Treatment Centre",
      location: "Madiwala, Bengaluru",
      period: "Apr 2026 – Present",
      highlights: [
        "Delivering authentic Kerala-style Ayurveda and Panchakarma treatments at the Madiwala branch",
        "Managing personalised treatment plans for pain, women's health, lifestyle diseases, skin & hair care",
        "Prescribing Arya Vaidya Pharmacy (Coimbatore) Ltd. medicines as an authorised centre",
      ],
    },
    {
      role: "Ayurveda Consultant",
      institution: "Traditional Siddha Ayurveda Clinic",
      location: "Hosur, Tamil Nadu",
      period: "Jan 2026 – Apr 2026",
      highlights: [
        "Provided consultations integrating classical Ayurvedic and Siddha treatment principles",
        "Managed OPD patients for lifestyle diseases, pain management, and preventive care",
        "Designed personalised herbal treatment protocols and dietary plans for patients",
      ],
    },
    {
      role: "Compulsory Rotating Intern",
      institution: "Sri Sairam Ayurveda Medical College & Research Center",
      location: "West Tambaram, Chennai, Tamil Nadu",
      period: "Sep 2024 – Sep 2025",
      highlights: [
        "Managed OPD and IPD patients under physician supervision across all major departments",
        "Assisted in Panchakarma procedures and other Ayurvedic treatments",
        "Participated in clinical rounds, case discussions, and patient documentation",
      ],
    },
    {
      role: "Part-Time Clinical Intern",
      institution: "Dhanwantralaya Ayurveda Specialty Hospital",
      location: "West Tambaram, Chennai, Tamil Nadu",
      period: "May 2025 – Jun 2025",
      highlights: [
        "Assisted with herbal dispensing and Panchakarma therapy procedures",
        "Gained exposure to hospital-grade Ayurvedic workflows and case documentation",
        "Supported outpatient care and follow-up management",
      ],
    },
    {
      role: "Part-Time Clinical Intern",
      institution: "Kottakkal Arya Vaidya Sala",
      location: "Nanganallur, Chennai, Tamil Nadu",
      period: "Nov 2024 – Apr 2025",
      highlights: [
        "Supported outpatient care under senior Ayurvedic physicians",
        "Gained hands-on experience with classical Kottakkal formulations and dispensing",
      ],
    },
  ],

  // ── Certifications ──────────────────────────────────────────
  certifications: [
    {
      name: "BAMS – Bachelor of Ayurvedic Medicine & Surgery",
      issuer: "Sri Sairam Ayurveda Medical College & Research Center, Chennai",
      year: "2024",
      category: "degree" as const,
    },
    {
      name: "Community Health Camps & Workshops",
      issuer: "Sri Sairam Ayurveda Medical College (during college)",
      year: "2023 – 2025",
      category: "workshop" as const,
    },
  ],

  // ── Research ────────────────────────────────────────────────
  research: [
    {
      title: "Application of 3D Printing in Ayurveda Pharmacy - A Steps Towards Personalized Medicine",
      venue: "IJAMR (International Journal of Ayurveda & Medical Research)",
      year: "Mar 2026",
      type: "Published" as const,
      link: "",
    },
    {
      title: "Application of 3D Printing in Ayurveda Pharmacy - A Steps Towards Personalized Medicine",
      venue: "Insight of Parkinsonism in Ayurveda - Conference",
      year: "Mar 2024",
      type: "Presented" as const,
      link: "",
    },
    {
      title: "Oral Presentation – \"Global Ayurveda: Innovations & Integrations\"",
      venue: "International Conference on Ayurveda",
      year: "Oct 2024",
      type: "Presented" as const,
      link: "",
    },
    {
      title: "Integrative Approach of AYUSH Medicine in Healthcare",
      venue: "Captain Srinivasa Murthy Central Ayurveda Research Institute (CCRAS), Chennai",
      year: "Jan 2024",
      type: "Delegate" as const,
      link: "",
    },
    {
      title: "Himalaya Ayurveda Conference",
      venue: "Himalaya Wellness",
      year: "Oct 2023",
      type: "Delegate" as const,
      link: "",
    },
  ],

  // ── Testimonials ────────────────────────────────────────────
  testimonials: [
    {
      quote: "Dr. Sushma's approach to my chronic digestive issues was completely different from anything I'd tried before. After one month of treatment I felt genuinely better.",
      name: "Anonymous",
      role: "Patient, Bengaluru",
      rating: 5,
    },
    {
      quote: "I had been struggling with PCOD for years. Dr. Sushma's Ayurvedic treatment plan brought my cycles back to normal within three months. I'm so grateful.",
      name: "Anonymous",
      role: "Patient, Bengaluru",
      rating: 5,
    },
    {
      quote: "My lower back pain was making daily life unbearable. After the Panchakarma sessions with Dr. Sushma, I have 80% relief and can finally sleep through the night.",
      name: "Anonymous",
      role: "Patient, Hosur",
      rating: 5,
    },
    {
      quote: "Dr. Sushma patiently explained every step of my treatment for thyroid dysfunction. Her holistic approach — diet, herbs, and lifestyle — made a real difference.",
      name: "Anonymous",
      role: "Patient, Chennai",
      rating: 5,
    },
    {
      quote: "I came in with severe migraines that tablets couldn't control. The Nasya and Shirodhara treatments she recommended reduced my episodes dramatically.",
      name: "Anonymous",
      role: "Patient, Bengaluru",
      rating: 5,
    },
    {
      quote: "An exceptionally dedicated physician who demonstrates thorough knowledge of classical texts and excellent patient rapport.",
      name: "Anonymous",
      role: "Colleague",
      rating: 5,
    },
  ],

  // ── Social links ────────────────────────────────────────────
  social: {
    linkedin: "https://www.linkedin.com/in/sushma-s-a50325303",
    instagram: "",
    whatsapp: "+917598158582",
  },
}
