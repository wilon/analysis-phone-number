/**
 * phone num rules
 * * desc : regx
 * @author <github.com/wilon>
 */
var phoneRules = {
    // level 2
    '【 level 2 】': /-/,
    'ABC': /(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\d/,
    'AxAy': /(\d)\d\1\d$/,
    'AxAyAz': /(\d)\d\1\d\1\d$/,
    'ABxyABxy': /\d\d(\d\d)\d\d\1\d\d$/,
    'xyABxyAB': /\d\d(\d\d)\d\d\1$/,
    'YEAR': /(19|19|20)\d\d$/,
    // level 1
    '【 level 1 】': /-/,
    'AAAA': /(\d)\1\1\1/,
    'AAA': /(\d)\1\1/,
    'ABCD': /(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){3}\d/,
    'DCBA': /(?:9(?=8)|8(?=7)|7(?=6)|6(?=5)|5(?=4)|4(?=3)|3(?=2)|2(?=1)|1(?=0)){3}\d/,
    'ABCABC': /((?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\d){2}/,
    'CBACBA': /((?:9(?=8)|8(?=7)|7(?=6)|6(?=5)|5(?=4)|4(?=3)|3(?=2)|2(?=1)|1(?=0)){2}\d){2}/,
    'AxxAxx': /(\d)(\d\d)\1\2/,
    'AxxxAxxx': /(\d)(\d\d\d)\1\2/,
    'AxAxAx': /(\d\d)\1\1/,
    'AABB': /(\d)\1(\d)\2/,
}