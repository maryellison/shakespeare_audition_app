let addMonologue = false;
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const EMPTY_STAR = '☆'
const FULL_STAR = '★'

document.addEventListener("DOMContentLoaded", () => {
 const addBtn = document.querySelector("#new-monologue-btn");
 const monologueFormContainer = document.querySelector(".container");
 const form = document.querySelector(".add-monologue-form")

 form.addEventListener("sumbit", addNewMonologue)

//  document.addEventListener("click", (e) => {
//    if(e.target.matches(".like-btn")) {
//      updatesLikes(e)
//    }
//  })

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addMonologue = !addMonologue;
    if (addMonologue) {
      monologueFormContainer.style.display = "block";
    } else {
      monologueFormContainer.style.display = "none";
    }
  });
  getMonologues()
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
  //const img = document.createElement("img")
  //img.src = monologue.image
  //img.classList.add("monologue-text")
  const p = document.createElement("p")
  p.textContent = monologue.character
  p.id = monologue.id
  const span = document.createElement("span")
  span.classList.add("star-glyph")
  span.innerHTML = EMPTY_STAR
  span.id = monologue.id
//   const button = document.createElement("button")
//   button.classList.add("like-btn")
//   button.textContent = "like"
//   button.id = monologue.id
  div.append(h2, p, span)
  auditionRepertoire.append(div)

}

function addNewMonologue(e) {
  e.preventDefault()
  const [play, character, scene, fullText] = e.target

  fetch("http://localhost:3000/monologues", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      play: play.value,
      character: character.value,
      scene: scene.value,
      fullText: fullText.value
    })
  })
  .then(resp => resp.json())
  .then(resp => showMonologue(resp))
  const monologueFormContainer = document.querySelector(".container");
  monologueFormContainer.reset()
}

function clickListener() {
    document.addEventListener("click", (e) => {
        if(e.target.classList[0] === 'star-glyph') {
            mimicServerCall()
                .then(resp => {
                    const activated = e.target.classList.contains("activated-star");
                    if (activated){
                        e.target.classList.remove("activated-star");
                        e.target.innerHTML = EMPTY_STAR
                    } else {
                        e.target.classList.add("activated-star");
                        e.target.innerHTML = FULL_STAR
                    }
                })
        }
    })
}

// function updatesLikes(e) {
//   e.preventDefault()
//     fetch(`http://localhost:3000/monologues${e.target.id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify({
//         likes: parseInt(e.target.parentElement.children[2].textContent.split(" ")[0], 10) + 1
//       })
//     })
//     .then(resp => resp.json())
//     .then(resp => {
//       // e.target.parentElement.children[2].textContent = `${resp.likes}`
//       const p = document.getElementById(resp.id)
//       p.textContent = `${resp.likes} likes`
//     })
// }