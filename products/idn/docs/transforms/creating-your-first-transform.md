---
id: creating-your-first-transform
slug: /docs/transforms/creating-your-first-transform
sidebar_position: 2
---
# Creating Your First Transform

## Overview

This guide explains how to use [IdentityNow's Transform REST APIs](https://developer.sailpoint.com/apis/v3/#tag/Transforms) to do the following:

- [List Transforms in your IdentityNow Tenant](#list-transforms-in-your-identitynow-tenant)
- [Create a Transform](#create-a-transform)
- [Get a Transform by Id](#get-transform-by-id)
- [Update a Transform](#update-a-transform)
- [Delete a Transform](#delete-a-transform)

## List Transforms in your IdentityNow Tenant

To call the APIs for transforms you need a personal access token and your tenant's name to provide with the request. To get a personal access token, see [Personal Access Tokens](../../authentication.md#personal-access-tokens). To get the name of your tenant, see [Finding Your Organization Tenant Name](../../getting_started.md#finding-your-org-tenant-name)

Before you create your first custom transform, see what transforms are already in the tenant. You can get this information by calling the [List Transforms API](https://developer.sailpoint.com/apis/v3/#operation/getTransformsList).

```bash
curl --location --request GET 'https://{tenant}.api.identitynow.com/v3/transforms' --header 'Authorization: Bearer {token}'
```

The response body contains an array of transform objects containing the following values:

- **id** - The id of the transform
- **name** - The name of the transform
- **type** - The type of transform, see [Transform Operations](./transform_operations.md#transform-operations)
- **attributes** - Object of attributes related to the transform
- **internal** - A `true` or `false` attribute to determine whether the transform is internal or custom
  - **true** - The transform is internal and cannot be modified without contacting Sailpoint.
  - **false** - The tranform is custom and can be modified with the API.

```json
[
    {
        "id": "2b5191bb-051f-4edf-8283-3962b4a0f7a5",
        "name": "ISO3166 Country Format",
        "type": "iso3166",
        "attributes": null,
        "internal": true
    },
    {
        "id": "484e717d-2841-4bab-9bbf-6f48d8096965",
        "name": "Calculate Partners State",
        "type": "substring",
        "attributes": {
            "input": {
                "attributes": {
                    "attributeName": "Location",
                    "sourceName": "Partner Accounts"
                },
                "type": "accountAttribute"
            },
            "end": -1.0,
            "begin": {
                "attributes": {
                    "substring": ","
                },
                "type": "indexOf"
            },
            "beginOffset": 2.0
        },
        "internal": false
    }
    ...
    ]
```

## Create a Transform

This [lookup transform](./operations/lookup.md) takes the input value of an attribute, locates it in the table provided, and returns its corresponding value. If your input value is not found in the lookup table, the transform returns the default value. Replace `{tenant}` and `{token}` with the values you got ealier.

```bash
curl --location --request POST 'https://{tenant}.api.identitynow.com/v3/transforms' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {token}' \
--data-raw '{
    "name": "Country Code To Timezone",
    "type": "lookup",
    "attributes": {
        "table": {
            "EN-US": "CST",
            "ES-MX": "CST",
            "EN-GB": "GMT",
            "default": "GMT"
        }
    }
}'
```

**Response Body:**

```json
{
    "id": "b23788a0-41a2-453b-89ae-0d670fa0cb6a",
    "name": "Country Code To Timezone",
    "type": "lookup",
    "attributes": {
        "table": {
            "EN-US": "CST",
            "ES-MX": "CST",
            "EN-GB": "GMT",
            "default": "GMT"
        }
    },
    "internal": false
}
```

Once you have created the transform, you can find it in IdentityNow by going to **Admin** > **Identities** > **Identity Profiles** > (An Identity Profile) > **Mappings** (tab).

![Mappings Tab](./img/mappings_tab.png)

For more information about creating transforms, see [Create Transform](https://developer.sailpoint.com/apis/v3/#operation/createTransform).

## Get Transform By ID

To get the transform created with the API, call the `GET` endpoint, using the `id` returned by the create API response.

```bash
curl --location --request GET 'https://{tenant}.api.identitynow.com/v3/transforms/b23788a0-41a2-453b-89ae-0d670fa0cb6a' \
--header 'Authorization: Bearer {token}'
```

**Response Body:**

```json
{
    "id": "b23788a0-41a2-453b-89ae-0d670fa0cb6a",
    "name": "Country Code To Timezone",
    "type": "lookup",
    "attributes": {
        "table": {
            "EN-US": "CST",
            "ES-MX": "CST",
            "EN-GB": "GMT",
            "default": "GMT"
        }
    },
    "internal": false
}
```

For more information about getting a transform by its `id,` see [Transform by ID](https://developer.sailpoint.com/apis/v3/#operation/getTransform).

## Update a Transform

To update a transform, call the `PUT` endpoint with the updated transform body. This example adds another item to the lookup table, `EN-CA.`

>**NOTE** Modifying the `name` or `type` field results in a bad request.

```bash
curl --location --request PUT 'https://{tenant}.api.identitynow.com/v3/transforms/b23788a0-41a2-453b-89ae-0d670fa0cb6a' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {token}' \
--data-raw '{
    "name": "Country Code To Timezone",
    "type": "lookup",
    "attributes": {
        "table": {
            "EN-US": "CST",
            "ES-MX": "CST",
            "EN-GB": "GMT",
            "EN-CA": "MST",
            "default": "GMT"
        }
    }
}'
```

**Response Body:**

```json
{
    "id": "b23788a0-41a2-453b-89ae-0d670fa0cb6a",
    "name": "Country Code To Timezone",
    "type": "lookup",
    "attributes": {
        "table": {
            "EN-US": "CST",
            "ES-MX": "CST",
            "EN-GB": "GMT",
            "EN-CA": "MST",
            "default": "GMT"
        }
    },
    "internal": false
}
```

For more information about updating transforms, see [Update a transform](https://developer.sailpoint.com/apis/v3/#operation/updateTransform).

## Delete a Transform

To delete the transform, call the `DELETE` endpoint with the `id` of the transform to delete. The server responds with a 204 when the transform is successfully removed.

```bash
curl --location --request DELETE 'https://{tenant}.api.identitynow.com/v3/transforms/b23788a0-41a2-453b-89ae-0d670fa0cb6a' \
--header 'Authorization: Bearer {token}'
```

For more information about deleting transforms, see [Delete Transform](https://developer.sailpoint.com/apis/v3/#operation/deleteTransform).

## Next Steps

Now that you understand the lifecycle of transforms, see this [complex usecase](./temporary_password_usecase.md) using a nested transform structure to create a temporary password that can be sent to each user.