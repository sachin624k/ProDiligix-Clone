import logistics from "../assets/logistics.png";
import corporate from "../assets/corporate.png";
import event from "../assets/event.png";
import team from "../assets/team.png";
import WEdeliver from "../assets/WEdeliver.png";
import stamp from "../assets/stamp.png";

const servicesData = [
  {
    id: 1,
    title: "Logistics Management",
    image: logistics,
    shortDescription: "Comprehensive Logistics Solutions – Air (Normal & Urgent), Surface/Road, Railway, PTL & FTL – All on One Platform with Real-Time Tracking.",
    features: [
      {
        title: "Air Courier – Normal & Urgent",
        details: [
          "Air Normal: Reliable and time-bound delivery for planned consignments.",
          "Air Urgent (Special for Breakdown & Critical Needs): Designed for emergencies such as machine breakdowns, medical supplies, or urgent spares. Priority handling and fastest routes ensure minimum downtime."
        ]
      },
      {
        title: "Surface / Road Transport",
        details: [
          "Ideal for cost-effective and bulk movements.",
          "Covers Part Truck Load (PTL) for smaller consignments and Full Truck Load (FTL) for larger shipments.",
          "Wide network for intercity and intracity deliveries."
        ]
      },
      {
        title: "Railway Cargo",
        details: [
          "Economical and efficient mode for heavy goods and long-distance consignments.",
          "Ensures faster transit than road for specific routes while being cost-friendly."
        ]
      },
      {
        title: "PTL (Part Truck Load)",
        details: [
          "Pay only for the space you use.",
          "Flexible, reliable, and budget-friendly solution for businesses not needing full truck capacity."
        ]
      },
      {
        title: "FTL (Full Truck Load)",
        details: [
          "Dedicated trucks for large shipments.",
          "Faster transit, reduced handling, and higher reliability for bulk orders."
        ]
      },
      {
        title: "Single Platform Advantage",
        details: [
          "Manage all courier modes from one platform",
          "Centralized coordination, real-time tracking, and automated updates.",
          "Improved visibility, reduced errors, and peace of mind for your logistics team."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Corporate Gifting",
    image: corporate,
    shortDescription: "Unique & Personalized Corporate Gifting – From Employee Welcome Kits to Client Engagement, We Deliver Lasting Impressions.",
    detailedDescription: "At ProDiligix, we go beyond ordinary gifting to create experiences that leave a mark. Our corporate gifting solutions are thoughtfully designed to enhance employee engagement, client relationships, and brand value.",
    features: [
      {
        title: "Our Offerings:",
        details: [
          "Employee Welcome Kits – Custom-branded onboarding packages that make every new hire feel valued from day one.",
          "Festive & Seasonal Gifting – Celebrate festivals, milestones, and occasions with curated hampers tailored to your culture and values.",
          "Client Appreciation Gifts – Strengthen business relationships with elegant, personalized gifts that speak professionalism and care.",
          "Customized Solutions – Fully personalized designs, branding, and packaging to align with your company’s identity."
        ]
      },
      {
        title: "Why Choose Us?",
        details: [
          "Pan-India delivery with reliable logistics",
          "Tailored branding to reflect your company culture",
          "Wide range of curated options from premium to budget-friendly",
          "One-stop management for procurement and execution"
        ]
      },
    ]
  },
  {
    id: 3,
    title: "Event Management",
    image: event,
    shortDescription: "End-to-End Event Management for Corporates – From planning and execution to on-site coordination and post-event evaluation, we ensure your events are impactful, seamless, and stress-free.",
    detailedDescription: "Transform your corporate events into unforgettable experiences with our comprehensive event management services.",
    features: [
      {
        title: "Pre-Event Planning",
        details: [
          "Concept development and theme creation",
          "Venue selection and vendor coordination",
          "Budget planning and timeline management"
        ]
      },
      {
        title: "Event Execution",
        details: [
          "On-site coordination and supervision",
          "Audio-visual and technical support",
          "Guest management and registration"
        ]
      },
      {
        title: "Post-Event Services",
        details: [
          "Event evaluation and feedback analysis",
          "Photography and videography deliverables",
          "Detailed event reports and ROI metrics"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Team Building Activities",
    image: team,
    shortDescription: "End-to-End Management for Team Outings, Fun Activities, Conferences & Training Sessions – We handle everything from planning to execution, ensuring seamless and engaging experiences for your teams.",
    detailedDescription: "Strengthen team bonds and boost morale with our engaging team building activities and corporate outings.",
    features: [
      {
        title: "Outdoor Team Activities",
        details: [
          "Adventure sports and challenge courses",
          "Nature retreats and camping experiences",
          "Sports tournaments and competitions"
        ]
      },
      {
        title: "Indoor Team Workshops",
        details: [
          "Problem-solving and collaboration exercises",
          "Creative workshops and skill development",
          "Leadership and communication training"
        ]
      },
      {
        title: "Corporate Conferences",
        details: [
          "Multi-day conference planning",
          "Breakout session coordination",
          "Networking event management"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "IT Solutions",
    image: WEdeliver,
    shortDescription: "We deliver end-to-end IT solutions — from custom software and apps to cloud, automation, AI, and reliable IT support.",
    detailedDescription: "Empower your business with cutting-edge technology solutions tailored to your unique needs.",
    features: [
      {
        title: "Custom Software Development",
        details: [
          "Web and mobile application development",
          "Enterprise software solutions",
          "API integration and development"
        ]
      },
      {
        title: "Cloud & Automation",
        details: [
          "Cloud migration and management",
          "Process automation and optimization",
          "DevOps and CI/CD implementation"
        ]
      },
      {
        title: "AI & Data Analytics",
        details: [
          "Machine learning model development",
          "Business intelligence and reporting",
          "Predictive analytics solutions"
        ]
      },
      {
        title: "IT Support & Maintenance",
        details: [
          "24/7 technical support",
          "System monitoring and updates",
          "Security and compliance management"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Stamp Paper Procurement Services",
    image: stamp,
    shortDescription: "We provide authentic stamp paper procurement services for all your legal needs — including Agreements, Affidavits, Contracts, and other essential legal documents.",
    detailedDescription: "Simplify your legal documentation process with our hassle-free stamp paper procurement services.",
    features: [
      {
        title: "Document Types Supported",
        details: [
          "Rental and lease agreements",
          "Affidavits and notarizations",
          "Business contracts and MOUs",
          "Property sale agreements"
        ]
      },
      {
        title: "Service Benefits",
        details: [
          "Genuine e-stamp papers from authorized vendors",
          "Doorstep delivery across India",
          "Multiple denomination options",
          "Quick turnaround time"
        ]
      },
      {
        title: "Legal Compliance",
        details: [
          "Government-authorized stamp papers",
          "State-specific compliance",
          "Digital verification and authentication"
        ]
      }
    ]
  }
];

export default servicesData;
