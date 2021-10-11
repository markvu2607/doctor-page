const elmOdometer = document.querySelectorAll('.odometer')

const od = [
  new Odometer({
    el: elmOdometer[0],
    value: 0
  }),
  new Odometer({
    el: elmOdometer[1],
    value: 0
  }),
  new Odometer({
    el: elmOdometer[2],
    value: 0
  }),
  new Odometer({
    el: elmOdometer[3],
    value: 0
  })
]

const odValue = [20, 380, 700, 210]

document.addEventListener('scroll', () => {
  if (window.scrollY > 2900) {
    od.forEach((item, index) => {
      item.update(odValue[index])
    })
  }
})