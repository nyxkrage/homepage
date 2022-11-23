// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	imageBackground: true,
	openInNewTab: false,

	mastodonFeed: 'm.pid1.sh',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘
	firstButtonsContainer: [
		{
			id: '1',
			name: 'Git',
			icon: 'ph-git-branch',
			link: 'https://github.com/nyxkrage',
		},
		{
			id: '2',
			name: 'Email',
			icon: 'ph-envelope-simple',
			link: 'mailto:carsten@kragelund.me',
		},
		{
			id: '3',
			name: 'Mastodon Instance',
			icon: 'ph-chats',
			link: 'https://m.pid1.sh',
		},
		{
			id: '4',
			name: 'Keyoxide<br/>(PGP Key and Identity)',
			icon: 'ph-key',
			link: 'https://keyoxide.org/hkp/beb254aca061c55ca64c57e074fa3f63cf13ed05',
		},
		{
			id: '5',
			name: 'Twitch',
			icon: 'ph-twitch-logo',
			link: 'https://twitch.tv/NyxKrage',
		},
		{
			id: '6',
			name: 'Feed',
			icon: 'ph-rss',
			link: 'https://m.pid1.sh/users/nyx.rss',
		},
	],
};
