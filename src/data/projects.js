
// Original Content Generator (Single String Return as per User Request)
const generateCaseStudy = (id, type, client, location) => {
  const baseText = `
    Executive Summary
    -----------------
    The ${client} project in ${location} represents a benchmark in modern fire safety engineering. ignis Control System was commissioned to design, install, and commission a comprehensive life safety system for this critical infrastructure. The primary objective was to achieve full compliance with BS 5839-1:2017 while integrating with the building's existing Building Management System (BMS).

    1. Project Background and Scope
    The facility, characterized by its ${type.toLowerCase()} architecture, presented unique challenges regarding air flow and stratification. Traditional point detectors were deemed insufficient for the high-volume atrium spaces. Our engineering team conducted a detailed Computational Fluid Dynamics (CFD) analysis to model smoke behavior under various fire scenarios.
    
    The scope of work included:
    - Design and Installation of a networked Addressable Fire Alarm System.
    - Integration of over 500 multi-sensor detectors (Optical/Thermal).
    - Installation of a wet pipe sprinkler system covering 15,000 square meters.
    - Deployment of an Emergency Voice Communication (EVC) system.

    2. Technical System Architecture
    The core of the system is built around a fault-tolerant network of 4-loop control panels. Each panel is backed up by 24-hour standby battery power. We utilized a mix of detection technologies to minimize false alarms—a critical KPI for the ${client}.
    
    2.1 Detection & Signaling
    In the server rooms, we deployed VESDA aspirating systems. In general office areas, Multi-Criteria sensors were used. To ensure audibility, we installed EN54-23 compliant Visual Alarm Devices (VADs) in all high-noise plant rooms.

    3. Installation Challenges
    Working in a live environment in ${location} meant rigid schedules. We utilized high-performance wireless fire detection (EN54-25) in heritage zones to avoid surface cabling. Custom MICC cable trays were fabricated for congested risers.

    4. Commissioning and Handover
    Commissioning was executed in accordance with BAFE SP203-1. Every device was physically tested. Sound pressure levels were measured to ensure 65dB(A). The system was subjected to a "Black Building Test" to prove battery autonomy.

    5. Lifecycle Maintenance
    Post-handover, ignis Control System has entered into a Tier-1 Maintenance agreement, including quarterly inspections and remote monitoring via 4G gateway.

    Conclusion
    The ${id} project stands as a testament to technical excellence, providing ${client} with a future-proof safety ecosystem.
  `;
  return baseText;
};

// 22 Specific High-Quality Prompts for Main Hero Images
const specificPrompts = [
  "photorealistic modern industrial red master fire control panel server room",
  "cinematic shot of red fire sprinkler pipes on exposed concrete ceiling industrial",
  "close up macro shot of white modern smoke detector with red led light on ceiling",
  "construction worker engineer in orange hard hat inspecting fire pipes blueprint",
  "red manual fire alarm pull station on white wall modern office",
  "industrial pump room with red valves and pressure gauges fire safety",
  "emergency exit sign glowing green in dark corridor smoke fog",
  "electrician styling wiring inside sophisticated fire alarm control panel",
  "modern glass building exterior with fire safety water connection point",
  "fire safety technician holding tablet diagnostics server room",
  "red fire extinguisher cabinet stainless steel modern lobby",
  "overhead view of ceiling mounted fire suppression system sprinklers",
  "close up of fire alarm bell and strobe light industrial wall",
  "engineer pointing at digital display of fire management system",
  "copper pipes and red valves fire suppression manifold basement",
  "hvac ductwork and fire dampers industrial ceiling",
  "wireless fire alarm sensor sensor on modern hotel ceiling",
  "underground water tank fire reserve valves pipes",
  "fire safety audit checklist on clipboard construction site background",
  "smart building interface screen showing fire zones map",
  "aspirating smoke detection pipes laser sensor unit",
  "gas suppression cylinder bank fm200 red tanks server protection"
];

// Helper to get consistent images
const getProjectImages = (index, type) => {
  // Use specific prompt for hero, safe fallback if index > 21
  const mainPrompt = specificPrompts[index] || `professional fire safety engineering ${type} construction site`;

  // Deterministic seeds for gallery consistency
  const s1 = index * 10 + 1;
  const s2 = index * 10 + 2;
  const s3 = index * 10 + 3;

  return {
    hero: `https://image.pollinations.ai/prompt/${encodeURIComponent(mainPrompt + " realistic 4k")}?width=1200&height=800&nologo=true&seed=${index}`,
    gallery: [
      `https://image.pollinations.ai/prompt/${encodeURIComponent(type + " construction site fire safety wiring unfinished")}?width=800&height=600&nologo=true&seed=${s1}`,
      `https://image.pollinations.ai/prompt/${encodeURIComponent(type + " fire alarm installation engineer working detailed")}?width=800&height=600&nologo=true&seed=${s2}`,
      `https://image.pollinations.ai/prompt/${encodeURIComponent("modern professional fire safety compliance certificate " + type)}?width=800&height=600&nologo=true&seed=${s3}`
    ]
  };
};

export const projects = Array.from({ length: 22 }, (_, i) => {
  const category = ['Installation', 'Maintenance', 'Audit'][i % 3];
  const client = ['Apex Builders', 'City Council', 'Global Tech', 'HealthTrust', 'RetailGiant'][i % 5];
  const type = ['Commercial Tower', 'Residential Complex', 'Industrial Warehouse', 'Shopping Mall', 'Hospital Wing'][i % 5];
  const location = ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds'][i % 5];

  const imgs = getProjectImages(i, type);

  return {
    id: i + 1,
    title: `${client} ${type}`,
    category,
    client,
    location,
    date: `202${i % 4}-0${(i % 9) + 1}`,
    image: imgs.hero, // Main Hero Image
    gallery: imgs.gallery, // 3 Gallery Images
    description: `Comprehensive end-to-end fire safety solution for ${client}.`,
    challenge: "Retrofitting modern safety systems into an existing infrastructure without disrupting daily operations.",
    solution: "Deployed wireless sensor networks and modular pipe systems with phased migration.",
    outcome: "100% compliance with UK safety regulations, achieved BAFE certification.",
    longContent: generateCaseStudy(i + 1, type, client, location)
  };
});
