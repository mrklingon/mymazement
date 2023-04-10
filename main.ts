function wwall () {
    for (let index = 0; index <= 4; index++) {
        led.plot(0, index)
    }
}
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
input.onGesture(Gesture.LogoUp, function () {
    if (world[North(loc)] == 0) {
        loc = North(loc)
        shoWalls(loc)
    } else {
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
})
function East (Spot: number) {
    return (Usize + (Spot + 1)) % Usize
}
function nwall () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
    }
}
input.onGesture(Gesture.TiltLeft, function () {
    if (world[West(loc)] == 0) {
        loc = West(loc)
        shoWalls(loc)
    } else {
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
})
function shoWalls (spot: number) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (world[North(spot)] == 1) {
        nwall()
    }
    if (world[East(spot)] == 1) {
        ewall()
    }
    if (world[South(spot)] == 1) {
        swall()
    }
    if (world[West(spot)] == 1) {
        wwall()
    }
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
function test () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    nwall()
    swall()
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    wwall()
    ewall()
    basic.pause(500)
}
input.onButtonPressed(Button.B, function () {
    shoWalls(loc)
})
input.onGesture(Gesture.TiltRight, function () {
    if (world[East(loc)] == 0) {
        loc = East(loc)
        shoWalls(loc)
    } else {
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (world[South(loc)] == 0) {
        loc = South(loc)
        shoWalls(loc)
    } else {
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
})
function swall () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 4)
    }
}
function North (Spot: number) {
    return (Usize + (Spot - radius)) % Usize
}
function Xval (spot: number) {
    return spot % radius
}
function ewall () {
    for (let index = 0; index <= 4; index++) {
        led.plot(4, index)
    }
}
let dir = 0
let world: number[] = []
let goal = 0
let loc = 0
let start = 0
let Usize = 0
let radius = 0
test()
let maze = false
radius = 5
Usize = radius * radius
start = 0
loc = 0
goal = Usize - 1
createWorld(radius)
dispWorld()
