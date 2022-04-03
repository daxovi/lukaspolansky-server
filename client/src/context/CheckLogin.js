var controller = new AbortController();
var signal = controller.signal;

export const loggedIn = async () => {
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    const user = initialValue || "";

    // var isLogged = false;
    var loggedUser;
    const data = await fetch("http://localhost:4000/get-users", {signal});
    const finalData = await data.json();
    const { documents } = finalData;
    console.log(documents);
    documents.forEach((entry) => {
        if (entry.name === user) {
            loggedUser = entry;
        }
    })
    console.log(loggedUser);
    return loggedUser;
}

