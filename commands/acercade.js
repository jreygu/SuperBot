const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "acerca",
  aliases: ["ac"],
  description: "Acerca del Bot",
  execute(message) {
    let commands = message.client.commands.array();

    let acercaembed = new MessageEmbed()
      .setTitle("Acerca de Superbot")
      .setColor("#F8AA2A")
      .setThumbnail('https://cdn.discordapp.com/avatars/764512775082475572/828a2715479600e11740b9b752fcb9d2.png')
      .addField('Soy un bot desarrollado por:', 'jreygu#7129');
      return message.channel.send(acercaembed).catch(console.error);
    }
  };