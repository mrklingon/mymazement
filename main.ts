function Yval (spot: number) {
    return Math.trunc(spot / radius)
}
function bldMaze () {
    world[loc] = 0
    dispWorld()
    while (loc != goal) {
        dir = randint(0, 3)
        if (dir == 0) {
            loc = North(loc)
        }
        if (dir == 1) {
            loc = East(loc)
        }
        if (dir == 2) {
            loc = South(loc)
        }
        if (dir == 3) {
            loc = West(loc)
        }
        world[loc] = 0
        basic.pause(100)
        dispWorld()
    }
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
input.onButtonPressed(Button.A, function () {
    start = 0
    loc = 0
    goal = Usize - 1
    createWorld(radius)
    dispWorld()
    bldMaze()
})
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
let dir = 0
let world: number[] = []
let goal = 0
let loc = 0
let start = 0
let Usize = 0
let radius = 0
let maze = false
radius = 5
Usize = radius * radius
start = 0
loc = 0
goal = Usize - 1
createWorld(radius)
dispWorld()
