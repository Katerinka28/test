import service from './service'
const Poll = function () {
  this.data = []
  this.initial = document.getElementById('poll')
  console.log(this.initial)
}
Poll.prototype.init = async function () {
  await this.getData().then(() => {
    this.__proto__.createQuestion(this.data.root, this.initial)
  })
}
Poll.prototype.getData = async function () {
  let {
    data
  } = (await service().get('./json.html'))
  this.data = data
}
Poll.prototype.createNode = function (obj, parent, className) {
  let nodeEl = document.createElement('div')

  nodeEl.classList.add(className)
  let text = document.createElement('p')
  text.innerText = obj.title
  text.classList.add('text')
  if (obj.kind) {
    nodeEl.classList.add(`${className}--${obj.kind}`)
  }
  text.classList.add(obj.type)
  nodeEl.appendChild(text)

  parent.appendChild(nodeEl)

  return nodeEl
}
Poll.prototype.createQuestion = function (question, parent = questionList.initial) {

  let nodeEl = this.createNode(question, parent, 'poll__question')
  parent.appendChild(nodeEl)
  console.log(parent)
  if ("question" == question.type) {
    this.addChildren(question, nodeEl)
  }
  if (parent == questionList.initial) return
  this.addArrow(nodeEl)
}

Poll.prototype.addChildren = function ({
  variants
}, parent) {
  let wrap = document.createElement('div')
  wrap.classList.add('poll__wrap')
  wrap.style.gridTemplateColumns = `repeat(${variants.length}, 1fr)`
  variants.forEach(child => {
    let nodeEl = this.createNode(child, wrap, 'poll__answer')
    this.addArrow(nodeEl)
    this.createQuestion(questionList.data[child.ref], nodeEl)
  })
  parent.appendChild(wrap)
}



Poll.prototype.addArrow = function (parent) {
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('d', 'M25,25 L50,75 L75,25 Z')
  path.setAttribute('stroke', 'black')
  path.setAttribute('stroke-width', '10px')
  path.setAttribute('fill', 'black')

  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  rect.setAttribute('width', '25px')
  rect.setAttribute('height', '50px')
  rect.setAttribute('fill', 'black')
  rect.setAttribute('x', 38)
  rect.setAttribute('y', 0)

  let arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  arrow.setAttribute('width', '20px')
  arrow.setAttribute('height', '40px')
  arrow.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  arrow.appendChild(path)
  arrow.appendChild(rect)
  arrow.setAttribute('viewBox', '0, 0, 100, 100')
  parent.prepend(arrow)
}

let questionList

document.addEventListener("DOMContentLoaded", () => {
  questionList = new Poll()
  questionList.init()
})
