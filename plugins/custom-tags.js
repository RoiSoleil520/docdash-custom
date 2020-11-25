exports.defineTags = function(dictionary) {
  dictionary.defineTag('category', {
    mustHaveValue: true,
    canHaveType: false,
    canHaveName: true,
    onTagged: function(doclet, tag) {
      doclet.category = doclet.category || []
      doclet.category = tag.text
    }
  })
  dictionary.defineTag('chinese', {
    mustHaveValue: true,
    canHaveType: false,
    canHaveName: true,
    onTagged: function(doclet, tag) {
      doclet.chinese = doclet.chinese || []
      doclet.chinese = tag.text
    }
  })
}
