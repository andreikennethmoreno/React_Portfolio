function EducItem({ logoSrc, title, duration, link }) {
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex align-items-center mt-4">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <img height="50" src={logoSrc} alt={`${title} logo`} />
            </div>
            <div>
                <p className="fs-6 pcon"><b>{title}</b></p>
                <a href={link} target="_blank" className="text-decoration-none">
                    <p className="fs-5 plink">{duration}</p>
                </a>
            </div>
        </div>
    )
}

export default EducItem;