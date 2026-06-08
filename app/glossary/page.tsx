import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Bird Feeder Camera Glossary | BirdCamly",
  description: "Definitions for smart bird feeder camera terms — from AI Bird ID and EVR to IP ratings, solar capacity, and species databases.",
  alternates: {
    canonical: "https://birdcamly.com/glossary",
  },
};

const terms = [
  {
    term: "AI Bird ID",
    def: "Machine learning technology that identifies bird species from camera images in real time. The model is trained on millions of labeled bird photographs and runs either on the camera hardware or in the cloud.",
  },
  {
    term: "EVR (Event Video Recording)",
    def: "A recording mode where the camera captures video clips only when motion or a perch sensor is triggered, rather than recording continuously. EVR dramatically extends battery life and reduces storage use.",
  },
  {
    term: "2.4GHz Wi-Fi",
    def: "The wireless network band used by nearly all smart bird feeder cameras. 2.4GHz has longer range and better wall penetration than 5GHz, making it more reliable for cameras positioned in the backyard.",
  },
  {
    term: "MicroSD Storage",
    def: "Local flash memory card storage used by many smart feeder cameras to record footage without a cloud subscription. High-endurance cards (Class 10, U3) are recommended for continuous outdoor recording.",
  },
  {
    term: "Cloud Storage",
    def: "Remote server-based storage provided by the camera manufacturer, typically via a monthly subscription. Enables searchable footage history, cross-device access, and automatic AI organization of clips by species.",
  },
  {
    term: "Motion Detection",
    def: "Electronic sensor technology that triggers the camera to record when movement is detected in its field of view. Sensitivity is adjustable on most cameras to reduce false triggers from waving branches.",
  },
  {
    term: "Infrared Night Vision",
    def: "Night recording technology that uses infrared LEDs to illuminate the scene invisibly to both birds and humans, producing black-and-white footage in darkness. The most common night vision type in bird feeder cameras.",
  },
  {
    term: "Color Night Vision",
    def: "Advanced night recording technology that uses ambient light amplification to produce color footage in low-light conditions. Delivers more useful identification footage than infrared but requires some ambient light.",
  },
  {
    term: "Solar Panel Capacity (mAh/W)",
    def: "The wattage and associated battery capacity of a solar charging system. Higher wattage panels charge faster and handle cloudy days better. Combined with battery capacity (mAh), determines operational independence from USB charging.",
  },
  {
    term: "IP Rating (Weatherproofing)",
    def: "Ingress Protection rating indicating a camera's resistance to dust and water. IP65 means dust-tight and protected from direct water jets — the minimum for year-round outdoor use. IP66 and IP67 provide greater water resistance.",
  },
  {
    term: "Suet Feeder",
    def: "A bird feeder designed to hold suet cakes — rendered animal fat mixed with seeds, berries, or insects. Highly attractive to woodpeckers, nuthatches, chickadees, and other insect-eating birds, especially in winter.",
  },
  {
    term: "Nectar Feeder",
    def: "A specialized feeder designed for hummingbirds and orioles, containing sugar water (nectar). Cameras designed for nectar feeders must be compact enough not to obstruct feeding ports.",
  },
  {
    term: "Seed Capacity",
    def: "The volume of seed a feeder can hold, typically measured in cups or ounces. Larger capacity reduces refill frequency but may allow seed to spoil in wet weather if not consumed quickly.",
  },
  {
    term: "Species Database",
    def: "The catalog of bird species a camera's AI engine can identify. Ranges from ~200 common North American species on budget models to 10,000+ global species on premium platforms like Birdfy.",
  },
  {
    term: "Push Notification",
    def: "An alert sent from the camera's companion app to your smartphone when a bird event is detected. Notifications can typically be configured for all events, AI-identified species only, or smart summary digests.",
  },
  {
    term: "Live Streaming",
    def: "A feature that allows you to view the camera's live feed remotely via the smartphone app, regardless of your location. Requires an active Wi-Fi connection at the camera and a data or Wi-Fi connection on your phone.",
  },
  {
    term: "Two-Way Audio",
    def: "A camera feature that includes a microphone and speaker, allowing you to hear birds at your feeder and optionally speak through the camera. Rarely used actively but provides audio context for recordings.",
  },
  {
    term: "Wide-Angle Lens",
    def: "A camera lens with a field of view typically between 110° and 150°, allowing the camera to capture birds approaching from multiple directions without missing arrivals outside a narrow viewing zone.",
  },
  {
    term: "Frame Rate (fps)",
    def: "The number of individual image frames recorded per second of video. 30fps is the standard for smooth wildlife footage; 60fps provides smoother slow-motion capability. Higher frame rates require more storage and processing power.",
  },
  {
    term: "Squirrel Deterrent",
    def: "Physical or electronic mechanisms that prevent squirrels from accessing bird food. Examples include baffles (physical barriers on feeder poles), weight-activated perches that close ports under heavy animals, and motion-activated deterrents.",
  },
  {
    term: "Perch Sensor",
    def: "A pressure or capacitive sensor built into the feeder perch that triggers recording only when a bird's weight is detected. More precise than pure motion detection — reduces false triggers from shadows, wind, and background movement.",
  },
];

export default function GlossaryPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-12 border-b" style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}>
            Smart Bird Feeder Camera Glossary
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>
            {terms.length} key terms to help you understand smart bird feeder technology, features, and backyard birding concepts.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-4">
          {terms.map((item) => (
            <div
              key={item.term}
              className="rounded-xl border px-6 py-5"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
            >
              <h2 className="text-base font-bold mb-1" style={{ color: "var(--accent)", fontFamily: "var(--font-playfair)" }}>
                {item.term}
              </h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>{item.def}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
