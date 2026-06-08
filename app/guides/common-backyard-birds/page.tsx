import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "20 Common Backyard Birds: A Beginner's ID Guide | BirdCamly",
  description:
    "Want to put names to the species you regularly see? Learn to identify 20 of the most common backyard birds in North America with photos and field notes.",
  alternates: {
    canonical: "https://birdcamly.com/guides/common-backyard-birds",
  },
};

const birds = [
  {
    name: "American Robin",
    image:
      "/birds/american-robin.jpg",
    description:
      "The American Robin is one of the first birds many people learn to identify — its orange-red breast and yellow bill make it unmistakable. Often seen pulling earthworms from lawns after rain, it's equally at home in forests, parks, and suburban yards. The robin's rich, melodic song is one of the first sounds of a spring morning.",
    fact: "Robins don't always migrate south — in winter, some join large roaming flocks searching for berries rather than heading to warmer climates.",
  },
  {
    name: "Black-capped Chickadee",
    image:
      "/birds/black-capped-chickadee.jpg",
    description:
      "Bold, acrobatic, and seemingly fearless, the Black-capped Chickadee is a year-round feeder staple across northern and mountain regions. It grabs a single seed, flies to a nearby branch to eat it, then returns — a pattern repeated dozens of times per hour. Its chick-a-dee-dee call is one of the most recognized bird sounds in North America.",
    fact: "Chickadees can remember thousands of individual hiding spots where they've cached seeds, retrieving them weeks later with remarkable accuracy.",
  },
  {
    name: "Northern Cardinal",
    image:
      "/birds/northern-cardinal.jpg",
    description:
      "The male Northern Cardinal's vivid scarlet plumage makes it one of the most striking birds at any eastern feeder. Females are a warm tawny brown with red accents — subtler but still beautiful. Cardinals prefer sunflower and safflower seeds and tend to feed at dawn and dusk when other birds are less active.",
    fact: "Unlike most songbirds, female cardinals also sing — often communicating with their mate from inside the nest.",
  },
  {
    name: "Downy Woodpecker",
    image:
      "/birds/downy-woodpecker.jpg",
    description:
      "The smallest woodpecker in North America, the Downy is a common and approachable feeder visitor. Its compact size lets it forage on thinner branches and plant stems that larger woodpeckers can't use. Suet feeders are a reliable way to attract them, and they'll often visit alongside chickadees and nuthatches.",
    fact: "The Downy's short bill makes it more versatile than larger woodpeckers — it can forage on weed stems and goldenrod galls as well as tree bark.",
  },
  {
    name: "American Goldfinch",
    image:
      "/birds/american-goldfinch.jpg",
    description:
      "In breeding plumage, the male American Goldfinch is a burst of canary yellow — one of the most visually striking birds at any feeder. In winter, both sexes wear a duller olive-yellow. They're especially attracted to nyjer (thistle) seed and will also take sunflower chips. Their bouncing, undulating flight pattern makes them easy to spot in motion.",
    fact: "Goldfinches are strict vegetarians — one of the few North American birds that feeds its nestlings exclusively plant material rather than insects.",
  },
  {
    name: "Blue Jay",
    image:
      "/birds/blue-jay.jpg",
    description:
      "Loud, bold, and conspicuous, the Blue Jay makes its presence known at any feeder it visits. Its vivid blue, white, and black plumage is matched by an assertive personality — it often dominates smaller birds and will cache food aggressively. Despite their reputation, jays serve an important role as acorn planters, spreading oaks across the landscape.",
    fact: "Blue Jays are skilled mimics and can imitate the calls of Red-tailed and Red-shouldered Hawks — possibly to alert other jays or scare competitors from feeders.",
  },
  {
    name: "House Sparrow",
    image:
      "/birds/house-sparrow.jpg",
    description:
      "The House Sparrow is one of the most abundant birds on the planet and a constant presence wherever humans live. Males have a handsome chestnut and gray pattern with a black bib; females are streaked brown. They nest in any available cavity — gutters, vents, hanging baskets — and gather in chattering flocks at feeders throughout the year.",
    fact: "House Sparrows were introduced to North America in the 1850s and have since spread to every corner of the continent.",
  },
  {
    name: "European Starling",
    image:
      "/birds/european-starling.jpg",
    description:
      "In breeding plumage, the European Starling is actually a beautiful bird — its glossy black feathers shimmer with green and purple iridescence. In winter, heavy white spotting gives it a speckled appearance. Starlings are extraordinary mimics and highly social, forming the enormous wheeling flocks known as murmurations.",
    fact: "All European Starlings in North America descend from roughly 100 birds released in Central Park in 1890 by a group that wanted to introduce every bird mentioned in Shakespeare.",
  },
  {
    name: "Mourning Dove",
    image:
      "/birds/mourning-dove.jpg",
    description:
      "Gentle and soft-spoken, the Mourning Dove is one of the most widespread birds in North America. Its muted gray-brown plumage and plaintive cooing are fixtures of suburban mornings. Doves prefer to feed on the ground beneath feeders, picking up spilled millet and sunflower seeds. They pair for an entire breeding season and often return to the same nesting sites.",
    fact: "Mourning Doves are one of the most hunted birds in North America, yet remain abundant — they can raise up to six broods per year.",
  },
  {
    name: "House Finch",
    image:
      "/birds/house-finch.jpg",
    description:
      "The House Finch is a cheerful, sociable bird that has expanded dramatically across North America since the mid-20th century. Males wear a rosy-red wash on the head, breast, and rump; females are heavily streaked brown. They're enthusiastic feeder visitors, particularly fond of sunflower and safflower seeds, and their bright warbling song is a welcome sound year-round.",
    fact: "The redness of a male House Finch comes entirely from pigments in his food — birds with better diets display brighter plumage and are preferred by females.",
  },
  {
    name: "Song Sparrow",
    image:
      "/birds/song-sparrow.jpg",
    description:
      "The Song Sparrow is a stocky, streaked brown sparrow that frequents brushy edges, gardens, and weedy patches near feeders. It's one of the most persistent singers in the backyard — the male delivers a complex, musical song from exposed perches throughout most of the year. Look for the distinctive central breast spot as a reliable field mark.",
    fact: "Song Sparrows have one of the most geographically variable appearances of any North American bird — populations across the continent differ significantly in size and color.",
  },
  {
    name: "Dark-eyed Junco",
    image:
      "/birds/dark-eyed-junco.jpg",
    description:
      "The Dark-eyed Junco is a familiar winter visitor across most of North America, descending from boreal forests to forage on the ground beneath feeders. The white outer tail feathers flash prominently as it flies. Different regional forms vary considerably — from the crisp slate-and-white eastern form to the hooded Oregon form of the West Coast.",
    fact: "Juncos are sometimes called \"snowbirds\" — their arrival at feeders in autumn is considered a reliable sign that cold weather is on the way.",
  },
  {
    name: "White-breasted Nuthatch",
    image:
      "/birds/white-breasted-nuthatch.jpg",
    description:
      "The White-breasted Nuthatch is immediately recognizable by its habit of walking headfirst down tree trunks — an ability shared by no other common North American bird. Its nasal, yank-yank call announces its arrival before it's seen. It's a regular at suet and sunflower feeders, wedging seeds into bark to hammer them open.",
    fact: "Nuthatches walk headfirst down tree trunks — a unique foraging strategy that lets them spot insects missed by birds that move upward.",
  },
  {
    name: "Ruby-throated Hummingbird",
    image:
      "/birds/ruby-throated-hummingbird.jpg",
    description:
      "The Ruby-throated Hummingbird is the only hummingbird species that nests east of the Mississippi. The male's iridescent ruby throat patch blazes in direct light and appears nearly black in shade. These tiny birds are fiercely territorial at nectar feeders, chasing away rivals with aerobatic precision. They're best attracted with a simple nectar solution of four parts water to one part white sugar.",
    fact: "Despite weighing less than a nickel, the Ruby-throated Hummingbird migrates nonstop across the Gulf of Mexico — a journey of up to 500 miles in a single flight.",
  },
  {
    name: "Cedar Waxwing",
    image:
      "/birds/cedar-waxwing.jpg",
    description:
      "The Cedar Waxwing is one of the most elegant birds that visits suburban yards — silky smooth plumage, a rakish black mask, and vivid yellow tail tip make it instantly recognizable. They travel in flocks, descending on berry-laden trees and shrubs in impressive numbers before moving on. Planting native fruit-bearing trees like serviceberry and dogwood is the best way to attract them.",
    fact: "Cedar Waxwings are so social they will pass berries beak-to-beak down a line of birds perched on a branch before anyone eats.",
  },
  {
    name: "American Crow",
    image:
      "/birds/american-crow.jpg",
    description:
      "The American Crow is one of the most intelligent birds in the world — capable of using tools, solving multi-step problems, and recognizing individual human faces. All-black and medium-large, crows are hard to miss. They're omnivores that will eat nearly anything and are highly adaptable to human-modified environments. Their loud cawing and complex social behavior make them fascinating to observe.",
    fact: "Crows can recognize individual human faces and remember them for years — even passing knowledge of \"dangerous\" people to their offspring.",
  },
  {
    name: "Red-winged Blackbird",
    image:
      "/birds/red-winged-blackbird.jpg",
    description:
      "The male Red-winged Blackbird's glossy black body and vivid red-and-yellow shoulder patches make it one of the most striking birds at any feeder. Males are aggressively territorial in spring, singing and displaying from cattails and fence posts. Females are heavily streaked brown — so different that beginning birders often don't realize they're the same species.",
    fact: "Male Red-winged Blackbirds can conceal or reveal their red shoulder patches depending on whether they're defending territory or trying to avoid conflict.",
  },
  {
    name: "Tufted Titmouse",
    image:
      "/birds/tufted-titmouse.jpg",
    description:
      "The Tufted Titmouse is a perky, sociable bird that's closely related to chickadees and often travels with them in mixed winter flocks. Its prominent gray crest and large dark eyes give it an alert, inquisitive expression. Sunflower seeds are its feeder staple — it grabs one, retreats to a branch, and hammers it open with its stout bill.",
    fact: "Titmice are known to pluck hair from live mammals — including sleeping dogs, squirrels, and occasionally humans — to line their nests.",
  },
  {
    name: "House Wren",
    image:
      "/birds/house-wren.jpg",
    description:
      "Small, brown, and extraordinarily vocal, the House Wren is a summer fixture in gardens across most of North America. Despite its modest appearance, it fills a yard with an exuberant, bubbling song that seems far too big for such a tiny bird. House Wrens readily accept nest boxes and will also nest in flower pots, old boots, and any other convenient cavity.",
    fact: "Male House Wrens build multiple \"dummy nests\" before a female arrives — she inspects them and chooses the one she'll actually use.",
  },
  {
    name: "American Tree Sparrow",
    image:
      "/birds/american-tree-sparrow.jpg",
    description:
      "The American Tree Sparrow is a winter visitor that breeds in the far north and retreats to the continental US when temperatures drop. It's a handsome sparrow with a rufous cap, bicolored bill, and a clean central breast spot. Look for them scratching through snow beneath feeders, feeding on millet and other small seeds alongside juncos.",
    fact: "Despite its name, the American Tree Sparrow spends most of its time on or near the ground — the name comes from European settlers who thought it resembled the Eurasian Tree Sparrow.",
  },
];

