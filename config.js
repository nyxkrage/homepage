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

	mastodonFeed: 'https://m.pid1.sh/api/v1/accounts/109325343301176112/statuses?exclude_replies=true',

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
			name: 'Mastodon',
			icon: 'ph-chats',
			rel: 'me',
			link: 'https://m.pid1.sh/users/nyx',
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
			name: 'Twitter',
			icon: 'ph-twitter-logo',
			link: 'https://nitter.it/nyxkrage',
		},
	],
};
