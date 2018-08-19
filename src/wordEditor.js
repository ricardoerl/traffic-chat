const wordEditor = (domElement) => {
  const editor = domElement
  let words = []
  let currentSpan = null // Guarda el último span clickeado
  let clonedSpan = null // Guarda una copia del último span clickeado

  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal
  const ID = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
  }

  const createSpace = () => {
    return document.createTextNode(' ')
  }

  const convertToWords = (textInput) => {
    words = textInput.split(' ').map(function (word) {
      let span = document.createElement('span')
      span.id = ID()
      span.innerHTML = word
      return span
    })
  }

  const appendWordsToEditor = () => {
    words.map(function (word) {
      editor.append(word)
      editor.append(createSpace())
    })
  }

  const addText = (textInput) => {
    convertToWords(textInput)
    appendWordsToEditor()
  }

  const copyTarget = (target) => {
    currentSpan = target
    clonedSpan = target.cloneNode(true)
  }

  // Agrego un anchor y un click listener para borrar el elemento
  const addDeleteToTarget = (target) => {
    let deleteAnchor = document.createElement('a')
    deleteAnchor.innerHTML = 'X'
    target.append(deleteAnchor)

    deleteAnchor.addEventListener('click', function (event) {
      currentSpan.remove()
    })
  }

  // Revierto el span a como estaba antes de darle click
  const removeDeleteFromTarget = (oldItem, newItem) => {
    oldItem.replaceWith(newItem)
  }

  // Hande click events
  editor.addEventListener('click', function (event) {
    let currentTarget = event.target

    if (currentTarget.matches('span')) {
      if (!clonedSpan) { // Primer click ever
        copyTarget(currentTarget)
        addDeleteToTarget(currentTarget)
      } else if (!!clonedSpan && clonedSpan.id === currentTarget.id) { // Estoy dándole click al mismo item
        if (currentTarget.childElementCount) { // Tiene más elementos que solo el SPAN?
          removeDeleteFromTarget(currentTarget, clonedSpan)
        } else {
          copyTarget(currentTarget)
          addDeleteToTarget(currentTarget)
        }
      } else { // Estoy dándole click a un nuevo item
        removeDeleteFromTarget(currentSpan, clonedSpan)
        copyTarget(currentTarget)
        addDeleteToTarget(currentTarget)
      }
    }
  }, false)

  return {
    addText
  }
}

export default wordEditor
