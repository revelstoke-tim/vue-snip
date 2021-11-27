import { elementLines } from '../../instrumented/element/element.lines'
import { getInserted } from '../../instrumented/directive'
import { getSnipText } from '../../instrumented/element/element.snip'
import { defaultOptions } from '../../instrumented/defaultOptions'

describe('Directive Inserted', () => {
  beforeEach(() => {
    cy.visit('./cypress/tests/directive.html')
  })

  it('Adds the element to the map', () => {
    cy.get('[data-cy=paragraph]').then(([paragraph]) => {
      const elementMap = new WeakMap()
      const state = { elementMap, options: defaultOptions }

      const snipText = getSnipText(state)
      const inserted = getInserted(state, snipText)

      inserted(paragraph, { value: 3, arg: 'css' })

      expect(elementMap.has(paragraph)).to.equal(true)
    })
  })

  describe('Snips the element', () => {
    it('With CSS method', () => {
      cy.get('[data-cy=paragraph]').then(([paragraph]) => {
        const elementMap = new WeakMap()
        const state = { elementMap, options: defaultOptions }

        const snipText = getSnipText(state)
        const inserted = getInserted(state, snipText)

        inserted(paragraph, { value: 3, arg: 'css' })

        expect(elementLines(paragraph)).equal(3)
      })
    })

    // it('With JS method', () => {
    //   cy.get('[data-cy=paragraph]').then(([paragraph]) => {
    //     const elementMap = new WeakMap()
    //     const state = { elementMap, options: defaultOptions }
    //
    //     const snipText = getSnipText(state)
    //     const inserted = getInserted(state, snipText)
    //     elementMap.set(paragraph, { fullText: paragraph.textContent })
    //
    //     inserted(paragraph, { value: 3, arg: 'js' })
    //
    //     expect(elementLines(paragraph)).equal(3)
    //   })
    // })
  })
})
