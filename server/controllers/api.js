import express from 'express'
const router = express.Router()

import Route from '../models/route'
import Stop from '../models/stop'

/** Returns all the bus routes */
router.get('/routes', async function getHandler (req, res) {
  const query = {}
  const projection = { '_id': false, '__v': false }
  const options = { lean: true }
  try {
    const result = await Route.find(query, projection, options)
    res.json(result)
  } catch (err) {
    const error = {
      message: 'Error querying DB for the list of routes',
      _error: err
    }
    res.json(error)
  }
})

/** Return bus route based of the route number */
router.get('/routes/:id', async function getHandler (req, res) {
  const query = { 'ID': req.params.id }
  const projection = { '_id': false, '__v': false }
  const options = { lean: true }
  try {
    const result = await Route.findOne(query, projection, options)
    res.json(result)
  } catch (err) {
    const error = {
      message: 'Error querying DB for the route you asked for',
      _error: err
    }
    res.json(error)
  }
})

/** Initial Data Fetching */
router.get('/all_stops', async function getHandler (req, res) {
  const query = {}
  const projection = { '_id': false, '__v': false }
  const options = { lean: true }
  try {
    const result = await Stop.find(query, projection, options)
    res.json(result)
  } catch (err) {
    const error = {
      message: 'Error pulling in all the stops from mongoDB',
      _error: err
    }
    res.json(error)
  }
})

export default router
