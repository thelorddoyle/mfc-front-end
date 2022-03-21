export const truncate = (param: string, length: number = 6) => {
    return  param ? param.substring((param.length - length), param.length).toUpperCase() : "";
}