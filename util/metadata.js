var metadata = {
    "name": "MSG_NFT",
    "description": "Make Funny Mim!",
    "attributes": [
        {
            "type": "Text",
            "value": "Only Text"
        }
    ]
};

function makeMeta(message){
    metadata.data = message;
    return metadata;
}

export default {makeMeta}