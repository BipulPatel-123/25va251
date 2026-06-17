function Student({ name, course, marks }) {
    // Using male-coded hair types to ensure no "girl avatars" as requested
    const maleHairTypes = "shortHair,noHair,frizzle,shaggy,shaggyMullet,shortCurly,shortFlat,shortRound,sides,theCaesar,theCaesarAndSidePart";
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&topType=${maleHairTypes}`;

    return (
        <div className="student-card">
            <div className="avatar-container">
                <img src={avatarUrl} alt={name} className="avatar" />
            </div>
            <h2 className="student-name">{name}</h2>
            <p className="student-course">{course}</p>
            <div className="marks-badge">
                <span className="marks-value">{marks}</span>
                <span className="marks-label">/ 100</span>
            </div>
        </div>
    )
}

export default Student