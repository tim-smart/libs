import { Lib } from "./lib";

// the data powering the chart
// please keep in the same order as Discord's docs (https://discord.dev/topics/community-resources#libraries-discord-libraries):
// sort language alphabetically and then name alphabetically

export const libs: Lib[] = [
	{
		name: 'Concord',
		url: 'https://github.com/Cogmasters/concord',
		language: 'C',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'Orca',
		url: 'https://github.com/cee-studio/orca',
		language: 'C',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'No',
		contextMenus: 'Yes',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'DisCatSharp',
		url: 'https://github.com/Aiko-IT-Systems/DisCatSharp',
		language: 'C#',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'No',
		localization: 'Yes',
		forums: 'Dev Version'
	},
	{
		name: 'Discord.Net',
		url: 'https://github.com/discord-net/Discord.Net',
		language: 'C#',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'No',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'DSharpPlus',
		url: 'https://github.com/DSharpPlus/DSharpPlus',
		language: 'C#',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Dev Version',
		automod: 'No',
		localization: 'Yes',
		forums: 'No'
	},
	{
		name: 'NetCord',
		url: 'https://github.com/KubaZ2/NetCord',
		language: 'C#',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Yes'
	},
	{
		name: 'Remora.Discord',
		url: 'https://github.com/Remora/Remora.Discord',
		language: 'C#',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: {
			text: 'Has a PR',
			url: 'https://github.com/Remora/Remora.Discord/pull/203'
		},
		localization: 'Yes',
		forums: {
			text: 'Has a PR',
			url: 'https://github.com/Remora/Remora.Discord/pull/195'
		}
	},
	{
		name: 'aegis.cpp 🪦',
		url: 'https://github.com/zeroxs/aegis.cpp',
		language: 'C++',
		apiVer: 6,
		gwVer: 6,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'D++',
		url: 'https://github.com/brainboxdotcc/DPP',
		language: 'C++',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'Discord++',
		url: 'https://github.com/DiscordPP/discordpp',
		language: 'C++',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'DiscordCoreAPI',
		url: 'https://github.com/RealTimeChris/DiscordCoreAPI',
		language: 'C++',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'Sleepy Discord',
		url: 'https://github.com/yourWaifu/sleepy-discord',
		language: 'C++',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'Yes',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'discljord',
		url: 'https://github.com/discljord/discljord',
		language: 'Clojure',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'discordcr',
		url: 'https://github.com/shardlab/discordcr',
		language: 'Crystal',
		apiVer: 9,
		gwVer: 9,
		slashCommands: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		buttons: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		selectMenus: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		threads: 'Yes',
		guildStickers: 'No',
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		autocomplete: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/37'
		},
		timeouts: 'No',
		modals: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		permsv2: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		automod: 'No',
		localization: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		forums: 'No'
	},
	{
		name: 'nyxx',
		url: 'https://github.com/nyxx-discord/nyxx',
		language: 'Dart',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Dev Version',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'coxir',
		url: 'https://github.com/satom99/coxir',
		language: 'Elixir',
		apiVer: 9,
		gwVer: 8,
		slashCommands: 'No',
		buttons: 'Yes',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'Nostrum',
		url: 'https://github.com/Kraigie/nostrum',
		language: 'Elixir',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: {
			text: 'Has a PR',
			url: 'https://github.com/Kraigie/nostrum/pull/437'
		},
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'arikawa',
		url: 'https://github.com/diamondburned/arikawa',
		language: 'Go',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'No',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'No',
		localization: 'Yes',
		forums: 'No'
	},
	{
		name: 'DiscordGo',
		url: 'https://github.com/bwmarrin/discordgo',
		language: 'Go',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'No'
	},
	{
		name: 'disgo',
		url: 'https://github.com/DisgoOrg/disgo',
		language: 'Go',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Yes'
	},
	{
		name: 'Disgord',
		url: 'https://github.com/andersfylling/disgord',
		language: 'Go',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Dev Version',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Dev Version',
		permsv2: 'Yes',
		automod: 'No',
		localization: 'Yes',
		forums: 'No'
	},
	{
		name: 'Postcord',
		url: 'https://github.com/Postcord/rest',
		language: 'Go',
		apiVer: 9,
		gwVer: '-',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'No',
		permsv2: 'Yes',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'Calamity',
		url: 'https://github.com/simmsb/calamity',
		language: 'Haskell',
		apiVer: 10,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'Yes',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'Yes',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'Partial'
	},
	{
		name: 'discord-haskell',
		url: 'https://github.com/aquarial/discord-haskell',
		language: 'Haskell',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'No',
		localization: 'Yes',
		forums: 'No'
	},
	{
		name: 'catnip',
		url: 'https://github.com/mewna/catnip',
		language: 'Java',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'No',
		contextMenus: 'Yes',
		autocomplete: 'No',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/mewna/catnip/pull/640'
		},
		timeouts: 'No',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'Discord4J',
		url: 'https://github.com/Discord4J/Discord4J',
		language: 'Java',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: {
			text: 'Dev Version',
			url: 'https://github.com/Discord4J/Discord4J/issues/958'
		},
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/Discord4J/Discord4J/pull/1046'
		},
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'No',
		automod: {
			text: 'Has a PR',
			url: 'https://github.com/Discord4J/Discord4J/pull/1074'
		},
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'Javacord',
		url: 'https://github.com/Javacord/Javacord',
		language: 'Java',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'No',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'JDA',
		url: 'https://github.com/DV8FromTheWorld/JDA',
		language: 'Java',
		apiVer: '8 stable, 10 dev',
		gwVer: '8 stable, 10 dev',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/DV8FromTheWorld/JDA/pull/2047'
		},
		timeouts: 'Dev Version',
		modals: 'Dev Version',
		permsv2: 'Dev Version',
		automod: {
			text: 'Has a PR',
			url: 'https://github.com/DV8FromTheWorld/JDA/pull/2159'
		},
		localization: 'Dev Version',
		forums: 'Dev Version'
	},
	{
		name: 'Biscuit',
		url: 'https://github.com/oasisjs/biscuit',
		language: 'JavaScript',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'Detritus',
		url: 'https://github.com/detritusjs/client',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'Dev Version',
		permsv2: 'Dev Version',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'discord.js',
		url: 'https://github.com/discordjs/discord.js',
		language: 'JavaScript',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: {
			text: 'Has a PR',
			url: 'https://github.com/discordjs/discord.js/pull/7938'
		},
		localization: 'Yes',
		forums: 'Yes'
	},
	{
		name: 'Discordeno',
		url: 'https://github.com/discordeno/discordeno',
		language: 'JavaScript',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Yes'
	},
	{
		name: 'droff',
		url: 'https://github.com/tim-smart/droff',
		language: 'JavaScript',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Yes'
	},
	{
		name: 'Eris',
		url: 'https://github.com/abalabahaha/eris',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/abalabahaha/eris/pull/1275'
		},
		timeouts: 'Dev Version',
		modals: 'No',
		permsv2: {
			text: 'Has a PR',
			url: 'https://github.com/abalabahaha/eris/pull/1372'
		},
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'Harmony',
		url: 'https://github.com/harmonyland/harmony',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'Oceanic',
		url: 'https://github.com/OceanicJS/Oceanic',
		language: 'JavaScript',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Yes'
	},
	{
		name: 'SnowTransfer',
		url: 'https://github.com/DasWolke/SnowTransfer',
		language: 'JavaScript',
		apiVer: 10,
		gwVer: '-',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'No',
		localization: 'Yes',
		forums: 'No'
	},
	{
		name: 'Tiscord',
		url: 'https://github.com/tiscordlib/tiscord',
		language: 'JavaScript',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'Discall',
		url: 'https://github.com/Discall-Development/Discall',
		language: 'JavaScript',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'Yes',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'No',
		permsv2: 'No',
		automod: 'Yes',
		localization: 'No',
		forums: 'Partial'
	},
	{
		name: 'Discord.jl',
		url: 'https://github.com/Xh4H/Discord.jl',
		language: 'Julia',
		apiVer: 6,
		gwVer: 6,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'Kord',
		url: 'https://github.com/kordlib/kord',
		language: 'Kotlin',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Dev Version',
		localization: 'Yes',
		forums: {
			text: 'Has a PR',
			url: 'https://github.com/kordlib/kord/pull/684'
		}
	},
	{
		name: 'Discordia',
		url: 'https://github.com/SinisterRectus/Discordia',
		language: 'Lua',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'Dev Version',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'Dimscord',
		url: 'https://github.com/krisppurg/dimscord',
		language: 'Nim',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'DiscordPHP',
		url: 'https://github.com/discord-php/DiscordPHP',
		language: 'PHP',
		apiVer: '9 stable, 10 dev',
		gwVer: '9 stable, 10 dev',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'RestCord',
		url: 'https://github.com/restcord/restcord',
		language: 'PHP',
		apiVer: '6 stable, 9 dev',
		gwVer: '-',
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'Dev Version',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/restcord/restcord/pull/166'
		},
		timeouts: 'No',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'discord.py',
		url: 'https://github.com/Rapptz/discord.py',
		language: 'Python',
		apiVer: '10',
		gwVer: '10',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Dev Version'
	},
	{
		name: 'disnake 🍴',
		url: 'https://github.com/DisnakeDev/disnake',
		language: 'Python',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Dev Version',
		localization: 'Yes',
		forums: {
			text: 'Has a PR',
			url: 'https://github.com/DisnakeDev/disnake/pull/726'
		}
	},
	{
		name: 'enhanced-discord.py 🍴🪦',
		url: 'https://github.com/iDevision/enhanced-discord.py',
		language: 'Python',
		apiVer: 8,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'No',
		autocomplete: 'Yes',
		scheduledEvents: 'No',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'hata',
		url: 'https://github.com/HuyaneMatsu/hata',
		language: 'Python',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Dev Version'
	},
	{
		name: 'hikari',
		url: 'https://github.com/hikari-py/hikari',
		language: 'Python',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: {
			text: 'Has a PR',
			url: 'https://github.com/hikari-py/hikari/pull/811'
		},
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: {
			text: 'Has a PR',
			url: 'https://github.com/hikari-py/hikari/pull/1002'
		},
		permsv2: 'Yes',
		automod: {
			text: 'Has a PR',
			url: 'https://github.com/hikari-py/hikari/pull/1220'
		},
		localization: 'Dev Version',
		forums: 'No'
	},
	{
		name: 'interactions.py',
		url: 'https://github.com/interactions-py/library',
		language: 'Python',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Dev Version'
	},
	{
		name: 'NAFF',
		url: 'https://github.com/NAFTeam/NAFF',
		language: 'Python',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Yes'
	},
	{
		name: 'nextcord 🍴',
		url: 'https://github.com/nextcord/nextcord',
		language: 'Python',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'pycord 🍴',
		url: 'https://github.com/Pycord-Development/pycord',
		language: 'Python',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'discorb',
		url: 'https://github.com/discorb-lib/discorb',
		language: 'Ruby',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'No'
	},
	{
		name: 'discordrb',
		url: 'https://github.com/shardlab/discordrb',
		language: 'Ruby',
		apiVer: '6 stable, 9 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'Dev Version',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'Dev Version',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'discord-rs',
		url: 'https://github.com/SpaceManiac/discord-rs',
		language: 'Rust',
		apiVer: 6,
		gwVer: 6,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'Serenity',
		url: 'https://github.com/serenity-rs/serenity',
		language: 'Rust',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: 'Partial'
	},
	{
		name: 'Twilight',
		url: 'https://github.com/twilight-rs/twilight',
		language: 'Rust',
		apiVer: 10,
		gwVer: 10,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Yes',
		automod: 'Yes',
		localization: 'Yes',
		forums: {
			text: 'Has a PR',
			url: 'https://github.com/twilight-rs/twilight/pull/1864'
		}
	},
	{
		name: 'AckCord',
		url: 'https://github.com/Katrix/AckCord',
		language: 'Scala',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: {
			text: 'Has a PR',
			url: 'https://github.com/Katrix/AckCord/pull/69'
		},
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	},
	{
		name: 'Swiftcord 🍴',
		url: 'https://github.com/SketchMaster2001/Swiftcord',
		language: 'Swift',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes',
		modals: 'Yes',
		permsv2: 'Dev Version',
		automod: 'No',
		localization: 'Dev Version',
		forums: 'No'
	},
	{
		name: 'SwiftDiscord',
		url: 'https://github.com/nuclearace/SwiftDiscord',
		language: 'Swift',
		apiVer: '6 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No',
		modals: 'No',
		permsv2: 'No',
		automod: 'No',
		localization: 'No',
		forums: 'No'
	}
]
