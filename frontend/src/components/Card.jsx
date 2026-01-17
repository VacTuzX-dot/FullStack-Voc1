const cardData = [
  {
    id: 1,
    title: "Kiwi Ears Astral",
    text: "IEM hybrid สายพลังเสียงสะอาด โปร่งใส เวทีเสียงกว้าง เบสแน่นกลางชัด แหลมละเอียด",
    image:
      "https://cdn.shopify.com/s/files/1/0582/0317/7110/files/Kiwi_Ears_Astral_11.jpg?v=1744884763",
    buttonText: "Explore",
    url: "https://www.linsoul.com/products/kiwi-ears-astral",
  },
  {
    id: 2,
    title: "Moondrop Blessing 3",
    text: "IEM Hybrid ระดับเรือธงสายคุ้มค่า ให้เสียงบาลานซ์ รายละเอียดสูง เวทีเสียงกว้าง",
    image:
      "https://static.wixstatic.com/media/e15cb5_b5dfc2593ed446cc80a5a784f3afcfbb~mv2.webp",
    buttonText: "Explore",
    url: "https://www.linsoul.com/products/moondrop-blessing-3",
  },
  {
    id: 3,
    title: "7HZ Sonus",
    text: "IEM เสียงบาลานซ์ เบสอุ่นลงตัว รายละเอียดกลางเด่น แหลมไม่บาดหู ฟังสบายยาวๆ",
    image:
      "https://conceptkart.com/cdn/shop/files/Concept-Kart-7HZ-Sonus-IEM-Black-1-_5_62bd0d04-94d2-44f6-965b-f4fe80f0ac1b_900x.jpg?v=1695470334",
    buttonText: "Explore",
    url: "https://www.linsoul.com/products/7hz-sonus",
  },
];

export { cardData };

export default function Card({ searchQuery = "" }) {
  const filteredCards = cardData.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
