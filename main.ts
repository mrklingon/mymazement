function Yval (spot: number) {
    return Math.trunc(spot / radius)
}
function dispWorld () {
    for (let index = 0; index <= radius * radius - 0; index++) {
        if (world[index] == 1) {
            led.plot(Xval(index), Yval(index))
        } else {
            led.unplot(Xval(index), Yval(index))
        }
    }
}
function East (Spot: number) {
    return (Usize + (Spot + 1)) % Usize
}
function South (Spot: number) {
    return (Usize + (Spot + radius)) % Usize
}
function createWorld (rad: number) {
    world = []
    for (let index = 0; index < rad * rad; index++) {
        world.push(1)
    }
}
function West (Spot: number) {
    return (Usize + (Spot - 1)) % Usize
}
function North (Spot: number) {
    return (Usize + (Spot - radius)) % Usize
}
function Xval (spot: number) {
    return spot % radius
}
let world: number[] = []
let Usize = 0
let radius = 0
radius = 5
Usize = radius * radius
createWorld(radius)
dispWorld()
