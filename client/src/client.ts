import { HoudiniClient} from '$houdini';
import { PUBLIC_GRAPHQL } from '$env/static/public';
import { error } from '@sveltejs/kit';

export default new HoudiniClient({
    url: PUBLIC_GRAPHQL,
    throwOnError: {
        // can be any combination of
        // query, mutation, subscription, and all
        operations: ['all'],
        // the function to call
        error: (errors) => error(500, errors.map((err) => err.message).join('. ') + '.'),
    },
    // uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
    // fetchParams({ session }) { 
    //     return { 
	//         headers: {
    //             Authentication: `Bearer ${session.token}`,
    //         }
    //     }
    // }
})
