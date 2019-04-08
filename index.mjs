/*!
 * exif-offset-time-regex | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/exif-offset-time-regex
*/
export default /^(?<sign>[+-])(?<hours>(?:0\d)|(?:(?:(?<=\+)1[0-4])|(?:1[0-2]))):(?<minutes>(?:(?<!(?:(?:\+14)|(?:-12)):)(?:(?:[03]0)|(?:[14]5)))|(?:00))$/u;
