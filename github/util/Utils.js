export const checkFavorite = (target, items) => {
    if (!items) {
        return false;
    }
    return items.find(item => {
        const id = target.id ? target.id : target.name;
        return id.toString() === item;
    })
};