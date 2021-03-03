import { ApiClient } from 'twitch';
import { StaticAuthProvider } from 'twitch-auth';

const getTwitchData = async (name: any) => {
    const authProvider = new StaticAuthProvider("ym4uq8220gdkhw0qdklf1r637ab513");
    const apiClient = new ApiClient({ authProvider });
    const user = await apiClient.kraken.users.getUserByName(name);
    return user;
}

export default getTwitchData;

