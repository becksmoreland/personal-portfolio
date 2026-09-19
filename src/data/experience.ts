export interface Experience {
  organization: string;
  shortMark: string;
  logo?: string;
  role: string;
  dates: string;
  location: string;
  highlights: string[];
}

export interface CampusActivity {
  title: string;
  category: string;
  status: string;
  summary: string;
}

export const campusActivities: CampusActivity[] = [
  {
    title: 'SDSU Rocket Project',
    category: 'Avionics team member',
    status: 'Current involvement',
    summary: 'Contributing to avionics integration, electrical interfaces, and subsystem testing while supporting the development of reliable flight hardware.'
  },
  {
    title: 'Autonomous UAV Research',
    category: 'SDSU undergraduate research',
    status: 'Mar 2025 — Present',
    summary: 'Currently designing sensor-mounting hardware and integrating and bench-testing onboard sensors before field deployment, with emphasis on interface validation, data integrity, and flight readiness.'
  }
];

export const experiences: Experience[] = [
  {
    organization: 'NASA Ames\u00a0 · \u00a0(AMA)',
    shortMark: 'NASA',
    logo: '/nasa-meatball.svg',
    role: 'UAS Engineering Intern',
    dates: 'Jun 2026 — Aug 2026',
    location: 'Moffett Field, CA',
    highlights: [
      'Built and integrated **3 SAR multirotor prototypes in 3 weeks**, including a **flight-ready first build completed in 4 days**, by translating **5 Air National Guard consultations** and a **6-concept trade study** into vehicle requirements.',
      'Designed and executed **15+ wind-tunnel runs over 18 wind-on hours at 10–85 ft/s**; authored the test matrix and TRR material and analyzed six-axis force/moment data with flight logs to quantify redesign stability gains.',
      'Commissioned and revalidated avionics across **3 builds**, resolving controller orientation, motor mapping, battery-sensing, vibration, and altitude-drift issues through functional testing and flight-log analysis.',
      'Planned and executed **10+ flight tests and 3 carrier-UAS releases from 30+ ft**, coordinating readiness, pilots, and telemetry to achieve successful recoveries after **all 3 releases**.',
      'Reduced redesigned-component mass by **20%+** through FEA under motor-thrust and helicopter-downwash loads while maintaining analyzed structural margins and addressing test-identified weak regions.'
    ]
  },
  {
    organization: 'MeshMap Labs',
    shortMark: 'MML',
    logo: '/meshmap-mark.svg',
    role: 'Test and Visualization Engineering Intern',
    dates: 'May 2025 — Sep 2025',
    location: 'San Francisco, CA',
    highlights: [
      'Led UAV and RTK field-test campaigns across **4 sites**, varying altitude, image overlap, and capture parameters to establish repeatable data-collection procedures under changing conditions.',
      'Diagnosed coverage and data-quality failures through post-flight analysis, planned corrective missions, and verified revised workflows in georeferenced 3D models combining UAV imagery and terrestrial LiDAR.'
    ]
  },
  {
    organization: 'Axyz Technologies',
    shortMark: 'AX',
    logo: '/axyz-lettermark.svg',
    role: 'Full Stack Developer Intern',
    dates: 'Jun 2023 — Jul 2025',
    location: 'Oakland, CA',
    highlights: [
      'Built and shipped **12+ Python/Django and JavaScript features** from user requirements; debugged database workflows and iterated through test results and stakeholder feedback.'
    ]
  }
];
