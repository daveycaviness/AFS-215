class ArrayList {
    constructor() {
        this.data = [];
    }

    push(item) {
        this.data.push(item)
        return `${item} was added.`
    }

    delete(item) {
        const index = this.data.findIndex(e => e === item);
        if (index === -1) {
            return `Error: No element found for ${item}.`;
        }
        else {
            const value = this.data[index]
            this.data.splice(index, 1)
            return `${value} was removed.`
        }
    }

    search(item) {
        const index = this.data.findIndex(e => e === item);
        if (index === -1) {
            return `Error: No element found for ${item}.`;
        }
        else {
            return true;
        }
    }

    getArr() {
        return this.data
    }
}

module.exports = ArrayList;