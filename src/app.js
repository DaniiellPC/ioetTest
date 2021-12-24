const fs = require('fs')

const getFile = async () => {
    return new Promise(res => {
        let data2
        fs.readFile('../schedule.txt', 'utf-8', (err, data) => {
            if (err) console.log('Hay un error')
            data2 = data
            res(data2)
        })
    })
}

const managedData = async () => {
    let file2
    let names = []
    let schedule = []
    try {
        file2 = await getFile()
    } catch (error) {
        console.log(error)
    }
    const data = file2.split(/(\r\n|\n|\r)/gm)
    const filterData = data.filter(element =>
        element.includes('\r\n') !== true)

    let newArray = []
    for (element in filterData) {
        const name = filterData[element].split(/\=(.*)/g)
        names.push(name[0])
        schedule.push(name[1])
        const horario = name[1].split(',')
        newArray = [...newArray, {
            horario: horario,
            nombre: name[0],
        }]
    }
    for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 1; j < newArray.length; j++) {
            if (newArray[i] && newArray[j]) {
                for (let k = 0; k < newArray[i].horario.length; k++) {
                    for (let l = 0; l < newArray[j].horario.length; l++) {
                        if (newArray[i].nombre !== newArray[j].nombre) {
                            if (newArray[i].horario[k] === newArray[j].horario[l]) {
                                console.log(`${newArray[i].nombre} y ${newArray[j].nombre} coinciden el dia: ${newArray[i].horario[k]} = ${newArray[j].horario[l]}`)
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log(managedData())

module.exports = managedData
