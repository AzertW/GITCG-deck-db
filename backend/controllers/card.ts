import express from 'express'
import { actionCards, characterCards, convertActionCard, convertCharacterCard } from 'utils/cards_util'

const cardRouter = express.Router()

cardRouter.get("/characters", (_req, res) => {
    res.send(characterCards.map(character => convertCharacterCard(character)))
})

cardRouter.get("/actions", (_req, res) => {
    res.send(actionCards.map(action => convertActionCard(action)))
})

export default cardRouter