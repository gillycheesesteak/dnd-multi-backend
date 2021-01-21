import type {usePreviewState, PreviewProps, PreviewState} from '../packages/react-dnd-preview'

const preview = jest.createMockFromModule<Record<string, unknown>>('react-dnd-preview')

const state: PreviewState = {
  ref: {},
  itemType: 'abc',
  item: 'abc',
  style: {},
  monitor: {},
}

const Preview = (props: PreviewProps): JSX.Element | null => {
  if ('children' in props) {
    return null
  }
  return props.generator(state)
}

export const usePreview = (): usePreviewState => {
  return {
    display: true,
    ...state,
  }
}

module.exports = {
  ...preview,
  Preview,
  usePreview,
}
