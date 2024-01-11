function read(collectionName, data) {
    const model = require(`./models/${collectionName}Model`);
    const filters = data.Filters && JSON.parse(data.Filters)

    return model.find(filters)
        .limit(data.Limit);
}

function create(collectionName, data) {
    const model = require(`./models/${collectionName}Model`);

    const newEntity = new model(data.Payload);

    return newEntity.save();
}


function update(collectionName, data) {
    const model = require(`./models/${collectionName}Model`);

    const updateEntity = new model(data.Payload);
    delete updateEntity._id;

    return model.updateOne({ _id: updateEntity._id }, updateEntity);
}

function deleteOne(collectionName, data) {
    const model = require(`./models/${collectionName}Model`);

    return model.deleteOne({ _id: data._id });
}

module.exports = { read, create, update, deleteOne };
