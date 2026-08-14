export type Service = {
  slug: string;
  title: string;
  seoKeyword: string;
  seoTitle: string;
  seoKeywords: string[];
  description: string;
  focus: string;
  icon: string;
  benefits: string[];
  process: string[];
  industries: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const commonBenefits = [
  "Site-specific solution planning",
  "Professional installation and configuration",
  "Scalable architecture for future expansion",
  "Clean cabling, labeling and documentation",
  "Equipment testing and commissioning",
  "Technical support after deployment"
];

export const services: Service[] = [
  {
    slug: "complete-it-setup",
    title: "Complete IT Setup for Businesses & Industries",
    seoKeyword: "IT Setup",
    seoTitle: "IT Setup Services in Haryana | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "wireless lan", "computer setup", "lan network", "computer setup service", "wifi network", "my computer", "computer help", "repair computer", "network design", "computer center", "wireless network security", "computer installation", "mobile wifi", "structured cabling", "network device", "lan to lan", "set up printer to computer", "computer support", "wireless lan network", "computer service", "wifi access point", "invisible fence for plants", "computer installation services", "network cabling", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "Complete IT infrastructure planning, installation and integration for offices, factories, warehouses, institutions and commercial facilities.",
    focus:
      "corporate offices, factories, warehouses, branches, industrial units, commercial buildings and institutional campuses",
    icon: "IT",
    benefits: commonBenefits,
    process: [
      "Understand users, applications, departments and site requirements.",
      "Design structured IT infrastructure covering connectivity, equipment and security.",
      "Install hardware, structured cabling, racks, network equipment and endpoints.",
      "Configure systems, test connectivity and document the deployment.",
      "Complete handover, user guidance and support planning."
    ],
    industries: [
      "Manufacturing",
      "Corporate Offices",
      "Warehouses",
      "Educational Institutions",
      "Government Facilities"
    ],
    faqs: [
      {
        question: "Can Corefix handle a complete office IT setup?",
        answer:
          "Yes. Corefix can coordinate structured cabling, networking, computers, racks, connectivity and related security infrastructure as one project."
      },
      {
        question: "Can you upgrade an existing IT infrastructure?",
        answer:
          "Yes. Existing networks can be assessed and upgraded without replacing every component unnecessarily."
      },
      {
        question: "Do you provide solutions for factories?",
        answer:
          "Yes. Industrial IT infrastructure can be designed around production areas, offices, warehouses, CCTV and operational connectivity."
      }
    ]
  },

  {
    slug: "cctv-installation",
    title: "CCTV Installation & Integrated Surveillance Systems",
    seoKeyword: "CCTV Installation",
    seoTitle: "CCTV Installation in Delhi NCR | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "cctv camera installation", "cctv camera", "cctv system", "cctv camera price", "video surveillance system", "difference between cctv and ip camera", "cctv installation", "cctv installation & service", "good quality cctv camera price", "cctv camera area coverage", "security camera installation", "good cctv camera brands", "cctv camera delhi price", "cctv camera shop near me", "video surveillance system installation", "cctv near me", "cctv camera installation home", "different brands of cctv cameras", "cctv camera near me", "cctv installation camera", "best cctv camera shop", "cctv repair and installation", "indoor camera cctv", "cheap cctv camera installation", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "Professional CCTV installation and integrated surveillance systems for industries, offices, schools, warehouses and institutions.",
    focus:
      "factories, warehouses, schools, colleges, offices, hospitals, commercial buildings, industrial campuses and government facilities",
    icon: "CCTV",
    benefits: commonBenefits,
    process: [
      "Conduct site survey and identify critical surveillance zones.",
      "Select camera types, lenses, storage and recording architecture.",
      "Install cameras, cabling, PoE/network equipment and recording systems.",
      "Configure recording, remote viewing, user access and required analytics.",
      "Test camera coverage, recording reliability and system performance."
    ],
    industries: [
      "Factories",
      "Schools & Colleges",
      "Warehouses",
      "Offices",
      "Government Facilities",
      "Retail"
    ],
    faqs: [
      {
        question: "Does Corefix install CCTV for factories?",
        answer:
          "Yes. Industrial CCTV systems can cover production areas, gates, warehouses, parking areas, offices and other critical zones."
      },
      {
        question: "Can CCTV be monitored remotely?",
        answer:
          "Yes. Where network and security requirements permit, systems can be configured for authorized remote monitoring."
      },
      {
        question: "Can you integrate AI video analytics?",
        answer:
          "Yes. Suitable systems can support analytics such as intrusion, line crossing, people counting and other application-specific detection."
      }
    ]
  },

  {
    slug: "car-camera-dashcam-wholesale",
    title: "Car Camera / Dashcam Kits — B2B Wholesale Supply",
    seoKeyword: "Dashcam Wholesale",
    seoTitle: "Dashcam Wholesale in India | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "truck camera", "dash camera for trucks", "vehicle video camera", "vehicle camera", "fleet dash cameras", "ai dashcam", "ai dash camera", "car camera", "fleet camera", "truck camera system", "cameras for trucks", "vehicle camera system", "commercial truck dash camera systems", "dash camera for commercial vehicles", "car camera system", "truck camera monitoring system", "dash camera with gps", "dash cameras for fleet vehicles", "truck dash camera system", "vehicle security camera", "vehicle camera monitoring system", "gps camera", "car camera systems", "360 camera for truck", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "B2B car camera and dashcam kits for fleet operators, vehicle integrators, transport companies and security solution providers.",
    focus:
      "commercial fleets, school buses, logistics operators, transport companies, vehicle installers, government fleets and security integrators",
    icon: "CAM",
    benefits: [
      "B2B-oriented product sourcing",
      "Single and multi-camera vehicle configurations",
      "Front, cabin and rear camera options",
      "Fleet deployment support",
      "Integration-friendly equipment selection",
      "Bulk supply for projects and resellers"
    ],
    process: [
      "Understand vehicle type, fleet size and monitoring objectives.",
      "Select appropriate camera, display, storage and connectivity options.",
      "Prepare vehicle-specific installation architecture.",
      "Configure equipment and complete sample deployment.",
      "Scale supply and installation across the fleet."
    ],
    industries: [
      "Transport",
      "Logistics",
      "School Bus Fleets",
      "Mining",
      "Government Fleets",
      "Vehicle Integrators"
    ],
    faqs: [
      {
        question: "Does Corefix supply dashcams in bulk?",
        answer:
          "Yes. The service is designed for B2B and project-based requirements including fleet and reseller quantities."
      },
      {
        question: "Can multiple vehicle cameras be integrated?",
        answer:
          "Yes. Vehicle systems can be specified for front, rear, cabin and multi-camera monitoring depending on the application."
      },
      {
        question: "Do you support fleet deployment?",
        answer:
          "Yes. Corefix can help with equipment selection, sample installation and scalable deployment planning."
      }
    ]
  },

  {
    slug: "networking-system-integration",
    title: "Networking & System Integration",
    seoKeyword: "Networking Solutions",
    seoTitle: "Networking Solutions in Haryana | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "wireless lan", "lan network", "wifi network", "wireless access point", "wireless access", "wireless aps", "network design", "wireless network security", "mobile wifi", "structured cabling", "network device", "lan to lan", "access point", "wireless lan network", "wifi access point", "invisible fence for plants", "network cabling", "network services", "wifi antenna", "wlan lan", "wireless antenna", "wireless implementation", "wireless network design", "aps network", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "Structured networking, LAN, Wi-Fi, rack, switching and system integration services for business and industrial environments.",
    focus:
      "offices, factories, warehouses, campuses, commercial facilities and multi-building sites",
    icon: "NET",
    benefits: commonBenefits,
    process: [
      "Survey users, devices, coverage zones and existing infrastructure.",
      "Plan wired and wireless topology with appropriate capacity.",
      "Install cabling, racks, switches, access points and network hardware.",
      "Configure network equipment and connectivity.",
      "Test performance, document ports and complete handover."
    ],
    industries: [
      "Manufacturing",
      "Offices",
      "Schools",
      "Colleges",
      "Warehouses",
      "Commercial Buildings"
    ],
    faqs: [
      {
        question: "Can you install a complete LAN?",
        answer:
          "Yes. Corefix can handle structured cabling, racks, switches, connectivity and endpoint integration."
      },
      {
        question: "Can you work with an existing network?",
        answer:
          "Yes. Existing networks can be assessed and expanded or reorganized where technically suitable."
      },
      {
        question: "Do you provide Wi-Fi infrastructure?",
        answer:
          "Yes. Wireless access points and network architecture can be included according to coverage and user-density requirements."
      }
    ]
  },

  {
    slug: "network-boosters-range-extension",
    title: "Network Boosters & Range Extension Solutions",
    seoKeyword: "Network Boosters",
    seoTitle: "Network Boosters in Haryana | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "wireless lan", "lan network", "wifi network", "wireless access point", "wireless access", "wireless aps", "network design", "wireless network security", "mobile wifi", "network device", "access point", "wireless lan network", "wifi access point", "network cabling", "network services", "wifi antenna", "wireless antenna", "wireless implementation", "wireless network design", "aps network", "wireless network devices", "networks wireless", "wireless point", "computer network services", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "Network range extension and connectivity improvement solutions for buildings, campuses, industrial sites and difficult coverage zones.",
    focus:
      "large offices, warehouses, factories, campuses, remote areas and buildings with weak network coverage",
    icon: "RF",
    benefits: [
      "Coverage assessment before deployment",
      "Improved connectivity in difficult zones",
      "Network extension planning",
      "Access point and repeater integration",
      "Reduced connectivity dead zones",
      "Scalable architecture"
    ],
    process: [
      "Measure existing network coverage and identify dead zones.",
      "Determine whether wired, wireless or specialized extension is appropriate.",
      "Position equipment for practical coverage.",
      "Configure and secure the extended network.",
      "Test signal performance and document coverage."
    ],
    industries: [
      "Factories",
      "Warehouses",
      "Schools",
      "Large Offices",
      "Campuses"
    ],
    faqs: [
      {
        question: "Can a weak Wi-Fi area be improved?",
        answer:
          "Yes. Corefix can assess coverage and recommend access points, wired extensions or other suitable network architecture."
      },
      {
        question: "Do you install network equipment in factories?",
        answer:
          "Yes. Industrial environments can be planned around building layout, machinery, interference and operational requirements."
      },
      {
        question: "Is a booster always the best solution?",
        answer:
          "Not always. A site survey determines whether a booster, wired access point, mesh architecture or another solution is more appropriate."
      }
    ]
  },

  {
    slug: "computer-lab-setup",
    title: "Computer Lab Setup for Schools & Colleges",
    seoKeyword: "Computer Lab Setup",
    seoTitle: "Computer Lab Setup in Haryana | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "computer setup", "computer setup service", "my computer", "set up printer", "computer help", "repair computer", "computer center", "computer installation", "install printer", "laptop service", "printer service", "set up printer to computer", "computer support", "computer service", "computer installation services", "computer repair schools", "refurbished laptops", "computer tech", "computer set up at home", "schools for computers", "in home computer setup service", "computer solutions", "computer it services", "computer network services", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "Complete computer laboratory setup for schools, colleges and educational institutions including networking, systems and lab infrastructure.",
    focus:
      "schools, colleges, universities, training institutes, computer labs and educational campuses",
    icon: "LAB",
    benefits: [
      "Complete lab planning",
      "Student workstation deployment",
      "Structured LAN installation",
      "Power and connectivity planning",
      "Teacher/admin workstation integration",
      "Future-ready expansion"
    ],
    process: [
      "Assess classroom size, student capacity and curriculum requirements.",
      "Design workstation layout, network and electrical requirements.",
      "Supply and install computers, networking and supporting infrastructure.",
      "Configure systems and classroom connectivity.",
      "Test every workstation and provide operational handover."
    ],
    industries: [
      "Schools",
      "Colleges",
      "Universities",
      "Training Institutes",
      "Skill Development Centers"
    ],
    faqs: [
      {
        question: "Can Corefix set up a complete computer lab?",
        answer:
          "Yes. The project can include computers, LAN, networking, racks, peripherals and supporting infrastructure."
      },
      {
        question: "Can you design labs for schools and colleges?",
        answer:
          "Yes. Lab architecture can be designed according to student capacity, room dimensions and academic requirements."
      },
      {
        question: "Can an existing lab be upgraded?",
        answer:
          "Yes. Existing computers and network infrastructure can be assessed before recommending replacements or upgrades."
      }
    ]
  },

  {
    slug: "ai-lab-setup",
    title: "AI Lab Setup for Educational Institutions",
    seoKeyword: "AI Lab Setup",
    seoTitle: "AI Lab Setup in Haryana | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "ai and robotics", "ai and robotics courses", "robotics and artificial intelligence", "ai robotics course", "robotics and artificial intelligence courses", "artificial intelligence course fees in india", "robot artificial intelligence", "machine learning for robotics", "artificial intelligence and robotics engineering", "courses on robotics and artificial intelligence", "robotics and machine learning", "ai and robotics courses in india", "robotics and artificial intelligence engineering", "ai and robotics courses university", "artificial intelligence training institute", "machine learning for robotics course", "artificial intelligence and drones", "artificial intelligence robotics course", "robotics and artificial intelligence courses in india", "ai robot programming", "ai and robotics engineering", "artificial intelligence drones", "machine learning robotics course", "artificial intelligence and robotics courses in india", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "AI and technology laboratory setup for schools, colleges and educational institutions with computing, networking and learning infrastructure.",
    focus:
      "schools, colleges, universities, engineering institutes, skill centers and innovation laboratories",
    icon: "AI",
    benefits: [
      "AI-focused laboratory planning",
      "Computing infrastructure",
      "High-performance networking",
      "Student workstation deployment",
      "Demonstration and learning infrastructure",
      "Scalable technology architecture"
    ],
    process: [
      "Understand curriculum, student capacity and laboratory objectives.",
      "Define computing, display, networking and equipment requirements.",
      "Prepare room layout and infrastructure plan.",
      "Install and configure laboratory equipment.",
      "Test systems and provide staff handover."
    ],
    industries: [
      "Schools",
      "Engineering Colleges",
      "Universities",
      "Innovation Centers",
      "Skill Development Institutes"
    ],
    faqs: [
      {
        question: "What can an AI lab include?",
        answer:
          "Depending on the curriculum, it can include computing systems, networking, displays, robotics-related equipment and other educational technology."
      },
      {
        question: "Can you design an AI lab for schools?",
        answer:
          "Yes. The infrastructure can be scaled according to student capacity, curriculum and budget."
      },
      {
        question: "Can an AI lab be expanded later?",
        answer:
          "Yes. Modular planning allows additional workstations and technology equipment to be introduced later."
      }
    ]
  },

  {
    slug: "smart-classroom-setup",
    title: "Smart Classroom Setup",
    seoKeyword: "Smart Classroom",
    seoTitle: "Smart Classroom in Haryana | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "interactive whiteboard", "smart classroom devices", "smart board smart board", "teaching learning tools", "smart board for classroom", "smart classroom", "smart board for teaching", "smart classroom equipment", "interactive projector", "digital classroom", "interactive white board", "teaching methods", "smart board price", "teaching tools", "digital board for teaching", "classroom smart board", "interactive board", "smart classroom equipment list", "smart board cost", "interactive display", "interactive boards for classrooms", "interactive whiteboard for classroom", "interactive displays", "interactive smart board", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "Smart classroom technology installation for schools and colleges including displays, audio, connectivity and classroom control infrastructure.",
    focus:
      "schools, colleges, universities, coaching institutes and training centers",
    icon: "EDU",
    benefits: [
      "Interactive teaching environment",
      "Display and presentation integration",
      "Classroom audio support",
      "Reliable network connectivity",
      "Teacher-friendly operation",
      "Scalable classroom deployment"
    ],
    process: [
      "Survey classroom size, seating and teaching requirements.",
      "Select suitable display, audio and connectivity equipment.",
      "Install equipment with clean cable routing.",
      "Configure classroom devices and test operation.",
      "Train users and complete documentation."
    ],
    industries: [
      "Schools",
      "Colleges",
      "Universities",
      "Training Centers"
    ],
    faqs: [
      {
        question: "What does a smart classroom include?",
        answer:
          "A smart classroom can include displays, interactive teaching equipment, audio, networking and presentation infrastructure."
      },
      {
        question: "Can multiple classrooms be deployed together?",
        answer:
          "Yes. Corefix can plan standardized infrastructure for multiple classrooms."
      },
      {
        question: "Can existing classrooms be upgraded?",
        answer:
          "Yes. Existing displays, networks and audio systems can be evaluated for integration or replacement."
      }
    ]
  },

  {
    slug: "conference-room-av-setup",
    title: "Conference Room / Meeting Room AV Setup",
    seoKeyword: "Conference Room AV",
    seoTitle: "Conference Room AV in Haryana | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "conference room technology", "conference room solutions", "conference room setup", "meeting room solutions", "conference room video conferencing setup", "conference room video conferencing", "conference room setup companies", "conference room camera", "video conferencing solutions", "conference room setup for video conferencing", "best conference room camera", "video conference camera", "video conference room solutions", "meeting room technology", "video conferencing system for conference room", "meeting room camera", "conference camera", "best conference room video conferencing systems", "conference room camera for teams", "conference room video conferencing solutions", "hybrid conference room setup", "best conference room solutions", "best video conferencing equipment", "conference room video camera", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "Professional meeting room and conference room AV setup with displays, audio, cameras, connectivity and presentation systems.",
    focus:
      "corporate offices, boardrooms, training rooms, conference centers, institutions and government offices",
    icon: "AV",
    benefits: [
      "Professional meeting experience",
      "Integrated audio and video",
      "Presentation connectivity",
      "Camera and conferencing integration",
      "Clean installation",
      "Simple user operation"
    ],
    process: [
      "Assess room size, seating arrangement and meeting workflow.",
      "Select displays, cameras, microphones and audio equipment.",
      "Install and integrate AV equipment.",
      "Configure source switching and conferencing devices.",
      "Test speech clarity, display quality and meeting workflow."
    ],
    industries: [
      "Corporate Offices",
      "Government Offices",
      "Educational Institutions",
      "Training Centers",
      "Conference Facilities"
    ],
    faqs: [
      {
        question: "Can you set up complete meeting rooms?",
        answer:
          "Yes. Displays, audio, cameras, connectivity and presentation systems can be integrated into a single meeting room solution."
      },
      {
        question: "Can conference rooms support video meetings?",
        answer:
          "Yes. Compatible cameras, microphones, speakers and display systems can be integrated for video conferencing."
      },
      {
        question: "Do you install boardroom AV systems?",
        answer:
          "Yes. Boardrooms can be designed around room dimensions, seating and executive presentation requirements."
      }
    ]
  },

  {
    slug: "pa-broadcasting-systems",
    title: "PA System & Broadcasting / Public Address Systems",
    seoKeyword: "PA System Installation",
    seoTitle: "PA System Installation in Haryana | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "pa system installation", "security pa system", "pa system installation near me", "fire pa system", "building pa system", "pa system fire", "public address system installation", "pa system service", "fire alarm pa system", "fire alarm and pa system", "pa system installation company near me", "pa system for fire alarm", "public pa system", "public address system in building", "pa system solution", "public announcement systems", "pa system in building", "fire alarm public address system", "audio visual public address system", "building public address system", "digital public address system", "phone pa system", "fire announcement system", "pa system requirements", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "Public address, announcement and broadcasting systems for schools, factories, institutions, campuses and commercial facilities.",
    focus:
      "schools, factories, industrial campuses, hospitals, offices, warehouses and public institutions",
    icon: "PA",
    benefits: [
      "Clear voice announcements",
      "Zone-based audio planning",
      "Indoor and outdoor speaker options",
      "Centralized control",
      "Emergency announcement capability",
      "Scalable campus deployment"
    ],
    process: [
      "Map the required announcement zones.",
      "Select amplifiers, microphones, speakers and control equipment.",
      "Install cabling and speaker infrastructure.",
      "Configure zones and audio levels.",
      "Test speech clarity across all required areas."
    ],
    industries: [
      "Schools",
      "Factories",
      "Hospitals",
      "Warehouses",
      "Government Campuses"
    ],
    faqs: [
      {
        question: "Can PA systems cover large campuses?",
        answer:
          "Yes. Zone-based PA architecture can be designed for large educational and industrial campuses."
      },
      {
        question: "Can different zones be controlled separately?",
        answer:
          "Yes. Suitable systems can provide independent or grouped zone control."
      },
      {
        question: "Can PA systems be used for emergency announcements?",
        answer:
          "Yes. PA systems can be integrated into an organization's emergency communication plan where appropriate."
      }
    ]
  },

  {
    slug: "fire-smoke-alarm-systems",
    title: "Fire & Smoke Alarm Systems",
    seoKeyword: "Fire Alarm Systems",
    seoTitle: "Fire Alarm Systems in Haryana | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "fire protection", "fire alarm system for residential building", "fire protection companies", "fire detection systems inc", "fire safety", "automatic fire alarm", "fire protection solutions inc", "types of fire protection", "fire alarm", "fire alarm companies", "fire protection systems", "fire safety companies", "a fire safety", "fire alarm systems", "fire alarm system companies", "fire protection system installation", "fire protection company for sale", "fire safety equipment", "fire alarm system products", "industrial fire safety equipment", "fire protection services", "fire protection system in commercial building", "fire protection equipment", "fire safety products", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "Fire and smoke detection system planning and installation for commercial, industrial and institutional buildings.",
    focus:
      "factories, offices, warehouses, schools, colleges, commercial buildings and institutional facilities",
    icon: "FIRE",
    benefits: [
      "Early detection support",
      "Zone-based system planning",
      "Professional detector placement",
      "Alarm notification",
      "System testing",
      "Expandable architecture"
    ],
    process: [
      "Assess building layout and fire-risk zones.",
      "Plan detector, manual call point and notification coverage.",
      "Install cabling and fire alarm equipment.",
      "Configure zones and alarm functions.",
      "Test detection and notification performance."
    ],
    industries: [
      "Factories",
      "Warehouses",
      "Schools",
      "Offices",
      "Commercial Buildings"
    ],
    faqs: [
      {
        question: "Can you install fire alarms in factories?",
        answer:
          "Yes. Fire detection systems can be designed around production, storage, office and utility areas."
      },
      {
        question: "Do you install smoke detectors?",
        answer:
          "Yes. Detector selection and placement are planned according to the building and application."
      },
      {
        question: "Can an existing fire alarm system be upgraded?",
        answer:
          "Yes. Existing infrastructure can be assessed before planning an expansion or modernization."
      }
    ]
  },

  {
    slug: "electric-fencing-perimeter-security",
    title: "Electric Fencing & Perimeter Security",
    seoKeyword: "Electric Fencing",
    seoTitle: "Electric Fencing in Haryana | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "electric fence", "bobbins for electric fence", "electric fence wire", "electric fence installation", "farm fencing solutions", "electric fence near me", "fencing in agriculture", "electric fence cost", "livestock wire fencing", "solar electric fence", "fencing for boundary wall", "electric fence system", "electric fence charger", "single wire fencing", "solar powered electric fence", "electric fence energizer", "electric fence company", "wire fencing design", "electric security fence", "fencing wire suppliers near me", "best electric fence", "electric fencing system", "security fence", "electric fence for humans", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "Electric fencing and perimeter security solutions for factories, warehouses, campuses and high-security sites.",
    focus:
      "industrial plants, warehouses, farms, campuses, critical infrastructure and large commercial properties",
    icon: "SEC",
    benefits: [
      "Perimeter intrusion deterrence",
      "Boundary security planning",
      "Integration with surveillance",
      "Alarm event support",
      "Large-site deployment",
      "Scalable perimeter architecture"
    ],
    process: [
      "Survey the complete perimeter and identify vulnerable sections.",
      "Plan fence layout, energizer, monitoring and safety requirements.",
      "Install fencing infrastructure and associated equipment.",
      "Integrate alarms or surveillance where required.",
      "Test zones and complete operational handover."
    ],
    industries: [
      "Factories",
      "Warehouses",
      "Industrial Plants",
      "Campuses",
      "Critical Infrastructure"
    ],
    faqs: [
      {
        question: "Can electric fencing be integrated with CCTV?",
        answer:
          "Yes. Suitable perimeter systems can be coordinated with CCTV and alarm monitoring."
      },
      {
        question: "Is electric fencing suitable for factories?",
        answer:
          "Yes. It can be used as one layer of a broader perimeter protection strategy."
      },
      {
        question: "Can large boundaries be covered?",
        answer:
          "Yes. Perimeter systems can be designed for large sites after a detailed site survey."
      }
    ]
  },

  {
    slug: "drone-assembly-component-supply",
    title: "Drone Assembly Support & Component Supply",
    seoKeyword: "Drone Component Supply",
    seoTitle: "Drone Components Supply in India | Corefix Technologies",
    seoKeywords: ["Corefix Technologies", "drone technology", "academy drone", "flying a drone in india", "drone academy", "learning drone photography", "rpas flight", "drone companies", "best drone technology in the world", "drone motor india", "drone courses", "drones are us", "drone tips and tricks", "drone tech", "next drone", "uav operation", "drone training", "drone details", "drone banane ka", "uav drone", "building own drone", "drone kit", "listed drone manufacturing companies in india", "drone shop mumbai", "drone manufacturers", "Rewari", "Haryana", "Delhi NCR", "Pan-India"],
    description:
      "Drone assembly support and component supply for educational, industrial, technical training and project-based requirements.",
    focus:
      "educational institutions, technical training centers, engineering projects, research applications and industrial programs",
    icon: "UAV",
    benefits: [
      "Component sourcing support",
      "Project-based configuration",
      "Educational deployment support",
      "Assembly guidance",
      "System-level integration",
      "Scalable procurement"
    ],
    process: [
      "Understand the intended drone application and payload requirements.",
      "Define compatible components and subsystem requirements.",
      "Source and supply project-appropriate components.",
      "Support assembly and subsystem integration.",
      "Test the completed system according to the project scope."
    ],
    industries: [
      "Schools",
      "Colleges",
      "Engineering Institutes",
      "Training Centers",
      "Industrial Projects"
    ],
    faqs: [
      {
        question: "Does Corefix supply drone components?",
        answer:
          "Yes. Component supply can be arranged according to the project and technical requirements."
      },
      {
        question: "Can you support educational drone projects?",
        answer:
          "Yes. Educational and training projects can be planned around practical assembly and technology learning."
      },
      {
        question: "Do you provide complete drones?",
        answer:
          "The scope can include components, assembly support and project integration depending on the requirement."
      }
    ]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getLongServiceDescription(service: Service) {
  return `Corefix Technologies LLP provides ${service.title.toLowerCase()} for businesses, industries, institutions and government-linked projects across India. The service is planned around the actual operating conditions of the site instead of a one-size-fits-all package. Our team considers the application, building layout, user requirements, equipment requirements, connectivity, power conditions, security objectives and future expansion before recommending an implementation. This approach helps clients select practical equipment, structured installation methods and support arrangements that fit their operational priorities.

For ${service.title.toLowerCase()}, the objective is dependable infrastructure that works consistently after commissioning. Corefix can coordinate site assessment, solution design, equipment selection, installation, configuration, testing, documentation and handover as one integrated workflow. Where a project involves multiple technologies, the solution can be coordinated with CCTV, networking, access, audio-visual, alarm or other infrastructure so that the final installation is easier to operate and maintain. We focus on clean deployment, appropriate cable routing, labeling, configuration discipline and system testing so the client receives an organized installation instead of disconnected equipment.

This service is particularly suitable for ${service.focus}. Depending on the project, requirements may include new installation, expansion of an existing system, replacement of outdated equipment, centralized monitoring, network optimization, structured cabling, user training or post-installation support. Corefix supports commercial facilities, manufacturing environments, warehouses, educational campuses, offices, institutions and other organizations that need professional technology infrastructure. For organizations comparing vendors, our value is the ability to combine product supply, implementation and integration under one project scope while keeping the solution aligned with the site's actual requirements.`;
}