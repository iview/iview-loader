const originLoader = require('../src/loader')

const baseLoaderContext = {
  cacheable: () => { },
}
const normalLoader = originLoader.bind({
  ...baseLoaderContext,
  query: '?prefix=false',
})

const prefixLoader = originLoader.bind({
  ...baseLoaderContext,
  query: '?prefix=true',
})

test('替换该替换的标签', () => {
  expect(normalLoader('<Circle></Circle>')).toBe('<i-circle></i-circle>')
  expect(prefixLoader('<i-table></i-table>')).toBe('<Table></Table>')
})

test('不替换该不替换的标签', () => {
  expect(normalLoader('<CircleLoading></CircleLoading>')).toBe('<CircleLoading></CircleLoading>')
  expect(prefixLoader('<i-table-header></i-table-header>')).toBe('<i-table-header></i-table-header>')
})