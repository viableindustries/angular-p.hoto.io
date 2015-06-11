# Angular Photoio Directive

This directive is intended for use with your http://p.hoto.io/ account.

## Installation

````
bower install angular-photoio --save
````

## Basic Usage

````
<img photoio photoio-u="url_to_your_photo" photoio-w="640" photoio-h="640" photoio-mode="crop" />
````

## Parameters

Parameter implementation is straightforward and you should further [refer to the P.hoto.io documentation](https://github.com/viableindustries/p.hoto.io#usage) with any specific parameter value questions

In version 0.0.4 we have coverage for the following parameters:

Name | Photoio Variable | Description
---- | ---------------- | -----------
`photoio-u` | `u` | The URL for the image you wish to process with Photoio
`photoio-w` | `w` | The Width of the image you wish to process with Photoio
`photoio-h` | `h` | The Height of the image you wish to process with Photoio
`photoio-mode` | `mode` | The Mode you wish Photoio to process your image with

