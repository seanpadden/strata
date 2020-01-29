const form = document.createElement( 'form' )
form.setAttribute('action', '/new_user.html')
form.setAttribute('method', 'POST')

const root = document.getElementById( 'root' )
root.append(form)

function makeStuff(id, type, textNode, ) {
  const div = createElement('div')
  const span = createElement('span')
  const input = createElement('input')
  span.innerText = textNode
  input.setAttribute('id', id)
  input.setAttribute('type', type)
  div.append(span, input)
  return div
}

function createElement(tag){
  return document.createElement(tag)
}

const fullName = makeStuff("fullname", "textbox", "Full Name")
const email = makeStuff("email", "textbox", "Email")
const password = makeStuff("password", "textbox", "Password")

const buttonDiv = createElement('div')
const button = createElement('button')
button.setAttribute('type', 'submit')
button.innerText = "Done"

buttonDiv.append(button)


form.append(fullName, email, password, buttonDiv)