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
function Test () {
    world[Loc] = 0
    R = randint(0, 3)
    if (R == 0) {
        Loc = North(Loc)
    }
    if (R == 1) {
        Loc = East(Loc)
    }
    if (R == 2) {
        Loc = South(Loc)
    }
    if (R == 3) {
        Loc = West(Loc)
    }
    dispWorld()
}
function North (Spot: number) {
    return (Usize + (Spot - radius)) % Usize
}
function Xval (spot: number) {
    return spot % radius
}
let R = 0
let world: number[] = []
let Loc = 0
let Usize = 0
let radius = 0
radius = 5
Usize = radius * radius
Loc = 0
createWorld(radius)
dispWorld()
for (let index = 0; index < 15; index++) {
    Test()
}
