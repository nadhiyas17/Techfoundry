const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const DATA_DIR = path.join(__dirname, '..', 'data')
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
const OUT_FILE = path.join(DATA_DIR, 'applications.json')

app.post('/api/apply', (req, res) => {
  const payload = req.body
  if (!payload || !payload.name || !payload.email) {
    return res.status(400).json({ error: 'name and email required' })
  }
  const now = new Date().toISOString()
  const record = { receivedAt: now, ...payload }
  let arr = []
  if (fs.existsSync(OUT_FILE)) {
    try { arr = JSON.parse(fs.readFileSync(OUT_FILE)) } catch (e) { arr = [] }
  }
  arr.push(record)
  fs.writeFileSync(OUT_FILE, JSON.stringify(arr, null, 2))
  console.log('New application received:', record)
  res.json({ ok: true })
})

const PAYMENTS_FILE = path.join(DATA_DIR, 'payments.json')

app.post('/api/pay-fee', (req, res) => {
  const payload = req.body
  if (!payload || !payload.name || !payload.number || !payload.transactionId) {
    return res.status(400).json({ error: 'Name, mobile number, and Transaction ID are required' })
  }
  const now = new Date().toISOString()
  const record = { receivedAt: now, ...payload }
  let arr = []
  if (fs.existsSync(PAYMENTS_FILE)) {
    try { arr = JSON.parse(fs.readFileSync(PAYMENTS_FILE)) } catch (e) { arr = [] }
  }
  arr.push(record)
  fs.writeFileSync(PAYMENTS_FILE, JSON.stringify(arr, null, 2))
  console.log('New payment submission received:', record)
  res.json({ ok: true, receiptNo: record.receiptNo })
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))
