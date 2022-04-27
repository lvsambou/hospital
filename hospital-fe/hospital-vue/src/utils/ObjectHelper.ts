const renameField = (field: string, name: string, obj: Record<string, unknown>) => {
  obj[name] = obj[field]
  delete obj[field]
}

export default {
  renameField
}
