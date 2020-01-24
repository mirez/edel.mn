exports.linkResolver = function linkResolver(doc) {
  if (doc.type === "post") {
    return "/blog/" + doc.uid
  }
  if (doc.type === "project") {
    return "/project/" + doc.uid
  }
  if (doc.type === "page") {
    return "/" + doc.uid
  }
  return "/"
}
