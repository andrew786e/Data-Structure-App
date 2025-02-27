export function waitSeconds() : Promise<void> {
    return new Promise((resolve) => {
        setTimeout( resolve , 2000) ;
    })
}