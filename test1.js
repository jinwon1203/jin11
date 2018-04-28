let kkkkk = 0
let anu = 0
let st = 0
let bnu = 0
let nu = 0
input.onButtonPressed(Button.B, () => {
    if (st < 2) {
        st += 1
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        if (kkkkk == 1) {
            basic.showNumber(anu + bnu)
        }
        if (kkkkk == 2) {
            basic.showNumber(anu * bnu)
        }
        if (kkkkk == 3) {
            basic.showNumber(anu / bnu)
        }
        if (kkkkk == 4) {
            basic.showNumber(anu - bnu)
        }
        st = 0
        anu = 0
        bnu = 0
        kkkkk = 0
        basic.pause(1000)
        basic.showNumber(0)
    }
})
input.onButtonPressed(Button.A, () => {
    if (st == 0) {
        if (anu < 10) {
            anu += 1
        } else {
            anu = 0
        }
        basic.showNumber(anu)
    } else {
        if (st == 1) {
            if (kkkkk < 4) {
                kkkkk += 1
            } else {
                kkkkk = 1
            }
            if (kkkkk == 1) {
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    `)
            }
            if (kkkkk == 2) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (kkkkk == 3) {
                basic.showLeds(`
                    . . # . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . # . .
                    `)
            }
            if (kkkkk == 4) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
        } else {
            if (st == 2) {
                if (bnu < 10) {
                    bnu += 1
                } else {
                    bnu = 0
                }
                basic.showNumber(bnu)
            }
        }
    }
})
nu = 0
bnu = 0
anu = 0
st = 0
kkkkk = 0
basic.showNumber(nu)
