function randomPoints(gridSize, pointPercentage) {
    let uniquePositions = [];
    let pointArray = []
    const maxPointAmount = gridSize*gridSize;
    let pointAmount = 0;
    let i = 0;

    pointAmount = getRandomArbitrary(1,maxPointAmount);

    pointAmount = maxPointAmount * (pointPercentage/100)

    console.log('Generating', pointAmount, 'points')

    for(i = 0; i < pointAmount; i++) {
        let posArray = randPosition(gridSize)
        let cssClass = "data-point ";
        cssClass += (i===0) ? "pivot" : "";

        let point = {
            id: i+1,
            name: "test",
            location: {gridColumn: posArray[0], gridRow: posArray[1]},
            enabled: false,
            showInfo: false,
            class: cssClass
        }


        // only add datapoints with unique positions
        let posString = `${posArray[0]}/${posArray[1]}`
        if(!uniquePositions.includes(posString)){
            uniquePositions.push(posString);
            pointArray.push(point)
        } else {
            console.log("duplicate found")
            i--;
        }
    }


    return pointArray;
}

export default randomPoints;

function randPosition(gridSize) {
    const randCol = getRandomArbitrary(1,parseInt(gridSize)+1);
    const randRow = getRandomArbitrary(1,parseInt(gridSize)+1);
    let col = `${randCol}/${randCol+1}`
    let row = `${randRow}/${randRow+1}`
    return [col, row]
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}