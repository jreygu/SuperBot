const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "remove",
  description: "Elimina una cancion de la Lista",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Nada en la lista.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(`Uso: ${message.client.prefix}Removior <Queue Number>`);
    if (isNaN(args[0])) return message.reply(`Uso: ${message.client.prefix}Remover <Queue Number>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ ha sido eliminada **${song[0].title}** de la cola.`);
  }
};
