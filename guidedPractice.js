const myInsturments= ['flute','clarinet','saxophone','trumpet','trombone']
myInsturments.push('tuba','basson')

function getFirstInstrument(myInsturments){
    return myInsturments [0]
}

function getFirstLast(myInsturments){
    const output=[]
    output.push(myInsturments[0])
    output.push(myInsturments[6])
    return output
}
 