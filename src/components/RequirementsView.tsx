import { CLASS_LIST } from '../consts'
import { Class } from '../types'

export default function RequirementsView({
  selectedClass, setSelectedClass
}: {
  selectedClass: Class,
  setSelectedClass: (state) => void,
}) {

  return (
    <div>
      <h2>{selectedClass} Minimum Requirements</h2>
      {Object.entries(CLASS_LIST[selectedClass]).map(([attr, value]) => {
        return (
          <div key={attr}>
            {attr}: {value}
          </div>
        )
      })}
      <button onClick={() => setSelectedClass(null)}>Close Requirement View</button>
    </div>
  )
}
