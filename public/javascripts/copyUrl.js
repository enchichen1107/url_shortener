const copyUrl = document.querySelector('.short-url')
const copyBtn = document.querySelector('.copy-button')
const toolTip = document.querySelector('.tool-tip')

if (copyUrl) {
  copyBtn.addEventListener('click', function btnOnClicked () {
    copyUrl.select()
    if (document.execCommand('copy')) {
      toolTip.classList.add('show')
      setTimeout(function removeToolTip () {
        toolTip.classList.remove('show')
      }, 700)
    } else {
      console.log("Umm..Seems like your browser doesn't support js to copy to clipboard...")
    }
  })
}
