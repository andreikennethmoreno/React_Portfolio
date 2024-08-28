import DropdownItem from "./DropdownItem"

function Dropdown () {
    const dropdownItems = [
        { href: "#proj1", label: "Project 1" },
        { href: "#proj2", label: "Project 2" },
        { href: "#proj3", label: "Project 3" },
        { href: "#proj4", label: "Project 4" },
      ];

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#project" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
            </a>
            <ul className="dropdown-menu">
            {dropdownItems.map((item, index) => (
                <DropdownItem key={index} href={item.href} label={item.label} />
            ))}
            </ul>
        </li>
    )
}

export default Dropdown