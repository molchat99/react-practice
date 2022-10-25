function randomPoints(gridSize) {
    let pointArray = []
    const max = gridSize*gridSize;
    const pointAmount = Math.floor(Math.random() * max);
    console.log('Generated', pointAmount, 'points')
    let positions = [];
    for(let i = 0;  i<pointAmount; i++) {
        
        console.log("adding dataPoint...")
        const gridCol = Math.floor(Math.random() * gridSize);
        const gridRow = Math.floor(Math.random() * gridSize);
        const colString = `${gridCol}/${gridCol+1}`;
        const rowString = `${gridRow}/${gridRow+1}`;

        if(!positions.includes(colString+rowString)) {
            positions.push(colString+rowString)
            pointArray.push(
                {
                    id: i+1,
                    name: "test",
                    size: 5,
                    location: {gridColumn:colString,gridRow:rowString},
                    enabled: false,
                    showInfo: false,
                    class: "data-point"
                }
            ) 
        } else {
            console.log("duplicate found")
            i = i-1;
        }
           
    }

    pointArray[0].class = "data-point pivot"
    return pointArray;
}

export default randomPoints;