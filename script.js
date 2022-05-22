const myFunc = async () => {
  let data = await fetch("https://rickandmortyapi.com/api/character").then(
    (res) => res.json()
  );
  console.log(data);
  return data;
};

async function updateImage() {
  let data = await myFunc();
  let mainElement = document.createElement("div");
  mainElement.className = "container";

  for (let index = 0; index < 20; index++) {
    let imageWrapper = document.createElement("div");
    imageWrapper.className = "imageWrapper";
    const img = document.createElement("img");
    img.className = "blur";
    img.className = "zoom";
    img.src = `${data.results[index].image}`;
    imageWrapper.appendChild(img);

    const actorNames = document.createElement("h4");
    actorNames.className = "fade";
    let myText = document.createTextNode(`${data.results[index].name}`);
    actorNames.appendChild(myText);

    imageWrapper.appendChild(actorNames);
    mainElement.appendChild(imageWrapper);
  }
  document.body.appendChild(mainElement);
}
updateImage();
