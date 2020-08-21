import service from './service'
let questions = []
let initial


let init = async function () {
  await getData().then(() => {
    createQuestion(questions.root, initial)
  })
}
let getData = async function () {
  let {
    data
  } = (await service().get('./json.html'))
  questions = data
}
let createNode = function (obj, parent, className) {
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
let createQuestion = function (question, parent = initial) {

  let nodeEl = createNode(question, parent, 'poll__question')
  parent.appendChild(nodeEl)

  if ("question" == question.type) {
    addChildren(question, nodeEl)
  }
  if (parent == initial) return
  addArrow(nodeEl)
}

let addChildren = function ({
  variants
}, parent) {
  let wrap = document.createElement('div')
  wrap.classList.add('poll__wrap')
  wrap.style.gridTemplateColumns = `repeat(${variants.length}, 1fr)`
  variants.forEach(child => {
    let nodeEl = createNode(child, wrap, 'poll__answer')
    addArrow(nodeEl)
    createQuestion(questions[child.ref], nodeEl)
  })
  parent.appendChild(wrap)
}



let addArrow = function (parent) {
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
  initial = document.getElementById('poll')
  init()
})
