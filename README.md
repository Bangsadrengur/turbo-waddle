# turbo-waddle

## ABI

From project directory run

```shell
npm start 

--street
--post-code
--min-price
--max-price
--min-square-meters
--max-square-meters
--min-no-rooms
--max-no-rooms
```

This should write a house listings to stdout.

## Expected output

The following is a description of the expected format the house listings are written in.

```
[
  {
    "street":            String,
    "postal-code":       Number
    "image":             Url,
    "price":             Number,
    "square-meters":     Number,
    "type":              String,
    "no-rooms":          Number, // -1 if not provided
    "description":       String,
    "open-house":        String,
    "registration-date": Date
  },
  ...
]
```
