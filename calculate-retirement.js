const name = 'Maria de Fátima'
const gender = 'M'
const years = 56
const contribution = 23

const calculationContribution = years + contribution

const manCanRetire = gender == 'M' && contribution >= 35 && calculationContribution >= 95
const womanPodeAposentar = gender == 'F' && contribution >= 30 && calculationContribution >= 85

if (manCanRetire || womanPodeAposentar) {
    console.log(`${name} , you can retire!`)
} else {
    console.log(`${name} , you cannot retire.`)
}