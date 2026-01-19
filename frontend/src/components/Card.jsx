const cardData = [
  {
    id: 1,
    title: "Kiwi Ears Astral",
    text: "IEM hybrid สายพลังเสียงสะอาด โปร่งใส เวทีเสียงกว้าง เบสแน่นกลางชัด แหลมละเอียด เหมาะกับเพลง Pop, Rock",
    image:
      "https://cdn.shopify.com/s/files/1/0582/0317/7110/files/Kiwi_Ears_Astral_11.jpg?v=1744884763",
    buttonText: "Explore",
    url: "https://www.linsoul.com/products/kiwi-ears-astral",
  },
  {
    id: 2,
    title: "Moondrop Blessing 3",
    text: "IEM Hybrid ระดับเรือธงสายคุ้มค่า ให้เสียงบาลานซ์ รายละเอียดสูง เวทีเสียงกว้าง แยกแยะชิ้นดนตรีได้ดีเยี่ยม",
    image:
      "https://static.wixstatic.com/media/e15cb5_b5dfc2593ed446cc80a5a784f3afcfbb~mv2.webp",
    buttonText: "Explore",
    url: "https://www.linsoul.com/products/moondrop-blessing-3",
  },
  {
    id: 3,
    title: "7HZ Sonus",
    text: "IEM เสียงบาลานซ์ เบสอุ่นลงตัว รายละเอียดกลางเด่น แหลมไม่บาดหู ฟังสบายยาวๆ ดีไซน์สวยงาม",
    image:
      "https://conceptkart.com/cdn/shop/files/Concept-Kart-7HZ-Sonus-IEM-Black-1-_5_62bd0d04-94d2-44f6-965b-f4fe80f0ac1b_900x.jpg?v=1695470334",
    buttonText: "Explore",
    url: "https://www.linsoul.com/products/7hz-sonus",
  },
  {
    id: 4,
    title: "Sennheiser IE 600",
    text: "หูฟัง In-Ear ระดับ Audiophile วัสดุ ZR01 amorphous zirconium เสียงร้องเป็นธรรมชาติน่าหลงใหล เบสกระชับเก็บตัวไว",
    image:
      "https://assets.sennheiser.com/img/26106/product_detail_x2_desktop_IE600_fv_Sennheiser.jpg",
    buttonText: "Explore",
    url: "https://www.sennheiser-hearing.com/en-US/p/ie-600/",
  },
  {
    id: 5,
    title: "Sony IER-Z1R",
    text: "Signature Series จาก Sony ที่สุดแห่งความละเอียดเสียง เบสลึกระดับ Sub-bass แหลมประกายระยิบระยับ เวทีเสียงกว้างใหญ่",
    image:
      "https://www.sony.co.th/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9",
    buttonText: "Explore",
    url: "https://www.sony.co.th/th/electronics/in-ear-headphones/ier-z1r",
  },
  {
    id: 6,
    title: "Shure SE846 Gen 2",
    text: "ตำนาน IEM 4 ไดรเวอร์ ปรับโทนเสียงได้ 4 แบบ (Balanced, Warm, Bright, Extended) กันเสียงรบกวนดีเยี่ยม",
    image:
      "https://www.shure.com/product-images/SE846-Gen2/clear/SE846-CL-Gen2_1_1000x1000.png",
    buttonText: "Explore",
    url: "https://www.shure.com/en-US/products/earphones/se846",
  },
  {
    id: 7,
    title: "Fiio FH9",
    text: "Hybrid IEM 7 ไดรเวอร์ (1DD + 6BA) บอดี้ไทเทเนียม เสียงอิ่มหนา เบสทรงพลัง เวทีเสียงเปิดกว้างด้วยดีไซน์ Open-back",
    image: "https://ae01.alicdn.com/kf/H5c8c5c5c0c6c4c5c8c5c0c6c4c5c8c5c.jpg",
    buttonText: "Explore",
    url: "https://www.fiio.com/fh9",
  },
  {
    id: 8,
    title: "ThieAudio Monarch MKIII",
    text: "Tribrid IEM (2DD + 6BA + 2EST) ที่สุดของความคุ้มค่า ให้รายละเอียดยิบย่อยชัดเจน เบส impact ดีเยี่ยม",
    image:
      "https://cdn.shopify.com/s/files/1/0057/9485/7060/files/1_25e8e8e8-8e8e-4e8e-8e8e-8e8e8e8e8e8e.jpg?v=1690000000",
    buttonText: "Explore",
    url: "https://www.linsoul.com/products/thieaudio-monarch-mkiii",
  },
  {
    id: 9,
    title: "Campfire Audio Andromeda Emerald Sea",
    text: "IEM 5 BA ไดรเวอร์ รุ่นปรับปรุงใหม่ เสียงกลางหวานหยดย้อย แหลมทอดตัวไกล เป็นเอกลักษณ์ของ Andromeda",
    image:
      "https://cdn.shopify.com/s/files/1/1199/8390/products/Andromeda_Emerald_Sea_Front_1024x1024.jpg?v=1678000000",
    buttonText: "Explore",
    url: "https://campfireaudio.com/shop/andromeda-emerald-sea/",
  },
  {
    id: 10,
    title: "Unique Melody Mest MKIII",
    text: "Quadbrid IEM (DD + BA + EST + Bone Conduction) ประสบการณ์เสียงที่แปลกใหม่ รายละเอียดสมจริงจนน่าตกใจ",
    image:
      "https://shop.musicteck.com/cdn/shop/files/MEST_MKIII_CF_Red_1.jpg?v=1680000000",
    buttonText: "Explore",
    url: "https://www.uniquemelody.co/product/mest-mkiii-cf/",
  },
  {
    id: 11,
    title: "SeeAudio Yume II",
    text: "Hybrid IEM (1DD + 2BA) จูนเสียงตาม harman target ฟังง่าย เข้าถึงอารมณ์เพลง ราคาจับต้องได้",
    image:
      "https://cdn.shopify.com/s/files/1/0057/9485/7060/products/SeeAudio-Yume-II-2.jpg?v=1670000000",
    buttonText: "Explore",
    url: "https://www.linsoul.com/products/seeaudio-yume-ii",
  },
  {
    id: 12,
    title: "Softears Volume",
    text: "Hybrid IEM (1DD + 2BA) ดีไซน์มินิมอล เสียงร้องใสเคลียร์ เบสกระชับ เหมาะกับเพลง Vocal, Acoustic",
    image:
      "https://cdn.shopify.com/s/files/1/0057/9485/7060/products/Softears-Volume-1.jpg?v=1640000000",
    buttonText: "Explore",
    url: "https://www.linsoul.com/products/softears-volume",
  },
];

export { cardData };

export default function Card({ searchQuery = "" }) {
  const filteredCards = cardData.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.text.toLowerCase().includes(searchQuery.toLowerCase()),
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
