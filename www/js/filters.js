angular.module('starter.filters', []).
  filter('htmlToPlaintext', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }
)

.filter('stripStyles', function() {
  return function(str) {
    return str.replace(/style=['"].*["']/, '');
  }
});