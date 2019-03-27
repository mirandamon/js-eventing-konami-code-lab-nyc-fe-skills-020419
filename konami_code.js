const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let tracker = 0

function init() {
  // Write your JavaScript code inside the init() function
  
  // 1. We want to show a message if they get the key combo exactly right
  function onKeyDown(event) {
    // did they get the right key code?
    if (event.which === code[tracker]) {
      tracker++ 
    } else {
      // if they get it wrong...
      tracker = 0
    }
    // how do we know that they finished the whole thing?
    if (tracker === 10) {
      alert('Nice job') 
    }
  }
                            // event,   callback
  document.addEventListener('keydown', onKeyDown)
  
  // 2. If they mess up anywhere in the middle, they need to start over
  
  // create a sequence that will reset if they get it wrong
  // if (event.keyCode === code[tracker]) {
    // tracker = tracker + 1
    // if tracker === 9 -> then message
  //} else {
    // tracker = 0
  //}
  
}


init()