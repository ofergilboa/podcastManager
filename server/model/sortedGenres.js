let sortedGenres = [
    {
        "id": 100,
        "name": "Arts",
        "parent_id": 67,
        "src": "01 Arts.jpg"
    },
    {
        "id": 93,
        "name": "Business",
        "parent_id": 67,
        "src": "02 Bussines.jpg"

    },
    {
        "id": 133,
        "name": "Comedy",
        "parent_id": 67,
        "src": "03 Comedy.jpg"

    },
    {
        "id": 106,
        "name": "Fashion & Beauty",
        "parent_id": 100,
        "src": "04 Fashion & Beauty.jpg"

    },
    {
        "id": 168,
        "name": "Fiction",
        "parent_id": 122,
        "src": "05 Fiction.jpg"

    },
    {
        "id": 88,
        "name": "Health",
        "parent_id": 67,
        "src": "06 Health.jpg"

    },
    {
        "id": 125,
        "name": "History",
        "parent_id": 122,
        "src": "07 History.jpg"

    },
    {
        "id": 99,
        "name": "News & Politics",
        "parent_id": 67,
        "src": "08 News & Politics.jpg"

    },
    {
        "id": 69,
        "name": "Religion & Spirituality",
        "parent_id": 67,
        "src": "09 Religion & Spirituality.jpg"

    },
    {
        "id": 77,
        "name": "Sports & Recreation",
        "parent_id": 67,
        "src": "10 Sports & Recreation.jpg"
        
    },
    {
        "id": 127,
        "name": "Technology",
        "parent_id": 67,
        "src": " 11 Technology.jpg"

    },
    {
        "id": 135,
        "name": "True Crime",
        "parent_id": 122,
        "src": "12 True Crime.jpg"
    }
]

let idArray = [
    100,
    93,
    133,
    106,
    168,
    88,
    125,
    99,
    69,
    77,
    127,
    135
]

module.exports.genres = sortedGenres
module.exports.ids = idArray
