/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": "http://127.0.0.1:1337/graphql"
    },
    "plugins": {
        "houdini-svelte": {}
    },
    scalars: {
		I18NLocaleCode: {
			type: 'String'
		}
	}
};

export default config
