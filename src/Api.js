import axios from 'axios';

class Api {
    static async getAllResources() {
        let res = await axios('https://space-app-api.herokuapp.com/api/resources');
        return res;
    }
}

export default Api;