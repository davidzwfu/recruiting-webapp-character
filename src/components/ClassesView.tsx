import { ATTRIBUTE_LIST, CLASS_LIST } from '../consts'
import { Attributes, Class } from '../types'

export default function ClassesView({
  attributes, setSelectedClass
}: {
  attributes: Attributes,
  setSelectedClass: (state) => void,
}) {
  function checkMinimumRequirements(cl: Class) {
    for (const attr of ATTRIBUTE_LIST) {
      if (attributes[attr] < CLASS_LIST[cl][attr])
        return false
    }
    return true
  }

  return (
    <div>
      <h2>Classes</h2>
      {Object.keys(CLASS_LIST).map((cl: Class) => {
        return (
          <div key={cl} className="clickable"
            style={checkMinimumRequirements(cl) ? { color: 'green' } : {}}
            onClick={() => setSelectedClass(cl)}
          >
            {cl}
          </div>
        )
      })}
    </div>
  )
}
