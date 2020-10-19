function getEmployees() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://randomuser.me/api/?results=20");
        xhr.responseType = "json";
        xhr.onload = function() {
            const { results } = this.response;
            if (results.error) reject(results);
            else resolve(results);
        };
        xhr.onerror = function() {
            reject("Error Occurred.");
        };
        xhr.send();
    });
}

export default getEmployees;