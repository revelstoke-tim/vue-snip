import { getLines } from 'js-snip'
import { getSnipText } from '../../instrumented/element/element.snip'
import { getUpdate } from '../../instrumented/directive'
import { defaultOptions } from '../../instrumented/defaultOptions'
import { destroyObserver } from '../../instrumented/utils'

describe('Directive Update', () => {
  beforeEach(() => {
    cy.visit('./cypress/tests/paragraph-single.html')
  })

  it('Updates the map record of the element', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]

      const elementMap = new WeakMap()
      const state = { elementMap, options: defaultOptions }

      const snipText = getSnipText(state)
      const update = getUpdate(state, snipText)
      elementMap.set(paragraph, {})

      update(paragraph, { value: 3, arg: 'js' })

      expect(elementMap.get(paragraph).maxLines).to.equal(3)
      expect(elementMap.get(paragraph).snipMethod).to.equal('js')

      update(paragraph, { value: 2, arg: 'css' })

      expect(elementMap.get(paragraph).maxLines).to.equal(2)
      expect(elementMap.get(paragraph).snipMethod).to.equal('css')
    })
  })

  it('Snips the element', () => {
    cy.get('[data-cy=paragraph]').then(($paragraph) => {
      const paragraph = $paragraph.get()[0]

      const elementMap = new WeakMap()
      const state = { elementMap, options: defaultOptions }

      const snipText = getSnipText(state)
      const update = getUpdate(state, snipText)
      elementMap.set(paragraph, { fullText: paragraph.textContent })

      update(paragraph, { value: 3, arg: 'js' })
      expect(getLines(paragraph)).equal(3)

      update(paragraph, { value: 4, arg: 'css' })
      expect(getLines(paragraph)).equal(4)

      update(paragraph, { value: 4, arg: 'css' })
      expect(getLines(paragraph)).equal(4)

      update(paragraph, { value: 4, arg: 'js' })
      expect(getLines(paragraph)).equal(4)

      destroyObserver(state, paragraph)
    })
  })
})
