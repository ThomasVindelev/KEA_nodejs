new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve("Everything went well")
        }, 4000)
    } catch {
        reject("Something went wrong")
    }    
}).then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage))

