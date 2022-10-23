function randomPoints() {
    let pointArray = []
    const max = 400;
    const pointAmount = Math.floor(Math.random() * max);
    for(let i = 0;  i>pointAmount; i++) {
        
        const gridCol = Math.floor(Math.random() * pointAmount);
        const gridRow = Math.floor(Math.random() * pointAmount);
        const colString = `${gridCol}/${gridCol+1}`;
        const rowString = `${gridRow}/${gridRow+1}`;
        pointArray.push(
            {
                id: i,
                city: "Berlin",
                people: 5,
                location: {gridColumn:colString,gridRow:rowString},
                enabled: true,
                showInfo: false
            }
        )
    }
    return pointArray;
}

export default randomPoints;