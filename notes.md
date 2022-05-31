použití proměnné v klíči JSON dat

```javascript
const i = 3

JSON.stringify({
    ["course." + i + ".completed"]: false
})   

// {"course.3.completed":false}
```

MongoDB - původní databáze
```json
{
    "_id":{"$oid":"62486f0f6e8ef9831785041e"},
    "name":"terezka",
    "course":[
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "url":"webovka1",
            "completed":true
        },
        {
            "_id":{"$oid":"62486f0f6e8ef98317850420"},
            "url":"webovka2",
            "completed":true
        }
        ],
    "__v":{"$numberInt":"0"}
}
```
MongoDB - nová databáze
```json
{
    "_id":{"$oid":"62486f0f6e8ef9831785041e"},
    "name":"terezka",
    "course1":[
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "title":"Protažení 1",
            "filename":"url nazev souboru videa i obrazku",
            "completed":0, //skip 2, completed 1
        },
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "title":"Rozdýchání 1",
            "filename":"url nazev souboru videa i obrazku",
            "completed":0, //skip 2, completed 1
        },
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "title":"Zpívání 1",
            "filename":"url nazev souboru videa i obrazku",
            "completed":0, //skip 2, completed 1
        },
        "eval":[-1] // -1 hodnoceni je neaktivni, 0 je prazdne hodnoceni, 457124 je uz po hodnoceni
    ],
    "course2":[
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "title":"Protažení 1",
            "filename":"url nazev souboru videa i obrazku",
            "completed":0
        },
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "title":"Rozdýchání 1",
            "filename":"url nazev souboru videa i obrazku",
            "completed":0
        },
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "title":"Zpívání 1",
            "filename":"url nazev souboru videa i obrazku",
            "completed":0
        },
        "eval":[-1]
    ],
    "__v":{"$numberInt":"0"}
}

```

MongoDB - minimální databáze bez url, ostatní hardcoded
```json
{
    "_id":{"$oid":"62486f0f6e8ef9831785041e"},
    "name":"terezka",
    "course":[
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "completed":0, //skip 2, completed 1
            "eval":[-1] // -1 hodnoceni je neaktivni, 0 je prazdne hodnoceni, 457124 je uz po hodnoceni
        }
        ],
    "__v":{"$numberInt":"0"}
}
```