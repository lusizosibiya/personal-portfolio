function ProjectDivider({ darkMode }) {
    return (
        <svg viewBox="0 0 2000 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
            <path d=" M0 65 C100 35, 180 70, 300 50 C430 30, 520 68, 650 48
                      C780 30, 900 65, 1030 52 C1170 35, 1280 70, 1400 48
                      C1550 30, 1660 67, 1780 50 C1880 40, 1940 62, 2000 48
                      L2000 140 L0 140 Z" fill={darkMode ? "#343A28" : "#A58F79"}/>
        </svg>
    );
}

export default ProjectDivider;