export const generateId = (length=15) => {
    let id = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqrstuvwxyz0123456789";
    for(let i = 0;  i < length; i++) {
       id += characters.charAt([Math.floor(Math.random() * characters.length)]);
    }
    return id;
}