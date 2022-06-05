barvy
písmo #424B54
tlačítko zelené #138A36
tlačítko zelené #CE4760
https://coolors.co/palette/9b5de5-f15bb5-fee440-00bbf9-00f5d4


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
            "file":"url nazev souboru videa i obrazku",
            "completed":0, //skip 2, completed 1
            "date":"Date.now",
        },
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "title":"Rozdýchání 1",
            "file":"url nazev souboru videa i obrazku",
            "completed":0, //skip 2, completed 1
            "date":"Date.now",
        },
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "title":"Zpívání 1",
            "file":"url nazev souboru videa i obrazku",
            "completed":0, //skip 2, completed 1
            "date":"Date.now",
        },
        "eval":[-1] // -1 hodnoceni je neaktivni, 0 je prazdne hodnoceni, 457124 je uz po hodnoceni
    ],
    "course2":[
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "title":"Protažení 1",
            "filename":"url nazev souboru videa i obrazku",
            "completed":0,
            "date":"Date.now",
        },
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "title":"Rozdýchání 1",
            "filename":"url nazev souboru videa i obrazku",
            "completed":0,
            "date":"Date.now",
        },
        {
            "_id":{"$oid":"62486f0f6e8ef9831785041f"},
            "title":"Zpívání 1",
            "filename":"url nazev souboru videa i obrazku",
            "completed":0,
            "date":"Date.now",
        },
        "eval":[-1]
    ],
    "__v":{"$numberInt":"0"}
}
```

Předání proměnné do klíče funkcí
```javascript
const func = (m) => {
    return { ["eval" + m]:1 }
}

func(3)
// {eval3: 1}
JSON.stringify(func(85))
// '{"eval85":1}'
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