import { useEffect, useState } from 'react'
import { SKILL_LIST } from '../consts'
import { Attributes } from '../types'

export default function SkillsView({
  modifiers
}: {
  modifiers: Attributes
}) {
  const [skills, setSkills] = useState(SKILL_LIST.map(skill => {
    return { ...skill, points: 0 }
  }))
  const [skillPointsAvailable, setSkillPointsAvailable] = useState(10)
  const [skillPointsAllocated, setSkillPointsAllocated] = useState(0)

  useEffect(() => {
    calculateSkillPoints()
  }, [modifiers])

  function calculateSkillPoints() {
    const points = 10 + (4 * modifiers.Intelligence)
    if (points < 0)
      setSkillPointsAvailable(0)
    else
      setSkillPointsAvailable(points)
  }

  function modifySkill(index, value) {
    if (skills[index].points + value < 0)
      return
    const skillsCopy = JSON.parse(JSON.stringify(skills))
    skillsCopy[index].points += value
    setSkills(skillsCopy)
    setSkillPointsAllocated(skillPointsAllocated + value)
  }

  return (
    <div>
      <h2>Skills</h2>
      <p>Total skill points available: {skillPointsAvailable - skillPointsAllocated}</p>
      {skills.map((skill, index) => {
        const modifierPoints = modifiers[skill.attributeModifier]
        return (
          <div key={skill.name}>
            {skill.name}: {skill.points} (Modifier: {skill.attributeModifier}): {modifierPoints}
            <button onClick={() => modifySkill(index, 1)}>+</button>
            <button onClick={() => modifySkill(index, -1)}>-</button>
            total: {skill.points + modifierPoints}
          </div>
        )
      })}
    </div>
  )
}
