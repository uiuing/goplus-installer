import { readdirSync } from 'fs'
import { existsSync } from 'next/dist/lib/find-pages-dir'

import { ingopPathsArray } from '../common/config'
import { initDirs, removeDirs } from '../common/files'

export function __test__initDirs(): [string, string[]][] {
  initDirs(ingopPathsArray)
  return ingopPathsArray.map((dir) =>
    existsSync(dir) ? [dir, readdirSync(dir)] : [dir, []]
  )
}
export function __test__removeDirs(): [string, string[]][] {
  removeDirs(ingopPathsArray)
  return ingopPathsArray.map((dir) =>
    existsSync(dir) ? [dir, readdirSync(dir)] : [dir, []]
  )
}

console.info(
  'Files function [initDirs] test document structure',
  __test__initDirs()
)

console.info(
  'Files function [removeDirs] test document structure',
  __test__removeDirs()
)
