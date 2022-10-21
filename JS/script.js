let billAmountFromUser = document.querySelector('#billTotalInput')
let tipAmountFromUser = document.querySelector('#tipInput')
let numberOfPeopleFromUser = document.querySelector('#numberOfPeople')
let perPersonTotalUpdate = document.querySelector('#perPersonTotal')

let numberOfThem = Number(numberOfPeopleFromUser.innerHTML)

const calculateBill = () => {
  const billAmount = Number(billAmountFromUser.value)
  const tipAmount = Number(tipAmountFromUser.value) / 100
  const totalTip = tipAmount * billAmount
  const totalBills = totalTip + billAmount
  const totalBillPerPerson = totalBills / numberOfThem

  //.toLocaleString('en-US') and .toFixed() doesn't work together. So I've picked the Fixed one
  perPersonTotalUpdate.innerText = `₹${totalBillPerPerson.toFixed(2)}`
}

const increasePeople = () => {
  numberOfThem += 1
  numberOfPeopleFromUser.innerText = numberOfThem
  calculateBill()



}
const decreasePeople = () => {
  if (numberOfThem <= 1) {
    numberOfPeopleFromUser.innerText = 1
    calculateBill()
  }
  else {
    numberOfThem -= 1
    numberOfPeopleFromUser.innerText = numberOfThem
    calculateBill()
  }
}
