function HeroDivider({ darkMode }) {
    return (
        <svg viewBox="0 0 2000 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
            <path d=" M0 60 C100 38, 180 65, 300 52 C430 38, 540 40, 660 55 C790 72, 900 76, 1010 72 C1140 68, 1250 38, 1380 55 C1510 70, 1630 48, 1750 62 C1850 72, 1930 68, 2000 55 L2000 140 L0 140 Z " fill={darkMode ? "#444A34" : "#E9E0D4"}/>
        </svg>
    );
}

export default HeroDivider;
