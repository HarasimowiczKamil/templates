// in src/authProvider.js
const authProvider = {
    login: ({ username, password }) =>  {
        const request = new Request('https://mydomain.com/authenticate', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    },
    logout: params => {
        console.log('Logout', params);
        return Promise.resolve();
    },
    checkAuth: params => {
        console.log('checkAuth', params);
        return Promise.resolve();
    },
    checkError: error => {
        console.log('checkError', error);
        return Promise.resolve();
    },
    getPermissions: params => {
        console.log('getPermissions', params);
        return Promise.resolve();
    },
};

export default authProvider;