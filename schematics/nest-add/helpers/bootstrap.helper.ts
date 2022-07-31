import { apply, Rule, SchematicContext, template, Tree, mergeWith, url } from '@angular-devkit/schematics'
import { strings } from '@angular-devkit/core'
import { Schema } from '../schema'

export function copyBootstrap(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const objImportStatements = createImportOptions(options)

    const sourceTemplate = url('./files')
    const sourceParameterizedTemplate = apply(sourceTemplate, [
      template({
        ...objImportStatements,
        ...strings,
      }),
    ])

    return mergeWith(sourceParameterizedTemplate)(tree, context)
  }
}

function createImportOptions(options: Schema) {
  if (options.isEsModuleInteropEnabled) {
    return {
      express: `import express from 'express'`,
      compression: `import compression from 'compression'`,
    }
  }

  return {
    express: `import * as express from 'express'`,
    compression: `import * as compression from 'compression'`,
  }
}
