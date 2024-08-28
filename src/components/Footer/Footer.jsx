import { LinkedInIcon, GithubIcon } from '../SubComponents/Icons';


function Footer() {
    return (
        <section id="footer">
            <div className="container col-xl-10 col-xxl-8 py-5 ">
                <footer className="d-flex flex-wrap justify-content-between align-items-center px-2 mt-2">
                    <div className="col-6 d-flex justify-content-start">
                        <p className="px-4 fs-6" style={{ color: 'white' }}><b>
                            React JS + Vanilla CSS
                        </b></p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <p className="px-4 fs-6" ><b>
                        <LinkedInIcon color="white m-1"/>
                        <GithubIcon color="white m-1"/>
                        </b></p>
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default Footer;
