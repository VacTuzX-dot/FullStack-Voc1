import { useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    image: "/images/image1.jpg",
    alt: "Slide 1",
    title: "Premium IEM Collection",
    subtitle: "ค้นพบหูฟังคุณภาพสูงที่เหมาะกับคุณ",
  },
  {
    id: 2,
    image: "/images/image2.png",
    alt: "Slide 2",
    title: "Expert Reviews",
    subtitle: "รีวิวจากผู้เชี่ยวชาญที่คุณไว้ใจได้",
  },
  {
    id: 3,
    image: "/images/image3.png",
    alt: "Slide 3",
    title: "Best Value IEMs",
    subtitle: "หูฟังคุณภาพดีในราคาที่คุ้มค่า",
  },
];

export default function Carousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const scrollToContent = () => {
    const contentSection = document.querySelector(".content-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="mainCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="5000"
      ref={carouselRef}
      style={{ marginTop: "-76px" }} // Offset for navbar height
    >
      <div className="carousel-indicators">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              margin: "0 6px",
              opacity: i === 0 ? 1 : 0.5,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
          >
            {/* Background Image Container */}
            <div
              style={{
                height: "100vh",
                width: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                loading={i === 0 ? "eager" : "lazy"}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)",
                }}
              />

              {/* Caption */}
              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                style={{
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                }}
              >
                <h2
                  className="display-3 fw-bold text-white mb-3"
                  style={{
                    textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                    animation: "fadeInUp 0.8s ease",
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  className="lead text-white-50 mb-4"
                  style={{
                    fontSize: "1.3rem",
                    textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                    maxWidth: "600px",
                  }}
                >
                  {slide.subtitle}
                </p>
                <button
                  onClick={scrollToContent}
                  className="btn btn-lg btn-outline-light px-5 py-3"
                  style={{
                    borderRadius: "50px",
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "2px solid rgba(255,255,255,0.5)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.3)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <i className="bi bi-arrow-down me-2"></i>
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="prev"
        style={{ width: "80px" }}
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "50%",
            padding: "15px",
          }}
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="next"
        style={{ width: "80px" }}
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "50%",
            padding: "15px",
          }}
        />
        <span className="visually-hidden">Next</span>
      </button>

      {/* Scroll Down Indicator */}
      <div
        onClick={scrollToContent}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          zIndex: 10,
          animation: "bounce 2s infinite",
        }}
      >
        <i
          className="bi bi-chevron-double-down text-white"
          style={{ fontSize: "2rem", opacity: 0.7 }}
        ></i>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .carousel-item {
          transition: opacity 1s ease-in-out !important;
        }
      `}</style>
    </div>
  );
}
