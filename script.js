function gera() {
    let numb = document.getElementById("numb")
    let tab = document.getElementById("seltab")
    if (numb.value.length == 0) {
        window.alert("Digite um número")
    } else {
        let n = Number(numb.value)
        tab.innerHTML = ""
        for(var c = 1; c <= 10; c++) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}