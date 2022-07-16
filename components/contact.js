function main() {
  const formEl = document.querySelector("#contact-form");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);

    const fetchInfo = fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "nahuel_alfaro1@outlook.com",
        message: `Nombre De Usuario: ${obj.nombre}, 
            Correo Electrónico: ${obj.email}, 
            Mensaje: ${obj.mensaje}`,
      }),
    });
    fetchInfo
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json;
      });
  });
}

main();
