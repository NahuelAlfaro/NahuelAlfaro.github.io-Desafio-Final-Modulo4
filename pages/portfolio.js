function getData() {
  fetch(
    "https://cdn.contentful.com/spaces/38yesnwdw1ft/environments/master/entries?access_token=W0ro48XFZv3ZSS7NskGoCRw9jPqeX9jz_s5-j7FMkwo&content_type=portfolio"
  )
    .then((response) => response.json())
    .then((data) => loadData(data));
}

function loadData(data) {
  const myData = data.items;
  var myContenedorEl = document.querySelector(".port-content");
  var myTemplateEl = document.querySelector("#port-template");
  for (let i = 0; i < myData.length + 1; i++) {
    var clone = myTemplateEl.content.cloneNode(true);
    var descriptionEl = (clone.querySelector(".port-lorem").textContent =
      myData[i].fields.descripcion);
    var imgEl = (clone.querySelector(".port-img").src =
      data.includes.Asset[i].fields.file.url);
    var titleEl = (clone.querySelector(".port-subtitle").textContent =
      myData[i].fields.titulo);
    myContenedorEl.appendChild(clone);
  }
}

function main() {
  getData();
}

main();
