import { get } from "lodash"

export function hasPrismicData(props, key) {
  const data = get(props, `data.prismic.${key}`, undefined)
  return [data !== undefined && data !== null, data]
}

export function hasGatsbyData(props, key) {
  const data = get(props, `data.${key}`, undefined)
  return [data !== undefined && data !== null, data]
}
