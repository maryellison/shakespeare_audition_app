let addMonologue = false;
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const EMPTY_STAR = '☆'
const FULL_STAR = '★'

document.addEventListener("DOMContentLoaded", () => {
 const addBtn = document.querySelector("#new-monologue-btn");
 const monologueFormContainer = document.querySelector(".container");
 const form = document.querySelector(".add-monologue-form")

 form.addEventListener("submit", addNewMonologue)

 addBtn.addEventListener("click", () => {
    addMonologue = !addMonologue;
    if (addMonologue) {
      monologueFormContainer.style.display = "block";
    } else {
      monologueFormContainer.style.display = "none";
    }
  });
  getMonologues();
  starListener();
  heartListener();
});

function getMonologues() {
  fetch("http://localhost:3000/monologues")
  .then(resp => resp.json())
  .then(data => data.forEach(monologue => showMonologue(monologue)))
}

function showMonologue(monologue) {
  const auditionRepertoire = document.getElementById("audition-repertoire")
  const div = document.createElement("div")
  div.classList.add("card")
  const h2 = document.createElement("h2")
  h2.textContent = monologue.play
  const p = document.createElement("p")
  p.textContent = monologue.character
  p.id = monologue.id
  const p2 = document.createElement("p")
  p2.textContent = monologue.fullText[[0]]
  p2.id = monologue.id
  const span = document.createElement("span")
  span.classList.add("star-glyph")
  span.innerHTML = EMPTY_STAR
  span.id = monologue.id
  const span2 = document.createElement("span")
  span2.classList.add("heart-glyph")
  span2.innerHTML = EMPTY_HEART
  span2.id = monologue.id
  const button = document.createElement("button")
  button.classList.add("remove-btn")
  button.id = "remove-btn"
  button.textContent = " X "



  div.append(h2, p, p2, span, span2, button)
  auditionRepertoire.append(div)


}

function addNewMonologue(e) {
  e.preventDefault()
  const [play, character, scene, fullText] = e.target

  fetch(`http://localhost:3000/monologues`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      play: play.value,
      character: character.value,
      scene: scene.value,
      fullText: [fullText.value]
    })
  })
  .then(resp => resp.json())
  .then(resp => showMonologue(resp))
  play.value = ""
  character.value = ""
  scene.value = ""
  fullText.value = ""
//   const monologueFormContainer = document.querySelector(".container");
//   monologueFormContainer.reset()
}

function starListener() {
    document.addEventListener("click", (e) => {
        if(e.target.classList[0] === 'star-glyph') {
            mimicServerCall()
                .then(resp => {
                    const activatedStar = e.target.classList.contains("activated-star");
                    if (activatedStar){
                        e.target.classList.remove("activated-star");
                        e.target.innerHTML = EMPTY_STAR
                    }
                    else {
                        e.target.classList.add("activated-star");
                        e.target.innerHTML = FULL_STAR
                    }
                })
        }
    })
}

function heartListener() {
    document.addEventListener("click", (e) => {
        if(e.target.classList[0] === 'heart-glyph') {
            mimicServerCall()
                .then(resp => {
                    const activatedHeart = e.target.classList.contains("activated-heart");
                    if (activatedHeart){
                        e.target.classList.remove("activated-heart");
                        e.target.innerHTML = EMPTY_HEART
                    }
                    else {
                        e.target.classList.add("activated-heart");
                        e.target.innerHTML = FULL_HEART
                    }
                })
        }
    })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0
      if (isRandomFailure) {
        reject("The impossible happened! Congratulations");
      } else {
        resolve("No worries, all is fine.");
      }
    }, 300);
  });
}