const counter = (preState = 0, action) => {
    if (action && action.type !==  undefined) {
        switch (action.type) {
            case "INC":
                return preState + 1;
            case "DESC":
                return preState - 1;
            default:
                return preState;
        }
    }
    return preState;
}

export default counter;