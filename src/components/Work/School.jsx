import EducItem from "./EducItem";


function School() {
    const educationData = [
        {
            logoSrc: "https://media.designrush.com/inspiration_images/131656/conversions/_1523460223_965_Harvard-Wreath-Logo_ab2ece9fbd52-desktop.jpg",
            title: "CS50x Harvard",
            duration: "2/23 - 5/23",
            link: "#"
        },
        {
            logoSrc: "https://media.designrush.com/inspiration_images/131656/conversions/_1523460223_965_Harvard-Wreath-Logo_ab2ece9fbd52-desktop.jpg",
            title: "CS50w Harvard",
            duration: "12/23 - 6/24",
            link: "#"
        },
        {
            logoSrc: "https://yt3.googleusercontent.com/ytc/AIdro_kRcKOU4apMYom4t7jG-mr15F2pKD_eAfStKx_h49pVyg=s160-c-k-c0x00ffffff-no-rj",
            title: "Web Dev AppBrewery",
            duration: "2/24 - Present",
            link: "#"
        },
        {
            logoSrc: "https://upload.wikimedia.org/wikipedia/en/d/d2/Cavite_State_University_%28CvSU%29.png",
            title: "CompSci CVSU",
            duration: "8/2022 - Present",
            link: "#"
        }
    ];

    return (
        <div className="row mt-5 pt-5 flexed center-container px-3">
            {educationData.map((item, index) => (
                <EducItem
                    key={index}
                    logoSrc={item.logoSrc}
                    title={item.title}
                    duration={item.duration}
                    link={item.link}
                />
            ))}
        </div>
    );
}

export default School;