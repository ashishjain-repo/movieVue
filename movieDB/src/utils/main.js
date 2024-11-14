export function trimName(name) {
    if (name.length > 30) {
        let trim = '';
        for (let i = 0; i < name.length; i++) {
            if (name[i] === ':') {
                break;
            }
            trim += name[i];
        }
        return trim;
    }
    else { return name }
};