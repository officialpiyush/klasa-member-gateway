const { GuildMemberManager } = require('discord.js');

/**
 * Adds our extensions to d.js's MemberManager
 * @extends external:GuildMemberManager
 */
class KlasaGuildMemberManager extends GuildMemberManager {

	async _fetchSingle(...args) {
		const member = await super._fetchSingle(...args);
		await member.settings.sync();
		return member;
	}

	async _fetchMany(...args) {
		const members = await super._fetchMany(...args);
		await Promise.all(members.map(member => member.settings.sync()));
		return members;
	}

}

module.exports = KlasaGuildMemberManager;
