module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#icon}} id icon {{/icon}}
  var bolder = 
  '<svg class="icon icon-'+options.fn(this)+'"><use xlink:href="images/sprite.svg#'+options.fn(this)+'"></use></svg>'
  return bolder;
}