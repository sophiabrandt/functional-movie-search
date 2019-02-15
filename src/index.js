import initModel from './Model'
import update from './Update'
import view from './View'
import app from './App'
import './main.css'
import tachyons from 'tachyons'

const node = document.getElementById('app')

app(initModel, update, view, node)
