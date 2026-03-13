class Dado {
    #face;
    constructor() {
        let faceRandom = Math.floor(Math.random()*6 + 1);
        this.#face = 2; 
        Object.freeze(this)
    }

    setFace(face) {
        this.#face = face;
    }
    getFace() {
        return this.#face;
    }

}

module.exports = { Dado };