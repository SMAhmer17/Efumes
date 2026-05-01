export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  colorClass: string;
  bgClass: string;
  heroImage: string;
  description: string;
  whyItMatters: string;
  benefits: string[];
  process: ServiceProcess[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "general-fumigation",
    title: "General Fumigation",
    subtitle: "Comprehensive protection against crawling and flying insects.",
    icon: "pest_control",
    colorClass: "text-primary-container",
    bgClass: "bg-primary-container/10",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0IbK_RdaspRSc1IFNQMer_wtMFS1Ogi-dTB1ZMmBZ9bvabt3c3ClIxGpVGtXHmndKiH3MYQwzauiJC5ZsgNcmjvKpetIrqL32n_VXHHjGblaAv58VI2ww57Vacp_sCxV1A0NQdh7m-Q7prtaiQjgzTP_hgOxF8t04AUPWO4dI1guMp7GS7kLfl1Lq6qF-oFAru5w1u6YSicxnyyFBHAVu9j4EAbbryjp50Y6utGi3lJA_hz8H7glahQ_ZOyyErhxsCA-2AFIoog",
    description: "Our General Fumigation service provides an all-encompassing shield for your property. Utilizing advanced micro-encapsulated formulas, we target the biological life cycle of common household pests—including cockroaches, mosquitoes, ants, and spiders—ensuring immediate eradication and long-term residual protection.",
    whyItMatters: "Common household pests are not just a nuisance; they are vectors for diseases such as Salmonella, E. Coli, and Dengue. A minor infestation can quickly multiply into a severe health hazard, compromising the hygiene of your living or working environment.",
    benefits: [
      "Eliminates 99.9% of crawling and flying insects.",
      "Eco-friendly formulas safe for pets and children.",
      "Odorless treatment with zero toxic residue.",
      "Long-lasting residual barrier prevents re-infestation."
    ],
    process: [
      { step: 1, title: "Inspection", description: "Comprehensive audit of the premises to identify nesting areas, entry points, and infestation severity." },
      { step: 2, title: "Targeted Application", description: "Strategic application of EPA-approved fumigants focusing on cracks, crevices, and high-risk zones." },
      { step: 3, title: "Barrier Establishment", description: "Application of a residual chemical barrier around the perimeter to prevent future incursions." }
    ]
  },
  {
    slug: "bed-bug",
    title: "Bed Bug Treatment",
    subtitle: "Complete eradication of bed bugs through thermal and chemical precision.",
    icon: "hotel",
    colorClass: "text-secondary",
    bgClass: "bg-secondary-container/20",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmG_wYXSeeItKUA9BU3uOjCA95Ck-qIB6MrdMcpOWF78PLWQbES7amf3WxaZ5sKYUJyo-YBqv1NssJjYsITFtvCPB4D1e2N0gQA88wMIzUIDWSmwr-RVgzczA9yp1xcWN6OztiAEEvqoV87PE0ry33IQbWY1YASfRT7Mlzn4RTRU9mK6ji6ql3LK_fjLwx2rPoSryoe_5g6E2DAeSQaMNqiTrZqyo8S_GKk9-seV7y7aa6iZWIlBctGMTF7MQ1fNJmRlmGOe7qTA",
    description: "Bed bugs are notoriously resilient. We deploy a dual-action approach combining localized heat treatments with specialized insect growth regulators (IGRs). This method not only eliminates adult bed bugs but also destroys eggs and nymphs, breaking the breeding cycle entirely.",
    whyItMatters: "Bed bugs cause severe psychological distress, sleep deprivation, and allergic skin reactions. Due to their rapid reproductive rate and ability to hide in microscopic crevices, DIY treatments are almost universally ineffective and can exacerbate the spread.",
    benefits: [
      "Total eradication of adults, nymphs, and eggs.",
      "Non-destructive treatment safe for mattresses and furniture.",
      "Rapid intervention to restore your peace of mind.",
      "Post-treatment monitoring to guarantee success."
    ],
    process: [
      { step: 1, title: "Detection", description: "Thorough inspection of mattresses, bed frames, skirting boards, and furniture joints." },
      { step: 2, title: "Dual-Action Treatment", description: "Deployment of high-temperature steam and targeted chemical application to deep-seated harborages." },
      { step: 3, title: "Verification", description: "Follow-up inspection after 14 days to ensure complete eradication of the breeding cycle." }
    ]
  },
  {
    slug: "rodent",
    title: "Rodent Treatment",
    subtitle: "Advanced exclusion and eradication strategies for rats and mice.",
    icon: "mouse",
    colorClass: "text-primary-container",
    bgClass: "bg-primary-container/10",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLAtYm3YltFKNRsIdpeB06dJd_Lf7SpRnpUHss2WU_5F4zSBJfA6CC1bVHyQIod2eWbMHIZJUT2-U5pI8VErJFJ2Ohf0d7Pn6tP4etYpuBvSuEM8nvvMa9JRwBW1FI5x6HRW0ZCaXUitFY6LzSNK7fjvkX3fgShDhZ32WKa_p-BGyKqTzG4q9byGcj4cHQmlJhlcsNjTfMiMKlJAdKLWv_mPT4ayWonRdSs0vju7tcUhqRxsFym-BiJwN-rW02LXva3yEUx78nLA",
    description: "Our rodent control program goes beyond simple trapping. We utilize an integrated pest management (IPM) strategy that involves population reduction via tamper-resistant bait stations, advanced trapping technology, and structural exclusion to permanently seal your property.",
    whyItMatters: "Rodents are highly destructive. They chew through electrical wiring (causing fire hazards), damage structural insulation, and contaminate food sources. They are also primary carriers of severe diseases such as Leptospirosis and Hantavirus.",
    benefits: [
      "Immediate reduction in rodent activity.",
      "Tamper-proof bait stations safe around children and pets.",
      "Identification and sealing of structural vulnerabilities.",
      "Sanitization of contaminated areas."
    ],
    process: [
      { step: 1, title: "Vulnerability Audit", description: "Identifying nesting sites, food sources, and structural entry points as small as a quarter-inch." },
      { step: 2, title: "Eradication", description: "Strategic placement of traps and secure bait stations to rapidly reduce the population." },
      { step: 3, title: "Exclusion & Sanitization", description: "Sealing entry points with rodent-proof materials and sanitizing droppings." }
    ]
  },
  {
    slug: "termite",
    title: "Termite Treatment",
    subtitle: "Subterranean liquid barriers for permanent structural protection.",
    icon: "foundation",
    colorClass: "text-primary-container",
    bgClass: "bg-primary-container/10",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoK_LNxv5JyXRuV1J4FaJaqJAn8_ajaFbS-v--Tk4W3LYkFbWJusHsRd5lq0XzmMzyaBmS-9_PnmxZfMqpccCkvgK6iElarYS_VT5J2eDSe-hag29YKrgC1g5nkKj1F-faXc-GZwOsL7kdOAhAxC3tZsdf-pG2PLBvrPlkxViLrDQVsRIq5UAfqDaPVi7US13HRr3DrqVTC4T89Cree_XtPepTYMqUDtGR0ocKoqmwzXRasiwuRm2XYw6v4OvL69njZRLuZ-KI5g",
    description: "Termites require aggressive, specialized intervention. We implement an undetectable continuous liquid chemical barrier around the perimeter and foundation of your property. Termites unknowingly pass through this zone, carry the termiticide back to the colony, and collapse it from within.",
    whyItMatters: "Termites are the most financially destructive pest in the world, causing billions in property damage annually. They silently devour the wooden framework of buildings from the inside out, often going undetected until severe structural compromise has occurred.",
    benefits: [
      "Total colony collapse via the 'Transfer Effect'.",
      "Decades of continuous subterranean protection.",
      "Preservation of your property's structural integrity.",
      "Fully warranted service with routine monitoring."
    ],
    process: [
      { step: 1, title: "Structural Assessment", description: "Thermal and acoustic scanning to detect active subterranean or drywood termite colonies." },
      { step: 2, title: "Trenching & Drilling", description: "Creating access points along the foundation to inject the liquid termiticide deep into the soil." },
      { step: 3, title: "Barrier Injection", description: "Saturating the foundation perimeter to create an unbreakable, undetectable chemical shield." }
    ]
  },
  {
    slug: "termite-spray",
    title: "Termite Spray",
    subtitle: "Preventative surface protection for exposed wooden structures.",
    icon: "spray",
    colorClass: "text-primary-container",
    bgClass: "bg-primary-container/10",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUEBAsd7em7c60G-DMgdX0Jemb2BWl3ZoJeUQJ_lsmLyKrTUQaqz4Nsg0ip3WE8Gx90HKwnrU30WonDKLO4rpoiPPYu2xdcz3jQdAq2RhCmeYo2bbXaIfGkO5RcFo7_w5F_4mxwQl1YnTqNWW9_e6jjpkxJQdqEB0kCEc2fuFx84ayu8dFrcs7eEUG_FHii1rI1ppsa-1zw6P7sKnsSicSWKgCMNfmbnIAz-VotY_7wKrFthL25ti1eP_AZmgBTulBgB3A8R7TJA",
    description: "Our Termite Spray service is designed as a highly effective preventative measure and localized treatment for drywood termites. We apply industrial-grade borate solutions directly to raw wood, creating an inhospitable environment that prevents termites from feeding or nesting.",
    whyItMatters: "While subterranean treatments protect the foundation, exposed wooden structures (like attics, decks, and sheds) remain vulnerable to flying swarmers. Pre-treating raw wood significantly reduces the risk of future localized infestations.",
    benefits: [
      "Deep penetration into wood fibers for lasting defense.",
      "Prevents drywood termites and wood-boring beetles.",
      "Cost-effective preventative measure for new construction.",
      "Non-toxic to humans once dried."
    ],
    process: [
      { step: 1, title: "Surface Preparation", description: "Cleaning exposed wooden surfaces to ensure maximum absorption of the chemical treatment." },
      { step: 2, title: "Borate Application", description: "High-pressure spraying of borate solutions directly onto the raw wood framing." },
      { step: 3, title: "Curing & Sealing", description: "Allowing the solution to penetrate and crystalize within the wood fibers, creating a permanent defense." }
    ]
  },
  {
    slug: "disinfection",
    title: "Disinfection Spray",
    subtitle: "Hospital-grade sanitation for complete biological safety.",
    icon: "sanitizer",
    colorClass: "text-secondary",
    bgClass: "bg-secondary-container/20",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMPl9dOm7MJCdjUJI_4x29Y4sf88QO5Hv4jBBr5f81VcTIvf7oixVjM3KZGJgwqXzbdilgbAcDZxyskpgMSuoxRorWjVkGXxmbMZ6HBeQDFYORdI6xFyoB6TgnlO03g5hQ6uacE3O9gsPWuTPr8Sm3BRORyzczwMo69oJ1M8PGr4XTbbjivG83uLo5Xx1QnkgXzNHsIZ39yu5O_CG_KQ9M1QCum_WDF49tXBpl0CmNzr8Zndi1U1-CFyE4lxY-5Q1iy-uoMbtPCA",
    description: "Our Disinfection Spray service utilizes Ultra-Low Volume (ULV) cold fogging technology to disperse EPA-registered, hospital-grade disinfectants. The microscopic droplets remain suspended in the air, wrapping around surfaces and penetrating hard-to-reach areas to neutralize airborne and surface-level pathogens.",
    whyItMatters: "High-traffic areas, offices, and homes post-illness harbor millions of invisible pathogens. Standard cleaning only removes visible dirt. True disinfection is required to break the chain of infection from viruses, bacteria, and fungal spores.",
    benefits: [
      "Kills 99.99% of viruses (including Coronaviruses) and bacteria.",
      "ULV fogging reaches areas impossible to wipe manually.",
      "Safe for electronics, fabrics, and food preparation surfaces.",
      "Leaves zero residue or harsh chemical odors."
    ],
    process: [
      { step: 1, title: "Area Preparation", description: "Securing the premises and removing any loose papers or sensitive items." },
      { step: 2, title: "ULV Fogging", description: "Dispersing the disinfectant aerosol throughout the volume of the space." },
      { step: 3, title: "Settling & Ventilation", description: "Allowing the mist to settle onto all surfaces, followed by safe ventilation of the area." }
    ]
  }
];
