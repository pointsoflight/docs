# Publishing

## Introduction

Do you have volunteer opportunities you'd like to see included in [All for Good](https://allforgood.org) search results?

We want to make it easy to publish your volunteer opportunities - and for qualified volunteers to find them.

## Your Options

There are several options you can choose from - depending upon how many volunteer opportunities you have - and your access to skilled technical folks.

### One At A Time

If you have a few infrequently changing volunteer opportunites - or you don't have access to skilled technical folks - you can publish one at a time via [All for Good](https://allforgood.org).

1. [Sign Up](https://allforgood.org) or Sign In
1. [Register an Organization](https://allforgood.org/make-organization)
1. [Publish your Project](https://allforgood.org/make-project)
1. [Search for your Project](https://www.allforgood.org/search)
1. Your Project appears in search results! :confetti_ball:

### Continuously

If you have lots of frequently changing volunteer opportunities - and access to skilled technical folks - you can publish continuously via [WebSub](https://www.w3.org/TR/websub/).

__How does it work?__

1. Points of Light acts as a [Hub](https://www.w3.org/TR/websub/#definitions)
1. All for Good acts as a [Subscriber](https://www.w3.org/TR/websub/#subscriber)
1. __You__ act as a [Publisher](https://www.w3.org/TR/websub/#high-level-protocol-flow)
1. All for Good subscribes to __Your Publication__
1. __Your Volunteer Opportunties__ appear in All for Good search results! :confetti_ball:

::: tip Why WebSub?
* Open standard
* Vendor and technology neutral
* Allows for multiple hubs and avoids a Points of Light Hub dependency
* Allows publishers to control content and access
* Standardizes communication between publishers and subscribers, avoiding multiple costly proprietary integrations
:::

## Your Publication

Your publication is a URL you provide which allows the All for Good Subscriber to discover and read your volunteer opportunities in a standard format.

In addition to WebSub, your publication will embrace the [Link Header] and [Schema.org] standards.

### Link Header

[RFC5988](https://tools.ietf.org/html/rfc5988) defines standard links for your publication - enabling the All for Good Subscriber to discover your volunteer opportunities.

#### Link Relations

You'll need to include the following relations in the Link header returned with your publication's HTTP responses.

__Hub__

This relation indicates the URLs of the WebSub Hubs your publication is published at.

Your publication will include the following hub relation to indicate it's being published at the Points of Light hub.

`<https://voyager.pointsoflight.org/api/websub/subscriptions>; rel="hub"`

::: tip Multiple Hubs
WebSub allows for a publisher to publish via [more than one hub](https://www.w3.org/TR/websub/#discovery) by including multiple `hub` relations in the `Link` header.

This allows for the volunteering community to not be wholly dependent upon or locked into the Points of Light hub for critical operations.
:::

__Self__

This relation indicates the URL of your publication itself.

`<https://publisher.example.com/your-publication>; rel="self"`

__Next__

This relation indicates the next URL for your publication.

* If you have a large number of volunteer opportunities it's unlikely they can be returned via a single URL
* The next relation enables the All for Good Subscriber to follow a sequence of next URLs and return all of your volunteer opportunities

`<https://publisher.example.com/your-publication?page=2>; rel="next"`

#### A Combined Example

This example shows:

1. An All for Good Subscriber request to your publication
1. Your publication response with the Link header including the required relations

```http
GET /your-publication HTTP/1.1
Host: publisher.example.com

HTTP/1.1 200 Ok
Link: <https://voyager.pointsoflight.org/api/websub/subscriptions>; rel="hub",
      <https://publisher.example.com/your-publication>; rel="self",
      <https://publisher.example.com/your-publication?page=2>; rel="next"
```

### Schema.org

[Schema.org](https://schema.org) defines standard data structures for your publication - enabling the All for Good Subscriber to read your volunteer opportunities.

::: tip Why Schema.org?
* Open standard
* Vendor and technology neutral
* Allows for [public extensions by the volunteering community](https://www.w3.org/community/volunteering-ontology/)
* Allows for private extensions by publishers and subscribers with established partnerships
:::

Your publication will use many Schema.org structures.

```md
## Event (object)
+ @type: Event (required) - A schema.org [Event](https://schema.org/Event)
+ description: Horizons for Homeless Childrenis seeking volunteers...
+ director (Person)
+ duration: PT3H
+ endDate: `2017-09-23T13:00:00-04:00`
+ identifier: `https://staging.changemaker.pointsoflight.org/api/websub/publications/events/M28gWV8R` (required)
+ location (Place)
+ maximumAttendeeCapacity: 100 (number)
+ name: Volunteer and Play with Children at Homeless Shelters in Northeast MA
+ organizer - A reference to the Organization
    + @type: Organization
    + identifier: `https://staging.changemaker.pointsoflight.org/api/websub/publications/organizations/baker-college-of-muskegon`
+ startDate: `2017-09-23T10:00:00-04:00`
```

```md
## GeoCoordinates (object)
+ @type: GeoCoordinates (required) - A schema.org [GeoCoordinates](https://schema.org/GeoCoordinates)
+ latitude: 43.2443111 (number)
+ longitude: `-86.1965856` (number)
```

```md
## Organization
+ @type: Organization (required) - A schema.org [Organization](https://schema.org/Organization)
+ description: The beginning of Baker College can be traced back to the turn of the 20th century.
+ identifier: `https://staging.changemaker.pointsoflight.org/api/websub/publications/organizations/baker-college-of-muskegon`
+ location (Place)
+ name: Baker College of Muskegon
+ telephone: 2317775200
```

```md
## Person
+ @type: Person (required) - A schema.org [Person](https://schema.org/Person)
+ email: northeast@horizonschildren.org
+ name: Leah Schenkel
```

```md
## Place (object)
+ @type: Place (required) - A schema.org [Place](https://schema.org/Place)
+ address (PostalAddress)
+ geo (GeoCoordinates)
```

```md
## PostalAddress (object)
+ @type: PostalAddress (required) - A schema.org [PostalAddress](https://schema.org/PostalAddress)
+ addressCountry: US
+ addressLocality: Muskegon
+ addressRegion: Michigan
+ postalCode: 49442
+ streetAddress: 1904 Marquette Ave
```
