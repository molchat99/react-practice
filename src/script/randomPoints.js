function randomPoints(gridSize) {
    let pointArray = []
    const max = gridSize*gridSize;
    const pointAmount = Math.floor(Math.random() * max);
    console.log('Generated', pointAmount, 'points')
    for(let i = 0;  i<pointAmount; i++) {
        
        const gridCol = Math.floor(Math.random() * gridSize);
        const gridRow = Math.floor(Math.random() * gridSize);
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