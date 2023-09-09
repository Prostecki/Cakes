function Slider({ sliders }) {

  return (

<div className="container">
    <div id="mySlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {sliders.map((slide) => (
            <div className={`carousel-item ${slide.id === 1 ? 'active' : ''}`} key={slide.id}>
                <img src={slide.imageUrl} className="d-block w-100" alt={slide.title} />
                <div className="carousel-caption d-none d-md-block">
                <h2>{slide.title}</h2>
                <p>{slide.content}</p>
                </div>
            </div>
            ))}
        </div>
        <a className="carousel-control-prev" href="#mySlider" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#mySlider" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </a>
    </div>
</div>

  );
};

export default Slider;
