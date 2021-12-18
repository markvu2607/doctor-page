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

window.onresize = () => {
  if (this.scrollY < 100) {
    if (this.innerWidth <= 1024) {
      document.querySelector('.header__topbar').style.height = '88px'
    } else {
      document.querySelector('.header__topbar').style.height = '61px'
    }
  }
}

document.addEventListener('scroll', () => {

  if (window.scrollY > 2900) {
    od.forEach((item, index) => {
      item.update(odValue[index])
    })
  }
})

document.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    document.querySelector('.header__topbar').style.height = '0'
  } else {
    if (this.innerWidth <= 1024)
      document.querySelector('.header__topbar').style.height = '88px'
    else
      document.querySelector('.header__topbar').style.height = '61px'
  }
})

document.addEventListener('scroll', () => {
  if (window.scrollY < 1000) {
    document.querySelector('.go-top').style.display = 'none'
  } else {
    document.querySelector('.go-top').style.display = 'flex'
  }
})


document.querySelector('.header__navbar-mobile-icon').addEventListener('click', () => {
  if (document.querySelector('.header__navbar-mobile-list').style.height == '0px' || document.querySelector('.header__navbar-mobile-list').style.height == '') {
    document.querySelector('.header__navbar-mobile-icon').innerHTML = '<i class="fas fa-times"></i>'
    document.querySelector('.header__navbar-mobile-list').style.height = '300px'
  } else {
    document.querySelector('.header__navbar-mobile-icon').innerHTML = '<i class="fas fa-bars"></i>'
    document.querySelector('.header__navbar-mobile-list').style.height = '0px'
  }
})
