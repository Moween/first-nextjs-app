export const generateId = (length=15) => {
    let id = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqrstuvwxyz0123456789";
    for(let i = 0;  i < length; i++) {
       id += characters.charAt([Math.floor(Math.random() * characters.length)]);
    }
    return id;
}

{
    policyFile
: 
{policyFileId: "MzYyYzE2ZDktMjMzMi00ODJiLWE3ZmMtZjZkN2I2ZjNkMTZj", policyFileName: "gggg",…}
contents
: 
null
createdBy
: 
"maureene"
dateCreated
: 
"2023-01-27T14:05:14.888893"
dateUpdated
: 
null
description
: 
"vvvvvv"
metadata
: 
null
policyFileId
: 
"MzYyYzE2ZDktMjMzMi00ODJiLWE3ZmMtZjZkN2I2ZjNkMTZj"
policyFileName
: 
"gggg"
policyHash
: 
"d52b8896cc50ad134eaa5abad140cf344076edde503352777789e1d461345064fc406c678eb7470d63ce826f8310883789412513e9dd4c66d85ca90fe4447132"
updatedBy
: 
null
version
: 
"Ver 1.0"
versionDescription
: 
"vvvvvv"
visionTemplate
: 
null
}