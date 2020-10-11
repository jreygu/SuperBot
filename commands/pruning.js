const fs = require("fs");
const config = require("../config.json");

module.exports = {
  name: "Eliminacion",
  description: "Alterna la eliminación de mensajes de bot",
  execute(message) {
    config.PRUNING = !config.PRUNING;

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), (err) => {
      if (err) {
        console.log(err);
        return message.channel.send("Ocurrio un error.").catch(console.error);
      }

      return message.channel
        .send(`Borrado de mensajes esta ${config.PRUNING ? "**Habilitado**" : "**Deshabilitado**"}`)
        .catch(console.error);
    });
  }
};
