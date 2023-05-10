const strContains = (strA, strB) => {
    if (strA.toLowerCase().includes(strB.toString().toLowerCase())) {
        return true
    } else { return false}
};

export default strContains;