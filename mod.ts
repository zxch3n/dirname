import type { IMakeLoc } from './types.ts'
import { join } from 'https://deno.land/std@0.105.0/path/mod.ts'

// make a __dirname object
export default function (meta: ImportMeta): IMakeLoc {
  const 
    iURL = meta.url,
    fileStartRegex = /(^(file:)((\/\/)?))/,
    __dirname = join(iURL, '../')
                  .replace(fileStartRegex, '')
                  .replace(/(\/$)/, ''),
    __filename = iURL.replace(fileStartRegex, '')

  return { __dirname, __filename }
}
