const speechRecognitionService = () => {
  const recognition = new SpeechRecognition()
  // The final speech recognition will be stored here
  let finalResult

  recognition.continuous = false
  recognition.interimResults = false
  recognition.lang = 'es-AR'

  recognition.onstart = () => {
    finalResult = ''
    console.log('onstart')
  }

  recognition.onerror = (event) => {
    console.log('error', event.error)
  }

  // TODO , RETURN INTERIM AND PRINT FOR BETTER VISUAL STUFF
  // PURO PLANTE, PUES
  recognition.onresult = (event) => {
    finalResult = event.results[0][0].transcript
  }

  const start = () => {
    recognition.start()
  }

  const onEnd = (cb) => {
    recognition.onend = () => {
      cb(finalResult)
    }
  }

  return {
    start: start,
    onEnd: onEnd
  }
}

export default speechRecognitionService
