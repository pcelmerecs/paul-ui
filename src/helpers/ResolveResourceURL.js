'use strict'

module.exports = (spec, { data, hash: context }) => {
  if (!spec) return
  const { contentCatalog, page } = data.root
  if (page.component) {
    context = Object.assign({ component: page.component.name, version: page.version, module: page.module }, context)
  }
  const file = contentCatalog.resolveResourceUrl(spec, context, 'page', ['page', 'attachment', 'image'])
  if (file) return file.pub.url
}