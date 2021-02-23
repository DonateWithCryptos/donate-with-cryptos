import { ApiClient } from 'twitch';
import { StaticAuthProvider } from 'twitch-auth';

const test = async () => {
    const authProvider = new StaticAuthProvider("ym4uq8220gdkhw0qdklf1r637ab513");
    const apiClient = new ApiClient({ authProvider });
    const user = await apiClient.kraken.users.getUserByName("kevtvstreamt");
    console.log(user);
}

export default test;

