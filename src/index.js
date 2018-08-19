import speechRecognitionService from './speechRecognitionService'
import wordEditor from './wordEditor'

const editor = wordEditor(document.getElementById('result'))
const listener = speechRecognitionService()
const mic = document.getElementById('mic')

listener.onEnd(function(result) {
  console.log(result)
  editor.addText(result)
});

mic.addEventListener('click', event => {
  event.preventDefault()
  listener.start()
})