const getBMI = () => {
    // Function to calculate BMI
    const calculateBMI = (weight, height) => {
        return (weight / ((height / 100) ** 2)).toFixed(2);
    };

    // Function to classify BMI and determine cell color
    const classifyBMI = (bmi) => {
        if (bmi < 18.5) return { category: "Underweight", color: "#ffff99" }; // Light yellow
        if (bmi >= 18.5 && bmi <= 24.9) return { category: "Normal", color: "#ccffcc" }; // Light green
        if (bmi >= 25 && bmi <= 29.9) return { category: "Overweight", color: "#ffff99" }; // Light yellow
        return { category: "Obese", color: "#ffcccc" }; // Light red
    };

    // Styling for the table, header, and cells
    const tableStyle = "border-collapse: collapse; width: 100%;";
    const thStyle = "border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;";
    const tdStyle = "border: 1px solid #ddd; padding: 8px;";
    const genderColors = { Female: "#ffccff", Male: "#cceeff" }; // Light pink for female, light blue for male

    let html = `<table style="${tableStyle}"><thead><tr style="${thStyle}"><th>Gender</th><th>Weight</th><th>Height</th><th>BMI</th><th>Category</th></tr></thead><tbody>`;

    // Define genders
    const genders = ["Male", "Female"];

    // Loop through genders, weights, and heights
    for (const gender of genders) {
        for (let weight = 40; weight <= 120; weight += 5) {
            for (let height = 150; height <= 200; height += 5) {
                const bmi = calculateBMI(weight, height);
                const { category, color } = classifyBMI(bmi);

                html += `<tr><td style="${tdStyle} background-color: ${genderColors[gender]};">${gender}</td><td style="${tdStyle}">${weight} kg</td><td style="${tdStyle}">${height} cm</td><td style="${tdStyle}">${bmi}</td><td style="${tdStyle} background-color: ${color};">${category}</td></tr>`;
            }
        }
    }

    html += "</tbody></table>";

    return html;
};

module.exports = {
    getBMI,
};
