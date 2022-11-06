# Todo_app

    User can add todo items [*]
    user can delete todo items [*]
    user can update todo items [*]
    user can erase all items [*]
    
## Technolgies and patters

Uses typescript 
Uses mongoDB cloud 
Uses MVC 
Uses Swagger for DOCS 
Use Docker 

## API Reference

#### Get all items

```
  GET /
```

#### Add one item

Send body in json format with a key of ```item``` and and value
Example
```
{
    "item":"Any value"
}
```

```
  POST /additem
  
```
#### delete One item

```
  DELETE /delete/<ID OF OBJECT>
```

#### Delete all items

```
  DELETE /deleteall
```

#### UPDATE one item
Send body in json format with a key of ```item``` and and value
Example
```
{
    "item":"Any value"
}
```
```
PUT /update/<ID OF OBJECT>
```

