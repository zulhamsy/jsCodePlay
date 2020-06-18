class EasyHttp {
    async get(url) {
        const response = await fetch(url),
            json = await response.json();

        return json;
    }

    async post(url, data) {
        const submitData = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            },
            response = await fetch(url, submitData),
            json = await response.json();
        return json;
    }

    async put(url, data) {
        const submitData = {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            },
            response = await fetch(url, submitData),
            json = await response.json();
        return json;
    }

    async delete(url) {
        const response = await fetch(url, {
                method: 'DELETE'
            }),
            json = await response.json();

        return json;
    }
}