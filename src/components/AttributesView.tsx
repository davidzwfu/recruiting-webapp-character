import { Attributes } from '../types'

export default function AttributesView({
  attributes, setAttributes, modifiers
}: {
  attributes: Attributes,
  setAttributes: (state) => void,
  modifiers: Attributes,
}) {
  function modifyAttribute(attribute, value) {
    setAttributes({
      ...attributes,
      [attribute]: attributes[attribute] + value
    })
  }

  return (
    <div>
      <h2>Attributes</h2>
      {Object.entries(attributes).map(([attr, value]) => {
        return (
          <div key={attr}>
            {attr}: {value} (Modifier: {modifiers[attr]})
            <button onClick={() => modifyAttribute(attr, 1)}>+</button>
            <button onClick={() => modifyAttribute(attr, -1)}>-</button>
          </div>
        )
      })}
    </div>
  )
}
