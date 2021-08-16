const responsiveInput = (() => {
    // password strength
    const vocabMap = {
        1: "Weak",
        2: "Medium",
        3: "Strong",
        4: "Strongest",
    }
    
    const passwStr = document.getElementById('passwStr')
    const strVal = document.getElementById('strValue')

    strVal.textContent = vocabMap[passwStr.value]
    passwStr.oninput = () => {
        strVal.textContent = vocabMap[passwStr.value]
    }

    // password length
    const passwLen = document.getElementById('passwLen')
    const lenVal = document.getElementById('lenValue')

    lenVal.textContent = passwLen.value
    passwLen.oninput = function() {
        lenVal.textContent = passwLen.value
    }
})()

const passGenerator = (passwLen, passwStr) => {
    let result = ""

    const fields = [
        'abcdefghijklmnopqrstuvwxyz',
        '1234567890',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '!#$%&"()*+,-./:;<=>?@[\]^_`{|}~',
    ]

    while (result.length < passwLen) {
        let randomField = Math.floor(Math.random() * passwStr)
        // console.log(randomField)
        let temp = fields[randomField]
        // console.log(temp)
        let letter = temp[Math.floor(Math.random() * temp.length)]
        // console.log(letter)
        result += letter
    }

    return result
}

document.getElementById('passwGen').addEventListener('click', (e) => {
    e.preventDefault()

    const passwStr = document.getElementById('passwStr').value
    // console.log(passwStr)
    const passwLen = document.getElementById('passwLen').value
    // console.log(passwLen)

    const passBlock = document.querySelector('.password-block')
    passBlock.value = passGenerator(passwLen, passwStr)
})

document.getElementById('copy-pass').addEventListener('click', () => {
    const copyText = document.getElementById('pass')

    /* Select the text field */
    copyText.select()
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    const alertCopied = document.querySelector('.copied')
    alertCopied.classList.add('alert')
    alertCopied.textContent = "Copied to clipboard: " + copyText.value

    setTimeout(() => {
        alertCopied.classList.remove('alert')
    },3000)
})

document.getElementById('copy-pass').addEventListener('mouseover', () => {
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
})