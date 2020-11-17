class BaseModel {
    constructor(collection = null, model = null, schema = {}){
        this.collection = collection
        this.model = model
        this.schema = schema
    }

    create(data) {
        return this.model(data).save()
    }
}

module.exports = BaseModel