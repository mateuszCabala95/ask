const AX = document.querySelector("#AX")
const BX = document.querySelector("#BX")
const CX = document.querySelector("#CX")
const DX = document.querySelector("#DX")

const regexp = /^[0-9a-fA-F]+$/

const assemblerOption = document.querySelector("#assembler")

assemblerOption.addEventListener("change", () => {

    switch (assemblerOption.value) {

        case "moveAXtoBX": {
            if (!regexp.test(AX.value)) {
                alert("Nieprawidłowa wartość komórki")
                AX.value = ''
                break
            }
            moveFromTo(AX, BX)
            break
        }
        case "moveAXToCX": {
            if (!regexp.test(AX.value)) {
                alert("Nieprawidłowa wartość komórki")
                AX.value = ''
                break
            }
            moveFromTo(AX, CX)
            break
        }
        case "moveAXtoDX":{
            if (!regexp.test(AX.value)) {
                alert("Nieprawidłowa wartość komórki")
                AX.value = ''
                break
            }
            moveFromTo(AX, DX)
            break
        }
        case "moveBXToAX":{
            if (!regexp.test(BX.value)) {
                alert("Nieprawidłowa wartość komórki")
                BX.value = ''
                break
            }
            moveFromTo(BX,AX)
            break
        }
        case "moveBXToCX":{
            if (!regexp.test(BX.value)) {
                alert("Nieprawidłowa wartość komórki")
                BX.value = ''
                break
            }
            moveFromTo(BX,CX)
            break
        }
        case "moveBXToDX":{
            if (!regexp.test(BX.value)) {
                alert("Nieprawidłowa wartość komórki")
                BX.value = ''
                break
            }
            moveFromTo(BX,DX)
            break
        }
        case "moveCXToAX":{
            if (!regexp.test(CX.value)) {
                alert("Nieprawidłowa wartość komórki")
                CX.value = ''
                break
            }
            moveFromTo(CX,AX)
            break
        }
        case "moveCXToBX":{
            if (!regexp.test(CX.value)) {
                alert("Nieprawidłowa wartość komórki")
                CX.value = ''
                break
            }
            moveFromTo(CX,BX)
            break
        }
        case "moveCXToDX":{
            if (!regexp.test(CX.value)) {
                alert("Nieprawidłowa wartość komórki")
                CX.value = ''
                break
            }
            moveFromTo(CX,DX)
            break
        }
        case "moveDXToAX": {
            if (!regexp.test(DX.value)) {
                alert("Nieprawidłowa wartość komórki")
                DX.value = ''
                break
            }
            moveFromTo(DX,AX)
            break
        }
        case "moveDXToBX": {
            if (!regexp.test(DX.value)) {
                alert("Nieprawidłowa wartość komórki")
                DX.value = ''
                break
            }
            moveFromTo(DX,BX)
            break
        }
        case "moveDXToCX": {
            if (!regexp.test(DX.value)) {
                alert("Nieprawidłowa wartość komórki")
                DX.value = ''
                break
            }
            moveFromTo(DX,CX)
            break
        }
    }
})


const moveFromTo = (from, to) => {
    to.value = from.value
    from.value = ""
}
