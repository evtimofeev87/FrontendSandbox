console.log('start');
let weights1 = [[1,2,3],[4,5,6],[7,8,9]];
let weights2 = [[4,5,6],[1,2,3],[7,8,9]];
let weights3 = [[1,2,3],[7,8,9],[4,5,6]];

let layersWeights = [weights1,weights2,weights3];

let input = [7,5,3];

let w_sum = (input, weights) => {
    let result = 0;
    for(let i = 0; i< input.length;i++)
        result += input[i] * weights[i];
    return result;
}

let getLayer = (input, weightsForLayer) => {
    let layer = [];
    for(let i = 0; i<input.length;i++) {
        layer.push(w_sum(input,weightsForLayer[i]))
    }
    return layer;
}

let predict = (input,layersWeights) => {
    let layers = [input];
    for(weightsForLayer of layersWeights)
        layers.push(getLayer(input,weightsForLayer));

    return layers;
}

console.log(predict(input,layersWeights));

