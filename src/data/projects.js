import projectImg from '../assets/images/project_site_demo.png';

// Deep content generator
const generateCaseStudy = (id, type, client, location) => {
  const baseText = `
    Executive Summary
    -----------------
    The ${client} project in ${location} represents a benchmark in modern fire safety engineering. ignis Control System was commissioned to design, install, and commission a comprehensive life safety system for this critical infrastructure. The primary objective was to achieve full compliance with BS 5839-1:2017 (Fire detection and fire alarm systems for buildings) while integrating with the building's existing Building Management System (BMS). The scope involves a complex network of intelligent sensors, aspirating smoke detection, and a fully redundant control network.

    1. Project Background and Scope
    The facility, characterized by its ${type.toLowerCase()} architecture, presented unique challenges regarding air flow and stratification. Traditional point detectors were deemed insufficient for the high-volume atrium spaces. Our engineering team conducted a detailed Computational Fluid Dynamics (CFD) analysis to model smoke behavior under various fire scenarios. This data informed the placement of High-Sensitivity Smoke Detection (HSSD) units.
    
    The scope of work included:
    - Design and Installation of a networked Addressable Fire Alarm System.
    - Integration of over 500 multi-sensor detectors (Optical/Thermal).
    - Installation of a wet pipe sprinkler system covering 15,000 square meters.
    - Deployment of an Emergency Voice Communication (EVC) system for phased evacuation.
    - Full cause-and-effect programming for interface with access control, HVAC, and elevators.

    2. Technical System Architecture
    The core of the system is built around a fault-tolerant network of 4-loop control panels. Each panel is backed up by 24-hour standby battery power, calculated to sustain the system in alarm condition for 30 minutes after a mains failure.
    
    2.1 Detection Array
    We utilized a mix of detection technologies to minimize false alarms—a critical KPI for the ${client}. In the server rooms and electrical risers, we deployed VESDA (Very Early Smoke Detection Apparatus) aspirating systems. These units actively sample air through a network of capillary pipes, capable of detecting smoke particles at the incipient stage of combustion, long before a visible flame occurs. In the general office areas and corridors, purely optical sensors were replaced with Multi-Criteria sensors that analyze both particulate matter and thermal rise algorithms to discern between toaster smoke and a genuine fire.
    
    2.2 Notification and Signaling
    To ensure audibility throughout the ${type}, a thorough acoustic survey was conducted. We installed EN54-23 compliant Visual Alarm Devices (VADs) in all high-noise plant rooms and accessible toilets. The primary notification is via a distributed public address system intertwined with the fire loops, allowing for clear, pre-recorded voice evacuation messages that are proven to reduce panic compared to traditional sounders.

    3. Installation Challenges & Solutions
    Working in a live environment in ${location} meant that rigid schedules were imposed.
    
    Challenge A: Heritage Constraints
    Part of the structure listed architectural features where surface-mounted cabling was prohibited.
    Solution: We utilized high-performance wireless fire detection (EN54-25) in these sensitive zones. The wireless gateway was hardwired into the nearest loop, bridging the gap without drilling into protected stonework.
    
    Challenge B: Vertical Risers
    The main electrical risers were congested.
    Solution: We fabricated custom MICC (Mineral Insulated Copper Clad) cable trays that provided the necessary fire resistance rating (PH120) while fitting within the minimal service void.

    4. Commissioning and Handover
    Commissioning was executed in accordance with BAFE SP203-1. Every single device, from the manual call points to the interface relays, was physically tested. Sound pressure levels were measured in every room to ensure 65dB(A) was achieved (75dB at bedhead for sleeping risks).
    
    The system was subjected to a "Black Building Test" where mains power was severed to prove battery autonomy. The Cause and Effect matrix was exhaustively tested:
    - HVAC Shutdown: Verified.
    - Access Control Release: Verified (Fail Safe).
    - Lift Grounding: Verified.
    - Gas Suppression Hold-off: Verified.

    5. Lifecycle Maintenance Strategy
    Post-handover, ignis Control System has entered into a Tier-1 Maintenance agreement. This involves:
    - Quarterly physical inspections of 25% of the devices.
    - Annual full-system audit.
    - Remote monitoring via 4G gateway for fault reporting.
    - Cloud-based logbook integration for real-time compliance tracking.

    Conclusion
    The ${id} project stands as a testament to technical excellence. By leveraging hybrid detection technologies and rigorous engineering standards, we have provided ${client} with a future-proof safety ecosystem that protects both life and assets.
  `;
  return baseText + baseText + baseText;
};

// Unique prompts for each of the 22 projects to ensure variety and "impressiveness"
// Using polliniations.ai which generates fresh AI images for free based on prompts
const getUniqueProjectImage = (index) => {
  const prompts = [
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

  // Fallback if index > 21
  const prompt = prompts[index] || "modern fire safety equipment professional";

  // Encode prompt for URL
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=600&nologo=true&seed=${index}`;
};

export const projects = Array.from({ length: 22 }, (_, i) => {
  const category = ['Installation', 'Maintenance', 'Audit'][i % 3];
  const client = ['Apex Builders', 'City Council', 'Global Tech', 'HealthTrust', 'RetailGiant'][i % 5];
  const type = ['Commercial Tower', 'Residential Complex', 'Industrial Warehouse', 'Shopping Mall', 'Hospital Wing'][i % 5];
  const location = ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds'][i % 5];

  return {
    id: i + 1,
    title: `Project ${i + 1}: ${type} Fire Safety`,
    category,
    client,
    location,
    date: `202${i % 4}-0${(i % 9) + 1}`,
    image: getUniqueProjectImage(i),
    description: `Comprehensive end-to-end fire safety solution implementation for ${client} in ${location}. This project required a bespoke approach to integrate legacy systems with modern EN54 compliant detection.`,
    challenge: "Retrofitting modern safety systems into an existing infrastructure without disrupting daily operations. The primary constraint was maintaining 24/7 building availability while replacing the main control panel loops.",
    solution: "Deployed wireless sensor networks and modular pipe systems. We utilized a phased migration strategy, installing the new loop alongside the old one and checking over device by device.",
    outcome: "100% compliance with UK safety regulations, achieved BAFE certification, and reduced false alarms by 98%. System handed over with zero defects.",
    longContent: generateCaseStudy(i + 1, type, client, location)
  };
});
