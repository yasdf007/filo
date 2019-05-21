const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            requiredPermissions: ['EMBED_LINKS'],
            cooldown: 5,
            description: language => language.get('COMMAND_8BALL_DESCRIPTION'),
            usage: '<question:string>',
        });
    }

    async run(message, [question]) {
        const answers = ['It is certain', 'As I see it, yes', 'Reply hazy try again', 'Don\'t count on it',
            'It is decidedly so', 'Most likely', 'Ask again later', 'My reply is no',
            'Without a doubt', 'Outlook good', 'Better not tell you now', 'My sources say no',
            'Yes definitely', 'Yes', 'Cannot predict now', 'Outlook not so good', 'You may rely on it',
            'Signs point to yes', 'Concentrate and ask again', 'Very doubtful'];
        const index = Math.floor(Math.random() * answers.length);
        try {
            let answer = answers[index];
            let embed = new MessageEmbed()
            .setTimestamp()
            .setColor('#dd67ff')
            .addField('Question:', question)
            .addField('Answer:', answer)
            .setFooter(`Requested by: ${message.author.tag}`)
            ;
            message.send(embed);
        } catch (error) {
            console.log(error);
            let embed = new MessageEmbed();
            embed.setTitle('Something went wrong!');
            embed.setColor('red');
            message.send(embed);
        }
    }

};