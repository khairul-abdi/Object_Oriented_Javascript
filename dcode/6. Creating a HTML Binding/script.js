const ul = document.getElementById('myList')
class ListBinding {
  constructor(element) {
    this.listElement = element
    this.textList = [
      'The Basic',
      'Getter & Setter',
      'Static Method'
    ]
  }

  read() {
    let data = this.textList

    for (const i of data) {
      let li = document.createElement('li')
      li.innerHTML = i
      ul.appendChild(li)
    }
  }

  update() {
    
  }
}

const list = new ListBinding()
list.read()