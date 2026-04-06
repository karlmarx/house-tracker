export const properties = [
  {
    id: '3497-ne-20th-ave',
    address: '3497 NE 20th Avenue',
    city: 'Oakland Park', state: 'FL', zip: '33306',
    neighborhood: 'Coral Woods',
    mlsNumber: 'A11932118',
    status: 'active',
    verdict: 'strong-buy',
    verdictNote: 'Best long-term value — 3/2 with garage in low-flood-risk 33306. Negotiate to $500-525K, renovate $150-200K, build $75-150K in instant equity vs $855K comp one block away.',

    askingPrice: 619000,
    originalPrice: 689900,
    pricePerSqft: 419,
    offerRange: [500000, 525000],
    priceHistory: [
      { date: '2025-12-27', price: 689900, event: 'Listed' },
      { date: '2026-02-27', price: 669000, event: 'Price cut' },
      { date: '2026-03-16', price: 639000, event: 'Price cut' },
      { date: '2026-04-01', price: 619000, event: 'Price cut' },
    ],
    daysOnMarket: 99,

    beds: 3, baths: 2, sqft: 1478, lotSqft: 7138, yearBuilt: 1962,
    propertyType: 'Single Family',
    garage: '1-car attached',
    pool: false, poolRoom: true,
    roofType: 'Spanish tile (1962 — age is a risk)',
    acAge: 'Unknown — budget for replacement',
    solarPanels: false,
    impactWindows: true,
    impactWindowsNote: '$30K Home Depot impact windows and doors',
    hoa: null,
    listedAsIs: true,

    taxAssessed: 272580, annualTaxes: 5386,
    estimatedInsurance: '$5,000-$8,000/yr',
    floodZone: 'TBD — verify with Oakland Park Planning (954-630-4345)',
    floodRiskNote: '33306 has only 1% severe 30-year flood risk vs 85% in 33334',
    walkScore: 80, bikeScore: 31, transitScore: 85,

    isFlip: false,
    lastSalePrice: null,
    flipNote: 'Never sold on open market. Family transfer 2000 ($10K quit claim). Owner 20+ years.',

    needsRenovation: true,
    estimatedRenoCost: [150000, 250000],
    renoItems: [
      { item: 'Kitchen (full gut)', cost: '$35-45K', priority: 'critical' },
      { item: 'Bathrooms x2 (pink + turquoise vintage)', cost: '$36-50K', priority: 'critical' },
      { item: 'Terrazzo floor restoration', cost: '$6-16K', priority: 'medium' },
      { item: 'Roof (underlayment/tile)', cost: '$20-35K', priority: 'critical' },
      { item: 'A/C replacement', cost: '$8-12K', priority: 'high' },
      { item: 'Electrical update', cost: '$8-15K', priority: 'medium' },
      { item: 'Plumbing (PEX repipe)', cost: '$6-12K', priority: 'medium' },
      { item: 'Cosmetic (paint, fixtures)', cost: '$11-23K', priority: 'low' },
      { item: 'Pool addition', cost: '$45-70K', priority: 'optional' },
    ],
    afterRenoValue: [800000, 855000],
    afterRenoValueNote: 'Based on 3464 NE 19th Ave sold Oct 2025 at $855K ($581/sqft), one block away',

    comps: [
      { address: '3464 NE 19th Ave', price: 855000, sqft: 1473, ppsf: 581, date: 'Oct 2025', note: 'Renovated, one block away' },
      { address: '3389 NE 19th Ave', price: 851000, sqft: 1772, ppsf: 480, date: 'Jul 2025', note: 'Same neighborhood' },
      { address: '4687 NE 18th Ave', price: 520000, sqft: 1468, ppsf: 354, date: 'Feb 2025', note: 'Unrenovated comp' },
    ],

    nearbyHighlights: ['Mai-Kai Restaurant (steps away)', 'Coral Ridge Mall (0.5 mi)', 'Downtown Oakland Park / Funky Buddha (1 mi)', 'Wilton Drive (1.5-2 mi)', 'Fort Lauderdale Beach (2-2.5 mi)'],

    pros: [
      '3/2 — wider resale buyer pool',
      '1-car attached garage',
      'Zip 33306 — dramatically lower flood risk',
      'Walk Score 80, Transit Score 85',
      'No flip markup — authentic pricing',
      'Terrazzo floors underneath — premium restoration asset',
      'Florida Room with double impact sliders — great indoor-outdoor flow',
      'Impact windows ($30K value)',
      'Private entrance on primary BR — rental income potential',
      'Room for pool',
    ],
    cons: [
      'Needs $150-250K renovation',
      'Listed as-is — no repair negotiation',
      'Vintage 1962 bathrooms',
      'Roof age unknown — may need full replacement',
      'Requires renovation loan (FHA 203k or HomeStyle)',
      '99 days on market — prior buyers may have walked after inspection',
    ],

    backyardNotes: 'Florida Room with double impact sliders opens to backyard. ~30-35\' deep, flat grass, palm trees on west side. Brick stepping stones. Chain-link fencing. Neighbor to east has pool.',
    poolOptions: [
      { name: 'Classic pool + side patio', poolSize: '26\'x15\'', cost: '~$65K', note: 'Centered behind FL room sliders' },
      { name: 'Lap pool + full deck', poolSize: '40\'x16\'', cost: '~$88K', note: 'Best for exercise' },
      { name: 'Plunge + outdoor kitchen + dog run', poolSize: '20\'x14\'', cost: '~$70K', note: 'Best balance of everything' },
    ],

    poolConcepts: [
      { src: '/photos/3497-ne-20th-ave/pool-concepts/option1-classic-pool.png', caption: 'Concept: Classic pool behind FL room sliders with patio dining', option: 1 },
      { src: '/photos/3497-ne-20th-ave/pool-concepts/option3-plunge-outdoor-kitchen.png', caption: 'Concept: Plunge pool + outdoor kitchen with pergola and string lights', option: 3 },
      { src: '/photos/3497-ne-20th-ave/pool-concepts/aerial-pool-concept-1.png', caption: 'Aerial concept: Pool placement behind house — lot boundary shown', option: 0 },
      { src: '/photos/3497-ne-20th-ave/pool-concepts/aerial-pool-concept-2.png', caption: 'Aerial concept: Pool + deck behind house — neighbors have pools', option: 0 },
    ],

    photos: [
      { src: '/photos/3497-ne-20th-ave/09-front-exterior.jpg', caption: 'Front exterior — Spanish tile roof, 1-car garage, circular driveway' },
      { src: '/photos/3497-ne-20th-ave/08-aerial.jpg', caption: 'Aerial view — lot boundary, backyard open space, neighbors have pools' },
      { src: '/photos/3497-ne-20th-ave/04-living-room-checkerboard.jpg', caption: 'Living room — black/white checkerboard tile (terrazzo underneath), mirrored wall' },
      { src: '/photos/3497-ne-20th-ave/05-florida-room.jpg', caption: 'Florida Room — painted concrete floor, impact sliders to backyard' },
      { src: '/photos/3497-ne-20th-ave/06-backyard-sliders.jpg', caption: 'Backyard from yard — double impact sliders, brick stepping stones' },
      { src: '/photos/3497-ne-20th-ave/07-backyard-corner.jpg', caption: 'Backyard corner view — full yard depth, mature landscaping' },
      { src: '/photos/3497-ne-20th-ave/01-primary-bedroom.jpg', caption: 'Primary bedroom — laminate floor, private exterior entrance, en-suite' },
      { src: '/photos/3497-ne-20th-ave/02-bathroom-pink.jpg', caption: 'Primary bath — original 1962 pink fixtures (needs full reno)' },
      { src: '/photos/3497-ne-20th-ave/03-bathroom-turquoise.jpg', caption: 'Hall bath — original 1962 turquoise fixtures (needs full reno)' },
    ],

    agent: { name: 'Aaron Burke', email: 'Aaron@aaronburkesells.com', phone: '954-632-0344' },
    financingNote: '$500-525K purchase + $175K reno = $675-700K. Fits $700K pre-approval with HomeStyle loan. After-reno appraisal $800K+ supports LTV.',
    strategy: 'Offer $510K. Seller motivated (99 days, 3 cuts, as-is). Anchor to $354/sqft unrenovated comp. Request 15-day inspection — as-is still allows walk-away in FL.',

    hasSitePlan: true,

    equityAnalysis: {
      purchasePrice: 510000,
      renoCost: 175000,
      totalInvestment: 685000,
      afterRenoValue: 827500,
      instantEquity: 142500,
      equityPercent: 21,
      note: 'Based on $855K comp one block away. Even conservative $800K appraisal yields $115K equity.',
    },

    monthlyBreakdown: {
      mortgage: 4200,
      taxes: 449,
      insurance: 542,
      total: 5191,
      note: 'HomeStyle 30yr @ 6.8% on $685K (purchase + reno). Tax est based on current $5,386/yr. Insurance mid-range est.',
    },

    recommendation: 'Best long-term value play. The 3/2 layout with garage gives you the widest resale buyer pool. Zip 33306 has dramatically lower flood risk than 33334. The renovation is real work, but the $855K comp one block away proves the upside. Offer on this simultaneously with 40th St — the 20th Ave seller is far more motivated (99 days, three price cuts, listed as-is).',

    addedDate: '2026-04-05',
    lastUpdated: '2026-04-05',
  },

  {
    id: '1741-ne-40th-st',
    address: '1741 NE 40th Street',
    city: 'Oakland Park', state: 'FL', zip: '33334',
    neighborhood: 'Coral Heights',
    mlsNumber: 'F10554596',
    status: 'active',
    verdict: 'consider',
    verdictNote: 'Move-in ready flip with stunning spa bathroom and great backyard. But $535/sqft is steep for a 2-bed with carport. Don\'t pay over $575K.',

    askingPrice: 639000,
    originalPrice: 649000,
    pricePerSqft: 535,
    offerRange: [555000, 575000],
    priceHistory: [
      { date: '2026-02-28', price: 649000, event: 'Listed' },
      { date: '2026-04-01', price: 639000, event: 'Price cut' },
    ],
    daysOnMarket: 36,

    beds: 2, baths: 2, sqft: 1194, lotSqft: 7500, yearBuilt: 1957,
    propertyType: 'Single Family',
    garage: 'Carport (open-sided)',
    pool: false, poolRoom: true,
    roofType: 'New 2024 roof',
    acAge: '2022 (4 years old)',
    solarPanels: true,
    solarNote: 'Fully paid off 2024 system — near-zero electricity',
    impactWindows: true,
    hoa: null, listedAsIs: false,

    taxAssessed: null, annualTaxes: null,
    estimatedInsurance: '$5,000-$8,000/yr',
    floodZone: 'TBD — 33334 has 85% properties in 30-year flood risk',
    floodRiskNote: 'High flood risk zip — confirm exact zone and get insurance quotes BEFORE offering',
    walkScore: 69, bikeScore: null, transitScore: null,

    isFlip: true,
    lastSalePrice: 400000,
    lastSaleDate: '2025-11-01',
    flipNote: 'Purchased ~$400K Nov 2025 (MLS# F10285265). Relisted at $649K — 60% markup. Renovation quality is genuinely high (spa bath, quartz kitchen) but buyer pays flipper profit.',

    needsRenovation: false,
    estimatedRenoCost: [0, 0],
    renoItems: [],
    afterRenoValue: null,
    afterRenoValueNote: 'Already renovated. Fair value based on comps: $560-600K.',

    comps: [
      { address: '1310 NE 40th St', price: 541000, sqft: 1417, ppsf: 382, date: 'May 2025', note: '4/3, larger' },
      { address: '1547 NE 39th St', price: 625000, sqft: 1500, ppsf: 417, date: 'Nov 2025', note: '3/2' },
      { address: '251 NE 40th Ct', price: 637000, sqft: 1650, ppsf: 386, date: 'Recent', note: '4/2, much larger' },
      { address: '3820 NE 16th Ter', price: 720000, sqft: 1202, ppsf: 599, date: 'May 2025', note: '2/1, best size comp' },
    ],

    nearbyHighlights: ['Wilton Drive (1.5 mi)', 'Downtown Oakland Park / Funky Buddha (< 1 mi)', 'Fort Lauderdale Beach (2.5-3 mi)', 'I-95 (1.5 mi)'],

    pros: [
      'Fully renovated — move in day one',
      'Stunning spa bathroom (freestanding tub, rain shower, teak ceiling)',
      'New 2024 roof',
      'Paid-off solar panels',
      'New 2022 A/C',
      'Open-concept kitchen with quartz island',
      'Largest backyard (3,500+ sqft), fully privacy-fenced both sides',
      'Impact windows throughout',
      'Existing patio for pool expansion',
    ],
    cons: [
      'Only 2 bedrooms — limits resale pool',
      'Carport, not garage',
      '$535/sqft — 85th percentile for area',
      'Confirmed flip: $400K → $639K (60% markup)',
      'Zip 33334 — higher flood risk',
      'Walk Score 69 (lower)',
      '1,194 sqft competes with 3-bed homes',
    ],

    backyardNotes: '~3,500-4,000 sqft flat, fully privacy-fenced (PVC west, wood east). Existing concrete patio with slider. Complete blank canvas — no trees or obstructions. Biggest yard of the two.',
    poolOptions: [
      { name: 'Pool + covered patio', poolSize: '28\'x18\'', cost: '~$73K', note: 'Slider → patio → pool' },
      { name: 'Resort pool + full deck', poolSize: '46\'x20\'', cost: '~$102K', note: 'Max water area' },
      { name: 'Plunge + work patio + dog yard', poolSize: '20\'x16\'', cost: '~$75K', note: 'WFH outdoor office + pool + dog run' },
    ],

    poolConcepts: [
      { src: '/photos/1741-ne-40th-st/pool-concepts/option1-pool-covered-patio.png', caption: 'Concept: Pool + travertine deck with covered patio, solar panels visible', option: 1 },
      { src: '/photos/1741-ne-40th-st/pool-concepts/option3-plunge-work-patio.png', caption: 'Concept: Plunge pool + covered WFH patio with desk, privacy fences', option: 3 },
    ],

    photos: [
      { src: '/photos/1741-ne-40th-st/01-front-exterior-solar.jpg', caption: 'Front — solar panels, carport on left, impact windows, new roof' },
      { src: '/photos/1741-ne-40th-st/02-backyard-patio.jpg', caption: 'Backyard — existing patio, privacy fences both sides, huge open yard' },
      { src: '/photos/1741-ne-40th-st/03-living-room-slider.jpg', caption: 'Living room — slider to backyard patio, open concept to kitchen' },
      { src: '/photos/1741-ne-40th-st/07-living-kitchen-open.jpg', caption: 'Open plan — kitchen island, dining, living with slider views' },
      { src: '/photos/1741-ne-40th-st/08-kitchen-detail.jpg', caption: 'Kitchen — dark shaker cabinets, quartz counters, LG stainless' },
      { src: '/photos/1741-ne-40th-st/09-kitchen-island.jpg', caption: 'Kitchen island with bar seating, pendant lights' },
      { src: '/photos/1741-ne-40th-st/05-spa-bathroom-tub.jpg', caption: 'Primary bath — freestanding tub, rain shower, teak ceiling/walls' },
      { src: '/photos/1741-ne-40th-st/06-spa-bathroom-wide.jpg', caption: 'Primary bath wide — sage walls, mosaic floor, walnut vanity' },
      { src: '/photos/1741-ne-40th-st/04-bedroom-office.jpg', caption: 'Second bedroom (staged as office) — en-suite visible' },
    ],

    agent: { name: 'Felipe Aragon', email: null, phone: null },
    financingNote: 'Conventional loan at $555-575K — well within $700K. Add pool later via HELOC.',
    strategy: 'Offer $565K. Reference $400K purchase price (public record) and 2-bed limitation. Flipper has ~$160-180K in reno — at $565K they still profit $25-45K.',

    hasSitePlan: true,

    equityAnalysis: {
      purchasePrice: 565000,
      renoCost: 0,
      totalInvestment: 565000,
      afterRenoValue: 580000,
      instantEquity: 15000,
      equityPercent: 3,
      note: 'Already renovated. Fair market value est $560-600K based on comps. At $565K you\'re buying near fair value — limited upside until you add a pool.',
    },

    monthlyBreakdown: {
      mortgage: 3400,
      taxes: 375,
      insurance: 542,
      total: 4317,
      note: 'Conventional 30yr @ 6.8% on $565K. Tax est pending reassessment after sale. Insurance mid-range.',
    },

    flipProfitAnalysis: {
      purchasePrice: 400000,
      renoEstimate: 180000,
      totalFlipperCost: 580000,
      askingPrice: 639000,
      flipperProfit: 59000,
      atYourOffer: 565000,
      flipperProfitAtOffer: -15000,
      note: 'At $565K the flipper roughly breaks even or takes a small loss. They may counter. At $575K they net ~$0-15K — enough to make them walk away from the project. Use the 2-bed limitation and $400K public record as leverage.',
    },

    recommendation: 'The move-in-ready option. That spa bathroom and kitchen are genuinely high quality — not a lipstick flip. But at $535/sqft you\'re paying top-of-market for a 2-bed with a carport. The value is in the massive backyard (3,500+ sqft) and the paid-off solar/new roof — your carrying costs will be lower. Don\'t pay over $575K. Offer simultaneously with 20th Ave.',

    addedDate: '2026-04-05',
    lastUpdated: '2026-04-05',
  },
];
