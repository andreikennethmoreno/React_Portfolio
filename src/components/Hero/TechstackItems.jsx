import Django from "../../assets/img/logo/dj.png"
import Html from "../../assets/img/logo/html.png"
import CSS from "../../assets/img/logo/css.png"
import JS from "../../assets/img/logo/js.png"
import Flask from "../../assets/img/logo/flask.png"

function TechstackItems() {
    const techStackItems = [
        { src: Django, alt: "Djnago" },
        { src: Html, alt: "app" },
        { src: CSS, alt: "app" },
        { src: JS, alt: "app" },
        { src: Flask, alt: "app" },
        { src: JS, alt: "app" },
        { src: JS, alt: "app" },
        { src: JS, alt: "app" }
    ];

    return (
        <>
            {techStackItems.map((item, index) => (
                <div key={index} className="col-2 col-lg-1 col-md-2 col-sm-3 col-3 app-container">
                    <img src={item.src} alt={item.alt} className="app" height="55px" />
                </div>
            ))}
        </>
    );
}

export default TechstackItems;
