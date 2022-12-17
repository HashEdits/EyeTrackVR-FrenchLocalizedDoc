import * as fs from '@tauri-apps/api/fs'
import * as os from '@tauri-apps/api/os'
import * as tauriPath from '@tauri-apps/api/path'
import { currentMonitor, getCurrent } from '@tauri-apps/api/window'
import { useEffect } from 'react'
import packageJson from '../../../package.json'
import tauriConfJson from '../../../src-tauri/tauri.conf.json'

declare global {
  interface Window {
    __TAURI__?: unknown
  }
}

export const VERSION = packageJson.version
export const APP_NAME = tauriConfJson.package.productName
const EXTS = new Set(['.json'])
export const RUNNING_IN_TAURI = window.__TAURI__ !== undefined

/**
 * @description
 * # trueTypeOf()
 * A function that returns the true type of the object passed to it.
 * @param {unknown} obj
 * []              -> array
 * {}              -> object
 * ''              -> string
 * new Date()      -> date
 * 1               -> number
 * function () {}  -> function
 * /test/i         -> regexp
 * true            -> boolean
 * null            -> null
 * trueTypeOf()    -> undefined
 * @returns {string}
 *
 * @example
 * ```tsx
 * import { trueTypeOf } from 'utils'
 * return (
 * <div>
 *    {trueTypeOf([])} // array
 * </div>
 * )
 * ```
 */
export function trueTypeOf(obj: unknown): string {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

const MinWidthAction = (minWidth: number) => {
  useEffect(() => {
    async function resizeWindow() {
      // to set a size consistently accrosss devices,
      //  one must use LogicalSize (Physical cannot be relied upon)
      const physicalSize = await getCurrent().innerSize()
      // Since innerSize returns Physical size, we need
      //   to get the current monitor scale factor
      //   to convert the physical size into a logical size
      const monitor = await currentMonitor()
      if (monitor === null) throw new Error('Monitor is null')
      const scaleFactor = monitor.scaleFactor
      const logicalSize = physicalSize.toLogical(scaleFactor)
      if (logicalSize.width < minWidth) {
        logicalSize.width = minWidth
        await getCurrent().setSize(logicalSize)
      }
    }
    resizeWindow().catch(console.error)
  }, [minWidth]) // [] to ensure on first render
}

export const useMinWidth = (minWidth: number) => {
  if (RUNNING_IN_TAURI) {
    MinWidthAction(minWidth)
  }
}

function* flattenFiles(entries: fs.FileEntry[]) {
  for (const entry of entries) {
    entry.children === null ? yield entry.path : yield* fileSaveFiles(entry.children)
  }
}

// const getExtensionTests = ['/.test/.ext', './asdf.mz', '/asdf/qwer.maz', 'asdf.mm', 'sdf/qwer.ww', './.asdf.mz', '/asdf/.qwer.maz', '.asdf.mm', 'sdf/.qwer.ww', './asdf', '/adsf/qwer', 'asdf', 'sdf/qewr', './.asdf', '/adsf/.qwer', '.asdf', 'sdf/.qewr']

function getExtension(path: string) {
  // Modified from https://stackoverflow.com/a/12900504/7732434
  // get filename from full path that uses '\\' or '/' for seperators
  const basename = path.split(/[\\/]/).pop(),
    pos = basename?.lastIndexOf('.') ?? -1
  // if `.` is not in the basename
  if (pos < 0) return ''
  // extract extension including `.`
  return basename?.slice(pos)
}

export const getUserAppFiles = async () => {
  // returns an array of files from $DOCUMENT/$APP_NAME/* with extension that is in EXTS
  //  implying that the app (tauri-plugin-store) can parse the files
  // returns [] if $DOCUMENT/$APP_NAME is a file
  const documents = await tauriPath.documentDir()
  const saveFiles: object[] = []
  await fs.createDir(APP_NAME, { dir: fs.BaseDirectory.Document, recursive: true })
  const entries = await fs.readDir(APP_NAME, { dir: fs.BaseDirectory.AppData, recursive: true })
  if (entries !== null) {
    const osType = await os.type()
    const sep = osType === 'Windows_NT' ? '\\' : '/'
    const appFolder = `${documents}${sep}${APP_NAME}`
    for (const { path } of flattenFiles(entries)) {
      const friendlyName = path.substring(appFolder.length + 1, path.length)
      const ext = getExtension(path) ?? ''
      if (EXTS.has(ext.toLowerCase())) saveFiles.push({ path, friendlyName })
    }
  }
  return saveFiles
}
