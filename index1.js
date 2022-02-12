if("serviceWorker" in navigator){//checks if service is supported by browser
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log("registration");

    }).catch(error =>{

        console.log("SW Registration Failed!");
        console.log("error");

    });
}