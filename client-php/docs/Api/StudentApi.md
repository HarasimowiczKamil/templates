# OpenAPI\Client\StudentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteStudentItem**](StudentApi.md#deleteStudentItem) | **DELETE** /api/students/{id} | Removes the Student resource.
[**getStudentCollection**](StudentApi.md#getStudentCollection) | **GET** /api/students | Retrieves the collection of Student resources.
[**getStudentItem**](StudentApi.md#getStudentItem) | **GET** /api/students/{id} | Retrieves a Student resource.
[**patchStudentItem**](StudentApi.md#patchStudentItem) | **PATCH** /api/students/{id} | Updates the Student resource.
[**postStudentCollection**](StudentApi.md#postStudentCollection) | **POST** /api/students | Creates a Student resource.
[**putStudentItem**](StudentApi.md#putStudentItem) | **PUT** /api/students/{id} | Replaces the Student resource.



## deleteStudentItem

> deleteStudentItem($id)

Removes the Student resource.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\StudentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | 

try {
    $apiInstance->deleteStudentItem($id);
} catch (Exception $e) {
    echo 'Exception when calling StudentApi->deleteStudentItem: ', $e->getMessage(), PHP_EOL;
}
?>
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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## getStudentCollection

> \OpenAPI\Client\Model\Student[] getStudentCollection($page)

Retrieves the collection of Student resources.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\StudentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$page = 1; // int | The collection page number

try {
    $result = $apiInstance->getStudentCollection($page);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StudentApi->getStudentCollection: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] [default to 1]

### Return type

[**\OpenAPI\Client\Model\Student[]**](../Model/Student.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv, text/html

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## getStudentItem

> \OpenAPI\Client\Model\Student getStudentItem($id)

Retrieves a Student resource.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\StudentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | 

try {
    $result = $apiInstance->getStudentItem($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StudentApi->getStudentItem: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Student**](../Model/Student.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv, text/html

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## patchStudentItem

> \OpenAPI\Client\Model\Student patchStudentItem($id, $student)

Updates the Student resource.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\StudentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | 
$student = new \OpenAPI\Client\Model\Student(); // \OpenAPI\Client\Model\Student | The updated Student resource

try {
    $result = $apiInstance->patchStudentItem($id, $student);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StudentApi->patchStudentItem: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**|  |
 **student** | [**\OpenAPI\Client\Model\Student**](../Model/Student.md)| The updated Student resource | [optional]

### Return type

[**\OpenAPI\Client\Model\Student**](../Model/Student.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/json, text/csv, text/html

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## postStudentCollection

> \OpenAPI\Client\Model\Student postStudentCollection($student)

Creates a Student resource.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\StudentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$student = new \OpenAPI\Client\Model\Student(); // \OpenAPI\Client\Model\Student | The new Student resource

try {
    $result = $apiInstance->postStudentCollection($student);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StudentApi->postStudentCollection: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **student** | [**\OpenAPI\Client\Model\Student**](../Model/Student.md)| The new Student resource | [optional]

### Return type

[**\OpenAPI\Client\Model\Student**](../Model/Student.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/csv, text/html
- **Accept**: application/json, text/csv, text/html

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## putStudentItem

> \OpenAPI\Client\Model\Student putStudentItem($id, $student)

Replaces the Student resource.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\StudentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | 
$student = new \OpenAPI\Client\Model\Student(); // \OpenAPI\Client\Model\Student | The updated Student resource

try {
    $result = $apiInstance->putStudentItem($id, $student);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StudentApi->putStudentItem: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**|  |
 **student** | [**\OpenAPI\Client\Model\Student**](../Model/Student.md)| The updated Student resource | [optional]

### Return type

[**\OpenAPI\Client\Model\Student**](../Model/Student.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/csv, text/html
- **Accept**: application/json, text/csv, text/html

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

