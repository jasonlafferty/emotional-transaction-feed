Emotional Transaction Feed
==========================

The purpose of this exercise is to build a transaction feed, displaying transactions in
a chronological order. This feed is emotional 😍 It allows users to express their emotion
for a transaction, similarly to Facebook Like emotions.

Transaction API
---------------

There is no API provided – you can build a backend server or just fake the API client-side.
We've provided you with a dummy transaction file (transactions.csv) should you wish to use it.

The transaction entity in the API has the following schema:

```
{
    'id': '921f390d-e51f-4da9-8058-b9ee367dd85d',
    'description': 'Pret a Manger',
    'amount': {
        'value': '14.00',
        'currency': 'GBP'
    },
    'note': 'This is a note',
    'emotion': 'love',
    'created': '2017-04-06T17:30:14.318Z'
}
```

Notes:
  * `id` is a UUID
  * `emotion` is an enum of values: `love`, `hate`, `confusion`, `sadness`, `surprise` and `joy`.
  * `amount` is either negative or positive: negative amounts represent debits and positive amounts represent credits.

What you need to do
-------------------

You need to use `React` and `Redux` (or equivalent like `MobX`) to build the following:

1. Display the transactions in the feed. For each transaction display the amount, description,
note and emotion.

2. Allow the user to search the feed for a description or emotion (or both?).

3. Allow the user to add/remove an emotion on a transaction.

The design and UX is completely up to you!

*You should deliver your solution as a `git` repository, preferably hosted on GitHub.*

Things we look for
------------------

In a nutshell we're looking for correctness, good code design and sensible UX choices.

Resources
---------

1. `React`: https://facebook.github.io/react/
2. `React-Redux`: https://github.com/reactjs/react-redux

Disclaimer
----------

We will not use any of this code for any of Plum's applications.
