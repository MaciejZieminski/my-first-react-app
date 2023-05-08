const strContains = (strA, strB) => {
    if (strA.toLowerCase().includes(strB.toLowerCase())) {
        return true
    } else { return false}
};

export default strContains;