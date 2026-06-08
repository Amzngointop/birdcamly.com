export interface Product {
  id: string;
  name: string;
  articleSlug: string;
  rank: number;
  asin: string;
  imageUrl: string;
  affiliateLink: string;
  bestFor: string;
  pros: [string, string, string];
  cons: [string, string];
  badge?: "Editor's Choice" | "Best Value" | "Top Rated" | "Budget Pick";
  description: string;
}

export const products: Product[] = [
  // ── BEST SMART BIRD FEEDER CAMERAS ──────────────────────────────
  {
    id: "sm-1",
    name: "Smart Bird Feeder with Camera Solar Powered, 2K HD Video, AI Bird Species Identification, Red",
    articleSlug: "best-smart-bird-feeder-cameras",
    rank: 1,
    asin: "B0DSDFV4Z2",
    imageUrl: "https://m.media-amazon.com/images/I/81HFXazgvLL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0DSDFV4Z2?tag=YOURTAG-20",
    bestFor: "Best Overall Smart Feeder Camera",
    badge: "Editor's Choice",
    description:
      "Solar-powered 2K HD smart feeder with real-time AI bird species identification and weatherproof design — a well-rounded pick for backyard birders who want hands-free monitoring.",
    pros: [
      "Solar panel keeps the camera running without frequent charging",
      "2K HD video delivers clear footage for species identification",
      "Real-time AI species ID notifies you the moment a new bird arrives",
    ],
    cons: [
      "Requires Wi-Fi for app features and AI identification",
      "Solar performance drops in heavily shaded or overcast locations",
    ],
  },
  {
    id: "sm-2",
    name: "HEAPETS Bird Feeder with Camera Solar Powered, 3K HD Video, AI Bird Recognition, Brown",
    articleSlug: "best-smart-bird-feeder-cameras",
    rank: 2,
    asin: "B0G4MH28MY",
    imageUrl: "https://m.media-amazon.com/images/I/81pdRxD8aRL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0G4MH28MY?tag=YOURTAG-20",
    bestFor: "Best 3K Solar Smart Feeder",
    badge: "Top Rated",
    description:
      "HEAPETS steps up to 3K video resolution with solar power and AI bird recognition — offering sharper footage than most solar feeders at a competitive price point.",
    pros: [
      "3K HD resolution exceeds most competitors in this solar price range",
      "Solar-powered with weatherproof housing for all-season outdoor use",
      "Push notifications alert you to bird visits in real time",
    ],
    cons: [
      "Brown colorway may not suit all garden aesthetics",
      "AI recognition database is smaller than premium brands",
    ],
  },
  {
    id: "sm-3",
    name: "HARYMOR Bird Feeder with Camera AI Identify Birds Species Solar Powered, 2K HD, Green",
    articleSlug: "best-smart-bird-feeder-cameras",
    rank: 3,
    asin: "B0C4Y6D5BD",
    imageUrl: "https://m.media-amazon.com/images/I/71bnIiqaMAL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0C4Y6D5BD?tag=YOURTAG-20",
    bestFor: "Best Budget Solar Smart Feeder",
    badge: "Best Value",
    description:
      "HARYMOR combines solar power, 2K HD video, and AI species identification into one of the most affordable smart feeder packages on the market.",
    pros: [
      "Competitive price for solar-powered AI smart feeder combination",
      "2K HD captures enough detail for common backyard species identification",
      "Green finish blends naturally into garden settings",
    ],
    cons: [
      "App and AI features are more basic than premium alternatives",
      "Seed capacity is smaller than larger feeder designs",
    ],
  },
  {
    id: "sm-4",
    name: "Kiwibit Smart Bird Feeder with Camera Solar Powered, No Subscription, 4K Live Stream",
    articleSlug: "best-smart-bird-feeder-cameras",
    rank: 4,
    asin: "B0DZHNNP25",
    imageUrl: "https://m.media-amazon.com/images/I/8198Fw5teQL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0DZHNNP25?tag=YOURTAG-20",
    bestFor: "Best No-Subscription 4K Feeder",
    description:
      "Kiwibit's no-subscription 4K solar feeder delivers live streaming without ongoing costs — ideal for birders who want premium resolution without monthly fees.",
    pros: [
      "4K live stream with no subscription required after purchase",
      "Solar-powered for continuous outdoor operation",
      "Local storage eliminates dependence on cloud services",
    ],
    cons: [
      "4K recording uses microSD storage faster than lower-resolution models",
      "App interface has a steeper learning curve than some competitors",
    ],
  },
  {
    id: "sm-5",
    name: "NETVUE by Birdfy Smart Bird Feeder 2K HD AI Camera Solar Powered, Color Night Vision",
    articleSlug: "best-smart-bird-feeder-cameras",
    rank: 5,
    asin: "B0B56BFH7P",
    imageUrl: "https://m.media-amazon.com/images/I/81fFG3REm4L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0B56BFH7P?tag=YOURTAG-20",
    bestFor: "Best AI Smart Feeder with Color Night Vision",
    description:
      "NETVUE's Birdfy platform brings a large AI species database and full-color night vision to a solar-powered feeder — excellent for birders who want evening and dawn capture.",
    pros: [
      "Color night vision captures vivid footage at dusk and dawn",
      "Birdfy AI species database covers a wide range of North American birds",
      "Solar panel provides reliable year-round power in most US regions",
    ],
    cons: [
      "Full AI species database access requires Birdfy+ subscription",
      "Larger feeder profile may initially deter more timid species",
    ],
  },
  {
    id: "sm-6",
    name: "Kiwibit Smart Bird Feeder with Camera Solar Powered, 4K Video Live Stream, Green",
    articleSlug: "best-smart-bird-feeder-cameras",
    rank: 6,
    asin: "B0DZHNDJQM",
    imageUrl: "https://m.media-amazon.com/images/I/81wEOWQX8BL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0DZHNDJQM?tag=YOURTAG-20",
    bestFor: "Best Green 4K Solar Feeder",
    description:
      "Kiwibit's green-finish 4K solar feeder offers the same high-resolution live streaming as its sibling model in a garden-friendly colorway with AI species identification included.",
    pros: [
      "4K resolution delivers sharp detail for field mark identification",
      "Green finish integrates naturally into backyard garden settings",
      "Real-time species identification notifies you of each new visitor",
    ],
    cons: [
      "Solar charging requires at least partial daily sun exposure",
      "4K storage demands a high-capacity microSD card",
    ],
  },
  {
    id: "sm-7",
    name: "Kiwibit Solar Smart Bird Feeder with Camera, AI Bird Species Identification, 8MP Photos, 4K UHD",
    articleSlug: "best-smart-bird-feeder-cameras",
    rank: 7,
    asin: "B0FHW2TCRX",
    imageUrl: "https://m.media-amazon.com/images/I/81ldCwPgvQL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0FHW2TCRX?tag=YOURTAG-20",
    bestFor: "Best 4K UHD with High-Res Still Photos",
    description:
      "Kiwibit's 4K UHD camera with 8MP still photo capture makes it a strong choice for birders who want both video and high-resolution identification images from the same feeder.",
    pros: [
      "8MP still photo capture alongside 4K UHD video recording",
      "AI species identification builds a personal bird visit log",
      "Solar-powered operation reduces maintenance between refills",
    ],
    cons: [
      "Higher price point than most 2K solar alternatives",
      "Requires adequate Wi-Fi signal at outdoor feeder location",
    ],
  },

  // ── BEST BIRD WATCHING BINOCULARS ───────────────────────────────
  {
    id: "bin-1",
    name: "Occer 12x25 Compact Binoculars for Adults and Kids, Waterproof, Low Light Vision",
    articleSlug: "best-bird-watching-binoculars",
    rank: 1,
    asin: "B0756BXDTX",
    imageUrl: "https://m.media-amazon.com/images/I/71ni6tWpQ0L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0756BXDTX?tag=YOURTAG-20",
    bestFor: "Best Compact Binoculars Overall",
    badge: "Editor's Choice",
    description:
      "The Occer 12x25 delivers waterproof construction, low-light performance, and 12x magnification in a compact form factor — a highly-rated choice for casual and intermediate birders alike.",
    pros: [
      "Waterproof construction handles outdoor use in varied weather conditions",
      "12x magnification brings distant birds close for clear observation",
      "Compact size and lightweight design are easy to carry all day",
    ],
    cons: [
      "25mm objective lenses limit light gathering in very low light",
      "12x magnification amplifies hand shake more than 8x models",
    ],
  },
  {
    id: "bin-2",
    name: "20x50 High Powered Binoculars for Adults, Waterproof Compact, Low Light Vision",
    articleSlug: "best-bird-watching-binoculars",
    rank: 2,
    asin: "B0CJRTRRTG",
    imageUrl: "https://m.media-amazon.com/images/I/71EnkUZ5D-L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0CJRTRRTG?tag=YOURTAG-20",
    bestFor: "Best High-Power Binoculars",
    badge: "Top Rated",
    description:
      "20x50 magnification and large objective lenses make these binoculars excellent for distant bird observation — waterproof construction handles any field conditions.",
    pros: [
      "20x magnification excels at spotting distant or high-perching birds",
      "50mm objective lenses gather substantially more light than compact models",
      "Waterproof rating protects against rain and heavy morning dew",
    ],
    cons: [
      "20x magnification requires steady hands or a monopod for comfortable use",
      "Larger and heavier than compact binoculars for all-day carry",
    ],
  },
  {
    id: "bin-3",
    name: "Hontry Binoculars for Adults and Kids, 10x25 Compact for Bird Watching",
    articleSlug: "best-bird-watching-binoculars",
    rank: 3,
    asin: "B07Q1GHB5X",
    imageUrl: "https://m.media-amazon.com/images/I/71p-bGgJhuL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B07Q1GHB5X?tag=YOURTAG-20",
    bestFor: "Best Family-Friendly Compact Binoculars",
    description:
      "Hontry's 10x25 binoculars offer a practical balance of magnification and portability, with a design that works well for both adults and kids getting started with bird watching.",
    pros: [
      "10x magnification is an effective all-around choice for backyard birding",
      "Compact and lightweight — practical for kids and casual adult use",
      "Suitable for concerts, sports events, and general outdoor use beyond birding",
    ],
    cons: [
      "25mm objectives limit performance in low-light or overcast conditions",
      "Build quality is basic at the entry-level price point",
    ],
  },
  {
    id: "bin-4",
    name: "Tinllaans 15x55 UHD Binoculars High Powered with Phone Adapter, Waterproof, Blue",
    articleSlug: "best-bird-watching-binoculars",
    rank: 4,
    asin: "B0DPHHG48X",
    imageUrl: "https://m.media-amazon.com/images/I/71Q3GsyIF6L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0DPHHG48X?tag=YOURTAG-20",
    bestFor: "Best High-Power with Phone Adapter",
    description:
      "15x55 UHD optics combined with a smartphone adapter let you capture bird sightings directly through the binoculars — a useful feature for documentation-focused birders.",
    pros: [
      "Included phone adapter enables digiscoping for bird photo documentation",
      "55mm objective lenses deliver strong light-gathering for dawn and dusk use",
      "Waterproof construction rated for field use in wet conditions",
    ],
    cons: [
      "15x magnification is harder to steady without support than 8–10x models",
      "Heavier than compact alternatives — noticeable on long walks",
    ],
  },
  {
    id: "bin-5",
    name: "POLDR 12X25 Small Pocket Binoculars Compact Adults, Mini Kids Binoculars",
    articleSlug: "best-bird-watching-binoculars",
    rank: 5,
    asin: "B07GQ8J4QX",
    imageUrl: "https://m.media-amazon.com/images/I/61GE4COOkTL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B07GQ8J4QX?tag=YOURTAG-20",
    bestFor: "Best Pocket-Sized Binoculars",
    description:
      "POLDR's pocket binoculars fold to a genuinely compact size — easy to keep in a jacket pocket for spontaneous birding moments without carrying a bag.",
    pros: [
      "Ultra-compact pocket size — fits in a coat pocket for grab-and-go birding",
      "12x magnification provides useful reach from a very small form factor",
      "Suitable for kids' smaller hands and faces as well as adults",
    ],
    cons: [
      "Small objective lenses limit image brightness and low-light performance",
      "Compact folding design sacrifices some optical alignment stability",
    ],
  },
  {
    id: "bin-6",
    name: "Tinllaans 15x52 HD Binoculars High Powered with Upgraded Phone Adapter, Waterproof",
    articleSlug: "best-bird-watching-binoculars",
    rank: 6,
    asin: "B0CG9XF3FR",
    imageUrl: "https://m.media-amazon.com/images/I/81Sfv7vKoCL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0CG9XF3FR?tag=YOURTAG-20",
    bestFor: "Best HD with Upgraded Phone Mount",
    description:
      "Tinllaans' 15x52 model pairs HD optics with an upgraded phone adapter for improved digiscoping stability — a step up in phone mounting quality over comparable models.",
    pros: [
      "Upgraded phone adapter provides more stable digiscoping than standard mounts",
      "52mm objectives offer good light gathering at a manageable weight",
      "HD glass coating reduces chromatic aberration at high magnification",
    ],
    cons: [
      "15x magnification benefits significantly from using a tripod or monopod",
      "Slightly bulkier than true compact models",
    ],
  },
  {
    id: "bin-7",
    name: "Aurosports 10x25 Compact Binoculars for Adults and Kids, Easy Focus, with Carrying Case",
    articleSlug: "best-bird-watching-binoculars",
    rank: 7,
    asin: "B06XT7M6P5",
    imageUrl: "https://m.media-amazon.com/images/I/71LxntLtYML._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B06XT7M6P5?tag=YOURTAG-20",
    bestFor: "Best Easy-Focus Compact Value",
    badge: "Best Value",
    description:
      "Aurosports' 10x25 compact binoculars combine easy central focus with a carrying case and neck strap — a well-packaged entry-level option for new birders.",
    pros: [
      "Easy-turn central focus wheel suitable for beginners and children",
      "Carrying case and neck strap included for complete out-of-box use",
      "10x magnification works well for backyard and casual field birding",
    ],
    cons: [
      "25mm objectives limit low-light performance",
      "Basic optical coatings compared to mid-range alternatives",
    ],
  },

  // ── BEST SQUIRREL-PROOF BIRD FEEDERS ────────────────────────────
  {
    id: "sqp-1",
    name: "Squirrel Proof Bird Feeder, 360° Feeding Perch Tray for Outdoor Hanging, Dark Green",
    articleSlug: "best-squirrel-proof-bird-feeders",
    rank: 1,
    asin: "B0FN67ZL4P",
    imageUrl: "https://m.media-amazon.com/images/I/71hb2ixoLQL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0FN67ZL4P?tag=YOURTAG-20",
    bestFor: "Best Squirrel-Proof Feeder Overall",
    badge: "Editor's Choice",
    description:
      "A 360° feeding perch tray design combined with squirrel-proof construction gives birds ample access while deterring squirrel interference — a strong all-around garden feeder.",
    pros: [
      "360° perch tray allows multiple birds to feed simultaneously from all sides",
      "Squirrel-proof design reduces seed loss and feeder monopolization",
      "Dark green finish blends naturally into garden and yard settings",
    ],
    cons: [
      "Hanging-only design requires a sturdy hook or shepherd's crook",
      "360° tray can collect debris in rain if not placed under cover",
    ],
  },
  {
    id: "sqp-2",
    name: "FEED GARDEN Metal Bird Feeder, 6 Port Tube Feeder, Heavy Duty Squirrel Proof, 13 Inch",
    articleSlug: "best-squirrel-proof-bird-feeders",
    rank: 2,
    asin: "B0D7GKMVJY",
    imageUrl: "https://m.media-amazon.com/images/I/71nbZj7-Z9L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0D7GKMVJY?tag=YOURTAG-20",
    bestFor: "Best Metal Tube Feeder",
    badge: "Top Rated",
    description:
      "FEED GARDEN's all-metal construction and 6-port tube design resist squirrel chewing while serving multiple birds at once — a durable feeder built for years of outdoor use.",
    pros: [
      "All-metal construction is impervious to squirrel gnawing damage",
      "6 feeding ports support multiple simultaneous bird visits",
      "Heavy-duty build withstands high-activity yards and rough weather",
    ],
    cons: [
      "Metal construction makes the feeder heavier than plastic alternatives",
      "Tube design is suited for sunflower and mixed seed — not peanuts or suet",
    ],
  },
  {
    id: "sqp-3",
    name: "Squirrel Proof Bird Feeder Metal Mesh, Gravity Protection, 3LB Large Capacity, Green",
    articleSlug: "best-squirrel-proof-bird-feeders",
    rank: 3,
    asin: "B0CJ96ZKG2",
    imageUrl: "https://m.media-amazon.com/images/I/71AXynyBw+L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0CJ96ZKG2?tag=YOURTAG-20",
    bestFor: "Best Metal Mesh Gravity Feeder",
    description:
      "Metal mesh construction with gravity-based squirrel protection delivers 3LB seed capacity and cling-style feeding access for small birds while blocking squirrel reach.",
    pros: [
      "Metal mesh allows small birds to cling and feed while excluding squirrels",
      "3LB capacity reduces refill frequency in high-traffic backyards",
      "Gravity-based protection requires no adjustments or calibration",
    ],
    cons: [
      "Mesh design may also limit access for larger songbirds like cardinals",
      "Green finish may show weathering more visibly than darker colors over time",
    ],
  },
  {
    id: "sqp-4",
    name: "Bird Feeders for Outdoors Squirrel Proof, Locking Lid, Adjustable Hanger, 6 Port, Green",
    articleSlug: "best-squirrel-proof-bird-feeders",
    rank: 4,
    asin: "B07JBL8P6Q",
    imageUrl: "https://m.media-amazon.com/images/I/81TDf2NTIBL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B07JBL8P6Q?tag=YOURTAG-20",
    bestFor: "Best 6-Port with Locking Lid",
    description:
      "A locking lid prevents squirrels from accessing the seed reservoir from above while 6 feeding ports serve multiple birds simultaneously — a practical and popular design.",
    pros: [
      "Locking lid prevents squirrel access to the seed reservoir",
      "6 feeding ports allow multiple birds to feed at the same time",
      "Adjustable hanger accommodates different pole and hook configurations",
    ],
    cons: [
      "Tube design limits the types of seed that can be used",
      "Chew-proof rating applies to the ports but not all plastic components",
    ],
  },
  {
    id: "sqp-5",
    name: "Wildpark Squirrel Proof Bird Feeders, 5LB Metal Hanging, Cardinals and Chickadees, Orange",
    articleSlug: "best-squirrel-proof-bird-feeders",
    rank: 5,
    asin: "B0DSDW5XP5",
    imageUrl: "https://m.media-amazon.com/images/I/81rMiHmyW2L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0DSDW5XP5?tag=YOURTAG-20",
    bestFor: "Best Large-Capacity Metal Feeder",
    description:
      "Wildpark's 5LB metal feeder balances generous seed capacity with squirrel-resistant construction — a good choice for active yards that host cardinals and chickadees regularly.",
    pros: [
      "5LB seed capacity significantly reduces refill frequency",
      "Metal construction resists squirrel gnawing for long-term durability",
      "Designed to accommodate cardinals and other larger songbirds",
    ],
    cons: [
      "Orange colorway stands out prominently — may not suit all garden styles",
      "Heavier when full due to large seed capacity",
    ],
  },
  {
    id: "sqp-6",
    name: "Perky-Pet Squirrel-Be-Gone Squirrel Proof Bird Feeder, 2LB, Weight-Activated Perches",
    articleSlug: "best-squirrel-proof-bird-feeders",
    rank: 6,
    asin: "B000SP2JLU",
    imageUrl: "https://m.media-amazon.com/images/I/81cl8Wx9bbL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B000SP2JLU?tag=YOURTAG-20",
    bestFor: "Best Weight-Activated Classic",
    description:
      "Perky-Pet's long-established Squirrel-Be-Gone uses weight-activated perches to close seed ports under heavier animals — a proven mechanism with a large base of satisfied users.",
    pros: [
      "Weight-activated perches are a proven squirrel deterrent mechanism",
      "Perky-Pet is a well-established brand with a long user review history",
      "Adjustable weight sensitivity accommodates different bird sizes",
    ],
    cons: [
      "2LB capacity requires more frequent refilling than larger feeders",
      "Plastic components may show wear faster than all-metal alternatives",
    ],
  },
  {
    id: "sqp-7",
    name: "Gbekery Squirrel Proof Bird Feeder, 5LB, Bilateral Weight-Activated Perches, Red",
    articleSlug: "best-squirrel-proof-bird-feeders",
    rank: 7,
    asin: "B0FJ1ZQKWC",
    imageUrl: "https://m.media-amazon.com/images/I/71ebt+5jQVL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0FJ1ZQKWC?tag=YOURTAG-20",
    bestFor: "Best High-Capacity Weight-Activated Feeder",
    badge: "Best Value",
    description:
      "Gbekery's bilateral weight-activated perch design and 5LB capacity combine the best of both worlds — effective squirrel deterrence with minimal refill frequency.",
    pros: [
      "Bilateral weight-activated perches close from both sides simultaneously",
      "5LB large seed capacity for reduced maintenance in high-activity yards",
      "Red finish is highly visible and adds garden color",
    ],
    cons: [
      "Bright red finish may not suit all backyard aesthetics",
      "Weight sensitivity may need manual adjustment after initial setup",
    ],
  },

  // ── BEST HUMMINGBIRD FEEDER CAMERAS ─────────────────────────────
  {
    id: "hum-1",
    name: "LUJII Smart Hummingbird Feeder with Camera, Hand Blown Glass, Solar WiFi, 36 fl oz, Teal",
    articleSlug: "best-hummingbird-feeder-cameras",
    rank: 1,
    asin: "B0GX23XHRF",
    imageUrl: "https://m.media-amazon.com/images/I/81aTeyvVzPL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0GX23XHRF?tag=YOURTAG-20",
    bestFor: "Best Hummingbird Feeder Camera Overall",
    badge: "Editor's Choice",
    description:
      "LUJII's hand-blown glass smart hummingbird feeder combines artisan aesthetics with solar WiFi connectivity and a 36 fl oz nectar capacity — a standout choice for hummingbird photography.",
    pros: [
      "Hand-blown glass bowl is visually distinctive and easy to clean",
      "Solar WiFi operation runs all season without battery changes",
      "36 fl oz large nectar capacity reduces refill frequency",
    ],
    cons: [
      "Glass bowl requires more careful handling during cleaning than plastic",
      "Teal finish is style-specific — not for all garden aesthetics",
    ],
  },
  {
    id: "hum-2",
    name: "Hummingbird Feeder with Camera, Wireless Smart Bird Feeder, AI Auto Capture, Motion Detection",
    articleSlug: "best-hummingbird-feeder-cameras",
    rank: 2,
    asin: "B0CTQXYWJF",
    imageUrl: "https://m.media-amazon.com/images/I/711bT3u9FtL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0CTQXYWJF?tag=YOURTAG-20",
    bestFor: "Best AI Auto-Capture Hummingbird Cam",
    badge: "Top Rated",
    description:
      "AI-powered auto-capture triggers the camera the moment a hummingbird arrives, ensuring you never miss a visit even when you're away from your phone.",
    pros: [
      "AI auto-capture triggers recording the instant a hummingbird visits",
      "Motion detection reduces battery drain between visits",
      "Wireless connectivity sends alerts and clips directly to your phone",
    ],
    cons: [
      "Requires a stable Wi-Fi connection at the outdoor feeder location",
      "Motion detection sensitivity may trigger on wind or insects occasionally",
    ],
  },
  {
    id: "hum-3",
    name: "LUJII Smart Hummingbird Feeder with Camera, Hand Blown Glass, Solar WiFi, 28 fl oz, Ribbon",
    articleSlug: "best-hummingbird-feeder-cameras",
    rank: 3,
    asin: "B0GX1J1FBH",
    imageUrl: "https://m.media-amazon.com/images/I/81SSwfwKfTL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0GX1J1FBH?tag=YOURTAG-20",
    bestFor: "Best Compact Glass Smart Hummingbird Feeder",
    description:
      "The smaller 28 fl oz Ribbon version of LUJII's glass solar feeder suits yards where space is limited, offering the same solar WiFi features in a more compact form factor.",
    pros: [
      "Hand-blown glass in Ribbon colorway offers a decorative garden feature",
      "Solar WiFi operation with the same connectivity as the larger 36 oz version",
      "Compact 28 fl oz size is appropriate for lower-traffic hummingbird feeders",
    ],
    cons: [
      "28 fl oz requires more frequent refilling in high-traffic yards",
      "Glass construction is more fragile than plastic feeder alternatives",
    ],
  },
  {
    id: "hum-4",
    name: "Bird Feeder with Camera Solar Powered, Smart Hummingbird Feeder, 2K Live AI Identify",
    articleSlug: "best-hummingbird-feeder-cameras",
    rank: 4,
    asin: "B0D6BRM4HK",
    imageUrl: "https://m.media-amazon.com/images/I/71B2Jt+cP9L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0D6BRM4HK?tag=YOURTAG-20",
    bestFor: "Best 2K AI Hummingbird Camera",
    description:
      "2K live video combined with AI hummingbird identification and solar power delivers a capable smart feeder for birders who want clear footage and species confirmation.",
    pros: [
      "2K live streaming captures sufficient detail for hummingbird species identification",
      "AI identifies hummingbird species and sends real-time notifications",
      "Solar power maintains continuous operation through the hummingbird season",
    ],
    cons: [
      "AI species database focused on hummingbirds may not cover all backyard songbirds",
      "2K resolution is capable but below the 3K or 4K of higher-end models",
    ],
  },
  {
    id: "hum-5",
    name: "Birdfy Smart Hummingbird Feeder with Camera, Solar Powered, Auto Detect Record, 14oz",
    articleSlug: "best-hummingbird-feeder-cameras",
    rank: 5,
    asin: "B0DQXSVNZL",
    imageUrl: "https://m.media-amazon.com/images/I/61sDcjkAjVL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0DQXSVNZL?tag=YOURTAG-20",
    bestFor: "Best Birdfy Hummingbird Feeder Camera",
    description:
      "Birdfy's dedicated hummingbird feeder camera brings their proven AI platform to a solar-powered nectar feeder with auto-detect recording for seamless clip capture.",
    pros: [
      "Birdfy AI ecosystem with a well-reviewed species identification database",
      "Auto-detect recording triggers only on hummingbird visits to save storage",
      "Solar-powered for season-long operation without battery maintenance",
    ],
    cons: [
      "14oz nectar capacity is smaller than competing glass-bowl designs",
      "Full Birdfy AI feature set requires a subscription after the trial period",
    ],
  },
  {
    id: "hum-6",
    name: "TT Nature Hummingbird Feeder with Camera Solar Powered, AI Identify, CCPA Data Protection, 20oz",
    articleSlug: "best-hummingbird-feeder-cameras",
    rank: 6,
    asin: "B0CTH4JSYF",
    imageUrl: "https://m.media-amazon.com/images/I/71TE3Ydy09L._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0CTH4JSYF?tag=YOURTAG-20",
    bestFor: "Best Privacy-Conscious Hummingbird Camera",
    description:
      "TT Nature emphasizes CCPA data protection alongside AI identification and solar power — a consideration for privacy-aware users in the smart feeder camera market.",
    pros: [
      "CCPA data protection compliance is a meaningful differentiator in this category",
      "Solar-powered 20oz feeder handles moderate hummingbird traffic",
      "AI identification covers hummingbird species common to North America",
    ],
    cons: [
      "20oz capacity requires more frequent refilling than larger glass designs",
      "Privacy-focused data handling may limit some cloud-based AI features",
    ],
  },
  {
    id: "hum-7",
    name: "TT Nature Glass Smart Hummingbird Feeder with Camera Solar 2K, AI Identify, Alexa Compatible",
    articleSlug: "best-hummingbird-feeder-cameras",
    rank: 7,
    asin: "B0FDGNPWV7",
    imageUrl: "https://m.media-amazon.com/images/I/81MVskJosVL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0FDGNPWV7?tag=YOURTAG-20",
    bestFor: "Best Alexa-Compatible Hummingbird Camera",
    badge: "Best Value",
    description:
      "TT Nature's glass solar hummingbird feeder adds Alexa compatibility for voice-controlled viewing and notifications — a smart home integration that competing feeder cameras lack.",
    pros: [
      "Alexa compatibility enables voice-controlled camera access and notifications",
      "Glass bowl is visually attractive and straightforward to clean",
      "Solar 2K camera captures clear hummingbird footage without battery management",
    ],
    cons: [
      "Alexa integration requires a compatible Echo device in your smart home setup",
      "Glass construction demands more careful handling than plastic feeders",
    ],
  },

  // ── BEST BIRD BATHS ─────────────────────────────────────────────
  {
    id: "bath-1",
    name: "VIVOHOME Bird Bath for Outside, Polyresin Pedestal, 28 Inch Height, 20\" Bowl, Green",
    articleSlug: "best-bird-baths",
    rank: 1,
    asin: "B07597XGSN",
    imageUrl: "https://m.media-amazon.com/images/I/71uiJV3lomL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B07597XGSN?tag=YOURTAG-20",
    bestFor: "Best Bird Bath Overall",
    badge: "Editor's Choice",
    description:
      "VIVOHOME's polyresin pedestal bird bath combines a classic antique aesthetic with lightweight construction and a 20-inch bowl — a top-rated choice for backyard garden use.",
    pros: [
      "Lightweight polyresin construction is far easier to move than concrete",
      "20-inch bowl provides generous space for multiple bird species to bathe",
      "Classic antique pedestal design complements most garden styles",
    ],
    cons: [
      "Polyresin can fade over multiple seasons with UV exposure",
      "Two-piece pedestal design requires assembly before use",
    ],
  },
  {
    id: "bath-2",
    name: "Daoeny 35In Metal Bird Bath for Outside, Vintage Freestanding Birdbath, Antique Bronze",
    articleSlug: "best-bird-baths",
    rank: 2,
    asin: "B0CZ63PY86",
    imageUrl: "https://m.media-amazon.com/images/I/81c5VJadFqL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0CZ63PY86?tag=YOURTAG-20",
    bestFor: "Best Metal Freestanding Bird Bath",
    badge: "Top Rated",
    description:
      "Daoeny's 35-inch metal bird bath in antique bronze finish offers a taller pedestal for improved bird visibility and predator awareness — built to last in outdoor conditions.",
    pros: [
      "35-inch height gives birds better sightlines for predator detection while bathing",
      "Metal construction is more durable than resin in freeze-thaw climates",
      "Antique bronze finish resists visible rust and weathering",
    ],
    cons: [
      "Metal bowl can heat up significantly in direct summer sun",
      "Heavier than polyresin alternatives — harder to reposition seasonally",
    ],
  },
  {
    id: "bath-3",
    name: "Best Choice Products 28in Pedestal Bird Bath, Vintage Outdoor Resin, Fleur-de-Lis, Green",
    articleSlug: "best-bird-baths",
    rank: 3,
    asin: "B01HC76V9C",
    imageUrl: "https://m.media-amazon.com/images/I/71LNKDtixqS._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B01HC76V9C?tag=YOURTAG-20",
    bestFor: "Best Decorative Resin Bird Bath",
    description:
      "Best Choice Products' Fleur-de-Lis design adds ornamental detail to a functional resin pedestal bird bath — a well-reviewed budget option with good garden presence.",
    pros: [
      "Fleur-de-Lis detail adds decorative garden appeal beyond basic designs",
      "Lightweight resin construction makes seasonal repositioning easy",
      "28-inch height is a comfortable viewing level for backyard bird watching",
    ],
    cons: [
      "Resin construction may crack in climates with severe freeze-thaw cycles",
      "Green finish shows algae growth more visibly than darker colorways",
    ],
  },
  {
    id: "bath-4",
    name: "VIVOHOME Bird Bath with Solar Fountain, Polyresin Pedestal, Solar Powered Pump, Green",
    articleSlug: "best-bird-baths",
    rank: 4,
    asin: "B07K1WY1M4",
    imageUrl: "https://m.media-amazon.com/images/I/71RYz4sgiNL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B07K1WY1M4?tag=YOURTAG-20",
    bestFor: "Best Solar Fountain Bird Bath",
    description:
      "VIVOHOME adds a solar-powered fountain pump to their popular polyresin pedestal design — moving water attracts significantly more bird species than still baths.",
    pros: [
      "Solar fountain creates moving water that attracts a wider variety of bird species",
      "No wiring required — solar panel powers the pump during daylight hours",
      "Moving water also prevents mosquito breeding in the bath",
    ],
    cons: [
      "Solar pump slows or stops in heavily shaded placement or overcast weather",
      "Pump filter requires periodic cleaning to maintain water flow",
    ],
  },
  {
    id: "bath-5",
    name: "OUISJYER 3\" Deep Metal Bird Bath for Outdoors, Removable 13\" Bowl with Stake, 1.4 Gallon",
    articleSlug: "best-bird-baths",
    rank: 5,
    asin: "B0DTF88PR9",
    imageUrl: "https://m.media-amazon.com/images/I/713WSCsCrAL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0DTF88PR9?tag=YOURTAG-20",
    bestFor: "Best Ground-Level Metal Bird Bath",
    description:
      "OUISJYER's stake-mounted metal bath brings water to ground level where many bird species prefer to drink and bathe — a removable bowl makes cleaning straightforward.",
    pros: [
      "Ground-level stake placement mimics natural puddles that attract ground-feeding birds",
      "Removable 13-inch bowl simplifies cleaning and seasonal storage",
      "1.4 gallon capacity provides a generous water supply between refills",
    ],
    cons: [
      "Ground placement increases exposure to cats and other predators",
      "Stake design requires soft ground — won't work on hard surfaces or patios",
    ],
  },
  {
    id: "bath-6",
    name: "Best Choice Products Outdoor Solar Lighted Pedestal Bird Bath Fountain with Planter, Bronze",
    articleSlug: "best-bird-baths",
    rank: 6,
    asin: "B0787S6M9K",
    imageUrl: "https://m.media-amazon.com/images/I/81QjyyBcaxL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0787S6M9K?tag=YOURTAG-20",
    bestFor: "Best Solar Lighted Bird Bath with Planter",
    description:
      "This multi-functional design combines a solar fountain, LED lighting, and a planter base — serving as a garden focal point by day and a lighted feature by night.",
    pros: [
      "Solar LED lighting creates an attractive garden feature after dark",
      "Planter base lets you incorporate flowers or herbs into the design",
      "Fountain movement attracts birds while solar power keeps it wire-free",
    ],
    cons: [
      "Planter base adds complexity — requires both bird bath and planting maintenance",
      "LED lighting is primarily decorative and doesn't illuminate the bath for birds",
    ],
  },
  {
    id: "bath-7",
    name: "Gtongoko 12\" Dia Bowl Metal Bird Bath, 34\" Height, 5-Prongs Base",
    articleSlug: "best-bird-baths",
    rank: 7,
    asin: "B0DQCPDR6B",
    imageUrl: "https://m.media-amazon.com/images/I/71NjZYZeJKL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com/dp/B0DQCPDR6B?tag=YOURTAG-20",
    bestFor: "Best Minimalist Metal Bird Bath",
    badge: "Best Value",
    description:
      "Gtongoko's minimalist metal design pairs a 12-inch bowl with a 5-prong stable base at 34 inches — a clean, contemporary alternative to traditional ornate pedestal baths.",
    pros: [
      "5-prong base provides excellent stability on uneven lawn surfaces",
      "34-inch height elevates birds for better predator awareness",
      "Minimalist metal design suits modern and contemporary garden aesthetics",
    ],
    cons: [
      "12-inch bowl is smaller than standard 16–20-inch pedestal designs",
      "Minimalist design offers no decorative detail if that's a priority",
    ],
  },
];

export function getProductsByArticle(articleSlug: string): Product[] {
  return products
    .filter((p) => p.articleSlug === articleSlug)
    .sort((a, b) => a.rank - b.rank);
}

export function getFeaturedProducts(): Product[] {
  const slugs = [
    "best-smart-bird-feeder-cameras",
    "best-bird-watching-binoculars",
    "best-squirrel-proof-bird-feeders",
    "best-hummingbird-feeder-cameras",
    "best-bird-baths",
  ];
  return slugs.map(
    (slug) => products.find((p) => p.articleSlug === slug && p.rank === 1)!
  );
}
