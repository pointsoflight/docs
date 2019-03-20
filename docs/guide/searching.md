# Searching

## Introduction

[Points of Light](https://pointsoflight.org) supports the world's largest index of volunteering opportunities at [All for Good](https://allforgood.org).

Our goal is to provide a great search experience without a lot of effort.

## Our Service

To jumpstart folks we provide an [Algolia](https://algolia.com) compatible search service.

This allows you to implement your search using a wide variety of [open source tools](https://github.com/algolia) depending on your needs.

## Your Options

There are several options you can choose from - balancing ease of implementation against customizability.

### Easy to implement and customize

*InstantSearch Widgets* are production-ready, type-as-you-search, front-end clients with the heavy lifting taken care of for you - and you can wade into deeper customization as you desire.

Check out a [showcase of available widgets](https://www.algolia.com/doc/guides/building-search-ui/widgets/showcase/js/) and imagine them filled with volunteering opportunities!

[Vanilla JS](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js)
| [React](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react)
| [Vue](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/vue)
| [Angular](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/angular)
| [iOS](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/ios)
| [Android](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/android)


### Easier to implement but not very customizable

*Extensions* are minimal effort, drop-in solutions for your existing site - but the search experience is not very customizable.

[Wordpress](https://www.algolia.com/doc/integration/wordpress/getting-started/quick-start/)
| [Drupal](https://www.drupal.org/project/search_api_algolia)
| [SiteCore](https://github.com/dharnitski/Sitecore.Algolia)
| [More..](https://github.com/algolia/awesome-algolia#official-integrations)

### Harder to implement but very customizable

*API Clients* require technical expertise - but are very customizable for advanced needs.

[JavaScript](https://www.algolia.com/doc/api-client/getting-started/install/javascript/)
| [PHP](https://www.algolia.com/doc/api-client/getting-started/install/php/)
| [Ruby](https://www.algolia.com/doc/api-client/getting-started/install/ruby/)
| [Python](https://www.algolia.com/doc/api-client/getting-started/install/python/)
| [.NET](https://www.algolia.com/doc/api-client/getting-started/install/csharp/)
| [Java](https://www.algolia.com/doc/api-client/getting-started/install/java/)
| [Android](https://www.algolia.com/doc/api-client/getting-started/install/android/)
| [iOS](https://www.algolia.com/doc/api-client/getting-started/install/swift/)
| [More...](https://github.com/algolia/awesome-algolia#api-clients)

## An Example

Here's an example using the Vanilla JS InstantSearch [searchBox Widget](https://www.algolia.com/doc/api-reference/widgets/search-box/js/).

Add these script tags to your page:

```html
<script src="https://cdn.jsdelivr.net/npm/algoliasearch@3.32.1/dist/algoliasearchLite.js" integrity="sha256-pMaJf0I78weeXGkRMBDO6jSulxC/q3sb0aPdtV2N8n0=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@3.2.0" integrity="sha256-/8usMtTwZ01jujD7KAZctG0UMk2S2NDNirGFVBbBZCM=" crossorigin="anonymous"></script>
```

Add this div tag to your page:

```html
<div id="search_box"></div>
```

Add this JavaScript to your page:

```js
const applicationId = 'points_of_light_provided_application_id';
const publicApiKey  = 'points_of_light_provided_public_api_key';
const indexName     = 'points_of_light_provided_index_name';

const searchClient = algoliasearch(
  applicationId,
  publicApiKey
);

const search = instantsearch({
  indexName: indexName,
  searchClient
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search_box',
  })
);

search.start();
```

:confetti_ball: *Congrats!*

You're now searching the world's largest index of volunteering opportunities!
