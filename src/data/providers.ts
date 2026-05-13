export interface Provider {
  name: string;
  logo: string;
  rating: number;
  reviewCount: string;
  price: string;
  tiers: string[];
  claimLimit: string;
  evCover: boolean;
  features: string[];
  pros: string;
  cons: string;
  bestFor: string;
  quoteUrl?: string;
}

export const providers: Provider[] = [
  {
    name: 'Autosure',
    logo: '🔵',
    rating: 4.6,
    reviewCount: '2,950+',
    price: '$$',
    tiers: ['Extreme Plus', 'Smart Cover'],
    claimLimit: 'Up to market value (Extreme Plus) / $5,000 (Smart Cover)',
    evCover: true,
    features: [
      'Engine, transmission & electrical',
      'EV & hybrid battery cover',
      'Unlimited 24/7 AA Roadservice',
      '700+ authorised repairers NZ-wide',
      'Towing, accommodation & rental car',
      'Covers new, used & reconditioned parts',
      'Online quotes available',
    ],
    pros: 'NZ\'s most established MBI specialist (since 1971), B++ AM Best rating, highest Google review count of any NZ MBI provider, open claim limit on Extreme Plus',
    cons: 'Repairs must use Autosure\'s authorised repairer network; full premium paid as lump sum; Smart Cover $5,000 cap may fall short of major repairs',
    bestFor: 'Most NZ vehicle owners — particularly used vehicles, Japanese imports, and European cars out of warranty',
    quoteUrl: 'https://www.autosure.co.nz/products/mechanical-breakdown-insurance/',
  },
  {
    name: 'AA Mechanical Care',
    logo: '🟡',
    rating: 4.4,
    reviewCount: 'N/A',
    price: '$$',
    tiers: ['Assist', 'Assist Plus'],
    claimLimit: 'Up to vehicle market value; EV battery $5,000–$10,000',
    evCover: true,
    features: [
      'Engine & transmission cover',
      'EV package (battery up to $10,000)',
      'Vehicles up to 20 years / 300,000 km',
      'AA roadside assistance included',
      'Accommodation & travel allowances',
      'Repatriation cover',
      'Underwritten by Autosure',
    ],
    pros: 'Trusted AA brand with extensive nationwide roadside network; covers older higher-mileage vehicles up to 20 years / 300,000 km — wider eligibility than most providers',
    cons: 'Policy is underwritten by Autosure, so essentially the same product at potentially different pricing; no direct online quote tool',
    bestFor: 'Existing AA members and owners of older or higher-mileage vehicles wanting integrated roadside and breakdown cover',
    quoteUrl: 'https://www.aa.co.nz/insurance/car-and-vehicle-insurance/mechanical-breakdown-insurance/',
  },
  {
    name: 'Assurant Vehicle Care',
    logo: '🔷',
    rating: 4.3,
    reviewCount: 'N/A',
    price: '$$$',
    tiers: ['Optimum', 'Maxi'],
    claimLimit: '$6,000–$15,000 depending on plan',
    evCover: true,
    features: [
      'Highest claim limits in NZ market',
      'Petrol, diesel & EV specific plans',
      'Diagnostic & consumable cover',
      'Optional Uber/Taxi benefit for EVs',
      'Roadside assistance',
      'Plans tailored to vehicle type',
    ],
    pros: 'Highest claim limits available (up to $15,000) — ideal for high-value vehicles; formerly traded as Protecta, strong dealer network; EV-specific plan options',
    cons: 'Premium pricing tier; primarily dealer-sold, harder to access as a direct consumer; limited EV cover eligibility conditions apply',
    bestFor: 'Owners of high-value vehicles, luxury cars, or EVs seeking maximum financial protection per claim',
    quoteUrl: 'https://www.assurant.nz/partner-with-us/vehicle-protection-services',
  },
  {
    name: 'Provident Insurance',
    logo: '🟢',
    rating: 4.4,
    reviewCount: 'N/A',
    price: '$$',
    tiers: ['Classic', 'Pinnacle'],
    claimLimit: 'Up to vehicle market value; allowances $500 (Classic) / $1,000 (Pinnacle)',
    evCover: false,
    features: [
      'Engine, transmission & electrical',
      'Roadside assistance (optional)',
      'Towing up to $200',
      'Accommodation & travel >120 km',
      'Repatriation cover',
      '100 years in insurance industry',
      'Complies with Fair Insurance Code',
    ],
    pros: 'One of NZ\'s longest-established insurers (100+ years); Pinnacle cover offers superior component list; Fair Insurance Code compliant; strong dealer relationships nationwide',
    cons: 'Does not cover electric vehicles; primarily dealer-sold; requires servicing every 10,000 km (diesel) or 15,000 km (petrol)',
    bestFor: 'New and used petrol/diesel vehicle buyers wanting a comprehensive package from a long-established NZ insurer',
    quoteUrl: 'https://www.providentinsurance.co.nz/products/mechanical-breakdown-insurance',
  },
  {
    name: 'Autolife',
    logo: '🟠',
    rating: 4.5,
    reviewCount: 'N/A',
    price: '$',
    tiers: ['Standard', 'Comprehensive'],
    claimLimit: 'Varies by component; vehicle hire $500, accommodation $1,000',
    evCover: true,
    features: [
      '96% of claims paid within 14 days',
      'Roadside assist, flat battery & fuel delivery',
      'Vehicle hire & accommodation benefits',
      'Subsidiary of Beneficial Insurance Limited',
      'Online application process',
      'Covers private & dealer sales',
    ],
    pros: 'Industry-leading 96% claims paid within 14 days; straightforward online application; competitive entry-level pricing; subsidiary of licensed NZ insurer Beneficial Limited',
    cons: 'Conditions apply for vehicles over 150,000 km; claim limits per component rather than open; less widely known than Autosure or AA',
    bestFor: 'Private vehicle buyers wanting fast claims and a straightforward, competitively priced policy without dealer involvement',
    quoteUrl: 'https://autolife.co.nz/get-quote/',
  },
  {
    name: 'Quest Insurance',
    logo: '🔴',
    rating: 4.2,
    reviewCount: 'N/A',
    price: '$',
    tiers: ['Essential', 'Extended'],
    claimLimit: 'Up to vehicle market value; emergency allowances up to $500',
    evCover: false,
    features: [
      'Kiwi-owned & operated',
      'Sudden & unexpected breakdown cover',
      'Emergency towing up to $200',
      'Accommodation for breakdowns >120 km',
      'Travel expense allowances',
      'Flexible policy terms',
      'Dealer & finance network',
    ],
    pros: 'Kiwi-owned and operated; competitive pricing for petrol/diesel vehicles; clear and streamlined claims process; over 25 years in the NZ market',
    cons: 'Limited EV and hybrid cover options; lower maximum allowances than premium tiers of other providers; smaller repairer network',
    bestFor: 'Budget-conscious owners of petrol or diesel vehicles wanting reliable essential cover from a trusted Kiwi insurer',
    quoteUrl: 'https://www.questinsurance.co.nz/our-products/',
  },
];
