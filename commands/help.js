const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Muestra todos los comandos y su funcion",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("Ayuda Superbot")
      .setDescription("Lista de Comandos")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        false
      );
    });
    helpEmbed.addField('Creado por', 'jreygu#7129');
    helpEmbed.addField('Contacto:', 'DM o roreygu@gmail.com');
    helpEmbed.setThumbnail('https://cdn.discordapp.com/avatars/764512775082475572/828a2715479600e11740b9b752fcb9d2.png');
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
