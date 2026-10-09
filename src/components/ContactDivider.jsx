function ContactDivider({ darkMode }) {
    return (
        <svg viewBox="0 0 2000 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
            <path d=" M0 70 C120 45, 200 78, 320 55 C450 32, 560 75, 690 50
                    C820 35, 930 67, 1060 52 C1190 38, 1320 75, 1450 50
                    C1580 35, 1710 70, 1830 52 C1910 42, 1960 60, 2000 48
                    L2000 140 L0 140Z"
                fill={darkMode ? "#4A3D34" : "#E5CDBE"}/>
        </svg>
    );
}

export default ContactDivider;