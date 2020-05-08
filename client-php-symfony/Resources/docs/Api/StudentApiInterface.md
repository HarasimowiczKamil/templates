# OpenAPI\Server\Api\StudentApiInterface

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteStudentItem**](StudentApiInterface.md#deleteStudentItem) | **DELETE** /api/students/{id} | Removes the Student resource.
[**getStudentCollection**](StudentApiInterface.md#getStudentCollection) | **GET** /api/students | Retrieves the collection of Student resources.
[**getStudentItem**](StudentApiInterface.md#getStudentItem) | **GET** /api/students/{id} | Retrieves a Student resource.
[**patchStudentItem**](StudentApiInterface.md#patchStudentItem) | **PATCH** /api/students/{id} | Updates the Student resource.
[**postStudentCollection**](StudentApiInterface.md#postStudentCollection) | **POST** /api/students | Creates a Student resource.
[**putStudentItem**](StudentApiInterface.md#putStudentItem) | **PUT** /api/students/{id} | Replaces the Student resource.


## Service Declaration
```yaml
# src/Acme/MyBundle/Resources/services.yml
services:
    # ...
    acme.my_bundle.api.student:
        class: Acme\MyBundle\Api\StudentApi
        tags:
            - { name: "open_api_server.api", api: "student" }
    # ...
```

## **deleteStudentItem**
> deleteStudentItem($id)

Removes the Student resource.

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/StudentApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\StudentApiInterface;

class StudentApi implements StudentApiInterface
{

    // ...

    /**
     * Implementation of StudentApiInterface#deleteStudentItem
     */
    public function deleteStudentItem($id)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **getStudentCollection**
> OpenAPI\Server\Model\Student getStudentCollection($page)

Retrieves the collection of Student resources.

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/StudentApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\StudentApiInterface;

class StudentApi implements StudentApiInterface
{

    // ...

    /**
     * Implementation of StudentApiInterface#getStudentCollection
     */
    public function getStudentCollection($page = '1')
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]

### Return type

[**OpenAPI\Server\Model\Student**](../Model/Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv, text/html

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **getStudentItem**
> OpenAPI\Server\Model\Student getStudentItem($id)

Retrieves a Student resource.

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/StudentApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\StudentApiInterface;

class StudentApi implements StudentApiInterface
{

    // ...

    /**
     * Implementation of StudentApiInterface#getStudentItem
     */
    public function getStudentItem($id)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**|  |

### Return type

[**OpenAPI\Server\Model\Student**](../Model/Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv, text/html

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **patchStudentItem**
> OpenAPI\Server\Model\Student patchStudentItem($id, $student)

Updates the Student resource.

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/StudentApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\StudentApiInterface;

class StudentApi implements StudentApiInterface
{

    // ...

    /**
     * Implementation of StudentApiInterface#patchStudentItem
     */
    public function patchStudentItem($id, Student $student = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**|  |
 **student** | [**OpenAPI\Server\Model\Student**](../Model/Student.md)| The updated Student resource | [optional]

### Return type

[**OpenAPI\Server\Model\Student**](../Model/Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, text/csv, text/html

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **postStudentCollection**
> OpenAPI\Server\Model\Student postStudentCollection($student)

Creates a Student resource.

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/StudentApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\StudentApiInterface;

class StudentApi implements StudentApiInterface
{

    // ...

    /**
     * Implementation of StudentApiInterface#postStudentCollection
     */
    public function postStudentCollection(Student $student = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **student** | [**OpenAPI\Server\Model\Student**](../Model/Student.md)| The new Student resource | [optional]

### Return type

[**OpenAPI\Server\Model\Student**](../Model/Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/csv, text/html
 - **Accept**: application/json, text/csv, text/html

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **putStudentItem**
> OpenAPI\Server\Model\Student putStudentItem($id, $student)

Replaces the Student resource.

### Example Implementation
```php
<?php
// src/Acme/MyBundle/Api/StudentApiInterface.php

namespace Acme\MyBundle\Api;

use OpenAPI\Server\Api\StudentApiInterface;

class StudentApi implements StudentApiInterface
{

    // ...

    /**
     * Implementation of StudentApiInterface#putStudentItem
     */
    public function putStudentItem($id, Student $student = null)
    {
        // Implement the operation ...
    }

    // ...
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**|  |
 **student** | [**OpenAPI\Server\Model\Student**](../Model/Student.md)| The updated Student resource | [optional]

### Return type

[**OpenAPI\Server\Model\Student**](../Model/Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/csv, text/html
 - **Accept**: application/json, text/csv, text/html

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

