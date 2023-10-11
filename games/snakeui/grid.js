const gridSize = 21;
export const getRandomGridPosition = () => {

    return {
        x: Math.floor(Math.random() * gridSize) + 1,
        y: Math.floor(Math.random() * gridSize) + 1
    }
}