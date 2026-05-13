export interface CoverageType {
  slug: string;
  title: string;
  icon: string;
  description: string;
  details: string;
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'comprehensive',
    title: 'Comprehensive Breakdown Insurance',
    icon: '🛡️',
    description: 'The broadest mechanical breakdown cover available — engine, transmission, electrical and more.',
    details: 'Comprehensive Mechanical Breakdown Insurance (breakdown insurance) covers the widest range of mechanical and electrical failures. This typically includes the engine (internal components, gaskets, seals), transmission and gearbox, cooling system, fuel injection and management systems, braking systems, steering components, drive axles, electrical systems and wiring, air conditioning, central locking and windows. When an unexpected part fails outside of manufacturer warranty, your comprehensive breakdown insurance policy pays for parts and labour at approved repair facilities nationwide. Most comprehensive policies also include roadside assistance, towing costs, and daily rental car cover if your vehicle is immobilised for repairs. This is the preferred choice for Kiwi vehicle owners who want total peace of mind against costly repair bills.',
  },
  {
    slug: 'drivetrain',
    title: 'Drivetrain & Transmission',
    icon: '⚙️',
    description: 'Targeted cover for the most expensive mechanical repairs — gearbox, driveshafts, and differentials.',
    details: 'Drivetrain and transmission failures are among the most expensive vehicle repairs, often exceeding $5,000–$15,000. This targeted breakdown insurance cover specifically protects the transmission (automatic and manual gearboxes), transfer case and 4WD components, front and rear differentials, driveshafts and CV joints, propeller shafts, and torque converters. Drivetrain failures can happen suddenly and without warning — often caused by internal wear rather than driver error. This policy type is ideal for owners of SUVs, 4WDs, utes, and older vehicles where drivetrain replacement costs are disproportionately high relative to the vehicle\'s value. Cover typically includes parts and labour at approved workshops across NZ, with many policies also including a courtesy vehicle during repairs.',
  },
  {
    slug: 'electrical',
    title: 'Electrical Systems Cover',
    icon: '⚡',
    description: 'Protection against modern vehicle electrical failures — sensors, ECUs, central locking, and more.',
    details: 'Modern vehicles are packed with electronic systems that can fail unexpectedly. Electrical systems breakdown insurance cover protects the engine management unit (ECU), fuel injection sensors and components, ABS control modules, airbag controllers, central locking mechanisms, electric window motors and regulators, infotainment and navigation systems, alternators and starters, power steering modules, and electronic throttle controls. Electrical faults are notoriously difficult to diagnose and expensive to repair — labour costs alone can exceed $1,000 before any parts are replaced. As vehicles become increasingly "digital", electrical cover is no longer a luxury but a necessity. This policy is particularly valuable for Japanese import vehicles, which can have complex proprietary electronics that require specialist diagnostics.',
  },
  {
    slug: 'ev-hybrid',
    title: 'EV & Hybrid Battery Cover',
    icon: '🔋',
    description: 'Specialised mechanical breakdown cover for electric vehicle traction batteries and hybrid drive systems.',
    details: 'As New Zealand\'s EV and hybrid fleet grows rapidly, so does the need for specialised breakdown protection. EV and hybrid battery breakdown insurance covers traction battery pack replacement or repair (often a $15,000–$30,000+ cost), battery management systems (BMS), electric motor and inverter components, regenerative braking systems, on-board charging systems (OBC), hybrid drive controllers, and thermal management systems. Standard breakdown insurance policies often exclude EV batteries or provide limited cover. This specialised policy fills that gap, providing comprehensive protection for EV-specific components that fall outside standard vehicle warranties. New Zealand\'s growing charging infrastructure means EVs are becoming practical for most households — but battery replacement costs remain the primary financial risk EV owners face. This policy mitigates that risk directly.',
  },
  {
    slug: 'roadside-assistance',
    title: 'Roadside Assistance',
    icon: '🚗',
    description: '24/7 emergency roadside help anywhere in NZ — towing, battery, tyres, lockout and more.',
    details: 'Roadside assistance as part of breakdown insurance cover means you\'re never truly stranded. This benefit typically includes 24/7 emergency callout anywhere in the country, towing to the nearest approved repairer, on-site assistance for flat tyres, battery jumpstarts, fuel delivery if you run out, vehicle lockout assistance, and temporary windscreen repairs. Many breakdown insurance policies with roadside assistance also include accommodation cover if you break down more than 100km from home, as well as return travel expenses. Roadside assistance is often available as a standalone add-on to your existing breakdown insurance policy or included as standard in comprehensive cover. In New Zealand\'s remote areas and on long highway journeys, having roadside support can be the difference between a minor inconvenience and a very expensive, stressful situation.',
  },
  {
    slug: 'extended-warranty',
    title: 'Extended Warranty',
    icon: '📋',
    description: 'Manufacturer-style protection beyond the standard warranty period — ideal for used car buyers.',
    details: 'An extended warranty (sometimes called a Used Car Warranty or Vehicle Protection Plan) functions similarly to a manufacturer warranty but is provided by an independent insurer. This cover is typically sold through car dealers at point of purchase for vehicles exiting factory warranty. Extended warranties here cover most mechanical and electrical components, excluding wear items like tyres, brakes, and oil. The key advantages over standard breakdown insurance include dealer-arranged repairs at franchised service centres, no requirement for a Warrant of Fitness prior to cover, and bundling with GAP (guaranteed asset protection) insurance. Extended warranties are available for terms of 1–4 years and can be transferred to a new owner if the vehicle is sold, potentially adding resale value. If you\'ve purchased a used vehicle from a local dealer and want factory-equivalent protection, an extended warranty is worth considering.',
  },
];
