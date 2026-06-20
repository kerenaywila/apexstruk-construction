import { Project, Service, Statistic } from './types';

export const STATISTICS: Statistic[] = [
  {
    value: '8+',
    label: 'Years of Experience',
    description: 'Serving public and private sectors in Nigeria since 2016.'
  },
  {
    value: '28+',
    label: 'Projects Delivered',
    description: 'Completed in Lagos, Abuja, Port Harcourt, and neighboring States.'
  },
  {
    value: '30+',
    label: 'Engineering Professionals',
    description: 'COREN registered civil, structural, MEP, and project managers.'
  },
  {
    value: '8',
    label: 'Active Modern Sites',
    description: 'Operating with strict HSE standards and zero-accident policies.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'building-construction',
    title: 'Building Construction & Real Estate',
    shortDescription: 'From high-rise commercial offices to master-planned residential estates in premium layouts.',
    fullDescription: 'ApexStruc provides complete building solutions, managing architectural integration, structural casing, and finishing. We navigate Nigeria\'s coastal soil realities using sophisticated geotechnical preparation (including deep piling) to deliver high-rise commercial structures and luxury residences with absolute lifetime integrity.',
    iconName: 'Building2',
    subCapabilites: [
      'Multi-story commercial core developments',
      'Luxury residential enclave construction',
      'Structural steel warehousing & logistics terminals',
      'Premium interior and exterior masonry finishing',
      'Modern MEP (Mechanical, Electrical, Plumbing) integration'
    ]
  },
  {
    id: 'civil-infrastructure',
    title: 'Civil & Transportation Infrastructure',
    shortDescription: 'Heavy drainage channels, culverts, highway widening, and bridge construction for lasting transit.',
    fullDescription: 'We specialize in public and corporate infrastructure, specializing in arterial asphalt highways, flyovers, concrete retaining structures, and high-volume drainage utilities. Our engineering handles the heavy rainfall profiles of coastal cities and the hard granitic soils of Nigeria\'s northern terrain.',
    iconName: 'HardHat',
    subCapabilites: [
      'Asphalt road networks & structural sub-base paving',
      'Heavy storm-water concrete drainage channels',
      'Bridges, culverts & river training schemes',
      'Water distribution mains & utility diversions',
      'Erosion control & land reclamation works'
    ]
  },
  {
    id: 'structural-engineering',
    title: 'Structural Design & Geotechnical Services',
    shortDescription: 'Site investigation, deep piling, post-tensioned slabs, and robust finite element engineering.',
    fullDescription: 'ApexStruc\'s inside design office conducts rigorous computer-aided modeling, finite element analysis (FEA), and site soil mechanics tests. We design deep boredom piles, continuous concrete raft foundations, and post-tensioned floor systems optimized for strength and concrete efficiency.',
    iconName: 'Ruler',
    subCapabilites: [
      'Geotechnical soil boring, SCPT & report analysis',
      'Cast-in-situ bored piling and marine sheeting piles',
      'High-performance reinforced concrete detailing',
      'Structural steel space frame design & fabrication',
      'Independent peer reviews & older structure auditing'
    ]
  },
  {
    id: 'construction-management',
    title: 'EPC & Construction Project Management',
    shortDescription: 'End-to-end management of materials, procurement, cost auditing, and safety engineering.',
    fullDescription: 'Through our Engineering, Procurement, and Construction (EPC) model, ApexStruc manages everything from budgeting to execution. We guarantee materials quality (sand-to-steel ratios, cement testing) and compliance with Local Content regulations, delivering projects on-time and within scope.',
    iconName: 'Briefcase',
    subCapabilites: [
      'Comprehensive material testing (compression, tensile checks)',
      'HSE (Health, Safety, Environment) program implementation',
      'Supply chain optimization & local material sourcing',
      'BIM (Building Information Modeling) and schedule tracking',
      'Compliance audits for COREN & Federal planning authorities'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'lekki-estate',
    title: 'Lekki Residential Estate Phase III',
    category: 'Residential',
    location: 'Lekki Scheme 2, Lagos State',
    state: 'Lagos',
    completionYear: '2024',
    scope: [
      'Geotechnical survey & soil stabilization',
      'Cast-in-situ concrete foundations',
      'Structural superstructure (5 blocks, 4 floors each)',
      'Comprehensive estate storm-water drainage network',
      'Internal asphalt road network & solar streetlighting'
    ],
    description: 'Execution of a premium multi-family residential structure including all civil horizontal infrastructure. Handled Lekki sub-soil characteristics, using concrete piling down to stable mudstone layers.',
    technicalSpecs: {
      'Foundation Type': 'Reinforced concrete bored piles (22m depth)',
      'Concrete Grade': 'C35/40 high-durability mix with surface corrosion resistance',
      'Total Footprint': '8,200 SQM gross built area',
      'Contract Value': '₦1.2 Billion',
      'Client': 'Oceanview Premium Estates Ltd',
      'Lead Project Manager': 'Engr. Bamidele Adeleke, FNSE'
    },
    image: '/src/assets/images/lekki_estate_completed_1781938873044.jpg'
  },
  {
    id: 'trans-amadi-plaza',
    title: 'Trans-Amadi Commercial Office Plaza',
    category: 'Commercial',
    location: 'Trans-Amadi Industrial Layout, Port Harcourt, Rivers State',
    state: 'Port Harcourt',
    completionYear: '2023',
    scope: [
      'Sub-grade remediation & dynamic compaction on marshy edge',
      'Post-tensioned concrete flat slabs to reduce structural weight',
      'Thermal-efficient double-glazed curtain wall installation',
      'Acoustic partitioning & modern industrial MEP systems',
      'Industrial borehole & water purification yard'
    ],
    description: 'An energy-efficient low-rise commercial plaza. Features high load capacity concrete frameworks, low-emissivity glass curtain walls, and central multi-zone air filtration systems to house engineering and oil support operations.',
    technicalSpecs: {
      'Structural System': 'Post-tensioned slab with heavy core shear-walls',
      'Glazing Standard': 'Double-pane low-E solar glass curtains tinted for heat deflection',
      'Total Floor Area': '5,400 SQM corporate space',
      'Contract Value': '₦950 Million',
      'Client': 'Delta Alliance Energy Resources Ltd',
      'Lead Civil Engineer': 'Engr. Mrs. Chioma Nwachukwu, MNSE'
    },
    image: '/src/assets/images/trans_amadi_plaza_1781938887863.jpg'
  },
  {
    id: 'abuja-drainage',
    title: 'Abuja Arterial Highway Drainage & Flood Control',
    category: 'Infrastructure',
    location: 'Sector Centre D, Garki Extension, Abuja',
    state: 'Abuja',
    completionYear: '2025',
    scope: [
      'Hydrological modeling & local catchment profiling',
      'Excavation of 4.2 KM of concrete storm water culverts',
      'Precast concrete U-drains & retaining wall construction',
      'Asphalt road widening and road shoulder structural overlay',
      'Relocation of primary optical fiber and pipeline utilities'
    ],
    description: 'An critical civil infrastructure project to control highway erosion and localized seasonal flooding. Engineered to channel high storm peaks with steep-flow velocity-matched concrete canals dumping safely into local river basins.',
    technicalSpecs: {
      'Total Length': '4.2 Kilometers of continuous covered concrete channel',
      'U-channel Size': '2.2m x 2.2m pre-cast reinforced sections',
      'Total Excavated Volume': '48,500 Cubic Meters',
      'Contracting Partner': 'Federal Capital Development Authority (FCDA)',
      'Lead Infrastructure Engineer': 'Engr. Abubakar Yusuf, COREN Reg.'
    },
    image: '/src/assets/images/abuja_highway_drainage_1781938905429.jpg'
  },
  {
    id: 'fct-warehouses',
    title: 'Abuja Logistics Space Frame Warehouses',
    category: 'Industrial',
    location: 'Idu Industrial Area, Abuja FCT',
    state: 'Abuja',
    completionYear: '2024',
    scope: [
      'Heavy concrete slab casting designed for high axle load fork-lifts',
      'Erection of large-span structural steel space frames',
      'Insulated roof and side sandwich panel cladding',
      'Integrated fire hydrant and sprinkler ring distribution'
    ],
    description: 'A structural steel logistics warehouse layout in the thriving Idu industrial belt. Built with high architectural clear heights and thick concrete flooring treated with hard-shake chemicals to prevent dust and cracking.',
    technicalSpecs: {
      'Roof Truss Span': '36.5 Meters clear span without intermediate support columns',
      'Floor Concrete': '250mm thick concrete with synthetic polymer reinforcement fiber',
      'Storage Volume': '42,000 Cubic Meters of indoor clearance space',
      'Client': 'North-Central Logistics Hub Ltd',
      'Lead Fabricator': 'Engr. Festus Omokungbe, MNSE'
    },
    image: '/src/assets/images/hero_lagos_construction_1781938854594.jpg'
  }
];