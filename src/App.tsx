import { useEffect, useState } from 'react'
import './App.css'
import { Attributes, Class } from './types'
import AttributesView from './components/AttributesView'
import ClassesView from './components/ClassesView'
import RequirementsView from './components/RequirementsView'
import SkillsView from './components/SkillsView'

function App() {
  const [attributes, setAttributes] = useState<Attributes>({
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
  })
  const [modifiers, setModifiers] = useState<Attributes>({
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
  })
  const [selectedClass, setSelectedClass] = useState<Class|null>()

  useEffect(() => {
    calculateModifiers()
  }, [attributes])

  function calculateModifiers() {
    const modifiersCopy = {...modifiers}
    for (const [attr, value] of Object.entries(attributes)) {
      modifiersCopy[attr] = Math.floor((value - 10) / 2)
    }
    setModifiers(modifiersCopy)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div className="App-grid">
          <AttributesView
            attributes={attributes}
            setAttributes={setAttributes}
            modifiers={modifiers}
          />
          <ClassesView
            attributes={attributes}
            setSelectedClass={setSelectedClass}
          />
          {selectedClass &&
            <RequirementsView
              selectedClass={selectedClass}
              setSelectedClass={setSelectedClass}
            />
          }
          <SkillsView modifiers={modifiers} />
        </div>
      </section>
    </div>
  );
}

export default App;
