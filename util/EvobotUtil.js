module.exports = {
  canModifyQueue(member) {
    const { channel } = member.voice;
    const botChannel = member.guild.me.voice.channel;

    if (channel !== botChannel) {
      member.send("Debes estar en un canal de audio primero!").catch(console.error);
      return false;
    }

    return true;
  }
};
