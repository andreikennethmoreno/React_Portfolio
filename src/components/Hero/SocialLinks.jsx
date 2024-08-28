import React from 'react';
import { LinkedInIcon, GithubIcon } from '../SubComponents/Icons';

function SocialLinks() {
    const socialLinks = [
        {
            href: "https://example.com",
            svg: <LinkedInIcon color="icon m-1" />,
        },
        {
            href: "https://another-example.com",
            svg: <GithubIcon color="icon m-1"/>,
        }
    ];

    return (
        <div>
            {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.svg}
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
