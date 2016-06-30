import UrlDispatcher from "../dispatchers/url-dispatcher"
import wailConstants from "../constants/wail-constants"
import child_process from "child_process"
import settings from '../settings/settings'
import rp from 'request-promise'
import { remote } from 'electron'

const EventTypes = wailConstants.EventTypes
const logger = remote.getGlobal('logger')
const logString = "archive-url-actions %s "
const logStringError = "archive-url-actions error where[ %s ], stack[ %s ]"

export function checkUriIsInArchive (uri) {
  return new Promise((resolve, reject) => {
    rp({ uri: `${settings.get('wayback.uri_wayback')}/*/${uri}` })
      .then(response => {
        // POST succeeded...
        resolve({ inArchive: true, uri: uri })

      })
      .catch(err => {
        console.log('error in querying wayback', err)
        logger.log('error', logStringError, "checkUriIsInArchive", err.stack)
        resolve({ inArchive: false, uri: uri })
      })

  })
}

export function getMementos (url) {
  UrlDispatcher.dispatch({
    type: EventTypes.GET_MEMENTO_COUNT,
    url: url,
  })
}

export function urlUpdated (url) {
  UrlDispatcher.dispatch({
    type: EventTypes.HAS_VAILD_URI,
    url: url
  })
}

export async function askMemgator (url) {
  console.log('askingMemegator')
  child_process.exec(`${settings.get('memgatorQuery')} ${url}`, (err, stdout, stderr) => {
    if (err) {
      logger.log('error', logStringError, "askMemgator", err.stack)
    }
    let mementoCount = (stdout.match(/memento/g) || []).length
    UrlDispatcher.dispatch({
      type: EventTypes.GOT_MEMENTO_COUNT,
      mementos: mementoCount
    })
  })
}

