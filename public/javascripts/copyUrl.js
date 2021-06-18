// init variables
const copyUrl = document.querySelector('.short-url')
const copyBtn = document.querySelector('.copy-button')
const toolTip = document.querySelector('.tool-tip')

// copy function
if (copyUrl) {
  copyBtn.addEventListener('click', function btnOnClicked () {
    // select short URL
    copyUrl.select()
    // copy short URL to clipboard
    if (document.execCommand('copy')) {
      // show tool tip
      toolTip.classList.add('show')
      setTimeout(function removeToolTip () {
        toolTip.classList.remove('show')
      }, 700)
    } else {
      console.log('Umm.. Something is wrong...')
    }
  })
}
