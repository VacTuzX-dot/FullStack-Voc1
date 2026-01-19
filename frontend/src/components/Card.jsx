const cardData = [
  {
    id: 1,
    title: "ThieAudio Hype 4 MKII",
    rating: 8.0,
    text: "A $400 U-shaped set with sub-bass focus, transparent mids, and airy treble, backed by class-leading imaging and separation for the price.",
    image:
      "https://www.iemranking.com/images_400/featured/thieaudio-hype4-mkii-15-f709787b.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/thieaudio-hype-4-mk-2",
  },
  {
    id: 2,
    title: "XENNS Tea Pro SE",
    rating: 8.2,
    text: "Against nearby options, the SE reads like a preference-driven upgrade: a touch less bass than the older Tea Pro, a bit more airy and natural in the overall balance, and generally more engaging than sets that can feel safer or duller up top.",
    image:
      "https://www.iemranking.com/images_400/featured/xennsmangird-tea-pro-se-7-5f1362a3.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/xenns-tea-pro-se",
  },
  {
    id: 3,
    title: "Simgot Supermix 5",
    rating: 7.0,
    text: "Overall, Supermix 5 is a clean, accurate and technically capable option",
    image:
      "https://www.iemranking.com/images_400/featured/simgot-supermix5-5-10093c61.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/simgot-supermix-5",
  },
  {
    id: 4,
    title: "Kiwi Ears Orchestra II",
    rating: 7.3,
    text: "Compared with other Kiwi Ears sets and peers like the Astral, Mega 7, K4 or Dunu 242, Orchestra II comes across as the more refined, slightly more colored option, trading strict naturalness for extra bass punch and upper-mid energy that many listeners will find more exciting.",
    image:
      "https://www.iemranking.com/images_400/featured/kiwi-ears-orchestra-11-9319d329.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/kiwi-ears-orchestra-ii",
  },
  {
    id: 5,
    title: "Juzear Harrier",
    rating: 7.4,
    text: "Technical performance is a major strength: detail retrieval is among the best at this price, the soundstage offers above-average width with convincing depth and layering, and imaging and focus lock vocals and instruments firmly in place.",
    image:
      "https://www.iemranking.com/images_400/featured/juzear-harrier-1dd6ba2-micro-planar-drivers-in-ear-earphone-juzear-620244-968a2389.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/juzear-harrier",
  },
  {
    id: 6,
    title: "Hisenior Mega7",
    rating: 8.0,
    text: "The Hisenior Mega7 positions itself as a higher-end evolution of the Mega line, essentially a continuation of the Mega5 EST concept but executed with branded BA drivers at around $450. The shell is small, light and very comfortable.",
    image:
      "https://www.iemranking.com/images_400/featured/hisenior-20mega7-2003-1920x1920-d28b670e.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/hisenior-mega7",
  },
  {
    id: 7,
    title: "Softears RSV MK II",
    rating: 8.1,
    text: "The Softears RSV MK II takes the lead in the best IEMs for Gaming on IEMRanking.com",
    image:
      "https://www.iemranking.com/images_400/featured/dsc02062-450904d2.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/softears-rsv-mk-2",
  },
  {
    id: 8,
    title: "Ziigaat Horizon",
    rating: 7.9,
    text: "Community impressions describe robust sub-bass from the dynamic driver, clean mids from the BAs, and airy treble from the planar tweeters, with multiple listeners highlighting a notably expansive soundstage.",
    image:
      "https://www.iemranking.com/images_400/featured/ziigaat-horizon-17-e0afc103.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/ziigaat-horizon",
  },
  {
    id: 9,
    title: "Simgot EG280",
    rating: 6.9,
    text: 'On tonality and performance, the EG280 is pitched for positional accuracy and clarity—marketing materials emphasize "seamless frequency transition" and game-oriented EQ options',
    image:
      "https://www.iemranking.com/images_400/featured/simgot-eg280-21-1-ca8bf3e1.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/simgot-eg280",
  },
  {
    id: 10,
    title: "AFUL Dawn-X",
    rating: 8.8,
    text: "AFUL's house sound shows up here in its most polished form: Dawn-X is a tribrid (1DD + 8BA + 4EST + bone conduction) flagship at $1,300 that prioritizes consistent fit and execution over flash.",
    image:
      "https://www.iemranking.com/images_400/featured/aful-dawn-x-1dd8ba4est1bc-drivers-iems-aful-dawn-x-35mm-203267-6ac34003.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/aful-dawn-x",
  },
  {
    id: 11,
    title: "Fiio FX17",
    rating: 8.4,
    text: "Tonally, the FX17 comes across as warm-neutral / mild U-shape: bass is tight and controlled rather than boosted, mids are natural with good timbre, and treble is smooth yet extended without obvious glare.",
    image:
      "https://www.iemranking.com/images_400/featured/fiio-20fx17-d-800x800-d8237e21.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/fiio-fx17",
  },
  {
    id: 12,
    title: "Ziigaat Odyssey 2",
    rating: 7.4,
    text: "The ZiiGaat x Hangout.Audio Odyssey 2 is a hybrid 1DD+3BA IEM that pairs a new bio-cellulose dynamic driver with three Knowles armatures, aiming for a balanced, reference-leaning presentation.",
    image:
      "https://www.iemranking.com/images_400/featured/ziigaat-odyssey-2-14-06fc2a89.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/ziigaat-odyssey-2",
  },
  {
    id: 13,
    title: "Nicehck Rockies",
    rating: 8.0,
    text: "The NiceHCK Rockies deliver a cohesive sound signature centered around a powerful yet controlled bass response that avoids bleeding into the mids. Its natural midrange ensures authenticity without artificial thickening.",
    image:
      "https://www.iemranking.com/images_400/featured/27-7abf06af-11ed-45e1-9daf-ac170152f4c0-a4c9262b.png",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/nicehck-rockies",
  },
  {
    id: 14,
    title: "Dunu Glacier",
    rating: 8.3,
    text: "The Glacier offers an unparalleled sense of space and effortless presentation. It doesn't compete on technical aggression but instead offers a transportive, almost spiritual listening experience.",
    image:
      "https://www.iemranking.com/images_400/featured/dunu-glacier-1dd4ba4est-tribrid-flagship-iems-hifigo-576613-1000x1000-9aaed5ef.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/dunu-glacier",
  },
  {
    id: 15,
    title: "Crinear Daybreak",
    rating: 7.6,
    text: "The CrinEar Daybreak delivers a well-balanced sound signature tuned to the IEF Preference 2025 curve, offering natural tonality with a controlled bass boost and detailed mids.",
    image:
      "https://www.iemranking.com/images_400/featured/crinear-daybreak-4e2f2730.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/crinear-daybreak",
  },
  {
    id: 16,
    title: "ThieAudio Monarch MK4",
    rating: 8.7,
    text: "IMPACT² dual dynamic drivers deliver textured, powerful bass, while redesigned electrostatic drivers enable treble that extends smoothly to 40kHz without harshness.",
    image:
      "https://www.iemranking.com/images_400/featured/img-07831-10ae6e3b.jpg",
    buttonText: "Explore",
    url: "https://www.iemranking.com/show/thieaudio-monarch-mk-4",
  },
];

export { cardData };

export default function Card({ searchQuery = "" }) {
  const filteredCards = cardData.filter((card) => {
    // ถ้าไม่มีการค้นหา แสดงทุกรายการ
    if (!searchQuery || searchQuery.trim() === "") return true;

    // ถ้ามีการค้นหา กรองตามคำค้น (เฉพาะชื่อ)
    const query = searchQuery.toLowerCase();
    return card.title.toLowerCase().includes(query);
  });

  if (filteredCards.length === 0) {
    return (
      <div className="text-center py-5">
        <i className="bi bi-search fs-1 text-muted"></i>
        <p className="mt-3 text-muted">ไม่พบผลลัพธ์สำหรับ "{searchQuery}"</p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {filteredCards.map((card) => (
        <div key={card.id} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm card-hover">
            <img
              src={card.image}
              alt={card.title}
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
              loading="lazy"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-semibold">{card.title}</h5>
              <p className="card-text text-muted small flex-grow-1">
                {card.text}
              </p>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm mt-2"
              >
                {card.buttonText} <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
