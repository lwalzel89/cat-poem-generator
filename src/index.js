function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f59taa203fb04ecd537cd5o3c97a2749";
  let context =
    "You are cazy about cats and love to write funny poems about cats. Generate a short poem, maximum 8 lines, in basic html format. There is no need for a title. Make sure to follow the user's instructions. Sign the poem with '- AI Kitty' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User Instructions: Please generate a cat poem about ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Cat poem about ${instructionsInput.value}, Miau!</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