export default function CommonBackyardBirdsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ backgroundColor: "#1C2315" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#7fa86e" }}
              >
                BIRDING 101
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ color: "#f0ede8", fontFamily: "var(--font-playfair)" }}
              >
                Get to Know These 20 Common Backyard Birds
              </h1>
              <p className="text-lg" style={{ color: "#a8b5a0" }}>
                A beginner&apos;s identification guide to the birds most likely visiting
                your feeder and garden right now — with photos, descriptions, and
                fascinating facts for each species.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/birds/house-finch.jpg"
                alt="House Finch"
                style={{ width: "100%", maxHeight: "420px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-10" style={{ backgroundColor: "#f5f0e8" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed" style={{ color: "#3a3a2e" }}>
            One of the best things about birds is that they&apos;re everywhere — and even
            though many people don&apos;t realize it, they see and hear a wide variety of
            species every day. This guide covers 20 birds you&apos;re likely to spot in
            urban, suburban, and rural backyards across North America throughout the year.
          </p>
        </div>
      </section>

      {/* ── BIRD ENTRIES ── */}
      <section className="py-12" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="px-4 sm:px-6 lg:px-8">
          {birds.map((bird, index) => (
            <div
              key={bird.name}
              id={bird.name.toLowerCase().replace(/\s+/g, "-")}
              style={{ maxWidth: "680px", margin: "0 auto", paddingBottom: "48px" }}
            >
              <img
                src={bird.image}
                alt={bird.name}
                style={{
                  width: "100%",
                  maxHeight: "420px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "20px",
                  display: "block",
                }}
              />
              <div className="flex items-baseline gap-3 mb-3">
                <span
                  className="text-xs font-bold"
                  style={{ color: "var(--accent)", opacity: 0.6 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  {bird.name}
                </h2>
              </div>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {bird.description}
              </p>
              <p
                className="text-sm italic px-4 py-3 rounded-lg"
                style={{
                  color: "var(--text-secondary)",
                  backgroundColor: "var(--bg-alt)",
                  borderLeft: "3px solid var(--accent)",
                }}
              >
                <strong style={{ color: "var(--accent)", fontStyle: "normal" }}>
                  Good to know:
                </strong>{" "}
                {bird.fact}
              </p>
              {index < birds.length - 1 && (
                <hr className="mt-12" style={{ borderColor: "var(--border)" }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── ATTRIBUTION ── */}
      <section className="py-8" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs" style={{ color: "var(--text-secondary)", opacity: 0.65 }}>
            Photos: Unsplash contributors. Species information based on Audubon Society field guides.
          </p>
        </div>
      </section>
    </>
  );
}
