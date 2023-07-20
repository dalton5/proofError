import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import houdini from 'houdini/vite'
import inlangPlugin from "@inlang/sdk-js/adapter-sveltekit"

const config: UserConfig = {
	build: {
		target: 'esnext'
	},
	plugins: [inlangPlugin(), houdini(),  sveltekit()]
};

export default config;
