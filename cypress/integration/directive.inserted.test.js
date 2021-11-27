import { getInserted } from '../../instrumented/directive'
import { defaultOptions } from '../../instrumented/defaultOptions'

describe('Directive Inserted', () => {
  beforeEach(() => {
    cy.visit('./cypress/tests/directive.html')
  })

  it('Adds the element to the map', () => {
    cy.get('[data-cy=paragraph]').then(([paragraph]) => {
      const elementMap = new WeakMap()
      const state = { elementMap, options: defaultOptions }

      const snipText = cy.stub()
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

        const snipText = cy.stub()
        const inserted = getInserted(state, snipText)

        inserted(paragraph, { value: 3, arg: 'css' })
        expect(snipText).to.have.callCount(1)
        expect(snipText).to.be.calledWith(paragraph)
      })
    })

    it('With JS method', () => {
      cy.get('[data-cy=paragraph]').then(([paragraph]) => {
        const elementMap = new WeakMap()
        const state = { elementMap, options: defaultOptions }

        const snipText = cy.stub()
        const inserted = getInserted(state, snipText)
        elementMap.set(paragraph, { fullText: paragraph.textContent })

        inserted(paragraph, { value: 3, arg: 'js' })

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20).then(() => {
          expect(snipText).to.have.callCount(1)
          expect(snipText).to.be.calledWith(paragraph)
        })
      })
    })
  })
})
