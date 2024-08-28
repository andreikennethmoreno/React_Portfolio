import Header from "../SubComponents/Header"
import ContactItem from "./ContactItem"
import { LocationIcon, GmailIcon, YoutubeIcon } from "../SubComponents/Icons"

function Contact () {

    // contactData.js
    const contactData = [
    {
        id: 1,
        icon: <LocationIcon />,
        title: "Location",
        detail: "Cavite, Philippines",
        link: "#"
    },
    {
        id: 2,
        icon: <GmailIcon />,
        title: "Gmail",
        detail: "kennonirom@gmail.com",
        link: "#"
    },
    {
        id: 3,
        icon: <YoutubeIcon />,
        title: "Youtube",
        detail: "Kenn Onirom",
        link: "#"
    },
    ];

    


    return (
        <section className="off-white" id="contact">
            <div className="about container col-xl-10 col-xxl-8 px-5 py-5 mt-5 start ">
                <div className="row flex-lg-row align-items-center g-lg-5 py-5">
                  <Header activeTitle="CONTACT"  h2Title="Don't be shy! Hit me up! 👇"/>
                    <div className="row px-5  align-items-start">
                    {contactData.map(item => (
                        <ContactItem
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            detail={item.detail}
                            link={item.link}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact